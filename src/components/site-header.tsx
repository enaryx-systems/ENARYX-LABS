"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/site";
import { services } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { CtaButton } from "./cta-button";
import { ServicesNavItem } from "./services-nav-item";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close the mobile menu on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

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
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-line bg-bg/80 shadow-[0_10px_30px_-20px_rgba(30,20,60,0.35)]"
          : "border-transparent bg-bg/45"
      )}
    >
      <div
        className={cn(
          "relative z-50 mx-auto flex w-full max-w-[1720px] items-center justify-between px-5 transition-[height] duration-300 sm:px-8 lg:px-14 xl:px-20",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <Link href="/" aria-label="Enaryx Labs home" className="shrink-0">
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          data-cursor-skip
          className="nav-native-cursor hidden items-center gap-6 lg:flex"
        >
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
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

        <div className="flex items-center gap-2 sm:gap-2.5">
          <ThemeToggle />
          <CtaButton className="hidden sm:inline-flex">Start a Project</CtaButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-[10px] border border-line-strong text-text lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm lg:hidden"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="thin-scroll absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-bg shadow-[0_30px_70px_-28px_rgba(30,20,60,0.45)] lg:hidden"
          >
            {nav.map((item) => {
              if (item.href === "/services") {
                return (
                  <div key={item.href} className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      className="flex w-full items-center justify-between px-6 py-4 font-mono text-[0.8125rem] text-muted hover:text-text"
                    >
                      Solutions
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
                  className="block border-b border-line px-6 py-4 font-mono text-[0.8125rem] text-muted hover:text-text"
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="p-4">
              <CtaButton className="w-full">Start a Project</CtaButton>
            </div>
            </nav>
          </>
        )}
    </header>
  );
}
