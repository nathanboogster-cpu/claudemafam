import Image from "next/image";
import { PawIcon } from "@/components/PawIcon";

// Renders a real photo when `src` is supplied; otherwise an honest,
// aspect-locked placeholder — never stock imagery presented as real
// Sittin' Pretty photography. Every current usage passes a real client
// photo; the placeholder branch stays for any future slot without one.
export function PhotoPlaceholder({
  caption,
  aspect = "square",
  className = "",
  src,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  caption: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
  src?: string;
  // Set true for above-the-fold hero images so they're eagerly fetched
  // and preloaded instead of lazy-loaded, improving LCP.
  priority?: boolean;
  // Match to the slot's real layout width (the default suits a two-column
  // hero); a three-column grid should pass 33vw so it doesn't over-fetch.
  sizes?: string;
}) {
  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/6]",
  }[aspect];

  if (src) {
    return (
      <div className={`${aspectClass} ${className} relative overflow-hidden rounded-2xl border border-sp-border`}>
        <Image
          src={src}
          alt={caption}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={caption}
      className={`${aspectClass} ${className} flex flex-col items-center justify-center gap-2 rounded-2xl border border-sp-border bg-gradient-to-br from-sp-cream-deep to-sp-purple/10 text-sp-ink-soft p-4 text-center font-sp-sans`}
    >
      <PawIcon className="h-8 w-8 opacity-50" />
      <span className="text-xs font-medium opacity-70">{caption}</span>
    </div>
  );
}
