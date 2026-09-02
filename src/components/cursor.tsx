"use client";

import { useEffect, useRef } from "react";

/**
 * The custom cursor: on a fine pointer, one small gradient arrow tracks the
 * pointer 1:1; on every device (mouse, pen or finger) a faint stream of code
 * glyphs (`<>`, `/`, `{ }`, `//`, `01`…) trails the point of contact, drifting
 * up and fading — a light nod to what the lab actually builds.
 *
 * Motion-ok only. The arrow is hidden inside the navbar (`data-cursor-skip`);
 * on touch there's no arrow, just the glyph trail while a finger moves.
 */

const GLYPHS = ["<>", "/", "{", "}", "//", "01", "*", "·", "()", ";", "[]", "=>"];
const POOL = 28;

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const sparkLayer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const el = ref.current;
    const layer = sparkLayer.current;
    if (!layer) return;

    if (fine) document.body.classList.add("custom-cursor-active");

    const sparks = Array.from(layer.children) as HTMLElement[];
    let cursor = 0;
    let lastSpawn = 0;
    let lastX = 0;
    let lastY = 0;

    // Lighter cadence on touch — every spawn forces a reflow, and fingers
    // generate a lot of move events while scrolling.
    const minGap = fine ? 42 : 80;
    const minDist = fine ? 5 : 10;

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

    const trail = (x: number, y: number) => {
      const now = performance.now();
      if (now - lastSpawn > minGap && Math.hypot(x - lastX, y - lastY) > minDist) {
        spawn(x, y);
        lastSpawn = now;
        lastX = x;
        lastY = y;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (fine && el) {
        const t = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
        const skipping = !!t?.closest("[data-cursor-skip]");
        el.style.opacity = skipping ? "0" : "1";
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        if (skipping) return;
      }
      trail(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) trail(t.clientX, t.clientY);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
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
