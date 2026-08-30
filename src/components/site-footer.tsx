import Link from "next/link";
import { Logo } from "./logo";
import { site, social } from "@/lib/site";
import { services } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.66 4.78 6.11V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M3 3h4.4l4.2 6 4.9-6H21l-7.1 8.6L21.4 21H17l-4.6-6.4L7 21H3l7.5-9.1L3 3Z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark relative overflow-hidden border-t border-line">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-56 w-[38rem] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[130px]"
        style={{ background: "var(--glow-violet)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:linear-gradient(180deg,#000,transparent_45%)]"
        style={{ backgroundImage: "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)", backgroundSize: "56px 56px" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 font-mono text-[0.75rem] tracking-[0.04em] text-muted">
              {site.taglineKeywords}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:border-brand hover:text-text"
                >
                  {icons[s.label]}
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="grid h-9 w-9 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:border-brand hover:text-text"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav aria-label="Footer — company" className="flex flex-col gap-3">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                Company
              </span>
              <Link href="/about" className="text-sm text-muted hover:text-text">About</Link>
              <Link href="/work" className="text-sm text-muted hover:text-text">Work</Link>
              <Link href="/rnd" className="text-sm text-muted hover:text-text">R&amp;D</Link>
              <Link href="/careers" className="text-sm text-muted hover:text-text">Careers</Link>
              <Link href="/contact" className="text-sm text-muted hover:text-text">Contact</Link>
            </nav>

            <nav aria-label="Footer — solutions" className="flex flex-col gap-3">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                Solutions
              </span>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className="text-sm text-muted hover:text-text"
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[0.7rem] tracking-[0.03em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-text">Privacy</Link>
            <span aria-hidden>·</span>
            <Link href="/terms" className="hover:text-text">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
