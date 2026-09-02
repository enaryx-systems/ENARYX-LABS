/* ---------------------------------------------------------------
   Site content. No CMS — edit here. Sourced from the approved
   Enaryx Labs copy deck (2026-08-29).
   --------------------------------------------------------------- */

export type Service = {
  slug: string;
  index: string;
  title: string;
  /** One-line label copy for the home Capabilities cards. */
  short: string;
  /** Fuller copy for the /services detail page. */
  summary: string;
};

/** "02 — Capabilities" */
export const services: Service[] = [
  {
    slug: "software-product-development",
    index: "01",
    title: "Software & Products",
    short: "Web, mobile and custom digital products.",
    summary:
      "We design and engineer modern digital products — web platforms, mobile applications and custom business systems built around real requirements.",
  },
  {
    slug: "ai-intelligent-solutions",
    index: "02",
    title: "AI & Intelligent Systems",
    short: "AI applications, agents and intelligent workflows.",
    summary:
      "We build AI applications, agents and intelligent workflows where they create real value — grounded in the product, the data and the problem.",
  },
  {
    slug: "business-automation",
    index: "03",
    title: "Automation",
    short: "Connected workflows that reduce manual work.",
    summary:
      "We connect systems and remove repetitive steps so operations run with less manual effort and fewer handoffs.",
  },
  {
    slug: "digital-platforms",
    index: "04",
    title: "Digital Platforms",
    short: "Scalable platforms for customers, teams and services.",
    summary:
      "We create platforms that connect customers, teams and services — designed to scale as the business grows.",
  },
  {
    slug: "technology-consulting",
    index: "05",
    title: "Technology Strategy",
    short: "From technical direction to practical execution.",
    summary:
      "We help turn a concept into a clear technical direction and a plan that can actually be executed.",
  },
  {
    slug: "innovation-rd",
    index: "06",
    title: "R&D",
    short: "Experiments and new technology with product potential.",
    summary:
      "We test emerging technologies and product concepts to find the ones worth building into real products.",
  },
];

export type Step = { index: string; title: string; body: string };

/** "Our Approach" — Think Different. Build Better. */
export const steps: Step[] = [
  { index: "01", title: "Discover", body: "We understand your idea, users, business goals, and the problem you're trying to solve." },
  { index: "02", title: "Design", body: "We turn the idea into a clear product concept, user experience, and technical architecture." },
  { index: "03", title: "Build", body: "Our team develops the product using modern, scalable technologies." },
  { index: "04", title: "Test", body: "We validate functionality, performance, security, and user experience." },
  { index: "05", title: "Launch", body: "We help take the product from development to the real world." },
  { index: "06", title: "Scale", body: "We continuously improve the product based on users, data, and changing business needs." },
];

export type Pillar = { title: string; body: string };

/** "06 — Principles" — Technology With Purpose. Four, not six. */
export const differentiators: Pillar[] = [
  { title: "Clarity", body: "Start with the problem." },
  { title: "Engineering", body: "Build systems that work." },
  { title: "Experience", body: "Make complexity feel simple." },
  { title: "Long-Term Thinking", body: "Build for what comes next." },
];

/** Home — "01 — The Lab" — how the lab works. */
export const labTriad: Pillar[] = [
  { title: "Explore", body: "Find new possibilities." },
  { title: "Engineer", body: "Turn possibilities into reliable systems." },
  { title: "Launch", body: "Put useful technology into the real world." },
];

/** "Our Values" — What We Believe. */
export const values: Pillar[] = [
  { title: "Curiosity", body: "We keep learning, questioning, and exploring." },
  { title: "Ownership", body: "We take responsibility for what we build." },
  { title: "Simplicity", body: "Complex problems deserve simple, understandable solutions." },
  { title: "Integrity", body: "We believe trust is more valuable than short-term gains." },
  { title: "Excellence", body: "We continuously improve our products, processes, and thinking." },
  { title: "Impact", body: "We measure success by the value our work creates." },
];

export const mission = {
  eyebrow: "Our Mission",
  title: "Make Technology More Useful.",
  paragraphs: [
    "Our mission is to build technology that solves real problems, creates opportunities, and makes businesses and people's lives better.",
    "We believe innovation doesn't always require complicated technology.",
    "Sometimes, the biggest innovation is simply building the right solution.",
  ],
};

export const vision = {
  eyebrow: "Our Vision",
  title: "Build What Comes Next.",
  paragraphs: [
    "We envision Enaryx Labs becoming a global technology and innovation company that creates products, platforms, and solutions capable of making a meaningful impact across industries.",
    "From emerging startups to established businesses, we want to help organizations turn possibilities into reality.",
  ],
};

