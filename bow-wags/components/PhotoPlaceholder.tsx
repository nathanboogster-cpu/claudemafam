import Image from "next/image";
import { PawIcon } from "@/components/PawIcon";

// Renders a real photo when `src` is supplied; otherwise an honest,
// aspect-locked placeholder — never stock imagery presented as real Bow
// Wags photography. No real Bow Wags photos were available at build time
// (the live bowwags.com site and its photo hosts were not reachable to
// crawl) — every placement on this site uses the placeholder until real
// facility/dog photos are supplied.
export function PhotoPlaceholder({
  caption,
  aspect = "square",
  className = "",
  src,
  priority = false,
}: {
  caption: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
  src?: string;
  // Set true for above-the-fold hero images so they're eagerly fetched
  // and preloaded instead of lazy-loaded, improving LCP.
  priority?: boolean;
}) {
  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/6]",
  }[aspect];

  if (src) {
    return (
      <div className={`${aspectClass} ${className} relative overflow-hidden rounded-2xl border border-bw-border`}>
        <Image
          src={src}
          alt={caption}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={caption}
      className={`${aspectClass} ${className} flex flex-col items-center justify-center gap-2 rounded-2xl border border-bw-border bg-gradient-to-br from-bw-cream-deep to-bw-teal/10 text-bw-ink-soft p-4 text-center font-bw-sans`}
    >
      <PawIcon className="h-8 w-8 opacity-50" />
      <span className="text-xs font-medium opacity-70">{caption}</span>
    </div>
  );
}
