"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { services } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { CtaButton } from "./cta-button";
import { ServicesNavItem } from "./services-nav-item";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 8));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-3 z-50 px-4 sm:top-4">
      <div
        className={cn(
          "relative mx-auto flex h-16 max-w-[1100px] items-center justify-between rounded-2xl border px-5 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 lg:px-7",
          scrolled
            ? "border-line-strong bg-surface/85 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)]"
            : "border-line bg-glass"
        )}
      >
        <Link href="/" aria-label="Enaryx Labs home" className="shrink-0">
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          data-cursor-skip
          className="nav-native-cursor hidden items-center gap-5 lg:flex"
        >
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            if (item.href === "/services") {
              return <ServicesNavItem key={item.href} active={active} />;
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className={cn(
                  "nav-underline font-mono text-[0.8125rem] tracking-[0.02em] transition-colors",
                  active ? "text-text" : "text-muted hover:text-text"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <CtaButton className="hidden sm:inline-flex" />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line-strong text-text lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="thin-scroll glass absolute inset-x-0 top-[calc(100%+0.5rem)] max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl lg:hidden"
          >
            {nav.map((item) => {
              if (item.href === "/services") {
                return (
                  <div key={item.href} className="border-b border-line first:rounded-t-2xl last:rounded-b-2xl">
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      className="flex w-full items-center justify-between px-6 py-4 font-mono text-[0.8125rem] text-muted hover:text-text"
                    >
                      Services
                      <svg viewBox="0 0 16 16" className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <ul className="flex flex-col bg-glass-strong pb-2">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services#${s.slug}`}
                              onClick={() => setOpen(false)}
                              className="block px-8 py-2.5 font-mono text-[0.75rem] text-muted hover:text-text"
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line px-6 py-4 font-mono text-[0.8125rem] text-muted last:border-b-0 hover:text-text"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
