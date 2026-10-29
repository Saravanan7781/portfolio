import React, { useEffect, useRef } from 'react'

// A fixed full-page neural network drawn on a canvas behind the whole site:
// - nodes drift slowly and shift with the scroll at different depths (parallax)
// - nearby nodes are joined by faint edges
// - signals travel along edges, and a node that receives one "fires" and may pass it on
// - nodes near the cursor light up and connect to it
// colours come from the active theme (--net-ink-rgb and --accent-rgb in Neural.css)
let INK = [18, 38, 58]
let ACCENT = [242, 107, 33]
const LINK = 175 // max distance for an edge
const MOUSE_RADIUS = 170
const PAD = LINK // nodes live slightly off-screen so wrapping is never visible
const MAX_PULSES = 26

const rgba = ([r, g, b], a) => `rgba(${r},${g},${b},${a})`
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t))
const mod = (n, m) => ((n % m) + m) % m

function NeuralBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let nodes = []
    let pulses = []
    let pos = [] // display positions, rebuilt every frame
    let neighbors = []
    let raf = 0
    let last = performance.now()
    let sinceSpawn = 0
    const mouse = { x: -9999, y: -9999, active: false }

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(130, Math.max(30, Math.round((w * h) / 11000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * (w + 2 * PAD) - PAD,
        y: Math.random() * (h + 2 * PAD),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        depth: 0.4 + Math.random() * 0.6,
        r: 1.3 + Math.random() * 1.7,
        glow: 0,
      }))
      pos = nodes.map(() => ({ x: 0, y: 0 }))
      neighbors = nodes.map(() => [])
      pulses = []
    }

    const spawn = (from, gen = 0) => {
      const options = neighbors[from]
      if (!options.length || pulses.length >= MAX_PULSES) return
      const to = options[Math.floor(Math.random() * options.length)]
      pulses.push({ a: from, b: to, p: 0, speed: 0.0011 + Math.random() * 0.0008, gen })
    }

    const draw = (now) => {
      const dt = Math.min(50, now - last)
      last = now
      const W = w + 2 * PAD
      const H = h + 2 * PAD
      const scroll = window.scrollY

      ctx.clearRect(0, 0, w, h)

      // move nodes and work out where they appear on screen
      nodes.forEach((n, i) => {
        if (!reduceMotion) {
          n.x += (n.vx * dt) / 16
          n.y += (n.vy * dt) / 16
        }
        if (n.x < -PAD) n.x += W
        if (n.x > w + PAD) n.x -= W
        n.y = mod(n.y, H)

        let x = n.x
        let y = mod(n.y - scroll * n.depth * 0.25, H) - PAD

        // nodes lean gently towards the cursor
        if (mouse.active) {
          const dx = mouse.x - x
          const dy = mouse.y - y
          const d = Math.hypot(dx, dy)
          if (d < MOUSE_RADIUS) {
            const pull = (1 - d / MOUSE_RADIUS) * 14
            x += (dx / (d || 1)) * pull
            y += (dy / (d || 1)) * pull
            n.glow = Math.max(n.glow, (1 - d / MOUSE_RADIUS) * 0.75)
          }
        }
        pos[i].x = x
        pos[i].y = y
        n.glow *= 0.95
        neighbors[i].length = 0
      })

      // edges
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = pos[i].x - pos[j].x
          const dy = pos[i].y - pos[j].y
          const d2 = dx * dx + dy * dy
          if (d2 > LINK * LINK) continue
          const closeness = 1 - Math.sqrt(d2) / LINK
          neighbors[i].push(j)
          neighbors[j].push(i)
          const lit = Math.max(nodes[i].glow, nodes[j].glow)
          ctx.strokeStyle = lit > 0.05
            ? rgba(mix(INK, ACCENT, Math.min(1, lit * 1.4)), 0.12 + closeness * 0.18 + lit * 0.25)
            : rgba(INK, closeness * 0.2 * ((nodes[i].depth + nodes[j].depth) / 2 + 0.3))
          ctx.beginPath()
          ctx.moveTo(pos[i].x, pos[i].y)
          ctx.lineTo(pos[j].x, pos[j].y)
          ctx.stroke()
        }
      }

      // cursor links
      if (mouse.active) {
        for (let i = 0; i < nodes.length; i++) {
          const d = Math.hypot(pos[i].x - mouse.x, pos[i].y - mouse.y)
          if (d > MOUSE_RADIUS) continue
          ctx.strokeStyle = rgba(ACCENT, (1 - d / MOUSE_RADIUS) * 0.5)
          ctx.beginPath()
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(pos[i].x, pos[i].y)
          ctx.stroke()
        }
        ctx.strokeStyle = rgba(ACCENT, 0.55)
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2)
        ctx.stroke()
      }

      // signals travelling along edges
      if (!reduceMotion) {
        sinceSpawn += dt
        if (sinceSpawn > 420) {
          sinceSpawn = 0
          spawn(Math.floor(Math.random() * nodes.length))
        }
        pulses = pulses.filter((pulse) => {
          const a = pos[pulse.a]
          const b = pos[pulse.b]
          if (Math.hypot(a.x - b.x, a.y - b.y) > LINK * 1.15) return false // edge broke as nodes drifted apart
          pulse.p += pulse.speed * dt
          if (pulse.p >= 1) {
            nodes[pulse.b].glow = 1
            // the node fires: pass the signal on, with fading odds
            if (pulse.gen < 3 && Math.random() < 0.7) {
              const onward = neighbors[pulse.b].filter((k) => k !== pulse.a)
              if (onward.length && pulses.length < MAX_PULSES) {
                pulses.push({
                  a: pulse.b,
                  b: onward[Math.floor(Math.random() * onward.length)],
                  p: 0,
                  speed: pulse.speed,
                  gen: pulse.gen + 1,
                })
              }
            }
            return false
          }
          const x = a.x + (b.x - a.x) * pulse.p
          const y = a.y + (b.y - a.y) * pulse.p
          const tail = Math.max(0, pulse.p - 0.2)
          ctx.strokeStyle = rgba(ACCENT, 0.55)
          ctx.lineWidth = 1.6
          ctx.beginPath()
          ctx.moveTo(a.x + (b.x - a.x) * tail, a.y + (b.y - a.y) * tail)
          ctx.lineTo(x, y)
          ctx.stroke()
          ctx.lineWidth = 1
          ctx.fillStyle = rgba(ACCENT, 0.16)
          ctx.beginPath()
          ctx.arc(x, y, 7, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = rgba(ACCENT, 0.95)
          ctx.beginPath()
          ctx.arc(x, y, 2.2, 0, Math.PI * 2)
          ctx.fill()
          return true
        })
      }

      // nodes on top
      nodes.forEach((n, i) => {
        const { x, y } = pos[i]
        if (n.glow > 0.03) {
          ctx.fillStyle = rgba(ACCENT, n.glow * 0.18)
          ctx.beginPath()
          ctx.arc(x, y, n.r + n.glow * 9, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.fillStyle = rgba(mix(INK, ACCENT, Math.min(1, n.glow * 1.3)), 0.32 + n.depth * 0.3 + n.glow * 0.4)
        ctx.beginPath()
        ctx.arc(x, y, n.r + n.glow * 1.5, 0, Math.PI * 2)
        ctx.fill()
      })

      if (!reduceMotion) raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    const onLeave = () => { mouse.active = false }
    let resizeTimer = 0
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        build()
        if (reduceMotion) draw(performance.now())
      }, 150)
    }

    const readColors = () => {
      const style = getComputedStyle(document.documentElement)
      const parse = (name, fallback) => {
        const parts = style.getPropertyValue(name).split(',').map((v) => Number(v.trim()))
        return parts.length === 3 && parts.every(Number.isFinite) ? parts : fallback
      }
      INK = parse('--net-ink-rgb', INK)
      ACCENT = parse('--accent-rgb', ACCENT)
    }

    readColors()
    build()
    draw(performance.now())
    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    window.addEventListener('resize', onResize)
    if (reduceMotion) window.addEventListener('scroll', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(resizeTimer)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="neuralCanvas" aria-hidden="true" />
}

export default NeuralBackground
