import { Eyebrow } from "@/components/Eyebrow";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { StatBand } from "@/components/StatBand";
import { ServiceCard } from "@/components/ServiceCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { FaqBlock } from "@/components/FaqBlock";
import { ServiceAreaCard } from "@/components/ServiceAreaCard";
import { DogIcon, ScissorsIcon, CheckIcon } from "@/components/icons";
import { business, services, differentiators, servicePath, serviceAreas, areaPath, photos, PATHS } from "@/lib/site-data";

const serviceIcons: Record<string, React.ReactNode> = {
  "dog-grooming": <DogIcon className="h-6 w-6" />,
  "dog-bathing": <ScissorsIcon className="h-6 w-6" />,
};

const homeFaqs = [
  {
    question: "Where is Flo's Happy Clipper located?",
    answer: `Our grooming salon is at ${business.addressFull}, on Main St in Eatontown — right in the heart of Monmouth County.`,
  },
  {
    question: "How do I schedule a grooming appointment?",
    answer: `Call ${business.phoneDisplay} to check availability and schedule your dog's groom. We don't currently offer online booking, so phone is the fastest way to reach us.`,
  },
  {
    question: "What are your hours?",
    answer: "We're open Tuesday through Saturday, 9:00 AM to 5:00 PM. Closed Sunday and Monday.",
  },
  {
    question: "Do you groom large or double-coated dogs?",
    answer:
      "Yes — pet owners regularly bring large-breed and double-coated dogs to Flo's Happy Clipper, including German Shepherds and Portuguese Water Dogs.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-fh-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <Eyebrow>Eatontown, NJ • Professional Pet Grooming</Eyebrow>
            <h1 className="mt-3 font-fh-display text-4xl font-bold leading-[1.05] text-fh-ink sm:text-5xl lg:text-6xl">
              Trusted Dog Grooming in Eatontown, NJ
            </h1>
            <p className="mt-5 max-w-xl text-lg text-fh-ink-soft">
              Flo&apos;s Happy Clipper is a long-established grooming salon on Main St in Eatontown, offering
              personal, experienced dog grooming for pet owners throughout Monmouth County.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton location="hero" variant="primary" />
              <SecondaryLinkButton location="hero" variant="secondary" label="View Grooming Services" href={PATHS.services} />
            </div>
            <TrustBar className="mt-8" />
          </div>

          <PhotoPlaceholder caption={photos.largeBreedGroom.caption} aspect="portrait" className="w-full" priority />
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-12 lg:pb-20">
          <StatBand />
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Grooming Services</Eyebrow>
          <h2 className="mt-1 font-fh-display text-3xl font-bold text-fh-ink sm:text-4xl">
            Professional Dog Grooming
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-fh-ink-soft">
            From a full groom to a simple bath and brush, Flo&apos;s Happy Clipper handles dogs of every size
            and coat type at our Eatontown salon.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
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

      {/* Why Flo's Happy Clipper */}
      <section className="bg-fh-cream-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <PhotoPlaceholder caption={photos.doubleCoatedGroom.caption} aspect="portrait" className="w-full lg:order-2" />
          <div className="lg:order-1">
            <Eyebrow>Why Flo&apos;s Happy Clipper</Eyebrow>
            <h2 className="mt-1 font-fh-display text-3xl font-bold text-fh-ink sm:text-4xl">
              A Local, Personal Alternative to Chain Grooming
            </h2>
            <ul className="mt-6 space-y-4">
              {differentiators.map((d) => (
                <li key={d.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fh-amber/15 text-fh-amber-dark">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-fh-ink">{d.title}</p>
                    <p className="text-sm text-fh-ink-soft">{d.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CallButton location="why_flos_happy_clipper" variant="primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Real grooming results teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Our Work</Eyebrow>
          <h2 className="mt-1 font-fh-display text-3xl font-bold text-fh-ink sm:text-4xl">Real Grooming Results</h2>
          <p className="mx-auto mt-3 max-w-2xl text-fh-ink-soft">
            A few recent grooms from our Eatontown salon — visit our Gallery page to see more.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <PhotoPlaceholder caption={photos.smallBreedGroom.caption} aspect="portrait" />
          <PhotoPlaceholder caption={photos.poodleGroom.caption} aspect="portrait" />
          <PhotoPlaceholder caption={photos.bathAndBrush.caption} aspect="portrait" />
        </div>
        <div className="mt-8 flex justify-center">
          <SecondaryLinkButton location="home_gallery_teaser" variant="ghost" label="View Gallery" href={PATHS.gallery} />
        </div>
      </section>

      {/* Location map */}
      <section className="bg-fh-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Our Location</Eyebrow>
            <h2 className="mt-1 font-fh-display text-3xl font-bold text-fh-ink sm:text-4xl">{business.addressFull}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-fh-ink-soft">
              Right on Main St in Eatontown — easy to reach from across Monmouth County.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-fh-border shadow-sm">
            <iframe
              title={`Map showing ${business.name}'s location in ${business.addressCity}, ${business.addressState}`}
              src={business.mapsEmbedUrl}
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-fh-amber-dark hover:underline">
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* Service areas teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Service Area</Eyebrow>
          <h2 className="mt-1 font-fh-display text-3xl font-bold text-fh-ink sm:text-4xl">
            Serving Eatontown & Nearby Monmouth County
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-fh-ink-soft">
            We welcome pet owners from anywhere within about a 20-minute drive of our Main St salon.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {serviceAreas.slice(0, 6).map((a) => (
            <ServiceAreaCard key={a.slug} city={a.city} state={a.state} description={a.description} href={areaPath(a.slug)} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <SecondaryLinkButton location="home_service_areas_teaser" variant="ghost" label="View All Service Areas" href={PATHS.serviceAreas} />
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="bg-fh-ink text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <Eyebrow tone="onDark">Local Reputation</Eyebrow>
          <h2 className="mt-1 font-fh-display text-3xl font-bold sm:text-4xl">
            A Longtime Favorite for Eatontown Pet Owners
          </h2>
          <p className="mt-4 text-white/80">
            Pet owners in and around Eatontown regularly mention patient handling, comfortable results for
            large and double-coated breeds, and long-term relationships with the same trusted groomer.
          </p>
          <a
            href={business.googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-fh-amber px-6 py-3 text-base font-semibold text-fh-amber transition-colors hover:bg-fh-amber hover:text-fh-ink"
          >
            Read Reviews on Google
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <FaqBlock items={homeFaqs} />
      </section>

      {/* Final CTA */}
      <section className="bg-fh-cream-deep">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center">
          <h2 className="font-fh-display text-3xl font-bold text-fh-ink sm:text-4xl">Ready to Schedule Your Dog&apos;s Groom?</h2>
          <p className="max-w-xl text-fh-ink-soft">
            Call Flo&apos;s Happy Clipper today to schedule grooming at our Eatontown salon.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <CallButton location="final_cta" variant="primary" />
            <SecondaryLinkButton location="final_cta" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
        </div>
      </section>
    </>
  );
}
