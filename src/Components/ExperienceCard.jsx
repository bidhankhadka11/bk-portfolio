export default function ExperienceCard({ role, org, dates, location, bullets = [] }) {
  return (
    <article className="card exp-card">
      <div className="exp-main">
        <h3 className="exp-role">{role}</h3>
        <div className="exp-org">{org}</div>
        {bullets.length > 0 && <p className="exp-desc">{bullets.join(' ')}</p>}
      </div>
      <div className="exp-meta">
        {dates && (
          <span>
            <CalendarIcon />
            {dates}
          </span>
        )}
        {location && (
          <span>
            <PinIcon />
            {location}
          </span>
        )}
      </div>
    </article>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
