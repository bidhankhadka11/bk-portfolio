export default function ExperienceCard({ role, org, location, dates, bullets = [] }) {
  return (
    <article className="card">
      <div className="row">
        <div className="role">{role}</div>
        <div className="org">{org}</div>
        <div className="meta">{dates}</div>
        <ul className="list">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </article>
  )
}
