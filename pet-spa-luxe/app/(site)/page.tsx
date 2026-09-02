import { Eyebrow } from "@/components/Eyebrow";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { StatBand } from "@/components/StatBand";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServiceCard } from "@/components/ServiceCard";
import { SizePricingTable } from "@/components/SizePricingTable";
import { ServiceAreaCard } from "@/components/ServiceAreaCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { FaqBlock } from "@/components/FaqBlock";
import {
  TruckIcon,
  ScissorsIcon,
  DropletIcon,
  NailIcon,
  CheckIcon,
  StarIcon,
} from "@/components/icons";
import {
  business,
  services,
  differentiators,
  serviceAreas,
  servicePath,
  areaPath,
  photos,
  googleReviews,
  PATHS,
} from "@/lib/site-data";

const serviceIcons: Record<string, React.ReactNode> = {
  "mobile-dog-grooming": <TruckIcon className="h-6 w-6" />,
  "dog-haircuts-full-grooming": <ScissorsIcon className="h-6 w-6" />,
  "bath-deshedding": <DropletIcon className="h-6 w-6" />,
  "nail-ear-care": <NailIcon className="h-6 w-6" />,
};

const homeFaqs = [
  {
    question: "Does Pet Spa Luxe come to my home?",
    answer:
      "Yes — Pet Spa Luxe is a fully mobile grooming service. Your dog is groomed at your location in a fully equipped mobile grooming setup, so there's no drop-off, no car ride, and no waiting room.",
  },
  {
    question: "What areas does Pet Spa Luxe serve?",
    answer:
      "Pet Spa Luxe is based in El Sobrante, CA and serves the surrounding Bay Area by mobile appointment. Call (650) 576-1194 to confirm availability at your address.",
  },
  {
    question: "What's included in a mobile grooming appointment?",
    answer:
      "Every appointment includes one-on-one, cage-free attention. Depending on what your dog needs, that can include a warm-water bath with premium shampoo and conditioner, a full groom or breed-specific haircut, deshedding, nail trimming or grinding, ear cleaning, and hand blow drying.",
  },
  {
    question: "How do I book an appointment?",
    answer: `Call ${business.phoneDisplay} to check availability and schedule your dog's mobile grooming appointment.`,
  },
];

