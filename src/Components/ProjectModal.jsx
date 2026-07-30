import { useEffect, useState } from 'react'

// tmux-split project window (design-mockups/13-modal-tmux.html):
// screenshots in the left pane, README.md in the right, window list in the
// status bar switches pictures. Esc / ←/→ / t are handled globally while open.
export default function ProjectModal({ project, onClose }) {
  const [imgIdx, setImgIdx] = useState(0)
  const [tinted, setTinted] = useState(false)
  const [focused, setFocused] = useState('img')

  const images = project?.images ?? []
  const count = images.length

  // fresh state whenever a different project opens
  useEffect(() => {
    setImgIdx(0)
    setTinted(false)
    setFocused('img')
  }, [project])

  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') setImgIdx((i) => (i - 1 + count) % count)
      else if (e.key === 'ArrowRight') setImgIdx((i) => (i + 1) % count)
      else if (e.key === 't') setTinted((t) => !t)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, count, onClose])

  if (!project) return null

  const img = images[imgIdx]
  const step = (d) => setImgIdx((i) => (i + d + count) % count)

  return (
    <div className="pm-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="pm-tmux" role="dialog" aria-modal="true" aria-label={project.name}>
        <div className="pm-panes">

          <div
            className={`pm-pane pm-pane-img${focused === 'img' ? ' active' : ''}`}
            onClick={() => setFocused('img')}
          >
            <span className="pm-ptitle">0: feh {img.win}.png</span>
            <div className={`pm-imgwrap${tinted ? ' tinted' : ''}`}>
              <img key={imgIdx} src={img.src} alt={`${project.name} — ${img.cap}`} />
              {count > 1 && (
                <>
                  <button className="pm-nav prev" aria-label="previous screenshot"
                    onClick={(e) => { e.stopPropagation(); step(-1) }}>&lsaquo;</button>
                  <button className="pm-nav next" aria-label="next screenshot"
                    onClick={(e) => { e.stopPropagation(); step(1) }}>&rsaquo;</button>
                </>
              )}
            </div>
            <div className="pm-imgstatus">
              <span className="f">[{imgIdx + 1}/{count}]</span>
              <span className="cap">{img.cap}</span>
              <span className="tint" onClick={(e) => { e.stopPropagation(); setTinted((t) => !t) }}>
                tint: <b>{tinted ? 'on' : 'off'}</b>
              </span>
            </div>
          </div>

          <div
            className={`pm-pane pm-pane-doc${focused === 'doc' ? ' active' : ''}`}
            onClick={() => setFocused('doc')}
          >
            <span className="pm-ptitle">1: less README.md</span>
            <div className="pm-doc">
              <div className="h">NAME</div>
              <h2>{project.name}</h2>
              {project.sub && <div className="sub">{project.sub}</div>}
              <div className="h">DESCRIPTION</div>
              {(project.long ?? [project.desc]).map((t) => <p key={t}>{t}</p>)}
              {project.features?.length > 0 && (
                <>
                  <div className="h">FEATURES</div>
                  <ul>{project.features.map((f) => <li key={f}>{f}</li>)}</ul>
                </>
              )}
              <div className="h">STACK</div>
              <div className="tags">
                {project.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
              </div>
              {project.links?.length > 0 && (
                <>
                  <div className="h">LINKS</div>
                  <div className="plinks">
                    {project.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                    ))}
                  </div>
                </>
              )}
              <div className="eof">(END)</div>
            </div>
          </div>

        </div>
        <div className="pm-status">
          <span className="sess">[{project.slug}]</span>
          <div className="wins">
            {images.map((im, k) => (
              <span
                key={im.win}
                className={`win${k === imgIdx ? ' cur' : ''}`}
                onClick={(e) => { e.stopPropagation(); setImgIdx(k) }}
              >
                {k}:{im.win}{k === imgIdx ? '*' : ''}
              </span>
            ))}
          </div>
          <div className="right">
            <span className="hint">←/→ imgs · t tint · esc quit</span>
            <span className="quit" onClick={onClose}>✕ detach</span>
          </div>
        </div>
      </div>
    </div>
  )
}
