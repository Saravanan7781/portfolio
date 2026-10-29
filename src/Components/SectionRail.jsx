import React, { useEffect, useState } from 'react'

// A vertical "layer" indicator on the right edge: one node per section, the active one fires.
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

function SectionRail() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // a section counts as current while it crosses the middle of the screen
      { rootMargin: '-45% 0px -45% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sectionRail" aria-label="Page sections">
      <ol>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? 'railActive' : ''}
              aria-label={label}
              aria-current={active === id ? 'true' : undefined}
            >
              <span className="railLabel">{label}</span>
              <span className="railNode" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default SectionRail
