export default function Hero({ profile }) {
  return (
    <header id="home" className="hero section">
      <div className="container">
        <h1>Hi, I’m {profile.name}.</h1>
        <p>{profile.summary}</p>
        <div className="kv">
          <span>{profile.location}</span> • <a href={`mailto:${profile.email}`}>{profile.email}</a> •{' '}
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> •{' '}
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="cta" style={{ marginTop: 14 }}>
          <a className="btn" href="#projects">See Projects</a>
          <a className="btn secondary" href="#contact">Contact Me</a>
        </div>
      </div>
    </header>
  )
}
