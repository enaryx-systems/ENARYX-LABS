"use client";

import { useEffect, useRef } from "react";

/**
 * The custom cursor: one small gradient arrow that tracks the pointer 1:1,
 * trailing a faint stream of code glyphs (`<>`, `/`, `{ }`, `//`, `01`…) that
 * drift up and fade — a light nod to what the lab actually builds. Desktop
 * (pointer: fine) + motion-ok only; hidden inside the navbar
 * (`data-cursor-skip`), where the native cursor + underline hover take over.
 */

const GLYPHS = ["<>", "/", "{", "}", "//", "01", "*", "·", "()", ";", "[]", "=>"];
const POOL = 28;

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const sparkLayer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const el = ref.current;
    const layer = sparkLayer.current;
    if (!el || !layer) return;

    document.body.classList.add("custom-cursor-active");

    const sparks = Array.from(layer.children) as HTMLElement[];
    let cursor = 0;
    let lastSpawn = 0;
    let lastX = 0;
    let lastY = 0;
    let skipping = false;

    const spawn = (x: number, y: number) => {
      const s = sparks[cursor];
      cursor = (cursor + 1) % sparks.length;
      s.textContent = GLYPHS[(Math.random() * GLYPHS.length) | 0];
      s.style.setProperty("--sx", `${x}px`);
      s.style.setProperty("--sy", `${y}px`);
      s.style.setProperty("--dx", `${(Math.random() - 0.5) * 26}px`);
      s.style.setProperty("--dy", `${(Math.random() - 0.5) * 12}px`);
      s.style.setProperty("--rot", `${(Math.random() - 0.5) * 40}deg`);
      s.classList.remove("is-live");
      void s.offsetWidth; // restart the animation
      s.classList.add("is-live");
    };

    const onMove = (e: PointerEvent) => {
      const t = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      skipping = !!t?.closest("[data-cursor-skip]");
      el.style.opacity = skipping ? "0" : "1";
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

      if (skipping) return;
      const now = performance.now();
      const moved = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (now - lastSpawn > 45 && moved > 5) {
        spawn(e.clientX, e.clientY);
        lastSpawn = now;
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={sparkLayer} aria-hidden>
        {Array.from({ length: POOL }, (_, i) => (
          <span key={i} className="cursor-spark" />
        ))}
      </div>
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
    </>
  );
}
