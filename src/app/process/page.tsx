import type { Metadata } from "next";
import { Container, Section } from "@/components/primitives";
import { PageHero } from "@/components/page-hero";
import { Timeline } from "@/components/timeline";
import { CtaSection } from "@/components/cta-section";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Our Approach: Discover, Design, Build, Test, Launch, Scale — how an Enaryx Labs engagement runs from idea to impact.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Build"
        title="Think Different. Build Better."
        lede="Great technology starts with understanding the problem. Our approach combines six steps that take an idea from first conversation to a product that keeps improving."
      />

      <Section className="border-t-0">
        <Container>
          <Timeline steps={steps} />
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
