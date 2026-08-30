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
  published: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "smart-med-records",
    index: "01",
    client: "Smart Med Records",
    sector: "Healthcare / Legal Technology",
    title: "A records-review platform with an AI extraction pipeline",
    summary:
      "A multi-tenant platform designed to streamline medical-record workflows, case review and secure deliverables for legal teams.",
    year: "2025",
    problem:
      "A medical-legal records review firm was running its entire operation — intake, review, QC, invoicing — over email and shared drives. Nothing was traceable to a case, clients had no visibility, and staff re-keyed data from PDFs by hand.",
    constraints: [
      "Strict separation between client firms — no data could leak across tenants",
      "The review workflow had to mirror an existing written SOP exactly",
      "Deliverables could only be released after the invoice was paid",
      "A fixed budget and a hard deadline tied to a client contract",
    ],
    built: [
      "Four role-scoped portals: client, admin, reviewer, billing",
      "A guided multi-step case workflow matching the review SOP, with draft-and-resume",
      "Consolidated invoicing across multiple cases, with payment-gated document release",
      "An AI pipeline that extracts providers, dates of service, and diagnoses from uploaded records",
      "A full audit log — every approval, delivery, and payment tied to its case",
    ],
    architecture: [
      { layer: "Interface", detail: "Next.js App Router, role-scoped views, TanStack Query" },
      { layer: "Services", detail: "NestJS REST API, RBAC guard, invoicing engine" },
      { layer: "Processing", detail: "Background jobs for document + AI extraction, with retries" },
      { layer: "Data", detail: "PostgreSQL via Prisma, document storage, append-only audit log" },
    ],
    outcome: [
      "Manual data entry from records dropped to near zero",
      "Clients self-serve case status instead of emailing for updates",
      "Every deliverable is now traceable to an approval and a payment",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "AI extraction", "RBAC"],
    tags: ["AI", "Healthcare", "Legal", "Platform"],
    published: true,
  },
  {
    slug: "furniture-bookings",
    index: "02",
    client: "Bookings platform",
    // TODO: replace placeholder copy below with the real project details.
    sector: "E-commerce / scheduling",
    title: "A furniture rental and bookings platform",
    summary:
      "A catalogue, availability calendar, and checkout for a furniture rental business — inventory that can’t be double-booked, and a dashboard the owner actually uses.",
    year: "2024",
    problem:
      "PLACEHOLDER — describe the business, what they were using before, and why it was failing them.",
    constraints: [
      "PLACEHOLDER — budget, timeline, or technical constraint",
      "PLACEHOLDER — a second real constraint",
    ],
    built: [
      "PLACEHOLDER — catalogue and search",
      "PLACEHOLDER — availability + double-booking prevention",
      "PLACEHOLDER — checkout and payments",
      "PLACEHOLDER — owner dashboard",
    ],
    architecture: [
      { layer: "Interface", detail: "PLACEHOLDER" },
      { layer: "Services", detail: "PLACEHOLDER" },
      { layer: "Data", detail: "PLACEHOLDER" },
    ],
    outcome: [
      "PLACEHOLDER — a real, specific result",
      "PLACEHOLDER — a second result",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    // Hidden until the real project details replace the PLACEHOLDER copy above.
    published: false,
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
