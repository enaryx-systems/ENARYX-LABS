import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/primitives";
import { PageHero } from "@/components/page-hero";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Websites and products Enaryx Labs has designed, engineered and shipped for real businesses — each one live in production.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const studies = caseStudies.filter((c) => c.published);

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Builds, front to back."
        lede="A snapshot of the products and platforms we've designed, engineered and shipped for clients — each card opens the live site."
      />

      <section className="py-[var(--spacing-section)]">
        <Container>
          {/* Each card is a single link straight to the client's live site.
              Fixed-ratio thumb + category pill + title + one-line description,
              so every card lines up regardless of content length. */}
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studies.map((c) => {
              const href = c.liveUrl ?? `/work/${c.slug}`;
              const external = Boolean(c.liveUrl);
              return (
                <RevealItem key={c.slug}>
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
                          sizes="(min-width:1024px) 33vw, (min-width:640px) 46vw, 92vw"
                        />
                      ) : c.logo ? (
                        <>
                          <div className="pointer-events-none absolute inset-0 bg-[var(--grad-wash)] opacity-80" aria-hidden />
                          <Image
                            src={c.logo}
                            alt={`${c.client} logo`}
                            fill
                            className="object-contain p-10 transition-transform duration-500 group-hover:scale-[1.04]"
                            sizes="(min-width:1024px) 33vw, (min-width:640px) 46vw, 92vw"
                          />
                        </>
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-surface text-sm font-mono uppercase tracking-[0.12em] text-muted">
                          Case study
                        </div>
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
                      <h2 className="flex items-center gap-1.5 text-lg font-medium leading-tight text-text">
                        {c.client}
                        {external && (
                          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                            <path d="M5 11 11 5M6 5h5v5" />
                          </svg>
                        )}
                      </h2>
                      <p className="mt-1 text-sm text-muted">{c.title}</p>
                    </div>
                  </a>
                </RevealItem>
              );
            })}

            {/* More work is in progress — keep the row from looking unfinished */}
            {studies.length < 3 && (
              <RevealItem>
                <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-line-strong p-7 text-center">
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
