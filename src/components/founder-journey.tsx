"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/**
 * "From idea to product" — the founder journey as a live roadmap.
 * The rail fills as the active stage advances (auto-cycling, pausing on
 * hover / click). The panel below is a small terminal that re-types the
 * current stage.
 */

const STAGES = [
  {
    label: "Idea",
    tag: "Weeks 0–2",
    cmd: "define --scope",
    detail:
      "Shape the concept, pressure-test the problem, and decide exactly what is worth building first.",
  },
  {
    label: "Prototype",
    tag: "Weeks 2–6",
    cmd: "build --proof",
    detail:
      "A working proof — the core idea made tangible enough to put in front of real people.",
  },
  {
    label: "MVP",
    tag: "Months 2–4",
    cmd: "ship --mvp",
    detail:
      "The smallest real product that delivers genuine value to your first users, shipped and instrumented.",
  },
  {
    label: "Product",
    tag: "Months 4+",
    cmd: "harden --scale-ready",
    detail:
      "Designed, hardened and observable — a dependable product that can carry a roadmap.",
  },
  {
    label: "Scale",
    tag: "Ongoing",
    cmd: "grow --sustainably",
    detail:
      "The architecture, team and process to grow usage and scope without the system breaking.",
  },
];

const LAST = STAGES.length - 1;
const n2 = (i: number) => String(i + 1).padStart(2, "0");

function useTypewriter(text: string, enabled: boolean, cps = 52) {
  // A typewriter is inherently a timer that pushes state on each tick; the
  // lint rule can't tell that from a render-loop hazard, so it's silenced
  // for this hook only.
  /* eslint-disable react-hooks/set-state-in-effect */
  const [count, setCount] = useState(enabled ? 0 : text.length);

  useEffect(() => {
    if (!enabled) return;
    let i = 0;
    setCount(0);
    const id = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) window.clearInterval(id);
    }, 1000 / cps);
    return () => window.clearInterval(id);
  }, [text, enabled, cps]);
  /* eslint-enable react-hooks/set-state-in-effect */

  return text.slice(0, Math.min(count, text.length));
}

