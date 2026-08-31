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
    "See what pet owners say about Sittin' Pretty Pet Grooming in Funkstown, MD. Read current reviews directly on Google.",
  path: PATHS.reviews,
});

// No current, confirmed star rating or review count was supplied for this
// build — public estimates conflict and go stale quickly — so nothing is
// hardcoded here. Themes below are drawn from confirmed, recurring public
// customer feedback, not invented quotes with names attached.
const reviewThemes = [
  { title: "Friendly, Personal Service", body: "Pet owners consistently mention friendly staff and a personalized grooming experience." },
  { title: "Comfortable Handling of Nervous & Senior Dogs", body: "Owners of nervous or senior dogs often mention how comfortable their pets are during and after grooming." },
  { title: "Great With Large Breeds", body: "Large-breed dog owners regularly note that their dogs are handled well and look great afterward." },
  { title: "Repeat Customers, Year After Year", body: "Many customers have used Sittin' Pretty for years, returning to the same familiar, trusted groomer." },
  { title: "Reasonable Pricing", body: "Pricing is frequently mentioned as fair and reasonable compared to other local options." },
  { title: "Quick, Responsive Scheduling", body: "Pet owners often mention accommodating scheduling and a quick response by phone." },
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
        <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">What Pet Owners Say</h1>

        <div className="mx-auto mt-10 max-w-md rounded-3xl border-2 border-sp-purple/30 bg-white p-8 shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sp-purple-dark text-sp-cream">
            <HeartIcon className="h-8 w-8" />
          </div>
          <p className="mt-4 font-sp-display text-2xl font-bold text-sp-ink">A Longtime Local Favorite</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-sp-ink-soft">
            Highly Rated by Local Pet Owners
          </p>
          <a
            href={business.googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-sp-purple-dark px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-sp-purple-darker"
          >
            Read Current Reviews on Google
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-sm text-sp-ink-soft">
          Google review counts and ratings change over time, so we link directly to our live Google
          listing rather than displaying a number here that could go out of date.
        </p>

        <div className="mt-14 border-t border-sp-border pt-10 text-left">
          <h2 className="text-center font-sp-display text-2xl font-bold text-sp-ink">
            What Pet Owners Consistently Mention
          </h2>
          <ul className="mx-auto mt-6 max-w-xl space-y-4">
            {reviewThemes.map((t) => (
              <li key={t.title} className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sp-purple/15 text-sp-purple-dark">
                  <ShieldCheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-sp-ink">{t.title}</p>
                  <p className="text-sm text-sp-ink-soft">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 border-t border-sp-border pt-10 text-center">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink">Ready to Experience It Yourself?</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <CallButton location="reviews_page" variant="primary" />
            <SecondaryLinkButton location="reviews_page" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
        </div>
      </section>
    </>
  );
}
