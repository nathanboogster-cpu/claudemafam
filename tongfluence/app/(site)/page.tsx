import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, offer, faqs, audienceTypes, objections, business, explainerVideo, headlineResult } from "@/lib/site-data";
import { caseStudyBuilds, buildStats } from "@/lib/client-builds";
import { JsonLd, faqSchema, serviceSchema, videoSchema } from "@/lib/schema";
import { Section, SectionHeading, AnswerBlock, Eyebrow } from "@/components/Section";
import { BookCallButton, SecondaryCTA } from "@/components/CTAButton";
import { ProofStrip } from "@/components/ProofStrip";
import { GbpCallsProof } from "@/components/GbpCallsProof";
import { Testimonials } from "@/components/Testimonials";
import { TrustPills } from "@/components/TrustPills";
import { DogStrip } from "@/components/DogStrip";
import { heroDogPhoto, heroDetailPhoto } from "@/lib/dog-photos";
import { gbpCallsProof } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
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
    "We build the website, Google profile and review system that help dog groomers turn local searches into booked appointments. $297 a month, cancel any time.",
  path: PATHS.home,
});

const systemIcons = [SearchIcon, MapPinIcon, StarIcon, ChartIcon];

const howItWorks = [
  {
    step: "Week 1",
    title: "We look at what you already have",
    body: "Your Google profile. Your current website, if you have one. What you offer. Which towns you take clients from. You give us your services and prices. We do the rest.",
  },
  {
    step: "Weeks 1–3",
    title: "Profile first, then the site",
    body: "The profile work goes first because it moves fastest. Categories, services, service areas, hours and photos. We build the website at the same time. One page per service, one page per town.",
  },
  {
    step: "Launch",
    title: "Live, submitted, and measured",
    body: "The site goes live. We connect Google Search Console and check that Google can see every page. We hand you the review system so you can start asking clients at the next visit.",
  },
  {
    step: "Every month after",
    title: "One evidence-based change at a time",
    body: "We read your search data and your profile data. We find the biggest gap and fix it. A page that gets seen but not clicked gets a better title. A search you almost rank for gets a real page. That is the job.",
  },
];

