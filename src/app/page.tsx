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
  labTriad,
  aboutCopy,
  audiences,
  forStartups,
  forBusinesses,
  techGroups,
  caseStudies,
} from "@/lib/content";

const trustWords = ["AI", "Software", "Automation", "Digital Products", "R&D"];
const whatsNext = ["AI", "Data", "Automation", "Emerging Technology"];

export default function HomePage() {
  const featured = caseStudies.filter((c) => c.published).slice(0, 2);

  return (
    <>
      {/* ============================ Hero ============================ */}
      <section className="section-wash relative overflow-hidden">
        <div
          className="pointer-events-none absolute -left-40 top-[-10%] h-[34rem] w-[34rem] rounded-full blur-[150px]"
          style={{ background: "var(--glow-violet)" }}
          aria-hidden
        />
        <Container className="relative grid items-center gap-12 pt-[clamp(2.5rem,6vw,4.5rem)] pb-[clamp(2.5rem,6vw,4.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <Reveal immediate>
              <Eyebrow>Enaryx Labs · Technology &amp; Innovation</Eyebrow>
            </Reveal>
            <WordReveal
              immediate
              as="h1"
              text="BUILD WHAT COMES NEXT."
              gradientWord="NEXT."
              className="mt-6 max-w-[13ch] text-[clamp(2.6rem,1rem+7vw,5.5rem)] uppercase"
            />
            <Reveal immediate delay={0.2}>
              <p className="mt-6 max-w-[46ch] text-lg text-muted sm:text-xl">
                We build intelligent technology, digital products and systems
                for problems that matter.
              </p>
            </Reveal>
            <Reveal immediate delay={0.28}>
              <div className="mt-9 flex flex-nowrap items-stretch gap-2.5 sm:gap-3">
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
          </div>

          <Reveal immediate delay={0.15} className="mx-auto">
            <HeroNetwork />
          </Reveal>
        </Container>
        <ScrollIndicator />
      </section>

      {/* ===================== Trust / positioning ==================== */}
      <section className="border-y border-line bg-bg-2 py-14">
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

      {/* ======================= 01 — The Lab ======================== */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <Reveal>
            <Eyebrow>01 — The Lab</Eyebrow>
            <h2 className="mt-6 max-w-[16ch] text-[clamp(1.9rem,1.2rem+2.6vw,3rem)]">
              We build technology for ideas that matter.
            </h2>
            <p className="mt-6 max-w-[48ch] text-muted">{aboutCopy.paragraphs[1]}</p>
            <Link
              href="/about"
              className="mt-6 inline-block font-mono text-[0.8125rem] text-brand underline-offset-4 hover:underline"
            >
              More about the lab →
            </Link>
          </Reveal>

          <RevealGroup className="flex flex-col gap-3">
            {labTriad.map((item, i) => (
              <RevealItem key={item.title}>
                <div className="card-grad group flex items-start gap-4 rounded-2xl p-5 shadow-[var(--card-shadow)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--card-shadow-hover)]">
                  <span className="grad-chip mt-0.5 grid h-7 w-7 shrink-0 place-items-center font-mono text-[0.75rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg tracking-tight">
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

      {/* ====================== What We Build ======================== */}
      <Section tint>
        <Container>
          <SectionHead eyebrow="What We Build" title="From Idea to Impact" />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <RevealItem key={s.slug}>
                <GradientCard className="h-full">
                  <Link href={`/services#${s.slug}`} className="flex h-full flex-col gap-4">
                    <span className="grad-chip grid h-8 w-8 place-items-center font-mono text-[0.8125rem]">
                      {s.index}
                    </span>
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

      {/* =================== Enaryx System (demo) =================== */}
      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <Reveal>
            <FeaturedProduct />
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow>Enaryx System</Eyebrow>
            <h2 className="mt-6 max-w-[16ch] text-[clamp(1.9rem,1.2rem+2vw,2.8rem)]">
              What shipping with us looks like
            </h2>
            <p className="mt-5 max-w-[46ch] text-muted">
              A live system, not a slide — an engine doing real work,
              instrumented and observable from day one. The panel is a{" "}
              <span className="text-text">simulated environment</span>, not live
              company data.
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

      {/* ===================== What's Next (dark) =================== */}
      <section className="section-dark relative overflow-hidden border-y border-line py-[var(--spacing-section)]">
        <div className="bg-grid absolute inset-0 -z-0" aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          style={{ background: "var(--glow-violet)" }}
          aria-hidden
        />
        <Container className="relative">
          <Reveal className="text-center">
            <Eyebrow className="justify-center">What&apos;s Next</Eyebrow>
          </Reveal>
          <WordReveal
            as="h2"
            text="WE DON'T JUST FOLLOW TECHNOLOGY. WE EXPERIMENT WITH WHAT'S NEXT."
            className="mx-auto mt-6 max-w-[22ch] text-center text-[clamp(1.9rem,1.1rem+3vw,3.2rem)]"
          />
          <RevealGroup className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-3">
            {whatsNext.map((w) => (
              <RevealItem key={w}>
                <span className="rounded-full border border-line-strong bg-glass px-5 py-2.5 font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-text">
                  {w}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.1} className="mt-10 text-center">
            <MagneticLink href="/rnd" variant="outline">
              Inside the Lab
            </MagneticLink>
          </Reveal>
        </Container>
      </section>

      {/* ======================== Ecosystem ======================== */}
      <Section tint>
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

      {/* ======================== Why Enaryx ======================= */}
      <section className="section-dark border-y border-line py-[var(--spacing-section)]">
        <Container>
          <SectionHead
            eyebrow="Why Enaryx"
            title="Technology With Purpose."
            className="mx-auto text-center"
          />
          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-line-strong bg-line-strong sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <RevealItem key={d.title}>
                <div className="group flex h-full flex-col bg-surface p-7 transition-colors hover:bg-surface-2">
                  <span className="font-display text-3xl leading-none text-transparent [-webkit-background-clip:text] [background-clip:text] [background-image:var(--grad-brand)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted">{d.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ===================== Who We Work With ==================== */}
      <Section>
        <Container>
          <SectionHead eyebrow="Who We Work With" title="Built for Ambition." />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((a) => (
              <RevealItem key={a.title}>
                <GradientCard className="h-full" glow={false}>
                  <h3 className="font-display text-lg">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted">{a.body}</p>
                </GradientCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* ================= For Startups / Businesses ============== */}
      <Section tint>
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {/* Startups — the idea journey */}
            <Reveal>
              <GradientCard className="flex h-full flex-col" glow={false}>
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-brand">
                  {forStartups.eyebrow}
                </span>
                <h2 className="mt-3 text-2xl">{forStartups.title}</h2>
                <p className="mt-3 text-muted">{forStartups.lede}</p>
                <ol className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[0.75rem]">
                  {forStartups.path.map((p, i) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="rounded-lg border border-line-strong bg-bg px-3 py-1.5 text-text">
                        {p}
                      </span>
                      {i < forStartups.path.length - 1 && (
                        <span className="text-brand" aria-hidden>→</span>
                      )}
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-sm text-muted">{forStartups.closing}</p>
                <div className="mt-auto pt-6">
                  <CtaButton>Build My Idea</CtaButton>
                </div>
              </GradientCard>
            </Reveal>

            {/* Businesses — the automation flow */}
            <Reveal delay={0.05}>
              <GradientCard className="flex h-full flex-col" glow={false}>
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-brand">
                  {forBusinesses.eyebrow}
                </span>
                <h2 className="mt-3 text-2xl">{forBusinesses.title}</h2>
                <p className="mt-3 text-muted">{forBusinesses.lede}</p>
                <ul className="mt-5 grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2">
                  {forBusinesses.capabilities.map((c) => (
                    <li key={c.title} className="flex items-baseline gap-2 text-sm">
                      <span className="font-mono text-[0.7rem] text-brand">{c.index}</span>
                      <span>
                        <span className="text-text">{c.title}</span>
                        <span className="text-muted"> — {c.body}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[0.7rem]">
                  {forBusinesses.flow.map((f, i) => (
                    <span key={f} className="flex items-center gap-2">
                      <span className="rounded-lg border border-line bg-bg px-2.5 py-1.5 text-muted">
                        {f}
                      </span>
                      {i < forBusinesses.flow.length - 1 && (
                        <span className="text-brand" aria-hidden>↓</span>
                      )}
                    </span>
                  ))}
                </div>
                <p className="mt-auto pt-6 text-sm text-muted">{forBusinesses.closing}</p>
              </GradientCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ======================== Technology ======================= */}
      <section className="section-dark border-y border-line py-[var(--spacing-section)]">
        <Container>
          <SectionHead
            eyebrow="Technology"
            title="Engineered for the Real World."
            lede="We choose technology by the problem, not the trend. This is the toolkit behind what we ship."
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {techGroups.map((g) => (
              <RevealItem key={g.label}>
                <div className="card-grad h-full rounded-2xl p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5">
                  <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-brand">
                    {g.label}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2 text-sm text-muted">
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ====================== Selected Work ====================== */}
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

          <div
            className={
              featured.length === 1
                ? "mt-14 grid gap-5"
                : "mt-14 grid gap-5 md:grid-cols-2"
            }
          >
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
                    <span className="mt-auto flex items-center gap-1.5 pt-6 font-mono text-[0.8125rem] text-muted transition-colors group-hover:text-text">
                      View case study
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

      {/* =========================== FAQ ========================== */}
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
