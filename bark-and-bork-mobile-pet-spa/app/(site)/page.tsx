import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { BookButton, SecondaryLinkButton, CallButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { StatBand } from "@/components/StatBand";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceAreaCard } from "@/components/ServiceAreaCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PricingTable } from "@/components/PricingTable";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { FaqBlock } from "@/components/FaqBlock";
import { DogIcon, ScissorsIcon, DropletIcon, BrushIcon, ShieldCheckIcon, HeartIcon, CheckIcon } from "@/components/icons";
import {
  business,
  services,
  differentiators,
  serviceAreas,
  bathAndTidy,
  fullGroom,
  pricingNote,
  addOns,
  team,
  photos,
  servicePath,
  areaPath,
  PATHS,
} from "@/lib/site-data";

const serviceIcons: Record<string, React.ReactNode> = {
  "mobile-dog-grooming": <DogIcon className="h-6 w-6" />,
  "full-dog-grooming": <ScissorsIcon className="h-6 w-6" />,
  "bath-and-tidy": <DropletIcon className="h-6 w-6" />,
  deshedding: <BrushIcon className="h-6 w-6" />,
  dematting: <BrushIcon className="h-6 w-6" />,
  "flea-tick-treatment": <ShieldCheckIcon className="h-6 w-6" />,
  "anal-gland-expression": <HeartIcon className="h-6 w-6" />,
  "teeth-brushing": <BrushIcon className="h-6 w-6" />,
};

// Maps each addOns entry to its dedicated service page — De-Shedding's
// standalone page uses a different slug than its addOns entry.
const addOnLink: Record<string, string> = {
  "flea-tick-treatment": servicePath("flea-tick-treatment"),
  "anal-gland-expression": servicePath("anal-gland-expression"),
  "deshedding-addon": servicePath("deshedding"),
  "teeth-brushing": servicePath("teeth-brushing"),
};

