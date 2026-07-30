import React from 'react'

export default function Contact({ email, links = {} }) {
  const [status, setStatus] = React.useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    const subject = data.subject || `Portfolio contact from ${data.name}`
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(data.message + '\n\nFrom: ' + data.name + ' <' + data.email + '>')}`
    window.location.href = mailto
    setStatus('opened')
    form.reset()
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="sec-cmd">
          <span className="u">bidhan@uta</span>:<span className="h">~/portfolio</span>$ <span className="cmd">./contact_me.sh --interactive</span>
        </div>
        <div className="contact-box">
          <p className="out">
            Opening secure channel... always happy to discuss <span className="hl">new projects</span>, <span className="hl">internships</span>, or just tech.<br />
            Direct line: <a className="glow" href={`mailto:${email}`}>{email}</a>
          </p>
          <form onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="c-name">name&nbsp;&nbsp;&nbsp;&gt;</label>
              <input id="c-name" name="name" placeholder="_" required />
            </div>
            <div className="field">
              <label htmlFor="c-email">email&nbsp;&nbsp;&gt;</label>
              <input id="c-email" name="email" type="email" placeholder="_" required />
            </div>
            <div className="field">
              <label htmlFor="c-subject">subject&gt;</label>
              <input id="c-subject" name="subject" placeholder="_" />
            </div>
            <div className="field">
              <label htmlFor="c-message">message&gt;</label>
              <textarea id="c-message" name="message" rows="4" placeholder="_" required />
            </div>
            <button className="send-btn" type="submit">[ transmit ]</button>
          </form>
          {status === 'opened' && <small className="status"># opening your email client…</small>}
        </div>
      </div>
    </section>
  )
}
