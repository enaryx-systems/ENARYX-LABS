import Link from "next/link";
import { Container, Eyebrow, Section, SectionHead } from "@/components/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { MagneticLink } from "@/components/magnetic";
import { CtaButton } from "@/components/cta-button";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { GradientCard } from "@/components/gradient-card";
import { WordReveal } from "@/components/word-reveal";
import { FeaturedProduct } from "@/components/featured-product";
import { Constellation } from "@/components/constellation";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { TechMarquee } from "@/components/tech-marquee";
import {
  services,
  differentiators,
  labTriad,
  audiences,
  forStartups,
  forBusinesses,
  rndAreas,
  caseStudies,
} from "@/lib/content";

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function HomePage() {
  const featured = caseStudies.filter((c) => c.published);

  return (
    <>
      {/* ===================== 01 · Hero — who we are ==================== */}
      <section className="section-wash relative overflow-hidden">
        <HeroBackdrop />
        <div
          className="pointer-events-none absolute left-1/2 top-[8%] h-[30rem] w-[46rem] -translate-x-1/2 rounded-full blur-[170px]"
          style={{ background: "var(--glow-violet)" }}
          aria-hidden
        />
        <Container className="relative flex flex-col items-center pt-[clamp(4rem,11vw,8rem)] pb-[clamp(4rem,10vw,7rem)] text-center">
          <Reveal immediate>
            <Eyebrow className="justify-center">
              Enaryx Labs · Technology &amp; Innovation
            </Eyebrow>
          </Reveal>
          <WordReveal
            immediate
            as="h1"
            text="BUILD WHAT COMES NEXT."
            gradientWord="NEXT."
            className="mt-7 max-w-[15ch] text-[clamp(2.8rem,1rem+8vw,6.5rem)] uppercase"
          />
          <Reveal immediate delay={0.2}>
            <p className="mx-auto mt-7 max-w-[52ch] text-lg text-muted sm:text-xl">
              We build intelligent software, digital products and systems that
              turn ambitious ideas into real-world technology.
            </p>
          </Reveal>
          <Reveal immediate delay={0.28}>
            <div className="mt-10 flex flex-nowrap items-stretch justify-center gap-2.5 sm:gap-3">
              <CtaButton className="flex-1 sm:flex-initial">
                Start a Conversation
              </CtaButton>
              <MagneticLink
                href="/work"
                variant="outline"
                className="flex-1 sm:flex-initial"
              >
                Explore Our Work
              </MagneticLink>
            </div>
          </Reveal>
        </Container>
        <ScrollIndicator />
      </section>

      {/* =============== 02 · The Lab — why we exist =============== */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <Reveal>
            <Eyebrow>01 — The Lab</Eyebrow>
            <WordReveal
              as="h2"
              text="WE BUILD TECHNOLOGY FOR IDEAS THAT MATTER."
              className="mt-6 max-w-[18ch] text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] uppercase"
            />
            <p className="mt-6 max-w-[50ch] text-muted">
              Enaryx Labs is a technology and innovation company building
              intelligent software, digital products and emerging technology for
              ambitious ideas and real-world problems.
            </p>
          </Reveal>

          <RevealGroup className="flex flex-col divide-y divide-line border-y border-line">
            {labTriad.map((item, i) => (
              <RevealItem key={item.title}>
                <div className="flex items-baseline gap-5 py-6">
                  <span className="font-mono text-[0.8125rem] text-brand">{num(i)}</span>
                  <div>
                    <h3 className="font-display text-lg uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{item.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* ============ 03 · Capabilities — what we do ============ */}
      <Section tint>
        <Container>
          <SectionHead
            eyebrow="02 — Capabilities"
            title="What we build."
            lede="From intelligent systems to complete digital products, we build technology around the problem — not the trend."
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <RevealItem key={s.slug}>
                <GradientCard className="h-full">
                  <Link href={`/services#${s.slug}`} className="flex h-full flex-col gap-3">
                    <span className="font-mono text-[0.8125rem] text-brand">{s.index}</span>
                    <h3 className="text-lg uppercase tracking-tight">{s.title}</h3>
                    <p className="text-sm text-muted">{s.short}</p>
                    <span className="mt-auto flex items-center gap-1.5 pt-2 font-mono text-[0.75rem] text-muted transition-colors group-hover:text-text">
                      Learn more
                      <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
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

      {/* ============ 04 · System — how we build ============ */}
      <section className="section-dark border-y border-line py-[var(--spacing-section)]">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <Eyebrow>03 — System</Eyebrow>
            <h2 className="mt-6 max-w-[18ch] text-[clamp(1.9rem,1.2rem+2vw,2.8rem)] tracking-tight">
              From idea to a working system.
            </h2>
            <p className="mt-5 max-w-[48ch] text-muted">
              We design, build and instrument products as real systems — with the
              architecture, workflows and observability needed to evolve beyond
              the first release.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <FeaturedProduct />
          </Reveal>
        </Container>
      </section>

      {/* ============ 05 · Ecosystem — how the pieces connect ============ */}
      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHead eyebrow="04 — Ecosystem" title="A systems-level approach." />
            <p className="mt-6 max-w-[46ch] text-muted">
              Products rarely exist in isolation. We think across the systems
              around them — data, infrastructure, workflows, interfaces and
              intelligence.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <Constellation />
          </Reveal>
        </Container>
      </Section>

      {/* ============ 06 · Principles — how we think ============ */}
      <Section tint>
        <Container>
          <SectionHead eyebrow="05 — Principles" title="Technology with purpose." />
          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <RevealItem key={d.title}>
                <div className="flex h-full flex-col bg-surface p-7">
                  <span className="font-mono text-[0.8125rem] text-brand">{num(i)}</span>
                  <h3 className="mt-3 font-display text-lg uppercase tracking-tight">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{d.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* ============ 07 · Built for Ambition — who we serve ============ */}
      <Section>
        <Container>
          <SectionHead eyebrow="06 — Built for Ambition" title="Built for ambition." />
          <RevealGroup className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => (
              <RevealItem key={a.title}>
                <div className="border-t border-line-strong pt-4">
                  <span className="font-mono text-[0.72rem] text-brand">{num(i)}</span>
                  <h3 className="mt-2 font-display text-lg uppercase tracking-tight">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{a.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* ============ 08 · From Idea to Product — founders ============ */}
      <Section tint>
        <Container>
          <div className="max-w-[46ch]">
            <SectionHead
              eyebrow="07 — For Founders"
              title="From idea to product."
              lede={forStartups.lede}
            />
          </div>
          <Reveal delay={0.05} className="mt-14">
            <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {forStartups.path.map((p, i) => (
                <li
                  key={p}
                  className="relative flex flex-col gap-2 rounded-xl border border-line bg-surface p-5"
                >
                  <span className="font-mono text-[0.72rem] text-brand">{num(i)}</span>
                  <span className="font-display text-base uppercase tracking-tight">
                    {p}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <CtaButton>Build Your Product</CtaButton>
          </Reveal>
        </Container>
      </Section>

      {/* ============ 09 · Business Operations ============ */}
      <section className="section-dark border-y border-line py-[var(--spacing-section)]">
        <Container>
          <div className="max-w-[48ch]">
            <SectionHead
              eyebrow="08 — For Businesses"
              title="Make your operations work better."
              lede={forBusinesses.lede}
            />
          </div>

          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line-strong bg-line-strong sm:grid-cols-2 lg:grid-cols-5">
            {forBusinesses.capabilities.map((c) => (
              <RevealItem key={c.title}>
                <div className="flex h-full flex-col bg-surface p-6">
                  <span className="font-mono text-[0.72rem] text-brand">{c.index}</span>
                  <h3 className="mt-2 font-display text-base uppercase tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{c.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.05} className="mt-10">
            <div className="flex flex-col items-start gap-2 font-mono text-[0.78125rem] text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              {forBusinesses.flow.map((f, i) => (
                <span key={f} className="flex items-center gap-3">
                  <span
                    className={
                      i === forBusinesses.flow.length - 1
                        ? "rounded-lg border border-line-strong bg-brand-tint px-3 py-1.5 text-text"
                        : "rounded-lg border border-line bg-bg px-3 py-1.5"
                    }
                  >
                    {f}
                  </span>
                  {i < forBusinesses.flow.length - 1 && (
                    <span className="text-brand" aria-hidden>→</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ 10 · Technology — what we engineer with ============ */}
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[24rem_minmax(0,1fr)] lg:items-center lg:gap-8">
          <Reveal>
            <SectionHead
              eyebrow="09 — Technology"
              title="Engineered for the real world."
              lede="We choose technology according to the problem, constraints and product — not because it is fashionable."
            />
          </Reveal>
          <Reveal delay={0.05} className="min-w-0 -mr-5 sm:-mr-8 lg:-mr-14 xl:-mr-20">
            <TechMarquee />
          </Reveal>
        </Container>
      </Section>

      {/* ============ 11 · Selected Work — proof ============ */}
      <Section tint>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead
              eyebrow="10 — Selected Work"
              title="Built. Shipped. Learning."
              lede="A selection of products and systems we've designed and engineered."
            />
            <Link
              href="/work"
              className="font-mono text-[0.8125rem] text-muted underline-offset-4 hover:text-text hover:underline"
            >
              All work →
            </Link>
          </div>

          <div className="mt-14 grid gap-5">
            {featured.map((c) => (
              <Reveal key={c.slug}>
                <GradientCard className="h-full">
                  <Link
                    href={`/work/${c.slug}`}
                    className="group grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-10"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-muted">
                        <span className="text-brand">Case {c.index}</span>
                        <span>·</span>
                        <span>{c.sector}</span>
                      </div>
                      <h3 className="mt-3 text-2xl">{c.client}</h3>
                      <p className="mt-2 max-w-[52ch] text-muted">{c.summary}</p>
                      {c.tags && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {c.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[0.7rem] tracking-[0.03em] text-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="mt-6 flex items-center gap-1.5 font-mono text-[0.8125rem] text-muted transition-colors group-hover:text-text">
                        View case study
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                          <path d="M3 8h9M8 4l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                    <div className="relative overflow-hidden rounded-xl border border-line bg-surface p-5">
                      <div
                        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[80px]"
                        style={{ background: "var(--glow-violet)" }}
                        aria-hidden
                      />
                      <span className="relative font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                        System architecture
                      </span>
                      <div className="relative mt-3 flex flex-col gap-px overflow-hidden rounded-lg border border-line bg-line">
                        {c.architecture.map((row) => (
                          <div key={row.layer} className="flex flex-col gap-0.5 bg-surface px-3.5 py-2.5">
                            <span className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-brand">
                              {row.layer}
                            </span>
                            <span className="text-[0.78125rem] text-muted">{row.detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </GradientCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============ 12 · R&D — what we're exploring ============ */}
      <Section>
        <Container>
          <div className="max-w-[46ch]">
            <SectionHead
              eyebrow="11 — R&D"
              title="What we're exploring."
              lede="The lab is where we test emerging ideas, technologies and product concepts before they become products."
            />
          </div>
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2">
            {rndAreas.map((r, i) => (
              <RevealItem key={r.title}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-brand">
                    Lab note / {num(i)}
                  </span>
                  <h3 className="mt-3 font-display text-lg uppercase tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{r.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.05} className="mt-8">
            <Link
              href="/rnd"
              className="font-mono text-[0.8125rem] text-brand underline-offset-4 hover:underline"
            >
              Inside the lab →
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* ============ 13 · FAQ ============ */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <Reveal>
              <SectionHead eyebrow="FAQ" title="Common questions." />
            </Reveal>
            <Reveal delay={0.05}>
              <Faq />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ============ 14 · Final CTA ============ */}
      <CtaSection
        title="Let's build what comes next."
        body="Have an idea, product or technology challenge? Let's talk about what we can build together."
      />
    </>
  );
}
