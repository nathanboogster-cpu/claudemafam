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
  description: "Photos of dog and cat grooming results from Sittin' Pretty Pet Grooming in Funkstown, MD.",
  path: PATHS.gallery,
});

// Real client photos supplied so far lead the grid. A cat photo, the salon
// interior, and the storefront still render an honest placeholder instead
// of stock imagery until real photos of those come in.
const galleryPhotos: { caption: string; src?: string; aspect: "square" | "portrait" }[] = [
  { caption: photos.blackLabSmiling.alt, src: photos.blackLabSmiling.src, aspect: "portrait" },
  { caption: photos.tricolorDogBandana.alt, src: photos.tricolorDogBandana.src, aspect: "portrait" },
  { caption: photos.tanChihuahua.alt, src: photos.tanChihuahua.src, aspect: "portrait" },
  { caption: photos.sheepdogBandana.alt, src: photos.sheepdogBandana.src, aspect: "portrait" },
  { caption: photos.tanTerrierMix.alt, src: photos.tanTerrierMix.src, aspect: "portrait" },
  { caption: photos.grayWhiteShihTzu.alt, src: photos.grayWhiteShihTzu.src, aspect: "portrait" },
  { caption: photos.seniorBlackDog.alt, src: photos.seniorBlackDog.src, aspect: "portrait" },
  { caption: photos.creamFluffyDog.alt, src: photos.creamFluffyDog.src, aspect: "portrait" },
  { caption: photos.whiteFluffyPuppy.alt, src: photos.whiteFluffyPuppy.src, aspect: "portrait" },
  { caption: "Groomed cat at Sittin' Pretty", aspect: "square" },
  { caption: "Sittin' Pretty grooming salon interior", aspect: "square" },
  { caption: "Sittin' Pretty Pet Grooming storefront in Funkstown, MD", aspect: "square" },
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
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">Our Grooming Work</h1>
          <p className="mx-auto mt-4 max-w-xl text-sp-ink-soft">
            Real dogs, freshly groomed at our Funkstown salon. More photos — including cats and the
            salon itself — are on the way.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((p) => (
            <PhotoPlaceholder key={p.caption} caption={p.caption} src={p.src} aspect={p.aspect} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sp-ink-soft">Ready to see results for your own pet? Schedule a grooming appointment.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <CallButton location="gallery_page" variant="primary" />
            <SecondaryLinkButton location="gallery_page" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
        </div>
      </section>
    </>
  );
}
