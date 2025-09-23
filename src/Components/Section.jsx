export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
