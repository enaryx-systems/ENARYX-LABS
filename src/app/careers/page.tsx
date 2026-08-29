import type { Metadata } from "next";
import { Container, Section, SectionHead } from "@/components/primitives";
import { PageHero } from "@/components/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { GradientCard } from "@/components/gradient-card";
import { CtaSection } from "@/components/cta-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "We keep the team small and senior, by design. Here's how hiring at Enaryx Labs works, and how to get on the list.",
  alternates: { canonical: "/careers" },
};

const principles = [
  {
    title: "Senior only",
    body: "No junior seats, no bench. Everyone who joins is someone we'd hand a client relationship to on day one.",
  },
  {
    title: "People we already trust",
    body: "The first hires are collaborators we've already shipped with — not a résumé pile from a job board.",
  },
  {
    title: "Same discipline, more hands",
    body: "Weekly demos, direct client contact, fixed scope. Growing the team doesn't mean adding layers between you and the work.",
  },
];

const tracks = [
  {
    dept: "Engineering",
    role: "Senior full-stack engineer",
    note: "TypeScript, Next.js/NestJS, comfortable owning a client relationship end to end.",
  },
  {
    dept: "AI",
    role: "AI/ML engineer",
    note: "Agent orchestration, evals, and retrieval — production experience, not just notebooks.",
  },
  {
    dept: "Design",
    role: "Product designer",
    note: "Interaction design for real applications, not just marketing pages.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Small and senior, by design."
        lede="Enaryx Labs stays small so every client gets people who've actually shipped, not a rotation. Growth looks the same way — a short list of people we already trust, added when the work calls for it."
      />

      <Section className="border-t-0">
        <Container>
          <SectionHead eyebrow="How this works" title="What hiring here looks like" />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-3">
            {principles.map((p) => (
              <RevealItem key={p.title}>
                <GradientCard className="h-full">
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.body}</p>
                </GradientCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead
            eyebrow="Roles we'll open first"
            title="No openings today — this is the shortlist"
            lede="Not live postings. If one of these is you, and you've shipped production work you can point to, get in touch before it's a job ad."
          />
          <div className="mt-14 flex flex-col divide-y divide-line border-y border-line">
            {tracks.map((t) => (
              <Reveal key={t.role}>
                <div className="grid gap-2 py-6 sm:grid-cols-[8rem_1fr] sm:gap-8">
                  <span className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-muted">
                    {t.dept}
                  </span>
                  <div>
                    <p className="font-display text-lg">{t.role}</p>
                    <p className="mt-1 text-sm text-muted">{t.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.05} className="mt-8">
            <p className="text-sm text-muted">
              Something else entirely? We still want to hear from you — send a
              short note and what you&apos;ve built to{" "}
              <a href={`mailto:${site.email}`} className="text-brand underline underline-offset-2">
                {site.email}
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </Section>

      <CtaSection
        title="Think you should be on the shortlist?"
        body="Tell us what you've shipped and where. We keep the list short, but we read every one."
      />
    </>
  );
}
