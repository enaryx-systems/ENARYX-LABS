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
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        {positions.map((p, i) => (
          <motion.line
            key={i}
            x1="50"
            y1="50"
            x2={p.x}
            y2={p.y}
            stroke={active === i ? "var(--brand-bright)" : "var(--line-strong)"}
            strokeWidth={active === i ? 0.4 : 0.2}
            initial={reduced ? false : { pathLength: 0, opacity: 0 }}
            whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
          />
        ))}
      </svg>

      {/* Center node */}
      <div className="glass absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center">
        <span className="font-mono text-[0.6rem] leading-tight text-muted">ENARYX</span>
        <span className="font-mono text-[0.6rem] leading-tight text-text">LABS</span>
      </div>

      {NODES.map((node, i) => {
        const p = positions[i];
        const isActive = active === i;
        return (
          <button
            key={node.label}
            type="button"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <span
              className={cn(
                "block h-2.5 w-2.5 rounded-full border transition-all duration-300",
                isActive
                  ? "scale-150 border-brand-bright bg-brand-bright shadow-[0_0_16px_var(--glow-violet)]"
                  : "border-line-strong bg-surface"
              )}
              aria-hidden
            />
            <span
              className={cn(
                "pointer-events-none absolute left-1/2 top-[calc(100%+0.5rem)] w-max -translate-x-1/2 rounded-lg border border-line-strong bg-bg px-2.5 py-1.5 text-center font-mono text-[0.68rem] transition-opacity duration-200",
                isActive ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="block text-text">{node.label}</span>
              <span className="mt-0.5 block max-w-[9rem] text-muted">{node.detail}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
