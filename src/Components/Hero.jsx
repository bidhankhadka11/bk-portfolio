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

        {/* LANGUAGES  */}
        <div className="languages">
          <div className="lang-card">
            <img src="/assets/python.png" alt="Python"/>
            <span>Python</span>
          </div>
          <div className="lang-card">
            <img src="/assets/js.png" alt="JavaScript"/>
            <span>JavaScript</span>
          </div>
          <div className="lang-card">
            <img src="/assets/java.png" alt="Java"/>
            <span>Java</span>
          </div>
          <div className="lang-card">
            <img src="/assets/c-.png" alt="C++"/>
            <span>C++</span>
          </div>
        </div>
      </div>
    </header>
  )
}
