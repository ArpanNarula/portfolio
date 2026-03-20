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
  backendContributions: string[];
  keyFeatures: string[];
  techStack: string[];
  focusAreas: string[];
  architecture: string[];
  accent: AccentSet;
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
    value: "5 projects on the site",
  },
  {
    title: "Work I enjoy",
    value: "Web apps, APIs, dashboards, and useful tools",
  },
  {
    title: "Looking for",
    value: "Software roles where I can keep building",
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
      "StockPilot AI helps businesses track inventory, spot deadstock, and make better restocking decisions using analytics and forecasting.",
    liveUrl:
      "https://stockpilot-ai-4ytqeyja8gw56sbxrwko4y.streamlit.app",
    githubUrl: "https://github.com/ArpanNarula/StockPilot-AI",
    backendContributions: [
      "Built APIs with Node.js and Express.js for inventory tracking, analytics, and forecasting flows.",
      "Designed MongoDB models for users, products, SKU-level stock data, and forecast results.",
      "Added processing pipelines for deadstock detection and restock recommendations.",
      "Integrated Gemini to generate product insights and summaries inside the app.",
      "Connected backend services with dashboards for real-time business visibility.",
    ],
    keyFeatures: [
      "Real-time inventory tracking",
      "Forecasting and restock suggestions",
      "Deadstock and SKU analytics",
      "Business dashboards and insights",
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
    title: "SupportOps Assistant",
    label: "Support Ticketing Platform",
    description:
      "SupportOps Assistant is a support management tool for engineering teams to handle tickets, recurring issues, and debugging workflows in one place.",
    liveUrl: "https://supportops-assistant.vercel.app/",
    githubUrl: "https://github.com/ArpanNarula/SupportOps-Assistant",
    backendContributions: [
      "Built APIs for ticket creation, updates, status changes, severity, and ownership.",
      "Designed MongoDB collections for ticket data, issue history, and performance metrics.",
      "Added logic for spotting recurring issues and surfacing useful support insights.",
      "Integrated external AI tools for root-cause suggestions during debugging.",
      "Created analytics endpoints used by dashboards to track support performance.",
    ],
    keyFeatures: [
      "Ticket lifecycle management",
      "Assignment and prioritization flows",
      "Support analytics dashboards",
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
      "CourtIQ is a legal research platform where users can upload documents, search through them, and get relevant case insights faster.",
    liveUrl: "https://judicial-ease.vercel.app",
    githubUrl: "https://github.com/ArpanNarula/CourtIQ",
    backendContributions: [
      "Built APIs for document upload, processing, and search.",
      "Handled metadata and indexing so legal content could be retrieved more efficiently.",
      "Added summarization workflows to pull useful insights from large documents.",
      "Connected the search interface with backend processing services and stored results.",
    ],
    keyFeatures: [
      "Document upload and processing",
      "Search across legal content",
      "Document summaries",
      "Faster research workflow",
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
      "Finio is more of a UI and product design project, focused on budgeting flows, dashboards, and a clean finance experience for younger users.",
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
      "A smaller ML side project that predicts sentiment for movie reviews and was useful for experimenting with NLP and model deployment.",
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
    "Worked on both frontend and backend tasks, handled database changes, fixed bugs, and shipped product updates across ongoing client work.",
  highlights: [
    "Built and updated features using PHP and MySQL.",
    "Handled bug fixes, UI improvements, and backend changes together.",
    "Worked on day-to-day product updates in a fast-moving team setup.",
  ],
};
