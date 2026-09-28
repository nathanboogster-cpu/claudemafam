import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, offer, business } from "@/lib/site-data";
import { buildStats } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { ProofStrip } from "@/components/ProofStrip";
import { PricingCard } from "@/components/PricingCard";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ComparisonTable } from "@/components/ComparisonTable";

// SEARCH INTENT
//   Primary query:    dog groomer marketing
//   Secondary:        marketing for dog groomers, dog grooming marketing,
//                     dog grooming business marketing, how to market a dog
//                     grooming business
//   Intent:           informational leading to commercial — an owner working
//                     out what marketing a grooming business even consists of.
//   Business purpose: topical hub. Explains the whole system, then routes to
//                     the five channel pages and the case studies.
//   Differentiation:  the homepage sells the offer; this page explains the
//                     subject. This is the page that links outward to
//                     everything else (see SEO-PLAN.md).
export const metadata: Metadata = pageMetadata({
  title: "Dog Groomer Marketing: Get More Customers From Google",
  titleTemplate: false,
  description:
    "How grooming businesses actually get customers: local search, Google Business Profile, service pages and reviews — and which is worth your time first.",
  path: PATHS.marketing,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Dog Groomer Marketing", href: PATHS.marketing },
];

const faqItems = [
  {
    question: "What is dog groomer marketing?",
    answer:
      "Dog groomer marketing is the work of getting a grooming business found and chosen by pet owners nearby. In practice it is mostly local search: a Google Business Profile that ranks in the map pack, a website with a page for each service and each area served, and a steady flow of recent reviews. Social media and paid ads sit on top of that, not in place of it.",
  },
  {
    question: "What is the fastest marketing win for a grooming business?",
    answer:
      "Almost always the Google Business Profile. It is free, it is already attached to your business, and the common gaps — no services listed, no service areas, a stale photo set, no recent reviews — take days rather than months to fix. Profile changes also tend to show up in the map pack faster than website changes show up in organic search.",
  },
  {
    question: "Do dog groomers need social media to get clients?",
    answer:
      "Social media is good at keeping existing clients attached to you and showing off your work. It is poor at reaching the person who decided this morning that their dog needs grooming, because that person opens Google Maps, not Instagram. If you only have time for one, do the search side first.",
  },
  {
    question: "How much should a dog groomer spend on marketing?",
    answer:
      "There is no universal figure, but the useful test is cost per booked appointment rather than a percentage of revenue. A channel that produces a steady flow of new clients at a cost you would happily pay again is worth keeping; one you cannot measure is worth fixing or stopping. Tongfluence is $297 a month, cancel anytime, which is deliberately a number you can judge against a handful of extra appointments.",
  },
  {
    question: "Is marketing different for mobile groomers?",
    answer:
      "Yes, structurally. A mobile groomer has no storefront to anchor a map listing to, so the profile is set up as a service-area business with no published street address, and the website has to carry the geography with a page per town served. A salon does the opposite: one clear address, and pages built around the neighbourhoods that drive to it.",
  },
];

export default function DogGroomerMarketingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd
        data={serviceSchema({
          name: "Dog groomer marketing",
          serviceType: "Marketing for dog grooming businesses",
          description:
            "Tongfluence runs the local search side of a dog grooming business: SEO website, Google Business Profile optimization, review generation and ongoing optimization, for $297 per month.",
          path: PATHS.marketing,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Dog groomer marketing"
        title="Dog groomer marketing, explained by people who only work with groomers."
        intro={
          <>
            Grooming is a local business with a repeat customer, which makes its marketing unusually
            predictable: almost all of the new-client demand arrives through one channel, and most grooming
            businesses have never set that channel up properly. This page explains what the channel is, which
            parts matter in what order, and what we do about each of them.
          </>
        }
        location="marketing_hero"
        secondary={{ href: PATHS.caseStudies, label: "See the builds" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock>
          <p>
            For a dog grooming business, marketing is mostly <strong>local search</strong>. A pet owner
            searches <em>dog groomer near me</em> or <em>dog grooming [town]</em>, Google shows a map with
            three businesses and a list of websites underneath, and the business that gets chosen is the one
            that is both <em>relevant</em> (the profile and website say it does that service, in that place)
            and <em>trusted</em> (recent reviews, a real website, photos of real work). The four things that
            move it are your Google Business Profile, your website&rsquo;s structure, your reviews, and
            keeping all three current.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="how-groomers-get-customers">
        <SectionHeading
          eyebrow="The channel"
          id="how-groomers-get-customers"
          title="How grooming businesses actually get customers"
        />
        <div className="tf-prose mt-6">
          <p>
            Ask twenty groomers where their clients come from and you will hear the same three answers:
            word of mouth, walk-past or van signage, and &ldquo;they found us on Google.&rdquo; The first two
            are real and valuable, and neither of them scales on demand. You cannot decide to receive more
            referrals next Tuesday.
          </p>
          <p>
            The third one you can influence, because it is a system with known inputs. Someone decides their
            dog needs grooming. They search. Google assembles a local result — a map with three listings, then
            organic results below. They look at a couple of profiles, glance at the reviews and photos, maybe
            open a website, and they call one. Every step in that sequence is something you can be better or
            worse at.
          </p>
          <p>
            That is the whole opportunity: not &ldquo;more visibility,&rdquo; but being the obvious choice at
            the four or five specific moments where the decision actually gets made.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-tf-border bg-white p-6">
          <h3 className="font-tf-display text-base font-bold text-tf-ink">The path, step by step</h3>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-tf-ink-soft">
            {[
              ["Search", "“dog groomer near me”, “mobile dog grooming [town]”, “puppy first groom [town]”."],
              ["Map pack", "Three local businesses. Ranked on relevance, distance and prominence — which is where your profile's categories, services and reviews do their work."],
              ["Scan", "Star rating, review count, how recent the reviews are, photos, hours, whether it says it does the thing they searched for."],
              ["Website", "Opened to check one or two things: do you groom their breed or size, do you come to them or do they come to you, and how much."],
              ["Call or book", "Only if the answer was easy to find and the phone number is one tap away."],
            ].map(([step, detail]) => (
              <li key={step} className="flex gap-3">
                <span className="mt-0.5 font-tf-mono text-xs font-semibold text-tf-brown">{step}</span>
                <span className="flex-1 border-l border-tf-border pl-3">{detail}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-tf-ink-soft">
            The detail of that last stretch — search through to a booked appointment — is covered on{" "}
            <Link href={PATHS.leadGeneration} className="font-medium text-tf-brown-dark underline underline-offset-4">
              getting more grooming leads
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="four-parts">
        <SectionHeading
          eyebrow="The four parts"
          id="four-parts"
          title="What to fix, in what order"
          intro="These are ordered by how quickly they tend to move, not by how much work they are. Each links to a fuller explanation."
        />

        <div className="mt-8 space-y-6">
          {[
            {
              n: "01",
              title: "Google Business Profile",
              href: PATHS.gbp,
              label: "Google Business Profile for dog groomers",
              body: "The single highest-leverage asset most groomers already own and have never finished. Primary category, full service list, service areas if you are mobile, a current photo set, hours that are actually right. This is where the map pack ranking comes from, and it responds faster than anything else on this list.",
            },
            {
              n: "02",
              title: "Reviews",
              href: PATHS.reviews,
              label: "review management for groomers",
              body: "Recency matters as much as volume. A profile with forty reviews and nothing in the last year reads as a business that may have closed. Grooming has a built-in advantage here — you see clients regularly, in person, at a moment when they are pleased — and almost nobody exploits it systematically.",
            },
            {
              n: "03",
              title: "Your website's structure",
              href: PATHS.websiteDesign,
              label: "dog grooming website design",
              body: "Not how it looks: what pages it has. A single “Services” page cannot rank for a deshedding search and a puppy-first-groom search and a cat grooming search, because it is not really about any of them. One page per service, one per area you serve.",
            },
            {
              n: "04",
              title: "Ongoing search work",
              href: PATHS.seo,
              label: "dog groomer SEO",
              body: "After launch, Search Console starts telling you which searches you appear for. Most of the useful work for the next year is in that data: pages that get impressions but no clicks, queries you nearly rank for, services people search that you offer but never wrote a page about.",
            },
          ].map((item) => (
            <div key={item.n} className="grid gap-3 rounded-2xl border border-tf-border bg-white p-6 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-5">
              <p className="font-tf-mono text-sm font-semibold text-tf-brown">{item.n}</p>
              <div>
                <h3 className="font-tf-display text-lg font-bold text-tf-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tf-ink-soft">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-2.5 inline-block text-sm font-semibold text-tf-brown-dark underline underline-offset-4 hover:text-tf-brown-darker"
                >
                  More on {item.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="channels">
        <SectionHeading
          eyebrow="Choosing"
          id="channels"
          title="Search, social and paid ads do different jobs"
          intro="This comparison is about fit, not about talking you out of anything. Plenty of good grooming businesses run all three."
        />
        <div className="mt-7">
          <ComparisonTable
            caption="How search, social media and paid advertising compare for a dog grooming business"
            rowHeader="Channel"
            columns={["Best at", "Weak at", "What it costs you"]}
            rows={[
              {
                label: "Local search (profile + website)",
                cells: [
                  "Reaching someone who has already decided they need a groomer and is choosing between local options.",
                  "Speed. It takes weeks to months before it is doing real work.",
                  "Setup effort, then maintenance. The asset keeps working after you stop paying attention to it.",
                ],
              },
              {
                label: "Social media",
                cells: [
                  "Keeping current clients attached, showing before-and-afters, filling a last-minute cancellation.",
                  "Reaching strangers at the moment they are looking. They are not on Instagram searching for a groomer.",
                  "Ongoing time, every week, forever. Stop posting and reach drops quickly.",
                ],
              },
              {
                label: "Paid ads",
                cells: [
                  "Appointments this week. You can turn demand on deliberately.",
                  "Building anything. The day you stop paying, it stops completely.",
                  "A per-click or per-lead cost that never goes away and usually rises.",
                ],
              },
            ]}
          />
        </div>
        <div className="tf-prose mt-6">
          <p>
            Tongfluence only does the first row. Not because ads are bad — a lot of grooming businesses should
            run them — but because doing one thing for one industry is what keeps this at {offer.priceLine}{" "}
            instead of an agency retainer. If you want someone to run ads as well, run them alongside; the
            search work makes the ads convert better anyway, because the same clicked-through website has to
            do the convincing.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="mistakes">
        <SectionHeading
          eyebrow="Common mistakes"
          id="mistakes"
          title="What we see on almost every grooming business we look at"
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "A “Services” page instead of service pages",
              b: "Everything the business does, listed once, on one URL. It competes with itself for every search and wins none of them.",
            },
            {
              t: "A mobile business with a street address published",
              b: "Either it is the groomer's home, which they did not intend to publish, or it is an address customers cannot visit. Both cause problems.",
            },
            {
              t: "No service areas anywhere",
              b: "The van covers nine towns. The website mentions one. Eight towns' worth of searches have nothing to match against.",
            },
            {
              t: "Reviews that stop eighteen months ago",
              b: "Usually not a quality problem. Nobody ever built a habit of asking, so nobody asks.",
            },
            {
              t: "A phone number that isn't a link on mobile",
              b: "Most of your visitors are on a phone. If calling takes a copy and a paste, some share of them simply don't.",
            },
            {
              t: "Prices hidden to “get them to call”",
              b: "It mostly gets them to call a competitor who published a range. Grooming prices vary by size and coat — say that, and give the range.",
            },
          ].map((m) => (
            <div key={m.t} className="rounded-2xl border border-tf-border bg-white p-5">
              <h3 className="text-sm font-semibold text-tf-ink">{m.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{m.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section className="py-12">
        <ProofStrip />
      </Section>

      <Section width="narrow" className="py-12" labelledBy="our-approach">
        <SectionHeading
          eyebrow="Our approach"
          id="our-approach"
          title="What Tongfluence does about all of this"
          intro={`${business.name} runs the four parts above as one monthly service, for grooming businesses only.`}
        />
        <PricingCard location="marketing" className="mt-8" />
      </Section>

      <Section width="narrow" className="py-12">
        <FaqBlock
          items={faqItems}
          eyebrow="Dog groomer marketing FAQ"
          title="Common questions"
          headingId="marketing-faq"
        />
      </Section>

      <Section className="py-12">
        <RelatedLinks
          title="Go deeper on any part of it"
          items={[
            {
              href: PATHS.seo,
              label: "Dog groomer SEO",
              description: "How grooming businesses rank in local and organic search, and what we change first.",
            },
            {
              href: PATHS.gbp,
              label: "Google Business Profile for dog groomers",
              description: "Categories, services, service areas and photos — the fastest-moving part of the job.",
            },
            {
              href: PATHS.websiteDesign,
              label: "Dog grooming website design",
              description: "What pages a grooming site needs, and why one “Services” page is not enough.",
            },
            {
              href: PATHS.reviews,
              label: "Review management for groomers",
              description: "Getting a steady flow of recent Google reviews, without breaking Google's rules.",
            },
            {
              href: PATHS.leadGeneration,
              label: "Dog grooming lead generation",
              description: "Turning searches into calls, and calls into appointments you actually keep.",
            },
            {
              href: PATHS.caseStudies,
              label: `${buildStats.siteCount} grooming builds, broken down`,
              description: "What each business had, what was wrong with it, and exactly what we built.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand location="marketing_footer" />
      </Section>
    </>
  );
}
