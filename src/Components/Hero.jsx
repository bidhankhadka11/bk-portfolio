export default function Hero({ profile }) {
  return (
    <header id="home" className="hero section">
      <div className="container">
        <h1>Hi, I’m {profile.name}</h1>
        <p>{profile.summary}</p>
        <div className="cta" style={{ marginTop: 14 }}>
          <a className="btn" href="#projects">See Projects</a>
          <a className="btn secondary" href="#contact">Contact Me</a>
        </div>

        <div className="languages">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  )
}
