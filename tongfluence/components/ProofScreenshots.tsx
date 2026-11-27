import Image from "next/image";
import type { ProofScreenshot } from "@/lib/proof";

// The screenshot slot under a results block. Renders nothing while the list
// is empty, so every block can ship its figures first and its chart later.
// The dark frame and caption bar match the Carlos report images.
export function ProofScreenshots({ items, className = "" }: { items: readonly ProofScreenshot[]; className?: string }) {
  if (!items.length) return null;
  return (
    <div className={`grid gap-3 ${items.length > 1 ? "md:grid-cols-2" : ""} ${className}`}>
      {items.map((s) => (
        <figure key={s.src} className="m-0 overflow-hidden rounded-xl border border-tf-border bg-[#202125]">
          <Image
            src={s.src}
            alt={s.alt}
            width={s.width}
            height={s.height}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-auto w-full"
          />
          {s.caption ? (
            <figcaption className="border-t border-white/10 px-4 py-2 text-xs text-white/70">{s.caption}</figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
