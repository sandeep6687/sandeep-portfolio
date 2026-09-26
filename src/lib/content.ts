export const site = {
  name: "Sandeep Gonnabattula",
  firstName: "Sandeep",
  role: "Software Engineer — Full Stack & Microservices",
  location: "India",
  email: "gonnabattula19@gmail.com",
  mailHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=gonnabattula19%40gmail.com",
  phone: "+91 7416303019",
  github: "https://github.com/sandeep6687",
  linkedin: "https://www.linkedin.com/in/sandeep-go",
  resume: "/Sandeep_Gonnabattula_Resume.pdf",
  url: "https://sandeep-gonnabattula.dev",
  headline: "Building event-driven microservices & autonomous agent systems that scale.",
  pitch:
    "Software Engineer with 18 months of production experience building backend APIs, microservices, and agentic workflow systems in Python/FastAPI and C#/.NET at Zenoti. Built event-driven workflow automation using Kafka, Redis, and PostgreSQL, supporting up to 40 steps/sec, with hands-on LLM integration, tool calling, RAG, and semantic retrieval. Strong grounding in distributed systems, Git-based SDLC, and full-stack delivery.",
  summary:
    "18 months of production experience at Zenoti on an enterprise SaaS platform — an event-driven workflow automation engine, 50+ REST APIs, and microservices on Python, PostgreSQL, and SQL Server. B.Tech in Computer Science (AI & ML) from VNR VJIET (CGPA 8.02).",
  aboutExtra:
    "Day to day that looks like workflow registration, triggers, conditions, and distributed workers; JWT-secured APIs with OpenAPI; caching and query work when latency appears; and delivery through Agile from analysis to production. I am comfortable taking an unclear brief, scoping it, and seeing it through — including tests, reviews, and the unglamorous parts of operating a service.",
  lookingFor:
    "I am currently open to conversations about Software Engineer, Backend, and AI-Platform roles — especially teams that build high-throughput microservices and treat agents as production systems, not toys.",
};

export const stats = [
  { value: 18, suffix: "+ mo", label: "Production Backend at Zenoti" },
  { value: 40, suffix: "/s", label: "Workflow Automation Throughput" },
  { value: 100, suffix: "%", label: "Eval Benchmark Accuracy (SRE Triage)" },
  { value: 8.02, suffix: "", label: "CGPA · B.Tech CSE (AI & ML)" },
] as const;

export const clientTiles = [
  "Zenoti",
  "Kafka",
  "Redis",
  "PostgreSQL",
  "FastAPI",
  "Spring Boot",
  "Python",
  ".NET Core",
  "Docker",
  "Kubernetes",
  "React",
  "Gemini",
  "LangGraph",
  "AWS",
] as const;

