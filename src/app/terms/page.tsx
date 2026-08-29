import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `The terms that apply to using the ${site.name} website.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: false },
};

// TODO: replace with terms drafted or reviewed by a lawyer. Project work is
// governed by a separate signed statement of work, not this page.
export default function TermsPage() {
  return (
    <LegalPage title="Terms" updated="August 2026">
      <p>
        These terms cover your use of the {site.name} website at {site.domain}.
        Any actual engagement is governed by a separate written agreement.
      </p>

      <h2>The website</h2>
      <p>
        Content here is provided as-is for information. Prices and timelines are
        indicative starting points, not offers. Nothing on this site creates a
        contract.
      </p>

      <h2>Your submissions</h2>
      <p>
        Don’t send confidential information through the contact form before we
        have an NDA in place. By submitting the form you confirm the details are
        accurate and that you’re authorised to share them.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The {site.name} name, wordmark, and site design belong to {site.name}.
        Case study material is published with the client’s permission.
      </p>

      <h2>Liability</h2>
      <p>
        To the extent the law allows, {site.name} isn’t liable for any loss
        arising from use of this website.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
