import { CheckIcon } from "./icons";

// Verified trust facts only: no stars, ratings or review counts.
const items = ["We come to you", "Licensed & insured", "Eco-friendly", "Dogs & cats"];

export function TrustBar({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
            dark ? "bg-white/15 text-white" : "border border-border bg-white text-ink-soft"
          }`}
        >
          <CheckIcon className={`h-3.5 w-3.5 ${dark ? "text-white" : "text-accent"}`} />
          {item}
        </li>
      ))}
    </ul>
  );
}
