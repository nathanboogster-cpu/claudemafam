import Link from "next/link";
import { ArrowRightIcon } from "./icons";

// Deliberate internal linking. Every commercial and resource page ends with
// one of these, pointing at the pages that genuinely continue the reader's
// question — with descriptive anchor text, never "click here" or a repeated
// exact-match phrase.
export function RelatedLinks({
  title = "Keep reading",
  items,
}: {
  title?: string;
  items: { href: string; label: string; description: string }[];
}) {
  return (
    <nav aria-labelledby="related-links" className="rounded-3xl border border-tf-border bg-white p-6 sm:p-8">
      <h2 id="related-links" className="font-tf-display text-xl font-bold text-tf-ink">
        {title}
      </h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="tf-lift group flex h-full flex-col rounded-2xl border border-tf-border bg-tf-paper p-4 hover:border-tf-brown hover:bg-tf-brown-wash focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-brown-dark"
            >
              <span className="flex items-center gap-2 font-semibold text-tf-ink">
                {item.label}
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-tf-brown-dark transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="mt-1 text-sm leading-relaxed text-tf-ink-soft">{item.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
