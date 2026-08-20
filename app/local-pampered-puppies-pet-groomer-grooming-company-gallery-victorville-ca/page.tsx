import type { Metadata } from "next";
import { PATHS, SITE_URL } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { GalleryPhotoCard } from "@/components/GalleryPhotoCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CheckIcon } from "@/components/icons";

const pageUrl = `${SITE_URL}${PATHS.gallery}`;

export const metadata: Metadata = {
  title: "Grooming Gallery | Pampered Puppies, Victorville CA",
  description:
    "See real dog & cat grooming results from Pampered Puppies in Victorville, CA. Gallery updates with client photos.",
  alternates: { canonical: PATHS.gallery },
};

// Real client photos have not been supplied yet (see Client Record §11). Every
// card below is a placeholder captioned with a verified service + verified
// service area — swap each for a real photo with honest alt text once Ellen
// supplies them. Nothing here claims a specific real job that hasn't happened.
const recentWork = [
  { service: "Full Groom", location: "Victorville Studio" },
  { service: "Deshedding Treatment", location: "Victorville Studio" },
  { service: "Mobile Groom", location: "Hesperia" },
  { service: "Cat Grooming", location: "Victorville Studio" },
  { service: "Bath & Brush", location: "Apple Valley · Mobile" },
  { service: "Nail Trim & Ear Cleaning", location: "Victorville Studio" },
  { service: "Puppy's First Groom", location: "Victorville Studio" },
  { service: "Mobile Groom", location: "Spring Valley Lake" },
  { service: "Full Groom", location: "Victorville Studio" },
] as const;

const differenceChecklist = [
  "Quick consultation before any clippers come out",
  "Dog pricing shown upfront — $55–65 small, $65–85 large",
  "Same low-cage-time, one-on-one approach on every visit",
];

export default function GalleryPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Gallery", href: PATHS.gallery }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Gallery", url: pageUrl },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 text-center">
        <Eyebrow>Recent Work</Eyebrow>
        <h1 className="mt-1 font-display text-3xl font-bold text-ink sm:text-4xl">Grooming Gallery</h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
          A look at real dogs and cats groomed by Donna and the Pampered
          Puppies team. This gallery is ready for photos — check back soon
          for updates.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {recentWork.map((item, i) => (
            <GalleryPhotoCard key={i} service={item.service} location={item.location} />
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <Eyebrow>Results</Eyebrow>
          <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
            See the Pampered Puppies Difference
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">
            A look at what a groom with Donna looks like — patient, unhurried,
            one pet at a time.
          </p>

          <ul className="mx-auto mt-6 flex max-w-xl flex-col items-start gap-2 text-left">
            {differenceChecklist.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-ink-soft/70">
            ← Drag to compare →
          </p>
          <div className="mt-3">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Like what you see?</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location="gallery_bottom" label="Call Now" />
          <BookButton location="gallery_bottom" />
        </div>
      </section>
    </div>
  );
}
