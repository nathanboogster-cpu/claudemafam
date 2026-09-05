import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CTAButton";
import { StatBand } from "@/components/StatBand";
import { CheckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, hoursNote, temperamentTest, vaccinationRequirements, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Reservations",
  description:
    "Reserve dog daycare or boarding, or schedule a temperament test, at Bow Wags in Marietta, GA. Call (678) 744-9247 — grooming appointments are booked separately by phone.",
  path: PATHS.reservations,
});

const steps = [
  {
    title: "Call Bow Wags",
    body: `Call ${business.phoneDisplay} — Bow Wags manages daycare and boarding reservations directly by phone.`,
  },
  {
    title: "First Visit? Schedule a Temperament Test",
    body: `New dogs need a 4-hour temperament test (${temperamentTest.price}) before their first daycare or boarding stay.`,
  },
  {
    title: "Confirm Vaccinations",
    body: `Have current ${vaccinationRequirements.join(", ")} records ready — they're required for daycare and boarding.`,
  },
  {
    title: "Reserve Your Dates",
    body: `Let Bow Wags know whether you need daycare, boarding, or both, and they'll confirm availability for ${hoursNote.split(",")[0]}${hoursNote.includes("Saturday") ? " or Saturday" : ""}.`,
  },
];

export default function ReservationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Reservations", url: `${SITE_URL}${PATHS.reservations}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Reservations", href: PATHS.reservations }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <Eyebrow>Reservations</Eyebrow>
        <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">
          Make a Reservation
        </h1>
        <p className="mt-4 text-lg text-bw-ink-soft">
          Bow Wags handles daycare and boarding reservations by phone, so a real
          person can confirm your dog&apos;s temperament-test status, vaccination
          records, and space availability.
        </p>

        <div className="mt-10 rounded-3xl border border-bw-border bg-bw-cream-deep p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-bw-orange-dark">Call to Reserve</p>
          <a href={business.phoneHref} className="mt-2 block font-bw-display text-4xl font-bold text-bw-ink hover:text-bw-orange-dark">
            {business.phoneDisplay}
          </a>
          <p className="mt-1 text-sm text-bw-ink-soft">Also known as {business.phoneDisplayWags}</p>
          <CallButton location="reservations_page" variant="primary" className="mt-6" />

          <div className="mt-8 grid gap-6 border-t border-bw-border pt-8 text-left sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-bw-ink">Located At</p>
              <p className="mt-1 text-bw-ink-soft">{business.addressFull}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-bw-ink">Hours</p>
              <p className="mt-1 text-bw-ink-soft">{hoursNote}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-bw-ink">Grooming Appointments</p>
              <p className="mt-1 text-bw-ink-soft">
                Grooming is scheduled separately from daycare/boarding — call the same number and ask for grooming.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>How Reservations Work</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">Four Simple Steps</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-bw-border bg-white p-6">
                <span className="font-bw-display text-3xl font-bold text-bw-orange-dark">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-semibold text-bw-ink">{step.title}</p>
                <p className="mt-1 text-sm text-bw-ink-soft">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <ul className="space-y-2 text-sm text-bw-ink-soft">
          {[
            "First-time daycare or boarding dogs need a temperament test before their stay.",
            "Rabies, Distemper, and Bordetella vaccinations must be current.",
            "Boarding includes daycare — no separate reservation needed for daytime care.",
            "Grooming does not require a temperament test, but is booked by phone separately.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <CheckIcon className="h-4 w-4 shrink-0 mt-0.5 text-bw-teal-dark" />
              {item}
            </li>
          ))}
        </ul>
        <StatBand className="mt-10" />
      </section>
    </>
  );
}
