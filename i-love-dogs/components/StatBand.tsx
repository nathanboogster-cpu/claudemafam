const stats = [
  { value: "50+ yrs", label: "Theresa's experience caring for dogs" },
  { value: "15 yrs", label: "Jolie's professional grooming" },
  { value: "$75", label: "Packages start at" },
  { value: "Pickup", label: "& delivery available" },
] as const;

export function StatBand({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-brand ${className}`}>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-bold text-accent-light sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-cream">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
