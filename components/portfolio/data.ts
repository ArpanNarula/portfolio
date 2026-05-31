export type AccentSet = {
  border: string;
  preview: string;
  glow: string;
  pill: string;
};

export type FeaturedProject = {
  title: string;
  label: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  extraLinks?: Array<{
    label: string;
    url: string;
  }>;
  backendContributions: string[];
  keyFeatures: string[];
  techStack: string[];
  focusAreas: string[];
  architecture: string[];
  accent: AccentSet;
  note?: string;
  featured?: boolean;
};

export type OtherProject = {
  title: string;
  label: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  techStack: string[];
  accent: AccentSet;
};

export type SkillGroup = {
  title: string;
  subtitle: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  highlights: string[];
};

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroRoles = [
  "Software Developer",
  "Full Stack Developer",
  "Product Builder",
];

export const heroHighlights = [
  "React + Next.js",
  "Python + SQL",
  "APIs + Data",
  "ML + GenAI",
];

export const proofPoints = [
  {
    title: "Projects",
    value: "6 selected projects",
  },
  {
    title: "Work I enjoy",
    value: "Web apps, APIs, dashboards, and product work",
  },
  {
    title: "Looking for",
    value: "Software roles with room to build and ship",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    subtitle: "Main stack",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Python",
      "Tailwind CSS",
    ],
  },
  {
    title: "Data & Backend",
    subtitle: "Systems and analysis",
    items: [
      "MongoDB",
      "SQL",
      "Pandas",
      "NumPy",
      "Firebase",
      "REST APIs",
    ],
  },
  {
    title: "AI & Tools",
    subtitle: "Applied work",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "GenAI",
      "RAG",
    ],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "StockPilot AI",
    label: "Inventory Forecasting Platform",
    description:
      "StockPilot AI helps teams track inventory, spot deadstock, and make sharper restocking decisions.",
    liveUrl:
      "https://stockpilot-ai-4ytqeyja8gw56sbxrwko4y.streamlit.app",
    githubUrl: "https://github.com/ArpanNarula/StockPilot-AI",
    backendContributions: [
      "Built Node.js and Express APIs for inventory, analytics, and forecasting flows.",
      "Designed MongoDB models for users, products, SKU-level stock, and forecast output.",
      "Added pipelines for deadstock detection and restock suggestions.",
      "Integrated Gemini for product insights and summaries.",
      "Connected backend services to live dashboards.",
    ],
    keyFeatures: [
      "Real-time inventory tracking",
      "Forecasting and restock planning",
      "Deadstock and SKU analytics",
      "Business dashboards",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "REST APIs",
      "Gemini API",
    ],
    focusAreas: ["Inventory", "Forecasting", "Analytics"],
    architecture: [
      "Dashboard",
      "API Layer",
      "Forecast Logic",
      "MongoDB",
    ],
    accent: {
      border:
        "linear-gradient(135deg, rgba(217,119,6,0.5), rgba(34,197,94,0.24), rgba(148,163,184,0.3))",
      preview:
        "radial-gradient(circle at top left, rgba(217,119,6,0.2), transparent 38%), linear-gradient(140deg, rgba(18,18,16,0.98), rgba(24,32,25,0.9))",
      glow: "rgba(217, 119, 6, 0.16)",
      pill: "rgba(217, 119, 6, 0.11)",
    },
    featured: true,
  },
  {
    title: "EvalForge AI",
    label: "LLM Evaluation & Feedback Engine",
    description:
      "EvalForge AI simulates how AI systems improve response quality through evaluation, ranking, retrieval, and feedback loops.",
    liveUrl: "https://evalforge-ai-frontend.vercel.app/",
    githubUrl: "https://github.com/ArpanNarula/EvalForge-AI-",
    extraLinks: [
      {
        label: "Backend API",
        url: "https://evalforge-ai-api.vercel.app",
      },
    ],
    backendContributions: [
      "Built a pipeline that generates, evaluates, ranks, and selects responses.",
      "Added rule-based, simulated embedding, and judge-style scoring.",
      "Implemented feedback logic that updates ranking weight over time.",
      "Stored stronger responses for later retrieval.",
      "Split the app into a Next.js frontend and FastAPI backend.",
    ],
    keyFeatures: [
      "Multi-response generation",
      "Score breakdowns",
      "Response ranking",
      "Feedback and retrieval loop",
    ],
    techStack: [
      "Next.js",
      "React",
      "FastAPI",
      "Python",
      "Recharts",
      "Vercel",
      "Pytest",
    ],
    focusAreas: ["Evaluation", "Ranking", "Feedback"],
    architecture: [
      "Prompt",
      "Generate",
      "Evaluate",
      "Rank",
      "Feedback",
      "Improve",
    ],
    note:
      "Prototype: generation and evaluation are simulated to show the workflow clearly.",
    accent: {
      border:
        "linear-gradient(135deg, rgba(34,197,94,0.46), rgba(217,119,6,0.22), rgba(148,163,184,0.28))",
      preview:
        "radial-gradient(circle at top left, rgba(34,197,94,0.18), transparent 40%), linear-gradient(140deg, rgba(15,18,16,0.98), rgba(24,27,22,0.92))",
      glow: "rgba(34, 197, 94, 0.14)",
      pill: "rgba(34, 197, 94, 0.1)",
    },
  },
  {
    title: "SupportOps Assistant",
    label: "Support Ticketing Platform",
    description:
      "SupportOps Assistant helps engineering teams manage tickets, recurring issues, and debugging workflows in one place.",
    liveUrl: "https://supportops-assistant.vercel.app/",
    githubUrl: "https://github.com/ArpanNarula/SupportOps-Assistant",
    backendContributions: [
      "Built APIs for ticket creation, updates, status, severity, and ownership.",
      "Designed MongoDB collections for tickets, issue history, and performance metrics.",
      "Added logic for spotting recurring issues and surfacing support insights.",
      "Integrated AI tools for root-cause suggestions.",
      "Created analytics endpoints for support dashboards.",
    ],
    keyFeatures: [
      "Ticket lifecycle management",
      "Assignment and prioritization",
      "Support analytics",
      "AI-assisted debugging suggestions",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Claude API",
    ],
    focusAreas: ["Support", "Tickets", "Analytics"],
    architecture: [
      "Support UI",
      "Ticket APIs",
      "Insight Logic",
      "MongoDB",
    ],
    accent: {
      border:
        "linear-gradient(135deg, rgba(120,113,108,0.5), rgba(34,197,94,0.22), rgba(217,119,6,0.26))",
      preview:
        "radial-gradient(circle at top left, rgba(120,113,108,0.22), transparent 38%), linear-gradient(140deg, rgba(15,15,14,0.98), rgba(27,29,24,0.92))",
      glow: "rgba(120, 113, 108, 0.16)",
      pill: "rgba(120, 113, 108, 0.12)",
    },
  },
  {
    title: "CourtIQ",
    label: "Legal Research Platform",
    description:
      "CourtIQ is a legal research tool for uploading documents, searching content, and finding case insights faster.",
    liveUrl: "https://judicial-ease.vercel.app",
    githubUrl: "https://github.com/ArpanNarula/CourtIQ",
    backendContributions: [
      "Built APIs for document upload, processing, and search.",
      "Handled metadata and indexing for faster retrieval.",
      "Added summarization workflows for large documents.",
      "Connected the search interface with backend processing and storage.",
    ],
    keyFeatures: [
      "Document upload and processing",
      "Legal content search",
      "Document summaries",
      "Faster research flow",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "Firebase",
      "REST API",
      "AI Workflows",
    ],
    focusAreas: ["Documents", "Search", "Summaries"],
    architecture: [
      "Upload UI",
      "Processing APIs",
      "Search Logic",
      "Firebase",
    ],
    accent: {
      border:
        "linear-gradient(135deg, rgba(217,119,6,0.42), rgba(120,113,108,0.3), rgba(34,197,94,0.22))",
      preview:
        "radial-gradient(circle at top left, rgba(217,119,6,0.16), transparent 42%), linear-gradient(140deg, rgba(18,17,15,0.98), rgba(29,26,21,0.92))",
      glow: "rgba(217, 119, 6, 0.14)",
      pill: "rgba(217, 119, 6, 0.1)",
    },
  },
];

