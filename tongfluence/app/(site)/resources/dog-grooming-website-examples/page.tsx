import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath, caseStudyPath } from "@/lib/site-data";
import { getResource } from "@/lib/resources-data";
import { clientBuilds, buildStats, schemaTypesShipped } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { BuildTable } from "@/components/BuildTable";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Checklist } from "@/components/Checklist";

// SEARCH INTENT
//   Primary query:    dog grooming website examples
//   Secondary:        dog groomer website examples, best pet grooming
//                     websites, grooming website inspiration
//   Intent:           informational — someone planning a site and looking for
//                     what good looks like.
//   Business purpose: this is the site's original-data asset. A competitor can
//                     copy the prose; they cannot copy a count of seven
//                     grooming builds they did not do.
//   Differentiation:  /dog-groomer-website-design is the service. This is the
//                     evidence, and it is where the dataset lives.
const resource = getResource("dog-grooming-website-examples")!;
const path = resourcePath(resource.slug);

export const metadata: Metadata = pageMetadata({
  title: resource.metaTitle,
  titleTemplate: false,
  description: resource.metaDescription,
  path,
  type: "article",
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Resources", href: PATHS.resources },
  { name: "Dog Grooming Website Examples", href: path },
];

const faqItems = [
  {
    question: "How many pages should a dog grooming website have?",
    answer:
      `Across the ${buildStats.siteCount} grooming websites we have built, the total number of indexable pages ranges from 17 to 35, with a median of ${buildStats.medianPages}. The number itself is not the goal — it is a consequence of having one page per service you offer and one per town you serve. A business with four services and five towns needs fewer pages than one with eight services and fifteen towns.`,
  },
  {
    question: "What makes a good dog grooming website?",
    answer:
      "It can be found for the searches your customers actually make, and it gets them to the phone. In practice that means a page per service, a page per area, real photos of your own work, a published price or range, a tap-to-call number, and fast loading on a phone. Design matters, but it is the thing that makes a site people already found feel trustworthy — it is not what makes them find it.",
  },
  {
    question: "Should a grooming website have a blog?",
    answer:
      `Six of our ${buildStats.siteCount} builds publish articles, and the counts are small — between three and six each, ${buildStats.totalArticles} in total across every site. They exist to answer questions clients genuinely ask, not to hit a publishing schedule. A grooming site with forty generic pet-care posts and no service pages has its priorities exactly backwards.`,
  },
  {
    question: "Do mobile grooming websites need to be different?",
    answer:
      `Structurally, yes. ${buildStats.mobileCount} of our ${buildStats.siteCount} builds are mobile-only, and none of them publishes a street address anywhere — not on the site and not in the structured data. They lean much harder on service-area pages, because the map pack will mostly show a mobile business near its base rather than across its whole route.`,
  },
];

export default function WebsiteExamplesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd
        data={articleSchema({
          headline: resource.h1,
          description: resource.metaDescription,
          path,
          datePublished: resource.publishedAt,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <article>
        <Section className="pt-6 pb-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tf-green-dark">
              First-party data · {resource.readingTime}
            </p>
            <h1 className="mt-3 font-tf-display text-3xl font-extrabold leading-[1.12] text-tf-ink sm:text-4xl lg:text-5xl">
              {resource.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-tf-ink-soft">
              Most &ldquo;grooming website examples&rdquo; articles are a gallery of screenshots with
              comments about colour palettes. This one is a count of what is inside{" "}
              {buildStats.siteCount} grooming websites we built ourselves — because the part that decides
              whether a grooming site works is its structure, and structure is countable.
            </p>
          </div>
        </Section>

        {/* -------------------------------------------------------------- */}
        <Section width="narrow" className="pb-10">
          <AnswerBlock>
            <p>
              Across {buildStats.siteCount} dog grooming websites we have built, there are{" "}
              <strong>{buildStats.totalPages} indexable pages</strong> — of which{" "}
              <strong>{buildStats.totalServicePages} are service pages</strong> and{" "}
              <strong>{buildStats.totalAreaPages} are service-area pages</strong>. Those two page types make
              up {Math.round(((buildStats.totalServicePages + buildStats.totalAreaPages) / buildStats.totalPages) * 100)}
              % of everything built. The median site has {buildStats.medianPages} pages. Articles account for
              just {buildStats.totalArticles} pages in total — about{" "}
              {Math.round((buildStats.totalArticles / buildStats.totalPages) * 100)}% — which is the opposite
              of how most grooming websites are put together.
            </p>
          </AnswerBlock>
        </Section>

        {/* -------------------------------------------------------------- */}
        <Section width="narrow" className="py-10" labelledBy="method">
          <SectionHeading eyebrow="How to read this" id="method" title="Where these numbers come from" />
          <div className="mt-6 overflow-hidden rounded-2xl border border-tf-border bg-white">
            <dl className="divide-y divide-tf-border text-sm">
              {[
                ["Data source", `Tongfluence's own client builds — ${buildStats.siteCount} dog grooming websites, each a separate production application.`],
                ["Sample", `Every grooming website we have built, not a selected subset. ${buildStats.mobileCount} mobile-only, 3 salon-based, 1 grooming alongside daycare and boarding.`],
                ["Measure", "Indexable pages, defined as the URLs each build's own XML sitemap publishes. Counted per build, not estimated."],
                ["Period", "Builds completed to date, as of September 2026."],
                ["What this is not", "An industry benchmark. This is what we build, which is a statement about our method, not about grooming websites in general."],
                ["Limitations", "A small sample of our own work, so it cannot tell you what the average grooming website looks like — only what these seven contain and why."],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 p-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-4">
                  <dt className="font-semibold text-tf-ink">{k}</dt>
                  <dd className="leading-relaxed text-tf-ink-soft">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* -------------------------------------------------------------- */}
        <Section className="py-10" labelledBy="the-data">
          <SectionHeading
            eyebrow="The data"
            id="the-data"
            title={`${buildStats.siteCount} grooming websites, page by page`}
          />
          <div className="mt-8">
            <BuildTable caption={`Page composition of ${buildStats.siteCount} dog grooming websites built by Tongfluence`} />
          </div>
        </Section>

        {/* -------------------------------------------------------------- */}
        <Section width="narrow" className="py-10" labelledBy="findings">
          <SectionHeading eyebrow="What the numbers say" id="findings" title="Four things that hold across all of them" />
          <div className="mt-8 space-y-7">
            {[
              {
                n: "01",
                t: "The site is mostly service and area pages",
                b: `${buildStats.totalServicePages + buildStats.totalAreaPages} of ${buildStats.totalPages} pages. Core pages — home, about, contact, FAQ, gallery, reviews — are a small minority. This is the inversion most grooming websites need: the pages that match searches should outnumber the pages that describe the business.`,
              },
              {
                n: "02",
                t: "Mobile businesses carry more geography",
                b: `The heaviest area-page counts are on mobile builds: 15 cities for a van covering six Bay Area counties, 13 for one working across greater Los Angeles. A salon needs fewer, because more of its demand is within map-pack range. The exception proves it — our one build with no area pages at all is a mobile groomer whose specific service-area cities were never confirmed. Rather than template a dozen city pages off a guess, that site publishes a single service-areas page saying plainly that coverage depends on where you are, and to call and ask.`,
              },
              {
                n: "03",
                t: "Articles are a small minority, deliberately",
                b: `${buildStats.totalArticles} articles across ${buildStats.siteCount} sites — between three and six each. Every one answers a question grooming clients genuinely ask. None exists because a content calendar said so.`,
              },
              {
                n: "04",
                t: "Every build ships the same structured data, and none ships review markup",
                b: `All ${buildStats.siteCount} publish ${schemaTypesShipped.join(", ")} structured data. Not one publishes AggregateRating or Review markup, because Google restricts self-serving review markup and the upside is cosmetic. Real reviews are shown as visible page content, linking to the profile they came from.`,
              },
            ].map((f) => (
              <div key={f.n} className="grid gap-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-5">
                <p className="font-tf-mono text-sm font-semibold text-tf-clay">{f.n}</p>
                <div>
                  <h3 className="font-tf-display text-lg font-bold text-tf-ink">{f.t}</h3>
                  <p className="mt-2 text-base leading-relaxed text-tf-ink-soft">{f.b}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* -------------------------------------------------------------- */}
        <Section className="py-10" labelledBy="examples">
          <SectionHeading
            eyebrow="The examples"
            id="examples"
            title="Each build, and the problem it was shaped around"
            intro="A grooming website is only good relative to the business it belongs to. These are the problems each one had to solve."
          />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {clientBuilds.map((b) => (
              <li key={b.slug} className="rounded-2xl border border-tf-border bg-white p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-tf-display text-lg font-bold text-tf-ink">{b.name}</h3>
                  <p className="font-tf-mono text-xs text-tf-ink-soft">{b.pages.total} pages</p>
                </div>
                <p className="mt-1 text-xs text-tf-ink-soft">
                  {b.market} · {b.businessType}
                  {b.liveUrl ? (
                    <>
                      {" · "}
                      <a
                        href={b.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tf-green-dark underline underline-offset-4"
                      >
                        {b.liveUrl.replace("https://", "")}
                      </a>
                    </>
                  ) : null}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-tf-ink-soft">{b.problem}</p>
                {b.hasCaseStudy ? (
                  <Link
                    href={caseStudyPath(b.slug)}
                    className="mt-3 inline-block text-sm font-semibold text-tf-green-dark underline underline-offset-4 hover:text-tf-green-darker"
                  >
                    Read the full build
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </Section>

        {/* -------------------------------------------------------------- */}
        <Section width="narrow" className="py-10" labelledBy="borrow">
          <SectionHeading
            eyebrow="What to take from it"
            id="borrow"
            title="If you're planning your own grooming website"
            intro="You do not need us to do any of this. The structure is the useful part and it is free."
          />
          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-tf-border bg-white p-6">
              <h3 className="font-tf-display text-base font-bold text-tf-ink">Worth copying</h3>
              <div className="mt-4">
                <Checklist
                  items={[
                    { title: "A page per service, a page per town" },
                    { title: "A published price or range on every service page" },
                    { title: "Real photos of your own work, or an honest gap" },
                    { title: "Tap-to-call on every screen" },
                    { title: "A handful of articles answering real client questions" },
                  ]}
                />
              </div>
            </div>
            <div className="rounded-2xl border border-tf-border bg-white p-6">
              <h3 className="font-tf-display text-base font-bold text-tf-ink">Not worth copying</h3>
              <div className="mt-4">
                <Checklist
                  tone="dont"
                  items={[
                    { title: "Town pages made by swapping one word" },
                    { title: "Stock photos of dogs that aren't your clients" },
                    { title: "Star-rating markup to get stars in search results" },
                    { title: "A blog post every week about nothing in particular" },
                    { title: "Hiding prices to “get them to call”" },
                  ]}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section width="narrow" className="py-10">
          <FaqBlock items={faqItems} eyebrow="FAQ" title="Common questions" headingId="examples-faq" />
        </Section>
      </article>

      <Section className="py-12">
        <RelatedLinks
          items={[
            {
              href: PATHS.websiteDesign,
              label: "Dog grooming website design",
              description: "How we build the structure above, and what it costs.",
            },
            {
              href: PATHS.caseStudies,
              label: "The full case studies",
              description: "Three of these builds written up in detail, decision by decision.",
            },
            {
              href: resourcePath("how-to-rank-dog-grooming-business-on-google"),
              label: "How to rank a grooming business on Google",
              description: "The step-by-step guide to doing all of this yourself.",
            },
            {
              href: PATHS.seo,
              label: "Dog groomer SEO",
              description: "Why the structure looks like this, and what happens after launch.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="examples_footer"
          secondaryHref={PATHS.caseStudies}
          secondaryLabel="Read the case studies"
        />
      </Section>

      <Section width="narrow" className="pb-12">
        <p className="text-xs leading-relaxed text-tf-ink-soft">
          Published{" "}
          {new Date(`${resource.publishedAt}T00:00:00Z`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })}
          . Figures are Tongfluence&rsquo;s own build data and are updated when a new build ships.{" "}
          <Link href={PATHS.resources} className="underline underline-offset-4 hover:text-tf-green-dark">
            More resources
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
