import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow, Section, SectionHead } from "@/components/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { MagneticLink } from "@/components/magnetic";
import { CtaButton } from "@/components/cta-button";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { HeroMark } from "@/components/hero-mark";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { GradientCard } from "@/components/gradient-card";
import { WordReveal } from "@/components/word-reveal";
import { FeaturedProduct } from "@/components/featured-product";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { TechMarquee } from "@/components/tech-marquee";
import { LabIllustration } from "@/components/lab-illustration";
import { FounderJourney } from "@/components/founder-journey";
import { services, forStartups, forBusinesses, caseStudies } from "@/lib/content";

export default function HomePage() {
  const featured = caseStudies.filter((c) => c.published);

  return (
    <>
      {/* ===================== 01 · Hero — who we are ==================== */}
      <section className="section-wash relative overflow-hidden">
        <HeroBackdrop />
        <HeroMark />
        <div
          className="pointer-events-none absolute left-1/2 top-[8%] h-[30rem] w-[46rem] -translate-x-1/2 rounded-full opacity-70 blur-[170px]"
          style={{ background: "var(--glow-violet)" }}
          aria-hidden
        />
        <Container className="relative flex flex-col items-start pt-[clamp(4rem,11vw,8rem)] pb-[clamp(4rem,10vw,7rem)] text-left">
          <Reveal immediate>
            <Eyebrow>
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
            <p className="mt-7 max-w-[46ch] text-lg text-muted sm:text-xl">
              We build intelligent software, digital products and systems that
              turn ambitious ideas into real-world technology.
            </p>
          </Reveal>
          <Reveal immediate delay={0.28}>
            <div className="mt-10 flex flex-nowrap items-stretch justify-start gap-2.5 sm:gap-3">
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
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16 [&>*]:min-w-0">
          <Reveal>
            <Eyebrow>01 — The Lab</Eyebrow>
            <WordReveal
              immediate
              as="h2"
              text="WE BUILD TECHNOLOGY FOR IDEAS THAT MATTER."
              className="mt-6 max-w-[18ch] text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] uppercase"
            />
            <p className="mt-6 max-w-[46ch] text-muted">
              A technology and innovation company building intelligent software,
              digital products and emerging technology for ambitious ideas.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <LabIllustration />
          </Reveal>
        </Container>
      </Section>

      {/* ============ 03 · Capabilities — what we do ============ */}
      <Section tint>
        <Container>
          <SectionHead
            eyebrow="02 — Capabilities"
            title="What we build."
            lede="From intelligent systems to complete digital products — built around the problem in front of us."
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
              Built as real systems.
            </h2>
            <p className="mt-5 max-w-[46ch] text-muted">
              We design and build products as real systems — architecture,
              workflows and observability included from the start.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <FeaturedProduct />
          </Reveal>
        </Container>
      </section>

      {/* ============ 04 · From Idea to Product — founders ============ */}
      <Section tint>
        <Container>
          <div className="max-w-[46ch]">
            <SectionHead
              eyebrow="04 — For Founders"
              title="From idea to product."
              lede={forStartups.lede}
            />
          </div>
          <Reveal delay={0.05} className="mt-14">
            <FounderJourney />
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <CtaButton>Build Your Product</CtaButton>
          </Reveal>
        </Container>
      </Section>

      {/* ============ 05 · Business Operations ============ */}
      <section className="section-dark border-y border-line py-[var(--spacing-section)]">
        <Container>
          <div className="max-w-[48ch]">
            <SectionHead
              eyebrow="05 — For Businesses"
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

      {/* ============ 06 · Technology — what we engineer with ============ */}
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[24rem_minmax(0,1fr)] lg:items-center lg:gap-8">
          <Reveal>
            <SectionHead
              eyebrow="06 — Technology"
              title="Engineered for the real world."
              lede="We choose technology for the problem, the constraints and the product — not because it's fashionable."
            />
          </Reveal>
          <Reveal delay={0.05} className="min-w-0 -mr-5 sm:-mr-8 lg:-mr-14 xl:-mr-20">
            <TechMarquee />
          </Reveal>
        </Container>
      </Section>

      {/* ============ 07 · Selected Work — proof ============ */}
      <Section tint>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead
              eyebrow="07 — Our Work"
              title="Products we've built for real businesses."
              lede="A snapshot of the software, products and platforms we've designed, engineered and shipped for clients — from first prototype to production."
            />
            <Link
              href="/work"
              className="font-mono text-[0.8125rem] text-muted underline-offset-4 hover:text-text hover:underline"
            >
              All work →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => {
              const href = c.liveUrl ?? `/work/${c.slug}`;
              const external = Boolean(c.liveUrl);
              return (
                <Reveal key={c.slug}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="work-card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--card-shadow)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[var(--card-shadow-hover)]"
                  >
                    {/* thumb */}
                    <div className="relative aspect-[2/1] overflow-hidden border-b border-line bg-surface-2">
                      {c.shot ? (
                        <Image
                          src={c.shot}
                          alt={`${c.client} website`}
                          fill
                          className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(min-width:1024px) 440px, (min-width:640px) 46vw, 92vw"
                        />
                      ) : (
                        c.logo && (
                          <>
                            <div
                              className="pointer-events-none absolute inset-0 bg-[var(--grad-wash)] opacity-80"
                              aria-hidden
                            />
                            <Image
                              src={c.logo}
                              alt={`${c.client} logo`}
                              fill
                              className="object-contain p-10 transition-transform duration-500 group-hover:scale-[1.04]"
                              sizes="(min-width:1024px) 440px, (min-width:640px) 46vw, 92vw"
                            />
                          </>
                        )
                      )}
                      <span className="absolute left-3.5 top-3.5 rounded-full bg-surface/95 px-3 py-1.5 text-[0.72rem] font-semibold text-text shadow-[var(--card-shadow)] backdrop-blur">
                        {c.sector.split(" / ")[0]}
                      </span>
                      {c.wip && (
                        <span className="absolute right-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#e0a437]/45 bg-[#fdf5e6]/95 px-2.5 py-1 text-[0.68rem] font-semibold text-[#9a6a12] shadow-[var(--card-shadow)] backdrop-blur">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#e0a437]" />
                          Under development
                        </span>
                      )}
                    </div>

                    {/* body */}
                    <div className="p-5">
                      <h3 className="flex items-center gap-1.5 text-lg font-medium leading-tight">
                        {c.client}
                        {external && (
                          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                            <path d="M5 11 11 5M6 5h5v5" />
                          </svg>
                        )}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{c.title}</p>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ============ 08 · FAQ ============ */}
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

      {/* ============ 09 · Final CTA ============ */}
      <CtaSection
        title="Let's build what comes next."
        body="Have an idea, product or technology challenge? Let's talk about what we can build together."
      />
    </>
  );
}
