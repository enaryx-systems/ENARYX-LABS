"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Word-by-word headline reveal. Reserve this for major statement headings —
 * not general body copy.
 */
export function WordReveal({
  text,
  as: Tag = "h2",
  className,
  gradientWord,
  immediate = false,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Exact word (case-sensitive, punctuation included) to render with the gradient treatment. */
  gradientWord?: string;
  /** Animate on mount instead of on scroll-into-view — use for above-the-fold headings. */
  immediate?: boolean;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const target = { y: "0%", opacity: 1 } as const;

  return (
    <Tag className={cn("word-reveal", className)} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden className="mr-[0.28em] inline-block overflow-hidden align-bottom">
          <motion.span
            className={cn("inline-block", word === gradientWord && "text-gradient")}
            initial={reduced ? false : { y: "110%", opacity: 0 }}
            {...(immediate
              ? { animate: reduced ? undefined : target }
              : {
                  whileInView: reduced ? undefined : target,
                  viewport: { once: true, margin: "0px 0px -10% 0px" },
                })}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
