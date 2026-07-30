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
  // Each project drives both the grid card (desc, img) and the tmux-split
  // detail window (sub, long, features, images). `images[].win` is the tmux
  // window name shown in the status bar; `cap` is the caption line.
  projects: [
    {
      name: "StudyMate",
      slug: "studymate",
      stack: ["FastAPI", "LangChain", "pgvector", "React 19"],
      desc: "A retrieval augmented study assistant over your own PDFs. Answers are grounded in retrieved chunks and cited to filename and page, and questions the corpus can't answer get a refusal, not a hallucination.",
      sub: "RAG study assistant",
      long: [
        "Upload your coursework PDFs and ask questions. Documents are chunked into per-document pgvector collections, so queries can be scoped to any subset — and every answer is grounded in retrieved text and cited back to filename and page.",
        "Questions the corpus doesn't answer return an honest refusal instead of a hallucination.",
      ],
      features: [
        "Grounded Q&A — every claim cited to filename, page N",
        "\"Explain like I'm a beginner\" mode",
        "Flashcards with a flip-card review UI",
        "LLM-graded quizzes with partial credit",
        "RAG made a 634-page book ~240× cheaper to query",
        "Eval: 52 hand-verified questions, recall@6 = 0.92",
      ],
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/StudyMate" }],
      img: "/assets/studymate.png",
      images: [
        { win: "chat", src: "/assets/studymate.png", cap: "grounded answers with per-page citations" },
        { win: "explain", src: "/assets/studymate-explain.png", cap: "beginner mode — analogy-driven, still grounded" },
        { win: "flashcards", src: "/assets/studymate-flashcards.png", cap: "generated from the document, click to flip" },
        { win: "quiz", src: "/assets/studymate-quiz.png", cap: "LLM-graded with partial credit + explanations" },
      ],
    },
    {
      name: "Production LangGraph API",
      slug: "langgraph-api",
      stack: ["FastAPI", "LangGraph", "Docker", "LangSmith"],
      desc: "A production grade LLM chat API. A single POST /chat endpoint wrapped in prompt-injection blocking, PII masking, response caching, rate limiting, and cross-provider model fallback. 61 tests at 100% coverage.",
      sub: "production LLM service · live on Render",
      long: [
        "What it takes to run a language-model service in production. Every request flows: security check → cache lookup → LangGraph agent → output validation → cache store → metrics.",
      ],
      features: [
        "Prompt-injection blocking + PII masking, in and out",
        "OpenAI primary → Claude Haiku fallback",
        "TTL response cache + per-client rate limiting",
        "JSON logs, /metrics, LangSmith tracing",
        "61 tests, 100% coverage, offline FakeLLM",
        "Docker → Render, auto-deploy on push",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/bidhankhadka11/langgraph-api" },
        { label: "Live API", href: "https://langgraph-api-dkzi.onrender.com/docs" },
      ],
      img: "/assets/langgraph-api.png",
      images: [{ win: "docs", src: "/assets/langgraph-api.png", cap: "Swagger UI of the live deployed API" }],
    },
    {
      name: "Rarify",
      slug: "rarify",
      stack: ["Kotlin", "Compose", "Material 3", "SQLite"],
      desc: "A native Android marketplace for buying and selling rare collectibles, where a single account switches between buyer, seller, and admin roles. Built with Jetpack Compose and Material 3, with admin moderation and persisted themes.",
      sub: "native Android marketplace",
      long: [
        "A native Android marketplace for rare collectibles where one account switches between buyer, seller, and admin roles. Jetpack Compose + Material 3, with admin moderation and persisted themes.",
      ],
      features: [
        "Buyer / seller / admin role switching",
        "Admin moderation of listings",
        "Persisted Material 3 themes",
        "SQLite persistence",
      ],
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/rarify-marketplace" }],
      img: "/assets/rarify.png",
      images: [{ win: "home", src: "/assets/rarify.png", cap: "marketplace home" }],
    },
    {
      name: "Software Defect Classifier",
      slug: "defect-classifier",
      stack: ["Python", "sklearn", "pandas", "RF-200"],
      desc: "A Kaggle binary-classification project that predicts whether a C code module contains a defect from its complexity metrics. Class-balanced Random Forest + RobustScaler; ~0.79 ROC-AUC on the validation split.",
      sub: "Kaggle binary classification",
      long: [
        "Predicts whether a C module contains a defect from complexity metrics. Class-balanced 200-tree Random Forest + RobustScaler; ~0.79 ROC-AUC on validation.",
      ],
      features: [
        "Class-balanced RF (200 trees)",
        "RobustScaler preprocessing",
        "~0.79 ROC-AUC",
      ],
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/binaryclassification" }],
      img: "/assets/binaryclassification.png",
      images: [{ win: "notebook", src: "/assets/binaryclassification.png", cap: "feature exploration" }],
    },
    {
      name: "FitJournal",
      slug: "fitjournal",
      stack: ["React", "Node", "Express", "MongoDB"],
      desc: "A full-stack MERN fitness tracker for logging workouts by exercise, reps, and weight. Complete CRUD over a REST API with global state via React Context and Hooks, backed by MongoDB + Mongoose.",
      sub: "full-stack MERN tracker",
      long: [
        "A MERN fitness tracker for logging workouts by exercise, reps, and weight. Full CRUD over a REST API, global state via Context + Hooks, MongoDB + Mongoose.",
      ],
      features: [
        "Full CRUD REST API",
        "Context + Hooks state",
        "MongoDB + Mongoose",
      ],
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/Workout-Buddy" }/*, {label: "LiveDemo", href: ""}*/],
      img: "/assets/fitjournal.png",
      images: [{ win: "log", src: "/assets/fitjournal.png", cap: "workout log" }],
    },
    {
      name: "PersonaAI",
      slug: "persona-ai",
      stack: ["React", "Express", "Gemini API"],
      desc: "A conversational AI chatbot powered by Google's Gemini API with selectable personalities like Neko, Shadow, and Sloth. React frontend → Express /chat endpoint; real-time replies with full conversation history.",
      sub: "conversational AI chatbot",
      long: [
        "A Gemini-powered chatbot with selectable personalities — Neko, Shadow, Sloth. React frontend → Express /chat endpoint; real-time replies with full history.",
      ],
      features: [
        "Personality system prompts",
        "React → Express /chat",
        "Full conversation history",
      ],
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/AI-Chatbot" }],
      img: "/assets/persona.png",
      images: [{ win: "chat", src: "/assets/persona.png", cap: "chat with Neko" }],
    },
    {
      name: "Genetic Algorithm",
      slug: "genetic-algorithm",
      stack: ["Java", "OOP"],
      desc: "A Java genetic algorithm that evolves a population of random character strings toward a target phrase. Elitist selection, single-point crossover, and rate-based mutation in a clean OO design.",
      sub: "evolutionary computation in Java",
      long: [
        "Evolves random character strings toward a target phrase. Elitist selection, single-point crossover, rate-based mutation in a clean OO design.",
      ],
      features: [
        "Elitist selection",
        "Single-point crossover",
        "Rate-based mutation",
      ],
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/Genetic-Algorithm" }],
      img: "/assets/genetic.png",
      images: [{ win: "run", src: "/assets/genetic.png", cap: "generations converging" }],
    },
    {
      name: "Event-Driven Game",
      slug: "flappy-swing",
      stack: ["Java", "Swing"],
      desc: "A Java Swing recreation of Flappy Bird with custom-rendered sprites and scrolling background. Swing Timer game loop, KeyListener input, real-time collision detection, live score, instant restart.",
      sub: "Java Swing game",
      long: [
        "A Swing recreation of Flappy Bird with custom sprites and scrolling background. Swing Timer loop, KeyListener input, collision detection, live score, instant restart.",
      ],
      features: [
        "Swing Timer game loop",
        "Collision detection",
        "Live score + restart",
      ],
      links: [{ label: "GitHub", href: "https://github.com/bidhankhadka11/Flappy-Bird-on-java" }],
      img: "/assets/flappy.png",
      images: [{ win: "game", src: "/assets/flappy.png", cap: "mid-flight" }],
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
