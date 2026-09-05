import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReserveButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description: "See the Bow Wags facility, playrooms, boarding suites, and grooming results in Marietta, GA.",
  path: PATHS.gallery,
});

const galleryItems = [
  { caption: "Dogs playing in a small/toy dog playroom" },
  { caption: "Dogs playing in a medium dog playroom" },
  { caption: "Large dog playroom at Bow Wags" },
  { caption: "Secure outdoor playground" },
  { caption: "Private wooden boarding suite" },
  { caption: "Boarding suites divided by picket-style fencing" },
  { caption: "Dog getting a bath in the grooming salon" },
  { caption: "Freshly groomed dog after a full haircut" },
  { caption: "Cynthia grooming a dog at Bow Wags" },
  { caption: "Bow Wags facility exterior" },
  { caption: "A happy boarding guest" },
  { caption: "A happy daycare regular" },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Gallery", url: `${SITE_URL}${PATHS.gallery}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Gallery", href: PATHS.gallery }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <Eyebrow>Gallery</Eyebrow>
        <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">See Bow Wags</h1>
        <p className="mt-4 text-lg text-bw-ink-soft">
          A look at the daycare playrooms, boarding suites, and grooming results at
          our Marietta, GA facility. Real photos are being added as they&apos;re provided —
          follow Bow Wags on Facebook and Instagram for the latest updates in the meantime.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <PhotoPlaceholder key={item.caption} caption={item.caption} aspect="square" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 text-center">
        <ReserveButton location="gallery_page" variant="primary" />
      </section>
    </>
  );
}
