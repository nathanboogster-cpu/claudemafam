import { business } from "@/lib/site-data";

const stats = [
  { value: `${business.googleRating}★`, label: "Google Rating" },
  { value: `${business.googleReviewCount}+`, label: "Google Reviews" },
  { value: "35+ yrs", label: "Grooming Experience" },
  { value: "A+", label: "BBB Accredited" },
] as const;

export function StatBand({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-ink ${className}`}>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-bold text-gold sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-cream/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
