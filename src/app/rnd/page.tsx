import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHead } from "@/components/primitives";
import { PageHero } from "@/components/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { GradientCard } from "@/components/gradient-card";
import { CtaSection } from "@/components/cta-section";
import { rndAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "R&D",
  description:
    "Inside the Enaryx lab — AI systems, autonomous agents, intelligent automation, emerging technology, and our own early-stage product concepts.",
  alternates: { canonical: "/rnd" },
};

const principles = [
  {
    title: "We build to learn",
    body: "Every experiment ships as working code — a prototype we can run, measure, and break, not a slide deck.",
  },
  {
    title: "Client work feeds the lab",
    body: "Patterns we prove on real projects become reusable systems. Ideas from the lab make client products better.",
  },
  {
    title: "Honest about what's real",
    body: "We explore ambitious problems. We don't claim research results, benchmarks, or breakthroughs we don't have.",
  },
];

export default function RndPage() {
  return (
    <>
      <PageHero
        eyebrow="R&D"
        title="The Lab Is Always Experimenting."
        lede="Enaryx Labs isn't only a delivery team. We run our own track of research and prototyping into the technology we think will matter next — and fold what works back into the products we build."
      />

      <Section className="border-t-0">
        <Container>
          <SectionHead eyebrow="What we're exploring" title="Areas of active work" />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rndAreas.map((r, i) => (
              <RevealItem key={r.title}>
                <GradientCard className="h-full">
                  <span className="font-mono text-[0.8125rem] text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted">{r.body}</p>
                </GradientCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <section className="section-dark border-y border-line py-[var(--spacing-section)]">
        <Container>
          <SectionHead eyebrow="How we run it" title="Principles, not press releases" />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-3">
            {principles.map((p) => (
              <RevealItem key={p.title}>
                <div className="h-full rounded-2xl border border-line bg-surface p-7">
                  <h3 className="font-display text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.05} className="mt-10">
            <p className="text-sm text-muted">
              Working on something in one of these areas?{" "}
              <Link href="/contact" className="text-brand underline underline-offset-2">
                Tell us about it
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="Exploring something new?"
        body="If you're working at the edge of what's possible and need a team that can actually build it, let's talk."
      />
    </>
  );
}
