import { useState } from 'react'

const items = [
  { id: 'home', label: 'home' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
]

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)
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
        <div className="dots" aria-hidden="true"><i></i><i></i><i></i></div>
        <button type="button" className="path" onClick={() => go('home')}>
          <b>bidhan@uta</b>:~/portfolio
        </button>

        <button
          type="button"
          className="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={isNavOpen}
          aria-controls="nav-links"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`links ${isNavOpen ? 'active' : ''}`} id="nav-links">
          {items.map((x) => (
            <button key={x.id} role="menuitem" onClick={() => go(x.id)} aria-label={`Go to ${x.label}`}>
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
