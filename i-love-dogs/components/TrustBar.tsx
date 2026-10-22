import { CheckIcon } from "./icons";

// Verified trust facts only: no stars, ratings or review counts.
const items = ["Family-owned", "Over 50 years caring for dogs", "Pickup & delivery", "Chemical-free products"];

export function TrustBar({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft"
        >
          <CheckIcon className="h-3.5 w-3.5 text-brand" />
          {item}
        </li>
      ))}
    </ul>
  );
}
