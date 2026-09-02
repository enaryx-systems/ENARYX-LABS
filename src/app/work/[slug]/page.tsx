import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClientLogo } from "@/components/client-logo";
import { Container, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { caseStudies } from "@/lib/content";

const stackBadgeStyles: Record<string, { background: string; border: string; text: string }> = {
  "Next.js": { background: "#F3F4F6", border: "#111827", text: "#111827" },
  "React": { background: "#EAFBFF", border: "#61DAFB", text: "#0B1120" },
  "TypeScript": { background: "#EEF4FF", border: "#3178C6", text: "#1D4ED8" },
  "Tailwind": { background: "#ECFEFF", border: "#06B6D4", text: "#0F766E" },
  "EmailJS": { background: "#FFF7ED", border: "#F59E0B", text: "#92400E" },
  "Vercel": { background: "#F3F4F6", border: "#111827", text: "#111827" },
  "NestJS": { background: "#FEE2E2", border: "#E11D48", text: "#881337" },
  "Prisma": { background: "#EEF2FF", border: "#4F46E5", text: "#312E81" },
  "PostgreSQL": { background: "#E0F2FE", border: "#2563EB", text: "#1E3A8A" },
  "Redis": { background: "#FEE2E2", border: "#DC2626", text: "#7F1D1D" },
  "OpenAI": { background: "#F5F3FF", border: "#8B5CF6", text: "#5B21B6" },
  "Qdrant": { background: "#F3E8FF", border: "#A855F7", text: "#6B21A8" },
  "Clerk": { background: "#EFF6FF", border: "#3B82F6", text: "#1D4ED8" },
  "Docker": { background: "#E0F2FE", border: "#0284C7", text: "#0C4A6E" },
  "AWS S3": { background: "#FFF7ED", border: "#F59E0B", text: "#9A5B00" },
  "SQL": { background: "#E0F2FE", border: "#0EA5E9", text: "#0C4A6E" },
  "React Native": { background: "#DBF4FF", border: "#61DAFB", text: "#0B1120" },
  "Node.js": { background: "#ECFDF5", border: "#16A34A", text: "#14532D" },
  "Anthropic": { background: "#F5F3FF", border: "#8B5CF6", text: "#5B21B6" },
  "LangGraph": { background: "#F0FDFA", border: "#14B8A6", text: "#115E59" },
  "Vercel AI SDK": { background: "#F3F4F6", border: "#111827", text: "#111827" },
  "Framer Motion": { background: "#F5F3FF", border: "#8B5CF6", text: "#5B21B6" },
  "GSAP": { background: "#F0FDF4", border: "#22C55E", text: "#166534" },
  "next/image": { background: "#F3F4F6", border: "#111827", text: "#111827" },
  "sharp": { background: "#FFF7ED", border: "#F97316", text: "#9A3B00" },
  "Zod": { background: "#EEF2FF", border: "#6366F1", text: "#3730A3" },
  "Booking logic": { background: "#F5F3FF", border: "#8B5CF6", text: "#5B21B6" },
};

const getStackBadgeStyle = (label: string) => {
  const match = Object.entries(stackBadgeStyles).find(([key]) =>
    label.toLowerCase().includes(key.toLowerCase())
  );
  return match ? match[1] : { background: "#F5F3FF", border: "#C4B5FD", text: "#4C1D95" };
};

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.filter((c) => c.published).map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const c = caseStudies.find((x) => x.slug === slug);
    if (!c) return { title: "Case study" };
    return {
      title: `${c.client} — case study`,
      description: c.summary,
      alternates: { canonical: `/work/${c.slug}` },
    };
  });
}

const Arrow = () => (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
    <path d="M3 8h9M8 4l4 4-4 4" />
  </svg>
);

/** Section shell: a mono label rail on the left, content on the right. */
function Section({
  label,
  children,
  wide = false,
}: {
  label: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <Reveal>
      <section className="grid gap-5 border-t border-line py-12 md:grid-cols-[11rem_1fr] md:gap-12 md:py-14">
        <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
          {label}
        </h2>
        <div className={wide ? "" : "max-w-[64ch]"}>{children}</div>
      </section>
    </Reveal>
  );
}