export const aboutCopy = {
  eyebrow: "About Enaryx Labs",
  title: "A Lab for Ideas That Matter.",
  paragraphs: [
    "Enaryx Labs was created with a simple belief: the future belongs to people who are willing to build it.",
    "We are a technology-focused innovation company working at the intersection of technology, business, and creativity.",
    "Our goal is to identify meaningful problems, develop intelligent solutions, and turn promising ideas into products that can create lasting value.",
    "We are not interested in simply following technology trends. We want to build what comes next.",
  ],
};

/** "Products & Solutions" — Ideas We Can Build */
export const productsAndSolutions: string[] = [
  "AI-powered applications",
  "Business automation",
  "SaaS platforms",
  "Mobile applications",
  "Web applications",
  "E-commerce platforms",
  "Enterprise software",
  "Data-driven solutions",
  "API & system integrations",
  "Customer experience platforms",
  "Internal business tools",
  "Emerging technology products",
];

export const forStartups = {
  eyebrow: "For Founders",
  title: "From Idea to Product.",
  lede: "For founders who need a technical partner to move from concept to something real.",
  body: "Product strategy, design, technology selection and engineering — from the first prototype through launch.",
  path: ["Idea", "Prototype", "MVP", "Product", "Scale"],
  closing: "Your idea deserves more than a concept. Let's turn it into something people can use.",
};

export const forBusinesses = {
  eyebrow: "For Businesses",
  title: "Make Your Operations Work Better.",
  lede: "We help businesses connect systems, remove repetitive work and create more efficient digital operations.",
  capabilities: [
    { index: "01", title: "Automate", body: "Remove the repetitive, manual steps." },
    { index: "02", title: "Integrate", body: "Connect the systems you already run." },
    { index: "03", title: "Modernize", body: "Replace what's slowing the business down." },
    { index: "04", title: "Analyze", body: "Turn operational data into decisions." },
    { index: "05", title: "Scale", body: "Build for the next order of magnitude." },
  ],
  flow: ["Existing systems", "Enaryx", "Connected workflows", "Business outcome"],
  closing: "Technology should work for your business — not create more work.",
};

/** "10 — Technology" — chosen for the problem, not the trend. */
export const techGroups: { label: string; items: string[] }[] = [
  { label: "Product", items: ["React", "Next.js", "React Native"] },
  { label: "Backend", items: ["Node.js", "NestJS", "REST APIs"] },
  { label: "Data", items: ["PostgreSQL", "Prisma", "Vector databases"] },
  { label: "Intelligence", items: ["LLMs", "RAG", "AI agents", "Embeddings"] },
  { label: "Infrastructure", items: ["Cloud", "Docker", "CI/CD"] },
];

export type RndArea = { title: string; body: string };

/** "12 — R&D" — what we're exploring, before it becomes a product. */
export const rndAreas: RndArea[] = [
  { title: "Intelligent Systems", body: "Systems that reason over context and act, not just respond." },
  { title: "Autonomous Workflows", body: "Multi-step work that plans, executes and self-corrects." },
  { title: "Emerging Interfaces", body: "New ways people and software work together." },
  { title: "New Product Concepts", body: "Our own early-stage ideas — prototyped and pressure-tested." },
];

/** "Our Technology" — capability areas (distinct from the specific-tool marquee below) */
export const technologyCapabilities: string[] = [
  "AI & Machine Learning",
  "Cloud Computing",
  "Web Technologies",
  "Mobile Development",
  "APIs & Integrations",
  "Databases",
  "Automation",
  "Data Engineering",
  "Cybersecurity",
  "DevOps & Infrastructure",
];

export type Audience = { title: string; body: string };

/** "07 — Built for Ambition" — four, kept short. */
export const audiences: Audience[] = [
  { title: "Founders", body: "Turning ideas into products." },
  { title: "Startups", body: "Building and scaling digital products." },
  { title: "Businesses", body: "Modernizing operations." },
  { title: "Teams & Organizations", body: "Creating better digital experiences." },
];

