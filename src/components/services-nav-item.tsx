"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/content";

export function ServicesNavItem({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "flex items-center gap-1.5 font-mono text-[0.8125rem] tracking-[0.02em] transition-colors",
          active ? "text-text" : "text-muted hover:text-text"
        )}
      >
        <span className="nav-underline" data-active={active || open}>
          Services
        </span>
        <svg
          viewBox="0 0 16 16"
          className={cn("h-3 w-3 transition-transform", open && "rotate-180")}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-10 mt-3 w-[16rem] -translate-x-1/2 overflow-hidden rounded-2xl border border-line-strong bg-bg shadow-xl"
          >
            <p className="border-b border-line px-4 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
              What we do
            </p>
            <ul className="flex flex-col p-1.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-text transition-colors hover:bg-surface"
                  >
                    <span className="font-mono text-[0.68rem] text-brand">{s.index}</span>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
