import Image from "next/image";
import { transformations } from "@/lib/site-data";

function BeforeAfterCard({ item }: { item: (typeof transformations)[number] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {(
        [
          { label: "Before", photo: item.before },
          { label: "After", photo: item.after },
        ] as const
      ).map(({ label, photo }) => (
        <div key={label} className="relative">
          <div className="aspect-[3/4] relative overflow-hidden rounded-2xl border border-bb-border">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-bb-ink/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

// A dedicated before/after transformation section — real client photos only,
// paired as supplied by the client. Captions stay service-neutral (see
// lib/site-data.ts) since no per-photo service data was supplied.
export function BeforeAfterSection({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto grid max-w-4xl gap-8 ${className}`}>
      {transformations.map((item) => (
        <BeforeAfterCard key={item.dogLabel} item={item} />
      ))}
    </div>
  );
}
