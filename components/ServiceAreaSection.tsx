import Link from "next/link";
import { PATHS, serviceAreaGeneral, serviceAreaPages, business } from "@/lib/site-data";
import { ServiceAreaCard } from "./ServiceAreaCard";
import { Eyebrow } from "./Eyebrow";
import { StudioInfoCard } from "./StudioInfoCard";

export function ServiceAreaSection({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section id="area" className={className}>
      <div className="text-center">
        <Eyebrow>Service Areas</Eyebrow>
        <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
          Where We Groom
        </h2>
      </div>
      <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
        In-store at our Victorville studio, or at your door with mobile
        grooming across {serviceAreaGeneral}.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href={PATHS.contact}
          className="group flex items-center justify-between gap-2 rounded-2xl border-2 border-terracotta bg-terracotta-light/10 p-5 shadow-sm transition-shadow hover:shadow-md"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-terracotta-dark">
              In-Store Studio
            </p>
            <p className="font-display text-lg font-bold text-ink">Victorville, CA</p>
            <p className="mt-1 text-xs text-ink-soft">{business.addressFull}</p>
          </div>
          <span className="text-terracotta-dark transition-transform group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
        {serviceAreaPages.map((area) => (
          <ServiceAreaCard key={area.city} city={area.city} href={area.slug} />
        ))}
      </div>

      <StudioInfoCard className="mt-6 max-w-2xl mx-auto" />

      <p className="mt-6 text-center text-sm text-ink-soft">
        Don&rsquo;t see your area listed? Call {business.phoneDisplay} — we
        may still be able to help.
      </p>
    </section>
  );
}
