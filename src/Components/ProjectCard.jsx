export default function ProjectCard({ name, desc, stack = [], links = [], img}) {
  return (
    <article className="card">
      {img && <img src={img} className="project-img" />}
      <h3>{name}</h3>
      {desc && <p>{desc}</p>}
      <div>{stack.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
      {links?.length > 0 && (
        <div className="links">
          {links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
      )}
    </article>
  )
}
