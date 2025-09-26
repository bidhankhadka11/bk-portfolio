


const resume = {
  profile: {
    name: "Bidhan",
    title: "Computer Science @ UTA",
    summary:
      "I am a Computer Science student at University of Texas at Arlington with a passion for Machine Learning and Software Development.",
    location: "Arlington, TX",
    email: "bidhankhadka437@gmail.com",
    phone: "682-583-6875",
    links: {
      linkedin: "https://linkedin.com/in/khadkabidhan",
      github: "https://github.com/bidhankhadka11",
    },
  },
  education: [
    {
      school: "University of Texas at Arlington",
      degree: "B.S. in Computer Science, Minor in Data Science",
      dates: "Aug 2023 – Present",
      notes: ["Maverick Academic Scholar", "GPA: 3.5", "Honors College"],
    },
  ],
  experience: [
    {
      role: "STEM Learning Facilitator",
      org: "University of Texas at Arlington",
      location: "Arlington, TX",
      dates: "May 2024 – Present",
      bullets: [
        "Led weekly Pre-Calculus sessions for 16–20 students; boosted scores by 10–15%.",
        "Created 30+ lesson plans and problem sets for 50+ students overall.",
        "Used data (attendance, performance, feedback) to improve instruction.",
        "Coordinated with faculty; used Google Workspace, Excel, Teams & Outlook to streamline resources.",
      ],
    },
    {
      role: "Project Development Manager",
      org: "SCAI — Students in Computing and AI",
      location: "Arlington, TX",
      dates: "June 2025 – Present",
      bullets: [
        "Directed project pipeline: idea intake, documentation, progress tracking.",
        "Defined deadlines/milestones, monitored status, facilitated delivery.",
        "Delegated tasks and coordinated members to keep participation steady.",
      ],
    },
  ],
  projects: [
    {
      name: "FitJournal",
      stack: ["React", "Node", "Express", "MongoDB", "Context API"],
      desc: "Full-stack fitness tracker with secure CRUD, responsive UI, and global state.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/Workout-Buddy" }],
      img: "/assets/fitjournal.png",
    },
    {
      name: "PersonaAI",
      stack: ["React", "Node", "Express", "Gemini API", "CSS"],
      desc: "Conversational AI with selectable personalities and modular FE/BE architecture.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/AI-Chatbot" }],
      img: "/assets/persona.png",
    },
    {
      name: "Genetic Algorithm (Target String)",
      stack: ["Java"],
      desc: "GA with selection, crossover, mutation; modular classes for clarity and scale.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/Genetic-Algorithm" }],
      img: "/assets/genetic.png",
    },
    {
      name: "Event-Driven Game",
      stack: ["Java", "Swing"],
      desc: "2D classic with collision detection, event loop, and multithreading.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/Flappy-Bird-on-java" }],
      img: "/assets/flappy.png"
    },
  ],
  skills: {
    languages: ["Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS"],
    frameworks: ["React", "Node.js", "Flask", "Spring Boot", "MongoDB", "REST APIs", "JUnit", "WordPress", "Tailwind"],
    tools: ["Git/GitHub", "Google Cloud Platform", "Docker", "VS Code", "PyCharm", "Postman", "IntelliJ", "Eclipse"],
    libraries: ["Pandas", "NumPy", "Matplotlib"],
  },
}

export default resume
