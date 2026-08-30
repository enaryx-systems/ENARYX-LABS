import {
  siReact,
  siNextdotjs,
  siTypescript,
  siNodedotjs,
  siNestjs,
  siPostgresql,
  siPrisma,
  siDocker,
  siVercel,
  siLangchain,
  siHuggingface,
  siAnthropic,
  siGithubactions,
} from "simple-icons";

type Icon = { title: string; path: string; hex: string };

// The tools we actually build with — official marks in brand colour.
// `adapt` = the brand colour is near-black, so follow the theme instead.
const STACK: { icon: Icon; label: string; adapt?: boolean }[] = [
  { icon: siReact, label: "React" },
  { icon: siNextdotjs, label: "Next.js", adapt: true },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siNestjs, label: "NestJS" },
  { icon: siPostgresql, label: "PostgreSQL" },
  { icon: siPrisma, label: "Prisma", adapt: true },
  { icon: siDocker, label: "Docker" },
  { icon: siVercel, label: "Vercel", adapt: true },
  { icon: siLangchain, label: "LangChain" },
  { icon: siHuggingface, label: "Hugging Face" },
  { icon: siAnthropic, label: "Anthropic", adapt: true },
  { icon: siGithubactions, label: "CI/CD" },
];

function Row() {
  return (
    <div className="flex w-max shrink-0 animate-marquee items-center gap-9 pr-9 group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:gap-12 sm:pr-12">
      {STACK.map(({ icon, label, adapt }, i) => (
        <span key={i} className="flex shrink-0 items-center gap-2.5">
          <svg
            viewBox="0 0 24 24"
            className={adapt ? "h-5 w-5 shrink-0 text-text/80" : "h-5 w-5 shrink-0"}
            fill={adapt ? "currentColor" : `#${icon.hex}`}
            aria-hidden="true"
          >
            <path d={icon.path} />
          </svg>
          <span className="whitespace-nowrap font-mono text-[0.8125rem] tracking-[0.02em] text-muted">
            {label}
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * Horizontal infinite tech strip — the tools we build with, in brand
 * colour, scrolling and fading out at both ends. Pure CSS, pauses on
 * hover, off under prefers-reduced-motion. Sits beside the section heading.
 */
export function TechMarquee() {
  return (
    <div
      className="group relative flex overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
      aria-label="Technology stack"
    >
      <Row />
      <Row />
    </div>
  );
}
