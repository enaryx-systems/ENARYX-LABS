"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * A `template.tsx` re-mounts on every navigation (unlike layout.tsx), which
 * is what gives each route its own enter transition here.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
