import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { StarIcon, ShieldCheckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, differentiators, googleReviews, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Reviews",
  description: `Pet Spa Luxe is rated ${business.yelpRating} stars on Yelp. Read verified customer reviews of our mobile dog grooming in El Sobrante, CA.`,
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

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <Eyebrow>Reviews</Eyebrow>
        <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
          What Pet Owners Say
        </h1>

        {/* Trust seal card */}
        <div className="mx-auto mt-10 max-w-md rounded-3xl border-2 border-psl-brass/30 bg-white p-8 shadow-lg">
          <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full border border-psl-border">
            <Image src={business.logoMark} alt="" fill className="object-cover" sizes="64px" />
          </div>
          <p className="mt-4 font-psl-display text-5xl font-bold text-psl-ink">{business.yelpRating}</p>
          <div className="mt-2 flex justify-center text-psl-brass" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-6 w-6" />
            ))}
          </div>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-psl-ink-soft">
            Out of 5 — Verified on Yelp
          </p>
          <a
            href={business.yelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-psl-brass-dark px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-psl-brass-darker"
          >
            Read Verified Reviews on Yelp
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-sm text-psl-ink-soft">
          We link directly to Pet Spa Luxe&apos;s real Yelp listing so you can
          read those reviews yourself. Below are real 5-star reviews from
          Pet Spa Luxe&apos;s Google Business Profile, quoted exactly as
          written.
        </p>

        {/* Real Google reviews */}
        <div className="mt-14 border-t border-psl-border pt-10 text-left">
          <h2 className="text-center font-psl-display text-2xl font-bold text-psl-ink">
            Real Reviews from Google
          </h2>
          <div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
            {googleReviews.map((r) => (
              <div key={r.author} className="rounded-2xl border border-psl-border bg-white p-5 shadow-sm">
                <div className="flex text-psl-brass" aria-hidden="true">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-psl-ink-soft">&ldquo;{r.text}&rdquo;</p>
                <p className="mt-3 text-sm font-semibold text-psl-ink">{r.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why pet owners trust us */}
        <div className="mt-14 border-t border-psl-border pt-10 text-left">
          <h2 className="text-center font-psl-display text-2xl font-bold text-psl-ink">
            Why Pet Owners Trust Pet Spa Luxe
          </h2>
          <ul className="mx-auto mt-6 max-w-xl space-y-4">
            {differentiators.map((d) => (
              <li key={d.title} className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-psl-brass/15 text-psl-brass-dark">
                  <ShieldCheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-psl-ink">{d.title}</p>
                  <p className="text-sm text-psl-ink-soft">{d.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 border-t border-psl-border pt-10 text-center">
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
