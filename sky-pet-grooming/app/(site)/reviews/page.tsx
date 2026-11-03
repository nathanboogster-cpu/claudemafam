import { GOOGLE_REVIEWS_URL, PATHS, SITE_URL } from "@/lib/site-data";
import { reviews } from "@/lib/reviews";
import { pageMetadata } from "@/lib/metadata";
import { BookButton, CallButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { BottomCta } from "@/components/BottomCta";

export const metadata = pageMetadata({
  title: "5-Star Google Reviews | Sky Pet Grooming",
  description:
    "What customers say about Sky Pet Grooming's mobile dog and cat grooming: every 5-star Google review, word for word.",
  path: PATHS.reviews,
});

function Stars() {
  return (
    <span className="flex gap-0.5 text-[#f5b301]" role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z" />
    </svg>
  );
}

export default function ReviewsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Reviews", href: PATHS.reviews }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Reviews", url: `${SITE_URL}${PATHS.reviews}` },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 pb-6 pt-10 text-center">
        <Eyebrow>Reviews</Eyebrow>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl">5-Star Google Reviews</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
          What pet owners say about Sky Pet Grooming, in their own words, straight from Google.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <BookButton location="reviews_top" />
          <CallButton location="reviews_top" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {reviews.map((r) => (
            <li key={r.fullName} className="mb-5 break-inside-avoid">
              <figure className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <Stars />
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-soft">
                    <GoogleMark />
                    Google review
                  </span>
                </div>
                <blockquote className="mt-4 whitespace-pre-line leading-relaxed text-ink">{r.text}</blockquote>
                <figcaption className="mt-4 font-display text-lg font-extrabold text-brand">{r.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 font-bold text-brand hover:underline"
          >
            <GoogleMark />
            Read all our reviews on Google
          </a>
        </p>
      </section>

      <BottomCta title="Join our happy pet owners" location="reviews_bottom" />
    </div>
  );
}
