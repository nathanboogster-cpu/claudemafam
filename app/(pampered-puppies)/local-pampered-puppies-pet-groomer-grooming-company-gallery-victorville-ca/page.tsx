import type { Metadata } from "next";
import Link from "next/link";
import { PATHS, SITE_URL, testimonials } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { GalleryPhotoCard } from "@/components/GalleryPhotoCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StatBand } from "@/components/StatBand";
import { CheckIcon } from "@/components/icons";

const pageUrl = `${SITE_URL}${PATHS.gallery}`;

export const metadata: Metadata = {
  title: "Grooming Gallery | Pampered Puppies, Victorville CA",
  description:
    "See real dog & cat grooming results from Pampered Puppies in Victorville, CA. Gallery updates with client photos.",
  alternates: { canonical: PATHS.gallery },
};

// Most cards below use real client photos supplied by Ellen (studio shots and
// mobile-visit shots), captioned with a verified service + verified service
// area — mobile-visit photos are captioned generically since the exact city
// of each shoot isn't confirmed. The first "Cat Grooming" card and the
// "Puppy's First Groom" card still use stock photos (not actual Pampered
// Puppies clients) since no real puppy client photo exists yet — captioned
// "Representative Photo" rather than a real location, and swapped for a real
// photo once one arrives.
const recentWork = [
  { service: "Full Groom", location: "Victorville Studio", src: "/images/gallery-bichon.jpg" },
  { service: "Full Groom", location: "Mobile Visit", src: "/images/gallery-lab.jpg" },
  { service: "Full Groom", location: "Victorville Studio", src: "/images/gallery-yorkie.jpg" },
  { service: "Cat Grooming", location: "Representative Photo", src: "/images/gallery-cat-groom.jpg" },
  { service: "Bath & Brush", location: "Mobile Visit", src: "/images/gallery-goldendoodle.jpg" },
  { service: "Full Groom", location: "Victorville Studio", src: "/images/gallery-bernedoodle.jpg" },
  { service: "Full Groom", location: "Mobile Visit", src: "/images/gallery-pomeranian.jpg" },
  { service: "Mobile Groom", location: "Mobile Visit", src: "/images/gallery-german-shepherd.jpg" },
  { service: "Full Groom", location: "Victorville Studio", src: "/images/gallery-studio-goldendoodle.jpg" },
  { service: "Puppy's First Groom", location: "Representative Photo", src: "/images/gallery-puppy-groom.jpg" },
  { service: "Full Groom", location: "Victorville Studio", src: "/images/gallery-two-dogs-couch.jpg" },
  { service: "Cat Grooming", location: "Mobile Visit", src: "/images/gallery-orange-tabby.jpg" },
  { service: "Cat Grooming", location: "Mobile Visit", src: "/images/gallery-tuxedo-cat.jpg" },
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
          A look at real dogs groomed by Ellen and the Pampered Puppies team,
          plus a couple of representative photos while we gather more cat and
          puppy client shots.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {recentWork.map((item, i) => (
            <GalleryPhotoCard key={i} service={item.service} location={item.location} src={"src" in item ? item.src : undefined} />
          ))}
        </div>
      </section>

      <StatBand />

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <Eyebrow>Why Book With Us</Eyebrow>
          <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
            Why Pet Parents Keep Coming Back
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">
            A look at what a groom with Ellen and the team looks like —
            patient, unhurried, one pet at a time.
          </p>

          <ul className="mx-auto mt-6 flex max-w-xl flex-col items-start gap-2 text-left">
            {differenceChecklist.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 text-left sm:grid-cols-2">
            {testimonials
              .filter((t) => t.attribution === "James D." || t.attribution === "Lisa S.")
              .map((t) => (
                <TestimonialCard key={t.attribution} quote={t.quote} attribution={t.attribution} />
              ))}
          </div>

          <Link
            href={PATHS.reviews}
            className="mt-6 inline-block text-sm font-semibold text-terracotta-dark hover:underline"
          >
            Read more reviews →
          </Link>
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
