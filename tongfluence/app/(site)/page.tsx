import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, offer, faqs, audienceTypes, business, explainerVideo, headlineResult } from "@/lib/site-data";
import { caseStudyBuilds, buildStats } from "@/lib/client-builds";
import { JsonLd, faqSchema, serviceSchema, videoSchema } from "@/lib/schema";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
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
import { SearchIcon, MapPinIcon, StarIcon, ChartIcon, CheckIcon, CrossIcon, ScissorsIcon, GlobeIcon, PawIcon } from "@/components/icons";

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
const audienceIcons = [MapPinIcon, GlobeIcon, ScissorsIcon, PawIcon];

// The homepage answers six questions and links out for everything else. The
// FAQ page holds the full list; these are the six a first-time visitor asks.
const homeFaqQuestions = [
  "What does Tongfluence actually do?",
  "How much does it cost?",
  "Is there a contract?",
  "How long does SEO take?",
  "Does this work for mobile grooming?",
  "Do you run ads too?",
];
const homeFaqs = faqs.filter((f) => homeFaqQuestions.includes(f.question));

const howItWorks = [
  { step: "Week 1", title: "We look at what you have", body: "Your Google profile, your site, your services and prices." },
  { step: "Weeks 1–3", title: "Profile first, then the site", body: "The profile moves fastest. The site is built alongside it. One page per service, one per town." },
  { step: "Launch", title: "Live and measured", body: "The site goes live. Search Console is connected. You get the review system." },
  { step: "Every month", title: "One change at a time", body: "We read your search data, find the biggest gap, and fix it." },
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
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
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
      <Section className="pt-8 pb-10 sm:pt-12">
        {/* Three cells. On a phone they stack in DOM order: headline, then the
            video, then the call to action and the trust pills, so the first
            screen is the claim and the first swipe is the proof. On desktop the
            video sits to the right of both text cells. */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-6">
          <div className="lg:col-start-1 lg:row-start-1">
            <Reveal>
              <Eyebrow>For grooming businesses only</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-4 font-tf-display text-[2.15rem] font-bold leading-[1.05] tracking-[-0.02em] text-tf-ink sm:text-6xl lg:text-[3.6rem]">
                Get more dog grooming appointments <span className="tf-accent">from Google.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-tf-ink-soft sm:text-lg">
                Someone in your town searches <em>dog groomer near me</em>. Three businesses show up on the
                map. One gets the call. We make that business you.
              </p>
            </Reveal>
          </div>

          {/* The walkthrough video is the hero visual: the first thing a visitor
              sees after the headline answers "what do you actually do?". The
              result chip links down to the measured figures. */}
          <Reveal className="tf-reveal-photo lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center" delay={120}>
            <figure className="relative m-0">
              <ExplainerVideo location="home_hero" />
              {headlineResult ? (
                <a
                  href="#measured"
                  className="tf-lift absolute -right-1 -top-4 rounded-xl border border-white/10 bg-tf-ink px-3.5 py-2.5 text-white shadow-lg sm:-right-4 sm:-top-5 sm:px-4 sm:py-3"
                >
                  <span className="tf-caps block text-xs text-tf-bronze-light">Calls from Google</span>
                  <span className="mt-1 block font-tf-display text-xl font-bold leading-none sm:text-2xl">
                    {gbpCallsProof.before.calls} <span className="tf-accent">→</span> {gbpCallsProof.after.calls}
                  </span>
                  <span className="mt-1 block text-xs text-white/70">one client, in one month</span>
                </a>
              ) : null}
              <figcaption className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-tf-ink-soft">
                <span className="tf-caps text-xs text-tf-brown">Watch · {explainerVideo.durationLabel}</span>
                <span>Exactly what we do, start to finish.</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-start-1 lg:row-start-2">
            <Reveal delay={180}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <BookCallButton location="hero" />
                <SecondaryCTA href={PATHS.testimonials} label="See client results" location="hero" />
              </div>
            </Reveal>
            <TrustPills className="mt-6" />
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 2b. THE MEASURED RESULT                                           */}
      {/* ---------------------------------------------------------------- */}
      {headlineResult ? (
        <Section width="narrow" className="pt-2 pb-16" labelledBy="measured">
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
            intro="Word for word, from their emails and texts."
          />
        </Reveal>
        <div className="mt-8">
          <Testimonials />
        </div>
          <p className="mt-6 text-sm">
            <Link href={PATHS.testimonials} className="inline-block py-2 font-medium text-tf-brown-dark underline underline-offset-4">
              All testimonials, with the originals
            </Link>
          </p>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 2d. WHAT THE PRICE COVERS, with the client-groomed dogs on desktop. */}
      {/* ---------------------------------------------------------------- */}
      <Section className="pb-16" as="div">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <Reveal className="rounded-2xl border border-tf-border bg-tf-card p-6 sm:p-7" delay={60}>
            <h2 id="hero-included" className="font-tf-display text-xl font-bold text-tf-ink">
              What {offer.priceLine} covers
            </h2>
            <p className="mt-1 text-sm text-tf-ink-soft">
              One price, one bill. No setup fee. No build fee. No charge for pages we add later.
            </p>
            <ol className="mt-6 grid gap-5 sm:grid-cols-2">
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
                        className="mt-0.5 inline-block py-1.5 text-xs text-tf-ink-soft underline underline-offset-4 hover:text-tf-brown-dark"
                      >
                        {item.linkLabel}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* Real dogs, groomed by real clients. Desktop only: on a phone the
              proof above matters more than a photo, and the dog strip further
              down carries the photos there. */}
          <Reveal className="tf-reveal-photo hidden lg:block" delay={120}>
            <figure className="relative m-0">
              <Image
                src={heroDogPhoto.src}
                alt={heroDogPhoto.alt}
                width={heroDogPhoto.width}
                height={heroDogPhoto.height}
                sizes="(min-width: 1024px) 34vw, 0px"
                className="aspect-[4/3] h-auto w-full rounded-2xl border border-tf-border object-cover object-top"
              />
              <div className="absolute -bottom-5 -left-4 w-32 -rotate-3 overflow-hidden rounded-xl border-4 border-white shadow-lg">
                <Image
                  src={heroDetailPhoto.square}
                  alt={heroDetailPhoto.alt}
                  width={560}
                  height={560}
                  sizes="8rem"
                  className="aspect-square h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-8 pl-32 text-xs text-tf-ink-soft">
                Groomed at {heroDogPhoto.credit}. Real client photos on every page. No stock photos.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 3. THE CLIENTS — names and markets, then their dogs.              */}
      {/* ---------------------------------------------------------------- */}
      <Section className="pb-14">
        <ProofStrip />
      </Section>

      <Section className="pb-16" as="div">
        <Reveal>
          <p className="tf-caps flex items-center gap-3 text-xs text-tf-brown">
            <span aria-hidden="true" className="tf-rule block h-px w-5 bg-current" />
            Groomed by our clients
          </p>
          <div className="mt-4">
            <DogStrip />
          </div>
          <p className="mt-3 text-xs text-tf-ink-soft">
            Real dogs from Bark and Bork Mobile Pet Spa and Pampered Puppies. No stock photos, anywhere.
          </p>
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 4. WHY GROOMERS SPECIFICALLY                                      */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-16" labelledBy="specialised" band>
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
                    The page layout, the profile checklist and the review system already exist. That is why
                    the work costs ${offer.priceNumeric} a month, not four times that.
                  </>
                }
              />
            </Reveal>
            <ul className="mt-6 flex flex-wrap gap-2">
              {audienceTypes.map((a, i) => {
                const Icon = audienceIcons[i];
                return (
                  <Reveal
                    as="li"
                    key={a.title}
                    delay={i * 70}
                    className="inline-flex items-center gap-2 rounded-full border border-tf-border bg-white px-4 py-2 text-sm font-semibold text-tf-ink"
                  >
                    <Icon className="h-4 w-4 text-tf-brown-dark" />
                    {a.title}
                  </Reveal>
                );
              })}
            </ul>
          </div>

          <Reveal className="rounded-2xl border border-tf-border bg-tf-card p-6 sm:p-7" delay={100}>
            <h3 className="font-tf-display text-lg font-bold text-tf-ink">The difference, concretely</h3>
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
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 5. HOW IT WORKS                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-14" labelledBy="how">
        <Reveal>
          <SectionHeading eyebrow="How it works" id="how" title="What the first month" accent="actually looks like." />
        </Reveal>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2">
          {howItWorks.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 80} className="rounded-xl border border-tf-border bg-tf-card p-5">
              <p className="tf-caps text-xs text-tf-brown">{s.step}</p>
              <h3 className="mt-2 font-semibold text-tf-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 6. CASE STUDIES                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-14" labelledBy="work">
        <Reveal>
          <SectionHeading
            eyebrow="The work"
            id="work"
            title="Real grooming builds,"
            accent="broken down."
            intro="What each business had, what was wrong, and exactly what we built."
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
      {/* 7. THE OFFER                                                      */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-14" labelledBy="pricing-heading" id="pricing">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            id="pricing-heading"
            title="Everything above,"
            accent={`${offer.priceLine}.`}
            intro="One price, one bill, no tiers."
          />
        </Reveal>
        <PricingCard location="home" className="mt-8" />
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 8. FAQ                                                            */}
      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-14">
        <FaqBlock
          items={homeFaqs}
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
      {/* 9. FINAL CTA                                                      */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-14">
        <CtaBand location="home_footer" />
      </Section>
    </>
  );
}
