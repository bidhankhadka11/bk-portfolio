import {useState} from 'react'

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]
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
        <span className="brand" onClick={() => go('home')}>BIDHAN KHADKA</span>
        <button 
          className='hamburger' 
          aria-label='Toggle navigation' 
          aria-expanded={isNavOpen} 
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
        </button>

        <div
          className={`links ${isNavOpen ? 'active' : ''}`}
          id = "nav-links"
        >
          {items.map((x) => (
                <button key={x.id} role="menuitem" onClick={() => go(x.id)} aria-label={`Go to ${x.label}`}>
                    {x.label}
                </button>
            ))}
        </div>
        
      </div>
    </nav>
  )
}
