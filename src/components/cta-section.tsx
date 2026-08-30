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
        <div className="relative isolate overflow-hidden rounded-3xl bg-[linear-gradient(140deg,var(--brand-strong),var(--ink)_88%)] px-6 py-14 shadow-[0_40px_90px_-44px_rgba(59,15,115,0.5)] sm:px-14 sm:py-20">
          <div
            className="pointer-events-none absolute -left-16 -top-24 h-64 w-64 rounded-full bg-brand-bright/30 blur-[110px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(ellipse_60%_60%_at_0%_0%,#000,transparent)]"
            aria-hidden
          />

          <div className="relative max-w-[24ch]">
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-on-brand/60">
              Contact
            </span>
            <h2 className="mt-5 text-[clamp(2rem,1.1rem+3.4vw,3.6rem)] uppercase leading-[1.02] tracking-tight text-on-brand">
              {title}
            </h2>
            <p className="mt-5 max-w-[44ch] text-on-brand/75">{body}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
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