export type CaseStudy = {
  slug: string;
  index: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  year: string;
  problem: string;
  constraints: string[];
  built: string[];
  architecture: { layer: string; detail: string }[];
  outcome: string[];
  stack: string[];
  tags?: string[];
  /** Optional rich showcase sections. */
  pains?: string[];
  approach?: string[];
  capabilities?: { title: string; body: string }[];
  howItWorks?: { label: string; body: string }[];
  highlights?: { title: string; body: string }[];
  targets?: { value: string; label: string }[];
  targetsNote?: string;
  /** Client logo — square. `logo` is the light-theme lockup, `logoDark` the dark. */
  logo?: string;
  logoDark?: string;
  /** Wide screenshot / showcase image. */
  shot?: string;
  /** Public URL of the shipped product. */
  liveUrl?: string;
  /** Still being built — shows an "Under development" badge on the card. */
  wip?: boolean;
  published: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "smart-med-records",
    index: "01",
    client: "Smart Med Record Inc.",
    sector: "Healthcare / Legal Technology",
    title: "A records-review platform with an AI extraction pipeline",
    summary:
      "An AI-assisted, physician-reviewed medico-legal record review platform — from secure record intake through automated analysis to a source-cited, verified deliverable.",
    year: "2025",
    problem:
      "Personal-injury and malpractice firms work cases with thousands of pages of disorganized medical records — duplicate scans, missing date ranges, handwritten notes, mixed providers. Building a chronology by hand is slow, expensive and hard to defend once a conclusion loses its source page — but a raw LLM summary isn't defensible either.",
    constraints: [
      "Strict separation between client firms — no data could leak across tenants",
      "The review workflow had to mirror an existing written SOP exactly",
      "Deliverables could only be released after the invoice was paid",
    ],
    built: [
      "Four role-scoped portals (client, admin, reviewer, billing) over a guided intake-to-delivery workflow, with server-side RBAC on every endpoint",
      "An async AI pipeline: OCR and extraction into a strict schema, embeddings for source-cited semantic search across a firm's whole corpus, live status over WebSockets",
      "Consolidated, payment-gated invoicing with generated PDFs, plus an immutable per-case audit trail",
    ],
    architecture: [
      { layer: "Web", detail: "Next.js 15 App Router · React 19 · TanStack Query for server state · Redux Toolkit for UI state · Clerk auth" },
      { layer: "API", detail: "NestJS 11 · Prisma 6 over PostgreSQL · BullMQ + Redis job queue · Socket.IO gateway" },
      { layer: "AI", detail: "OpenAI for extraction · text-embedding-3-small for embeddings · Qdrant for semantic search" },
      { layer: "Infra", detail: "S3-compatible storage · SendGrid · Puppeteer PDF · Sentry · Docker + Trivy scan · CI quality gate · Vercel" },
    ],
    pains: [
      "A case arrives as thousands of pages — duplicate scans, missing date ranges, handwritten notes, mixed providers",
      "Building the chronology and finding the decisive fact is slow and expensive by hand",
      "A conclusion that loses its source page is hard to defend in a deposition",
      "A raw LLM summary is faster, but it has no citations and can invent facts",
    ],
    approach: [
      "An async pipeline runs OCR and extraction into a strict schema — the model fills fields, it can't invent them",
      "Every extracted value and every search result carries its source page",
      "RBAC is enforced per-endpoint on the API; the front-end route guard is only a UX convenience",
      "A physician reviews and signs off before any deliverable is released",
    ],
    capabilities: [
      { title: "Secure intake wizard", body: "Multi-step case creation with client-side validation, draft-and-resume, and encrypted upload to object storage." },
      { title: "Async AI document pipeline", body: "Digital PDFs are parsed directly; scanned pages fall back to a vision model for OCR and extraction in one pass, validated against a strict schema." },
      { title: "Source-cited semantic search", body: "Natural-language questions across a firm's whole corpus, returning ranked snippets that link back to the exact case and file." },
      { title: "Per-case AI summary", body: "A generated case narrative stored with the case, with the model name recorded for auditability." },
      { title: "Reviewer workflow", body: "Physicians and reviewers see only their assigned cases, update status, and upload verified deliverables." },
      { title: "Billing & audit trail", body: "Consolidated multi-case invoices, sequential numbering under a DB transaction, payment-gated downloads, and an immutable per-case event log." },
    ],
    howItWorks: [
      { label: "Intake", body: "The firm creates a matter, selects services, and uploads records through the guided wizard." },
      { label: "Extract", body: "Each file is queued to a worker: text or vision extraction into a validated schema, then chunk-and-embed for search." },
      { label: "Review", body: "A physician checks the extraction and the generated summary, corrects anything, and signs off." },
      { label: "Deliver", body: "The verified deliverable is released once the invoice is paid; every step lands on the case timeline." },
    ],
    highlights: [
      { title: "Server-side RBAC by default", body: "A global auth + roles guard protects every route; endpoints opt out explicitly. Four roles — client (firm-scoped, team-seat visibility), admin, reviewer, billing." },
      { title: "Defense-in-depth vector search", body: "Qdrant payload filters scope results for speed, but every hit is re-checked against the caller's real RBAC scope in application code before it's returned." },
      { title: "Resilient job pipeline", body: "Embedding is best-effort — a search-index failure doesn't fail the user-visible extraction. Re-running extraction clears stale vectors first." },
      { title: "CI quality gate", body: "Policy checks, lint, typecheck, build, dependency audit, and a Docker build + Trivy scan (HIGH/CRITICAL fails the build) for both apps." },
    ],
    targets: [
      { value: "24–48h", label: "Target turnaround per matter" },
      { value: "99%", label: "Accuracy goal, with mandatory human review" },
      { value: "HIPAA-aligned", label: "Encryption in transit and at rest, least-privilege, audit logging" },
    ],
    targetsNote:
      "The product's stated targets — mandatory human review before every delivery.",
    outcome: [
      "Manual re-keying from records dropped to near zero",
      "Every search result and extraction carries its source page — defensible, not a black box",
      "Clients track case status themselves; every deliverable ties back to an approval and a payment",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind",
      "TanStack Query",
      "Redux Toolkit",
      "NestJS 11",
      "Prisma",
      "PostgreSQL",
      "BullMQ",
      "Redis",
      "Socket.IO",
      "OpenAI",
      "Qdrant",
      "Clerk",
      "AWS S3",
      "Puppeteer",
      "Docker",
      "Vercel",
    ],
    tags: ["AI", "Healthcare", "Legal", "Platform"],
    logo: "/white bg logo.jpeg",
    logoDark: "/white bg logo.jpeg",
    shot: "/work/smart-med-site.webp",
    liveUrl: "https://smart-med-records.vercel.app",
    wip: true,
    published: true,
  },
  {
    slug: "fb-infrastructure",
    index: "02",
    client: "FB Infrastructure",
    sector: "Architecture / Construction",
    title: "A premium build studio web presence with a cleaner conversion path",
    summary:
      "A refined marketing site for an architecture, construction and interiors firm — designed to feel premium, load fast, and turn more project enquiries into real conversations.",
    year: "2025",
    problem:
      "FB Infrastructure was delivering high-quality design and build work, but the online presence did not reflect that level of craft. The company needed a sharper digital identity and a simpler way to convert interest into qualified enquiries.",
    constraints: [
      "The site needed to be easy for a non-technical team to manage",
      "No heavy CMS or backend infrastructure was wanted",
      "A large share of enquiries came from mobile devices, so performance mattered",
    ],
    built: [
      "A premium single-page experience with services, portfolio, credibility and enquiry flow",
      "A flat-file content structure that keeps updates simple and low-maintenance",
      "A dual-channel enquiry system using EmailJS and WhatsApp for reliable lead capture",
    ],
    architecture: [
      { layer: "Pages", detail: "Next.js 16 · React 19 · Tailwind v4 — fully prerendered for performance and simplicity" },
      { layer: "Content", detail: "Typed, maintainable content blocks that let the studio update the site without developer dependency" },
      { layer: "Delivery", detail: "Static deployment on Vercel with no runtime complexity or unnecessary infrastructure" },
    ],
    approach: [
      "Keep the visual language refined and minimal instead of crowded with unnecessary elements",
      "Prioritise speed and clarity so the site feels premium on mobile as well as desktop",
      "Create a direct path from interest to enquiry without friction",
    ],
    outcome: [
      "The brand now aligns with the quality of the work and the client experience",
      "The studio can manage updates independently without a technical bottleneck",
      "More project enquiries are captured through a cleaner, faster mobile-first experience",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "EmailJS", "Vercel"],
    tags: ["Web", "Architecture", "Construction", "Brand"],
    logo: "/LOGO.png",
    logoDark: "/LOGO.png",
    shot: "/work/fb-infrastructure-preview.png",
    liveUrl: "https://furniture-book.vercel.app/",
    wip: true,
    published: true,
  },
];

export const tickerLines = [
  "build() → innovate() → scale()",
  "idea → prototype → MVP → product → growth",
  "technology with purpose",
  "we build what comes next",
];

export const techLogos: string[] = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "LangGraph",
  "Vercel AI SDK",
  "OpenAI",
  "Anthropic",
  "AWS",
  "Vercel",
  "Docker",
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "What is Enaryx Labs?",
    a: "Enaryx Labs is a technology and innovation company building software, intelligent systems, digital products and emerging technology.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. We work with founders and early-stage teams from product concept through MVP and beyond.",
  },
  {
    q: "Can you build a custom product?",
    a: "Yes. We design and engineer custom web, mobile, platform and business systems around specific requirements.",
  },
  {
    q: "Do you build AI systems?",
    a: "Yes. Depending on the problem, we work with AI applications, LLMs, RAG, agents, automation and intelligent workflows.",
  },
  {
    q: "Do you work internationally?",
    a: "We can work with teams and businesses across regions through remote collaboration.",
  },
  {
    q: "I only have an idea. Can you help?",
    a: "Yes. We can help evaluate the idea, define the product, plan the technology and build an initial version.",
  },
];
