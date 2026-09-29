import Link from "next/link";
import { clientBuilds, buildStats } from "@/lib/client-builds";
import { caseStudyPath } from "@/lib/site-data";

// The first-party dataset, rendered as a real table. A table is used here
// because the data genuinely is tabular — seven builds compared on the same
// five measures — which also makes it straightforward for a search or AI
// system to read the numbers without the surrounding prose.
export function BuildTable({ caption }: { caption?: string }) {
  return (
    <figure className="m-0">
      <div className="overflow-x-auto rounded-xl border border-tf-border bg-white">
        <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
          <caption className="sr-only">
            {caption ??
              `Page composition of ${buildStats.siteCount} dog grooming websites built by Tongfluence`}
          </caption>
          <thead>
            <tr className="border-b border-tf-border bg-tf-paper-deep">
              <th scope="col" className="px-4 py-3 font-semibold text-tf-ink">
                Grooming business
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-tf-ink">
                Type
              </th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-tf-ink">
                Service pages
              </th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-tf-ink">
                Area pages
              </th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-tf-ink">
                Articles
              </th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-tf-ink">
                Indexable pages
              </th>
            </tr>
          </thead>
          <tbody>
            {clientBuilds.map((b) => (
              <tr key={b.slug} className="border-b border-tf-border last:border-0">
                <th scope="row" className="px-4 py-3 font-medium text-tf-ink">
                  {b.hasCaseStudy ? (
                    <Link href={caseStudyPath(b.slug)} className="text-tf-brown-dark underline underline-offset-4 hover:text-tf-brown-darker">
                      {b.name}
                    </Link>
                  ) : (
                    b.name
                  )}
                  <span className="mt-0.5 block text-xs font-normal text-tf-ink-soft">{b.market}</span>
                </th>
                <td className="px-4 py-3 text-tf-ink-soft">{b.businessType}</td>
                <td className="px-4 py-3 text-right font-tf-display text-tf-ink-soft">
                  {b.pages.services || "—"}
                </td>
                <td className="px-4 py-3 text-right font-tf-display text-tf-ink-soft">{b.pages.areas || "—"}</td>
                <td className="px-4 py-3 text-right font-tf-display text-tf-ink-soft">{b.pages.articles}</td>
                <td className="px-4 py-3 text-right font-tf-display font-semibold text-tf-ink">{b.pages.total}</td>
              </tr>
            ))}
            <tr className="bg-tf-paper-deep">
              <th scope="row" className="px-4 py-3 font-semibold text-tf-ink">
                Total
              </th>
              <td className="px-4 py-3 text-tf-ink-soft">{buildStats.siteCount} builds</td>
              <td className="px-4 py-3 text-right font-tf-display font-semibold text-tf-ink">
                {buildStats.totalServicePages}
              </td>
              <td className="px-4 py-3 text-right font-tf-display font-semibold text-tf-ink">
                {buildStats.totalAreaPages}
              </td>
              <td className="px-4 py-3 text-right font-tf-display font-semibold text-tf-ink">
                {buildStats.totalArticles}
              </td>
              <td className="px-4 py-3 text-right font-tf-display font-semibold text-tf-ink">
                {buildStats.totalPages}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-tf-ink-soft">
        Source: Tongfluence&rsquo;s own builds. &ldquo;Indexable pages&rdquo; is the number of URLs each
        site&rsquo;s XML sitemap publishes — core pages plus one page per service, per service area and per
        article — counted per build rather than estimated. Pampered Puppies keeps its service pages on legacy
        URLs inherited from its previous site, so they are counted under core pages rather than service pages.
        Groomer On Call publishes one combined service-area page instead of a page per city.
      </figcaption>
    </figure>
  );
}
