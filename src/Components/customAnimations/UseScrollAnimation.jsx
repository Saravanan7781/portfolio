import { useEffect } from 'react'

// Adds visibleClass to the referenced element the first time it scrolls into view
function UseScrollAnimation(ref, visibleClass = 'showTheAnimationForPost') {
    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(visibleClass)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )
        observer.observe(el)

        return () => observer.disconnect()
    }, [ref, visibleClass])
}

export default UseScrollAnimation
