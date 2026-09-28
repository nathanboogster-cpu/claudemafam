import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/Eyebrow";
import { Section, SectionHeading } from "@/components/Section";
import { FaqBlock } from "@/components/FaqBlock";
import { CallButton } from "@/components/CTAButton";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, market, services, servicePath, PATHS, SITE_URL, hoursNote } from "@/lib/site-data";
import { contactFaqs } from "@/lib/faq-data";
import { PhoneIcon, VanIcon, PinIcon, ClockIcon, FacebookIcon, CheckIcon } from "@/components/icons";

// -----------------------------------------------------------------------------
// This page must NOT look like a storefront contact page. There is no map, no
// "get directions", no street address, and no "visit us" language anywhere —
// Groomer On Call has no customer-facing location, and inventing one would be
// both false and a local-SEO liability.
//
// There is also no contact form: no form backend has been supplied, and a form
// that silently goes nowhere is worse than no form. Calling is the verified
// booking channel, so calling is what this page drives.
// -----------------------------------------------------------------------------

export const metadata: Metadata = pageMetadata({
  title: `Contact Groomer On Call — ${market.cityState}`,
  description:
    `Book mobile pet grooming in the ${market.cityState} area. Call ${business.phoneDisplay} — we come to your home, so there's no salon to visit.`,
  path: PATHS.contact,
});

const crumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Contact", href: PATHS.contact },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href === "/" ? "" : c.href}` })))}
      />
      <Breadcrumbs items={crumbs} />

      <section className="relative overflow-hidden bg-goc-cream">
        <div className="goc-blob -right-20 -top-16 h-72 w-72 bg-goc-orange/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:py-18">
          <Eyebrow>Contact · We Come To You</Eyebrow>
          <h1 className="mt-3 font-goc-display text-4xl font-extrabold leading-[1.06] text-goc-ink sm:text-5xl">
            Book Mobile Pet Grooming
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-goc-ink-soft">
            Appointments are made by phone. Call, say what kind of pet you have and roughly where you are, and
            you&rsquo;ll get a straight answer about what we can do and when.
          </p>
          <div className="mt-8 flex justify-center">
            <CallButton location="contact_hero" label={`Call ${business.phoneDisplay}`} />
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border-2 border-goc-magenta-dark bg-white p-7 shadow-lg shadow-goc-magenta-dark/10 sm:p-9">
            <h2 className="font-goc-display text-2xl font-extrabold text-goc-ink">Groomer On Call</h2>
            <p className="mt-1 font-bold uppercase tracking-wider text-goc-magenta-darker">Mobile Pet Grooming</p>

            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <dt className="sr-only">Phone</dt>
                <PhoneIcon className="mt-1 h-6 w-6 shrink-0 text-goc-magenta-dark" />
                <dd>
                  <a
                    href={business.phoneHref}
                    data-goc-event="call_click"
                    data-goc-location="contact_details"
                    className="font-goc-display text-3xl font-extrabold text-goc-ink underline-offset-4 hover:text-goc-magenta-darker hover:underline"
                  >
                    {business.phoneDisplay}
                  </a>
                  <span className="mt-1 block text-goc-ink-soft">
                    This is how appointments are made. There is no online booking system.
                  </span>
                </dd>
              </div>

              <div className="flex gap-4">
                <dt className="sr-only">Service model</dt>
                <VanIcon className="mt-1 h-6 w-6 shrink-0 text-goc-magenta-dark" />
                <dd>
                  <span className="block font-bold text-goc-ink">We come to you</span>
                  <span className="mt-1 block text-goc-ink-soft">
                    Groomer On Call is 100% mobile. There is no salon, no waiting room and no address to visit —
                    grooming happens at your home.
                  </span>
                </dd>
              </div>

              <div className="flex gap-4">
                <dt className="sr-only">Service area</dt>
                <PinIcon className="mt-1 h-6 w-6 shrink-0 text-goc-magenta-dark" />
                <dd>
                  <span className="block font-bold text-goc-ink">
                    Serving the {market.cityState} area, including nearby {market.nearbyCity}
                  </span>
                  <span className="mt-1 block text-goc-ink-soft">
                    Coverage depends on where exactly you are.{" "}
                    <Link href={PATHS.serviceAreas} className="font-bold text-goc-magenta-darker underline underline-offset-4">
                      More about our service area
                    </Link>
                    .
                  </span>
                </dd>
              </div>

              <div className="flex gap-4">
                <dt className="sr-only">Availability</dt>
                <ClockIcon className="mt-1 h-6 w-6 shrink-0 text-goc-magenta-dark" />
                <dd>
                  <span className="block font-bold text-goc-ink">Availability</span>
                  <span className="mt-1 block text-goc-ink-soft">{hoursNote}</span>
                </dd>
              </div>

              <div className="flex gap-4">
                <dt className="sr-only">Social</dt>
                <FacebookIcon className="mt-1 h-6 w-6 shrink-0 text-goc-magenta-dark" />
                <dd>
                  <a
                    href={business.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-goc-event="facebook_click"
                    data-goc-location="contact"
                    className="font-bold text-goc-ink underline underline-offset-4 hover:text-goc-magenta-darker"
                  >
                    Groomer On Call on Facebook
                  </a>
                  <span className="mt-1 block text-goc-ink-soft">Real grooming work, posted by the business.</span>
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <CallButton location="contact_card" label="Call To Book" className="w-full sm:w-auto" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-goc-border bg-goc-cream p-7">
              <h2 className="font-goc-display text-xl font-extrabold text-goc-ink">What to mention when you call</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "What kind of pet, and roughly what coat",
                  "How long since the last groom",
                  "Roughly where you are",
                  "Anything sensitive — a sore spot, a bad experience with nail trims, a recent illness",
                  "Whether the coat is matted",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-goc-magenta-dark" />
                    <span className="font-semibold text-goc-ink">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-goc-ink-soft">
                None of it has to be precise. It just means you get a useful answer on the first call.
              </p>
            </div>

            <div className="rounded-3xl border-2 border-goc-border bg-goc-cream p-7">
              <h2 className="font-goc-display text-xl font-extrabold text-goc-ink">Book a specific service</h2>
              <ul className="mt-5 space-y-2.5 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={servicePath(s.slug)}
                      className="inline-block py-1 font-bold text-goc-magenta-darker underline-offset-4 hover:underline"
                    >
                      {s.name} in {market.cityState} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading eyebrow="Before You Call" title="Quick Answers" align="center" />
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqBlock faqs={contactFaqs} />
        </div>
      </Section>

      <CtaBand location="contact_footer" secondary={{ href: PATHS.faq, label: "Full FAQ" }} />
    </>
  );
}
