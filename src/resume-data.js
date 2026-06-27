const resume = {
  profile: {
    name: "<Bidhan>",
    title: "Computer Science @ UTA",
    summary: [
      { text: "I am a " },
      { text: "Computer Science student", hl: true },
      { text: " at University of Texas at Arlington with a passion for " },
      { text: "Machine Learning", hl: true },
      { text: " and " },
      { text: "Software Development", hl: true },
      { text: ". I like building web applications and learning new technologies." },
    ],
    location: "Arlington, TX",
    email: "bidhankhadka437@gmail.com",
    links: {
      linkedin: "https://linkedin.com/in/khadkabidhan",
      github: "https://github.com/bidhankhadka11",
      twitter: "https://x.com/bidhan___", // user to provide real URL
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
      org: "SCAI at UTA",
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
      name: "Rarify",
      stack: ["Kotlin", "Jetpack Compose", "Material 3", "SQLite", "DataStore"],
      desc: "A native Android marketplace for buying and selling rare collectibles, where a single account switches between buyer, seller, and admin roles. Buyers browse, search, favorite, and run a full cart-to-checkout flow while sellers create and manage listings. Built with Jetpack Compose and Material 3, with admin moderation tools and light/dark themes persisted via DataStore.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/rarify-marketplace" }],
      img: "/assets/rarify.png",
    },
    {
      name: "Software Defect Classifier (Kaggle)",
      stack: ["Python", "scikit-learn", "Random Forest", "pandas", "Matplotlib"],
      desc: "A Kaggle binary-classification project that predicts whether a C code module contains a software defect from its complexity metrics. Uses a class-balanced Random Forest (200 trees) with RobustScaler preprocessing and engineering of near-zero features to curb overfitting. Evaluated with ROC-AUC, reaching ~0.79 on the validation split.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/binaryclassification" }],
      img: "/assets/binaryclassification.png",
    },
    {
      name: "FitJournal",
      stack: ["React", "Node", "Express", "MongoDB", "Context API"],
      desc: "A full-stack MERN fitness tracker for logging workouts by exercise name, reps, and weight. Implements complete CRUD over a REST API with global state managed through React Context and Hooks instead of an external library. Backed by MongoDB and Mongoose behind a clean, responsive UI.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/Workout-Buddy" }/*, {label: "LiveDemo", href: ""}*/],
      img: "/assets/fitjournal.png",
    },
    {
      name: "PersonaAI",
      stack: ["React", "Node", "Express", "Gemini API", "CSS"],
      desc: "A conversational AI chatbot powered by Google's Gemini API with selectable personalities like Neko, Shadow, and Sloth. Built on a client–server architecture where a React frontend talks to an Express backend exposing a /chat endpoint. Delivers real-time replies with full conversation history on desktop and mobile.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/AI-Chatbot" }],
      img: "/assets/persona.png",
    },
    {
      name: "Genetic Algorithm (Target String)",
      stack: ["Java"],
      desc: "A Java genetic algorithm that evolves a population of random character strings toward a target phrase. Implements elitist selection, single-point crossover, and rate-based mutation across successive generations. Uses a clean object-oriented design (Population, Individual, GeneticAlgorithm) for clarity and scale.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/Genetic-Algorithm" }],
      img: "/assets/genetic.png",
    },
    {
      name: "Event-Driven Game",
      stack: ["Java", "Swing"],
      desc: "A Java Swing recreation of Flappy Bird with custom-rendered bird, pipes, and scrolling background. Drives continuous gameplay with a Swing Timer loop and KeyListener input for spacebar jumps. Features real-time collision detection, live score tracking, and instant restart on game over.",
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
