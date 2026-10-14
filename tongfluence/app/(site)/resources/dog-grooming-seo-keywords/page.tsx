import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath } from "@/lib/site-data";
import { getResource } from "@/lib/resources-data";
import { buildStats } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Checklist } from "@/components/Checklist";

// SEARCH INTENT
//   Primary query:    dog groomer keywords
//   Secondary:        dog grooming keywords, pet grooming keywords, seo
//                     keywords for dog groomers, dog grooming search terms
//   Intent:           informational. A groomer (or whoever does their site)
//                     wants to know which searches to build pages for.
//   Business purpose: our own Search Console showed "dog groomer keywords"
//                     as the single most-shown query for this site before a
//                     page for it existed. This page answers it from the
//                     pages we actually build, with no invented volumes.
//   Differentiation:  /dog-groomer-seo is the service and the mechanics;
//                     the how-to-rank guide is the ordered checklist; this
//                     is the keyword map those pages are built from.
const resource = getResource("dog-grooming-seo-keywords")!;
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
  { name: "Dog grooming keywords", href: path },
];

type Group = {
  id: string;
  title: string;
  body: string[];
  keywords: string[];
  page: string;
};

// Every group is one we build pages for on client sites. The example
// keywords are the forms those searches take, with the town left as a
// placeholder. No volumes are given on purpose: they differ by town, and
// the only numbers worth acting on are the ones in your own Search Console.
const groups: Group[] = [
  {
    id: "near-me",
    title: "“Near me” and town searches",
    body: [
      "This is most of the demand. Someone needs a groomer, opens Google, and types what they need plus where they are. Google fills in the “where” from their phone for a near me search, or they type the town themselves.",
      "The near me version is won on the map, by your Google Business Profile. The town version is won by a page about that town, because the map rarely shows a business twenty minutes away.",
    ],
    keywords: [
      "dog groomer near me",
      "dog grooming near me",
      "pet groomer near me",
      "dog groomer in [town]",
      "dog grooming [town]",
      "[town] dog groomer",
      "best dog groomer [town]",
    ],
    page: "Your Google Business Profile for the near me searches. One page per town you really serve for the rest.",
  },
  {
    id: "services",
    title: "Service searches",
    body: [
      "People search for the thing they need by name. A nail trim, a deshed, a first groom for a puppy. A page that is only about that service matches the search. A page that lists twelve services in one paragraph does not.",
      `Across the ${buildStats.siteCount} grooming sites we have built there are ${buildStats.totalServicePages} service pages. These are the services they cover.`,
    ],
    keywords: [
      "dog grooming [town]",
      "dog bath and brush",
      "dog haircut near me",
      "dog deshedding treatment",
      "dog nail trim near me",
      "dog ear cleaning",
      "puppy first groom",
      "cat grooming near me",
      "flea and tick treatment dog groomer",
      "anal gland expression groomer",
    ],
    page: "One page per service you really offer. What it involves, who it suits, about what it costs, how long it takes.",
  },
  {
    id: "mobile",
    title: "Mobile grooming searches",
    body: [
      "Mobile is its own set of words. The person searching wants someone to come to them, and says so. If you are mobile, these are your most important keywords. If you are a salon, skip them.",
      "A mobile groomer has no storefront for the map to anchor to, so the town pages carry more of the load than they do for a salon.",
    ],
    keywords: [
      "mobile dog grooming near me",
      "mobile dog groomer [town]",
      "mobile pet grooming [town]",
      "dog groomer that comes to you",
      "in home dog grooming",
      "mobile cat grooming",
    ],
    page: "A mobile grooming service page, plus a page per town with what the van needs and which days you are over that way.",
  },
  {
    id: "breeds",
    title: "Breed and coat searches",
    body: [
      "Owners of certain breeds search by breed. Doodles and poodles most of all, because their coats need the most work. Double-coated dogs come next, for deshedding.",
      "Most groomers do not need a page per breed. Naming the breeds on the right service page, with a sentence about what their coat needs, is usually enough. Build a breed page only if that breed is a real part of your week.",
    ],
    keywords: [
      "poodle groomer near me",
      "goldendoodle grooming [town]",
      "doodle haircut",
      "husky deshedding",
      "double coat grooming",
      "small dog groomer near me",
      "large dog grooming near me",
    ],
    page: "The service page that covers it, with the breeds named. A breed page only if you specialise.",
  },
  {
    id: "price-timing",
    title: "Price and timing searches",
    body: [
      "These are people close to booking. They want a number or a day. If the answer is on your page, you get the call. If it is not, they call whoever did put it there.",
      "Prices belong on the service pages. Hours and days belong on your Google profile, and they have to be right.",
    ],
    keywords: [
      "how much does dog grooming cost",
      "dog grooming prices [town]",
      "cheap dog grooming near me",
      "same day dog grooming",
      "dog groomer open sunday",
      "walk in dog nail trim",
    ],
    page: "A starting price on every service page. Correct hours on your profile. A same-day or cancellation-list note if you really do it.",
  },
  {
    id: "problems",
    title: "Problem searches",
    body: [
      "Some owners search for the problem, not the service. A matted coat, a dog that panics at the salon, an old dog that cannot stand for long. These searches are fewer, but the person is often desperate and will drive.",
      "They do not need their own page. They need a plain section on the right service page that says you handle it, and how.",
    ],
    keywords: [
      "matted dog grooming near me",
      "groomer for anxious dogs",
      "senior dog grooming",
      "dog grooming for aggressive dogs",
      "groomer for dogs with skin problems",
    ],
    page: "A short section on the relevant service page. Say what you do, what it costs extra, and when you say no.",
  },
];