export const marqueeItems = [
  "FULL-STACK DEVELOPMENT",
  "EVENT-DRIVEN MICROSERVICES",
  "AI AGENTS & RAG",
  "KAFKA & REDIS PIPELINES",
  "SPRING BOOT & FASTAPI",
  "40 STEPS/SEC AUTOMATION",
  "REACT & WEBSOCKETS",
  "DISTRIBUTED ARCHITECTURE",
] as const;

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#services", label: "Services" },
  { href: "/#why-me", label: "Why Me" },
  { href: "/#about", label: "Experience" },
  { href: "/#contact", label: "Contact" },
  { href: "/Sandeep_Gonnabattula_Resume.pdf", label: "Resume", external: true },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: [
      "Java",
      "Python",
      "C#",
      "TypeScript",
      "JavaScript (Node.js)",
      "C++",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "FastAPI",
      "ASP.NET Core Web API",
      "Spring Boot",
      "Node.js / Express.js",
      "RESTful Services",
      "Microservices Architecture",
      "Django",
      "Flask",
    ],
  },
  {
    title: "Frontend & Real-Time",
    items: [
      "React",
      "Vanilla JS/CSS (Reactive UI)",
      "WebSockets",
      "Next.js",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Databases & Storage",
    items: [
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "SQL Query Optimization",
      "Indexing & Plan Tuning",
    ],
  },
  {
    title: "Architecture & Messaging",
    items: [
      "Event-Driven Microservices",
      "Kafka",
      "Redis Caching",
      "Distributed Systems",
      "System Design",
      "KEDA Auto-scaling",
    ],
  },
  {
    title: "Tools, DevOps & Cloud",
    items: [
      "Git",
      "Docker",
      "Kubernetes",
      "GitHub Actions (CI/CD)",
      "AWS Deployment",
      "Azure (Functions/Services)",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "Pytest",
      "NUnit",
      "Coverlet",
      "Unit & Integration Testing",
      "Automated Eval Harnesses",
    ],
  },
  {
    title: "AI & Agentic Systems",
    items: [
      "Google Gemini",
      "LangGraph",
      "LLM Integration",
      "Tool Calling",
      "RAG & Semantic Retrieval",
      "Human-in-the-Loop (HITL)",
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
    slug: "multi-tenant-task-saas",
    label: "Full Stack SaaS",
    title: "Multi-Tenant Task Management SaaS Platform",
    cardTitle:
      "Enterprise multi-tenant task platform with Spring Boot, WebSockets & React drag-and-drop",
    accent: "#132338",
    summary:
      "Multi-tenant task and project management platform built in Spring Boot with role-based access control, tenant-level data isolation, real-time WebSocket Kanban synchronization, and AWS container deployment.",
    role: "Full-Stack Software Engineer",
    stack: [
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "React",
      "WebSockets",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
    monogram: "SAAS",
    problem:
      "Modern enterprise teams require strict tenant-level data isolation without the overhead of deploying isolated infrastructure for each customer. At the same time, collaborative project boards require instantaneous, conflict-free state synchronization across multiple concurrent team members without high polling overhead.",
    approach: [
      "Architected multi-tenant data partitioning in PostgreSQL using tenant discriminators and secure schema routing managed via Spring Boot and Hibernate multi-tenancy filters.",
      "Engineered granular Role-Based Access Control (RBAC) with Spring Security and JWT tokens, enforcing tenant boundary checks on every incoming request.",
      "Built a bidirectional real-time Kanban board using STOMP over WebSockets, instantly broadcasting column transitions, task reordering, and assignees to connected team clients.",
      "Created a responsive React frontend with fluid drag-and-drop mechanics, optimistic UI updates, and conflict resolution for concurrent edits.",
      "Automated build, test verification, containerization, and deployment through a production-ready GitHub Actions CI/CD pipeline targeting AWS ECS/EC2 with Docker.",
    ],
    outcome:
      "Delivered a zero-leakage multi-tenant SaaS architecture supporting seamless real-time team collaboration, sub-50ms WebSocket state sync, and automated push-to-deploy cloud infrastructure.",
    links: [
      {
        label: "GitHub Repo (On Request)",
        href: "https://github.com/sandeep6687",
      },
    ],
    featured: true,
  },
  {
    slug: "autonomous-sre-agent",
    label: "Autonomous Agent & Command Center",
    title: "Autonomous SRE Incident Triage Agent & Command Center",
    cardTitle:
      "FastAPI agent orchestrating incident triage across microservices with reactive telemetry & HITL",
    accent: "#0b192c",
    summary:
      "Full-stack system: a FastAPI backend orchestrating a multi-step agent across microservices, paired with a real-time reactive web frontend showing live pipeline state, telemetry, and Human-in-the-Loop authorization.",
    role: "AI Agent Architect & Full-Stack Implementer",
    stack: [
      "Python",
      "FastAPI",
      "Docker",
      "Vanilla JS/CSS",
      "LangGraph",
      "LLM Tool Calling",
      "HITL Authorization",
      "Pytest",
    ],
    monogram: "SRE",
    problem:
      "When critical production outages occur across distributed microservices (database connection pool starvation, memory exhaustion, latency spikes), on-call engineers must correlate logs, runbooks, and deployment diffs under high stress. Manual triage causes extended MTTR and risks unintended consequences from unvetted emergency scripts.",
    approach: [
      "Engineered an autonomous multi-step incident response agent in FastAPI that ingests alerts, triages affected services, queries distributed logs, and formulates diagnostic hypotheses.",
      "Paired the backend with a high-performance reactive web frontend (Vanilla JS/CSS) providing live visualization of pipeline state, telemetry graphs, and incident timelines without heavy framework bloat.",
      "Designed secure REST endpoints with a mandatory Human-in-the-Loop (HITL) authorization flow, freezing graph execution and requiring explicit human approval before any destructive remediation actions execute.",
      "Validated the system end-to-end with an automated evaluation test harness achieving 100% benchmark accuracy (4/4 test suites) for root cause localization and remediation tool selection.",
      "Tracked and recorded live error-rate recovery, proving automated remediation reduced error rates from 42.5% down to 0.02% via pre- and post-telemetry monitoring.",
    ],
    outcome:
      "Reduced incident triage time from 20 minutes of manual log hunting to automated root-cause localization within seconds, with 100% eval accuracy, strict Human-in-the-Loop safety gating, and 42.5% → 0.02% error recovery.",
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/sandeep6687/autonomous-sre-agent",
      },
    ],
    featured: true,
  },
  {
    slug: "enterprise-ai-workflow",
    label: "Workflow Engine",
    company: "Zenoti",
    title: "Enterprise AI Workflow & Automation Engine",
    cardTitle:
      "Event-driven microservices workflow engine processing 40 steps/sec with Kafka and Redis",
    accent: "#0c3d44",
    summary:
      "Architected an event-driven, microservices-based workflow backend orchestrating multi-step automation nodes at up to 40 steps/second, using Kafka for async processing and Redis for caching.",
    role: "Backend Architect & Implementer",
    stack: [
      "Python",
      "FastAPI",
      "C# / .NET Core",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "KEDA",
      "Docker",
    ],
    monogram: "WF",
    problem:
      "Enterprise SaaS operations require long-running, multi-step business automations that combine deterministic logic, external API integrations, and generative AI reasoning. Synchronous HTTP request-response architectures failed under heavy spikes and caused dropped jobs when individual third-party steps experienced latency.",
    approach: [
      "Architected a distributed event-driven workflow engine with FastAPI and C#/.NET Core services orchestrating multi-step automation nodes.",
      "Structured the platform around dynamic workflow registration, configurable triggers, branching conditions, and distributed worker execution.",
      "Integrated Apache Kafka for asynchronous event queues and Redis for high-speed hot-path caching, decoupling the API ingestion layer from worker execution.",
      "Implemented intelligent conditional branching and exponential-backoff retry policies across microservices, ensuring long-running automation chains gracefully recover from network or API blips.",
      "Employed Docker containerization and KEDA (Kubernetes Event-driven Autoscaling) to dynamically scale worker pods based on Kafka topic backlog depths.",
    ],
    outcome:
      "Supported sustained throughput of up to 40 automation steps per second with sub-second message dispatch, zero dropped tasks during network blips, and unified observability across enterprise workflows.",
    links: [],
    featured: true,
  },
  {
    slug: "lead-management",
    label: "Enterprise APIs",
    company: "Zenoti",
    title: "AI-Enhanced Lead Management & Scoring System",
    cardTitle:
      "Production ASP.NET Core APIs with AI lead scoring and SQL Server query optimization",
    accent: "#1e2e3d",
    summary:
      "Engineered production-grade REST APIs and backend services using C#/.NET Core, SQL Server, and AI-driven intent scoring to prioritize enterprise sales leads.",
    role: "Backend Software Engineer",
    stack: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "EF Core",
      "Redis",
      "Swagger/OpenAPI",
      "JWT",
    ],
    monogram: "LM",
    problem:
      "Sales teams faced hundreds of thousands of incoming enterprise leads. Manual triage resulted in delayed follow-ups for high-intent prospects, while unoptimized SQL queries on high-volume lead tables created severe database bottlenecks.",
    approach: [
      "Developed high-throughput ASP.NET Core Web APIs for lead ingestion, intent scoring, and automated sales routing.",
      "Implemented AI-based lead scoring that predicts conversion probability from behavioral telemetry, enabling reps to act on high-intent accounts immediately.",
      "Optimized SQL Server database performance by profiling execution plans, creating composite indexing strategies, and reducing query latency across million-row tables.",
      "Cached hot metadata and lead status counters in Redis, cutting redundant relational queries by 60%.",
      "Hardened backend endpoints with JWT token validation, Swagger/OpenAPI documentation, and NUnit integration tests.",
    ],
    outcome:
      "Accelerated high-intent lead engagement by 3x while stabilizing database utilization under high concurrency through strategic indexing and Redis caching.",
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
      "Software Engineer with 18 months of production experience building backend APIs, microservices, and agentic workflow systems in Python/FastAPI and C#/.NET for enterprise SaaS applications.",
    highlights: [
      "Designed and built event-driven microservices using Kafka, Redis, Docker, Kubernetes, and KEDA to support scalable, asynchronous processing of long-running workflows.",
      "Built a workflow automation platform — registration, triggers, conditions, multi-step execution, distributed workers — across a microservices architecture supporting up to 40 steps/sec.",
      "Engineered production-grade REST APIs and backend services using Python, PostgreSQL, and SQL Server for enterprise SaaS applications, contributing to 50+ delivered endpoints.",
      "Implemented Redis caching and database optimizations to reduce redundant queries and improve API responsiveness across high-volume datasets.",
      "Developed secure backend systems with JWT authentication, API validation, and exception handling; documented via Swagger/OpenAPI.",
      "Owned features end-to-end in Agile/Scrum — requirement analysis, implementation, code review, testing (Pytest, NUnit), and production deployment using Git throughout the SDLC.",
    ],
  },
];

