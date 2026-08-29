import type { Metadata } from "next";
import { Container, Section, SectionHead } from "@/components/primitives";
import { PageHero } from "@/components/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { GradientCard } from "@/components/gradient-card";
import { CtaSection } from "@/components/cta-section";
import { aboutCopy, mission, vision, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Enaryx Labs is a technology-focused innovation company working at the intersection of technology, business, and creativity.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={aboutCopy.eyebrow} title={aboutCopy.title} />

      <Section className="border-t-0">
        <Container className="max-w-[70ch]">
          <Reveal className="flex flex-col gap-5">
            {aboutCopy.paragraphs.map((p, i) => (
              <p
                key={p}
                className={
                  i === 0
                    ? "font-display text-2xl leading-snug text-text"
                    : "text-muted"
                }
              >
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <Container className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <GradientCard className="h-full">
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-brand">
                {mission.eyebrow}
              </span>
              <h2 className="mt-3 text-2xl">{mission.title}</h2>
              <div className="mt-4 flex flex-col gap-3 text-muted">
                {mission.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </GradientCard>
          </Reveal>
          <Reveal delay={0.05}>
            <GradientCard className="h-full" glow={false}>
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-brand">
                {vision.eyebrow}
              </span>
              <h2 className="mt-3 text-2xl">{vision.title}</h2>
              <div className="mt-4 flex flex-col gap-3 text-muted">
                {vision.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </GradientCard>
          </Reveal>
        </Container>
      </Section>

      {/* Our Values */}
      <Section>
        <Container>
          <SectionHead eyebrow="Our Values" title="What We Believe." />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <GradientCard className="h-full">
                  <p className="font-display text-xl">{v.title}</p>
                  <p className="mt-2 text-sm text-muted">{v.body}</p>
                </GradientCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
