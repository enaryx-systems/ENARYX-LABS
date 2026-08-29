"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  as?: "div" | "section" | "li" | "span";
};

export function Reveal({ children, className, delay = 0, ...rest }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn("reveal-item", className)}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container: children get a 60ms cascade. */
export function RevealGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "show"}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduced = useReducedMotion();
  const Comp = as === "li" ? motion.li : motion.div;

  return (
    <Comp
      className={cn("reveal-item", className)}
      variants={{
        hidden: reduced ? {} : { opacity: 0, y: 20 },
        show: reduced ? {} : { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
      }}
    >
      {children}
    </Comp>
  );
}
