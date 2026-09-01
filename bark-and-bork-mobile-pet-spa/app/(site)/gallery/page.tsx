import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { photos, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description: "Photos from Bark and Bork Mobile Pet Spa's mobile dog grooming appointments across Compton and greater Los Angeles.",
  path: PATHS.gallery,
});

// Only one real client photo has been supplied and transferred into this
// build so far (the van interior below). Every other slot renders an
// honest, aspect-locked placeholder rather than stock imagery presented as
// real Bark and Bork work — see components/PhotoPlaceholder.tsx. Swap in
// more real photos as they're supplied.
const galleryPhotos: { caption: string; src?: string; aspect: "square" | "portrait" }[] = [
  { caption: photos.vanInteriorSkylight.alt, src: photos.vanInteriorSkylight.src, aspect: "portrait" },
  { caption: "Small dog after a Bark and Bork Bath & Tidy", aspect: "portrait" },
  { caption: "Large dog after a Bark and Bork Full Groom", aspect: "portrait" },
  { caption: "Double-coated dog after a deshedding treatment", aspect: "portrait" },
  { caption: "Dog after a Bark and Bork dematting appointment", aspect: "portrait" },
  { caption: "Freshly groomed extra-large dog", aspect: "portrait" },
  { caption: "Puppy's first mobile grooming appointment", aspect: "portrait" },
  { caption: "Bark and Bork mobile grooming setup at a customer's home", aspect: "square" },
  { caption: "Groomed dog ready for pickup after a mobile appointment", aspect: "portrait" },
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
          <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">Our Grooming Work</h1>
          <p className="mx-auto mt-4 max-w-xl text-bb-ink-soft">
            Real photos from Bark and Bork mobile grooming appointments are on the way. Book an appointment and see
            the results for your own dog.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((p) => (
            <PhotoPlaceholder key={p.caption} caption={p.caption} src={p.src} aspect={p.aspect} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-bb-ink-soft">Ready to see results for your own dog? Book a mobile grooming appointment.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <BookButton location="gallery_page" variant="primary" />
            <SecondaryLinkButton location="gallery_page" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
        </div>
      </section>
    </>
  );
}
