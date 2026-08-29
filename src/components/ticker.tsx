"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { tickerLines } from "@/lib/content";

export function Ticker() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((v) => (v + 1) % tickerLines.length), 3200);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div className="overflow-hidden rounded-2xl border border-line-strong bg-surface">
      <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-silver/70" />
        <span className="h-2 w-2 rounded-full bg-silver/70" />
        <span className="h-2 w-2 rounded-full bg-silver/70" />
        <span className="ml-auto font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">
          enaryx.build
        </span>
      </div>
      <div className="flex min-h-[2.75rem] items-center px-4 py-3 font-mono text-[0.875rem]">
        <span className="text-brand">›&nbsp;</span>
        {reduced ? (
          <span>{tickerLines[0]}</span>
        ) : (
          <AnimatePresence mode="wait">
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {tickerLines[i]}
            </motion.span>
          </AnimatePresence>
        )}
        <span className="enaryx-caret" aria-hidden />
      </div>
    </div>
  );
}
