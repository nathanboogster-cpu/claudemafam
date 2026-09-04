import Image from "next/image";
import { PawIcon } from "@/components/PawIcon";

// Renders a real photo when `src` is supplied; otherwise an honest,
// aspect-locked placeholder — never stock imagery presented as real
// Flo's Happy Clipper photography. No real photos have been supplied for
// this build yet, so every usage currently renders the placeholder branch.
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
      <div className={`${aspectClass} ${className} relative overflow-hidden rounded-2xl border border-fh-border`}>
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
      className={`${aspectClass} ${className} flex flex-col items-center justify-center gap-2 rounded-2xl border border-fh-border bg-gradient-to-br from-fh-cream-deep to-fh-amber/10 text-fh-ink-soft p-4 text-center font-fh-sans`}
    >
      <PawIcon className="h-8 w-8 opacity-50" />
      <span className="text-xs font-medium opacity-70">{caption}</span>
    </div>
  );
}