const skip = [
  {
    title: "“Dog grooming” on its own",
    body: "A one-word search with no place in it is national. The chains and the big directories own it. Your pages compete for it by accident, through the town and service pages, and that is enough.",
  },
  {
    title: "How-to searches",
    body: "“How to groom a dog at home” brings people who want to not pay you. A blog post on it can bring visitors. It almost never brings an appointment.",
  },
  {
    title: "Trade searches",
    body: "Grooming courses, grooming tables, grooming business for sale. These are groomers and would-be groomers, not pet owners.",
  },
  {
    title: "Your competitors’ names",
    body: "You can put a rival’s name on a page. It looks bad, it rarely ranks, and Google can treat it as the spam it is.",
  },
  {
    title: "Keywords in your business name",
    body: "“Pampered Paws, Best Dog Groomer in Dallas” as your profile name breaks Google’s rules and can get the profile suspended. Your name is your name.",
  },
];

const faqItems = [
  {
    question: "What are the best keywords for a dog grooming business?",
    answer:
      "A service word plus a place word. Dog grooming plus your town, mobile dog groomer plus your town, dog nail trim near me. The searches that bring appointments are local and specific. One-word searches like “dog grooming” are national and belong to the chains.",
  },
  {
    question: "How many times should a keyword appear on a page?",
    answer:
      "Once in the title, once in the main heading, and then as often as a normal person would say it while explaining the service. Pages that repeat a phrase every sentence read badly and rank worse. One clear page per search intent beats a stuffed one.",
  },
  {
    question: "Should a dog groomer use “pet groomer” keywords too?",
    answer:
      "If you groom cats or other pets, yes, and say so on the service pages. If you only groom dogs, say dog. Google understands both words are close, and it is better to be found by the people you can really help than by everyone.",
  },
  {
    question: "Where do I find the keywords people actually use to find my business?",
    answer:
      "Two free places. Search Console shows the exact searches your website appeared for, with clicks and position, about 28 days after you connect it. Your Google Business Profile’s performance report shows the searches that brought up your profile. Both beat any keyword tool, because they are your searches, not estimates.",
  },
];

