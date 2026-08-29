import { Container } from "./primitives";
import { PageHero } from "./page-hero";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={`Last updated ${updated}`} title={title} />
      <section className="py-[clamp(3rem,7vw,5rem)]">
        <Container>
          <div className="flex max-w-[68ch] flex-col gap-5 text-muted [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-text [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
