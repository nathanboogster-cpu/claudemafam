import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath, caseStudyPath } from "@/lib/site-data";
import { buildStats, clientBuilds } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BuildTable } from "@/components/BuildTable";
import { Checklist } from "@/components/Checklist";

// SEARCH INTENT
//   Primary query:    dog groomer website design
//   Secondary:        dog grooming website design, websites for dog groomers,
//                     dog grooming websites
//   Intent:           commercial — an owner considering a new or rebuilt site.
//   Business purpose: sell the website component, and make clear it is an SEO
//                     and conversion asset rather than a design project.
//   Differentiation:  /resources/dog-grooming-website-examples is the
//                     informational "show me examples" intent; this page is
//                     the service. They cross-link rather than overlap.
export const metadata: Metadata = pageMetadata({
  title: "Dog Groomer Website Design & SEO",
  description:
    "Grooming websites built to be found and to get the phone ringing: a page per service, a page per area, fast on mobile, indexable throughout. $297/month.",
  path: PATHS.websiteDesign,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Dog Groomer Website Design", href: PATHS.websiteDesign },
];

const faqItems = [
  {
    question: "What should a dog grooming website include?",
    answer:
      "At minimum: a page for each service you offer, a page for each area you serve, clear pricing or price ranges, real photos of your own work, your hours, a tap-to-call phone number on every screen, and an honest description of how booking works. Everything else is optional. A gallery with no service pages is the most common version of getting this backwards.",
  },
  {
    question: "How many pages does a dog grooming website need?",
    answer:
      "More than most groomers expect, because the pages are how you match searches. Across the seven grooming sites we have built the median is in the low thirties — a handful of core pages, then one page per service and one per town served. A five-page site cannot appear for twenty different searches because it does not have twenty things to say.",
  },
  {
    question: "Do I need a new website or can you fix my current one?",
    answer:
      "It depends on what you have. If the site is fast, lets us add pages freely, and already has real service pages, improving it is usually the better move. If it is a one-page template, a slow builder site, or something you cannot edit without paying per change, rebuilding is normally quicker than working around it. We will tell you honestly which one you are on the call.",
  },
  {
    question: "Do I own the website?",
    answer:
      "The domain is registered to you and the content is yours. While you are a client the site is hosted and maintained as part of the $297 monthly service, which is what keeps it fast and lets us keep changing it based on your search data.",
  },
  {
    question: "Will my website work for mobile grooming?",
    answer:
      "Yes, and it will be built differently. A mobile grooming site publishes service areas rather than a street address, explains what the van brings and what it needs from you (power, water, a parking spot), and carries a page per town. Three of our seven builds are mobile-only, so this is a well-worn path rather than an adaptation.",
  },
  {
    question: "Can I use my existing booking system?",
    answer:
      "Yes. If you already take bookings through something your clients know — an online booking platform, a phone line, a form — we point the site at it rather than replacing it. One of our builds routes every booking CTA to the client's existing booking platform for exactly this reason.",
  },
];

export default function WebsiteDesignPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd
        data={serviceSchema({
          name: "Dog grooming website design",
          serviceType: "Website design and SEO for dog grooming businesses",
          description:
            "SEO-structured, mobile-first websites for dog grooming businesses: a page per service, a page per service area, fast load times and structured data, built and maintained for $297 per month.",
          path: PATHS.websiteDesign,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Grooming website design"
        title="A grooming website is not a brochure. It's a machine for getting the phone to ring."
        intro={
          <>
            Most grooming websites are judged on whether they look nice. The ones that produce appointments
            are judged on two other things: whether Google can find a page that matches what somebody
            searched, and whether the person who lands on it can call you in one tap. We build for those
            first, and it still looks good.
          </>
        }
        location="web_hero"
        secondary={{ href: resourcePath("dog-grooming-website-examples"), label: "See the sites we've built" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock>
          <p>
            A dog grooming website needs a <strong>page for each service</strong> and a{" "}
            <strong>page for each area you serve</strong>, because those are the searches people make. It
            needs real photos of your own work, a price or price range, a tap-to-call number on every screen,
            and it needs to load fast on a phone. Across the {buildStats.siteCount} grooming sites we have
            built, that structure accounts for {buildStats.totalServicePages + buildStats.totalAreaPages} of
            the {buildStats.totalPages} pages — the service and area pages <em>are</em> the website.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="what-goes-wrong">
        <SectionHeading
          eyebrow="The usual problem"
          id="what-goes-wrong"
          title="The five-page grooming website"
          intro="Home, About, Services, Gallery, Contact. It is the default because every website builder ships it, and it is the reason so many groomers conclude their website “doesn't do anything.”"
        />
        <div className="tf-prose mt-6">
          <p>
            Here is the mechanical problem. Somebody searches <em>dog deshedding in Hagerstown</em>. For your
            site to be a candidate, Google needs a page that is convincingly about deshedding, in Hagerstown.
            A page called &ldquo;Services&rdquo; that lists eleven services in bullet points, and a footer that
            mentions three towns, is not convincingly about anything. So it does not appear — not because the
            business is worse, but because it never offered Google anything to match.
          </p>
          <p>
            Multiply that by every service you offer and every town you would happily drive to, and you can see
            the size of what a five-page site is leaving behind. This is also why the fix is not &ldquo;better
            copy&rdquo; or &ldquo;more keywords&rdquo; on the existing pages. It is more pages, each one
            genuinely about one thing.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="anatomy">
        <SectionHeading
          eyebrow="What we build"
          id="anatomy"
          title="The anatomy of a grooming site that works"
        />
        <div className="mt-8 space-y-6">
          {[
            {
              n: "01",
              t: "A page per service",
              b: "Full groom, bath and tidy, deshedding, dematting, nail trim and ear clean, puppy first groom, cat grooming — whatever you actually do. Each page says what it involves, who it suits, how long it takes, and what it costs or what the range is and what moves it.",
            },
            {
              n: "02",
              t: "A page per area",
              b: "One for each town you take clients from, written with something true and specific in it: the drive, the days you're over that way, the neighbourhoods covered. Not one template with the town name swapped — that is the fastest way to build pages nobody wants and Google ignores.",
            },
            {
              n: "03",
              t: "Pricing that exists",
              b: "Grooming prices genuinely depend on size, coat and condition, which is why so many groomers publish nothing. Publish the range and say what moves it. A visitor who cannot find any number goes back to the search results.",
            },
            {
              n: "04",
              t: "Real photos of your own work",
              b: "Stock photos of a perfectly groomed show dog convince nobody and are visibly not yours. Where a client hasn't sent photos yet, we use honest, correctly-sized placeholders rather than filling the gap with stock — it's less pretty and more trustworthy.",
            },
            {
              n: "05",
              t: "One tap to call",
              b: "A phone number that dials when tapped, in the header and in a persistent bar on mobile. Most grooming traffic is on a phone, often one-handed, often standing next to a dog.",
            },
            {
              n: "06",
              t: "Reviews shown as content, not as fake stars",
              b: "Real reviews quoted on the page and linked to the profile they came from. We do not inject rating markup to conjure stars in search results — Google restricts self-serving review markup, and the risk is not worth a cosmetic gain.",
            },
            {
              n: "07",
              t: "Speed and structure under the hood",
              b: "Server-rendered pages, compressed and correctly sized images, almost no JavaScript, unique titles and descriptions, correct canonicals, LocalBusiness and Service structured data, an accurate sitemap. Nothing exotic — just none of it missing.",
            },
          ].map((x) => (
            <div key={x.n} className="grid gap-3 rounded-xl border border-tf-border bg-tf-card p-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-5">
              <p className="font-tf-display text-xl font-bold leading-none text-tf-brown">{x.n}</p>
              <div>
                <h3 className="font-tf-display text-lg font-bold text-tf-ink">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tf-ink-soft">{x.b}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section className="py-12" labelledBy="real-builds">
        <SectionHeading
          eyebrow="First-party data"
          id="real-builds"
          title="What our grooming builds are actually made of"
          intro={`Every site we have built, counted. This is not an industry benchmark — it is our own work, which is why we can vouch for the numbers.`}
        />
        <div className="mt-8">
          <BuildTable />
        </div>
        <p className="mt-5 text-sm leading-relaxed text-tf-ink-soft">
          The full write-up of each one, including what was wrong before, is in{" "}
          <Link href={PATHS.caseStudies} className="font-medium text-tf-brown-dark underline underline-offset-4">
            the case studies
          </Link>
          , and the shape-by-shape comparison is in{" "}
          <Link
            href={resourcePath("dog-grooming-website-examples")}
            className="font-medium text-tf-brown-dark underline underline-offset-4"
          >
            the side-by-side comparison
          </Link>
          .
        </p>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="salon-vs-mobile">
        <SectionHeading
          eyebrow="It depends on your business"
          id="salon-vs-mobile"
          title="Salon sites and mobile sites are built differently"
        />
        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-tf-border bg-tf-card p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">A salon site</h3>
            <div className="mt-4">
              <Checklist
                items={[
                  { title: "One clear address, everywhere", body: "Identical on the site, the profile and every directory. Map embed on the contact page." },
                  { title: "Parking and access spelled out", body: "Where to park, which door, what happens at drop-off." },
                  { title: "Area pages aimed at drivers", body: "The neighbourhoods and towns people realistically drive in from." },
                ]}
              />
            </div>
          </div>
          <div className="rounded-xl border border-tf-border bg-tf-card p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">A mobile site</h3>
            <div className="mt-4">
              <Checklist
                items={[
                  { title: "No published street address", body: "Usually the groomer's home. It goes nowhere on the site and nowhere in the structured data." },
                  { title: "Service areas carry the geography", body: "A page per town, because the map pack won't reach most of them." },
                  { title: "What the van needs, stated plainly", body: "Parking space, power and water if required, how long it takes, what happens if nobody's home." },
                ]}
              />
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-tf-ink-soft">
          {buildStats.mobileCount} of our {clientBuilds.length} builds are mobile-only. The clearest example is{" "}
          <Link
            href={caseStudyPath("bark-and-bork-mobile-pet-spa")}
            className="font-medium text-tf-brown-dark underline underline-offset-4"
          >
            a mobile spa working across Greater Los Angeles
          </Link>
          .
        </p>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="included">
        <SectionHeading
          eyebrow="What it costs"
          id="included"
          title="The website is part of the monthly service, not a separate build fee"
          intro="There is no five-figure build cost and no per-page charge when we add a service or an area later. That is deliberate — a site you are charged to change is a site that never changes."
        />
        <PricingCard location="website_design" className="mt-8" />
      </Section>

      <Section width="narrow" className="py-12">
        <FaqBlock
          items={faqItems}
          eyebrow="FAQ"
          title="Common questions"
          headingId="website-faq"
        />
      </Section>

      <Section className="py-12">
        <RelatedLinks
          items={[
            {
              href: resourcePath("dog-grooming-website-examples"),
              label: "The sites we've built, compared",
              description: "Every site we've built, what it had to solve, and what's inside it.",
            },
            {
              href: PATHS.seo,
              label: "How the SEO works",
              description: "How the structure above turns into rankings, and what happens after launch.",
            },
            {
              href: PATHS.leadGeneration,
              label: "Turning searches into calls",
              description: "The conversion half: what makes a visitor actually pick up the phone.",
            },
            {
              href: PATHS.gbp,
              label: "Your Google Business Profile",
              description: "Where most of your first-time visitors will see you before the website.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="website_footer"
          title="Send us your current site and we'll tell you what's missing"
          body="Not a “free audit” PDF — a short call where we open your site and your Google profile and tell you what we'd change, in order. If the honest answer is that your current site is fine, that's the answer you'll get."
          secondaryHref={resourcePath("dog-grooming-website-examples")}
          secondaryLabel="See websites we've built"
        />
      </Section>
    </>
  );
}
