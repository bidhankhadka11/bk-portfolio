import { useState } from 'react'
import { FiHome, FiFolder, FiBriefcase, FiMail } from 'react-icons/fi'

const items = [
  { id: 'home', label: 'Home', icon: <FiHome /> },
  { id: 'projects', label: 'Projects', icon: <FiFolder /> },
  { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
  { id: 'contact', label: 'Contact', icon: <FiMail /> },
]

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const go = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsNavOpen(false)
    }
  }
  return (
    <nav className="nav" aria-label="Primary">
      <div className="menu" role="menubar">
        <button type="button" className="brand" onClick={() => window.location.reload()}>BIDHAN KHADKA</button>
        <button
          type="button"
          className='hamburger'
          aria-label='Toggle navigation'
          aria-expanded={isNavOpen}
          aria-controls='nav-links'
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
        </button>

        <div
          className={`links ${isNavOpen ? 'active' : ''}`}
          id="nav-links"
        >
          {items.map((x) => (
            <button key={x.id} role="menuitem" onClick={() => go(x.id)} aria-label={`Go to ${x.label}`}>
              <span className="nav-icon" aria-hidden="true">{x.icon}</span>
              {x.label}
            </button>
          ))}
        </div>

        <div
          className={`nav-backdrop ${isNavOpen ? 'active' : ''}`}
          onClick={() => setIsNavOpen(false)}
          aria-hidden="true"
        />

      </div>
    </nav>
  )
}
