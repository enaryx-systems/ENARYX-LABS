"use client";

import { useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const BARS = [38, 62, 45, 78, 54, 90, 66, 72];

function useCountUp(target: number, inView: boolean, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1100;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  return value.toFixed(decimals);
}

const chips: { label: string; className: string; delay: number }[] = [
  { label: "ACTIVE", className: "-left-4 top-8 sm:-left-8", delay: 0 },
  { label: "AI ENGINE", className: "-right-3 top-24 sm:-right-8", delay: 0.4 },
  { label: "99.8% UPTIME", className: "-left-6 bottom-20 sm:-left-10", delay: 0.8 },
  { label: "CONNECTED", className: "-right-4 bottom-8 sm:-right-6", delay: 1.2 },
];

export function FeaturedProduct() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const uptime = useCountUp(99.8, inView, 1);

  return (
    <div ref={ref} className="relative">
      <div className="glass relative overflow-hidden rounded-[24px] p-6 sm:p-8">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[100px]"
          style={{ background: "var(--glow-violet)" }}
          aria-hidden
        />
        <div className="relative flex items-center gap-1.5 pb-6">
          <span className="h-2 w-2 rounded-full bg-silver/60" />
          <span className="h-2 w-2 rounded-full bg-silver/60" />
          <span className="h-2 w-2 rounded-full bg-silver/60" />
          <span className="ml-auto font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">
            enaryx.dashboard
          </span>
        </div>

        <div className="relative grid gap-6 sm:grid-cols-[1fr_auto]">
          <div className="flex h-40 items-end gap-2 sm:gap-3">
            {BARS.map((h, i) => (
              <motion.div
                key={i}
                className="w-full rounded-t-[6px]"
                style={{
                  background:
                    "linear-gradient(180deg, var(--brand-bright), var(--brand-strong))",
                }}
                initial={reduced ? false : { height: 0 }}
                animate={inView ? { height: `${h}%` } : reduced ? { height: `${h}%` } : {}}
                transition={{ duration: 0.7, delay: i * 0.06, ease: "easeOut" }}
              />
            ))}
          </div>

          <div className="flex flex-col justify-between gap-4 sm:w-40">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={reduced ? "" : "absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright opacity-60"}
                />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-bright" />
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted">
                AI engine
              </span>
            </div>
            <div>
              <p className="font-display text-3xl tnum">{uptime}%</p>
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted">
                Uptime
              </p>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-glass-strong">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, var(--brand-bright), var(--cyan))" }}
                initial={{ width: 0 }}
                animate={inView ? { width: "92%" } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </div>

      {chips.map((chip) => (
        <motion.span
          key={chip.label}
          className={`glass absolute hidden rounded-full px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-muted sm:block ${chip.className}`}
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={
            reduced
              ? { opacity: 1 }
              : inView
                ? { opacity: 1, y: [0, -6, 0] }
                : { opacity: 0 }
          }
          transition={
            reduced
              ? { duration: 0.3 }
              : { opacity: { duration: 0.5, delay: chip.delay }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: chip.delay } }
          }
        >
          {chip.label}
        </motion.span>
      ))}
    </div>
  );
}
