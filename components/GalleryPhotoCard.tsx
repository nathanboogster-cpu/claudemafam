import { PawIcon } from "./PawIcon";

// Placeholder "recent work" card — captioned like a real gallery entry, but
// clearly a placeholder (see PhotoPlaceholder) until Ellen supplies real
// before/after photos. Captions use only verified service names and areas.
export function GalleryPhotoCard({
  service,
  location,
  aspect = "square",
}: {
  service: string;
  location: string;
  aspect?: "square" | "portrait" | "video";
}) {
  const aspectClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    video: "aspect-video",
  }[aspect];

  return (
    <div
      role="img"
      aria-label={`${service}, ${location} — real photo pending from client`}
      className={`${aspectClass} relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-cream-deep to-terracotta-light/30`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <PawIcon className="h-10 w-10 text-ink-soft/30" />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 pt-8">
        <p className="text-sm font-bold text-white">{service}</p>
        <p className="text-xs text-white/80">{location}</p>
      </div>
    </div>
  );
}
