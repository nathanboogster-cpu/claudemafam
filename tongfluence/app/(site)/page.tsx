import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, offer, faqs, audienceTypes, objections, business } from "@/lib/site-data";
import { caseStudyBuilds, buildStats } from "@/lib/client-builds";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/schema";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { BookCallButton, SecondaryCTA } from "@/components/CTAButton";
import { ProofStrip } from "@/components/ProofStrip";
import { ExplainerVideo } from "@/components/ExplainerVideo";
import { PricingCard } from "@/components/PricingCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBand } from "@/components/CtaBand";
import { SearchIcon, MapPinIcon, StarIcon, ChartIcon, CheckIcon, CrossIcon } from "@/components/icons";

// SEARCH INTENT
//   Primary query:    dog groomer marketing
//   Secondary:        marketing for dog groomers, dog grooming marketing,
//                     dog grooming business marketing
//   Intent:           commercial investigation — a grooming owner deciding
//                     who to hire to get found on Google.
//   Business purpose: establish the Tongfluence entity, show proof, state the
//                     offer, and convert to a booked call.
//   Deliberately NOT targeting "dog groomer SEO" or "grooming website design"
//   in depth — those belong to their own pages (see SEO-PLAN.md).
export const metadata: Metadata = pageMetadata({
  title: "Dog Groomer Marketing That Gets You Found | Tongfluence",
  titleTemplate: false,
  description:
    "We build the website, Google Business Profile and review system dog groomers need to turn local searches into booked appointments. $297/month, cancel anytime.",
  path: PATHS.home,
});

const systemIcons = [SearchIcon, MapPinIcon, StarIcon, ChartIcon];

const howItWorks = [
  {
    step: "Week 1",
    title: "We look at what you already have",
    body: "Your Google Business Profile, your current website if you have one, what you actually offer, and which towns you take clients from. You give us your services and prices; we do the rest.",
  },
  {
    step: "Weeks 1–3",
    title: "Profile first, then the site",
    body: "The Google Business Profile work goes first because it moves fastest: categories, services, service areas, description, hours, photos. The website is built alongside it — a page per service, a page per area.",
  },
  {
    step: "Launch",
    title: "Live, submitted, and measured",
    body: "The site goes live, Search Console is connected, the sitemap is submitted, and indexing is verified. The review request flow is handed over so you can start asking clients from the next appointment.",
  },
  {
    step: "Every month after",
    title: "One evidence-based change at a time",
    body: "We read your Search Console queries and your profile data, find the biggest gap, and fix it. A page that gets impressions but no clicks gets a better title. A query you almost rank for gets a real page. That is the job.",
  },
];

