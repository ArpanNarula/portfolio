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
  "Node + Express",
  "MongoDB + SQL",
  "AI Integrations",
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
    subtitle: "APIs and storage",
    items: [
      "MongoDB",
      "SQL",
      "Firebase",
      "REST APIs",
      "Schema Design",
      "Authentication",
    ],
  },
  {
    title: "Tools",
    subtitle: "Everyday workflow",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "Framer Motion",
      "Figma",
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
        "linear-gradient(135deg, rgba(56,189,248,0.6), rgba(99,102,241,0.38), rgba(168,85,247,0.5))",
      preview:
        "radial-gradient(circle at top left, rgba(56,189,248,0.32), transparent 40%), linear-gradient(140deg, rgba(7,14,32,0.98), rgba(12,24,52,0.88))",
      glow: "rgba(56, 189, 248, 0.24)",
      pill: "rgba(56, 189, 248, 0.12)",
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
        "linear-gradient(135deg, rgba(59,130,246,0.58), rgba(167,139,250,0.36), rgba(45,212,191,0.38))",
      preview:
        "radial-gradient(circle at top left, rgba(96,165,250,0.32), transparent 40%), linear-gradient(140deg, rgba(7,12,30,0.98), rgba(18,18,44,0.9))",
      glow: "rgba(96, 165, 250, 0.22)",
      pill: "rgba(96, 165, 250, 0.12)",
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
        "linear-gradient(135deg, rgba(59,130,246,0.55), rgba(14,165,233,0.34), rgba(45,212,191,0.4))",
      preview:
        "radial-gradient(circle at top left, rgba(96,165,250,0.3), transparent 40%), linear-gradient(140deg, rgba(6,12,28,0.98), rgba(8,24,38,0.92))",
      glow: "rgba(96, 165, 250, 0.2)",
      pill: "rgba(59, 130, 246, 0.12)",
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
        "linear-gradient(135deg, rgba(129,140,248,0.55), rgba(99,102,241,0.34), rgba(168,85,247,0.42))",
      preview:
        "radial-gradient(circle at top left, rgba(129,140,248,0.3), transparent 42%), linear-gradient(140deg, rgba(10,10,28,0.98), rgba(24,16,46,0.92))",
      glow: "rgba(129, 140, 248, 0.2)",
      pill: "rgba(129, 140, 248, 0.13)",
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
        "linear-gradient(135deg, rgba(45,212,191,0.48), rgba(56,189,248,0.3), rgba(99,102,241,0.34))",
      preview:
        "radial-gradient(circle at top left, rgba(45,212,191,0.28), transparent 42%), linear-gradient(140deg, rgba(7,14,30,0.96), rgba(12,30,42,0.9))",
      glow: "rgba(45, 212, 191, 0.18)",
      pill: "rgba(45, 212, 191, 0.1)",
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
        "linear-gradient(135deg, rgba(148,163,184,0.44), rgba(96,165,250,0.24), rgba(99,102,241,0.28))",
      preview:
        "radial-gradient(circle at top left, rgba(148,163,184,0.22), transparent 40%), linear-gradient(140deg, rgba(9,12,24,0.95), rgba(19,22,42,0.88))",
      glow: "rgba(148, 163, 184, 0.16)",
      pill: "rgba(148, 163, 184, 0.1)",
    },
  },
];

export const experience = {
  title: "Web Developer Intern",
  company: "Innate Infotech",
  period: "May 2025 - July 2025",
  summary:
    "Worked across frontend and backend tasks, handled database changes, fixed bugs, and shipped product updates for live client work.",
  highlights: [
    "Built and updated features using PHP and MySQL.",
    "Handled bug fixes, UI improvements, and backend changes.",
    "Shipped day-to-day product updates in a fast-moving team.",
  ],
};
