import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { business, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Pet Spa Luxe is rated ${business.yelpRating} stars on Yelp. Read verified customer reviews of our mobile dog grooming in El Sobrante, CA.`,
  alternates: { canonical: PATHS.reviews },
};

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
        <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
          What Pet Owners Say
        </h1>

        <div className="mt-8 flex justify-center text-psl-brass" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8">
              <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
            </svg>
          ))}
        </div>
        <p className="mt-2 text-2xl font-bold text-psl-ink">{business.yelpRating} out of 5</p>

        <p className="mx-auto mt-6 max-w-xl text-psl-ink-soft">
          We link directly to Pet Spa Luxe&apos;s real Yelp listing so you can
          read verified customer reviews yourselves, rather than us
          hand-picking quotes.
        </p>

        <a
          href={business.yelpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-psl-brass px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-psl-brass-dark"
        >
          Read Reviews on Yelp
        </a>

        <div className="mt-14 border-t border-psl-border pt-10">
          <h2 className="font-psl-display text-2xl font-bold text-psl-ink">
            Ready to Experience It Yourself?
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <CallButton location="reviews_page" variant="primary" />
            <RequestButton location="reviews_page" variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
}