export default function PetSpaLuxeHome() {
  return (
    <>
      {/* Hero */}
      <section className="bg-psl-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <Eyebrow>El Sobrante • Luxury Mobile Dog Grooming</Eyebrow>
            <h1 className="mt-3 font-psl-display text-4xl font-bold leading-[1.05] text-psl-ink sm:text-5xl lg:text-6xl">
              Luxury Mobile Dog Grooming, Brought to Your Door
            </h1>
            <p className="mt-5 max-w-xl text-lg text-psl-ink-soft">
              Pet Spa Luxe grooms your dog right at your home in El Sobrante and the
              surrounding Bay Area — a fully equipped mobile setup, cage-free
              environment, and one-on-one attention from start to finish. No car
              ride, no waiting room.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton location="hero" variant="primary" />
              <RequestButton location="hero" variant="secondary" />
            </div>
            <TrustBar className="mt-8" />
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <PhotoPlaceholder
                caption={photos.bulldogBandana.alt}
                src={photos.bulldogBandana.src}
                aspect="square"
                className="w-full translate-y-4"
                priority
              />
              <PhotoPlaceholder
                caption={photos.huskyGroomed.alt}
                src={photos.huskyGroomed.src}
                aspect="square"
                className="w-full"
              />
              <PhotoPlaceholder
                caption={photos.frenchieBandana.alt}
                src={photos.frenchieBandana.src}
                aspect="square"
                className="w-full"
              />
              <PhotoPlaceholder
                caption={photos.apricotPoodleGroomed.alt}
                src={photos.apricotPoodleGroomed.src}
                aspect="square"
                className="w-full translate-y-4"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-psl-border bg-white px-5 py-3 shadow-lg sm:left-auto sm:right-4 sm:translate-x-0">
              <div className="flex text-psl-brass" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <span className="text-sm font-bold text-psl-ink whitespace-nowrap">
                {business.yelpRating} on Yelp
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-12 lg:pb-20">
          <StatBand />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-psl-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="mt-1 font-psl-display text-3xl font-bold text-psl-ink sm:text-4xl">
              From Call to Clean Dog, in Four Easy Steps
            </h2>
          </div>
          <ProcessSteps className="mt-10" />
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Mobile Grooming Services</Eyebrow>
          <h2 className="mt-1 font-psl-display text-3xl font-bold text-psl-ink sm:text-4xl">
            Everything Your Dog Needs, at Your Door
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-psl-ink-soft">
            From a warm-water bath to a complete breed-specific haircut, every
            service is delivered one-on-one in our mobile grooming setup.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.shortName}
              description={s.summary}
              href={servicePath(s.slug)}
              price={s.price}
              icon={serviceIcons[s.slug]}
            />
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-center font-psl-display text-xl font-bold text-psl-ink">
            Pricing by Dog Size
          </h3>
          <div className="mx-auto mt-5 max-w-3xl">
            <SizePricingTable />
          </div>
        </div>
      </section>

      {/* Mobile value proposition */}
      <section className="bg-psl-cream-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <PhotoPlaceholder
            caption={photos.vanInterior.alt}
            src={photos.vanInterior.src}
            aspect="square"
            className="w-full lg:order-2"
          />
          <div className="lg:order-1">
            <Eyebrow>Why Mobile Grooming</Eyebrow>
            <h2 className="mt-1 font-psl-display text-3xl font-bold text-psl-ink sm:text-4xl">
              Grooming Comes to You — Not the Other Way Around
            </h2>
            <ul className="mt-6 space-y-4">
              {differentiators.map((d) => (
                <li key={d.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-psl-pink/20 text-psl-pink-dark">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-psl-ink">{d.title}</p>
                    <p className="text-sm text-psl-ink-soft">{d.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CallButton location="mobile_value_prop" variant="primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Service areas teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Service Areas</Eyebrow>
          <h2 className="mt-1 font-psl-display text-3xl font-bold text-psl-ink sm:text-4xl">
            Based in El Sobrante, Serving {serviceAreas.length} Bay Area Cities
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-psl-ink-soft">
            Pet Spa Luxe is based in El Sobrante and grooms dogs by mobile
            appointment throughout the surrounding Bay Area.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.slice(0, 6).map((a) => (
            <ServiceAreaCard key={a.slug} city={a.city} href={areaPath(a.slug)} />
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-psl-ink-soft">
            Don&apos;t see your city listed? Call to confirm mobile grooming availability at your address.
          </p>
          <RequestButton location="service_areas_teaser" variant="ghost" label="See All Service Areas" href={PATHS.serviceAreas} />
        </div>
      </section>

      {/* Location map */}
      <section className="bg-psl-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Where We&apos;re Based</Eyebrow>
            <h2 className="mt-1 font-psl-display text-3xl font-bold text-psl-ink sm:text-4xl">
              {business.addressFull}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-psl-ink-soft">
              This is our mobile service base, not a walk-in location — Pet Spa
              Luxe comes to you. Call to confirm we reach your address.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-psl-border shadow-sm">
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
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-psl-brass-dark hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="bg-psl-ink text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <Eyebrow tone="onDark">Real Reviews</Eyebrow>
          <h2 className="mt-1 font-psl-display text-3xl font-bold sm:text-4xl">
            Rated {business.yelpRating} Stars on Yelp
          </h2>
          <p className="mt-4 text-white/80">
            A real 5-star review from Pet Spa Luxe&apos;s Google Business
            Profile — read more reviews directly on Yelp below.
          </p>
          <blockquote className="mx-auto mt-8 max-w-lg rounded-2xl border border-white/15 bg-white/5 p-6 text-left">
            <div className="flex text-psl-brass" aria-hidden="true">
              {Array.from({ length: googleReviews[0].rating }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-3 text-white/90">&ldquo;{googleReviews[0].text}&rdquo;</p>
            <footer className="mt-3 text-sm font-semibold text-white/70">
              {googleReviews[0].author}, Google review
            </footer>
          </blockquote>
          <a
            href={business.yelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-psl-brass px-6 py-3 text-base font-semibold text-psl-brass transition-colors hover:bg-psl-brass hover:text-psl-ink"
          >
            Read Reviews on Yelp
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <FaqBlock items={homeFaqs} />
      </section>

      {/* Final CTA */}
      <section className="bg-psl-cream-deep">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-psl-brass/15 text-psl-brass-dark">
            <TruckIcon className="h-6 w-6" />
          </span>
          <h2 className="font-psl-display text-3xl font-bold text-psl-ink sm:text-4xl">
            Ready to Book Your Dog&apos;s Mobile Groom?
          </h2>
          <p className="max-w-xl text-psl-ink-soft">
            Call Pet Spa Luxe today to schedule luxury mobile dog grooming at your
            home in El Sobrante or the surrounding Bay Area.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <CallButton location="final_cta" variant="primary" />
            <RequestButton location="final_cta" variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
}
