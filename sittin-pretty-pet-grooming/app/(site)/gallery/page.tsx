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

// Every entry here is a real client photo — no stock imagery, no
// placeholders. Add a new entry (with a real src) if/when a salon
// interior or storefront photo comes in.
const galleryPhotos: { caption: string; src: string; aspect: "square" | "portrait" }[] = [
  { caption: photos.blackLabSmiling.alt, src: photos.blackLabSmiling.src, aspect: "portrait" },
  { caption: photos.tricolorDogBandana.alt, src: photos.tricolorDogBandana.src, aspect: "portrait" },
  { caption: photos.tanChihuahua.alt, src: photos.tanChihuahua.src, aspect: "portrait" },
  { caption: photos.sheepdogBandana.alt, src: photos.sheepdogBandana.src, aspect: "portrait" },
  { caption: photos.tanTerrierMix.alt, src: photos.tanTerrierMix.src, aspect: "portrait" },
  { caption: photos.grayWhiteShihTzu.alt, src: photos.grayWhiteShihTzu.src, aspect: "portrait" },
  { caption: photos.seniorBlackDog.alt, src: photos.seniorBlackDog.src, aspect: "portrait" },
  { caption: photos.creamFluffyDog.alt, src: photos.creamFluffyDog.src, aspect: "portrait" },
  { caption: photos.whiteFluffyPuppy.alt, src: photos.whiteFluffyPuppy.src, aspect: "portrait" },
  { caption: photos.corgiClipperDetail.alt, src: photos.corgiClipperDetail.src, aspect: "portrait" },
  { caption: photos.blackLabPinkBandana.alt, src: photos.blackLabPinkBandana.src, aspect: "portrait" },
  { caption: photos.triColorLonghairBandana.alt, src: photos.triColorLonghairBandana.src, aspect: "portrait" },
  { caption: photos.tanPugMixBowtie.alt, src: photos.tanPugMixBowtie.src, aspect: "portrait" },
  { caption: photos.oldEnglishSheepdogBlue.alt, src: photos.oldEnglishSheepdogBlue.src, aspect: "portrait" },
  { caption: photos.tanShorthairPinkLeash.alt, src: photos.tanShorthairPinkLeash.src, aspect: "portrait" },
  { caption: photos.grayWhiteShihTzuBlackCollar.alt, src: photos.grayWhiteShihTzuBlackCollar.src, aspect: "portrait" },
  { caption: photos.seniorBlackDogRedBow.alt, src: photos.seniorBlackDogRedBow.src, aspect: "portrait" },
  { caption: photos.creamMalteseBlueBandana.alt, src: photos.creamMalteseBlueBandana.src, aspect: "portrait" },
  { caption: photos.whiteFluffyYellowBandana.alt, src: photos.whiteFluffyYellowBandana.src, aspect: "portrait" },
  { caption: photos.catGrooming.alt, src: photos.catGrooming.src, aspect: "square" },
  { caption: photos.catBlackBlanket.alt, src: photos.catBlackBlanket.src, aspect: "square" },
  { caption: photos.catGrayTabbiesWindow.alt, src: photos.catGrayTabbiesWindow.src, aspect: "square" },
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
            Real dogs and cats, freshly groomed at our Funkstown salon.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {galleryPhotos.map((p) => (
            <PhotoPlaceholder
              key={p.caption}
              caption={p.caption}
              src={p.src}
              aspect={p.aspect}
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
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
