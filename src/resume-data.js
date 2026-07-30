const resume = {
  profile: {
    name: "<Bidhan>",
    fullName: "Bidhan Khadka",
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
      twitter: "https://x.com/bidhan___",
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
      dates: "2024-05 → present",
      bullets: [
        "Led weekly Pre-Calculus sessions for 16–20 students; boosted scores by 10–15%.",
        "Created 30+ lesson plans and problem sets for 50+ students overall.",
        "Used data (attendance, performance, feedback) to improve instruction.",
      ],
    },
    {
      role: "Project Development Manager",
      org: "SCAI at UTA",
      location: "Arlington, TX",
      dates: "2025-06 → present",
      bullets: [
        "Directed project pipeline: idea intake, documentation, progress tracking.",
        "Defined deadlines/milestones, monitored status, facilitated delivery.",
        "Delegated tasks and coordinated members to keep participation steady.",
      ],
    },
  ],
  projects: [
    {
      name: "StudyMate",
      slug: "studymate",
      stack: ["FastAPI", "LangChain", "pgvector", "React 19"],
      desc: "A retrieval augmented study assistant over your own PDFs. Answers are grounded in retrieved chunks and cited to filename and page, and questions the corpus can't answer get a refusal, not a hallucination.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/StudyMate" }],
      img: "/assets/studymate.png",
    },
    {
      name: "Production LangGraph API",
      slug: "langgraph-api",
      stack: ["FastAPI", "LangGraph", "Docker", "LangSmith"],
      desc: "A production grade LLM chat API. A single POST /chat endpoint wrapped in prompt-injection blocking, PII masking, response caching, rate limiting, and cross-provider model fallback. 61 tests at 100% coverage.",
      links: [
        { label: "GitHub", href: "https://github.com/bidhankhadka11/langgraph-api" },
        { label: "Live API", href: "https://langgraph-api-dkzi.onrender.com/docs" },
      ],
      img: "/assets/langgraph-api.png",
    },
    {
      name: "Rarify",
      slug: "rarify",
      stack: ["Kotlin", "Compose", "Material 3", "SQLite"],
      desc: "A native Android marketplace for buying and selling rare collectibles, where a single account switches between buyer, seller, and admin roles. Built with Jetpack Compose and Material 3, with admin moderation and persisted themes.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/rarify-marketplace" }],
      img: "/assets/rarify.png",
    },
    {
      name: "Software Defect Classifier",
      slug: "defect-classifier",
      stack: ["Python", "sklearn", "pandas", "RF-200"],
      desc: "A Kaggle binary-classification project that predicts whether a C code module contains a defect from its complexity metrics. Class-balanced Random Forest + RobustScaler; ~0.79 ROC-AUC on the validation split.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/binaryclassification" }],
      img: "/assets/binaryclassification.png",
    },
    {
      name: "FitJournal",
      slug: "fitjournal",
      stack: ["React", "Node", "Express", "MongoDB"],
      desc: "A full-stack MERN fitness tracker for logging workouts by exercise, reps, and weight. Complete CRUD over a REST API with global state via React Context and Hooks, backed by MongoDB + Mongoose.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/Workout-Buddy" }/*, {label: "LiveDemo", href: ""}*/],
      img: "/assets/fitjournal.png",
    },
    {
      name: "PersonaAI",
      slug: "persona-ai",
      stack: ["React", "Express", "Gemini API"],
      desc: "A conversational AI chatbot powered by Google's Gemini API with selectable personalities like Neko, Shadow, and Sloth. React frontend → Express /chat endpoint; real-time replies with full conversation history.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/AI-Chatbot" }],
      img: "/assets/persona.png",
    },
    {
      name: "Genetic Algorithm",
      slug: "genetic-algorithm",
      stack: ["Java", "OOP"],
      desc: "A Java genetic algorithm that evolves a population of random character strings toward a target phrase. Elitist selection, single-point crossover, and rate-based mutation in a clean OO design.",
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/Genetic-Algorithm" }],
      img: "/assets/genetic.png",
    },
    {
      name: "Event-Driven Game",
      slug: "flappy-swing",
      stack: ["Java", "Swing"],
      desc: "A Java Swing recreation of Flappy Bird with custom-rendered sprites and scrolling background. Swing Timer game loop, KeyListener input, real-time collision detection, live score, instant restart.",
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