const homeFaqs = [
  {
    question: "Is Bark and Bork mobile grooming?",
    answer:
      "Yes — Bark and Bork is entirely mobile. We bring the grooming setup directly to your home in Compton or throughout the greater Los Angeles area. We don't have a walk-in salon location.",
  },
  {
    question: "What areas do you service?",
    answer: `We're based in ${business.homeBase} and serve pet owners throughout ${business.broadMarket}. See our Service Areas page for specific cities.`,
  },
  {
    question: "How much does grooming cost?",
    answer: `Bath & Tidy starts at $${bathAndTidy.pricing.small.price.replace("$", "").replace("+", "")}+ and Full Groom starts at $${fullGroom.pricing.small.price
      .replace("$", "")
      .replace("+", "")}+ for small dogs, with pricing increasing by size. ${pricingNote}`,
  },
  {
    question: "How do I book an appointment?",
    answer: `Book online at ${business.bookingUrl} any day of the week, or call ${business.phoneDisplay}.`,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bb-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <Eyebrow>Compton • Greater Los Angeles • Mobile Dog Grooming</Eyebrow>
            <h1 className="mt-3 font-bb-display text-4xl font-bold leading-[1.05] text-bb-ink sm:text-5xl lg:text-6xl">
              Mobile Dog Grooming Brought to Your Door
            </h1>
            <p className="mt-5 max-w-xl text-lg text-bb-ink-soft">
              Bark and Bork Mobile Pet Spa is based in Compton and brings professional dog grooming directly to
              pet owners across greater Los Angeles — a convenient, more personal alternative to the traditional
              salon trip.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton location="hero" variant="primary" label="Book Mobile Grooming" />
              <SecondaryLinkButton location="hero" variant="secondary" label="View Services" href={PATHS.services} />
            </div>
            <TrustBar className="mt-8" />
          </div>

          <PhotoPlaceholder
            caption={photos.vanInteriorSkylight.alt}
            src={photos.vanInteriorSkylight.src}
            aspect="portrait"
            className="w-full"
            priority
          />
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-12 lg:pb-20">
          <StatBand />
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Grooming Services</Eyebrow>
          <h2 className="mt-1 font-bb-display text-3xl font-bold text-bb-ink sm:text-4xl">
            Mobile Dog Grooming for Every Size
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-bb-ink-soft">
            From a full haircut to a simple bath and tidy, Bark and Bork handles small to extra-large dogs —
            right at your home.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.shortName}
              description={s.summary}
              href={servicePath(s.slug)}
              icon={serviceIcons[s.slug]}
            />
          ))}
        </div>
      </section>

      {/* How mobile grooming works */}
      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="mt-1 font-bb-display text-3xl font-bold text-bb-ink sm:text-4xl">
              Mobile Grooming in 3 Simple Steps
            </h2>
          </div>
          <ProcessSteps className="mt-10" />
        </div>
      </section>

      {/* Real grooming results teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Our Work</Eyebrow>
          <h2 className="mt-1 font-bb-display text-3xl font-bold text-bb-ink sm:text-4xl">Real Grooming Results</h2>
          <p className="mx-auto mt-3 max-w-2xl text-bb-ink-soft">
            A look at recent mobile grooming appointments — visit our Gallery page to see more.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <PhotoPlaceholder caption="Groomed small dog after a Bark and Bork Bath & Tidy" aspect="portrait" />
          <PhotoPlaceholder caption="Groomed large dog after a Bark and Bork Full Groom" aspect="portrait" />
          <PhotoPlaceholder caption="Bark and Bork mobile grooming appointment in progress" aspect="portrait" />
        </div>
        <div className="mt-8 flex justify-center">
          <SecondaryLinkButton location="home_gallery_teaser" variant="ghost" label="View Gallery" href={PATHS.gallery} />
        </div>
      </section>

      {/* Why Bark and Bork */}
      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Why Bark and Bork</Eyebrow>
            <h2 className="mt-1 font-bb-display text-3xl font-bold text-bb-ink sm:text-4xl">
              A More Convenient Way to Groom Your Dog
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.title} className="flex gap-3 rounded-2xl border border-bb-border bg-white p-6">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bb-coral/15 text-bb-coral-dark">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-bb-ink">{d.title}</p>
                  <p className="text-sm text-bb-ink-soft">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Transparent Pricing</Eyebrow>
          <h2 className="mt-1 font-bb-display text-3xl font-bold text-bb-ink sm:text-4xl">Starting Prices by Size</h2>
          <p className="mx-auto mt-3 max-w-2xl text-bb-ink-soft">{pricingNote}</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-bb-display text-xl font-bold text-bb-ink">Bath &amp; Tidy</h3>
            <p className="mt-1 text-sm text-bb-ink-soft">{bathAndTidy.summary}</p>
            <PricingTable pricing={bathAndTidy.pricing} className="mt-4" />
          </div>
          <div>
            <h3 className="font-bb-display text-xl font-bold text-bb-ink">Full Groom</h3>
            <p className="mt-1 text-sm text-bb-ink-soft">{fullGroom.summary}</p>
            <PricingTable pricing={fullGroom.pricing} className="mt-4" />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <BookButton location="home_pricing" variant="primary" />
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Add-Ons</Eyebrow>
            <h2 className="mt-1 font-bb-display text-3xl font-bold text-bb-ink sm:text-4xl">Extra Care for Your Dog</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((a) => (
              <Link
                key={a.slug}
                href={addOnLink[a.slug] ?? PATHS.services}
                className="rounded-2xl border border-bb-border bg-white p-5 transition-shadow hover:shadow-md"
              >
                <p className="font-bb-display text-lg font-bold text-bb-ink">{a.name}</p>
                <p className="mt-1 text-sm font-semibold text-bb-coral-dark">
                  {a.price} · {a.duration}
                </p>
                <p className="mt-2 text-sm text-bb-ink-soft">{a.summary}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <SecondaryLinkButton location="home_addons" variant="ghost" label="View All Services" href={PATHS.services} />
          </div>
        </div>
      </section>

      {/* Service areas teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Service Area</Eyebrow>
          <h2 className="mt-1 font-bb-display text-3xl font-bold text-bb-ink sm:text-4xl">
            Compton-Based, Serving Greater Los Angeles
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-bb-ink-soft">
            Bark and Bork is home-based in Compton and grooms dogs throughout the greater Los Angeles area.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceAreas.map((a) => (
            <ServiceAreaCard key={a.slug} city={a.city} state={a.state} description={a.description} href={areaPath(a.slug)} />
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Our Team</Eyebrow>
            <h2 className="mt-1 font-bb-display text-3xl font-bold text-bb-ink sm:text-4xl">Meet the Groomers</h2>
            <p className="mx-auto mt-3 max-w-2xl text-bb-ink-soft">
              Book your appointment with any of our bookable Bark and Bork grooming professionals.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-bb-border bg-white p-6 text-center">
                <PhotoPlaceholder caption={`${member.name}, Bark and Bork grooming team`} aspect="square" className="mx-auto max-w-[160px]" />
                <p className="mt-4 font-bb-display text-lg font-bold text-bb-ink">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <FaqBlock items={homeFaqs} />
      </section>

      {/* Final CTA */}
      <section className="bg-bb-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center">
          <h2 className="font-bb-display text-3xl font-bold sm:text-4xl">Ready to Book Your Dog&apos;s Groom?</h2>
          <p className="text-white/80">
            Choose your service and schedule online — Bark and Bork comes to you, anywhere in Compton or greater
            Los Angeles.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <BookButton location="final_cta" variant="primary" label="Book Mobile Grooming" />
            <CallButton location="final_cta" variant="secondary" className="border-white text-white hover:bg-white/10" />
          </div>
        </div>
      </section>
    </>
  );
}
