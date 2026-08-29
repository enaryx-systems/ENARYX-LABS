import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-[1200px] px-6 lg:px-10", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("border-t border-line py-[var(--spacing-section)]", className)}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted",
        className
      )}
    >
      <span className="h-px w-6 bg-brand" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  className,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex max-w-[46ch] flex-col gap-4", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-[clamp(1.9rem,1.2rem+2.4vw,2.9rem)]">{title}</h2>
      {lede ? <p className="text-lg text-muted">{lede}</p> : null}
    </div>
  );
}
