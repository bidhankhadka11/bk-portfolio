export default function ExperienceCard({ role, org, location, dates, bullets = [] }) {
  return (
    <article className="card">
      <div className="row">
        <div className="role">{role} — {org}</div>
        <div className="meta">{location} • {dates}</div>
        <ul>
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </article>
  )
}
