import type { Metadata } from "next";
import { Container } from "@/components/primitives";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's build something meaningful. Tell us about your idea or requirement and we'll come back with scope, a timeline, and a straight answer on fit.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Meaningful."
        lede="Have an idea, business challenge, or technology project? Tell us what you're thinking. Whether you're building your first startup, improving an existing business, or exploring a completely new idea, we'd love to hear from you."
      />

      <section className="py-[clamp(3rem,7vw,5.5rem)]">
        <Container className="grid gap-14 lg:grid-cols-[1fr_320px] lg:gap-20">
          <ContactForm />

          <aside className="flex flex-col gap-8 lg:border-l lg:border-line lg:pl-12">
            <div>
              <h2 className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-muted">
                Prefer to talk?
              </h2>
              <p className="mt-3 text-sm text-muted">
                Book a 20-minute intro call — no prep needed, just bring the
                problem.
              </p>
              <a
                href={site.calLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-mono text-[0.8125rem] text-brand underline-offset-4 hover:underline"
              >
                Open scheduling →
              </a>
              {/* TODO: swap the link above for a Cal.com inline embed
                  (@calcom/embed-react) once your Cal handle is set. */}
            </div>

            <div>
              <h2 className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-muted">
                Email
              </h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-block text-sm text-muted hover:text-text"
              >
                {site.email}
              </a>
              <p className="mt-1 text-sm text-muted">{site.domain}</p>
            </div>

            <div>
              <h2 className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-muted">
                Good fit for
              </h2>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
                <li>Founders with just an idea</li>
                <li>Startups building an MVP</li>
                <li>Businesses automating a process</li>
                <li>Enterprises needing a custom integration</li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
