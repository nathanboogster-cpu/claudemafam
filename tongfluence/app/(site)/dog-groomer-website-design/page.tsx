import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath, caseStudyPath } from "@/lib/site-data";
import { buildStats, clientBuilds } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { pageDogPhoto } from "@/lib/dog-photos";
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
    "Grooming websites built to be found and to make the phone ring: a page per service, a page per town, fast on a phone. $297 a month.",
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
      "At the very least: a page for each service you offer. A page for each town you serve. Clear prices or price ranges. Real photos of your own work. Your hours. A tap-to-call phone number on every screen. And an honest note on how booking works. Everything else is optional. A gallery with no service pages is the most common way to get this backwards.",
  },
  {
    question: "How many pages does a dog grooming website need?",
    answer:
      "More than most groomers expect. The pages are how you match searches. Across the seven grooming sites we built, the middle number is in the low thirties. A few core pages, then one page per service and one per town. A five-page site cannot show up for twenty different searches. It does not have twenty things to say.",
  },
  {
    question: "Do I need a new website or can you fix my current one?",
    answer:
      "It depends on what you have. If the site is fast, lets us add pages, and already has real service pages, fixing it is usually better. If it is a one-page template, a slow builder site, or something you pay to change, a rebuild is usually quicker. We will tell you honestly on the call.",
  },
  {
    question: "Do I own the website?",
    answer:
      "The domain is in your name and the content is yours. While you are a client, we host and maintain the site as part of the $297 a month. That keeps it fast and lets us keep changing it based on your search data.",
  },
  {
    question: "Will my website work for mobile grooming?",
    answer:
      "Yes, and it will be built differently. A mobile grooming site lists service areas instead of a street address. It explains what the van brings and what it needs from you, like power, water and a parking spot. And it has a page for each town. Three of our seven sites are for mobile groomers. This is a well-worn path.",
  },
  {
    question: "Can I use my existing booking system?",
    answer:
      "Yes. If you already take bookings through something your clients know, we point the site at it instead of replacing it. That could be a booking app, a phone line or a form. One of our sites sends every booking button to the client's own booking app for exactly this reason.",
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
            "Websites for dog grooming businesses, built to be found on Google: a page per service, a page per town, fast on a phone, built and maintained for $297 a month.",
          path: PATHS.websiteDesign,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Grooming website design"
        title="A grooming website is not a brochure."
        accent="It's a machine for making the phone ring."
        intro={
          <>
            Most grooming websites are judged on looks. The ones that bring appointments are judged on two
            other things. Can Google find a page that matches what someone searched? And can the person who
            lands on it call you in one tap? We build for those first. It still looks good.
          </>
        }
        location="web_hero"
        image={pageDogPhoto.websiteDesign}
        pills
        secondary={{ href: resourcePath("dog-grooming-website-examples"), label: "See the sites we've built" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock>
          <p>
            A dog grooming website needs a <strong>page for each service</strong> and a{" "}
            <strong>page for each town you serve</strong>. Those are the searches people make. It needs real
            photos of your own work, a price or a price range, and a tap-to-call number on every screen. It
            needs to load fast on a phone. Across the {buildStats.siteCount} grooming sites we built, service
            and town pages make up {buildStats.totalServicePages + buildStats.totalAreaPages} of the{" "}
            {buildStats.totalPages} pages. Those pages <em>are</em> the website.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="what-goes-wrong">
        <SectionHeading
          eyebrow="The usual problem"
          id="what-goes-wrong"
          title="The five-page grooming website"
          intro="Home, About, Services, Gallery, Contact. Every website builder starts you there. It is why so many groomers decide their website “doesn't do anything.”"
        />
        <div className="tf-prose mt-6">
          <p>
            Here is the problem. Someone searches <em>dog deshedding in Hagerstown</em>. For your site to
            show up, Google needs a page that is clearly about deshedding in Hagerstown. A page called
            &ldquo;Services&rdquo; that lists eleven things in bullet points is not clearly about anything. A
            footer that names three towns does not help. So the site does not show up. Not because the
            business is worse. Because it never gave Google anything to match.
          </p>
          <p>
            Now think of every service you offer and every town you would drive to. That is how much a
            five-page site leaves behind. This is why the fix is not &ldquo;better writing&rdquo; or
            &ldquo;more keywords&rdquo; on the pages you have. It is more pages, each one about one thing.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="anatomy">
        <SectionHeading
          eyebrow="What we build"
          id="anatomy"
          title="What a grooming site"
          accent="that works is made of"
        />
        <div className="mt-8 space-y-6">
          {[
            {
              n: "01",
              t: "A page per service",
              b: "Full groom, bath and tidy, deshedding, dematting, nail trim and ear clean, puppy first groom, cat grooming. Whatever you really do. Each page says what it involves, who it suits, how long it takes, and what it costs or what the range is.",
            },
            {
              n: "02",
              t: "A page per area",
              b: "One for each town you take clients from. Each one says something true about that town. The drive, the days you are over that way, the areas you cover. Not one template with the town name swapped. That is the fastest way to build pages nobody wants and Google ignores.",
            },
            {
              n: "03",
              t: "Pricing that exists",
              b: "Grooming prices depend on size, coat and condition. That is why so many groomers show nothing. Show the range and say what changes it. A visitor who cannot find any number goes back to Google.",
            },
            {
              n: "04",
              t: "Real photos of your own work",
              b: "Stock photos of a perfect show dog convince nobody. They are clearly not yours. Where a client has not sent photos yet, we use an honest placeholder instead of stock. It is less pretty and more trusted.",
            },
            {
              n: "05",
              t: "One tap to call",
              b: "A phone number that dials when tapped. It sits in the header and in a bar that stays on screen on a phone. Most grooming visitors are on a phone, often with one hand, often next to a dog.",
            },
            {
              n: "06",
              t: "Reviews shown as words, not as fake stars",
              b: "Real reviews quoted on the page and linked to where they came from. We do not add hidden star code to get stars in search results. Google restricts that, and the risk is not worth a small gain.",
            },
            {
              n: "07",
              t: "Speed and the basics under the hood",
              b: "Pages that load fast. Small, right-sized images. Very little script. A unique title on every page. A sitemap that is right. The hidden labels that tell Google what kind of business you are. Nothing fancy. Just none of it missing.",
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
          title="What our grooming sites"
          accent="are really made of"
          intro={`Every site we built, counted. This is not an industry average. It is our own work, which is why we can stand behind the numbers.`}
        />
        <div className="mt-8">
          <BuildTable />
        </div>
        <p className="mt-5 text-sm leading-relaxed text-tf-ink-soft">
          The full story of each one, including what was wrong before, is in{" "}
          <Link href={PATHS.caseStudies} className="font-medium text-tf-brown-dark underline underline-offset-4">
            the case studies
          </Link>
          . You can compare them side by side in{" "}
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
          title="Salon sites and mobile sites"
          accent="are built differently"
        />
        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-tf-border bg-tf-card p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">A salon site</h3>
            <div className="mt-4">
              <Checklist
                items={[
                  { title: "One clear address, everywhere", body: "The same on the site, the profile and every directory. A map on the contact page." },
                  { title: "Parking and access spelled out", body: "Where to park, which door, and what happens at drop-off." },
                  { title: "Town pages aimed at drivers", body: "The areas and towns people really drive in from." },
                ]}
              />
            </div>
          </div>
          <div className="rounded-xl border border-tf-border bg-tf-card p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">A mobile site</h3>
            <div className="mt-4">
              <Checklist
                items={[
                  { title: "No street address on the site", body: "It is usually the groomer's home. It goes nowhere on the site." },
                  { title: "Town pages do the work", body: "A page per town, because the map will not reach most of them." },
                  { title: "What the van needs, said plainly", body: "A parking spot, power and water if needed, how long it takes, and what happens if nobody is home." },
                ]}
              />
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-tf-ink-soft">
          {buildStats.mobileCount} of our {clientBuilds.length} sites are for mobile groomers. The clearest example is{" "}
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
          title="The website is part of the monthly service,"
          accent="not a separate build fee"
          intro="There is no big build cost. No charge per page when we add a service or a town later. That is on purpose. A site you pay to change is a site that never changes."
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
              description: "Every site we built, what it had to solve, and what is inside it.",
            },
            {
              href: PATHS.seo,
              label: "How the SEO works",
              description: "How these pages turn into rankings, and what happens after launch.",
            },
            {
              href: PATHS.leadGeneration,
              label: "Turning searches into calls",
              description: "What makes a visitor pick up the phone.",
            },
            {
              href: PATHS.gbp,
              label: "Your Google Business Profile",
              description: "Where most new customers see you before they see the website.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="website_footer"
          title="Send us your current site and we'll tell you what's missing"
          body="Not a “free audit” PDF. A short call where we open your site and your Google profile and tell you what we would change, in order. If your current site is fine, that is the answer you will get."
          secondaryHref={resourcePath("dog-grooming-website-examples")}
          secondaryLabel="See websites we've built"
        />
      </Section>
    </>
  );
}
