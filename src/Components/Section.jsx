export default function Section({ id, command, note, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {command && (
          <div className="sec-cmd">
            <span className="u">bidhan@uta</span>:<span className="h">~/portfolio</span>$ <span className="cmd">{command}</span>
          </div>
        )}
        {note && <p className="sec-note">{note}</p>}
        {children}
      </div>
    </section>
  )
}
