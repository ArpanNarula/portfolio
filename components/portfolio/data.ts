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
  { label: "Featured", href: "#featured-projects" },
  { label: "What I Build", href: "#what-i-build" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroRoles = [
  "Backend Developer",
  "API Engineer",
  "System Builder",
];

export const heroHighlights = [
  "REST APIs",
  "MongoDB + Firebase",
  "Analytics Pipelines",
  "AI Integrations",
];

export const proofPoints = [
  {
    title: "Featured backend systems",
    value: "3 recruiter-led projects",
  },
  {
    title: "Live products",
    value: "Inventory, legal, and support workflows",
  },
  {
    title: "Backend focus",
    value: "APIs, data modeling, and service orchestration",
  },
];

export const whatIBuild = [
  {
    title: "Scalable backend systems",
    description:
      "Backend architecture built around clean service layers, resilient request flows, and product-ready logic.",
  },
  {
    title: "REST APIs for real applications",
    description:
      "Structured endpoints for analytics, ticketing, legal search, and business-facing dashboards.",
  },
  {
    title: "Data pipelines and processing",
    description:
      "Backend workflows that transform raw data into forecasts, summaries, search results, and insights.",
  },
  {
    title: "AI-powered backend logic",
    description:
      "Application backends that coordinate external AI services without turning the product into a demo-only experience.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    subtitle: "Core delivery stack",
    items: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "Authentication (JWT)",
      "API Integration",
      "Service-Oriented Logic",
    ],
  },
  {
    title: "Database",
    subtitle: "Data design and querying",
    items: [
      "MongoDB",
      "SQL",
      "Firebase",
      "Schema Design",
      "Query Optimization",
      "Document Indexing",
    ],
  },
  {
    title: "Tools",
    subtitle: "Shipping and iteration",
    items: [
      "GitHub Actions",
      "CI/CD",
      "Vercel Deployments",
      "Python Pipelines",
      "Analytics Dashboards",
      "Debugging Workflows",
    ],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "StockPilot AI",
    label: "Inventory Forecasting & Analytics Platform",
    description:
      "StockPilot AI is a backend-driven inventory management and forecasting platform that helps businesses optimize stock levels, prevent overstocking, and avoid stockouts using real-time data and predictive analytics.",
    liveUrl:
      "https://stockpilot-ai-4ytqeyja8gw56sbxrwko4y.streamlit.app",
    githubUrl: "https://github.com/ArpanNarula/StockPilot-AI",
    backendContributions: [
      "Designed and implemented RESTful APIs using Node.js and Express.js for inventory tracking, analytics, and forecasting workflows.",
      "Developed MongoDB schema to manage users, products, SKU-level inventory data, and forecasting outputs.",
      "Built backend pipelines to process inventory data and generate insights such as deadstock detection and restock recommendations.",
      "Integrated external AI APIs (Gemini) to generate automated product insights and summaries.",
      "Handled data flow between frontend dashboards and backend services for real-time visualization.",
    ],
    keyFeatures: [
      "Real-time inventory tracking across products",
      "Demand forecasting and restock recommendations",
      "Deadstock identification and SKU performance analytics",
      "Interactive dashboards for business insights",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "REST APIs",
      "Gemini API",
    ],
    focusAreas: ["API", "Database", "AI"],
    architecture: [
      "Dashboard",
      "Express APIs",
      "Forecast Pipelines",
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
    label: "Support Engineering & Ticketing Platform",
    description:
      "SupportOps Assistant is a backend-centric support management platform designed to streamline ticket handling, issue tracking, and debugging workflows for engineering teams.",
    liveUrl: "https://supportops-assistant.vercel.app/",
    githubUrl: "https://github.com/ArpanNarula/SupportOps-Assistant",
    backendContributions: [
      "Built RESTful APIs for ticket creation, updates, and workflow management including status, severity, and ownership.",
      "Designed MongoDB schema for efficient storage and querying of ticket data and analytics.",
      "Implemented backend logic for tracking recurring issues and generating performance insights.",
      "Integrated AI-based root cause analysis using external APIs to assist in debugging.",
      "Developed analytics endpoints to power dashboards for support performance monitoring.",
    ],
    keyFeatures: [
      "Ticket lifecycle management system",
      "Issue prioritization and assignment workflows",
      "Analytics dashboards for performance tracking",
      "AI-assisted debugging and root cause suggestions",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Claude API",
    ],
    focusAreas: ["API", "Analytics", "AI"],
    architecture: [
      "Support UI",
      "Ticket APIs",
      "Insight Services",
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
    label: "AI-Powered Legal Research Platform",
    description:
      "CourtIQ is an AI-driven legal research platform that enables users to upload legal documents and retrieve relevant case insights, improving research efficiency.",
    liveUrl: "https://judicial-ease.vercel.app",
    githubUrl: "https://github.com/ArpanNarula/CourtIQ",
    backendContributions: [
      "Built backend APIs for document upload, processing, and search functionality.",
      "Managed document metadata and indexing for efficient retrieval of relevant legal content.",
      "Integrated AI-based summarization workflows to extract key insights from large legal documents.",
      "Designed data flow between frontend search interface and backend processing services.",
    ],
    keyFeatures: [
      "Document upload and processing",
      "Intelligent legal search system",
      "Automated summarization of case documents",
      "Case insight retrieval workflows",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "Firebase",
      "REST API",
      "AI Summarization",
    ],
    focusAreas: ["Upload", "Search", "AI"],
    architecture: [
      "Upload UI",
      "Processing APIs",
      "Search + Summary",
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
    label: "AI-Powered Personal Finance App",
    description:
      "UI and UX focused finance experience with budgeting, transaction tracking, and a conversational assistant for young users.",
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
    label: "ML / NLP Side Project",
    description:
      "A lightweight sentiment-analysis application kept as a supporting project to show experimentation beyond backend systems.",
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
    "Designed and optimized backend APIs and database interactions using Node.js and MySQL, improving performance and handling concurrent requests.",
  highlights: [
    "Improved request handling for production-style backend flows.",
    "Worked on backend logic and database reliability alongside product delivery.",
    "Shipped changes in a team environment with a strong focus on maintainability.",
  ],
};
