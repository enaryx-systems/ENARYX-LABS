"use client";

import { useEffect, useRef } from "react";

/**
 * The whole custom cursor: one small gradient arrow that tracks the
 * pointer 1:1 — no dot, no growing ring, no hover states. Desktop
 * (pointer: fine) + motion-ok only; hidden entirely inside the navbar
 * (`data-cursor-skip`), where the native cursor + underline hover take over.
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const el = ref.current;
    if (!el) return;

    document.body.classList.add("custom-cursor-active");

    const onMove = (e: PointerEvent) => {
      const t = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      el.style.opacity = t?.closest("[data-cursor-skip]") ? "0" : "1";
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <div ref={ref} className="cursor-arrow" style={{ opacity: 0 }} aria-hidden>
      <svg viewBox="0 0 24 24" className="h-full w-full">
        <defs>
          <linearGradient id="cursor-arrow-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--brand-bright)" />
            <stop offset="1" stopColor="var(--brand)" />
          </linearGradient>
        </defs>
        <path
          d="M3 2 L21 12 L12.3 13.7 L9 21 Z"
          fill="url(#cursor-arrow-grad)"
          stroke="var(--bg)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
