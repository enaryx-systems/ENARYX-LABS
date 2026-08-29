import Link from "next/link";
import { Container, Eyebrow, Section, SectionHead } from "@/components/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { MagneticLink } from "@/components/magnetic";
import { CtaButton } from "@/components/cta-button";
import { HeroNetwork } from "@/components/hero-network";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { GradientCard } from "@/components/gradient-card";
import { Marquee } from "@/components/marquee";
import { WordReveal } from "@/components/word-reveal";
import { FeaturedProduct } from "@/components/featured-product";
import { Constellation } from "@/components/constellation";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import {
  services,
  differentiators,
  aboutCopy,
  audiences,
  forStartups,
  forBusinesses,
  caseStudies,
  rndAreas,
} from "@/lib/content";

const trustWords = ["AI", "Software", "Automation", "Digital Products", "R&D"];

export default function HomePage() {
  const featured = caseStudies.filter((c) => c.published).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="relative grid items-center gap-12 pt-[clamp(3rem,7vw,5rem)] pb-[clamp(3rem,7vw,5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <Reveal>
              <Eyebrow>Enaryx Labs</Eyebrow>
            </Reveal>
            <WordReveal
              as="h1"
              text="BUILD WHAT COMES NEXT."
              gradientWord="NEXT."
              className="mt-6 max-w-[13ch] text-[clamp(2.6rem,1rem+7vw,5.5rem)] uppercase"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-[46ch] text-xl text-muted">
                Enaryx Labs builds intelligent technology, digital products,
                and solutions for the problems of tomorrow.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-wrap gap-3">
                <CtaButton>Start a Conversation</CtaButton>
                <MagneticLink href="/services" variant="outline">
                  Explore Enaryx
                </MagneticLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mx-auto">
            <HeroNetwork />
          </Reveal>
        </Container>
        <ScrollIndicator />
      </section>

      {/* Trust / positioning strip */}
      <section className="border-y border-line bg-surface/60 py-14">
        <Container>
          <Reveal className="text-center">
            <p className="font-mono text-[0.8125rem] uppercase tracking-[0.16em] text-muted">
              Technology for ideas that matter.
            </p>
          </Reveal>
          <Reveal delay={0.05} className="mt-8">
            <Marquee items={trustWords} />
          </Reveal>
        </Container>
      </section>

      {/* Introduction — The Lab */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Eyebrow>01 — The Lab</Eyebrow>
            <h2 className="mt-6 max-w-[16ch] text-[clamp(1.9rem,1.2rem+2.6vw,3rem)]">
              Technology is changing everything. We want to help shape what
              comes next.
            </h2>
            <p className="mt-6 max-w-[48ch] text-muted">{aboutCopy.paragraphs[1]}</p>
            <Link
              href="/about"
              className="mt-6 inline-block font-mono text-[0.8125rem] text-brand underline-offset-4 hover:underline"
            >
              More about the lab →
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="glass relative aspect-[4/5] overflow-hidden rounded-[24px] p-6">
              <div
                className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
                style={{ background: "radial-gradient(circle, var(--glow-violet), var(--glow-cyan) 65%, transparent 80%)" }}
                aria-hidden
              />
              {["AI", "Automation", "Software", "Innovation"].map((label, i) => (
                <span
                  key={label}
                  className="glass absolute rounded-full px-3.5 py-2 font-mono text-[0.72rem] uppercase tracking-[0.06em] text-muted"
                  style={
                    [
                      { top: "12%", left: "10%" },
                      { top: "28%", right: "8%" },
                      { bottom: "22%", left: "14%" },
                      { bottom: "10%", right: "14%" },
                    ][i]
                  }
                >
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* What We Build */}
      <Section>
        <Container>
          <SectionHead eyebrow="What We Build" title="From Idea to Impact" />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <RevealItem key={s.slug}>
                <GradientCard className="h-full">
                  <Link href={`/services#${s.slug}`} className="flex h-full flex-col gap-4">
                    <span className="font-mono text-[0.8125rem] text-brand">{s.index}</span>
                    <h3 className="text-xl">{s.title}</h3>
                    <p className="text-sm text-muted">{s.summary}</p>
                    <span className="mt-auto flex items-center gap-1.5 pt-2 font-mono text-[0.78125rem] text-muted transition-colors group-hover:text-text">
                      Learn more
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                        <path d="M3 8h9M8 4l4 4-4 4" />
                      </svg>
                    </span>
                  </Link>
                </GradientCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Featured product */}
      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <Reveal>
            <FeaturedProduct />
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow>From Idea to Reality</Eyebrow>
            <h2 className="mt-6 max-w-[16ch] text-[clamp(1.9rem,1.2rem+2vw,2.8rem)]">
              What shipping with us looks like
            </h2>
            <p className="mt-5 max-w-[46ch] text-muted">
              A live system, not a slide. This is the shape of what we ship:
              an engine doing real work, instrumented and observable from day
              one.
            </p>
            <Link
              href="/work"
              className="mt-6 inline-block font-mono text-[0.8125rem] text-brand underline-offset-4 hover:underline"
            >
              See the work →
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* Innovation & R&D */}
      <section className="relative overflow-hidden border-y border-line py-[var(--spacing-section)]">
        <div className="bg-grid absolute inset-0 -z-0" aria-hidden />
        <Container className="relative">
          <WordReveal
            as="h2"
            text="WE DON'T JUST FOLLOW TECHNOLOGY. WE EXPERIMENT WITH WHAT'S NEXT."
            className="mx-auto max-w-[22ch] text-center text-[clamp(1.9rem,1.1rem+3vw,3.2rem)]"
          />
          <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rndAreas.map((r) => (
              <RevealItem key={r.title}>
                <GradientCard className="h-full" glow={false}>
                  <h3 className="font-display text-lg">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted">{r.body}</p>
                </GradientCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Technology ecosystem */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="Ecosystem"
            title="A technology ecosystem, not a stack list"
            className="mx-auto text-center"
          />
          <Reveal delay={0.05} className="mt-14">
            <Constellation />
          </Reveal>
        </Container>
      </Section>

      {/* Big statement */}
      <section className="border-y border-line py-[var(--spacing-section)]">
        <Container>
          <WordReveal
            as="h2"
            text="BIG IDEAS NEED GREAT ENGINEERING."
            className="mx-auto max-w-[16ch] text-center text-[clamp(2.2rem,1rem+5vw,4.5rem)]"
          />
        </Container>
      </section>

      {/* Why Enaryx */}
      <Section>
        <Container>
          <SectionHead eyebrow="Why Enaryx" title="Technology With Purpose." />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <RevealItem key={d.title}>
                <GradientCard className="relative h-full overflow-hidden">
                  <span
                    className="absolute -right-2 -top-6 font-display text-7xl text-text/[0.05]"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative font-display text-xl">{d.title}</h3>
                  <p className="relative mt-2 text-sm text-muted">{d.body}</p>
                </GradientCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Who We Work With */}
      <Section>
        <Container>
          <SectionHead eyebrow="Who We Work With" title="From First Idea to Growing Business." />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((a) => (
              <RevealItem key={a.title}>
                <GradientCard className="h-full">
                  <h3 className="font-display text-lg">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted">{a.body}</p>
                </GradientCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* For Startups / For Businesses */}
      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <GradientCard className="flex h-full flex-col">
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-brand">
                  {forStartups.eyebrow}
                </span>
                <h2 className="mt-3 text-2xl">{forStartups.title}</h2>
                <p className="mt-3 text-muted">{forStartups.lede}</p>
                <p className="mt-3 text-sm text-muted">{forStartups.body}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[0.75rem] text-brand">
                  {forStartups.path.map((p, i) => (
                    <span key={p} className="flex items-center gap-2">
                      <span className="rounded-lg border border-line-strong bg-bg px-3 py-1.5 text-text">
                        {p}
                      </span>
                      {i < forStartups.path.length - 1 && <span aria-hidden>→</span>}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm text-muted">{forStartups.closing}</p>
                <div className="mt-auto pt-6">
                  <CtaButton>Start a Conversation</CtaButton>
                </div>
              </GradientCard>
            </Reveal>
            <Reveal delay={0.05}>
              <GradientCard className="flex h-full flex-col" glow={false}>
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-brand">
                  {forBusinesses.eyebrow}
                </span>
                <h2 className="mt-3 text-2xl">{forBusinesses.title}</h2>
                <p className="mt-3 text-muted">{forBusinesses.lede}</p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {forBusinesses.list.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-sm text-muted">{forBusinesses.closing}</p>
              </GradientCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Selected work */}
      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead
              eyebrow="Selected Work"
              title="Ideas We've Already Built"
              lede="A look at what shipping with us actually looks like."
            />
            <Link
              href="/work"
              className="font-mono text-[0.8125rem] text-muted underline-offset-4 hover:text-text hover:underline"
            >
              All work →
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {featured.map((c) => (
              <Reveal key={c.slug}>
                <GradientCard className="h-full" glow={false}>
                  <Link href={`/work/${c.slug}`} className="group flex h-full flex-col">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-muted">
                      <span className="text-brand">Case {c.index}</span>
                      <span>·</span>
                      <span>{c.sector}</span>
                      <span>·</span>
                      <span>{c.year}</span>
                    </div>
                    <h3 className="mt-3 text-2xl">{c.client}</h3>
                    <p className="mt-2 text-muted">{c.summary}</p>
                    <span className="mt-auto flex items-center gap-1.5 pt-6 font-mono text-[0.8125rem] text-muted transition-colors group-hover:text-text">
                      Read the case study
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                        <path d="M3 8h9M8 4l4 4-4 4" />
                      </svg>
                    </span>
                  </Link>
                </GradientCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <Reveal>
              <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" />
            </Reveal>
            <Reveal delay={0.05}>
              <Faq />
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Let's Build What's Next."
        body="Have an idea, problem, or technology challenge? Let's explore it together."
      />
    </>
  );
}
