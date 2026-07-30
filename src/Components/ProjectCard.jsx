// Fallback when a project has no explicit slug:
// "Software Defect Classifier (Kaggle)" -> "software-defect-classifier"
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\([^)]*\)/g, '')
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// GitHub links render as "github.com/<repo>"; anything else keeps its label
function linkLabel(l) {
  if (!l.href?.includes('github.com')) return l.label
  const repo = l.href.split('/').filter(Boolean).pop()
  return `github.com/${repo}`
}

export default function ProjectCard({ name, slug, desc, stack = [], links = [], img }) {
  return (
    <article className="pcard">
      <div className="bar">
        <div className="dots" aria-hidden="true"><i></i><i></i><i></i></div>
        ~/projects/{slug || slugify(name)}
      </div>
      {img && (
        <div className="pmedia">
          <img src={img} alt={name} />
        </div>
      )}
      <div className="pbody">
        <h3>{name}</h3>
        {desc && <p>{desc}</p>}
        <div className="tags">
          {stack.map((s) => <span className="tag" key={s}>{s}</span>)}
        </div>
        {links?.length > 0 && (
          <div className="plinks">
            {links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{linkLabel(l)}</a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
