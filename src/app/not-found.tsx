import Link from "next/link";
import { Container } from "@/components/primitives";
import { nav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center py-24">
      <Container className="text-center">
        <p className="font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-brand">
          Error 404
        </p>
        <h1 className="mx-auto mt-5 max-w-[16ch] text-[clamp(2.4rem,1.4rem+4vw,4rem)]">
          This page didn&apos;t ship.
        </h1>
        <p className="mx-auto mt-5 max-w-[42ch] text-muted">
          The link is broken or the page moved. Everything that does exist is one
          click away.
        </p>
        <nav
          aria-label="Recovery"
          className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[0.8125rem]"
        >
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                i === 0
                  ? "text-text underline-offset-4 hover:underline"
                  : "text-muted underline-offset-4 hover:text-text hover:underline"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