export function FounderJourney() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (reduced || !inView || locked) return;
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % STAGES.length),
      3600,
    );
    return () => window.clearInterval(id);
  }, [reduced, inView, locked]);

  const select = (i: number) => {
    setActive(i);
    setLocked(true);
  };

  const stage = STAGES[active];
  const typed = useTypewriter(stage.detail, !reduced && inView);
  const typing = typed.length < stage.detail.length;

  return (
    <div ref={ref} onMouseLeave={() => setLocked(false)} className="relative">
      {/* ---- rail + nodes ---- */}
      <ol className="grid gap-y-6 sm:grid-cols-5 sm:gap-y-0">
        {STAGES.map((s, i) => {
          const isActive = i === active;
          const done = i < active;
          return (
            <li key={s.label} className="relative">
              {/* connector to the next node — auto-aligns to node centres.
                  horizontal on sm+, vertical on mobile */}
              {i < LAST && (
                <>
                  <span
                    className="absolute left-[1.375rem] top-[1.375rem] z-0 hidden h-[2px] w-[calc(100%+1rem)] -translate-y-1/2 overflow-hidden rounded-full bg-line-strong sm:block"
                    aria-hidden
                  >
                    <span
                      className="block h-full rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: i < active ? "100%" : "0%",
                        background: "var(--grad-brand-90)",
                        boxShadow: i < active ? "0 0 10px var(--glow-violet)" : "none",
                      }}
                    />
                  </span>
                  <span
                    className="absolute left-[1.375rem] top-[1.375rem] z-0 h-[calc(100%+1.5rem)] w-[2px] -translate-x-1/2 overflow-hidden rounded-full bg-line-strong sm:hidden"
                    aria-hidden
                  >
                    <span
                      className="block w-full rounded-full transition-all duration-500 ease-out"
                      style={{
                        height: i < active ? "100%" : "0%",
                        background: "var(--grad-brand)",
                        boxShadow: i < active ? "0 0 10px var(--glow-violet)" : "none",
                      }}
                    />
                  </span>
                </>
              )}

              <button
                type="button"
                onClick={() => select(i)}
                onMouseEnter={() => select(i)}
                onFocus={() => select(i)}
                className="group relative flex w-full items-center gap-3 text-left sm:flex-col sm:items-start sm:gap-0 sm:pr-4"
                aria-current={isActive ? "step" : undefined}
              >
                <span
                  className={[
                    "relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-mono text-[0.72rem] font-medium leading-none tabular-nums transition-all duration-300",
                    isActive
                      ? "scale-110 border-transparent text-on-brand shadow-[var(--glow-md)]"
                      : done
                        ? "border-transparent bg-brand text-on-brand"
                        : "border-line-strong bg-surface text-muted group-hover:border-brand group-hover:text-brand",
                  ].join(" ")}
                  style={isActive ? { backgroundImage: "var(--grad-brand)" } : undefined}
                >
                  <span className="translate-y-[0.5px]">{n2(i)}</span>
                  {isActive && !reduced && (
                    <span className="absolute inset-[-3px] rounded-full border border-brand-bright/40 motion-safe:animate-ping" />
                  )}
                </span>

                <span className="min-w-0 sm:mt-3.5">
                  <span
                    className={[
                      "block font-display text-sm uppercase tracking-tight transition-colors duration-300",
                      isActive ? "text-brand" : done ? "text-text" : "text-muted",
                    ].join(" ")}
                  >
                    {s.label}
                  </span>
                  <span className="mt-0.5 block font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted">
                    {s.tag}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* ---- terminal ---- */}
      <div className="card-grad relative mt-8 overflow-hidden rounded-2xl shadow-[var(--card-shadow)]">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-[110px]"
          style={{ background: "var(--glow-violet)" }}
          aria-hidden
        />

        {/* title bar */}
        <div className="relative flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand/50" />
          </span>
          <span className="ml-2 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted">
            enaryx@lab: ~/product
          </span>
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
            <span className="relative flex h-1.5 w-1.5">
              {!reduced && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright opacity-60" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-bright" />
            </span>
            {typing ? "running" : "ready"}
          </span>
        </div>

        {/* body */}
        <div className="relative px-5 py-5 font-mono text-[0.8rem] leading-[1.75] sm:px-6">
          <p className="text-muted">
            <span className="text-brand-bright">enaryx</span>
            <span className="mx-1.5 text-brand">$</span>
            <span className="text-text">
              stage {n2(active)} — {stage.cmd}
            </span>
          </p>

          {/* Fixed height across every stage — reserve space for the longest
              detail so the card never resizes as the text types or the
              active stage changes. */}
          <p className="mt-3 min-h-[5.6rem] max-w-[52ch] text-text sm:min-h-[4.25rem]">
            <span className="mr-2 select-none text-brand">{"//"}</span>
            {typed}
            {typing && !reduced && <span className="enaryx-caret ml-0.5 !h-[0.95em]" />}
          </p>

          <motion.div
            className="mt-4 flex min-h-[1.1rem] flex-wrap items-center gap-x-5 gap-y-1 text-[0.68rem] uppercase tracking-[0.08em] text-muted"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: typing ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="flex items-center gap-1.5">
              <span className="text-brand-bright">▸</span> {stage.tag}
            </span>
            <span className="text-line-strong" aria-hidden>
              |
            </span>
            <span>
              {active < LAST ? (
                <>next → {n2(active + 1)} {STAGES[active + 1].label}</>
              ) : (
                <>pipeline complete</>
              )}
            </span>
          </motion.div>

          {/* progress ticks */}
          <div className="mt-5 flex items-center gap-1.5">
            {STAGES.map((s, i) => (
              <span
                key={s.label}
                className={[
                  "h-1 rounded-full transition-all duration-500",
                  i === active ? "w-8 bg-brand" : i < active ? "w-4 bg-brand/40" : "w-4 bg-line-strong",
                ].join(" ")}
              />
            ))}
            <span className="ml-3 text-[0.62rem] tracking-[0.12em] text-muted">
              {n2(active)} / {n2(LAST)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
