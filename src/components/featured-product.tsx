"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/**
 * A fictional Enaryx internal engineering console — qualitative status only,
 * no numeric business metrics. Clearly labelled SIMULATED ENVIRONMENT.
 */

const STATUS: { label: string; value: string }[] = [
  { label: "AI Engine", value: "Active" },
  { label: "System Status", value: "Operational" },
  { label: "Workflows", value: "Running" },
  { label: "Processes", value: "Monitored" },
];

// abstract activity trace — decorative, not data
const TRACE = [30, 52, 40, 64, 46, 78, 58, 70, 50, 66, 44, 60];

export function FeaturedProduct() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div ref={ref} className="relative">
      <div className="card-grad relative overflow-hidden rounded-2xl p-6 shadow-[var(--card-shadow)] sm:p-7">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[110px]"
          style={{ background: "var(--glow-violet)" }}
          aria-hidden
        />

        <div className="relative flex flex-wrap items-center gap-2 border-b border-line pb-4">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
            Enaryx <span className="text-brand">{"//"}</span> System 01
          </span>
          <span className="ml-auto rounded-full border border-line-strong px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
            Simulated environment
          </span>
        </div>

        {/* status grid */}
        <dl className="relative mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
          {STATUS.map((s) => (
            <div key={s.label} className="bg-surface p-4">
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">
                {s.label}
              </dt>
              <dd className="mt-1.5 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span
                    className={
                      reduced
                        ? "hidden"
                        : "absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright opacity-60"
                    }
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-bright" />
                </span>
                <span className="font-mono text-[0.8125rem] uppercase tracking-[0.04em] text-text">
                  {s.value}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {/* abstract activity trace */}
        <div className="relative mt-5">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">
              Activity
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">
              live
            </span>
          </div>
          <div className="mt-3 flex h-16 items-end gap-1.5">
            {TRACE.map((h, i) => (
              <motion.span
                key={i}
                className="w-full rounded-t-[3px] bg-[linear-gradient(180deg,var(--brand-bright),var(--brand-strong))]"
                initial={reduced ? false : { height: 0 }}
                animate={
                  inView || reduced ? { height: `${h}%` } : { height: 0 }
                }
                transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
