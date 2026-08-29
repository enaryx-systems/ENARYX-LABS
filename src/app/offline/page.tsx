import type { Metadata } from "next";
import { Container } from "@/components/primitives";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Offline",
  robots: { index: false, follow: false },
};

// Served by the service worker when there's no network and nothing cached
// for the page that was requested.
export default function OfflinePage() {
  return (
    <section className="grid min-h-[70vh] place-items-center py-24">
      <Container className="text-center">
        <div className="mx-auto w-fit">
          <Logo />
        </div>
        <p className="mx-auto mt-8 font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-brand">
          No connection
        </p>
        <h1 className="mx-auto mt-4 max-w-[18ch] text-[clamp(2rem,1.2rem+3vw,3.2rem)]">
          You&apos;re offline.
        </h1>
        <p className="mx-auto mt-5 max-w-[42ch] text-muted">
          Pages you&apos;ve already visited are still available. Reconnect and
          refresh for everything else.
        </p>
      </Container>
    </section>
  );
}
