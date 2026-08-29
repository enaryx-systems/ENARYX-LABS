import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  /** Kept for API compatibility; no longer used. */
  strength?: number;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-[0.7rem] leading-none tracking-[0.01em] px-3.5 py-3 rounded-[8px] transition-[filter,background-color,border-color] duration-200 sm:px-5 sm:tracking-[0.02em] sm:text-[0.8125rem]";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  solid:
    "border border-transparent bg-[linear-gradient(120deg,var(--brand-bright),var(--brand))] text-on-brand shadow-[0_12px_32px_-12px_rgba(91,33,182,0.5)] hover:brightness-110",
  outline: "border border-line-strong bg-surface text-text hover:border-brand hover:bg-brand-tint",
  ghost: "text-muted hover:text-text px-0 py-1 rounded-none",
};

export function MagneticLink({
  href,
  children,
  className,
  variant = "solid",
}: Props) {
  const external = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
