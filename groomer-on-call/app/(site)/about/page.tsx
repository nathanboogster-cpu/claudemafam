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
import { business, market, PATHS, SITE_URL, servicePath, howItWorks, hoursNote } from "@/lib/site-data";
import { FacebookIcon, CheckIcon } from "@/components/icons";

// -----------------------------------------------------------------------------
// The brief is explicit: do not fabricate a biography. No owner name, years of
// experience, certifications, training history, founding date or personal
// story appears on this page, because none of it has been verified for this
// build. What IS here is the verified business model and an honest account of
// how the service works — which is what actually builds trust anyway.
//
// See README "Open items before launch" for the owner/story details to collect.
// -----------------------------------------------------------------------------

export const metadata: Metadata = pageMetadata({
  title: `About ${business.name} — ${market.city} Mobile Grooming`,
  description:
    `Groomer On Call is a mobile pet grooming service in the ${market.cityState} area. Dogs and cats are groomed at home — no salon, no drop-off. ` +
    `Call ${business.phoneDisplay}.`,
  path: PATHS.about,
  titleTemplate: false,
});

const crumbs = [
  { name: "Home", href: PATHS.home },
  { name: "About", href: PATHS.about },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href === "/" ? "" : c.href}` })))}
      />
      <Breadcrumbs items={crumbs} />

      <section className="relative overflow-hidden bg-goc-cream">
        <div className="goc-blob -right-24 -top-16 h-72 w-72 bg-goc-orange/30" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>About Groomer On Call</Eyebrow>
            <h1 className="mt-3 font-goc-display text-4xl font-extrabold leading-[1.06] text-goc-ink sm:text-5xl">
              A Groomer Who Comes To You
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-goc-ink-soft">
              Groomer On Call is a mobile pet grooming service in the {market.cityState} area. The whole business is
              built around one idea: grooming should happen where your pet already lives, instead of your pet being
              transported to where the grooming is.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton location="about_hero" label="Call To Book" />
              <SecondaryLinkButton href={PATHS.services} label="View Services" />
            </div>
          </div>
          <BrandArt scene="route" aspect="wide" className="shadow-xl shadow-black/5" />
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="The Idea" title="Why Mobile" />
            <div className="mt-6 space-y-4 leading-relaxed text-goc-ink-soft">
              <p>
                For most households, the grooming itself was never the hard part. The hard part was everything around
                it — getting a dog into the car, driving across town, dropping them off before work, finding a second
                slot in the day to collect them, and a pet who spent far longer at the salon than the groom actually
                took.
              </p>
              <p>
                Going mobile removes all of that. You book a time. You&rsquo;re home. Your groomer arrives at your
                address, grooms your pet there, and leaves. The grooming is the same professional grooming; the day
                around it is completely different.
              </p>
              <p>
                It also means the person you spoke to on the phone is the person who turns up and does the work, start
                to finish. Nothing is handed off mid-groom.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-goc-border bg-goc-cream p-7 sm:p-8">
            <h2 className="font-goc-display text-xl font-extrabold text-goc-ink">The essentials</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-bold uppercase tracking-wider text-goc-magenta-darker">Business</dt>
                <dd className="mt-1 text-lg font-extrabold text-goc-ink">{business.name}</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-wider text-goc-magenta-darker">Type</dt>
                <dd className="mt-1 text-goc-ink-soft">
                  Pet groomer — 100% mobile. No salon, no waiting room, no public address.
                </dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-wider text-goc-magenta-darker">Serving</dt>
                <dd className="mt-1 text-goc-ink-soft">
                  The {market.cityState} area, including nearby {market.nearbyCity}.{" "}
                  <Link href={PATHS.serviceAreas} className="font-bold text-goc-magenta-darker underline underline-offset-4">
                    Check if we reach you
                  </Link>
                  .
                </dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-wider text-goc-magenta-darker">Booking</dt>
                <dd className="mt-1 text-goc-ink-soft">
                  By phone —{" "}
                  <a
                    href={business.phoneHref}
                    data-goc-event="call_click"
                    data-goc-location="about_essentials"
                    className="font-extrabold text-goc-ink underline underline-offset-4"
                  >
                    {business.phoneDisplay}
                  </a>
                  . {hoursNote}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="What To Expect"
          title="How An Appointment Goes"
          intro="No account to create, no app to download."
          align="center"
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {howItWorks.map((step) => (
            <li key={step.step} className="rounded-3xl border-2 border-goc-border bg-white p-7">
              <span
                aria-hidden="true"
                className="grid h-12 w-12 place-items-center rounded-2xl bg-goc-magenta-dark font-goc-display text-xl font-extrabold text-white"
              >
                {step.step}
              </span>
              <h3 className="mt-5 font-goc-display text-xl font-extrabold text-goc-ink">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-goc-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="How We Work" title="Straight Answers, Before You Book" />
            <ul className="mt-7 space-y-4">
              {[
                {
                  title: "We'll tell you which service you actually need",
                  body: "If your dog doesn't need a haircut, you'll be pointed at a bath rather than sold a full groom.",
                },
                {
                  title: "We're clear about what isn't offered",
                  body: "Cat services are bathing and ear cleaning. Cat haircuts, shave-downs, de-matting and cat nail trims aren't part of the service, and you'll be told that before you book, not after.",
                },
                {
                  title: "Matting gets discussed, not discovered",
                  body: "If a coat can't safely be taken to the length you had in mind in one appointment, you'll hear that before it happens.",
                },
                {
                  title: "Some things are a vet's job",
                  body: "If something about your pet's skin, ears or coat looks wrong rather than just overdue, you'll be told to see a vet. A grooming appointment should never be the thing standing between your pet and that.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3.5">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-goc-magenta-dark" />
                  <span>
                    <span className="block font-goc-display text-lg font-extrabold text-goc-ink">{item.title}</span>
                    <span className="mt-1 block leading-relaxed text-goc-ink-soft">{item.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="See The Work" title="Real Grooms, On Facebook" />
            <p className="mt-5 leading-relaxed text-goc-ink-soft">
              Groomer On Call posts real grooming work to its Facebook page. That&rsquo;s the honest place to see
              finished dogs and what customers actually say — rather than a page of testimonials on a website you
              can&rsquo;t check.
            </p>
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-goc-event="facebook_click"
              data-goc-location="about"
              className="mt-6 inline-flex min-h-12 items-center gap-2.5 rounded-full border-2 border-goc-ink/15 bg-white px-6 py-3 text-base font-bold text-goc-ink hover:border-goc-magenta-dark hover:text-goc-magenta-darker"
            >
              <FacebookIcon className="h-5 w-5" />
              Groomer On Call on Facebook
            </a>
            <div className="mt-8 rounded-3xl border-2 border-goc-border bg-goc-cream p-6">
              <h3 className="font-goc-display text-lg font-extrabold text-goc-ink">Start here</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href={servicePath("mobile-dog-grooming")} className="inline-block py-1 font-bold text-goc-magenta-darker underline-offset-4 hover:underline">
                    Mobile dog grooming in {market.cityState}
                  </Link>
                </li>
                <li>
                  <Link href={servicePath("mobile-cat-bathing")} className="inline-block py-1 font-bold text-goc-magenta-darker underline-offset-4 hover:underline">
                    Mobile cat bathing &amp; ear cleaning
                  </Link>
                </li>
                <li>
                  <Link href={PATHS.faq} className="inline-block py-1 font-bold text-goc-magenta-darker underline-offset-4 hover:underline">
                    Frequently asked questions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand location="about_footer" secondary={{ href: PATHS.serviceAreas, label: "Do You Come To Me?" }} />
    </>
  );
}
