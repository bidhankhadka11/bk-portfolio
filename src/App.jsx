// Import your components (this fixes react/jsx-no-undef)
import Nav from './Components/Nav.jsx'
import Hero from './Components/Hero.jsx'
import Section from './Components/Section.jsx'
import ProjectCard from './Components/ProjectCard.jsx'
import ExperienceCard from './Components/ExperienceCard.jsx'
import Contact from './Components/Contact.jsx'

// Resume data as a module
import resume from './resume-data.js'

const { profile, projects, experience, skills } = resume

export default function App() {
  return (
    <>
      <Nav />
      <Hero profile={profile} />

      <Section id="projects" title="Projects" subtitle="Some things I’ve built and shipped." className="projects">
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Where I have worked so far" className="exp">
        <div className="grid">
          {experience.map((e, i) => (
            <ExperienceCard key={i} {...e} />
          ))}
        </div>
      </Section>


      {/* <Section id="education" title="Education">
        {education.map((ed, i) => (
          <article key={i} className="card" style={{ marginBottom: 12 }}>
            <strong>{ed.school}</strong> — {ed.degree}{' '}
            <span style={{ color: 'var(--muted)' }}>• {ed.dates}</span>
            <div style={{ marginTop: 8 }}>
              {ed.notes.map((n) => (
                <span className="tag" key={n}>
                  {n}
                </span>
              ))}
            </div>
          </article>
        ))}
      </Section> */}

      <Section id="skills" title="Technical Skills" className="skills">
        <div className="card">
          <div className="list">
            {[...(skills.languages || []), ...(skills.frameworks || []), ...(skills.tools || []), ...(skills.libraries || [])].map((s) => (
              <span className="tag" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Contact email={profile.email} />

      
    </>
  )
}
