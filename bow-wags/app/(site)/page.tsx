import { Eyebrow } from "@/components/Eyebrow";
import { CallButton, ReserveButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { StatBand } from "@/components/StatBand";
import { ServiceCard } from "@/components/ServiceCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { FaqBlock } from "@/components/FaqBlock";
import { DaycarePricingTable } from "@/components/DaycarePricingTable";
import { BoardingPricingTable } from "@/components/BoardingPricingTable";
import { CheckIcon, StarIcon, SyringeIcon, ClipboardIcon, HouseIcon, ScissorsIcon } from "@/components/icons";
import {
  business,
  services,
  differentiators,
  reviews,
  hoursNote,
  vaccinationRequirements,
  groomer,
  daycarePlayrooms,
  daycareOutdoor,
  boardingFeatures,
  PATHS,
  servicePath,
} from "@/lib/site-data";

const serviceIcons: Record<string, React.ReactNode> = {
  "dog-daycare": <ClipboardIcon className="h-6 w-6" />,
  "dog-boarding": <HouseIcon className="h-6 w-6" />,
  "dog-grooming": <ScissorsIcon className="h-6 w-6" />,
};

const homeFaqs = [
  {
    question: "Where is Bow Wags located?",
    answer: `Bow Wags is located at ${business.addressFull}, in the West Cobb / West Marietta area, easy to reach from Powder Springs, Smyrna, Austell, and the rest of Cobb County.`,
  },
  {
    question: "Do I need to do anything before my dog's first daycare or boarding stay?",
    answer:
      "Yes — every dog needs a 4-hour temperament test ($30) before their first daycare or boarding visit, plus current Rabies, Distemper, and Bordetella vaccinations. Call (678) 744-9247 to schedule the assessment.",
  },
  {
    question: "Is daycare included with boarding?",
    answer:
      "Yes — boarding includes approximately 12 hours of supervised daycare each day, so boarding dogs are cared for and played with, not just kept overnight.",
  },
  {
    question: "How do I book grooming?",
    answer: `Grooming is scheduled by phone — call ${business.phoneDisplay} for current rates and appointment availability.`,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bw-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <Eyebrow>Marietta • West Cobb • Dog Daycare, Boarding &amp; Grooming</Eyebrow>
            <h1 className="mt-3 font-bw-display text-4xl font-bold leading-[1.05] text-bw-ink sm:text-5xl lg:text-6xl">
              Dog Daycare, Boarding &amp; Grooming in Marietta, GA
            </h1>
            <p className="mt-5 max-w-xl text-lg text-bw-ink-soft">
              Bow Wags gives West Cobb dogs a clean, safe, and fully supervised place to
              play, stay, and get groomed — size-appropriate playrooms, private boarding
              suites (no cages), and full-service grooming, all at one Marietta facility.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ReserveButton location="hero" variant="primary" />
              <ReserveButton location="hero" variant="secondary" label="View Services" href={PATHS.dogDaycare} />
            </div>
            <TrustBar className="mt-8" />
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <PhotoPlaceholder
                caption="Dogs playing in a Bow Wags indoor playroom"
                aspect="square"
                className="w-full translate-y-4"
                priority
              />
              <PhotoPlaceholder caption="Bow Wags outdoor play area" aspect="square" className="w-full" />
              <PhotoPlaceholder caption="Private boarding suite at Bow Wags" aspect="square" className="w-full" />
              <PhotoPlaceholder
                caption="Freshly groomed dog at Bow Wags"
                aspect="square"
                className="w-full translate-y-4"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-bw-border bg-white px-5 py-3 shadow-lg sm:left-auto sm:right-4 sm:translate-x-0">
              <div className="flex text-bw-orange" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <span className="text-sm font-bold text-bw-ink whitespace-nowrap">Loved by West Cobb dogs</span>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-12 lg:pb-20">
          <StatBand />
        </div>
      </section>

      {/* Welcome to Wagsville */}
      <section className="bg-bw-teal text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <Eyebrow tone="onDark">Welcome To</Eyebrow>
          <h2 className="mt-1 font-bw-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            &ldquo;WAGSVILLE&rdquo;
          </h2>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Population: Canine</p>
          <p className="mx-auto mt-5 max-w-xl text-white/90">
            That&apos;s the nickname the Bow Wags team gave their own facility — a
            playful way of saying every dog who comes through the door gets treated
            like a resident, not a visitor. Underneath the fun name is a real,
            fully supervised daycare, boarding, and grooming operation in Marietta, GA.
          </p>
        </div>
      </section>

      {/* Three core services */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">
            Everything Your Dog Needs, in One Place
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-bw-ink-soft">
            Daycare, boarding, and grooming — each with its own space, its own
            requirements, and its own way to book.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.name}
              description={s.summary}
              href={servicePath(s.slug)}
              icon={serviceIcons[s.slug]}
            />
          ))}
        </div>
      </section>

      {/* Why dog owners choose Bow Wags */}
      <section className="bg-bw-cream-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <PhotoPlaceholder caption="Dogs enjoying supervised play at Bow Wags" aspect="square" className="w-full lg:order-2" />
          <div className="lg:order-1">
            <Eyebrow>Why Dog Owners Choose Bow Wags</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">
              Safety, Play, and Real Personal Care
            </h2>
            <ul className="mt-6 space-y-4">
              {differentiators.map((d) => (
                <li key={d.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bw-teal/15 text-bw-teal-dark">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-bw-ink">{d.title}</p>
                    <p className="text-sm text-bw-ink-soft">{d.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ReserveButton location="why_choose" variant="primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Daycare */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>Dog Daycare</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">
              Size-Appropriate Playrooms, Indoors and Out
            </h2>
            <p className="mt-4 text-bw-ink-soft">
              Dogs are grouped into small, medium, and large playrooms, with a secure
              outdoor playground offering separate small- and large-dog play areas.
              Every session is clean, safe, and fully supervised.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-bw-ink-soft">
              {[...daycarePlayrooms.map((p) => p.title), ...daycareOutdoor].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckIcon className="h-4 w-4 shrink-0 text-bw-teal-dark" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <ReserveButton location="home_daycare" variant="primary" label="Reserve Daycare" />
              <ReserveButton location="home_daycare" variant="ghost" label="Daycare Details" href={PATHS.dogDaycare} />
            </div>
          </div>
          <DaycarePricingTable />
        </div>
      </section>

      {/* Boarding */}
      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <BoardingPricingTable className="lg:order-2" />
            <div className="lg:order-1">
              <Eyebrow>Dog Boarding</Eyebrow>
              <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">
                Private Wooden Suites — No Cages
              </h2>
              <p className="mt-4 text-bw-ink-soft">
                Boarding dogs sleep in custom wooden cabins divided by picket-style
                fencing — a private space with an open, community feel where dogs
                can still see and smell their playmates.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-bw-ink-soft">
                {boardingFeatures.map((f) => (
                  <li key={f.title} className="flex gap-2">
                    <CheckIcon className="h-4 w-4 shrink-0 mt-0.5 text-bw-teal-dark" />
                    <span>
                      <span className="font-semibold text-bw-ink">{f.title}:</span> {f.body}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <ReserveButton location="home_boarding" variant="primary" label="Book Boarding" />
                <ReserveButton location="home_boarding" variant="ghost" label="Boarding Details" href={PATHS.dogBoarding} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grooming */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Dog Grooming</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">
              Full-Service Grooming, With a Familiar Groomer
            </h2>
            <p className="mt-4 text-bw-ink-soft">
              Bathing, full grooming, haircuts, nail grinding, ear and teeth cleaning,
              and deshedding for all breeds. Groomer Cynthia has worked at Bow Wags
              since {groomer.since}, guided by one rule: &ldquo;{groomer.philosophy}.&rdquo;
            </p>
            <p className="mt-3 text-sm text-bw-ink-soft">{groomer.philosophyExplained}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallButton location="home_grooming" variant="primary" label="Call for Grooming" />
              <ReserveButton location="home_grooming" variant="ghost" label="Grooming Details" href={PATHS.dogGrooming} />
            </div>
          </div>
          <PhotoPlaceholder caption="Cynthia grooming a dog at Bow Wags" aspect="square" className="w-full" />
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-bw-ink text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <Eyebrow tone="onDark">Real Reviews</Eyebrow>
          <h2 className="mt-1 font-bw-display text-3xl font-bold sm:text-4xl">What Dog Owners Say</h2>
          <p className="mt-4 text-white/80">{business.reviewsSummary}</p>
          <div className="mx-auto mt-8 grid gap-4 text-left sm:grid-cols-2">
            {reviews.slice(0, 4).map((r) => (
              <blockquote key={r.text} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <div className="flex text-bw-orange" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-white/90">&ldquo;{r.text}&rdquo;</p>
                <footer className="mt-3 text-xs font-semibold text-white/60">{r.source}</footer>
              </blockquote>
            ))}
          </div>
          <a
            href={business.yelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-bw-orange px-6 py-3 text-base font-semibold text-bw-orange transition-colors hover:bg-bw-orange hover:text-bw-ink"
          >
            Read More Reviews on Yelp
          </a>
        </div>
      </section>

      {/* Requirements */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Before You Book</Eyebrow>
          <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">Requirements</h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-bw-border bg-white p-6">
            <ClipboardIcon className="h-8 w-8 text-bw-orange-dark" />
            <p className="mt-3 font-semibold text-bw-ink">Temperament Test</p>
            <p className="mt-1 text-sm text-bw-ink-soft">
              A 4-hour temperament test ($30) is required before a dog&apos;s first
              daycare or boarding stay. Call {business.phoneDisplay} to schedule.
            </p>
          </div>
          <div className="rounded-2xl border border-bw-border bg-white p-6">
            <SyringeIcon className="h-8 w-8 text-bw-orange-dark" />
            <p className="mt-3 font-semibold text-bw-ink">Vaccinations</p>
            <p className="mt-1 text-sm text-bw-ink-soft">
              Current {vaccinationRequirements.join(", ")} vaccinations are required
              for daycare and boarding.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <ReserveButton location="home_requirements" variant="ghost" label="Full Requirements" href={PATHS.requirements} />
        </div>
      </section>

      {/* Location */}
      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Where We&apos;re Located</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">{business.addressFull}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-bw-ink-soft">
              Bow Wags is in the West Cobb / West Marietta area, convenient to
              Powder Springs, Smyrna, Austell, and the rest of Cobb County. {hoursNote}
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-bw-border shadow-sm">
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
              className="text-sm font-semibold text-bw-orange-dark hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <FaqBlock items={homeFaqs} />
      </section>

      {/* Final CTA */}
      <section className="bg-bw-orange-dark text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center">
          <h2 className="font-bw-display text-3xl font-bold sm:text-4xl">Ready for Your Dog&apos;s Next Adventure?</h2>
          <p className="max-w-xl text-white/90">
            Schedule a temperament test, reserve daycare or boarding, or call to book
            grooming — Bow Wags is ready in Marietta, GA.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <ReserveButton location="final_cta" variant="ghost" className="bg-white" />
            <CallButton location="final_cta" variant="secondary" className="border-white text-white hover:bg-white/10" />
          </div>
        </div>
      </section>
    </>
  );
}
