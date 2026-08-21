import Image from "next/image";
import { PawIcon } from "./PawIcon";

// Renders a real photo when `src` is supplied; otherwise falls back to an
// aspect-locked placeholder box instead of stock imagery or a fabricated caption.
export function PhotoPlaceholder({
  caption,
  aspect = "square",
  className = "",
  src,
}: {
  caption: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
  src?: string;
}) {
  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/6]",
  }[aspect];

  if (src) {
    return (
      <div className={`${aspectClass} ${className} relative overflow-hidden rounded-2xl border border-border`}>
        <Image src={src} alt={caption} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={caption}
      className={`${aspectClass} ${className} flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-gradient-to-br from-cream-deep to-terracotta-light/30 text-ink-soft p-4 text-center`}
    >
      <PawIcon className="h-8 w-8 opacity-50" />
      <span className="text-xs font-medium opacity-70">{caption}</span>
    </div>
  );
}
