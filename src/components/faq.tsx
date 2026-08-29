"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <div className="flex flex-col divide-y divide-line border-y border-line">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-lg text-text">{item.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: reduced ? 0 : 0.2 }}
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line-strong text-brand"
                  aria-hidden
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduced ? 0.1 : 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[62ch] pb-5 text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
