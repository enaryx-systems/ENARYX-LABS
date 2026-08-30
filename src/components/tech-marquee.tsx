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
    <div className="flex w-max shrink-0 animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
      {STACK.map(({ icon, label, adapt }, i) => (
        <span
          key={i}
          className="flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 shadow-[var(--card-shadow)]"
        >
          <svg
            viewBox="0 0 24 24"
            className={adapt ? "h-[18px] w-[18px] shrink-0 text-text" : "h-[18px] w-[18px] shrink-0"}
            fill={adapt ? "currentColor" : `#${icon.hex}`}
            aria-hidden="true"
          >
            <path d={icon.path} />
          </svg>
          <span className="whitespace-nowrap font-mono text-[0.8125rem] tracking-[0.02em] text-text">
            {label}
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * Horizontal infinite tech strip — the tools we build with, in brand
 * colour. The chips scroll and dissolve into the page background at both
 * ends. Pure CSS, pauses on hover, off under prefers-reduced-motion.
 */
export function TechMarquee() {
  return (
    <div
      className="group flex overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_88%,transparent)]"
      aria-label="Technology stack"
    >
      <Row />
      <Row />
    </div>
  );
}