function Bullets({ items, strong = false }: { items: string[]; strong?: boolean }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((x) => (
        <li
          key={x}
          className={`grid grid-cols-[1rem_1fr] gap-2.5 ${strong ? "text-text" : "text-muted"}`}
        >
          <span className="mt-1 font-mono text-brand" aria-hidden>
            ›
          </span>
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug && x.published);
  if (!c) notFound();

  return (
    <>
      {/* ---- hero ---- */}
      <section className="section-wash relative overflow-hidden border-b border-line pt-[clamp(3.5rem,8vw,6rem)] pb-[clamp(2.5rem,6vw,4rem)]">
        <Container>
          <Reveal>
            <Eyebrow>
              Case {c.index} · {c.sector} · {c.year}
            </Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_16rem] md:items-stretch md:gap-12 lg:grid-cols-[1fr_20rem]">
            <div className="flex flex-col">
              <Reveal delay={0.05}>
                <h1 className="max-w-[22ch] text-[clamp(2.2rem,1.3rem+4vw,3.9rem)]">
                  {c.title}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-[58ch] text-xl text-muted">{c.summary}</p>
              </Reveal>
              {c.liveUrl && (
                <Reveal delay={0.14} className="mt-auto pt-7">
                  <a
                    href={c.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 font-mono text-[0.78rem] text-text transition-colors hover:border-brand hover:text-brand"
                  >
                    Visit the live site
                    <Arrow />
                  </a>
                </Reveal>
              )}
            </div>
            {(c.logo || c.logoDark) && (
              <Reveal delay={0.12} className="md:h-full">
                <ClientLogo
                  light={c.logo}
                  dark={c.logoDark}
                  name={c.client}
                  className="mx-auto h-44 w-full max-w-[18rem] rounded-2xl sm:h-56 md:mx-0 md:h-full md:min-h-[15rem] md:max-w-none"
                />
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      <section className="pb-[var(--spacing-section)]">
        <Container>
          {/* ---- problem ---- */}
          <Section label="The problem">
            <p className="text-lg text-muted">{c.problem}</p>
            {c.pains && (
              <div className="mt-6">
                <Bullets items={c.pains} />
              </div>
            )}
          </Section>

          {/* ---- approach ---- */}
          {c.approach && (
            <Section label="The approach">
              <Bullets items={c.approach} strong />
            </Section>
          )}

          {/* ---- capabilities ---- */}
          {c.capabilities ? (
            <Section label="What we built" wide>
              <div className="grid gap-4 sm:grid-cols-2">
                {c.capabilities.map((cap) => (
                  <div
                    key={cap.title}
                    className="card-grad rounded-2xl p-5 shadow-[var(--card-shadow)]"
                  >
                    <h3 className="font-display text-base uppercase tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{cap.body}</p>
                  </div>
                ))}
              </div>
            </Section>
          ) : (
            <Section label="What we built">
              <Bullets items={c.built} />
            </Section>
          )}

          {/* ---- how it works ---- */}
          {c.howItWorks && (
            <Section label="How it works" wide>
              <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {c.howItWorks.map((step, i) => (
                  <li
                    key={step.label}
                    className="rounded-2xl border border-line bg-surface p-5"
                  >
                    <span className="grad-chip grid h-7 w-7 place-items-center font-mono text-[0.7rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-sm uppercase tracking-tight">
                      {step.label}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted">{step.body}</p>
                  </li>
                ))}
              </ol>
            </Section>
          )}

          {/* ---- architecture ---- */}
          <Section label="Architecture" wide>
            <div className="overflow-hidden rounded-2xl border border-line">
              {c.architecture.map((row, i) => (
                <div
                  key={row.layer}
                  className={`grid gap-2 px-4 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6 ${
                    i === 0 ? "bg-brand-tint" : "bg-surface"
                  } ${i < c.architecture.length - 1 ? "border-b border-line" : ""}`}
                >
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-brand">
                    {row.layer}
                  </span>
                  <span className="text-sm text-muted">{row.detail}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* ---- engineering highlights ---- */}
          {c.highlights && (
            <Section label="Engineering" wide>
              <div className="grid gap-4 sm:grid-cols-2">
                {c.highlights.map((h) => (
                  <div key={h.title} className="rounded-2xl border border-line bg-surface p-5">
                    <h3 className="font-display text-base uppercase tracking-tight">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{h.body}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* ---- by the numbers ---- */}
          {c.targets && (
            <Section label="By the numbers" wide>
              <div className="grid gap-px overflow-hidden rounded-2xl border border-line-strong bg-line-strong sm:grid-cols-3">
                {c.targets.map((t) => (
                  <div key={t.label} className="bg-surface p-6">
                    <div className="font-display text-[clamp(1.6rem,1rem+2vw,2.4rem)] text-gradient">
                      {t.value}
                    </div>
                    <p className="mt-2 text-sm text-muted">{t.label}</p>
                  </div>
                ))}
              </div>
              {c.targetsNote && (
                <p className="mt-3 font-mono text-[0.68rem] text-muted">{c.targetsNote}</p>
              )}
            </Section>
          )}

          {/* ---- outcome ---- */}
          <Section label="Outcome">
            <Bullets items={c.outcome} strong />
          </Section>

          {/* ---- stack ---- */}
          <Section label="Stack" wide>
            <div className="flex flex-wrap gap-2">
              {c.stack.map((s) => {
                const tone = getStackBadgeStyle(s);
                return (
                  <span
                    key={s}
                    className="rounded-full border px-2.5 py-1 font-mono text-[0.72rem] tracking-[0.03em]"
                    style={{
                      borderColor: tone.border,
                      background: tone.background,
                      color: tone.text,
                    }}
                  >
                    {s}
                  </span>
                );
              })}
            </div>
          </Section>

          <div className="border-t border-line pt-10">
            <Link
              href="/work"
              className="font-mono text-[0.8125rem] text-muted underline-offset-4 hover:text-text hover:underline"
            >
              ← All work
            </Link>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
