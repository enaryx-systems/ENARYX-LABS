"use client";

import { motion, useReducedMotion } from "motion/react";

export function ScrollIndicator() {
  const reduced = useReducedMotion();

  return (
    <div className="flex justify-center pb-10">
      <div className="flex flex-col items-center gap-3">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
          Scroll to explore
        </span>
        <div className="h-8 w-px overflow-hidden bg-line">
          <motion.div
            className="h-full w-full bg-[linear-gradient(180deg,var(--brand-bright),var(--cyan))]"
            initial={{ scaleY: 0.2, originY: 0 }}
            animate={
              reduced
                ? { scaleY: 1 }
                : { scaleY: [0.2, 1, 0.2], originY: [0, 1, 0] }
            }
            transition={reduced ? { duration: 0.3 } : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
