import type { Metadata } from "next";
import { Eyebrow } from "@/components/psl/Eyebrow";
import { Breadcrumbs } from "@/components/psl/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/psl/PhotoPlaceholder";
import { CallButton, RequestButton } from "@/components/psl/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/psl/schema";
import { PATHS, SITE_URL } from "@/lib/psl/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of Pet Spa Luxe's mobile dog grooming — finished grooms, the mobile setup, and happy pets, coming soon.",
  alternates: { canonical: PATHS.gallery },
};

const slots = [
  "Finished groom photos coming soon",
  "Mobile grooming setup photos coming soon",
  "Before & after photos coming soon",
  "Happy client photos coming soon",
  "Breed-specific haircut photos coming soon",
  "El Sobrante mobile visit photos coming soon",
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
            We&apos;re populating this gallery with real Pet Spa Luxe photos.
            Reserved photo slots are shown below rather than stock imagery, so
            everything you see here will be genuine Pet Spa Luxe work.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((s) => (
            <PhotoPlaceholder key={s} caption={s} aspect="square" />
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
