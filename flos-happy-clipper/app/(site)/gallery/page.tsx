import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { photos, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description: "Photos of dog grooming results from Flo's Happy Clipper in Eatontown, NJ.",
  path: PATHS.gallery,
});

// No real Flo's Happy Clipper photography has been supplied for this build
// yet, so every slot below renders an honest placeholder instead of stock
// imagery — swap in real photos here the moment they're supplied.
const galleryPhotos = Object.values(photos);

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

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <Eyebrow>Gallery</Eyebrow>
          <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">Our Grooming Work</h1>
          <p className="mx-auto mt-4 max-w-xl text-fh-ink-soft">
            Real dogs, freshly groomed at our Eatontown salon. Photos of finished grooms and the salon
            itself are on the way.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((p) => (
            <PhotoPlaceholder key={p.caption} caption={p.caption} aspect="portrait" />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-fh-ink-soft">Ready to see results for your own dog? Schedule a grooming appointment.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <CallButton location="gallery_page" variant="primary" />
            <SecondaryLinkButton location="gallery_page" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
        </div>
      </section>
    </>
  );
}
