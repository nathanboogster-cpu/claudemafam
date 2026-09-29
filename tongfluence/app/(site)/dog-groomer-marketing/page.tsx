import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, offer, business } from "@/lib/site-data";
import { buildStats } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { pageDogPhoto } from "@/lib/dog-photos";
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
    "How grooming businesses really get customers: local search, your Google profile, service pages and reviews. And which one to fix first.",
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
      "Dog groomer marketing is the work of getting found and chosen by pet owners near you. Most of it is local search. That means three things. A Google Business Profile that shows up on the map. A website with a page for each service and each town. And a steady flow of new reviews. Social media and ads sit on top of that. They do not replace it.",
  },
  {
    question: "What is the fastest marketing win for a grooming business?",
    answer:
      "Almost always your Google Business Profile. It is free and it is already yours. The common gaps take days to fix, not months. No services listed. No service areas. Old photos. No recent reviews. Profile changes also show up on the map faster than website changes show up in search.",
  },
  {
    question: "Do dog groomers need social media to get clients?",
    answer:
      "Social media is good for keeping current clients close and showing off your work. It is poor at reaching the person who decided this morning that their dog needs a groom. That person opens Google Maps, not Instagram. If you only have time for one, do the search side first.",
  },
  {
    question: "How much should a dog groomer spend on marketing?",
    answer:
      "There is no one right number. The useful test is what each booked appointment costs you, not a share of your revenue. If a channel brings a steady flow of new clients at a price you would gladly pay again, keep it. If you cannot measure it, fix it or stop it. Tongfluence is $297 a month, cancel any time. That is a number you can judge against a few extra appointments.",
  },
  {
    question: "Is marketing different for mobile groomers?",
    answer:
      "Yes. A mobile groomer has no shop to tie a map listing to. So the profile is set up as a service-area business with no street address. The website then has to do the work, with a page for each town you serve. A salon does the opposite. One clear address, and pages built around the areas that drive to it.",
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
            "Tongfluence runs the local search side of a dog grooming business: the website, the Google Business Profile, reviews, and monthly search work, for $297 a month.",
          path: PATHS.marketing,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Dog groomer marketing"
        title="Dog groomer marketing, explained by people"
        accent="who do nothing else."
        intro={
          <>
            Grooming is a local business with repeat clients. That makes its marketing simple to predict.
            Almost all new clients come from one place. And most grooming businesses have never set that
            place up properly. This page explains what it is, what to fix first, and what we do about each
            part.
          </>
        }
        location="marketing_hero"
        image={pageDogPhoto.marketing}
        pills
        secondary={{ href: PATHS.caseStudies, label: "See the builds" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock>
          <p>
            For a dog groomer, marketing is mostly <strong>local search</strong>. A pet owner searches{" "}
            <em>dog groomer near me</em>. Google shows a map with three businesses and a list of websites
            below it. The business that gets picked is the one that fits the search and looks trusted.
            Fitting the search means your profile and website say you do that service in that place.
            Looking trusted means recent reviews, a real website, and photos of real work. Four things move
            it: your Google profile, your website&rsquo;s pages, your reviews, and keeping all three
            current.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="how-groomers-get-customers">
        <SectionHeading
          eyebrow="The channel"
          id="how-groomers-get-customers"
          title="How grooming businesses"
          accent="really get customers"
        />
        <div className="tf-prose mt-6">
          <p>
            Ask twenty groomers where their clients come from. You will hear the same three answers. Word
            of mouth. People who walk past the shop or see the van. And &ldquo;they found us on
            Google.&rdquo; The first two are real and valuable. But you cannot turn them up when you need
            them. You cannot decide to get more referrals next Tuesday.
          </p>
          <p>
            The third one you can shape, because it works the same way every time. Someone decides their
            dog needs a groom. They search. Google shows a map with three listings, then a list of websites.
            They look at a couple of profiles. They glance at the reviews and photos. Maybe they open a
            website. Then they call one. You can be better or worse at every step.
          </p>
          <p>
            That is the whole chance. Not &ldquo;more visibility.&rdquo; Being the obvious choice at the
            four or five moments where the choice gets made.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-tf-border bg-tf-card p-6">
          <h3 className="font-tf-display text-base font-bold text-tf-ink">The path, step by step</h3>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-tf-ink-soft">
            {[
              ["Search", "“dog groomer near me”, “mobile dog grooming [town]”, “puppy first groom [town]”."],
              ["The map", "Three local businesses. Google ranks them on fit, distance and how well known they are. This is where your profile's categories, services and reviews do their work."],
              ["Scan", "Star rating, review count, how new the reviews are, photos, hours, and whether it says it does the thing they searched for."],
              ["Website", "Opened to check one or two things. Do you groom their breed or size? Do you come to them or do they come to you? How much does it cost?"],
              ["Call or book", "Only if the answer was easy to find and the phone number is one tap away."],
            ].map(([step, detail]) => (
              <li key={step} className="flex gap-3">
                <span className="tf-caps mt-1 w-20 shrink-0 text-[0.68rem] text-tf-brown">{step}</span>
                <span className="flex-1 border-l border-tf-border pl-3">{detail}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-tf-ink-soft">
            The last stretch, from search to a booked appointment, is covered on{" "}
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
          intro="These are in the order they tend to show results, not by how much work they take. Each one links to a fuller page."
        />

        <div className="mt-8 space-y-6">
          {[
            {
              n: "01",
              title: "Google Business Profile",
              href: PATHS.gbp,
              label: "the profile work",
              body: "The most useful thing most groomers already own and have never finished. The right main category. A full list of services. Service areas if you are mobile. Current photos. Hours that are right. This is where your spot on the map comes from. And it responds faster than anything else on this list.",
            },
            {
              n: "02",
              title: "Reviews",
              href: PATHS.reviews,
              label: "the review system",
              body: "New reviews matter as much as the total. A profile with forty reviews and none in the last year looks like a business that may have closed. Grooming has a built-in edge here. You see clients often, in person, at a moment when they are happy. Almost nobody uses that on purpose.",
            },
            {
              n: "03",
              title: "Your website's structure",
              href: PATHS.websiteDesign,
              label: "the website structure",
              body: "Not how it looks. What pages it has. One “Services” page cannot rank for deshedding, and a puppy's first groom, and cat grooming. It is not really about any of them. One page per service. One page per town you serve.",
            },
            {
              n: "04",
              title: "Ongoing search work",
              href: PATHS.seo,
              label: "the ongoing search work",
              body: "After launch, Google starts telling you which searches you show up for. Most of the useful work for the next year is in that data. Pages that get seen but not clicked. Searches you nearly rank for. Services people search for that you offer but never wrote a page about.",
            },
          ].map((item) => (
            <div key={item.n} className="grid gap-3 rounded-xl border border-tf-border bg-tf-card p-6 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-5">
              <p className="font-tf-display text-xl font-bold leading-none text-tf-brown">{item.n}</p>
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
          intro="This is about fit, not about talking you out of anything. Plenty of good grooming businesses run all three."
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
                  "Reaching someone who has already decided they need a groomer and is picking one nearby.",
                  "Speed. It takes weeks to months before it does real work.",
                  "Setup work, then upkeep. It keeps working after you stop paying attention to it.",
                ],
              },
              {
                label: "Social media",
                cells: [
                  "Keeping current clients close, showing before-and-after photos, filling a last-minute gap.",
                  "Reaching new people at the moment they are looking. They are not on Instagram searching for a groomer.",
                  "Your time, every week, forever. Stop posting and your reach drops fast.",
                ],
              },
              {
                label: "Paid ads",
                cells: [
                  "Appointments this week. You can turn demand on when you want it.",
                  "Building anything that lasts. The day you stop paying, it stops.",
                  "A cost per click or per lead that never goes away and usually goes up.",
                ],
              },
            ]}
          />
        </div>
        <div className="tf-prose mt-6">
          <p>
            The {offer.priceLine} service is the first row. It is the one that keeps working after you stop
            paying attention to it. We also run Google Local Services Ads and Facebook and Instagram ads for
            groomers who want appointments sooner.{" "}
            <Link href={PATHS.book} className="font-medium text-tf-brown-dark underline underline-offset-4">
              Book a call
            </Link>{" "}
            if you want them. Either way, the search work makes ads work better. The same website has to do
            the convincing.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="mistakes">
        <SectionHeading
          eyebrow="Common mistakes"
          id="mistakes"
          title="What we see on almost every"
          accent="grooming business we look at"
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "A “Services” page instead of service pages",
              b: "Everything the business does, listed once, on one page. It competes with itself for every search and wins none of them.",
            },
            {
              t: "A mobile business with a street address published",
              b: "Either it is the groomer's home, which they did not mean to share, or it is an address customers cannot visit. Both cause problems.",
            },
            {
              t: "No service areas anywhere",
              b: "The van covers nine towns. The website names one. Searches from eight towns have nothing to match.",
            },
            {
              t: "Reviews that stop eighteen months ago",
              b: "Usually not a quality problem. Nobody ever built a habit of asking, so nobody asks.",
            },
            {
              t: "A phone number that isn't a link on mobile",
              b: "Most of your visitors are on a phone. If calling means copy and paste, some of them just don't.",
            },
            {
              t: "Prices hidden to “get them to call”",
              b: "It mostly gets them to call a competitor who shows a range. Grooming prices change with size and coat. Say that, and give the range.",
            },
          ].map((m) => (
            <div key={m.t} className="rounded-xl border border-tf-border bg-tf-card p-5">
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
          title="What we do"
          accent="about all of this"
          intro={`${business.name} runs the four parts above as one monthly service, for grooming businesses only.`}
        />
        <PricingCard location="marketing" className="mt-8" />
      </Section>

      <Section width="narrow" className="py-12">
        <FaqBlock
          items={faqItems}
          eyebrow="FAQ"
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
              label: "How the SEO works",
              description: "How grooming businesses rank on Google, and what we change first.",
            },
            {
              href: PATHS.gbp,
              label: "Your Google Business Profile",
              description: "Categories, services, service areas and photos. The fastest part of the job.",
            },
            {
              href: PATHS.websiteDesign,
              label: "What the website needs",
              description: "What pages a grooming site needs, and why one “Services” page is not enough.",
            },
            {
              href: PATHS.reviews,
              label: "Getting more reviews",
              description: "Getting a steady flow of new Google reviews, without breaking Google's rules.",
            },
            {
              href: PATHS.leadGeneration,
              label: "Turning searches into calls",
              description: "Turning searches into calls, and calls into booked appointments.",
            },
            {
              href: PATHS.caseStudies,
              label: `${buildStats.siteCount} grooming builds, broken down`,
              description: "What each business had, what was wrong, and exactly what we built.",
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
