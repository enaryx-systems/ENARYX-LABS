"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useContactModal } from "./modal";

type Props = {
  children?: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "onBrand";
};

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] px-3.5 py-3 font-mono text-[0.7rem] leading-none tracking-[0.01em] transition-[filter,background-color,border-color] duration-200 sm:px-5 sm:tracking-[0.02em] sm:text-[0.8125rem]";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  solid:
    "border border-transparent bg-[linear-gradient(120deg,var(--brand-bright),var(--brand)_55%,var(--cyan))] text-on-brand shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_24px_-10px_var(--glow-violet)] hover:brightness-110",
  outline:
    "glass text-text hover:border-line-strong hover:bg-glass-strong",
  onBrand:
    "border border-on-brand bg-on-brand text-brand-strong hover:bg-transparent hover:text-on-brand",
};

export function CtaButton({
  children = "Talk to Us",
  className,
  variant = "solid",
}: Props) {
  const { open } = useContactModal();

  return (
    <button
      type="button"
      onClick={open}
      className={cn(base, variants[variant], className)}
    >
      {children}
      <svg viewBox="0 0 16 16" className="hidden h-3.5 w-3.5 sm:block" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M3 8h9M8 4l4 4-4 4" />
      </svg>
    </button>
  );
}
