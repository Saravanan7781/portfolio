import { useEffect } from 'react'

// Logos fly out once the avatar's centre rises above TRIGGER (a fraction of the viewport
// height) and tuck back behind it when scrolling up past that line, all while it is on screen
const TRIGGER = 0.6

function UseCatAnimation(containerRef) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const skillLogos = container.querySelectorAll('.skillLogos')
    let open = null
    let frame = 0

    const update = () => {
      frame = 0
      const { top, height } = container.getBoundingClientRect()
      const shouldOpen = top + height / 2 < window.innerHeight * TRIGGER
      if (shouldOpen === open) return
      open = shouldOpen
      skillLogos.forEach((logo, index) => {
        logo.classList.toggle(`originalPos${index + 1}`, shouldOpen)
      })
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [containerRef])
}

export default UseCatAnimation
