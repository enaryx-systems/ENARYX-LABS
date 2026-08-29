import { cn } from "@/lib/utils";

/**
 * Enaryx mark — an "E" built into a crescent.
 *
 * Theme-aware, no JS, no flash: both variants render and CSS
 * (`.logo-light` / `.logo-dark` in globals.css) shows the right one.
 *   - light theme → purple mark + near-black wordmark
 *   - dark theme  → metallic-silver mark + silver wordmark
 *
 * TO USE THE OFFICIAL ASSET FILES: drop them in `public/` as
 *   public/logo-enaryx-purple.svg   (light)
 *   public/logo-enaryx-silver.svg   (dark)
 * then replace each <MarkSvg .../> below with, e.g.
 *   <img src="/logo-enaryx-purple.svg" alt="" width={112} height={24} />
 * If the file already includes the "Enaryx LABS" wordmark, also remove the
 * <Wordmark/> next to it. Nothing else needs to change.
 */

function MarkSvg({ variant }: { variant: "purple" | "silver" }) {
  const gradId = `enaryx-mark-${variant}`;
  return (
    <svg viewBox="0 0 40 40" className="h-[26px] w-[26px]" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="4" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          {variant === "purple" ? (
            <>
              <stop offset="0" stopColor="var(--brand-bright)" />
              <stop offset="1" stopColor="var(--brand)" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#e9ebf2" />
              <stop offset="1" stopColor="#9a9db0" />
            </>
          )}
        </linearGradient>
        <mask id={`${gradId}-cut`}>
          <rect x="0" y="0" width="40" height="40" fill="white" />
          <circle cx="25" cy="20" r="13.5" fill="black" />
        </mask>
      </defs>
      <circle cx="18.5" cy="20" r="15.5" fill={`url(#${gradId})`} mask={`url(#${gradId}-cut)`} />
      <g stroke={`url(#${gradId})`} strokeWidth="2.7" strokeLinecap="round">
        <path d="M11.8 12v16" />
        <path d="M11.8 12h8.6" />
        <path d="M11.8 20h6.4" />
        <path d="M11.8 28h8.6" />
      </g>
    </svg>
  );
}

function Wordmark({ tone }: { tone: "text" | "silver" }) {
  return (
    <span
      className={cn(
        "flex items-baseline gap-1.5 font-display text-[1.05rem] leading-none tracking-[-0.01em]",
        tone === "silver" ? "text-silver" : "text-text"
      )}
    >
      Enaryx
      <span className="font-mono text-[0.68rem] font-medium tracking-[0.22em] text-brand-bright">
        LABS
      </span>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)} aria-hidden={false}>
      <span className="logo-light inline-flex items-center gap-2.5">
        <MarkSvg variant="purple" />
        <Wordmark tone="text" />
      </span>
      <span className="logo-dark items-center gap-2.5">
        <MarkSvg variant="silver" />
        <Wordmark tone="silver" />
      </span>
    </span>
  );
}
