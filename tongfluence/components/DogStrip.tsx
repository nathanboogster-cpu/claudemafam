import Image from "next/image";
import { dogPhotos } from "@/lib/dog-photos";

// A slow, continuous strip of dogs groomed by Tongfluence clients. The list is
// rendered twice so the loop is seamless; the copy is aria-hidden so screen
// readers get each dog once. The motion pauses on hover and is switched off
// under prefers-reduced-motion (see .tf-marquee in globals.css), where it
// becomes a plain scrollable row.
export function DogStrip() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 gap-3 pr-3" aria-hidden={hidden || undefined}>
      {dogPhotos.map((d) => (
        <li key={d.slug} className="relative w-44 shrink-0 overflow-hidden rounded-xl border border-tf-border sm:w-52">
          <Image
            src={d.square}
            alt={hidden ? "" : d.alt}
            width={560}
            height={560}
            sizes="(min-width: 640px) 208px, 176px"
            className="aspect-square h-auto w-full object-cover"
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-tf-ink/70 to-transparent px-3 pb-2 pt-6 text-xs font-medium text-white">
            {d.credit.split(",")[0]}
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="tf-marquee group relative -mx-4 overflow-hidden sm:mx-0">
      <div className="tf-marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
