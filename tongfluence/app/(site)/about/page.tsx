import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, business, offer, founder, resourcePath, headlineResult } from "@/lib/site-data";
import { buildStats } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { pageDogPhoto, dogPhotos } from "@/lib/dog-photos";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Reveal } from "@/components/Reveal";
import { CrossIcon } from "@/components/icons";

// SEARCH INTENT
//   Primary:          navigational / trust. Somebody who is most of the way to
//                     booking and is checking whether we are real.
//   Business purpose: explain why the specialisation exists, how the work
//                     actually runs, and what we will not do — which is the
//                     part that separates us from a generic agency.
export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Why Tongfluence works only with dog grooming businesses, how the monthly work runs, and what we choose not to do.",
  path: PATHS.about,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "About", href: PATHS.about },
];

// Two client dogs the hero photos elsewhere do not use.
const aboutPhotos = [dogPhotos[8], dogPhotos[0]];

const whyGroomers = [
  {
    t: "Grooming search is simple",
    b: "One service, one dog, one place. No guessing what people mean.",
  },
  {
    t: "The work repeats",
    b: `The tenth grooming site is not the first one again. That is what makes ${offer.priceLine} possible.`,
  },
  {
    t: "It adds up",
    b: "Every site teaches us what makes a grooming visitor pick up the phone.",
  },
];

const howWeWork = [
  { t: "One monthly price, one invoice", b: `${offer.priceLine}. No setup fee, no build fee, no contract.` },
  { t: "Everything stays yours", b: "Your domain, your Google profile. We are a manager, never the owner." },
  { t: "The monthly work is driven by data", b: "We read your search data and make the one change most likely to bring appointments." },
  { t: "You hear from us when something changed", b: "What we changed, why, and what we are watching next. No dashboard." },
];

// The rules that cost us things. Titles only: each one is a promise, and the
// pages they apply to show it being kept.
const rules = [
  {
    group: "On your website",
    items: [
      "No stock photos of other people's dogs",
      "No hidden code to fake stars in search results",
      "No town pages made by swapping a name",
      "No made-up facts, ever",
    ],
  },
  {
    group: "On reviews",
    items: ["No review gating", "No incentives", "No written or bought reviews"],
  },
  {
    group: "On this website",
    items: [
      headlineResult ? "No results without the report behind them" : "No results we haven't measured",
      "No logos or testimonials without permission",
      "No fake urgency",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="About"
        title="We only work with dog groomers."
        accent="That's the whole strategy."
        intro={
          <>
            Tongfluence is a small team that does one job for one industry. We get grooming businesses found
            on Google and keep them there.
          </>
        }
        location="about_hero"
        image={pageDogPhoto.about}
        pills
        secondary={{ href: PATHS.caseStudies, label: "See the work" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock label="What Tongfluence is">
          <p>
            {business.entityDescription} We work from a distance with {buildStats.siteCount} grooming businesses
            across {buildStats.stateCount} states. Salons, mobile groomers, and one that runs daycare and
            boarding too.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section className="py-12" labelledBy="why-groomers">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why groomers"
              id="why-groomers"
              title="Why we picked"
              accent="such a narrow field"
              intro="Not because we love dogs more than the next agency. Three reasons."
            />
            <ol className="mt-7 space-y-4">
              {whyGroomers.map((x, i) => (
                <Reveal as="li" key={x.t} delay={i * 80} className="flex gap-4">
                  <span className="w-7 shrink-0 font-tf-display text-xl font-bold leading-none text-tf-brown">0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-tf-ink">{x.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-tf-ink-soft">{x.b}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal className="tf-reveal-photo grid grid-cols-2 gap-3" delay={120}>
            {aboutPhotos.map((ph, i) => (
              <figure key={ph.src} className={`m-0 ${i === 1 ? "mt-8" : ""}`}>
                <Image
                  src={ph.src}
                  alt={ph.alt}
                  width={ph.width}
                  height={ph.height}
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="aspect-[4/5] h-auto w-full rounded-2xl border border-tf-border object-cover object-top"
                />
              </figure>
            ))}
            <figcaption className="col-span-2 text-xs text-tf-ink-soft">
              Groomed at {aboutPhotos[0].credit} and {aboutPhotos[1].credit}. Both are businesses we build for.
            </figcaption>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="how-we-work">
        <SectionHeading
          eyebrow="How we work"
          id="how-we-work"
          title="What you're really buying"
          intro="One person doing the work. Not an account manager passing it to a team you never meet."
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {howWeWork.map((x) => (
            <div key={x.t} className="rounded-xl border border-tf-border bg-tf-card p-5">
              <h3 className="text-sm font-semibold text-tf-ink">{x.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{x.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-14" labelledBy="principles" band>
        <SectionHeading
          eyebrow="What we won't do"
          id="principles"
          title="The rules we build to"
          intro="Each one costs us something. That is why you can trust what is on this site."
        />
        <div className="mt-7 space-y-6">
          {rules.map((r) => (
            <div key={r.group}>
              <h3 className="tf-caps text-xs text-tf-brown">{r.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {r.items.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={i * 60}
                    className="inline-flex items-center gap-2 rounded-full border border-tf-border bg-white px-3.5 py-2 text-sm font-semibold text-tf-ink"
                  >
                    <CrossIcon className="h-4 w-4 shrink-0 text-tf-warn" />
                    {item}
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder section renders only once real, verified details exist in
          lib/site-data.ts. An invented founder bio would break the first rule
          on this page, so the section simply isn't there until then. */}
      {founder.name ? (
        <Section width="narrow" className="py-12" labelledBy="founder">
          <SectionHeading eyebrow="Who's behind it" id="founder" title={founder.name} />
          <div className="tf-prose mt-6">
            {founder.bio.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="py-12">
        <RelatedLinks
          title="See it in practice"
          items={[
            { href: PATHS.caseStudies, label: "Case studies" },
            { href: PATHS.marketing, label: "The whole picture" },
            { href: resourcePath("how-to-rank-dog-grooming-business-on-google"), label: "How to rank a grooming business on Google" },
            { href: PATHS.book, label: "Book a call" },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="about_footer"
          title="Talk to the person who would do the work"
          body="Not a sales call with someone who hands you off after you sign. We open your Google profile and your site on the call and tell you what we would change."
        />
      </Section>
    </>
  );
}
