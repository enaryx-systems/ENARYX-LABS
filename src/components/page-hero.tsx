import { Container, Eyebrow } from "./primitives";
import { Reveal } from "./reveal";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-[clamp(3.5rem,8vw,6.5rem)] pb-[clamp(2.5rem,6vw,5rem)]">
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-brand/10 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-brand-bright/10 blur-[90px]"
        aria-hidden
      />
      <Container className="relative">
        <Reveal immediate>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal immediate delay={0.05}>
          <h1 className="mt-6 max-w-[18ch] text-[clamp(2.4rem,1.3rem+4.5vw,4.25rem)]">
            {title}
          </h1>
        </Reveal>
        {lede ? (
          <Reveal immediate delay={0.1}>
            <p className="mt-6 max-w-[58ch] text-xl text-muted">{lede}</p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
