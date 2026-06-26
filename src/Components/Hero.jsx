import { useRef, useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import {
  SiPython, SiOpenjdk, SiJavascript, SiCplusplus, SiHtml5, SiCss,
  SiReact, SiNodedotjs, SiFlask, SiSpringboot, SiMongodb, SiTailwindcss,
  SiMysql, SiGit, SiDocker, SiGooglecloud, SiPostman, SiNumpy, SiPandas,
} from 'react-icons/si'

// Tech stack shown in the scrolling hero marquee
const tech = [
  { name: 'Python', icon: <SiPython /> },
  { name: 'Java', icon: <SiOpenjdk /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Google Cloud', icon: <SiGooglecloud /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'NumPy', icon: <SiNumpy /> },
  { name: 'Pandas', icon: <SiPandas /> },
]

export default function Hero({ profile }) {
  const marqueeRef = useRef(null)
  const trackRef = useRef(null)

  // Typewriter effect for the hero title
  const titlePrefix = 'Hi, I’m '
  const titleName = profile.name || ''
  const fullTitle = titlePrefix + titleName
  const [typedCount, setTypedCount] = useState(0)
  const doneTyping = typedCount >= fullTitle.length

  useEffect(() => {
    // Respect users who prefer reduced motion: show it all at once
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedCount(fullTitle.length)
      return
    }
    setTypedCount(0)
    const id = setInterval(() => {
      setTypedCount((c) => {
        if (c >= fullTitle.length) { clearInterval(id); return c }
        return c + 1
      })
    }, 95)
    return () => clearInterval(id)
  }, [fullTitle])

  const shownPrefix = fullTitle.slice(0, Math.min(typedCount, titlePrefix.length))
  const shownName = typedCount > titlePrefix.length ? fullTitle.slice(titlePrefix.length, typedCount) : ''

  useEffect(() => {
    const marquee = marqueeRef.current
    const track = trackRef.current
    if (!marquee || !track) return

    const FAST = 50 // px/s when idle
    const SLOW = 10 // px/s while hovered
    const EASE = 3  // higher = quicker ramp between speeds

    let x = 0
    let speed = FAST
    let target = FAST
    // One period = distance to the matching icon in the duplicated second half,
    // so wrapping by it is perfectly seamless.
    let period = track.scrollWidth / 2
    const measure = () => {
      const half = track.children.length / 2
      if (track.children[half]) {
        period = track.children[half].offsetLeft - track.children[0].offsetLeft
      }
    }
    measure()
    x = -period

    const onEnter = () => { target = SLOW }
    const onLeave = () => { target = FAST }
    marquee.addEventListener('mouseenter', onEnter)
    marquee.addEventListener('mouseleave', onLeave)
    window.addEventListener('resize', measure)

    let raf
    let last = performance.now()
    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      speed += (target - speed) * Math.min(dt * EASE, 1) // smooth ramp
      x += speed * dt // move left -> right
      if (period > 0 && x >= 0) x -= period // seamless wrap
      track.style.transform = `translateX(${x}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame((t) => { last = t; tick(t) })

    return () => {
      cancelAnimationFrame(raf)
      marquee.removeEventListener('mouseenter', onEnter)
      marquee.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <header id="home" className="hero section">
      <div className="container">
        <h1>
          {shownPrefix}
          <em>{shownName}</em>
          <span className={`caret${doneTyping ? ' blink' : ''}`} aria-hidden="true">|</span>
        </h1>
        <p>
          {profile.summary.map((part, i) =>
            part.hl ? <span className="hl" key={i}>{part.text}</span> : part.text
          )}
        </p>
        <div className="cta" style={{ marginTop: 14 }}>
          <a className="btn" href="#projects">See Projects</a>
          <a className="btn secondary" href="#contact">Contact Me</a>
        </div>

        {/* SOCIAL LINKS  */}
        <div className="social-row">
          {profile.links?.github && (
            <a className="social-link" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          )}
          {profile.links?.linkedin && (
            <a className="social-link" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          )}
          {profile.links?.twitter && (
            <a className="social-link" href={profile.links.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter /></a>
          )}
        </div>
      </div>

      {/* SCROLLING TECH MARQUEE */}
      <div className="tech-marquee" aria-hidden="true" ref={marqueeRef}>
        <div className="tech-track" ref={trackRef}>
          {[...tech, ...tech].map((t, i) => (
            <span className="tech-icon" key={i} title={t.name}>{t.icon}</span>
          ))}
        </div>
      </div>
    </header>
  )
}
