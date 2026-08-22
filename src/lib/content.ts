export const site = {
  name: "Sandeep Gonnabattula",
  firstName: "Sandeep",
  role: "Software Engineer · Backend & AI Agent Systems",
  location: "India",
  email: "gonnabattula19@gmail.com",
  phone: "+91 7416303019",
  github: "https://github.com/sandeep6687",
  linkedin: "https://www.linkedin.com/in/sandeep-go",
  resume: "/Sandeep_Gonnabattula_Resume.pdf",
  url: "https://sandeep-gonnabattula.vercel.app",
  headline: "I'm Sandeep, a software engineer shaping backend and agent systems.",
  pitch:
    "Hello — I build production backends for enterprise SaaS, with a particular interest in workflow automation and AI agent systems. Over the last eighteen months at Zenoti I have shipped REST APIs, event-driven services, and retrieval-backed tool-calling so that automation stays grounded in real business data. I work carefully: clear contracts, honest failure handling, and close collaboration with product from the first requirement through to release.",
  summary:
    "I spent eighteen months at Zenoti on an enterprise SaaS platform — a workflow automation engine, fifty-plus REST APIs, and services on Python, PostgreSQL, and SQL Server. I studied Computer Science (AI & ML) at VNR VJIET.",
  aboutExtra:
    "Day to day that looks like workflow registration, triggers, conditions, and distributed workers; JWT-secured APIs with OpenAPI; caching and query work when latency appears; and delivery through Agile from analysis to production. I am comfortable taking an unclear brief, scoping it, and seeing it through — including tests, reviews, and the unglamorous parts of operating a service.",
  lookingFor:
    "I am currently open to conversations about backend and AI-platform roles — especially teams that treat agents as systems, not demos. If that sounds useful, I would be glad to hear from you.",
};

export const stats = [
  { value: 18, suffix: " mo", label: "Production backend" },
  { value: 2, suffix: "", label: "Projects shipped · workflow & lead" },
  { value: 40, suffix: "/s", label: "Automation throughput" },
] as const;

export const clientTiles = [
  "Zenoti",
  "FastAPI",
  ".NET 8",
  "Kafka",
  "Redis",
  "PostgreSQL",
  "pgvector",
  "Azure",
  "Kubernetes",
  "Gemini",
  "Claude",
  "EF Core",
] as const;

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Projects" },
  { href: "/Sandeep_Gonnabattula_Resume.pdf", label: "Resume", external: true },
] as const;

export const skillGroups = [
  {
    title: "AI / LLM & agents",
    items: [
      "Gemini & Claude",
      "Prompt chaining",
      "Tool-calling orchestration",
      "Agentic task loops",
      "RAG with pgvector",
      "Context grounding",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Python / FastAPI",
      "C# / .NET 8",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "Microservices",
      "REST / OpenAPI",
      "OOP & system design",
    ],
  },
  {
    title: "Data & messaging",
    items: [
      "PostgreSQL",
      "SQL Server",
      "Redis",
      "Kafka",
      "Azure Service Bus",
      "Background jobs",
    ],
  },
  {
    title: "Cloud & delivery",
    items: [
      "Azure Functions",
      "Docker",
      "Kubernetes",
      "KEDA",
      "JWT auth",
      "NUnit / integration tests",
    ],
  },
] as const;

