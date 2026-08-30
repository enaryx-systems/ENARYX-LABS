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

type Icon = { title: string; path: string };

// The tools we actually build with — official marks, monochrome for consistency.
const STACK: { icon: Icon; label: string }[] = [
  { icon: siReact, label: "React" },
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siNestjs, label: "NestJS" },
  { icon: siPostgresql, label: "PostgreSQL" },
  { icon: siPrisma, label: "Prisma" },
  { icon: siDocker, label: "Docker" },
  { icon: siVercel, label: "Vercel" },
  { icon: siLangchain, label: "LangChain" },
  { icon: siHuggingface, label: "Hugging Face" },
  { icon: siAnthropic, label: "Anthropic" },
  { icon: siGithubactions, label: "CI/CD" },
];

function Row() {
  return (
    <div className="animate-marquee-y flex shrink-0 flex-col gap-6 pb-6 group-hover:[animation-play-state:paused] motion-reduce:[animation:none]">
      {STACK.map(({ icon, label }, i) => (
        <span
          key={i}
          className="flex shrink-0 items-center gap-3 text-muted transition-colors hover:text-text"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 shrink-0"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={icon.path} />
          </svg>
          <span className="whitespace-nowrap font-mono text-[0.8125rem] tracking-[0.02em]">
            {label}
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * Vertical infinite tech strip — the tools we build with, scrolling upward
 * and fading out at both ends. Pure CSS, pauses on hover, off under
 * prefers-reduced-motion. Sits beside the section heading.
 */
export function TechMarquee() {
  return (
    <div
      className="group relative flex h-[clamp(16rem,32vw,24rem)] flex-col overflow-hidden [mask-image:linear-gradient(180deg,transparent,#000_14%,#000_86%,transparent)]"
      aria-label="Technology stack"
    >
      <Row />
      <Row />
    </div>
  );
}
