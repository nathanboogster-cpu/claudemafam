import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { CtaBand } from "@/components/CtaBand";
import { FaqBlock } from "@/components/FaqBlock";
import { BrandArt } from "@/components/BrandArt";
import { JsonLd, webSiteSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import {
  business,
  market,
  services,
  supportingServices,
  servicePath,
  PATHS,
  mobileBenefits,
  howItWorks,
  hoursNote,
} from "@/lib/site-data";
import { homeFaqs } from "@/lib/faq-data";
import { CheckIcon, VanIcon, HomeIcon, PawIcon, CatIcon, FacebookIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: `Mobile Pet Grooming in ${market.cityState} | ${business.name}`,
  description:
    `Mobile dog and cat grooming in the ${market.cityState} area — your groomer comes to your home, so there's no drop-off and no waiting room. ` +
    `Call ${business.phoneDisplay} to book.`,
  path: PATHS.home,
  titleTemplate: false,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={webSiteSchema()} />

      {/* ------------------------------------------------------------------
          1. HERO — answers what / how / where / what next above the fold.
          ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-goc-cream">
        <div className="goc-blob -left-24 -top-16 h-80 w-80 bg-goc-magenta/25" aria-hidden="true" />
        <div className="goc-blob -right-20 top-40 h-80 w-80 bg-goc-orange/30" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="goc-rise">
              <Eyebrow>Mobile Pet Grooming · We Come To You</Eyebrow>
            </div>
            <h1 className="goc-rise goc-rise-1 mt-3 font-goc-display text-4xl font-extrabold leading-[1.05] text-goc-ink sm:text-5xl lg:text-6xl">
              Mobile Pet Grooming in{" "}
              <span className="text-goc-magenta-darker">{market.cityState}</span>
            </h1>
            <p className="goc-rise goc-rise-2 mt-5 max-w-xl text-lg leading-relaxed text-goc-ink-soft sm:text-xl">
              Professional dog and cat grooming brought directly to your home. No car ride, no drop-off, no waiting
              room — your groomer comes to you.
            </p>

            <div className="goc-rise goc-rise-3 mt-8 flex flex-wrap gap-3">
              <CallButton location="hero" label="Call To Book" />
              <SecondaryLinkButton href={PATHS.services} label="View Services" />
            </div>

            <p className="mt-4 text-sm font-semibold text-goc-ink-soft">
              Call {business.phoneDisplay} · {hoursNote}
            </p>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {[
                "Your groomer travels to your address",
                "Dogs and cats",
                "Full grooms, baths, nails and ears",
                "No salon visit, ever",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-goc-ink">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-goc-magenta-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <BrandArt scene="route" aspect="wide" className="shadow-xl shadow-black/5" />
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border-2 border-goc-border bg-white p-4 shadow-lg sm:left-8 sm:right-8">
              <p className="flex items-center justify-center gap-2 text-center font-goc-display text-base font-extrabold text-goc-ink">
                <VanIcon className="h-5 w-5 text-goc-magenta-dark" />
                100% mobile — there is no salon to visit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2. QUICK TRUST BAR
          ------------------------------------------------------------------ */}
      <div className="goc-dark border-y border-black/10 bg-goc-ink text-white">
        <ul className="mx-auto grid max-w-6xl gap-4 px-4 py-7 sm:grid-cols-3">
          {[
            { Icon: HomeIcon, label: "Groomed at home", sub: "We arrive at your address" },
            { Icon: PawIcon, label: "Dogs & cats", sub: "Grooming, baths, nails, ears" },
            { Icon: PinIcon, label: `${market.cityState} area`, sub: "Call to confirm we reach you" },
          ].map(({ Icon, label, sub }) => (
            <li key={label} className="flex items-center gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-goc-orange">
                <Icon className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-goc-display text-base font-extrabold">{label}</span>
                <span className="block text-sm text-white/65">{sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ------------------------------------------------------------------
          3. SERVICES
          ------------------------------------------------------------------ */}
      <Section tone="cream" id="services">
        <SectionHeading
          eyebrow="Grooming Services"
          title="What Groomer On Call Does"
          intro="Every one of these happens at your home. Not sure which your pet needs? Describe the coat on the phone and we'll tell you straight."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              name={service.name}
              summary={service.summary}
              featured={service.isPrimary}
            />
          ))}
        </div>
        <div className="mt-8 rounded-3xl border-2 border-goc-border bg-white p-6 sm:p-8">
          <h3 className="font-goc-display text-lg font-extrabold text-goc-ink">Included alongside a groom</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {supportingServices.map((s) => (
              <li key={s.name} className="flex items-start gap-2.5">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-goc-magenta-dark" />
                <span>
                  <Link
                    href={servicePath(s.onPage)}
                    className="inline-block py-0.5 font-bold text-goc-ink underline-offset-4 hover:text-goc-magenta-darker hover:underline"
                  >
                    {s.name}
                  </Link>
                  <span className="block text-sm text-goc-ink-soft">{s.summary}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ------------------------------------------------------------------
          4. WHY MOBILE GROOMING
          ------------------------------------------------------------------ */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <BrandArt scene="bath" aspect="wide" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Why Mobile"
              title="Grooming That Comes To Your Door"
              intro="The grooming is the same professional grooming. What changes is everything around it."
            />
            <ul className="mt-8 space-y-5">
              {mobileBenefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-4">
                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-goc-cream-deep text-goc-magenta-darker">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-goc-display text-lg font-extrabold text-goc-ink">{benefit.title}</span>
                    <span className="mt-1 block leading-relaxed text-goc-ink-soft">{benefit.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------
          5. HOW IT WORKS
          ------------------------------------------------------------------ */}
      <Section tone="deep">
        <SectionHeading
          eyebrow="How It Works"
          title="Three Steps To A Groomed Pet"
          intro="No account to create, no app to download. You call, we agree a time, we come to you."
          align="center"
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {howItWorks.map((step) => (
            <li key={step.step} className="relative rounded-3xl border-2 border-goc-border bg-white p-7">
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
        <div className="mt-10 flex justify-center">
          <CallButton location="how_it_works" label={`Start With A Call — ${business.phoneDisplay}`} />
        </div>
      </Section>

      {/* ------------------------------------------------------------------
          6. DOG + CAT SERVICE DETAIL
          ------------------------------------------------------------------ */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Dogs & Cats"
          title="What We Groom"
          intro="Being straight about scope saves everyone a wasted phone call — so here is exactly what is and isn't offered."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border-2 border-goc-border bg-goc-cream p-7 sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-goc-magenta-darker">
              <PawIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-goc-display text-2xl font-extrabold text-goc-ink">Dog Grooming</h3>
            <p className="mt-2 leading-relaxed text-goc-ink-soft">
              The full range, at your home — from a complete groom with a haircut down to a quick nail trim on its own.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Full-service grooming",
                "Grooming and styling",
                "Bathing and blow dry",
                "Nail trimming",
                "Ear cleaning",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-semibold text-goc-ink">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-goc-magenta-dark" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={servicePath("mobile-dog-grooming")}
              className="mt-6 inline-flex min-h-11 items-center gap-1.5 font-bold text-goc-magenta-darker underline-offset-4 hover:underline"
            >
              Mobile dog grooming in {market.cityState} →
            </Link>
          </article>

          <article className="rounded-3xl border-2 border-goc-border bg-goc-cream p-7 sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-goc-magenta-darker">
              <CatIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-goc-display text-2xl font-extrabold text-goc-ink">Cat Grooming Care</h3>
            <p className="mt-2 leading-relaxed text-goc-ink-soft">
              Cats are welcome — for bathing and ear cleaning. We would rather tell you that up front than have you
              book for something we don&rsquo;t do.
            </p>
            <ul className="mt-5 space-y-2.5">
              <li className="flex items-start gap-2.5 font-semibold text-goc-ink">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-goc-magenta-dark" />
                Cat bathing
              </li>
              <li className="flex items-start gap-2.5 font-semibold text-goc-ink">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-goc-magenta-dark" />
                Cat ear cleaning
              </li>
            </ul>
            <p className="mt-4 rounded-2xl bg-white p-4 text-sm leading-relaxed text-goc-ink-soft">
              Cat haircuts, shave-downs, de-matting and cat nail trims are not currently part of the service.
            </p>
            <Link
              href={servicePath("mobile-cat-bathing")}
              className="mt-6 inline-flex min-h-11 items-center gap-1.5 font-bold text-goc-magenta-darker underline-offset-4 hover:underline"
            >
              Mobile cat bathing &amp; ear cleaning →
            </Link>
          </article>
        </div>
      </Section>

      {/* ------------------------------------------------------------------
          7. SERVICE AREA
          ------------------------------------------------------------------ */}
      <Section tone="deep">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Service Area"
              title={`Serving The ${market.cityState} Area`}
              intro={`Groomer On Call is a mobile service, so the question isn't whether there's a salon near you — it's whether we travel to your address. Coverage runs out from the ${market.city} area, including nearby ${market.nearbyCity}.`}
            />
            <p className="mt-5 max-w-xl leading-relaxed text-goc-ink-soft">
              Rather than list towns we may or may not reach on any given week, we&rsquo;d rather you just ask. Call and
              we&rsquo;ll tell you in one sentence whether we come to you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CallButton location="service_area" label="Ask If We Reach You" />
              <SecondaryLinkButton href={PATHS.serviceAreas} label="About Our Service Area" />
            </div>
          </div>
          <div className="rounded-3xl border-2 border-goc-border bg-white p-7">
            <h3 className="font-goc-display text-lg font-extrabold text-goc-ink">Booking at a glance</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex gap-3">
                <dt className="sr-only">Phone</dt>
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-goc-magenta-dark" />
                <dd>
                  <a
                    href={business.phoneHref}
                    data-goc-event="call_click"
                    data-goc-location="home_at_a_glance"
                    className="text-lg font-extrabold text-goc-ink underline-offset-4 hover:text-goc-magenta-darker hover:underline"
                  >
                    {business.phoneDisplay}
                  </a>
                  <span className="block text-goc-ink-soft">Call to book — this is how appointments are made.</span>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="sr-only">Location</dt>
                <VanIcon className="mt-0.5 h-5 w-5 shrink-0 text-goc-magenta-dark" />
                <dd className="text-goc-ink-soft">
                  <span className="font-bold text-goc-ink">100% mobile.</span> We come to your home — there is no
                  storefront and no address to visit.
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="sr-only">Availability</dt>
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-goc-magenta-dark" />
                <dd className="text-goc-ink-soft">{hoursNote}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------
          8. REAL RESULTS / SOCIAL PROOF
          Deliberately a link to the business's own real, current Facebook
          page rather than testimonials or photos. Nothing on this site
          invents a review, a rating, or a grooming photo.
          ------------------------------------------------------------------ */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <BrandArt scene="tools" aspect="wide" />
          <div>
            <SectionHeading
              eyebrow="See The Work"
              title="Real Grooms, On Facebook"
              intro="Groomer On Call posts real grooming work to its Facebook page. That's the honest place to see finished dogs and what customers say — rather than a wall of testimonials on a website."
            />
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-goc-event="facebook_click"
              data-goc-location="home_social_proof"
              className="mt-7 inline-flex min-h-12 items-center gap-2.5 rounded-full border-2 border-goc-ink/15 bg-white px-6 py-3 text-base font-bold text-goc-ink hover:border-goc-magenta-dark hover:text-goc-magenta-darker"
            >
              <FacebookIcon className="h-5 w-5" />
              Groomer On Call on Facebook
            </a>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------
          9. ABOUT
          ------------------------------------------------------------------ */}
      <Section tone="cream">
        <div className="rounded-3xl border-2 border-goc-border bg-white p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="About"
                title="A Groomer Who Comes To You"
                intro="Groomer On Call is a mobile pet grooming service. The whole model is built around one idea: the grooming should happen where your pet already lives, instead of your pet being transported to where the grooming is."
              />
              <p className="mt-5 max-w-2xl leading-relaxed text-goc-ink-soft">
                That means no morning drop-off, no afternoon pick-up, and no room full of unfamiliar animals. You book
                a time, you&rsquo;re home, and your pet is groomed at your address by the groomer you spoke to on the
                phone.
              </p>
              <SecondaryLinkButton href={PATHS.about} label="More About Groomer On Call" className="mt-7" />
            </div>
            <div className="goc-route h-1 w-full lg:hidden" aria-hidden="true" />
            <BrandArt scene="cat" aspect="square" className="hidden lg:block" />
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------
          10. FAQ
          Visible answers only — the FAQPage structured data lives on /faq so
          a single entity owns it rather than two pages competing for it.
          ------------------------------------------------------------------ */}
      <Section tone="deep">
        <SectionHeading
          eyebrow="Common Questions"
          title="Before You Call"
          intro="The things people most often want to know before booking a mobile groomer."
          align="center"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqBlock faqs={homeFaqs} />
          <div className="mt-8 text-center">
            <SecondaryLinkButton href={PATHS.faq} label="All Frequently Asked Questions" />
          </div>
        </div>
      </Section>

      <CtaBand location="home_footer_cta" secondary={{ href: PATHS.services, label: "See All Services" }} />
    </>
  );
}
