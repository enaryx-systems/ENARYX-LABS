export const site = {
  name: "Enaryx Labs",
  domain: "enaryxlabs.com",
  url: "https://enaryxlabs.com",
  email: "hello@enaryxlabs.com",
  // TODO: replace with your real Cal.com link
  calLink: "https://cal.com/enaryx/intro",
  tagline: "Technology & Innovation",
  description:
    "Enaryx Labs builds intelligent software, AI systems, digital products and automation for ambitious ideas and businesses.",
  taglineKeywords: "Technology • Innovation • AI • Software • Automation",
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "R&D", href: "/rnd" },
  { label: "Careers", href: "/careers" },
] as const;

/** Full route list — used by the 404 recovery nav and the footer. */
export const allRoutes = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "R&D", href: "/rnd" },
  { label: "Process", href: "/process" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

// TODO: fill in real profile URLs, or drop the ones you don't use.
export const social = [
  { label: "LinkedIn", href: "https://linkedin.com/company/enaryxlabs" },
  { label: "X", href: "https://x.com/enaryxlabs" },
  { label: "Instagram", href: "https://instagram.com/enaryxlabs" },
] as const;
