import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Square-ish client-logo tile, always on a white ground so the lockup reads
 * the same in both themes. Pass `dark` only when the client has a distinct
 * dark-surface lockup; otherwise `light` is used everywhere. Size the tile
 * with `className` (height + width).
 */
export function ClientLogo({
  light,
  dark,
  name,
  className,
}: {
  light?: string;
  dark?: string;
  name: string;
  className?: string;
}) {
  if (!light && !dark) return null;
  const l = light ?? dark!;

  const tile = cn(
    "relative block shrink-0 overflow-hidden rounded-xl border border-line bg-white",
    className,
  );

  if (!dark || dark === l) {
    return (
      <span className={tile}>
        <Image
          src={l}
          alt={`${name} logo`}
          fill
          className="object-contain p-[9%]"
          sizes="320px"
        />
      </span>
    );
  }

  return (
    <span className={tile}>
      <span className="logo-light absolute inset-0 bg-white">
        <Image src={l} alt={`${name} logo`} fill className="object-contain p-[9%]" sizes="320px" />
      </span>
      <span className="logo-dark absolute inset-0 bg-[#112620]">
        <Image src={dark} alt={`${name} logo`} fill className="object-contain" sizes="320px" />
      </span>
    </span>
  );
}
