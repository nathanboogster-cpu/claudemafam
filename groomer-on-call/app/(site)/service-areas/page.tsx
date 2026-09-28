import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/Eyebrow";
import { Section, SectionHeading } from "@/components/Section";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { CtaBand } from "@/components/CtaBand";
import { BrandArt } from "@/components/BrandArt";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, market, services, servicePath, PATHS, SITE_URL, hoursNote } from "@/lib/site-data";
import { VanIcon, PhoneIcon, HomeIcon, CheckIcon } from "@/components/icons";

// -----------------------------------------------------------------------------
// WHY THERE ARE NO CITY LANDING PAGES UNDER THIS ROUTE — read before adding any.
//
// The current, exact list of cities Groomer On Call serves has not been
// verified. Spinning up /service-areas/[city]-fl pages from a guessed radius
// would produce exactly the doorway pages the brief rules out: twenty near-
// identical pages differing only by a swapped city name, several of them
// claiming coverage the business may not actually offer.
//
// So this is a single, genuinely useful page that does the job a service-area
// hub is supposed to do — explain the model, and convert the "do you come to
// me?" question into a phone call, which is also the fastest honest answer.
//
// TO ADD CITY PAGES LATER (once the client or GBP confirms the list):
//   1. Add a `serviceAreas` array to lib/site-data.ts with, per city, genuinely
//      distinct content — not a template with a variable in it.
//   2. Add app/(site)/service-areas/[slug]/page.tsx with generateStaticParams.
//   3. Link them from this page and from the footer.
//   4. Add them to app/sitemap.ts.
// Create a page per city ONLY where there is real coverage AND enough unique
// local content to justify the URL.
// -----------------------------------------------------------------------------

export const metadata: Metadata = pageMetadata({
  title: `Mobile Grooming Service Area — ${market.cityState}`,
  description:
    `Groomer On Call is a mobile pet groomer serving the ${market.cityState} area, including nearby ${market.nearbyCity}. ` +
    `Call ${business.phoneDisplay} to find out if we reach you.`,
  path: PATHS.serviceAreas,
  titleTemplate: false,
});

const crumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Service Areas", href: PATHS.serviceAreas },
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href === "/" ? "" : c.href}` })))}
      />
      <Breadcrumbs items={crumbs} />

      <section className="relative overflow-hidden bg-goc-cream">
        <div className="goc-blob -left-20 -top-16 h-72 w-72 bg-goc-magenta/25" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Service Area</Eyebrow>
            <h1 className="mt-3 font-goc-display text-4xl font-extrabold leading-[1.06] text-goc-ink sm:text-5xl">
              Mobile Pet Grooming Across The {market.cityState} Area
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-goc-ink-soft">
              Groomer On Call is a mobile service, so the question isn&rsquo;t whether there&rsquo;s a salon near
              you — it&rsquo;s whether we travel to your address. Coverage runs out from the {market.city} area,
              including nearby {market.nearbyCity}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton location="service_areas_hero" label="Ask If We Reach You" />
              <SecondaryLinkButton href={PATHS.services} label="View Services" />
            </div>
            <p className="mt-4 text-sm font-semibold text-goc-ink-soft">
              {business.phoneDisplay} · {hoursNote}
            </p>
          </div>
          <BrandArt scene="route" aspect="wide" className="shadow-xl shadow-black/5" />
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="The Honest Answer"
              title="Why There Isn't A List Of Towns Here"
              intro="Plenty of mobile grooming websites publish a long list of every town within an hour's drive. It reads well and it's often not true."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-goc-ink-soft">
              <p>
                A mobile groomer&rsquo;s real coverage on any given week depends on where the other appointments are,
                how far out you are, and what the roads are doing. A town that appears on a website isn&rsquo;t a
                promise that anyone is actually driving there.
              </p>
              <p>
                We&rsquo;d rather you get a real answer in one phone call than a page full of place names that
                may not include your street anyway. Call {business.phoneDisplay}, tell us roughly where you are, and
                you&rsquo;ll know in a sentence.
              </p>
              <p>
                If we don&rsquo;t reach you, you&rsquo;ll be told that plainly rather than booked in and cancelled
                later.
              </p>
            </div>
            <div className="mt-8">
              <CallButton location="service_areas_body" label={`Call ${business.phoneDisplay}`} />
            </div>
          </div>

          <div className="rounded-3xl border-2 border-goc-border bg-goc-cream p-7">
            <h2 className="font-goc-display text-xl font-extrabold text-goc-ink">What to have ready when you call</h2>
            <ul className="mt-5 space-y-3">
              {[
                "Roughly where you are — town or nearest cross street is plenty",
                "What kind of pet, and roughly what coat",
                "How long since the last groom",
                "Which service you think you want, if you know",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-goc-magenta-dark" />
                  <span className="font-semibold text-goc-ink">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-goc-ink-soft">
              None of it has to be exact. It just lets you get a useful answer in one call rather than three.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="How It Works Here"
          title="What A Service-Area Business Means For You"
          intro="Groomer On Call has no storefront, no waiting room and no public address. That isn't a limitation — it's the entire service."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              Icon: VanIcon,
              title: "We travel, you don't",
              body: "Your groomer drives to your address. There is nothing for you to drive to, which is why no address is listed anywhere on this site.",
            },
            {
              Icon: HomeIcon,
              title: "Groomed at your home",
              body: "The appointment happens where your pet already lives, rather than in an unfamiliar building full of other animals.",
            },
            {
              Icon: PhoneIcon,
              title: "One call settles it",
              body: `Call ${business.phoneDisplay} and you'll know immediately whether we reach you, and what's realistic for your pet's coat.`,
            },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="rounded-3xl border-2 border-goc-border bg-white p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-goc-cream-deep text-goc-magenta-darker">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-goc-display text-lg font-extrabold text-goc-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-goc-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="What We Bring"
          title="Services Available At Your Address"
          intro="Everything Groomer On Call offers is a mobile service. There is no reduced 'mobile menu' — this is the menu."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={servicePath(s.slug)}
                className="flex h-full flex-col rounded-2xl border-2 border-goc-border bg-goc-cream p-6 transition-all duration-200 hover:-translate-y-1 hover:border-goc-magenta-dark"
              >
                <span className="font-goc-display text-lg font-extrabold text-goc-ink">{s.name}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-goc-ink-soft">{s.summary}</span>
                <span className="mt-4 text-sm font-bold text-goc-magenta-darker">
                  {s.navLabel} in {market.cityState} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        location="service_areas_footer"
        heading="Do We Come To You?"
        body={`One call and you'll know. Ring ${business.phoneDisplay}, tell us roughly where you are, and you'll get a straight yes or no — plus what's realistic for your pet's coat.`}
        secondary={{ href: PATHS.contact, label: "Contact Details" }}
      />
    </>
  );
}
