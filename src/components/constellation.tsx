"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const NODES = [
  { label: "AI", detail: "Agents, automation, and intelligent systems." },
  { label: "Data", detail: "Turning information into insight." },
  { label: "Software", detail: "Web, mobile, and custom platforms." },
  { label: "Cloud", detail: "Infrastructure that scales with you." },
  { label: "Automation", detail: "Removing the manual steps." },
  { label: "Product", detail: "From concept to shipped experience." },
  { label: "Research", detail: "Exploring what comes next." },
  { label: "Security", detail: "Built to be trusted." },
];

export function Constellation() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  const positions = useMemo(
    () =>
      NODES.map((_, i) => {
        const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
        return {
          x: 50 + Math.cos(angle) * 40,
          y: 50 + Math.sin(angle) * 40,
        };
      }),
    []
  );

  return (
    <div className="mx-auto w-full max-w-[600px] px-6">
      <div className="relative mx-auto aspect-square w-full max-w-[440px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <radialGradient id="constellation-core" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="var(--glow-violet)" />
              <stop offset="1" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="url(#constellation-core)"
            opacity={active === null ? 0.55 : 1}
            style={{ pointerEvents: "none" }}
          />

          {positions.map((p, i) => {
            const isActive = active === i;
            return (
              <g key={i}>
                <motion.line
                  x1="50"
                  y1="50"
                  x2={p.x}
                  y2={p.y}
                  stroke={isActive ? "var(--brand-bright)" : "var(--line-strong)"}
                  strokeWidth={isActive ? 0.5 : 0.22}
                  style={{ pointerEvents: "none" }}
                  initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                  whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                />
                {/* invisible hit area — hovering the line itself reveals the node */}
                <line
                  x1="50"
                  y1="50"
                  x2={p.x}
                  y2={p.y}
                  stroke="transparent"
                  strokeWidth="6"
                  strokeLinecap="round"
                  style={{ pointerEvents: "stroke", cursor: "pointer" }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                />
              </g>
            );
          })}
        </svg>

        {/* Center node */}
        <div className="glass absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center">
          <span className="font-mono text-[0.6rem] leading-tight text-muted">ENARYX</span>
          <span className="font-mono text-[0.6rem] leading-tight text-text">LABS</span>
        </div>

        {NODES.map((node, i) => {
          const p = positions[i];
          const isActive = active === i;
          const above = p.y < 45; // top row labels sit above; every other label sits below
          return (
            <button
              key={node.label}
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              className="group absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2"
              aria-label={`${node.label} — ${node.detail}`}
            >
              <span
                className={cn(
                  "block h-3 w-3 rounded-full border transition-all duration-300",
                  isActive
                    ? "scale-[1.7] border-brand-bright bg-brand-bright shadow-[0_0_16px_var(--glow-violet)]"
                    : "border-line-strong bg-surface group-hover:border-brand"
                )}
                aria-hidden
              />
              {/* label word only — absolutely placed so it never shifts */}
              <span
                className={cn(
                  "pointer-events-none absolute left-1/2 w-24 -translate-x-1/2 text-center font-mono text-[0.6rem] uppercase leading-none tracking-[0.12em] transition-colors duration-200",
                  above ? "bottom-full mb-2" : "top-full mt-2",
                  isActive ? "text-brand" : "text-muted"
                )}
              >
                {node.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Shared caption — fixed position, so hovering any node/spoke never
          nudges the layout */}
      <p
        className={cn(
          "mx-auto mt-6 min-h-[2.5rem] max-w-[34ch] text-center font-mono text-[0.8125rem] transition-colors duration-200",
          active === null ? "text-muted" : "text-text"
        )}
        aria-live="polite"
      >
        {active === null ? (
          "Hover a node or connection to see how it fits."
        ) : (
          <>
            <span className="text-brand">{NODES[active].label}</span>
            {" — "}
            {NODES[active].detail}
          </>
        )}
      </p>
    </div>
  );
}
