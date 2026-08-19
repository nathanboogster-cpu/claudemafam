import type { Metadata } from "next";
import { PATHS, SITE_URL } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

const pageUrl = `${SITE_URL}${PATHS.gallery}`;

export const metadata: Metadata = {
  title: "Grooming Gallery | Pampered Puppies, Victorville CA",
  description:
    "See real dog & cat grooming results from Pampered Puppies in Victorville, CA. Gallery updates with client photos.",
  alternates: { canonical: PATHS.gallery },
};

// Real client photos have not been supplied yet (see Client Record §11). This grid
// is sized and structured to receive real before/after photography — swap each
// PhotoPlaceholder for a Next.js <Image> with honest alt text once photos arrive.
const placeholderSlots = Array.from({ length: 9 }).map((_, i) => `Photo slot ${i + 1} — reserved for a real Pampered Puppies grooming photo`);

export default function GalleryPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Gallery", href: PATHS.gallery }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Gallery", url: pageUrl },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 text-center">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">Grooming Gallery</h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
          A look at real dogs and cats groomed by Donna and the Pampered
          Puppies team. This gallery is ready for photos — check back soon
          for updates.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {placeholderSlots.map((caption) => (
            <PhotoPlaceholder key={caption} caption={caption} aspect="square" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Like what you see?</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location="gallery_bottom" label="Book Now" />
          <BookButton location="gallery_bottom" />
        </div>
      </section>
    </div>
  );
}
