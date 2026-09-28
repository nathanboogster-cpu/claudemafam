import { business } from "@/lib/site-data";

/**
 * Wordmark lockup. The real Groomer On Call logo artwork (groomed dog,
 * brush, scissors, heart) has not been supplied as a file for this build,
 * so this renders an original type-led mark in the brand's own colours —
 * magenta, orange and black — rather than a placeholder box or, worse, a
 * guessed reproduction of the client's artwork.
 *
 * TO SWAP IN THE REAL LOGO: drop the file at public/images/logo.png and
 * replace the <span> badge below with a next/image. Nothing else changes.
 */
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-goc-magenta-dark shadow-md shadow-goc-magenta-dark/30"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          {/* Brush head + heart: the two motifs in the real brand mark. */}
          <rect x="3.6" y="4" width="10.4" height="6.4" rx="3.2" fill="#fb8b24" />
          <path
            d="M5.6 10.4v2.1M7.9 10.4v2.1M10.2 10.4v2.1M12.5 10.4v2.1"
            stroke="#fb8b24"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16.6 20.4 12.4 16.3a2.6 2.6 0 0 1 3.7-3.6l.5.5.5-.5a2.6 2.6 0 0 1 3.7 3.6l-4.2 4.1Z"
            fill="#ffffff"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-goc-display text-lg font-extrabold tracking-tight ${
            onDark ? "text-white" : "text-goc-ink"
          }`}
        >
          {business.name}
        </span>
        <span
          className={`mt-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${
            onDark ? "text-goc-orange" : "text-goc-magenta-darker"
          }`}
        >
          Mobile Pet Grooming
        </span>
      </span>
    </span>
  );
}
