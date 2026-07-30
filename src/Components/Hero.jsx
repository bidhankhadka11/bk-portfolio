// ASCII banner shown above the name (rendered in a <pre>).
// The leading newline is stripped: unlike the HTML parser, React renders it.
const banner = String.raw`
 ██████╗ ██╗██████╗ ██╗  ██╗ █████╗ ███╗   ██╗
 ██╔══██╗██║██╔══██╗██║  ██║██╔══██╗████╗  ██║
 ██████╔╝██║██║  ██║███████║███████║██╔██╗ ██║
 ██╔══██╗██║██║  ██║██╔══██║██╔══██║██║╚██╗██║
 ██████╔╝██║██████╔╝██║  ██║██║  ██║██║ ╚████║
 ╚═════╝ ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝`.replace(/^\n/, '')

export default function Hero({ profile }) {
  const linkEntries = [
    ['github', profile.links?.github],
    ['linkedin', profile.links?.linkedin],
    ['twitter', profile.links?.twitter],
  ].filter(([, href]) => href)

  return (
    <header id="home" className="hero">
      <div className="container">
        <div className="hero-row">
          <div className="hero-main">
            <div className="prompt-line">
              <span className="u">bidhan@uta</span>:<span className="h">~</span>$ <span className="cmd">whoami --verbose</span>
            </div>
            <div className="hero-output">
              <pre className="ascii" aria-hidden="true">{banner}</pre>
              <h1>
                <span className="glow">{profile.fullName || profile.name}</span>
                <span className="cursor" aria-hidden="true"></span>
              </h1>
              <p>
                {profile.summary.map((part, i) =>
                  part.hl ? <span className="hl" key={i}>{part.text}</span> : part.text
                )}
              </p>
              <div className="kv-block">
                <div className="kv"><b>location:</b> {profile.location}</div>
                <div className="kv"><b>status:</b>&nbsp;&nbsp; open_to_internships=true</div>
                <div className="kv"><b>stack:</b>&nbsp;&nbsp;&nbsp; [Python, Java, JavaScript, C++, React, Node.js, Flask, MongoDB, Docker, GCP]</div>
                {linkEntries.length > 0 && (
                  <div className="kv">
                    <b>links:</b>&nbsp;&nbsp;&nbsp;{' '}
                    {linkEntries.map(([label, href], i) => (
                      <span key={label}>
                        {i > 0 && ' · '}
                        <a className="glow" href={href} target="_blank" rel="noreferrer">{label}</a>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="cta-row">
              <a className="btn" href="#projects">./view_projects.sh</a>
              <a className="btn secondary" href="#contact">./contact_me.sh</a>
            </div>
          </div>

          {/* Portrait — phosphor render that develops into color on hover */}
          <div className="shot">
            <div className="shot-frame">
              <img src="/assets/Headshot_half_body.png" alt="Bidhan Khadka" />
            </div>
            <div className="cap">portrait.raw — phosphor render (hover to develop)</div>
          </div>
        </div>
      </div>
    </header>
  )
}
