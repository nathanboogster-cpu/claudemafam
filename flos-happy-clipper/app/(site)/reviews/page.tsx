import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { ShieldCheckIcon, HeartIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Reviews",
  description:
    "See what pet owners say about Flo's Happy Clipper in Eatontown, NJ. Read current reviews directly on Google.",
  path: PATHS.reviews,
});

// Public review counts/ratings for Flo's Happy Clipper conflict across
// directories and go stale quickly, so nothing is hardcoded here — see the
// live Google link below instead. Themes below are drawn from confirmed,
// recurring public customer feedback, not invented quotes with names
// attached (see AGENTS.md for the source constraints on this build).
const reviewThemes = [
  { title: "Great With Large & Double-Coated Breeds", body: "Owners of large-breed and double-coated dogs — including German Shepherds and Portuguese Water Dogs — regularly mention how well their dogs are handled and how they look afterward." },
  { title: "Patient With Nervous & First-Time Dogs", body: "Pet owners often mention how comfortable their nervous or first-time dogs are during and after grooming." },
  { title: "Skilled With Specialty Coats", body: "Customers bringing in poodles and other specialty-coat breeds mention being pleased with the trim." },
  { title: "Repeat Customers, Year After Year", body: "Many customers have used Flo's Happy Clipper for years, returning to the same familiar, trusted groomer." },
  { title: "Reasonable Pricing", body: "Pricing is frequently mentioned as fair and reasonable compared to other local options." },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Reviews", url: `${SITE_URL}${PATHS.reviews}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Reviews", href: PATHS.reviews }]} />

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <Eyebrow>Reviews</Eyebrow>
        <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">What Pet Owners Say</h1>

        <div className="mx-auto mt-10 max-w-md rounded-3xl border-2 border-fh-amber/30 bg-white p-8 shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-fh-amber-dark text-fh-cream">
            <HeartIcon className="h-8 w-8" />
          </div>
          <p className="mt-4 font-fh-display text-2xl font-bold text-fh-ink">A Longtime Local Favorite</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-fh-ink-soft">
            Read What Eatontown Pet Owners Say
          </p>
          <a
            href={business.googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-fh-amber-dark px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-fh-amber-darker"
          >
            Read Current Reviews on Google
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-sm text-fh-ink-soft">
          Review counts and ratings change over time and vary by platform, so we link directly to our live
          Google listing rather than displaying a number here that could go out of date.
        </p>

        <div className="mt-14 border-t border-fh-border pt-10 text-left">
          <h2 className="text-center font-fh-display text-2xl font-bold text-fh-ink">
            What Pet Owners Consistently Mention
          </h2>
          <ul className="mx-auto mt-6 max-w-xl space-y-4">
            {reviewThemes.map((t) => (
              <li key={t.title} className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fh-amber/15 text-fh-amber-dark">
                  <ShieldCheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-fh-ink">{t.title}</p>
                  <p className="text-sm text-fh-ink-soft">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 border-t border-fh-border pt-10 text-center">
          <h2 className="font-fh-display text-2xl font-bold text-fh-ink">Ready to Experience It Yourself?</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <CallButton location="reviews_page" variant="primary" />
            <SecondaryLinkButton location="reviews_page" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
        </div>
      </section>
    </>
  );
}
