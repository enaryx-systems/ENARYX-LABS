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
        <div className="relative isolate mx-auto max-w-[920px] overflow-hidden rounded-3xl bg-[linear-gradient(140deg,var(--brand-strong),var(--ink)_92%)] px-6 py-12 shadow-[0_40px_90px_-46px_rgba(59,15,115,0.5)] sm:px-12 sm:py-14">
          <div
            className="pointer-events-none absolute -left-12 -top-20 h-56 w-56 rounded-full bg-brand-bright/25 blur-[110px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(ellipse_60%_60%_at_0%_0%,#000,transparent)]"
            aria-hidden
          />

          <div className="relative max-w-[34ch]">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-on-brand/55">
              Contact
            </span>
            <h2 className="mt-4 text-[clamp(1.8rem,1.1rem+2.4vw,2.75rem)] leading-[1.08] tracking-tight text-on-brand">
              {title}
            </h2>
            <p className="mt-4 max-w-[46ch] text-on-brand/75">{body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <CtaButton variant="onBrand">Start a Conversation</CtaButton>
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-[0.8125rem] text-on-brand/75 underline-offset-4 hover:underline"
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