const specialisation = [
  {
    generic: "Asks you what a full groom is",
    specific: "Knows a full groom, a bath and tidy, a deshed and a dematting are four different searches",
  },
  {
    generic: "Builds one page called “Services”",
    specific: "Builds one page per service, because that is how people search",
  },
  {
    generic: "Puts your address on a mobile grooming site",
    specific: "Knows a mobile groomer lists service areas, not a street address",
  },
  {
    generic: "Writes blog posts about “the importance of pet care”",
    specific: "Writes the page people are already searching for",
  },
  {
    generic: "Reports on views and “brand awareness”",
    specific: "Cares whether the phone rang",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={videoSchema({
          name: explainerVideo.title,
          description: explainerVideo.description,
          thumbnailUrl: explainerVideo.swatchUrl,
          uploadDate: explainerVideo.uploadDate,
          duration: explainerVideo.durationIso,
          embedUrl: explainerVideo.embedUrl,
          pagePath: PATHS.home,
        })}
      />
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
      <Section className="pt-10 pb-10 sm:pt-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>For grooming businesses only</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 font-tf-display text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-tf-ink sm:text-6xl lg:text-[3.6rem]">
                Get more dog grooming appointments <span className="tf-accent">from Google.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-tf-ink-soft">
                Someone in your town searches <em>dog groomer near me</em>. Three businesses show up on the
                map. One of them gets the call. We build the website, Google profile and review system that
                make that business you.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BookCallButton location="hero" />
                <SecondaryCTA href={PATHS.testimonials} label="See client results" location="hero" />
              </div>
            </Reveal>
            <TrustPills className="mt-8" />
          </div>

          {/* Real dogs, groomed by real clients, in place of a stock photo or a
              mocked-up dashboard. The floating figure links to the measured
              result further down. */}
          <Reveal className="tf-reveal-photo" delay={120}>
            <figure className="relative mx-auto mt-4 max-w-md lg:mt-0 lg:max-w-none">
              <Image
                src={heroDogPhoto.src}
                alt={heroDogPhoto.alt}
                width={heroDogPhoto.width}
                height={heroDogPhoto.height}
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                priority
                className="aspect-[4/5] h-auto w-full rounded-2xl border border-tf-border object-cover"
              />
              <div className="absolute -bottom-5 -left-3 w-28 -rotate-3 overflow-hidden rounded-xl border-4 border-white shadow-lg sm:-left-6 sm:w-36">
                <Image
                  src={heroDetailPhoto.square}
                  alt={heroDetailPhoto.alt}
                  width={560}
                  height={560}
                  sizes="9rem"
                  className="aspect-square h-auto w-full object-cover"
                />
              </div>
              {headlineResult ? (
                <a
                  href="#measured"
                  className="tf-lift absolute -right-2 top-5 rounded-xl border border-white/10 bg-tf-ink px-4 py-3 text-white shadow-lg sm:-right-5"
                >
                  <span className="tf-caps block text-[0.6rem] text-tf-bronze-light">Calls from Google</span>
                  <span className="mt-1 block font-tf-display text-2xl font-bold leading-none">
                    {gbpCallsProof.before.calls} <span className="tf-accent">→</span> {gbpCallsProof.after.calls}
                  </span>
                  <span className="mt-1 block text-[0.65rem] text-white/70">one client, in one month</span>
                </a>
              ) : null}
              <figcaption className="mt-8 pl-28 text-xs text-tf-ink-soft sm:pl-36">
                Groomed at {heroDogPhoto.credit}. Real client photos on every page. No stock photos.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 1b. WHAT THE PRICE COVERS — the offer, above the fold on desktop.  */}
      {/* ---------------------------------------------------------------- */}
      <Section className="pb-14" as="div">
        <Reveal className="rounded-2xl border border-tf-border bg-tf-card p-6 sm:p-7" delay={60}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h2 id="hero-included" className="font-tf-display text-lg font-bold text-tf-ink">
              What {offer.priceLine} covers
            </h2>
            <p className="text-xs text-tf-ink-soft">
              One price, one bill. No setup fee. No build fee. No charge for pages we add later.
            </p>
          </div>
          <ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offer.inclusions.map((item, i) => {
              const Icon = systemIcons[i];
              return (
                <li key={item.number} className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-tf-brown-dark">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-snug text-tf-ink">{item.title}</p>
                    <Link
                      href={item.href}
                      className="mt-1 inline-block text-xs text-tf-ink-soft underline underline-offset-4 hover:text-tf-brown-dark"
                    >
                      {item.linkLabel}
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 2. THE WALKTHROUGH — answers "what do you actually do" before    */}
      {/* the page starts arguing, which is the first thing a groomer      */}
      {/* wants to know and the thing text is worst at conveying.          */}
      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="pb-16" labelledBy="walkthrough">
        <Reveal>
          <SectionHeading
            eyebrow={`Watch · ${explainerVideo.durationLabel}`}
            id="walkthrough"
            title="Exactly what we do,"
            accent="start to finish."
            intro="A walk through what happens when a grooming business works with us. If you would rather read it, the same steps are written out further down this page."
            align="center"
          />
        </Reveal>
        <div className="mt-8">
          <ExplainerVideo location="home_hero" />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 2b. THE MEASURED RESULT                                           */}
      {/* ---------------------------------------------------------------- */}
      {headlineResult ? (
        <Section width="narrow" className="pb-16" labelledBy="measured">
          <Reveal>
            <SectionHeading eyebrow="Measured" id="measured" title="3× more calls from Google," accent="in one month." />
          </Reveal>
          <div className="mt-8">
            <GbpCallsProof location="home_walkthrough" />
          </div>
        </Section>
      ) : null}

      {/* ---------------------------------------------------------------- */}
      {/* 2c. WHAT CLIENTS SAY                                              */}
      {/* ---------------------------------------------------------------- */}
      <Section className="pb-16" labelledBy="testimonials">
        <Reveal>
          <SectionHeading
            eyebrow="What clients say"
            id="testimonials"
            title="In their own words,"
            accent="from their messages."
            intro="Quoted word for word from emails and texts. The real message is under each one."
          />
        </Reveal>
        <div className="mt-8">
          <Testimonials />
        </div>
          <p className="mt-6 text-sm">
            <Link href={PATHS.testimonials} className="font-medium text-tf-brown-dark underline underline-offset-4">
              All testimonials, with the originals
            </Link>
          </p>
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
      <Section width="narrow" className="py-16" labelledBy="problem" band>
        <Reveal>
          <SectionHeading
            eyebrow="The problem"
            id="problem"
            title="Most grooming businesses are invisible"
            accent="at the exact moment someone decides."
            intro={
              <>
                Grooming is a local business. Clients come back often and tell their friends. That is why so
                many groomers never build anything on Google. It works until referrals slow down. Or a
                competitor opens nearby. Or a chain starts paying for the top of the map.
              </>
            }
          />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "The profile is half-finished",
              body: "Right category, but no services listed. No service areas for a mobile business. Six photos from 2019. Four reviews, and the newest is a year and a half old.",
            },
            {
              title: "The website can't be found",
              body: "One page, a phone number and a gallery. Nothing that matches a search for deshedding in your town. So nothing ranks for it.",
            },
            {
              title: "Nobody's asking for reviews",
              body: "Dozens of happy clients a week. And no set moment when any of them are asked to leave a Google review.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-tf-border bg-tf-card p-5">
              <h3 className="font-semibold text-tf-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-tf-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-base leading-relaxed text-tf-ink-soft">
          None of these are hard problems. They are just nobody&rsquo;s job. Read how the pieces fit together in{" "}
          <Link href={PATHS.marketing} className="font-medium text-tf-brown-dark underline underline-offset-4">
            the marketing overview
          </Link>
          .
        </p>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 5. THE SYSTEM                                                     */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-14" labelledBy="system">
        <Reveal>
          <SectionHeading
            eyebrow="The Tongfluence system"
            id="system"
            title="Four parts,"
            accent="built to reinforce each other."
            intro="They come together because they work together. A good profile sends people to your website. The website has a page about the exact thing they searched for. That page gets them to call. The visit leads to a review. The review helps the profile rank better. Break one link and the others do less."
          />
        </Reveal>
        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {offer.inclusions.map((item, i) => {
            const Icon = systemIcons[i];
            return (
              <Reveal as="li" key={item.number} delay={i * 80} className="tf-lift rounded-2xl border border-tf-border bg-tf-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tf-paper text-tf-brown-dark">
                    <Icon />
                  </span>
                  <span className="font-tf-display text-xl font-bold leading-none text-tf-brown">{item.number}</span>
                </div>
                <h3 className="mt-4 font-tf-display text-lg font-bold text-tf-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tf-ink-soft">{item.summary}</p>
                <Link
                  href={item.href}
                  className="mt-3 inline-block text-sm font-semibold text-tf-brown-dark underline underline-offset-4 hover:text-tf-brown-darker"
                >
                  {item.linkLabel}
                </Link>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 6. WHY GROOMERS SPECIFICALLY                                      */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-14" labelledBy="specialised">
        <Reveal className="mb-10">
          <p className="tf-caps flex items-center gap-3 text-xs text-tf-brown">
            <span aria-hidden="true" className="tf-rule block h-px w-5 bg-current" />
            Groomed by our clients
          </p>
          <div className="mt-4">
            <DogStrip />
          </div>
          <p className="mt-3 text-xs text-tf-ink-soft">
            Dogs groomed at Bark and Bork Mobile Pet Spa and Pampered Puppies. Both are businesses we build for.
          </p>
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Why only groomers"
                id="specialised"
                title="A general agency starts from zero."
                accent={`We start with ${buildStats.siteCount} grooming sites behind us.`}
                intro={
                  <>
                    We only work with groomers. That is why the work is fast enough to cost ${offer.priceNumeric} a
                    month. The page layout, the profile checklist and the review system already exist. We have
                    built them {buildStats.siteCount} times for grooming businesses. You are not paying for
                    someone to learn on the job.
                  </>
                }
              />
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {audienceTypes.map((a) => (
                  <div key={a.title} className="rounded-xl border border-tf-border bg-tf-card p-4">
                    <h3 className="text-sm font-semibold text-tf-ink">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{a.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-tf-border bg-tf-card p-6 sm:p-7">
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
                        <span className="font-semibold">Us: </span>
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
        <Reveal>
          <SectionHeading eyebrow="How it works" id="how" title="What the first month" accent="actually looks like." />
        </Reveal>
          <ol className="mt-8 space-y-4">
            {howItWorks.map((s) => (
              <li key={s.step} className="grid gap-2 rounded-xl border border-tf-border bg-tf-card p-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
                <p className="tf-caps pt-1 text-[0.7rem] text-tf-brown">{s.step}</p>
                <div>
                  <h3 className="font-semibold text-tf-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <AnswerBlock label="How long until it works" className="mt-6">
            <p>
              Profile changes can show up within a few weeks. Website changes take longer. It is about 28
              days after launch before there is enough search data to read. It takes a few months to see the
              trend. Anyone promising page one in 30 days is guessing.
            </p>
          </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 8. CASE STUDIES                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-14" labelledBy="work">
        <Reveal>
          <SectionHeading
            eyebrow="The work"
            id="work"
            title="Real grooming builds,"
            accent="broken down."
            intro="Each one is a full write-up. What the business had, what was wrong, exactly what we built, and what we are still waiting to measure."
          />
        </Reveal>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {caseStudyBuilds.map((b, i) => (
            <Reveal as="li" key={b.slug} delay={i * 90}>
              <CaseStudyCard build={b} location="home_case_studies" />
            </Reveal>
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
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            id="pricing-heading"
            title="Everything above,"
            accent={`${offer.priceLine}.`}
            intro="One price, one bill, no tiers. Nobody sells you a “growth plan” in month three."
          />
        </Reveal>
        <PricingCard location="home" className="mt-8" />
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 10. OBJECTIONS                                                     */}
      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-16" labelledBy="objections" band>
        <Reveal>
          <SectionHeading
            eyebrow="Straight answers"
            id="objections"
            title="The things groomers"
            accent="actually push back on."
          />
        </Reveal>
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
        <FaqBlock
          items={faqs}
          intro={
            <>
              Video answers to the questions groomers ask most, plus the rest, are on{" "}
              <Link href={PATHS.faq} className="font-medium text-tf-brown-dark underline underline-offset-4">
                the FAQ page
              </Link>
              .
            </>
          }
        />
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
