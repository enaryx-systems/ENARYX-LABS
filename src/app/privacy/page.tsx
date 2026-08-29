import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles the information you share through this site.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: false },
};

// TODO: have this reviewed against your jurisdiction (GDPR / CCPA as applicable)
// and fill in the legal entity name and address before launch.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy" updated="August 2026">
      <p>
        This is a plain-language summary of how {site.name} handles your
        information. It is not a substitute for advice from a lawyer in your
        jurisdiction.
      </p>

      <h2>What we collect</h2>
      <p>
        Only what you send us. If you use the contact form, we receive your
        name, email, company (if provided), budget range, and message. If you
        book a call, the scheduling provider collects what it needs to create
        the event.
      </p>

      <h2>How we use it</h2>
      <p>
        To reply to your inquiry and, if we work together, to run the project.
        We don&apos;t sell it, and we don&apos;t add you to a marketing list
        without asking.
      </p>

      <h2>Analytics</h2>
      <p>
        This site uses privacy-friendly, cookie-free analytics that does not
        track individuals or build advertising profiles. No personal data is
        collected for analytics.
      </p>

      <h2>Third parties</h2>
      <p>
        The site is hosted on Vercel, email is sent via a transactional email
        provider, and scheduling is handled by a booking provider. Each processes
        data only to provide its service.
      </p>

      <h2>Your choices</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> to ask what we
        hold about you, or to have it deleted. We&apos;ll respond within 30 days.
      </p>
    </LegalPage>
  );
}
