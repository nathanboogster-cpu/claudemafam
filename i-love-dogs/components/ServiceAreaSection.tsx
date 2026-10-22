import Link from "next/link";
import { PATHS, serviceAreaGeneral, townPages, business } from "@/lib/site-data";
import { Eyebrow } from "./Eyebrow";
import { PinIcon } from "./icons";
import { StudioInfoCard } from "./StudioInfoCard";

export function ServiceAreaSection({ className = "", headingLevel = "h2" }: { className?: string; headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <section id="area" className={className}>
      <div className="text-center">
        <Eyebrow>Service Areas</Eyebrow>
        <Heading className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">Where We Groom</Heading>
      </div>
      <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
        One salon, on County Line Road in Bryn Mawr, serving dog owners across {serviceAreaGeneral}. Pickup and
        delivery is available; call to confirm your address.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href={PATHS.contact}
          className="group flex items-center justify-between gap-2 rounded-2xl border-2 border-brand bg-brand-light/50 p-5 shadow-sm transition-shadow hover:shadow-md"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">Our Salon</p>
            <p className="font-display text-lg font-bold text-ink">Bryn Mawr, PA</p>
            <p className="mt-1 text-xs text-ink-soft">{business.addressFull}</p>
          </div>
          <span className="text-brand transition-transform group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
        {townPages.map((town) => (
          <Link
            key={town.slug}
            href={town.slug}
            className="group flex items-center justify-between gap-2 rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">Dog Grooming</p>
              <p className="mt-0.5 flex items-center gap-1.5 font-display text-lg font-bold text-ink">
                <PinIcon className="h-4 w-4 shrink-0 text-brand" />
                {town.city}, PA
              </p>
            </div>
            <span className="text-brand transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>

      <StudioInfoCard className="mt-6 max-w-3xl mx-auto" location="service_area_section" />
    </section>
  );
}
