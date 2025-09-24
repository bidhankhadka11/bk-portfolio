export default function Nav() {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]
  const go = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <nav className="nav" aria-label="Primary">
      <div className="menu" role="menubar">
        <span className="brand">BIDHAN KHADKA</span>
        <div className="links">
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
