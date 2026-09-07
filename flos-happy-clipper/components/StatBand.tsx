import { trustStats } from "@/lib/site-data";
import { ShieldCheckIcon, PinIcon, DogIcon, CalendarCallIcon } from "@/components/icons";

const statIcons = [ShieldCheckIcon, PinIcon, DogIcon, CalendarCallIcon];

export function StatBand({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-4 ${className}`}>
      {trustStats.map((s, i) => {
        const Icon = statIcons[i % statIcons.length];
        return (
          <div
            key={s.label}
            className="flex flex-col items-center gap-2 rounded-2xl border border-fh-border bg-white px-4 py-6 text-center shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fh-pink/20 to-fh-blue/20 text-fh-pink-dark">
              <Icon className="h-5 w-5" />
            </span>
            <span className="font-fh-display text-xl font-bold text-fh-ink sm:text-2xl">{s.value}</span>
            <span className="text-xs font-semibold uppercase tracking-wide text-fh-ink-soft">{s.label}</span>
          </div>
        );
      })}
    </div>
  );
}
