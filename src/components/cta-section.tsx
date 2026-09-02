import { CtaButton } from "./cta-button";
import { Container } from "./primitives";
import { site } from "@/lib/site";

export function CtaSection({
  title = "Let's build what comes next.",
  body = "Have an idea, product or technology challenge? Let's talk about what we can build together.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-line py-[clamp(3.5rem,7vw,6rem)]">
      <Container>
        <div className="relative isolate mx-auto max-w-[860px] overflow-hidden rounded-3xl bg-[linear-gradient(140deg,var(--brand-strong),var(--ink)_92%)] shadow-[0_40px_90px_-46px_rgba(59,15,115,0.5)]">
          <div
            className="pointer-events-none absolute -left-16 -top-24 h-56 w-56 rounded-full bg-brand-bright/25 blur-[120px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-brand-bright/20 blur-[120px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000,transparent)]"
            aria-hidden
          />

          <div className="relative mx-auto max-w-[46ch] px-6 py-12 text-center sm:px-12 sm:py-16">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-on-brand/55">
              Contact
            </span>
            <h2 className="mt-4 text-[clamp(1.7rem,1.1rem+2vw,2.5rem)] leading-[1.1] tracking-tight text-on-brand">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-[40ch] text-on-brand/75">{body}</p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <CtaButton variant="onBrand">Start a Conversation</CtaButton>
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-[0.8125rem] text-on-brand/90! underline decoration-on-brand/30 underline-offset-4 transition-colors hover:decoration-on-brand"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
