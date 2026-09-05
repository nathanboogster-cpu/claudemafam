import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReserveButton } from "@/components/CTAButton";
import { StarIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, reviews, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Reviews",
  description: "Real reviews from Bow Wags dog daycare, boarding, and grooming customers in Marietta, GA.",
  path: PATHS.reviews,
});

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

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <Eyebrow>Reviews</Eyebrow>
        <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">What Dog Owners Say</h1>
        <p className="mt-4 text-lg text-bw-ink-soft">{business.reviewsSummary}</p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {reviews.map((r) => (
            <blockquote key={r.text} className="rounded-2xl border border-bw-border bg-white p-6">
              <div className="flex text-bw-orange" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-3 text-bw-ink-soft">&ldquo;{r.text}&rdquo;</p>
              <footer className="mt-3 text-xs font-semibold text-bw-ink-soft">{r.source}</footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={business.yelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-bw-ink px-6 py-3 text-base font-semibold text-bw-ink transition-colors hover:bg-bw-ink hover:text-white"
          >
            Read More on Yelp
          </a>
          <ReserveButton location="reviews_page" variant="primary" />
        </div>
      </section>
    </>
  );
}
