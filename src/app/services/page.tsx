import type { Metadata } from "next";
import { Container, Section, SectionHead } from "@/components/primitives";
import { PageHero } from "@/components/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { GradientCard } from "@/components/gradient-card";
import { ServiceNav } from "@/components/service-nav";
import { ServicesDemo } from "@/components/services-demo";
import { CtaButton } from "@/components/cta-button";
import { CtaSection } from "@/components/cta-section";
import {
  services,
  technologyCapabilities,
  productsAndSolutions,
  rndAreas,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software & product development, AI & intelligent solutions, business automation, digital platforms, technology consulting, and innovation & R&D.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="From Idea to Impact."
        lede="At Enaryx Labs, we don't just build software. We build solutions around real problems."
      />

      <Container className="border-b border-line pt-6">
        <ServiceNav services={services} />
      </Container>

      {services.map((s, i) => (
        <Section
          key={s.slug}
          id={s.slug}
          className="relative scroll-mt-[140px] overflow-hidden border-t-0"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-4 right-0 select-none font-display text-[13rem] leading-none text-brand-tint/70 sm:text-[17rem]"
          >
            {s.index}
          </span>
          {i % 2 === 1 && (
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface/60 to-transparent"
              aria-hidden
            />
          )}

          <Container className="relative max-w-[70ch]">
            <Reveal>
              <span className="font-mono text-[0.8125rem] text-brand">{s.index}</span>
              <h2 className="mt-3 text-[clamp(1.8rem,1.2rem+2vw,2.6rem)]">{s.title}</h2>
              <p className="mt-4 text-xl text-muted">{s.summary}</p>
            </Reveal>
          </Container>
        </Section>
      ))}

      {/* Our Technology */}
      <Section id="technology">
        <Container>
          <SectionHead
            eyebrow="Our Technology"
            title="Built With Modern Technology."
            lede="We select technologies based on the problem — not trends. The stack is chosen according to each product's requirements, scalability, security, and long-term goals."
          />
          <RevealGroup className="mt-10 flex flex-wrap gap-3">
            {technologyCapabilities.map((t) => (
              <RevealItem
                key={t}
                className="glass rounded-xl px-4 py-2 font-mono text-[0.8125rem] text-muted"
              >
                {t}
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Innovation & R&D */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="Innovation & R&D"
            title="Exploring What Comes Next."
            lede="Technology is constantly changing. We experiment with emerging technologies and investigate new ways to solve problems."
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2">
            {rndAreas.map((r) => (
              <RevealItem key={r.title}>
                <GradientCard className="h-full">
                  <h3 className="font-display text-xl">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted">{r.body}</p>
                </GradientCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Products & Solutions */}
      <Section id="products-solutions">
        <Container>
          <SectionHead
            eyebrow="Products & Solutions"
            title="Ideas We Can Build"
            lede="Our technology capabilities can be applied across multiple areas."
          />
          <RevealGroup className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {productsAndSolutions.map((p) => (
              <RevealItem key={p} className="glass rounded-2xl px-4 py-4 text-sm text-text">
                {p}
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.1} className="mt-10 flex flex-col items-start gap-4">
            <p className="text-muted">
              Have something different in mind? We love challenging problems.
            </p>
            <CtaButton>Discuss Your Idea</CtaButton>
          </Reveal>
        </Container>
      </Section>

      {/* Live demo */}
      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHead
              eyebrow="Live demo"
              title="A working agent, not a screenshot"
              lede="Most companies describe their AI work. Here's a small piece of it running on this page — ask it anything about what we do."
            />
          </Reveal>
          <Reveal delay={0.05}>
            <ServicesDemo />
          </Reveal>
        </Container>
      </Section>

      <CtaSection
        title="Have Something Different in Mind?"
        body="We love challenging problems. Tell us what you're thinking and we'll tell you how we'd approach it."
      />
    </>
  );
}
