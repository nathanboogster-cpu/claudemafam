import { Eyebrow } from "@/components/Eyebrow";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { StatBand } from "@/components/StatBand";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceAreaCard } from "@/components/ServiceAreaCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { FaqBlock } from "@/components/FaqBlock";
import { DogIcon, CatIcon, ScissorsIcon, CheckIcon } from "@/components/icons";
import { business, services, differentiators, serviceAreas, servicePath, areaPath, photos, PATHS } from "@/lib/site-data";

const serviceIcons: Record<string, React.ReactNode> = {
  "dog-grooming": <DogIcon className="h-6 w-6" />,
  "dog-bath-and-brush": <ScissorsIcon className="h-6 w-6" />,
  "cat-grooming": <CatIcon className="h-6 w-6" />,
};

const homeFaqs = [
  {
    question: "Where is Sittin' Pretty Pet Grooming located?",
    answer: `Our grooming salon is at ${business.addressFull}, just outside Hagerstown, MD. We also serve pet owners in Halfway and the surrounding Washington County area.`,
  },
  {
    question: "Do you groom cats as well as dogs?",
    answer:
      "Yes — Sittin' Pretty offers full-service dog grooming plus professional cat grooming, all at the same Funkstown location.",
  },
  {
    question: "How do I schedule a grooming appointment?",
    answer: `Call ${business.phoneDisplay} to check availability and schedule your pet's groom. We don't currently offer online booking, so phone is the fastest way to reach us.`,
  },
  {
    question: "What are your hours?",
    answer:
      "We're open Tuesday through Friday, 8:00 AM to 4:00 PM, and Saturday from 8:00 AM to 2:00 PM. Closed Sunday and Monday.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sp-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <Eyebrow>Funkstown • Hagerstown • Pet Grooming</Eyebrow>
            <h1 className="mt-3 font-sp-display text-4xl font-bold leading-[1.05] text-sp-ink sm:text-5xl lg:text-6xl">
              Trusted Pet Grooming in the Hagerstown Area
            </h1>
            <p className="mt-5 max-w-xl text-lg text-sp-ink-soft">
              Sittin&apos; Pretty is an established local grooming salon in Funkstown, MD, serving dog and cat
              owners throughout Hagerstown, Halfway, and the surrounding Washington County community with
              personal, one-on-one grooming.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton location="hero" variant="primary" />
              <SecondaryLinkButton location="hero" variant="secondary" label="View Grooming Services" href={PATHS.services} />
            </div>
            <TrustBar className="mt-8" />
          </div>

          <PhotoPlaceholder
            caption={photos.blackLabSmiling.alt}
            src={photos.blackLabSmiling.src}
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
          <h2 className="mt-1 font-sp-display text-3xl font-bold text-sp-ink sm:text-4xl">
            Full-Service Dog & Cat Grooming
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sp-ink-soft">
            From a full groom to a simple bath and brush, Sittin&apos; Pretty handles dogs and cats of all
            kinds at our Funkstown salon.
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

      {/* Why Sittin' Pretty */}
      <section className="bg-sp-cream-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <PhotoPlaceholder
            caption={photos.sheepdogBandana.alt}
            src={photos.sheepdogBandana.src}
            aspect="portrait"
            className="w-full lg:order-2"
          />
          <div className="lg:order-1">
            <Eyebrow>Why Sittin&apos; Pretty</Eyebrow>
            <h2 className="mt-1 font-sp-display text-3xl font-bold text-sp-ink sm:text-4xl">
              A Local, Personal Alternative to Chain Grooming
            </h2>
            <ul className="mt-6 space-y-4">
              {differentiators.map((d) => (
                <li key={d.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sp-purple/15 text-sp-purple-dark">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-sp-ink">{d.title}</p>
                    <p className="text-sm text-sp-ink-soft">{d.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CallButton location="why_sittin_pretty" variant="primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Real grooming results teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Our Work</Eyebrow>
          <h2 className="mt-1 font-sp-display text-3xl font-bold text-sp-ink sm:text-4xl">Real Grooming Results</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sp-ink-soft">
            A few recent grooms from our Funkstown salon — visit our Gallery page to see more.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <PhotoPlaceholder caption={photos.tricolorDogBandana.alt} src={photos.tricolorDogBandana.src} aspect="portrait" />
          <PhotoPlaceholder caption={photos.tanChihuahua.alt} src={photos.tanChihuahua.src} aspect="portrait" />
          <PhotoPlaceholder caption="Groomed cat at Sittin' Pretty" aspect="portrait" />
        </div>
        <div className="mt-8 flex justify-center">
          <SecondaryLinkButton location="home_gallery_teaser" variant="ghost" label="View Gallery" href={PATHS.gallery} />
        </div>
      </section>

      {/* Location map */}
      <section className="bg-sp-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Our Location</Eyebrow>
            <h2 className="mt-1 font-sp-display text-3xl font-bold text-sp-ink sm:text-4xl">{business.addressFull}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sp-ink-soft">
              Located in Funkstown, just a few minutes from downtown Hagerstown — easy to reach from Halfway
              and the surrounding Washington County area.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-sp-border shadow-sm">
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
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-sp-purple-dark hover:underline">
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* Service areas teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Service Area</Eyebrow>
          <h2 className="mt-1 font-sp-display text-3xl font-bold text-sp-ink sm:text-4xl">
            Serving Funkstown, Hagerstown & Halfway
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {serviceAreas.map((a) => (
            <ServiceAreaCard key={a.slug} city={a.city} state={a.state} description={a.description} href={areaPath(a.slug)} />
          ))}
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="bg-sp-ink text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <Eyebrow tone="onDark">Local Reputation</Eyebrow>
          <h2 className="mt-1 font-sp-display text-3xl font-bold sm:text-4xl">
            A Longtime Favorite for Local Pet Owners
          </h2>
          <p className="mt-4 text-white/80">
            Pet owners in the Funkstown and Hagerstown area regularly mention friendly service, comfortable
            handling of nervous and senior dogs, and grooming results that keep them coming back year after
            year.
          </p>
          <a
            href={business.googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-sp-purple px-6 py-3 text-base font-semibold text-sp-purple transition-colors hover:bg-sp-purple hover:text-sp-ink"
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
      <section className="bg-sp-cream-deep">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center">
          <h2 className="font-sp-display text-3xl font-bold text-sp-ink sm:text-4xl">Ready to Schedule Your Pet&apos;s Groom?</h2>
          <p className="max-w-xl text-sp-ink-soft">
            Call Sittin&apos; Pretty today to schedule dog or cat grooming at our Funkstown salon.
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