const specialisation = [
  {
    generic: "Asks you what a full groom is",
    specific: "Already knows a full groom, a bath-and-tidy, a deshed and a dematting are four different searches",
  },
  {
    generic: "Builds one page called “Services”",
    specific: "Builds a page per service, because that is how people search",
  },
  {
    generic: "Puts your address on a mobile grooming site",
    specific: "Knows a mobile groomer publishes service areas, not a street address",
  },
  {
    generic: "Writes blog posts about “the importance of pet care”",
    specific: "Writes the page you are actually appearing for in Search Console",
  },
  {
    generic: "Reports on impressions and “brand awareness”",
    specific: "Cares whether the phone rang",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={serviceSchema({
          name: "Dog groomer marketing and SEO",
          serviceType: "Marketing and SEO for dog grooming businesses",
          description: business.entityDescription,
          path: PATHS.home,
        })}
      />

      {/* ---------------------------------------------------------------- */}
      {/* 1. HERO — audience, outcome, channel, price, action.             */}
      {/* ---------------------------------------------------------------- */}
      <Section className="pt-12 pb-14 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-tf-border bg-white px-3.5 py-1.5 text-xs font-semibold text-tf-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-tf-brown" aria-hidden="true" />
              For dog grooming businesses only
            </p>
            <h1 className="mt-5 font-tf-display text-4xl font-extrabold leading-[1.08] text-tf-ink sm:text-5xl lg:text-6xl">
              Get more dog grooming appointments from Google.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-tf-ink-soft">
              When someone in your town searches <em>dog groomer near me</em>, three businesses show up on the
              map and one of them gets the call. Tongfluence builds the website, Google Business Profile and
              review system that make that business you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookCallButton location="hero" />
              <SecondaryCTA href={PATHS.caseStudies} label="See client results" location="hero" />
            </div>

            <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <dt className="tf-caps text-[0.65rem] text-tf-ink-soft">Price</dt>
                <dd className="font-tf-display text-xl font-bold text-tf-ink">{offer.priceLine}</dd>
              </div>
              <div>
                <dt className="tf-caps text-[0.65rem] text-tf-ink-soft">Commitment</dt>
                <dd className="font-tf-display text-xl font-bold text-tf-ink">Cancel anytime</dd>
              </div>
              <div>
                <dt className="tf-caps text-[0.65rem] text-tf-ink-soft">
                  Who it&rsquo;s for
                </dt>
                <dd className="font-tf-display text-xl font-bold text-tf-ink">Groomers, only</dd>
              </div>
            </dl>
          </div>

          {/* The offer restated above the fold. Four real deliverables and the
              real price — deliberately not a mocked-up dashboard or a fake
              screenshot of results we have not measured. */}
          <aside
            aria-labelledby="hero-included"
            className="rounded-3xl border border-tf-border bg-white p-6 sm:p-7"
          >
            <h2 id="hero-included" className="font-tf-display text-base font-bold text-tf-ink">
              What {offer.priceLine} covers
            </h2>
            <ol className="mt-5 space-y-4">
              {offer.inclusions.map((item, i) => {
                const Icon = systemIcons[i];
                return (
                  <li key={item.number} className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-tf-brown-wash text-tf-brown-dark">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-snug text-tf-ink">{item.title}</p>
                      <Link
                        href={item.href}
                        className="mt-0.5 inline-block text-xs text-tf-ink-soft underline underline-offset-4 hover:text-tf-brown-dark"
                      >
                        {item.linkLabel}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ol>
            <p className="mt-6 border-t border-tf-border pt-4 text-xs leading-relaxed text-tf-ink-soft">
              One price, one invoice. No setup fee, no build fee, and no charge when we add a service page or
              an area page later.
            </p>
          </aside>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 2. THE WALKTHROUGH — answers "what do you actually do" before    */}
      {/* the page starts arguing, which is the first thing a groomer      */}
      {/* wants to know and the thing text is worst at conveying.          */}
      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="pb-16" labelledBy="walkthrough">
        <SectionHeading
          eyebrow="Watch"
          id="walkthrough"
          title="Exactly what we do, start to finish"
          intro="A walkthrough of what actually happens when a grooming business works with us. If you would rather read it, the same process is written out further down this page."
          align="center"
        />
        <div className="mt-8">
          <ExplainerVideo location="home_hero" />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 3. IMMEDIATE PROOF — before any argument is made.                */}
      {/* ---------------------------------------------------------------- */}
      <Section className="pb-16">
        <ProofStrip />
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 4. PROBLEM / OPPORTUNITY                                          */}
      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-14" labelledBy="problem">
        <SectionHeading
          eyebrow="The problem"
          id="problem"
          title="Most grooming businesses are invisible at the exact moment someone decides."
          intro={
            <>
              Grooming is a local, high-repeat, word-of-mouth business — which is exactly why so many groomers
              never build anything on Google. It works until the referrals slow down, a competitor opens
              nearby, or a chain starts paying for the top of the map.
            </>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "The profile is half-finished",
              body: "Right category, no services listed. No service areas on a mobile business. Six photos from 2019. Four reviews, the newest one eighteen months old.",
            },
            {
              title: "The website can't be found",
              body: "One page, a phone number, and a gallery. Nothing that matches a search for a deshedding appointment in a specific town, so nothing ranks for one.",
            },
            {
              title: "Nobody's asking for reviews",
              body: "Dozens of happy clients a week, and no repeatable moment where any of them are asked to leave a Google review.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-tf-border bg-white p-5">
              <h3 className="font-semibold text-tf-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-tf-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-base leading-relaxed text-tf-ink-soft">
          None of those are hard problems. They are just nobody&rsquo;s job. Read how the pieces fit together in{" "}
          <Link href={PATHS.marketing} className="font-medium text-tf-brown-dark underline underline-offset-4">
            our guide to dog groomer marketing
          </Link>
          .
        </p>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 5. THE SYSTEM                                                     */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-14" labelledBy="system">
        <SectionHeading
          eyebrow="The Tongfluence system"
          id="system"
          title="Four parts, built to reinforce each other."
          intro="They are sold together because they work together. An optimized profile sends people to a website that has a page about the exact thing they searched for; that page gets them to call; the appointment produces a review; the review makes the profile rank better. Break one link and the others do less."
        />
        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {offer.inclusions.map((item, i) => {
            const Icon = systemIcons[i];
            return (
              <li key={item.number} className="rounded-3xl border border-tf-border bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tf-brown-wash text-tf-brown-dark">
                    <Icon />
                  </span>
                  <span className="font-tf-mono text-sm font-semibold text-tf-brown">{item.number}</span>
                </div>
                <h3 className="mt-4 font-tf-display text-lg font-bold text-tf-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tf-ink-soft">{item.summary}</p>
                <Link
                  href={item.href}
                  className="mt-3 inline-block text-sm font-semibold text-tf-brown-dark underline underline-offset-4 hover:text-tf-brown-darker"
                >
                  {item.linkLabel}
                </Link>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 6. WHY GROOMERS SPECIFICALLY                                      */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-14" labelledBy="specialised">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <SectionHeading
              eyebrow="Why only groomers"
              id="specialised"
              title="A general agency starts from zero. We start from the twentieth grooming website."
              intro={
                <>
                  Specialising is not a positioning trick — it is the reason the work is fast enough to cost
                  ${offer.priceNumeric} a month. The page structure, the profile checklist and the review flow
                  already exist because we have built them {buildStats.siteCount} times for grooming
                  businesses. You are not paying for someone&rsquo;s learning curve.
                </>
              }
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {audienceTypes.map((a) => (
                <div key={a.title} className="rounded-2xl border border-tf-border bg-white p-4">
                  <h3 className="text-sm font-semibold text-tf-ink">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{a.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-tf-border bg-white p-6 sm:p-7">
            <h3 className="font-tf-display text-lg font-bold text-tf-ink">
              The difference, concretely
            </h3>
            <ul className="mt-5 space-y-5">
              {specialisation.map((row) => (
                <li key={row.generic} className="grid gap-2 border-b border-tf-border pb-5 last:border-0 last:pb-0">
                  <p className="flex items-start gap-2.5 text-sm text-tf-ink-soft">
                    <CrossIcon className="mt-0.5 h-4 w-4 shrink-0 text-tf-ink-soft" />
                    <span>
                      <span className="font-medium text-tf-ink-soft">A general agency: </span>
                      {row.generic}
                    </span>
                  </p>
                  <p className="flex items-start gap-2.5 text-sm text-tf-ink">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-tf-brown-dark" />
                    <span>
                      <span className="font-semibold">Tongfluence: </span>
                      {row.specific}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 7. HOW IT WORKS                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-14" labelledBy="how">
        <SectionHeading eyebrow="How it works" id="how" title="What the first month actually looks like." />
        <ol className="mt-8 space-y-4">
          {howItWorks.map((s) => (
            <li key={s.step} className="grid gap-2 rounded-2xl border border-tf-border bg-white p-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
              <p className="font-tf-mono text-sm font-semibold text-tf-brown">{s.step}</p>
              <div>
                <h3 className="font-semibold text-tf-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <AnswerBlock label="How long until it works">
          <p>
            Google Business Profile changes can show up within a few weeks. Website and organic search take
            longer: about 28 days after launch before Search Console holds enough data to read, and a few
            months before the direction is clear. Anyone promising page one in 30 days is guessing.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 8. CASE STUDIES                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-14" labelledBy="work">
        <SectionHeading
          eyebrow="The work"
          id="work"
          title="Real grooming builds, broken down."
          intro="Each of these is a full write-up: what the business had, what was structurally wrong, exactly what we built, and what we are still waiting to be able to measure."
        />
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {caseStudyBuilds.map((b) => (
            <li key={b.slug}>
              <CaseStudyCard build={b} location="home_case_studies" />
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <SecondaryCTA href={PATHS.caseStudies} label="See all builds" location="home_case_studies" variant="quiet" />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 9. THE OFFER                                                      */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-14" labelledBy="pricing-heading" id="pricing">
        <SectionHeading
          eyebrow="Pricing"
          id="pricing-heading"
          title={`Everything above, ${offer.priceLine}.`}
          intro="One price, one invoice, no tiers. You are not upsold a “growth plan” in month three."
        />
        <PricingCard location="home" className="mt-8" />
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 10. OBJECTIONS                                                     */}
      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-14" labelledBy="objections">
        <SectionHeading
          eyebrow="Straight answers"
          id="objections"
          title="The things groomers actually push back on."
        />
        <dl className="mt-8 space-y-6">
          {objections.map((o) => (
            <div key={o.question} className="border-l-2 border-tf-brown/40 pl-5">
              <dt className="font-tf-display text-lg font-bold text-tf-ink">{o.question}</dt>
              <dd className="mt-2 text-base leading-relaxed text-tf-ink-soft">{o.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 11. FAQ                                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-14">
        <FaqBlock items={faqs} />
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 12. FINAL CTA                                                     */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-14">
        <CtaBand location="home_footer" />
      </Section>
    </>
  );
}
