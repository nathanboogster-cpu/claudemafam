import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { photos, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "Real photos of Pet Spa Luxe's mobile dog grooming — finished grooms, the mobile grooming van, and happy pets.",
  path: PATHS.gallery,
});

const galleryPhotos = [
  photos.bulldogBandana,
  photos.huskyGroomed,
  photos.poodleDoorway,
  photos.vanInterior,
  photos.frenchieBandana,
  photos.corgiGroomingTable,
  photos.corgiBathSuds,
  photos.cavachonTreat,
  photos.apricotPoodleGroomed,
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

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <Eyebrow>Gallery</Eyebrow>
          <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
            Our Grooming Work
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-psl-ink-soft">
            Real Pet Spa Luxe photos — finished grooms, happy pets, and a look
            inside the mobile grooming van.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((p) => (
            <PhotoPlaceholder key={p.src} caption={p.alt} src={p.src} aspect="square" />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-psl-ink-soft">See real results for yourself — book a mobile grooming appointment.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <CallButton location="gallery_page" variant="primary" />
            <RequestButton location="gallery_page" variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
}
