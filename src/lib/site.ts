export const site = {
  name: "Enaryx Labs",
  domain: "enaryxlabs.com",
  url: "https://enaryxlabs.com",
  email: "hello@enaryxlabs.com",
  // TODO: replace with your real Cal.com link
  calLink: "https://cal.com/enaryx/intro",
  tagline: "Build. Innovate. Scale.",
  description:
    "Technology that turns ambitious ideas into real-world products. Enaryx Labs is a technology and innovation company focused on building practical digital solutions, intelligent products, and scalable technology for businesses and emerging markets.",
  taglineKeywords: "Technology • Innovation • AI • Software • Automation",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

// TODO: fill in real profile URLs, or drop the ones you don't use.
export const social = [
  { label: "LinkedIn", href: "https://linkedin.com/company/enaryxlabs" },
  { label: "X", href: "https://x.com/enaryxlabs" },
  { label: "Instagram", href: "https://instagram.com/enaryxlabs" },
] as const;
