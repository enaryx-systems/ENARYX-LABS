/* ---------------------------------------------------------------
   Site content. No CMS — edit here. Sourced from the approved
   Enaryx Labs copy deck (2026-08-29).
   --------------------------------------------------------------- */

export type Service = {
  slug: string;
  index: string;
  title: string;
  summary: string;
};

/** "What We Do" */
export const services: Service[] = [
  {
    slug: "software-product-development",
    index: "01",
    title: "Software & Product Development",
    summary:
      "We design and develop modern digital products — from web platforms and mobile applications to custom business systems.",
  },
  {
    slug: "ai-intelligent-solutions",
    index: "02",
    title: "AI & Intelligent Solutions",
    summary:
      "We explore and build AI-powered solutions that automate processes, improve decision-making, and create smarter user experiences.",
  },
  {
    slug: "business-automation",
    index: "03",
    title: "Business Automation",
    summary:
      "We help businesses reduce repetitive work and improve efficiency through workflow automation, integrations, and intelligent systems.",
  },
  {
    slug: "digital-platforms",
    index: "04",
    title: "Digital Platforms",
    summary:
      "We create scalable platforms that connect customers, businesses, teams, and services through seamless digital experiences.",
  },
  {
    slug: "technology-consulting",
    index: "05",
    title: "Technology Consulting",
    summary:
      "Have an idea but don't know where to start? We help turn concepts into practical technology roadmaps and execution plans.",
  },
  {
    slug: "innovation-rd",
    index: "06",
    title: "Innovation & R&D",
    summary:
      "We experiment with emerging technologies and develop new products that have the potential to solve meaningful problems.",
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

/** "Why Enaryx Labs?" — Technology With Purpose. */
export const differentiators: Pillar[] = [
  { title: "Innovation", body: "We continuously explore new technologies and unconventional approaches to solve difficult problems." },
  { title: "Practical Thinking", body: "Technology should create measurable value. We focus on solutions that are useful — not technology for technology's sake." },
  { title: "Scalability", body: "We build with the future in mind, creating systems that can evolve as your business grows." },
  { title: "User-Centric Design", body: "Products succeed when people actually enjoy using them. We put usability and experience at the center of development." },
  { title: "Speed", body: "We believe in moving from idea to execution quickly while maintaining quality." },
  { title: "Long-Term Vision", body: "We don't think only about today's requirements. We build foundations that can support tomorrow's opportunities." },
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
  eyebrow: "For Startups",
  title: "Have an Idea? Let's Build It.",
  lede: "You don't always need a large team to build a great product.",
  body: "Enaryx Labs can help founders move from idea to prototype to MVP to product to growth. We can support you with product strategy, UX/UI, technology selection, development, testing, deployment, and ongoing improvements.",
  path: ["Idea", "Prototype", "MVP", "Product", "Growth"],
  closing: "Your idea deserves more than a concept. Let's turn it into something people can use.",
};

export const forBusinesses = {
  eyebrow: "For Businesses",
  title: "Make Your Business Smarter.",
  lede: "Every business has processes that can be improved.",
  list: [
    "Automating repetitive tasks",
    "Improving operational efficiency",
    "Connecting existing systems",
    "Creating digital customer experiences",
    "Managing business data",
    "Building internal applications",
    "Reducing manual processes",
    "Improving productivity",
  ],
  closing: "Technology should work for your business — not create more work.",
};

export type RndArea = { title: string; body: string };

/** "Innovation & R&D" — Exploring What Comes Next. */
export const rndAreas: RndArea[] = [
  { title: "Artificial Intelligence", body: "Intelligent systems, automation, agents, and AI-powered applications." },
  { title: "Data & Analytics", body: "Turning information into insights and better decisions." },
  { title: "Automation", body: "Building systems that reduce manual effort and improve efficiency." },
  { title: "Emerging Technologies", body: "Exploring new technologies that could create future products and opportunities." },
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

/** "Who We Work With" */
export const audiences: Audience[] = [
  { title: "Founders", body: "Transform your idea into a working product." },
  { title: "Startups", body: "Build, launch, validate, and scale your MVP." },
  { title: "Small & Medium Businesses", body: "Modernize operations and automate processes." },
  { title: "Enterprises", body: "Develop custom technology solutions and integrations." },
  { title: "Organizations", body: "Use technology to improve services, operations, and customer experiences." },
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
  published: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "smart-med-records",
    index: "01",
    client: "Smart Med Records",
    sector: "Legal / healthcare",
    title: "A records-review platform with an AI extraction pipeline",
    summary:
      "Multi-tenant portals for law firms and reviewers, a guided case workflow, payment-gated deliverables, and AI that reads structured data out of uploaded medical records.",
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
    a: "Enaryx Labs is a technology and innovation company focused on developing digital products, software solutions, AI-powered applications, automation systems, and emerging technology.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. We can work with founders and startups from the early idea stage through MVP development and product growth.",
  },
  {
    q: "Can Enaryx Labs build a custom software solution?",
    a: "Yes. We develop customized technology solutions based on specific business requirements.",
  },
  {
    q: "Do you provide AI solutions?",
    a: "Yes. AI can be incorporated into applications, automation workflows, analytics systems, and other products where it provides meaningful value.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. Our technology services can be delivered to clients and partners globally.",
  },
  {
    q: "I have only an idea. Can you help?",
    a: "Absolutely. You don't need to have everything figured out. We can help evaluate the idea, define the product, identify the technology requirements, and create a development roadmap.",
  },
];
