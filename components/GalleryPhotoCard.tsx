import Image from "next/image";
import { PawIcon } from "./PawIcon";

// Renders a real client photo when `src` is supplied; otherwise falls back to
// a placeholder card (see PhotoPlaceholder) until a real photo arrives.
// Captions use only verified service names and areas.
export function GalleryPhotoCard({
  service,
  location,
  aspect = "square",
  src,
}: {
  service: string;
  location: string;
  aspect?: "square" | "portrait" | "video";
  src?: string;
}) {
  const aspectClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    video: "aspect-video",
  }[aspect];

  return (
    <div
      role="img"
      aria-label={src ? `${service}, ${location}` : `${service}, ${location} — real photo pending from client`}
      className={`${aspectClass} relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-cream-deep to-terracotta-light/30`}
    >
      {src ? (
        <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <PawIcon className="h-10 w-10 text-ink-soft/30" />
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 pt-8">
        <p className="text-sm font-bold text-white">{service}</p>
        <p className="text-xs text-white/80">{location}</p>
      </div>
    </div>
  );
}
