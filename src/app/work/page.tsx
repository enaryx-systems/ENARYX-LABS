import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/primitives";
import { PageHero } from "@/components/page-hero";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { GradientCard } from "@/components/gradient-card";
import { CtaSection } from "@/components/cta-section";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Enaryx Labs — AI pipelines and full-stack products, each broken down as problem, constraints, architecture, and outcome.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const studies = caseStudies.filter((c) => c.published);

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Builds, front to back."
        lede="Each case study is structured the same way — the problem, the constraints, what we built, the architecture, and the outcome. No screenshots without context."
      />

      <section className="py-[var(--spacing-section)]">
        <Container>
          <RevealGroup
            className={
              studies.length === 1
                ? "mx-auto grid max-w-2xl gap-5"
                : "grid gap-5 md:grid-cols-2"
            }
          >
            {studies.map((c) => (
              <RevealItem key={c.slug}>
                <GradientCard className="h-full">
                  <Link href={`/work/${c.slug}`} className="group flex h-full flex-col">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-muted">
                      <span className="text-brand">Case {c.index}</span>
                      <span>·</span>
                      <span>{c.sector}</span>
                      <span>·</span>
                      <span>{c.year}</span>
                    </div>
                    <h2 className="mt-3 text-[clamp(1.5rem,1.2rem+1vw,2rem)]">
                      {c.title}
                    </h2>
                    <p className="mt-3 max-w-[60ch] text-muted">{c.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {(c.tags ?? c.stack).map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-line-strong bg-surface px-2.5 py-1 font-mono text-[0.7rem] tracking-[0.03em] text-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <span className="mt-auto flex items-center gap-1.5 pt-6 font-mono text-[0.8125rem] text-muted transition-colors group-hover:text-text">
                      Read the case study
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                        <path d="M3 8h9M8 4l4 4-4 4" />
                      </svg>
                    </span>
                  </Link>
                </GradientCard>
              </RevealItem>
            ))}

            {/* More work is in progress — keep the grid from looking empty */}
            {studies.length < 2 && (
              <RevealItem>
                <div className="flex h-full flex-col justify-center rounded-[24px] border border-dashed border-line-strong p-7 text-center">
                  <p className="font-display text-lg">More case studies soon</p>
                  <p className="mt-2 text-sm text-muted">
                    We&apos;re writing up recent builds. Want the short version now?{" "}
                    <Link href="/contact" className="text-brand underline underline-offset-2">
                      Ask us
                    </Link>
                    .
                  </p>
                </div>
              </RevealItem>
            )}
          </RevealGroup>
        </Container>
      </section>

      <CtaSection title="Want one of these for your product?" />
    </>
  );
}
