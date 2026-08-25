import Image from "next/image";
import { PawIcon } from "@/components/PawIcon";

// Renders a real photo when `src` is supplied; otherwise an honest, aspect-locked
// placeholder — never stock imagery presented as real Pet Spa Luxe photography.
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
      <div className={`${aspectClass} ${className} relative overflow-hidden rounded-2xl border border-psl-border`}>
        <Image src={src} alt={caption} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={caption}
      className={`${aspectClass} ${className} flex flex-col items-center justify-center gap-2 rounded-2xl border border-psl-border bg-gradient-to-br from-psl-cream-deep to-psl-pink/15 text-psl-ink-soft p-4 text-center font-psl-sans`}
    >
      <PawIcon className="h-8 w-8 opacity-50" />
      <span className="text-xs font-medium opacity-70">{caption}</span>
    </div>
  );
}
