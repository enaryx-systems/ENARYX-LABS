import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siVite,
  siRedux,
  siReactquery,
  siNodedotjs,
  siNestjs,
  siExpress,
  siPython,
  siFastapi,
  siGraphql,
  siSocketdotio,
  siGo,
  siPostgresql,
  siMysql,
  siMongodb,
  siRedis,
  siPrisma,
  siSupabase,
  siSqlite,
  siHuggingface,
  siLangchain,
  siAnthropic,
  siPytorch,
  siTensorflow,
  siGooglegemini,
  siOllama,
  siDocker,
  siKubernetes,
  siGithubactions,
  siGitlab,
  siTerraform,
  siNginx,
  siJest,
  siVercel,
  siNetlify,
  siCloudflare,
  siGodaddy,
  siFirebase,
  siDigitalocean,
  siRailway,
  siGooglecloud,
  siGit,
  siGithub,
  siFigma,
  siPostman,
  siSentry,
  siStripe,
  siStorybook,
  siJira,
  siClerk,
} from "simple-icons";

type Icon = { title: string; path: string; hex: string };
type Chip = { icon?: Icon; label: string; adapt?: boolean };

// Everything we reach for — frontend, backend, data, AI, infra, CI/CD,
// hosting and tooling. Official marks in brand colour; `adapt` = the mark
// is near-black, so follow the theme. A few (OpenAI, AWS…) ship no mark
// and render as a label.
const STACK: Chip[] = [
  // frontend
  { icon: siReact, label: "React" },
  { icon: siNextdotjs, label: "Next.js", adapt: true },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siJavascript, label: "JavaScript" },
  { icon: siTailwindcss, label: "Tailwind CSS" },
  { icon: siVite, label: "Vite" },
  { icon: siRedux, label: "Redux" },
  { icon: siReactquery, label: "TanStack Query" },
  // backend
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siNestjs, label: "NestJS" },
  { icon: siExpress, label: "Express", adapt: true },
  { icon: siPython, label: "Python" },
  { icon: siFastapi, label: "FastAPI" },
  { icon: siGraphql, label: "GraphQL" },
  { icon: siSocketdotio, label: "Socket.IO", adapt: true },
  { icon: siGo, label: "Go" },
  // data
  { icon: siPostgresql, label: "PostgreSQL" },
  { icon: siMysql, label: "MySQL" },
  { icon: siMongodb, label: "MongoDB" },
  { icon: siRedis, label: "Redis" },
  { icon: siPrisma, label: "Prisma", adapt: true },
  { icon: siSupabase, label: "Supabase" },
  { icon: siSqlite, label: "SQLite" },
  // ai / ml
  { label: "OpenAI" },
  { icon: siAnthropic, label: "Anthropic", adapt: true },
  { icon: siGooglegemini, label: "Gemini" },
  { icon: siHuggingface, label: "Hugging Face" },
  { icon: siLangchain, label: "LangChain" },
  { icon: siOllama, label: "Ollama", adapt: true },
  { icon: siPytorch, label: "PyTorch" },
  { icon: siTensorflow, label: "TensorFlow" },
  { label: "Qdrant" },
  // infra / ci-cd
  { icon: siDocker, label: "Docker" },
  { icon: siKubernetes, label: "Kubernetes" },
  { icon: siGithubactions, label: "GitHub Actions", adapt: true },
  { icon: siGitlab, label: "GitLab CI" },
  { icon: siTerraform, label: "Terraform" },
  { icon: siNginx, label: "NGINX" },
  { icon: siJest, label: "Jest" },
  { label: "Playwright" },
  // cloud / hosting
  { icon: siVercel, label: "Vercel", adapt: true },
  { icon: siNetlify, label: "Netlify" },
  { icon: siCloudflare, label: "Cloudflare" },
  { icon: siGodaddy, label: "GoDaddy" },
  { icon: siFirebase, label: "Firebase" },
  { icon: siDigitalocean, label: "DigitalOcean" },
  { icon: siRailway, label: "Railway", adapt: true },
  { icon: siGooglecloud, label: "Google Cloud" },
  { label: "AWS" },
  // tooling
  { icon: siGit, label: "Git" },
  { icon: siGithub, label: "GitHub", adapt: true },
  { icon: siClerk, label: "Clerk", adapt: true },
  { icon: siStripe, label: "Stripe" },
  { icon: siSentry, label: "Sentry" },
  { icon: siPostman, label: "Postman" },
  { icon: siStorybook, label: "Storybook" },
  { icon: siFigma, label: "Figma" },
  { icon: siJira, label: "Jira" },
];

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex w-max shrink-0 animate-marquee items-center gap-3 pr-3 [animation-duration:110s] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
      aria-hidden={ariaHidden || undefined}
    >
      {STACK.map(({ icon, label, adapt }, i) => (
        <span
          key={i}
          className="flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 shadow-[var(--card-shadow)]"
        >
          {icon ? (
            <svg
              viewBox="0 0 24 24"
              className={
                adapt
                  ? "h-[18px] w-[18px] shrink-0 text-text"
                  : "h-[18px] w-[18px] shrink-0"
              }
              fill={adapt ? "currentColor" : `#${icon.hex}`}
              aria-hidden="true"
            >
              <path d={icon.path} />
            </svg>
          ) : (
            <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[5px] bg-brand-tint font-mono text-[0.6rem] font-semibold text-brand">
              {label[0]}
            </span>
          )}
          <span className="whitespace-nowrap font-mono text-[0.8125rem] tracking-[0.02em] text-text">
            {label}
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * Horizontal infinite tech strip — the full toolkit, in brand colour. The
 * chips scroll and dissolve into the page background at both ends. Pure
 * CSS, pauses on hover, off under prefers-reduced-motion.
 */
export function TechMarquee() {
  return (
    <div
      className="group flex overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_88%,transparent)]"
      aria-label="Technology stack"
    >
      <Row />
      <Row ariaHidden />
    </div>
  );
}
