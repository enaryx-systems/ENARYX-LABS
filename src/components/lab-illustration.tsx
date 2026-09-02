"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/**
 * Right-side visual for the "01 — The Lab" section. Same panel language as
 * <FeaturedProduct> (card-grad, ambient glow, mono labels, semantic tokens)
 * so the two sections read as one system.
 *
 * It shows the lab doing the thing the section describes: building software.
 * The snippet's own calls — explore() → engineer() → launch() — are the
 * three steps listed in the cards beside it, and the build status ticks
 * along underneath.
 */

type Tok = { t: string; c?: "kw" | "fn" | "type" | "str" | "punct" | "com" };

const CODE: Tok[][] = [
  [{ t: "// turn an idea into a system people can use", c: "com" }],
  [
    { t: "export", c: "kw" },
    { t: " " },
    { t: "async", c: "kw" },
    { t: " " },
    { t: "function", c: "kw" },
    { t: " " },
    { t: "build", c: "fn" },
    { t: "(", c: "punct" },
    { t: "idea", c: "type" },
    { t: ": ", c: "punct" },
    { t: "Idea", c: "type" },
    { t: ") {", c: "punct" },
  ],
  [
    { t: "  const" , c: "kw" },
    { t: " paths  = " , c: "punct" },
    { t: "await", c: "kw" },
    { t: " " },
    { t: "explore", c: "fn" },
    { t: "(idea)", c: "punct" },
  ],
  [
    { t: "  const", c: "kw" },
    { t: " system = " , c: "punct" },
    { t: "engineer", c: "fn" },
    { t: "(paths)", c: "punct" },
  ],
  [
    { t: "  return", c: "kw" },
    { t: " " },
    { t: "launch", c: "fn" },
    { t: "(system)", c: "punct" },
  ],
  [{ t: "}", c: "punct" }],
];

const STATUS = ["typecheck ok", "128 tests passing", "ship ready"];

const TOK_COLOR: Record<NonNullable<Tok["c"]>, string> = {
  kw: "text-brand",
  fn: "text-brand-bright",
  type: "text-silver",
  str: "text-muted",
  punct: "text-text/80",
  com: "text-muted italic",
};

export function LabIllustration() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const play = inView || reduced;

  return (
    <div ref={ref} className="relative min-w-0">
      <div className="card-grad relative overflow-hidden rounded-2xl p-5 shadow-[var(--card-shadow)] sm:p-7">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full blur-[110px]"
          style={{ background: "var(--glow-violet)" }}
          aria-hidden
        />

        {/* window chrome */}
        <div className="relative flex flex-wrap items-center gap-2 border-b border-line pb-4">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
            Enaryx <span className="text-brand">{"//"}</span> Lab
          </span>
          <span className="ml-auto flex items-center gap-1.5 rounded-full border border-line-strong px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
            <span className="relative flex h-1.5 w-1.5">
              {!reduced && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright opacity-60" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-bright" />
            </span>
            Building
          </span>
        </div>

        <div className="relative mt-4 flex items-center gap-2 font-mono text-[0.62rem] text-muted">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-brand" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M4 3 L8 3 L13 8 L8 13 L4 13 Z" />
          </svg>
          orchestrator.ts
        </div>

        {/* code */}
        <div className="relative mt-3 min-w-0 overflow-hidden rounded-xl border border-line bg-surface-2 p-4">
          <pre className="thin-scroll max-w-full overflow-x-auto font-mono text-[0.72rem] leading-[1.7] sm:text-[0.74rem]">
            <code className="block w-max">
              {CODE.map((line, li) => (
                <motion.span
                  key={li}
                  className="flex"
                  initial={reduced ? false : { opacity: 0, x: 6 }}
                  animate={play ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.15 + li * 0.14, ease: "easeOut" }}
                >
                  <span className="mr-4 inline-block w-3 shrink-0 select-none text-right text-muted/50">
                    {li + 1}
                  </span>
                  <span className="whitespace-pre">
                    {line.map((tok, ti) => (
                      <span key={ti} className={tok.c ? TOK_COLOR[tok.c] : "text-text/80"}>
                        {tok.t}
                      </span>
                    ))}
                    {li === CODE.length - 1 && !reduced && (
                      <span className="enaryx-caret ml-0.5 !h-[0.9em]" />
                    )}
                  </span>
                </motion.span>
              ))}
            </code>
          </pre>
        </div>

        {/* build status */}
        <div className="relative mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {STATUS.map((s, i) => (
            <motion.span
              key={s}
              className="flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-muted"
              initial={reduced ? false : { opacity: 0 }}
              animate={play ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 1 + i * 0.18 }}
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3 text-brand-bright" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M2.5 6.5 L5 9 L9.5 3.5" />
              </svg>
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
