import React from 'react'

export default function Contact({ email }) {
  const [status, setStatus] = React.useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    // If you add EmailJS (client-only), handle it here (or keep mailto only)
    const mailto = `mailto:${email}?subject=Portfolio contact from ${encodeURIComponent(
      data.name
    )}&body=${encodeURIComponent(data.message + '\n\nFrom: ' + data.email)}`
    window.location.href = mailto
    setStatus('opened')
    form.reset()
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Let's get in touch</p>
        <form onSubmit={onSubmit}>
          <div className="row">
            <input name="name" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Your email" required />
          </div>
          <textarea name="message" rows="6" placeholder="Message" required />
          <div className="row">
            <button className="btn" type="submit">Send</button>
            <a className="btn secondary" href={`mailto:${email}`}>Open mail app</a>
          </div>
          {status === 'opened' && <small>✉️ Opening your email client…</small>}
        </form>
      </div>
    </section>
  )
}
