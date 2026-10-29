import React from 'react'
import '../Styles/Footer.css'
import { socials } from '../data/links'

function Footer() {
  return (
    <footer className="siteFooter">
      <p>&copy; {new Date().getFullYear()} Saravanan S. Built with React.</p>
      <ul>
        {socials.map(({ label, href }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
