import { useState } from 'react'

// Import your components (this fixes react/jsx-no-undef)
import Nav from './Components/Nav.jsx'
import Hero from './Components/Hero.jsx'
import Section from './Components/Section.jsx'
import ProjectCard from './Components/ProjectCard.jsx'
import ProjectModal from './Components/ProjectModal.jsx'
import ExperienceCard from './Components/ExperienceCard.jsx'
import Contact from './Components/Contact.jsx'

// Resume data as a module
import resume from './resume-data.js'

const { profile, projects, experience } = resume

export default function App() {
  // which project's tmux window is open (null = none)
  const [openProject, setOpenProject] = useState(null)

  return (
    <>
      <Nav />
      <Hero profile={profile} />

      <Section
        id="projects"
        command="ls -la ./projects/"
        note={`${projects.length} directories found — click one to attach · where I experimented, learned, and delivered`}
      >
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} onOpen={() => setOpenProject(p)} />
          ))}
        </div>
      </Section>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />

      <Section id="experience" command={`cat experience.log | tail -n ${experience.length}`}>
        <div className="log">
          {/* newest first, like a real log tail */}
          {[...experience].reverse().map((e) => (
            <ExperienceCard key={`${e.role}-${e.org}`} {...e} />
          ))}
        </div>
      </Section>

      <Contact email={profile.email} links={profile.links} />

      <footer>
        <div className="container">
          <span className="u">bidhan@uta</span>:~$ echo "© 2026 Bidhan Khadka · exit 0"<span className="blink">▊</span>
        </div>
      </footer>
    </>
  )
}
