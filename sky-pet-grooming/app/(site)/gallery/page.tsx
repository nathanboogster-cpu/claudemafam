import { PATHS, SITE_URL } from "@/lib/site-data";
import { photos, withTag } from "@/lib/photos";
import { pageMetadata } from "@/lib/metadata";
import { BookButton, CallButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, imageGallerySchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { PhotoGrid } from "@/components/PhotoGrid";
import { BottomCta } from "@/components/BottomCta";

const PAGE_URL = `${SITE_URL}${PATHS.gallery}`;

export const metadata = pageMetadata({
  title: "Dog & Cat Grooming Photos | Sky Pet Grooming Gallery",
  description:
    "Photos of dogs and cats groomed in the Sky Pet Grooming van: doodles, poodles, Pomeranians, Golden Retrievers, cats and more.",
  path: PATHS.gallery,
});

const dogs = photos.filter((p) => p.tags.includes("dog") && !p.tags.includes("van") && !p.tags.includes("team"));
const cats = withTag("cat");
const van = photos.filter((p) => p.tags.includes("van") || p.tags.includes("team"));

export default function GalleryPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Gallery", href: PATHS.gallery }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Gallery", url: PAGE_URL },
        ])}
      />
      <JsonLd data={imageGallerySchema({ pageUrl: PAGE_URL, images: photos })} />

      <section className="mx-auto max-w-6xl px-4 pb-6 pt-10 text-center">
        <Eyebrow>Gallery</Eyebrow>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl">Our Grooming Gallery</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
          Real dogs and cats, groomed in our van at their owners&rsquo; doors. Tap any photo to see it full size.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <BookButton location="gallery_top" />
          <CallButton location="gallery_top" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Dogs</h2>
        <PhotoGrid items={dogs} className="mt-6" />
      </section>

      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Cats</h2>
          <PhotoGrid items={cats} className="mt-6 max-w-2xl !columns-2" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">The Van &amp; Team</h2>
        <PhotoGrid items={van} className="mt-6" />
      </section>

      <BottomCta title="Your pet could be next" location="gallery_bottom" />
    </div>
  );
}