export const education = {
  school: "VNR Vignana Jyothi Institute of Engineering and Technology",
  degree: "B.Tech, Computer Science (AI & ML)",
  detail: "CGPA 8.02",
  period: "2021 – 2025",
};

export const services = [
  {
    title: "Event-Driven Microservices",
    description:
      "Asynchronous, decoupled microservice architectures built with Kafka, Redis, Docker, Kubernetes, and KEDA to process long-running jobs reliably without blocking request threads.",
    technologies: ["Kafka", "Redis", "Docker", "Kubernetes", "KEDA"],
  },
  {
    title: "Autonomous AI Agents & Workflows",
    description:
      "Deterministic agentic loops with multi-step reasoning, tool-calling orchestration, RAG semantic retrieval, and strict Human-in-the-Loop authorization checkpoints.",
    technologies: ["FastAPI", "LangGraph", "Gemini", "RAG", "HITL"],
  },
  {
    title: "High-Throughput REST APIs",
    description:
      "Production-grade APIs in Python (FastAPI) and C# (.NET Core) featuring JWT authentication, request schema validation, OpenAPI specifications, and clean domain design.",
    technologies: ["FastAPI", "ASP.NET Core", "Spring Boot", "OpenAPI", "JWT"],
  },
  {
    title: "Real-Time Full-Stack Applications",
    description:
      "Collaborative, real-time web applications with WebSockets, drag-and-drop interactions, tenant-level data isolation, and responsive React frontends.",
    technologies: ["React", "WebSockets", "Spring Boot", "Tailwind CSS"],
  },
  {
    title: "Cloud Infrastructure & CI/CD",
    description:
      "Automated deployment pipelines with GitHub Actions, AWS cloud services, Azure functions, Docker containerization, and automated integration test harnesses.",
    technologies: ["AWS", "Azure", "GitHub Actions", "Docker", "Linux"],
  },
  {
    title: "Database Performance & Caching",
    description:
      "Relational schema modeling, multi-tenant partitioning, SQL Server / PostgreSQL query execution plan tuning, and Redis caching layers to eliminate latency bottlenecks.",
    technologies: ["PostgreSQL", "SQL Server", "Redis", "Query Tuning"],
  },
] as const;

