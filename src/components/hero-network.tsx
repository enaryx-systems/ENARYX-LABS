"use client";

import { useSyncExternalStore } from "react";

/**
 * The Enaryx system core — a central intelligent system with orbiting
 * capability nodes. Always renders; the slow ambient rotation is disabled
 * under prefers-reduced-motion. Purple / silver, restrained.
 */

const NODES = ["AI", "DATA", "SOFTWARE", "AUTOMATION", "CLOUD", "PRODUCT"];
const R_NODE = 68; // svg units (viewBox 200)
const R_LABEL = 46; // percent of container

function subscribeMotion(cb: () => void) {
  const m = window.matchMedia("(prefers-reduced-motion: reduce)");
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
}
function motionOk() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HeroNetwork() {
  const animate = useSyncExternalStore(subscribeMotion, motionOk, () => true);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div
        className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, var(--glow-violet), transparent 72%)" }}
        aria-hidden
      />

      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="hero-core" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="var(--brand-bright)" stopOpacity="0.5" />
            <stop offset="1" stopColor="var(--brand)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {[34, 51, 68].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="var(--line-strong)" strokeWidth="0.5" />
        ))}

        <circle cx="100" cy="100" r="51" fill="none" stroke="var(--brand)" strokeWidth="0.6" strokeDasharray="1.5 5" opacity="0.55">
          {animate && (
            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="90s" repeatCount="indefinite" />
          )}
        </circle>

        {NODES.map((_, i) => {
          const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
          const x = 100 + Math.cos(a) * R_NODE;
          const y = 100 + Math.sin(a) * R_NODE;
          return (
            <g key={i}>
              <line x1="100" y1="100" x2={x} y2={y} stroke="var(--line-strong)" strokeWidth="0.5" />
              <circle cx={x} cy={y} r="2.6" fill="var(--bg)" stroke="var(--brand)" strokeWidth="1.1" />
            </g>
          );
        })}

        <circle cx="100" cy="100" r="26" fill="url(#hero-core)" />
        <circle cx="100" cy="100" r="4.5" fill="var(--brand)">
          {animate && <animate attributeName="r" values="4.5;6;4.5" dur="3.4s" repeatCount="indefinite" />}
        </circle>
      </svg>

      <div className="absolute inset-0" aria-hidden>
        {NODES.map((label, i) => {
          const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(a) * R_LABEL;
          const y = 50 + Math.sin(a) * (R_LABEL - 2);
          return (
            <span
              key={label}
              className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[0.54rem] uppercase tracking-[0.1em] text-muted"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {label}
            </span>
          );
        })}
        <span className="absolute left-1/2 top-[calc(50%+2.6rem)] -translate-x-1/2 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-muted">
          Enaryx core
        </span>
      </div>
    </div>
  );
}
