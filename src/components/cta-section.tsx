import { CtaButton } from "./cta-button";
import { Container } from "./primitives";
import { site } from "@/lib/site";

export function CtaSection({
  title = "Let's Build What's Next.",
  body = "Have an idea, problem, or technology challenge? Let's explore it together — you'll get scope, a timeline, and a straight answer on fit within two working days.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-line py-[clamp(3.5rem,7vw,6rem)]">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,var(--brand-strong),var(--ink)_85%)] px-6 py-12 shadow-[0_40px_90px_-40px_rgba(59,15,115,0.55)] sm:px-12 sm:py-16 lg:px-16">
          <div
            className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-brand-bright/40 blur-[90px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-brand/30 blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px]"
            aria-hidden
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-on-brand/70">
                Contact
              </span>
              <h2 className="mt-4 max-w-[14ch] text-[clamp(1.9rem,1.1rem+2.8vw,3rem)] text-on-brand">
                {title}
              </h2>
              <p className="mt-4 max-w-[46ch] text-on-brand/80">{body}</p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <CtaButton variant="onBrand">Start the Conversation</CtaButton>
                <a
                  href={`mailto:${site.email}`}
                  className="font-mono text-[0.8125rem] text-on-brand/80 hover:underline"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="relative hidden aspect-square max-w-[220px] justify-self-center lg:block">
              <div
                className="absolute inset-0 rounded-full border backdrop-blur-xl"
                style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)" }}
                aria-hidden
              />
              <div
                className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%)" }}
                aria-hidden
              />
              <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-on-brand" aria-hidden />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
