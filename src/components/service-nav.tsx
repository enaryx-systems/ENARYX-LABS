import type { Service } from "@/lib/content";

/**
 * A continuously looping strip, not a scroll area — no scrollbar, no
 * dragging, no active-state highlight (it loops and duplicates, so a
 * "selected" pill would just look random). It rolls on its own forever and
 * pauses on hover/focus so you can actually click a pill.
 */
export function ServiceNav({ services }: { services: Service[] }) {
  const pill = (s: Service, copy: "a" | "b") => (
    <a
      key={`${s.slug}-${copy}`}
      href={`#${s.slug}`}
      className="flex shrink-0 items-center gap-2 rounded-[8px] border border-line-strong px-4 py-2 font-mono text-[0.75rem] tracking-[0.02em] text-muted transition-colors hover:border-brand hover:text-text"
    >
      <span className="text-brand">{s.index}</span>
      {s.title}
    </a>
  );

  return (
    <div className="sticky top-[68px] z-30 -mx-6 border-b border-line bg-bg/85 py-4 backdrop-blur-md lg:mx-0">
      <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] px-6 lg:px-0">
        <div className="flex w-max animate-service-roll gap-2 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none">
          {services.map((s) => pill(s, "a"))}
          {services.map((s) => pill(s, "b"))}
        </div>
      </div>
    </div>
  );
}
