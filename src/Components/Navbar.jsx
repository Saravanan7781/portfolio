import React from 'react'
import '../Styles/Navbar.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbarBrand">S.</a>
      <nav aria-label="Primary">
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
