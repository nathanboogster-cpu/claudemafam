import Link from "next/link";
import { beforeAfterPhotos, groomedPhotos, PATHS, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { CallButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { GalleryPhotoCard } from "@/components/GalleryPhotoCard";
import { StatBand } from "@/components/StatBand";
import { BottomCta } from "@/components/BottomCta";

export const metadata = pageMetadata({
  title: "Dog Grooming Before & After Photos | Bryn Mawr, PA",
  description:
    "Before and after photos of dogs groomed at I Love Dogs Pet Grooming in Bryn Mawr, PA. Packages from $75. Call 610-525-7387.",
  path: PATHS.gallery,
});

export default function GalleryPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Gallery", href: PATHS.gallery }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Gallery", url: `${SITE_URL}${PATHS.gallery}` },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 text-center">
        <Eyebrow>Recent Work</Eyebrow>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">Grooming Gallery: Before &amp; After</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
          Wondering what a groom will do for your dog?
          <br />
          Here are real dogs, before and after a visit to our Bryn Mawr salon.
        </p>
        <div className="mt-6 flex justify-center">
          <CallButton location="gallery_top" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-display text-2xl font-bold text-ink">Before &amp; After</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beforeAfterPhotos.map((p) => (
            <GalleryPhotoCard
              key={p.src}
              photo={p}
              label="Before & After"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ))}
        </div>
      </section>

      <StatBand />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-2xl font-bold text-ink">Freshly Groomed</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {groomedPhotos.map((p) => (
            <GalleryPhotoCard key={p.src} photo={p} label="Groomed at I Love Dogs" aspect="portrait" />
          ))}
        </div>
        <p className="mt-8 text-center text-ink-soft">
          Want this for your dog?{" "}
          <Link href={`${PATHS.dogGrooming}#pricing`} className="font-semibold text-brand hover:underline">
            See packages and prices
          </Link>{" "}
          or ask about{" "}
          <Link href={PATHS.pickup} className="font-semibold text-brand hover:underline">
            pickup and delivery
          </Link>
          .
        </p>
      </section>

      <BottomCta title="Like what you see?" body="Call to book your dog's groom." location="gallery_bottom" />
    </div>
  );
}