export const otherProjects: OtherProject[] = [
  {
    title: "Finio",
    label: "Personal Finance App",
    description:
      "Finio is a UI-focused finance app built around budgeting flows, dashboards, and a cleaner experience for younger users.",
    liveUrl: "https://finio-gamma.vercel.app/",
    githubUrl: "https://github.com/ArpanNarula/Finio",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "Figma"],
    accent: {
      border:
        "linear-gradient(135deg, rgba(34,197,94,0.4), rgba(217,119,6,0.18), rgba(148,163,184,0.24))",
      preview:
        "radial-gradient(circle at top left, rgba(34,197,94,0.16), transparent 42%), linear-gradient(140deg, rgba(14,18,16,0.96), rgba(24,29,23,0.9))",
      glow: "rgba(34, 197, 94, 0.13)",
      pill: "rgba(34, 197, 94, 0.09)",
    },
  },
  {
    title: "IMDB Sentiment Analysis",
    label: "Movie Review Sentiment App",
    description:
      "A smaller ML project for predicting movie review sentiment and exploring NLP deployment.",
    liveUrl:
      "https://huggingface.co/spaces/Ravi1227/movie-sentiment-analysis",
    githubUrl:
      "https://github.com/ravi1215/IMDBMovie-review-sentiment-analysis",
    techStack: ["Python", "TensorFlow", "NLP", "Hugging Face"],
    accent: {
      border:
        "linear-gradient(135deg, rgba(148,163,184,0.38), rgba(120,113,108,0.26), rgba(217,119,6,0.18))",
      preview:
        "radial-gradient(circle at top left, rgba(148,163,184,0.18), transparent 40%), linear-gradient(140deg, rgba(15,15,15,0.95), rgba(24,23,21,0.88))",
      glow: "rgba(148, 163, 184, 0.12)",
      pill: "rgba(148, 163, 184, 0.1)",
    },
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Apprentice Data Scientist",
    company: "MicroGCC",
    employmentType: "Apprenticeship",
    period: "May 2026 - Present",
    location: "Remote - Bangalore, India office",
    summary:
      "Selected for MicroGCC's Technology Innovation & Partnerships Apprenticeship Program. Working remotely on applied machine learning, data science, GenAI, analytics automation, AI-powered business solutions, and intelligent workflow systems.",
    responsibilities: [
      "Develop and evaluate machine learning solutions for prediction, classification, and business intelligence use cases.",
      "Build data analysis and automation workflows using Python, SQL, Pandas, and modern data science tools.",
      "Work on GenAI applications, RAG pipelines, vector databases, prompt engineering, and AI-powered assistants.",
      "Contribute to AI agent and workflow automation initiatives for operational efficiency and decision support.",
      "Generate actionable business insights from structured and unstructured data.",
      "Collaborate with product, business, and engineering teams to solve real-world problems using AI and data.",
    ],
    technologies: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Machine Learning",
      "Data Analytics",
      "GenAI",
      "RAG",
      "Vector Databases",
      "AI Agents",
      "Prompt Engineering",
    ],
    highlights: [
      "Selected for a competitive 1-year Data Science apprenticeship program with FTE conversion opportunity based on performance.",
      "Working on production-oriented AI, analytics, and automation projects with real business impact.",
      "Remote-first role with collaboration across data, AI, and business teams.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Innate Infotech",
    employmentType: "Internship",
    period: "May 2025 - July 2025",
    location: "On-site",
    summary:
      "Worked across frontend and backend tasks, handled database changes, fixed bugs, and shipped product updates for live client work.",
    responsibilities: [
      "Built and updated features using PHP and MySQL.",
      "Handled bug fixes, UI improvements, and backend changes.",
      "Shipped day-to-day product updates in a fast-moving team.",
    ],
    technologies: ["PHP", "MySQL", "Frontend", "Backend"],
    highlights: [
      "Contributed to active client work across frontend and backend tasks.",
      "Worked with database changes, bug fixes, and product updates.",
      "Built practical experience inside a fast-moving development team.",
    ],
  },
];
