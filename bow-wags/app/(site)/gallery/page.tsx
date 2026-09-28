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
  { caption: "Dogs playing together indoors at Bow Wags", src: "/images/indoor-playroom-group-1.jpg" },
  { caption: "A lively play session indoors", src: "/images/indoor-playroom-group-2.jpg" },
  { caption: "Dog enjoying the secure outdoor playground", src: "/images/outdoor-play-springer.jpg" },
  { caption: "A dog taking a break in the play yard", src: "/images/dog-outdoor-bench-play.jpg" },
  { caption: "A dog out enjoying playtime outside", src: "/images/dog-outdoor-playground-2.jpg" },
  { caption: "Dogs resting in a private wooden boarding suite", src: "/images/boarding-dogs-resting.jpg" },
  { caption: "A relaxed dog resting indoors", src: "/images/goldendoodle-resting-indoors.jpg" },
  { caption: "A dog relaxing on a covered patio", src: "/images/happy-dog-covered-patio.jpg" },
  { caption: "Freshly groomed dog after a full haircut", src: "/images/groomed-dog-bandana.jpg" },
  { caption: "A happy boarding guest", src: "/images/happy-dog-lobby-aussie.jpg" },
  { caption: "A happy daycare regular", src: "/images/dog-lobby-husky.jpg" },
  { caption: "A puppy visiting Bow Wags", src: "/images/german-shepherd-puppy-outdoor.jpg" },
  { caption: "Another happy Bow Wags regular", src: "/images/boston-terrier-portrait.jpg" },
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
          A look at real dogs, boarding suites, and grooming results at our
          Marietta, GA facility. More photos are being added as they&apos;re
          provided — follow Bow Wags on Facebook and Instagram for the latest
          updates in the meantime.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <PhotoPlaceholder key={item.caption} caption={item.caption} src={item.src} aspect="square" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 text-center">
        <ReserveButton location="gallery_page" variant="primary" />
      </section>
    </>
  );
}
