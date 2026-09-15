import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath, caseStudyPath } from "@/lib/site-data";
import { buildStats } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Checklist } from "@/components/Checklist";
import { ComparisonTable } from "@/components/ComparisonTable";

// SEARCH INTENT
//   Primary query:    dog groomer SEO
//   Secondary:        SEO for dog groomers, dog grooming SEO, SEO for dog
//                     grooming business, local SEO for pet groomers
//   Intent:           commercial investigation, with a strong informational
//                     component — the searcher wants to know what it involves
//                     before deciding whether to do it or buy it.
//   Business purpose: demonstrate that we understand grooming search
//                     specifically, then convert.
//   Differentiation:  /dog-groomer-marketing covers all channels; this page is
//                     search only, in depth. The DIY step-by-step version is
//                     /resources/how-to-rank-dog-grooming-business-on-google.
export const metadata: Metadata = pageMetadata({
  title: "Dog Groomer SEO: Rank Your Grooming Business on Google",
  titleTemplate: false,
  description:
    "How SEO works for a grooming business: the map pack versus organic results, service and area pages, and what Search Console tells you to fix next.",
  path: PATHS.seo,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Dog Groomer SEO", href: PATHS.seo },
];

const faqItems = [
  {
    question: "What is dog groomer SEO?",
    answer:
      "Dog groomer SEO is the work of making a grooming business the result Google shows when someone nearby searches for grooming. It has two halves that are ranked differently: the map pack, which is driven mostly by your Google Business Profile, and the organic results underneath it, which are driven by your website. Doing one without the other leaves most of the demand on the table.",
  },
  {
    question: "How long does SEO take for a dog grooming business?",
    answer:
      "Google Business Profile changes can show up within weeks. Website changes are slower: expect around 28 days after launch before Search Console holds enough data to read, and a few months before you can fairly judge direction. Grooming is a local, relatively low-competition niche in most towns, which helps — but it is still not a 30-day channel.",
  },
  {
    question: "Do dog groomers need a blog?",
    answer:
      "Not a weekly one. What helps is a small number of genuinely useful pages that answer questions your clients actually ask — what to expect at a first groom, how often a particular coat needs doing, why matting changes the price. What does not help is publishing generic pet-care filler on a schedule. If an article would not be worth sending to a client, it will not rank either.",
  },
  {
    question: "What keywords should a dog groomer target?",
    answer:
      "In practice, three groups: service plus place (dog grooming Marietta, mobile dog grooming Compton), specific services people search by name (deshedding, dematting, puppy first groom, cat grooming, nail trim), and near-me searches, which Google resolves to your location rather than to a literal phrase. You do not need volume data to start — you need a page for each service you offer and each town you take clients from.",
  },
  {
    question: "Does SEO work for mobile dog grooming?",
    answer:
      "Yes, and the structure differs. A mobile business is set up in Google as a service-area business with no published address, so the map pack behaves differently and the website carries more of the geographic work. In our mobile builds that means a page per town served, each one saying honestly what the van does in that town.",
  },
  {
    question: "Can I do dog groomer SEO myself?",
    answer:
      "Most of it, yes — it is work, not a secret. Our step-by-step guide to ranking a grooming business on Google walks through the whole thing in the order we would do it. People hire us because doing it takes weeks the first time and it needs maintaining after that, not because it is impossible.",
  },
];

export default function DogGroomerSeoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd
        data={serviceSchema({
          name: "Dog groomer SEO",
          serviceType: "Search engine optimization for dog grooming businesses",
          description:
            "Local and organic search optimization for dog grooming businesses: Google Business Profile, service and service-area pages, technical SEO and ongoing Search Console-driven improvement.",
          path: PATHS.seo,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Dog groomer SEO"
        title="SEO for dog groomers, without the vague parts."
        intro={
          <>
            Grooming search is unusually tractable. The queries are local, the intent is obvious, and the
            businesses you are competing with have mostly done nothing. This page is what the work consists
            of — the two ranking systems you are dealing with, the pages you need, and how the ongoing part
            is actually decided.
          </>
        }
        location="seo_hero"
        secondary={{
          href: resourcePath("how-to-rank-dog-grooming-business-on-google"),
          label: "Prefer to do it yourself?",
        }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock>
          <p>
            A grooming business has to rank in <strong>two different places at once</strong>. The map pack —
            the three businesses shown above the normal results — is ranked on relevance, distance and
            prominence, and is driven mostly by your Google Business Profile and your reviews. The organic
            results below it are ranked on the usual web signals and are driven by your website: whether you
            have a page that genuinely matches the search, whether Google can crawl and index it, and whether
            it is better than the alternatives. Most grooming SEO advice only covers one half.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="two-systems">
        <SectionHeading eyebrow="The two systems" id="two-systems" title="Map pack and organic are not the same game" />
        <div className="mt-7">
          <ComparisonTable
            caption="How the Google map pack and organic search results differ for a grooming business"
            rowHeader="Compared on"
            columns={["Map pack (local results)", "Organic results"]}
            rows={[
              {
                label: "What it ranks",
                cells: ["Your Google Business Profile", "Pages on your website"],
              },
              {
                label: "Main inputs",
                cells: [
                  "Category, services, service areas, reviews, photos, proximity to the searcher, name and address consistency.",
                  "Page relevance to the query, site structure and internal links, crawlability, page speed, and how useful the page is compared with the alternatives.",
                ],
              },
              {
                label: "How fast it moves",
                cells: ["Days to weeks after a change.", "Weeks to months."],
              },
              {
                label: "Where distance matters",
                cells: [
                  "Heavily. A salon rarely ranks in the map pack for a town twenty minutes away.",
                  "Much less. A good page about grooming in a town can rank there even if you are not the closest business.",
                ],
              },
              {
                label: "What this means for you",
                cells: [
                  "Fix the profile first — it is faster and it is free.",
                  "Build the pages that let you appear in places the map pack will never show you.",
                ],
              },
            ]}
          />
        </div>
        <div className="tf-prose mt-6">
          <p>
            This split is the single most useful thing to understand about grooming SEO, and it explains a
            frustration we hear constantly: <em>&ldquo;we rank fine in our own town and nowhere else.&rdquo;</em>{" "}
            That is the map pack doing exactly what it does. The way into the surrounding towns is the second
            column — real pages about the work you do there. It is also why a mobile groomer covering fourteen
            towns needs a different site shape than a salon serving one.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="page-structure">
        <SectionHeading
          eyebrow="Site structure"
          id="page-structure"
          title="One search intent, one page"
          intro="This is the rule that does most of the work, and the one most grooming websites break."
        />
        <div className="tf-prose mt-6">
          <p>
            A single page cannot be the best answer to <em>dog deshedding near me</em>, <em>puppy&rsquo;s first
            groom</em>, <em>cat grooming</em> and <em>mobile dog grooming in the next town over</em> at the
            same time. Not because Google forbids it, but because a page that tries to cover four topics is
            weaker on each of them than four pages would be — less specific, less complete, harder to link to,
            and impossible to write a matching title for.
          </p>
          <p>
            So a grooming site gets a page per service and a page per area. Across{" "}
            {buildStats.siteCount} grooming builds that has come out at{" "}
            <strong>{buildStats.totalServicePages} service pages</strong> and{" "}
            <strong>{buildStats.totalAreaPages} service-area pages</strong>, which is the bulk of every one of
            those sites. The counts, build by build, are in{" "}
            <Link
              href={resourcePath("dog-grooming-website-examples")}
              className="font-medium text-tf-green-dark underline underline-offset-4"
            >
              our breakdown of the grooming websites we have built
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-tf-border bg-white p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">A service page earns its place when</h3>
            <div className="mt-4">
              <Checklist
                items={[
                  { title: "Someone searches for it by name", body: "Deshedding, dematting, nail trim, puppy first groom, cat grooming, hand stripping." },
                  { title: "You genuinely offer it", body: "Not aspirationally. A page for a service you turn away is a bad first impression." },
                  { title: "There is something real to say", body: "What it involves, who it suits, roughly what it costs, how long it takes." },
                ]}
              />
            </div>
          </div>
          <div className="rounded-2xl border border-tf-border bg-white p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">An area page earns its place when</h3>
            <div className="mt-4">
              <Checklist
                items={[
                  { title: "You really take clients there", body: "A town you'd genuinely drive to, or that genuinely drives to you." },
                  { title: "You can say something specific about it", body: "How far it is, which days the van is over that way, which neighbourhoods it covers." },
                  { title: "It isn't the same page with the name swapped", body: "Mass-produced location pages with one word changed are the clearest thing on this list to get wrong." },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="technical">
        <SectionHeading
          eyebrow="Technical"
          id="technical"
          title="The technical part is short, and it is not optional"
          intro="None of this wins you a ranking on its own. All of it can stop you getting one."
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "Crawlable",
              b: "Every page reachable by a normal HTML link from somewhere else on the site. Not through a search box, not through a filter that only works once JavaScript runs.",
            },
            {
              t: "Indexable",
              b: "200 status, no accidental noindex, not blocked in robots.txt, and a canonical tag pointing at itself rather than at the homepage.",
            },
            {
              t: "In the sitemap",
              b: "An XML sitemap containing exactly the pages you want indexed — no redirects, no 404s, no duplicates — submitted in Search Console.",
            },
            {
              t: "Fast on a phone",
              b: "Most grooming traffic is mobile. Compressed, correctly sized images and very little JavaScript matter more than any clever optimisation.",
            },
            {
              t: "Consistent NAP",
              b: "Name, address and phone identical on your website, your Google Business Profile and any directory that lists you. Mismatches are a common, invisible drag.",
            },
            {
              t: "Unique titles and descriptions",
              b: "One per page, matching what the page is about. This is also the single fastest thing to change when a page gets impressions but no clicks.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-tf-border bg-white p-5">
              <h3 className="text-sm font-semibold text-tf-ink">{x.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{x.b}</p>
            </div>
          ))}
        </div>
        <div className="tf-prose mt-6">
          <p>
            One thing we do <strong>not</strong> do: add review or star-rating structured data to a grooming
            site to get stars in search results. Google&rsquo;s own guidelines restrict self-serving review
            markup, and the sites that do it are risking a manual action for a cosmetic gain. Real reviews live
            on your Google Business Profile, where they count.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="ongoing">
        <SectionHeading
          eyebrow="The ongoing part"
          id="ongoing"
          title="After launch, Search Console decides what we do next"
          intro="This is the part that is usually sold as a mystery. It is not one."
        />
        <div className="tf-prose mt-6">
          <p>
            Once the site is live and Search Console is connected, Google starts reporting which searches you
            appeared for, how often, where you ranked, and whether anyone clicked. That report is the work
            queue. We read it monthly and pick the change most likely to produce appointments:
          </p>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-tf-border bg-white">
          <ul className="divide-y divide-tf-border text-sm">
            {[
              ["Lots of impressions, almost no clicks", "The page ranks but the title and description aren't winning the click. Rewrite them to match the search."],
              ["Ranking around positions 4–20", "You are close. Strengthen the page itself: more specific content, better intent match, more internal links pointing at it."],
              ["A real query with no good page for it", "Build the page. This is where most new service and area pages come from — not from a content calendar."],
              ["Two pages competing for one query", "Cannibalization. Merge them, or differentiate them properly."],
              ["Barely any data at all", "Do nothing dramatic. Low-volume local sites take longer, and over-reacting to noise is how sites get worse."],
            ].map(([signal, action]) => (
              <li key={signal} className="grid gap-1 p-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-4">
                <p className="font-medium text-tf-ink">{signal}</p>
                <p className="leading-relaxed text-tf-ink-soft">{action}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="tf-prose mt-6">
          <p>
            That is the whole monthly method: one evidence-based improvement at a time. It is deliberately not
            &ldquo;four blog posts a month,&rdquo; because a blog post nobody searched for helps nobody.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="our-work">
        <SectionHeading
          eyebrow="Proof"
          id="our-work"
          title="What this looks like on a real grooming business"
          intro={
            <>
              Every build we have done is written up: what the business had, what was structurally wrong, and
              exactly what changed. The clearest example of the geography problem is{" "}
              <Link
                href={caseStudyPath("sittin-pretty-pet-grooming")}
                className="font-medium text-tf-green-dark underline underline-offset-4"
              >
                a salon in a small town whose customers all search for the bigger town next door
              </Link>
              .
            </>
          }
        />
        <PricingCard location="seo" className="mt-8" />
      </Section>

      <Section width="narrow" className="py-12">
        <FaqBlock items={faqItems} eyebrow="Dog groomer SEO FAQ" title="Common questions" headingId="seo-faq" />
      </Section>

      <Section className="py-12">
        <RelatedLinks
          items={[
            {
              href: resourcePath("how-to-rank-dog-grooming-business-on-google"),
              label: "How to rank a grooming business on Google",
              description: "The same work, written as a step-by-step guide you can follow yourself.",
            },
            {
              href: PATHS.gbp,
              label: "Google Business Profile for dog groomers",
              description: "The map-pack half of this page, in detail.",
            },
            {
              href: PATHS.websiteDesign,
              label: "Dog grooming website design",
              description: "The organic half: what pages a grooming site needs and how they connect.",
            },
            {
              href: PATHS.caseStudies,
              label: "Grooming builds, broken down",
              description: "Real sites, real structure, page by page.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="seo_footer"
          title="Want to know where you actually stand?"
          body="On a short call we'll look at your Google Business Profile and your current site and tell you which of the two is costing you more — and what we'd change first."
        />
      </Section>
    </>
  );
}
