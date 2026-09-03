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

// Real Bark and Bork photos, supplied directly by the client — the van, the
// grooming setup inside it, and real client dogs after their appointments.
// See lib/site-data.ts's `photos` export for the source of truth; any
// future slot without a supplied photo renders an honest, aspect-locked
// placeholder instead of stock imagery — see components/PhotoPlaceholder.tsx.
const galleryPhotos: { caption: string; src?: string; aspect: "square" | "portrait" }[] = [
  { caption: photos.groomScissorFinishing.alt, src: photos.groomScissorFinishing.src, aspect: "portrait" },
  { caption: photos.vanExteriorSide.alt, src: photos.vanExteriorSide.src, aspect: "portrait" },
  { caption: photos.groomGoldendoodleFullGroom.alt, src: photos.groomGoldendoodleFullGroom.src, aspect: "portrait" },
  { caption: photos.groomFrenchBulldog.alt, src: photos.groomFrenchBulldog.src, aspect: "portrait" },
  { caption: photos.groomYorkieSmile.alt, src: photos.groomYorkieSmile.src, aspect: "portrait" },
  { caption: photos.vanInteriorSkylight.alt, src: photos.vanInteriorSkylight.src, aspect: "portrait" },
  { caption: photos.groomBichonHeld.alt, src: photos.groomBichonHeld.src, aspect: "portrait" },
  { caption: photos.groomChihuahuaBowtie.alt, src: photos.groomChihuahuaBowtie.src, aspect: "portrait" },
  { caption: photos.groomTerrierBandana.alt, src: photos.groomTerrierBandana.src, aspect: "portrait" },
  { caption: photos.groomSchnauzerBowtie.alt, src: photos.groomSchnauzerBowtie.src, aspect: "portrait" },
  { caption: photos.groomShihTzuBlackWhite.alt, src: photos.groomShihTzuBlackWhite.src, aspect: "portrait" },
  { caption: photos.groomShihTzuPalmTree.alt, src: photos.groomShihTzuPalmTree.src, aspect: "portrait" },
  { caption: photos.groomGoldendoodleVanSeat.alt, src: photos.groomGoldendoodleVanSeat.src, aspect: "portrait" },
  { caption: photos.vanExteriorRear.alt, src: photos.vanExteriorRear.src, aspect: "portrait" },
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
            Real photos from Bark and Bork mobile grooming appointments — the van, the setup, and real client dogs.
            Book an appointment and see the results for your own dog.
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