export type Project = {
  slug: string;
  label: string;
  company?: string;
  title: string;
  cardTitle: string;
  summary: string;
  role: string;
  stack: string[];
  accent: string;
  monogram: string;
  problem: string;
  approach: string[];
  outcome: string;
  links: { label: string; href: string }[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "enterprise-ai-workflow",
    label: "Workflow engine",
    company: "Zenoti",
    title: "Enterprise AI Workflow & Automation Engine",
    cardTitle:
      "Orchestrating multi-step AI workflows with tool-calling and retrieval",
    accent: "#0c3d44",
    summary:
      "Event-driven workflow backend with FastAPI, Kafka, and LLM tool-calling nodes — up to 40 automation steps per second.",
    role: "Backend architect & implementer",
    stack: [
      "Python",
      "FastAPI",
      "C# / .NET Core",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "pgvector",
      "Azure Functions",
    ],
    monogram: "WF",
    problem:
      "Enterprise teams needed multi-step automation that could mix LLM reasoning with real API calls, survive long-running runs, and stay grounded in their own data — not generic chatbot answers. A single request/response service was not enough: workflows had to register, trigger, branch, retry, and hand work to distributed workers without losing context between steps.",
    approach: [
      "Architected a scalable event-driven workflow backend with FastAPI services orchestrating multi-step, tool-calling automation nodes, with a .NET Core surface in the same system where it fit the existing enterprise stack.",
      "Modeled the platform around workflow registration, triggers, conditions, and multi-step execution — the same plan/execute loop used in agent systems — then pushed long-running work onto distributed workers.",
      "Used Kafka for async processing and Redis for caching so workers could scale independently of the API surface and avoid repeating expensive lookups mid-chain.",
      "Built reusable AI-powered nodes that chain LLM prompts (Gemini, Claude) with external REST API calls, using pgvector for embedding-based context retrieval so each node could ground a decision in enterprise records.",
      "Designed the node execution model for conditional branching and retries so a failed tool call did not kill an entire long-running automation chain.",
    ],
    outcome:
      "The engine supported up to 40 automation steps per second while keeping workflow decisions grounded in real enterprise data via semantic retrieval. Operators got a reliable, event-driven backbone instead of a brittle prompt script: async throughput from Kafka, hot-path caching from Redis, and nodes that could call tools, branch, and recover.",
    links: [],
    featured: true,
  },
  {
    slug: "lead-management",
    label: "Lead management",
    company: "Zenoti",
    title: "AI-Enhanced Lead Management System",
    cardTitle:
      "Scoring and summarizing enterprise leads so sales can act on intent",
    accent: "#9aadc0",
    summary:
      "ASP.NET Core APIs with AI lead scoring and LLM summaries so sales teams can prioritize high-intent leads.",
    role: "Backend engineer",
    stack: [
      "ASP.NET Core",
      "C#",
      "Web API",
      "EF Core",
      "SQL Server",
      "LLM integration",
    ],
    monogram: "LM",
    problem:
      "Sales teams were drowning in lead volume. Ranking intent and writing summaries by hand did not scale across large enterprise datasets, so high-intent accounts sat in the same queue as noise. The system needed scoring, summarization, and fast retrieval over SQL Server — not another dashboard that still required a human to read every row.",
    approach: [
      "Developed scalable ASP.NET Core Web APIs with AI-based lead scoring so the sales surface could sort by predicted intent instead of recency alone.",
      "Added LLM-driven summary extraction so a rep could see why a lead ranked high without opening the full record trail.",
      "Modeled lead data with Entity Framework Core against SQL Server and exposed REST contracts the rest of the stack could consume.",
      "Tuned SQL Server execution plans and indexes to accelerate retrieval across large lead datasets instead of pushing the problem into app-layer pagination.",
    ],
    outcome:
      "Sales teams could prioritize high-intent leads from ranked, summarized records instead of raw dumps. Scoring and summaries lived behind the same Web API, and the SQL Server path stayed viable as the dataset grew — a practical AI feature on a conventional .NET/EF Core backend.",
    links: [],
    featured: true,
  },
  {
    slug: "talentpulse-ai",
    label: "TalentPulse",
    title: "TalentPulse AI — ATS Resume Optimizer & Mock Interview",
    cardTitle:
      "Closing keyword gaps and running adaptive mock interviews with Gemini",
    accent: "#7a8f7e",
    summary:
      ".NET 8 + Gemini backend that closes keyword gaps against job descriptions and runs adaptive mock interviews.",
    role: "Full-stack backend owner",
    stack: [".NET 8 Web API", "C#", "EF Core", "Gemini LLM"],
    monogram: "TP",
    problem:
      "Candidates were rejected by ATS filters for missing keywords, then walked into interviews without practice against the skills a posting actually required. Resume rewrite and interview prep were two disconnected chores; neither was grounded in a structured gap analysis of the job description.",
    approach: [
      "Built an end-to-end AI resume-optimization backend with .NET 8 Web API, C#, EF Core, and Gemini LLMs as the generation and evaluation layer.",
      "Parsed uploaded resumes, ran keyword-gap analysis against job descriptions, and auto-generated ATS-compliant rewrites with PDF and DOCX export so the candidate could apply immediately.",
      "Engineered an adaptive mock-interview API that dynamically generates technical questions from the candidate's missing skills rather than a static bank.",
      "Added real-time evaluation and feedback scoring on answers so the same gap list that rewrote the resume also drove the practice loop.",
    ],
    outcome:
      "One backend both rewrites a resume to match a job description and coaches the candidate on the gaps that remain. ATS-oriented export (PDF/DOCX) and an adaptive interview API share the same skill-gap model, so prep is targeted instead of generic.",
    links: [],
    featured: true,
  },
];

export const experience = [
  {
    company: "Zenoti",
    role: "Software Engineer",
    period: "Jan 2025 – Jun 2026",
    summary:
      "Production backend on an enterprise SaaS platform: workflow automation, microservices, and 50+ REST APIs across Python and data-heavy SQL paths.",
    highlights: [
      "Built a workflow automation platform with workflow registration, triggers, conditions, multi-step execution, and distributed workers — the same orchestration and task-execution patterns used in agent-loop and plan/execute systems.",
      "Designed microservices and event-driven architectures using Kafka, Redis, Docker, Kubernetes, and KEDA so long-running workflows could scale asynchronously instead of blocking the API.",
      "Engineered production-grade REST APIs and backend services with Python, PostgreSQL, and SQL Server for enterprise SaaS applications, contributing to 50+ independently delivered endpoints across workflow and lead-management surfaces.",
      "Implemented Redis caching and database optimizations (query and index work on SQL Server and PostgreSQL) to cut redundant database operations and improve API responsiveness.",
      "Owned features end-to-end within Agile/Scrum: requirement analysis, implementation, debugging, code review, testing, and production deployment.",
      "Hardened services with JWT authentication, request validation, exception handling, Swagger/OpenAPI, plus unit and integration tests (NUnit, Coverlet).",
      "Worked daily with Git/Bitbucket and Postman; used Azure Functions and Azure services where background and event-driven work belonged off the request path.",
      "Turned ambiguous product requirements into scoped, shippable systems and iterated with AI-assisted development without dropping production standards.",
    ],
  },
];

export const education = {
  school: "VNR Vignana Jyothi Institute of Engineering and Technology",
  degree: "B.Tech, Computer Science (AI & ML)",
  detail: "8.02 CGPA",
  period: "2021 – 2025",
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
