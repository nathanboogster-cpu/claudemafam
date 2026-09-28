import { TruckIcon, CalendarCheckIcon, DogIcon } from "@/components/icons";

// Only verified, safe-to-state facts — no fabricated review count, rating,
// or award. See lib/site-data.ts.
export function TrustBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-8 gap-y-4 font-bb-sans ${className}`}>
      <div className="flex items-center gap-2">
        <TruckIcon className="h-5 w-5 text-bb-coral-dark" />
        <span className="text-sm font-semibold text-bb-ink">Mobile Grooming — We Come to You</span>
      </div>
      <div className="flex items-center gap-2">
        <CalendarCheckIcon className="h-5 w-5 text-bb-coral-dark" />
        <span className="text-sm font-semibold text-bb-ink">Online Booking, Open 7 Days</span>
      </div>
      <div className="flex items-center gap-2">
        <DogIcon className="h-5 w-5 text-bb-coral-dark" />
        <span className="text-sm font-semibold text-bb-ink">Small to Extra-Large Dogs</span>
      </div>
    </div>
  );
}
