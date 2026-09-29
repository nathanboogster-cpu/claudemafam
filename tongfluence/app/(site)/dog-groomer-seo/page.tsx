import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath, caseStudyPath } from "@/lib/site-data";
import { buildStats } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { pageDogPhoto } from "@/lib/dog-photos";
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
    "How SEO works for a grooming business: the map versus the search results, service and town pages, and what your search data tells you to fix next.",
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
      "Dog groomer SEO is the work of making your business the one Google shows when someone nearby searches for grooming. It has two halves, and Google ranks them differently. The map at the top is driven mostly by your Google Business Profile. The list of websites below it is driven by your website. Doing one without the other leaves most of the demand on the table.",
  },
  {
    question: "How long does SEO take for a dog grooming business?",
    answer:
      "Profile changes can show up within weeks. Website changes are slower. Expect about 28 days after launch before there is enough search data to read. It takes a few months to judge the trend fairly. Grooming has little competition in most towns, which helps. But it is still not a 30-day channel.",
  },
  {
    question: "Do dog groomers need a blog?",
    answer:
      "Not a weekly one. What helps is a few useful pages that answer questions your clients really ask. What to expect at a first groom. How often a certain coat needs doing. Why matting changes the price. What does not help is posting generic pet-care filler on a schedule. If an article is not worth sending to a client, it will not rank either.",
  },
  {
    question: "What keywords should a dog groomer target?",
    answer:
      "Three groups. First, a service plus a place, like dog grooming Marietta or mobile dog grooming Compton. Second, services people search for by name, like deshedding, dematting, puppy first groom, cat grooming or nail trim. Third, near-me searches, which Google matches to your location. You do not need search volume data to start. You need a page for each service you offer and each town you take clients from.",
  },
  {
    question: "Does SEO work for mobile dog grooming?",
    answer:
      "Yes, but the setup is different. A mobile business is set up in Google as a service-area business with no address. So the map works differently, and the website has to do more of the work of saying where you go. In our mobile builds that means a page for each town, each one saying honestly what the van does there.",
  },
  {
    question: "Can I do dog groomer SEO myself?",
    answer:
      "Most of it, yes. It is work, not a secret. Our step-by-step guide to ranking a grooming business on Google walks through the whole thing in the order we would do it. People hire us because it takes weeks the first time and needs upkeep after that. Not because it is impossible.",
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
            "Search optimization for dog grooming businesses: the Google Business Profile, service and town pages, the technical basics, and monthly improvements driven by real search data.",
          path: PATHS.seo,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Dog groomer SEO"
        title="SEO for dog groomers,"
        accent="without the vague parts."
        intro={
          <>
            Grooming search is easier than most. The searches are local. What people want is clear. And
            most of the businesses you compete with have done nothing. This page shows what the work is.
            The two ways Google ranks you, the pages you need, and how we decide what to do each month.
          </>
        }
        location="seo_hero"
        image={pageDogPhoto.seo}
        pills
        secondary={{
          href: resourcePath("how-to-rank-dog-grooming-business-on-google"),
          label: "Prefer to do it yourself?",
        }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock>
          <p>
            A grooming business has to rank in <strong>two places at once</strong>. The first is the map,
            the three businesses shown above the normal results. Google ranks the map on fit, distance and
            how well known you are. Your Google Business Profile and your reviews drive it. The second is the
            list of websites below the map. Your website drives that. Do you have a page that really matches
            the search? Can Google read it? Is it better than the other options? Most grooming SEO advice
            only covers one half.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="two-systems">
        <SectionHeading eyebrow="The two systems" id="two-systems" title="The map and the search results" accent="are not the same game" />
        <div className="mt-7">
          <ComparisonTable
            caption="How the Google map and the search results differ for a grooming business"
            rowHeader="Compared on"
            columns={["The map (local results)", "The search results"]}
            rows={[
              {
                label: "What it ranks",
                cells: ["Your Google Business Profile", "Pages on your website"],
              },
              {
                label: "Main inputs",
                cells: [
                  "Category, services, service areas, reviews, photos, how close you are to the searcher, and a name and address that match everywhere.",
                  "How well the page matches the search, how the site is laid out and linked, whether Google can read it, page speed, and how useful the page is next to the others.",
                ],
              },
              {
                label: "How fast it moves",
                cells: ["Days to weeks after a change.", "Weeks to months."],
              },
              {
                label: "Where distance matters",
                cells: [
                  "A lot. A salon rarely shows on the map for a town twenty minutes away.",
                  "Much less. A good page about grooming in a town can rank there even if you are not the closest business.",
                ],
              },
              {
                label: "What this means for you",
                cells: [
                  "Fix the profile first. It is faster and it is free.",
                  "Build the pages that let you show up in places the map never will.",
                ],
              },
            ]}
          />
        </div>
        <div className="tf-prose mt-6">
          <p>
            This split is the most useful thing to understand about grooming SEO. It explains something we
            hear all the time: <em>&ldquo;we rank fine in our own town and nowhere else.&rdquo;</em> That is
            the map doing exactly what it does. The way into the towns around you is the second column. Real
            pages about the work you do there. It is also why a mobile groomer covering fourteen towns needs
            a different site than a salon serving one.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="page-structure">
        <SectionHeading
          eyebrow="Site structure"
          id="page-structure"
          title="One search intent, one page"
          intro="This rule does most of the work. It is also the one most grooming websites break."
        />
        <div className="tf-prose mt-6">
          <p>
            One page cannot be the best answer to <em>dog deshedding near me</em>, <em>puppy&rsquo;s first
            groom</em>, <em>cat grooming</em> and <em>mobile dog grooming in the next town</em> all at once.
            Not because Google forbids it. A page that tries to cover four topics is weaker on each one than
            four pages would be. It is less clear, less complete, harder to link to, and impossible to give a
            matching title.
          </p>
          <p>
            So a grooming site gets one page per service and one page per town. Across{" "}
            {buildStats.siteCount} grooming sites, that adds up to{" "}
            <strong>{buildStats.totalServicePages} service pages</strong> and{" "}
            <strong>{buildStats.totalAreaPages} town pages</strong>. That is most of every one of those
            sites. The counts, site by site, are in{" "}
            <Link
              href={resourcePath("dog-grooming-website-examples")}
              className="font-medium text-tf-brown-dark underline underline-offset-4"
            >
              our breakdown of the grooming websites we built
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-tf-border bg-tf-card p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">A service page earns its place when</h3>
            <div className="mt-4">
              <Checklist
                items={[
                  { title: "People search for it by name", body: "Deshedding, dematting, nail trim, puppy first groom, cat grooming, hand stripping." },
                  { title: "You really offer it", body: "Not someday. A page for a service you turn away makes a bad first impression." },
                  { title: "There is something real to say", body: "What it involves, who it suits, about what it costs, and how long it takes." },
                ]}
              />
            </div>
          </div>
          <div className="rounded-xl border border-tf-border bg-tf-card p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">An area page earns its place when</h3>
            <div className="mt-4">
              <Checklist
                items={[
                  { title: "You really take clients there", body: "A town you would really drive to, or that really drives to you." },
                  { title: "You can say something real about it", body: "How far it is, which days the van is over that way, which areas it covers." },
                  { title: "It is not the same page with the name swapped", body: "Town pages made by changing one word are the easiest thing on this list to get wrong." },
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
          title="The technical part is short,"
          accent="and it is not optional"
          intro="None of this wins you a ranking on its own. All of it can stop you from getting one."
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "Crawlable",
              b: "Every page can be reached by a normal link from somewhere else on the site. Not through a search box. Not through a filter that only works after scripts load.",
            },
            {
              t: "Indexable",
              b: "The page loads, nothing tells Google to skip it, and nothing blocks it. Each page says it is the main copy of itself, not a copy of the homepage.",
            },
            {
              t: "In the sitemap",
              b: "A sitemap that lists exactly the pages you want in Google. No redirects, no dead pages, no copies. Sent to Google through Search Console.",
            },
            {
              t: "Fast on a phone",
              b: "Most grooming visitors are on a phone. Small, right-sized images and very little script matter more than any clever trick.",
            },
            {
              t: "Same name, address and phone everywhere",
              b: "Your name, address and phone must match on your website, your Google profile and any directory that lists you. Mismatches are a common, hidden drag.",
            },
            {
              t: "Unique titles and descriptions",
              b: "One per page, matching what the page is about. This is also the fastest thing to change when a page gets seen but not clicked.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-tf-border bg-tf-card p-5">
              <h3 className="text-sm font-semibold text-tf-ink">{x.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{x.b}</p>
            </div>
          ))}
        </div>
        <div className="tf-prose mt-6">
          <p>
            One thing we do <strong>not</strong> do: add hidden star-rating code to your site to get stars
            in search results. Google&rsquo;s rules restrict that, and sites that do it risk a penalty for a
            small cosmetic gain. Real reviews live on your Google profile, where they count.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="ongoing">
        <SectionHeading
          eyebrow="The ongoing part"
          id="ongoing"
          title="After launch, your search data"
          accent="decides what we do next"
          intro="This is the part that is usually sold as a mystery. It is not one."
        />
        <div className="tf-prose mt-6">
          <p>
            Once the site is live and connected to Google Search Console, Google starts reporting which
            searches you showed up for. How often, where you ranked, and whether anyone clicked. That report
            is our to-do list. We read it every month and pick the change most likely to bring appointments:
          </p>
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-tf-border bg-tf-card">
          <ul className="divide-y divide-tf-border text-sm">
            {[
              ["Seen a lot, almost never clicked", "The page ranks, but the title is not winning the click. Rewrite it to match the search."],
              ["Ranking around spots 4 to 20", "You are close. Make the page stronger. More specific content, a better match for the search, more links to it."],
              ["A real search with no good page for it", "Build the page. This is where most new service and town pages come from. Not from a content calendar."],
              ["Two pages fighting for one search", "They cancel each other out. Merge them, or make each one clearly different."],
              ["Almost no data at all", "Do nothing drastic. Small local sites take longer. Reacting to noise is how sites get worse."],
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
            That is the whole monthly method. One change at a time, based on real data. It is not &ldquo;four
            blog posts a month,&rdquo; because a blog post nobody searched for helps nobody.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="our-work">
        <SectionHeading
          eyebrow="Proof"
          id="our-work"
          title="What this looks like"
          accent="on a real grooming business"
          intro={
            <>
              Every site we built is written up. What the business had, what was wrong, and exactly what we
              changed. The clearest example of the town problem is{" "}
              <Link
                href={caseStudyPath("sittin-pretty-pet-grooming")}
                className="font-medium text-tf-brown-dark underline underline-offset-4"
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
        <FaqBlock items={faqItems} eyebrow="FAQ" title="Common questions" headingId="seo-faq" />
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
              label: "Your Google Business Profile",
              description: "The map half of this page, in detail.",
            },
            {
              href: PATHS.websiteDesign,
              label: "What the website needs",
              description: "The website half: what pages a grooming site needs and how they connect.",
            },
            {
              href: PATHS.caseStudies,
              label: "Grooming builds, broken down",
              description: "Real sites, page by page.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="seo_footer"
          title="Want to know where you really stand?"
          body="On a short call, we look at your Google profile and your current site. We tell you which one is costing you more, and what we would change first."
        />
      </Section>
    </>
  );
}