export const whyWorkWithMe = [
  {
    number: "01",
    title: "Production-Hardened Engineering",
    description:
      "18 months of high-velocity enterprise SaaS experience at Zenoti, shipping real features to production that handle 40 steps/sec across distributed systems.",
  },
  {
    number: "02",
    title: "System-First AI Architecture",
    description:
      "Treating agents as dependable state machines with strict telemetry, benchmark evaluation harnesses (100% accuracy), and Human-in-the-Loop guardrails — not fragile prompt demos.",
  },
  {
    number: "03",
    title: "Full-Stack Cohesion",
    description:
      "Deep microservices and backend muscle combined with reactive, real-time web frontends that provide instantaneous visual feedback via WebSockets.",
  },
  {
    number: "04",
    title: "Performance by Architecture",
    description:
      "Kafka event queues, Redis hot-path caching, and finely tuned SQL execution plans prevent bottlenecks before they reach production.",
  },
  {
    number: "05",
    title: "End-to-End Ownership",
    description:
      "Comfortable taking ambiguous briefs, scoping technical requirements, writing comprehensive tests (Pytest/NUnit), and driving features from Git to cloud deployment.",
  },
] as const;

export const achievements = [
  {
    metric: "18+",
    unit: "Months",
    label: "Enterprise Production Experience at Zenoti",
    desc: "Building event-driven microservices, workflow automation, and 50+ REST endpoints.",
  },
  {
    metric: "40",
    unit: "steps/sec",
    label: "Workflow Automation Throughput",
    desc: "Achieved via Kafka async queuing and Redis caching on distributed worker pools.",
  },
  {
    metric: "100%",
    unit: "Accuracy",
    label: "Automated Evaluation Benchmark (4/4)",
    desc: "Root-cause localization and tool selection in Autonomous SRE incident response.",
  },
  {
    metric: "42.5% → 0.02%",
    unit: "Recovery",
    label: "Live Error-Rate Remediation",
    desc: "Validated telemetry recovery across P1 production outage simulations.",
  },
  {
    metric: "8.02",
    unit: "CGPA",
    label: "B.Tech Computer Science (AI & ML)",
    desc: "VNR Vignana Jyothi Institute of Engineering and Technology (2021 – 2025).",
  },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return { prev, next };
}

export const featuredProjects = projects.filter((project) => project.featured);
