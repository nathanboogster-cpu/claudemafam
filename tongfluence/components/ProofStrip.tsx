import Link from "next/link";
import { clientBuilds, buildStats } from "@/lib/client-builds";
import { PATHS, caseStudyPath } from "@/lib/site-data";

// Early proof. Real grooming businesses, real markets, real page counts —
// no logos we don't have permission to use, no invented client totals, and
// no performance numbers we haven't measured.
export function ProofStrip() {
  return (
    <div className="rounded-3xl border border-tf-border bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 className="font-tf-display text-lg font-bold text-tf-ink">
          {buildStats.siteCount} dog grooming businesses, {buildStats.totalPages} pages built
        </h2>
        <Link
          href={PATHS.caseStudies}
          className="text-sm font-semibold text-tf-green-dark underline underline-offset-4 hover:text-tf-green-darker"
        >
          See the builds
        </Link>
      </div>

      <ul className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
        {clientBuilds.map((b) => (
          <li key={b.slug} className="border-l-2 border-tf-green/40 pl-3">
            <p className="text-sm font-semibold text-tf-ink">
              {b.hasCaseStudy ? (
                <Link href={caseStudyPath(b.slug)} className="hover:text-tf-green-dark">
                  {b.name}
                </Link>
              ) : (
                b.name
              )}
            </p>
            <p className="text-xs text-tf-ink-soft">
              {b.market} · {b.businessType}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-6 border-t border-tf-border pt-4 text-xs leading-relaxed text-tf-ink-soft">
        These are the grooming businesses whose websites Tongfluence has built. Page counts come from each
        site&rsquo;s own sitemap. We don&rsquo;t publish traffic, ranking or call-volume figures here, because
        we haven&rsquo;t measured and exported them yet — and made-up numbers are the reason most agency
        &ldquo;results&rdquo; pages are worthless.
      </p>
    </div>
  );
}
