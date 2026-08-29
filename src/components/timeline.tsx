"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import type { Step } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  discover: (
    <>
      <circle cx="7" cy="7" r="5" />
      <path d="m14.5 14.5-3.5-3.5" />
    </>
  ),
  design: (
    <>
      <path d="M11.5 2.5 13.5 4.5 5 13 2 14l1-3z" />
      <path d="m10 4 2 2" />
    </>
  ),
  build: (
    <>
      <path d="m5.5 4-4 4 4 4" />
      <path d="m10.5 4 4 4-4 4" />
    </>
  ),
  test: (
    <>
      <path d="M6 2h4" />
      <path d="M7 2v3.5L3.5 11a2 2 0 0 0 1.7 3h5.6a2 2 0 0 0 1.7-3L9 5.5V2" />
      <path d="M4.5 9.5h7" />
    </>
  ),
  launch: (
    <>
      <path d="M8 1.5c1.8 1 3 3 3 5.5 0 2-.7 3.7-1.5 5L8 14.5 6.5 12C5.7 10.7 5 9 5 7c0-2.5 1.2-4.5 3-5.5Z" />
      <circle cx="8" cy="7" r="1.3" />
      <path d="M5.2 11.5 3 13.5M10.8 11.5 13 13.5" />
    </>
  ),
  scale: (
    <>
      <path d="M2 12.5 6 8l3 2.5 5-5.5" />
      <path d="M11 5h3v3" />
    </>
  ),
};

function StepIcon({ title, className }: { title: string; className?: string }) {
  const icon = icons[title.toLowerCase()];
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon ?? <circle cx="8" cy="8" r="2.5" fill="currentColor" stroke="none" />}
    </svg>
  );
}

export function Timeline({ steps }: { steps: Step[] }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <div ref={ref} className="relative">
      {/* Desktop: horizontal rail */}
      <div className="relative hidden lg:block">
        <div className="absolute left-0 right-0 top-[15px] h-px bg-line" aria-hidden />
        <motion.div
          className="absolute left-0 top-[15px] h-px origin-left bg-[linear-gradient(90deg,var(--brand-bright),var(--cyan))]"
          style={{ scaleX: reduced ? 1 : progress, right: 0 }}
          aria-hidden
        />
        <div className="grid grid-cols-6 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.index}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
            >
              <span
                className="relative z-10 mb-6 grid h-[30px] w-[30px] place-items-center rounded-full border border-line-strong bg-bg text-brand-bright"
                aria-hidden
              >
                <StepIcon title={s.title} className="h-4 w-4" />
              </span>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-brand">
                {s.index}
              </p>
              <h3 className="mt-2 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet: vertical rail */}
      <div className="relative flex flex-col gap-10 pl-9 lg:hidden">
        <div className="absolute left-[9px] top-1 bottom-1 w-px bg-line" aria-hidden />
        <motion.div
          className="absolute left-[9px] top-1 w-px origin-top bg-[linear-gradient(180deg,var(--brand-bright),var(--cyan))]"
          style={{ scaleY: reduced ? 1 : progress, bottom: 4 }}
          aria-hidden
        />
        {steps.map((s, i) => (
          <motion.div
            key={s.index}
            className="relative"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
          >
            <span
              className="absolute -left-9 top-[-2px] grid h-[20px] w-[20px] place-items-center rounded-full border border-line-strong bg-bg text-brand-bright"
              aria-hidden
            >
              <StepIcon title={s.title} className="h-3 w-3" />
            </span>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-brand">
              {s.index}
            </p>
            <h3 className="mt-1.5 text-xl">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
