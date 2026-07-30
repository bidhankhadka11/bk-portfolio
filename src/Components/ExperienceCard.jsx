export default function ExperienceCard({ role, org, dates, location, bullets = [] }) {
  return (
    <div className="log-entry">
      <div className="log-date">[{dates}] · {location}</div>
      <div className="log-role">{role}</div>
      <div className="log-org">@ {org}</div>
      {bullets.length > 0 && (
        <ul>
          {bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}
    </div>
  )
}
