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
      `Across the ${buildStats.siteCount} grooming websites we built, the number of pages runs from 17 to 35. The middle number is ${buildStats.medianPages}. The number itself is not the goal. It comes from having one page per service you offer and one per town you serve. A business with four services and five towns needs fewer pages than one with eight services and fifteen towns.`,
  },
  {
    question: "What makes a good dog grooming website?",
    answer:
      "It can be found for the searches your customers really make, and it gets them to the phone. That means a page per service, a page per town, real photos of your own work, a price or a range, a tap-to-call number, and fast loading on a phone. Design matters. But design makes a site people already found feel trusted. It is not what makes them find it.",
  },
  {
    question: "Should a grooming website have a blog?",
    answer:
      `Six of our ${buildStats.siteCount} sites have articles, and the counts are small. Between three and six each, ${buildStats.totalArticles} in total. They exist to answer questions clients really ask, not to hit a posting schedule. A grooming site with forty vague pet-care posts and no service pages has it exactly backwards.`,
  },
  {
    question: "Do mobile grooming websites need to be different?",
    answer:
      `Yes. ${buildStats.mobileCount} of our ${buildStats.siteCount} sites are for mobile groomers, and none of them shows a street address anywhere. They lean much harder on town pages. The map will mostly show a mobile business near its base, not across its whole route.`,
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
            <p className="tf-caps text-xs text-tf-brown-dark">
              First-party data · {resource.readingTime}
            </p>
            <h1 className="mt-3 font-tf-display text-3xl font-bold leading-[1.12] text-tf-ink sm:text-4xl lg:text-5xl">
              {resource.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-tf-ink-soft">
              Most &ldquo;grooming website examples&rdquo; articles are a gallery of screenshots with notes
              about colors. This one is a count of what is inside {buildStats.siteCount} grooming websites
              we built ourselves. The part that decides whether a grooming site works is its pages. And pages
              can be counted.
            </p>
          </div>
        </Section>

        {/* -------------------------------------------------------------- */}
        <Section width="narrow" className="pb-10">
          <AnswerBlock>
            <p>
              Across the {buildStats.siteCount} dog grooming websites we built, there are{" "}
              <strong>{buildStats.totalPages} pages</strong>. Of those,{" "}
              <strong>{buildStats.totalServicePages} are service pages</strong> and{" "}
              <strong>{buildStats.totalAreaPages} are town pages</strong>. Those two kinds make up{" "}
              {Math.round(((buildStats.totalServicePages + buildStats.totalAreaPages) / buildStats.totalPages) * 100)}
              % of everything built. The middle site has {buildStats.medianPages} pages. Articles are just{" "}
              {buildStats.totalArticles} pages in total, about{" "}
              {Math.round((buildStats.totalArticles / buildStats.totalPages) * 100)}%. That is the opposite
              of how most grooming websites are put together.
            </p>
          </AnswerBlock>
        </Section>

        {/* -------------------------------------------------------------- */}
        <Section width="narrow" className="py-10" labelledBy="method">
          <SectionHeading eyebrow="How to read this" id="method" title="Where these numbers come from" />
          <div className="mt-6 overflow-hidden rounded-xl border border-tf-border bg-tf-card">
            <dl className="divide-y divide-tf-border text-sm">
              {[
                ["Where the data comes from", `Our own client sites. ${buildStats.siteCount} dog grooming websites, each one a separate live site.`],
                ["Which sites", `Every grooming website we built, not a hand-picked few. ${buildStats.mobileCount} mobile groomers, 3 salons, 1 grooming with daycare and boarding.`],
                ["What we counted", "Pages, meaning the web addresses each site's own sitemap lists. Counted per site, not guessed."],
                ["When", "Sites finished so far, as of September 2026."],
                ["What this is not", "An industry average. This is what we build. It says something about our method, not about grooming websites in general."],
                ["Limits", "A small set of our own work. It cannot tell you what the average grooming website looks like. Only what these seven contain and why."],
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
            title={`${buildStats.siteCount} grooming websites,`}
            accent="page by page"
          />
          <div className="mt-8">
            <BuildTable caption={`Page composition of ${buildStats.siteCount} dog grooming websites built by Tongfluence`} />
          </div>
        </Section>

        {/* -------------------------------------------------------------- */}
        <Section width="narrow" className="py-10" labelledBy="findings">
          <SectionHeading eyebrow="What the numbers say" id="findings" title="Four things that are true" accent="of all of them" />
          <div className="mt-8 space-y-7">
            {[
              {
                n: "01",
                t: "The site is mostly service and town pages",
                b: `${buildStats.totalServicePages + buildStats.totalAreaPages} of ${buildStats.totalPages} pages. Core pages like home, about, contact, FAQ, gallery and reviews are a small share. This is the flip most grooming websites need. The pages that match searches should outnumber the pages that describe the business.`,
              },
              {
                n: "02",
                t: "Mobile businesses need more town pages",
                b: `The biggest town-page counts are on mobile sites. 15 cities for a van covering six Bay Area counties. 13 for one working across greater Los Angeles. A salon needs fewer, because more of its demand is close enough for the map. The one exception proves it. Our one site with no town pages is a mobile groomer whose towns were never confirmed. Instead of making a dozen city pages from a guess, that site has one service-areas page. It says plainly that coverage depends on where you are, and to call and ask.`,
              },
              {
                n: "03",
                t: "Articles are a small share, on purpose",
                b: `${buildStats.totalArticles} articles across ${buildStats.siteCount} sites. Between three and six each. Every one answers a question grooming clients really ask. None exists because a content calendar said so.`,
              },
              {
                n: "04",
                t: "Every site has the same hidden labels for Google, and none has fake star code",
                b: `All ${buildStats.siteCount} include ${schemaTypesShipped.join(", ")} labels, the hidden code that tells Google what a page is. Not one has star-rating code, because Google restricts it and the gain is only cosmetic. Real reviews are shown as words on the page, with a link to where they came from.`,
              },
            ].map((f) => (
              <div key={f.n} className="grid gap-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-5">
                <p className="font-tf-display text-xl font-bold leading-none text-tf-brown">{f.n}</p>
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
            title="Each site,"
            accent="and the problem it was built around"
            intro="A grooming website is only good for the business it belongs to. These are the problems each one had to solve."
          />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {clientBuilds.map((b) => (
              <li key={b.slug} className="rounded-xl border border-tf-border bg-tf-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-tf-display text-lg font-bold text-tf-ink">{b.name}</h3>
                  <p className="font-tf-display text-xs text-tf-ink-soft">{b.pages.total} pages</p>
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
                        className="text-tf-brown-dark underline underline-offset-4"
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
                    className="mt-3 inline-block text-sm font-semibold text-tf-brown-dark underline underline-offset-4 hover:text-tf-brown-darker"
                  >
                    Read the full story
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
            title="If you're planning"
            accent="your own grooming website"
            intro="You do not need us to do any of this. The page plan is the useful part, and it is free."
          />
          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-tf-border bg-tf-card p-6">
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
            <div className="rounded-xl border border-tf-border bg-tf-card p-6">
              <h3 className="font-tf-display text-base font-bold text-tf-ink">Not worth copying</h3>
              <div className="mt-4">
                <Checklist
                  tone="dont"
                  items={[
                    { title: "Town pages made by swapping one word" },
                    { title: "Stock photos of dogs that aren't your clients" },
                    { title: "Hidden star code to get stars in search results" },
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
              label: "What the website needs",
              description: "How we build the pages above, and what it costs.",
            },
            {
              href: PATHS.caseStudies,
              label: "The full case studies",
              description: "Three of these sites written up in detail, choice by choice.",
            },
            {
              href: resourcePath("how-to-rank-dog-grooming-business-on-google"),
              label: "How to rank a grooming business on Google",
              description: "The step-by-step guide to doing all of this yourself.",
            },
            {
              href: PATHS.seo,
              label: "How the SEO works",
              description: "Why the pages look like this, and what happens after launch.",
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
          . The numbers are our own site data and are updated when a new site goes live.{" "}
          <Link href={PATHS.resources} className="underline underline-offset-4 hover:text-tf-brown-dark">
            More resources
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
