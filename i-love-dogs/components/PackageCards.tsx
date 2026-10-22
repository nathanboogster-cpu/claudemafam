import { packages, priceNote } from "@/lib/site-data";
import { CheckIcon } from "./icons";

// The three published packages with starting prices, plus the price note.
export function PackageCards({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {packages.map((p, i) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${i === 1 ? "border-2 border-brand" : "border-border"}`}
          >
            <Heading className="font-display text-xl font-bold text-ink">{p.name}</Heading>
            <p className="mt-2 font-display text-3xl font-bold text-accent-dark">{`From $${p.price}`}</p>
            <p className="mt-3 text-sm text-ink-soft">{p.description}</p>
            {p.plus.length > 0 ? (
              <ul className="mt-3 space-y-2">
                {p.plus.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-ink-soft">{priceNote}</p>
    </>
  );
}