export default function KeywordsPage() {
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
              {resource.kind} · {resource.readingTime}
            </p>
            <h1 className="mt-3 font-tf-display text-3xl font-bold leading-[1.12] text-tf-ink sm:text-4xl lg:text-5xl">
              {resource.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-tf-ink-soft">
              The searches we build grooming websites around, grouped by what the person wants and the page
              that answers it. No made-up search volumes. At the end, how to get your own numbers for free.
            </p>
          </div>
        </Section>

        <Section width="narrow" className="pb-10">
          <AnswerBlock>
            <p>
              The dog grooming keywords that bring appointments are <strong>a service word plus a place
              word</strong>: dog grooming in your town, mobile dog groomer in your town, dog nail trim near
              me. Six groups matter: <strong>near me and town searches</strong>,{" "}
              <strong>service searches</strong>, <strong>mobile searches</strong>,{" "}
              <strong>breed and coat searches</strong>, <strong>price and timing searches</strong> and{" "}
              <strong>problem searches</strong>. Each group needs a different page. One-word searches like
              “dog grooming” belong to the chains and are not worth chasing.
            </p>
          </AnswerBlock>
        </Section>

        <Section width="narrow" className="pb-10">
          <nav aria-labelledby="contents" className="rounded-xl border border-tf-border bg-tf-card p-5">
            <h2 id="contents" className="text-sm font-semibold uppercase tracking-wide text-tf-ink">
              The six groups
            </h2>
            <ol className="mt-3 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
              {groups.map((g, i) => (
                <li key={g.id}>
                  <a href={`#${g.id}`} className="text-tf-ink-soft underline underline-offset-4 hover:text-tf-brown-dark">
                    <span className="font-tf-display text-xs text-tf-brown">{i + 1}</span> {g.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#skip" className="text-tf-ink-soft underline underline-offset-4 hover:text-tf-brown-dark">
                  <span className="font-tf-display text-xs text-tf-brown">7</span> Keywords to skip
                </a>
              </li>
              <li>
                <a href="#your-numbers" className="text-tf-ink-soft underline underline-offset-4 hover:text-tf-brown-dark">
                  <span className="font-tf-display text-xs text-tf-brown">8</span> Your own numbers
                </a>
              </li>
            </ol>
          </nav>
        </Section>

        <Section width="narrow" className="pb-6">
          <div className="space-y-12">
            {groups.map((g, i) => (
              <section key={g.id} id={g.id} aria-labelledby={`${g.id}-heading`} className="scroll-mt-24">
                <p className="font-tf-display text-xl font-bold leading-none text-tf-brown">{i + 1}</p>
                <h2 id={`${g.id}-heading`} className="mt-2 font-tf-display text-2xl font-bold text-tf-ink">
                  {g.title}
                </h2>
                <div className="tf-prose mt-4">
                  {g.body.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.keywords.map((k) => (
                    <li
                      key={k}
                      className="rounded-full border border-tf-border bg-white px-3.5 py-1.5 text-sm text-tf-ink"
                    >
                      {k}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-xl border border-tf-border bg-tf-card p-5">
                  <p className="tf-caps text-xs text-tf-ink-soft">The page it needs</p>
                  <p className="mt-2 text-sm leading-relaxed text-tf-ink">{g.page}</p>
                </div>
              </section>
            ))}
          </div>
        </Section>

        <Section width="narrow" className="py-12" labelledBy="skip">
          <SectionHeading
            eyebrow="Not worth it"
            id="skip"
            title="Keywords to skip,"
            accent="and why."
            intro="Each of these looks tempting on a keyword tool. None of them bring a groomer appointments."
          />
          <div className="mt-6">
            <Checklist items={skip} tone="dont" />
          </div>
        </Section>

        <Section width="narrow" className="pb-12" labelledBy="your-numbers">
          <SectionHeading
            eyebrow="Your own data"
            id="your-numbers"
            title="Get your own numbers,"
            accent="for free."
            intro="This page has no search volumes on purpose. Volumes differ by town, and the tools that sell them are guessing. Two free reports show the real searches for your business."
          />
          <div className="tf-prose mt-6">
            <p>
              <strong>Search Console.</strong> Connect your website, wait about 28 days, then open
              Performance and look at Queries. That is every search your site appeared for, with how many
              people saw it, how many clicked, and your average position. Sort by impressions. The searches
              with many impressions and a position past 10 are the pages to improve first.
            </p>
            <p>
              <strong>Your Google Business Profile.</strong> Open the performance report on your profile.
              It shows the searches that brought up your profile on the map. If a service shows up there
              that you do not have a page for, that is your next page.
            </p>
            <p>
              The{" "}
              <Link href={resourcePath("how-to-rank-dog-grooming-business-on-google")} className="font-medium text-tf-brown-dark underline underline-offset-4">
                how-to-rank guide
              </Link>{" "}
              covers connecting both, step by step. The{" "}
              <Link href={PATHS.seo} className="font-medium text-tf-brown-dark underline underline-offset-4">
                SEO page
              </Link>{" "}
              explains how we read that data each month.
            </p>
          </div>
        </Section>

        <Section width="narrow" className="pb-12">
          <FaqBlock items={faqItems} eyebrow="FAQ" title="Keyword questions" headingId="keywords-faq" />
        </Section>
      </article>

      <Section className="py-12">
        <RelatedLinks
          title="Build the pages these keywords need"
          items={[
            { href: PATHS.seo, label: "SEO for dog and pet groomers" },
            { href: PATHS.websiteDesign, label: "Grooming website design" },
            { href: PATHS.gbp, label: "Your Google Business Profile" },
            { href: resourcePath("dog-grooming-website-examples"), label: "Grooming website examples" },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="keywords_footer"
          title="Want us to build the pages?"
          body="A page per service and per town, your profile set up for the near me searches, and Search Console read every month. That is the $297 a month. Book a short call and we will tell you which keywords your site is missing."
        />
      </Section>
    </>
  );
}
