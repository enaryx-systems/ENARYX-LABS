import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { caseStudies } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.filter((c) => c.published).map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const c = caseStudies.find((x) => x.slug === slug);
    if (!c) return { title: "Case study" };
    return {
      title: `${c.client} — case study`,
      description: c.summary,
      alternates: { canonical: `/work/${c.slug}` },
    };
  });
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 border-t border-line py-10 md:grid-cols-[12rem_1fr] md:gap-12">
      <h2 className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-muted">
        {label}
      </h2>
      <div className="max-w-[62ch]">{children}</div>
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug && x.published);
  if (!c) notFound();

  return (
    <>
      <section className="border-b border-line pt-[clamp(3.5rem,8vw,6rem)] pb-[clamp(2.5rem,6vw,4.5rem)]">
        <Container>
          <Reveal>
            <Eyebrow>
              Case {c.index} · {c.sector} · {c.year}
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-[20ch] text-[clamp(2.2rem,1.3rem+4vw,3.9rem)]">
              {c.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[58ch] text-xl text-muted">{c.summary}</p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-[var(--spacing-section)]">
        <Container>
          <Block label="Problem">
            <p className="text-muted">{c.problem}</p>
          </Block>

          <Block label="Constraints">
            <ul className="flex flex-col gap-2.5">
              {c.constraints.map((x) => (
                <li key={x} className="grid grid-cols-[1rem_1fr] gap-2 text-muted">
                  <span className="font-mono text-brand">›</span>
                  {x}
                </li>
              ))}
            </ul>
          </Block>

          <Block label="What we built">
            <ul className="flex flex-col gap-2.5">
              {c.built.map((x) => (
                <li key={x} className="grid grid-cols-[1rem_1fr] gap-2 text-muted">
                  <span className="font-mono text-brand">›</span>
                  {x}
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Architecture">
            <div className="overflow-hidden rounded-2xl border border-line">
              {c.architecture.map((row, i) => (
                <div
                  key={row.layer}
                  className={`grid grid-cols-[7.5rem_1fr] gap-4 border-line px-4 py-3.5 ${
                    i === 0 ? "bg-brand-tint" : ""
                  } ${i < c.architecture.length - 1 ? "border-b" : ""}`}
                >
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-brand">
                    {row.layer}
                  </span>
                  <span className="text-sm text-muted">{row.detail}</span>
                </div>
              ))}
            </div>
          </Block>

          <Block label="Outcome">
            <ul className="flex flex-col gap-2.5">
              {c.outcome.map((x) => (
                <li key={x} className="grid grid-cols-[1rem_1fr] gap-2 text-text">
                  <span className="font-mono text-brand">›</span>
                  {x}
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Stack">
            <div className="flex flex-wrap gap-2">
              {c.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[0.72rem] tracking-[0.03em] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </Block>

          <div className="border-t border-line pt-10">
            <Link
              href="/work"
              className="font-mono text-[0.8125rem] text-muted underline-offset-4 hover:text-text hover:underline"
            >
              ← All work
            </Link>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
