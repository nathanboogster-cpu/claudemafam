import { PawIcon } from "./PawIcon";

// Placeholder for real photography. Ellen/Donna have not yet supplied photo files
// (see Client Record §11), so this renders a correctly-sized, aspect-locked box
// instead of stock imagery or a fabricated caption. When real photos arrive, swap
// the <div> below for a Next.js <Image> with honest, descriptive alt text.
export function PhotoPlaceholder({
  caption,
  aspect = "square",
  className = "",
}: {
  caption: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
}) {
  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/6]",
  }[aspect];

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
