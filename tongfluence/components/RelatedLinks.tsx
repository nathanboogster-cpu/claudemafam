import Link from "next/link";
import { ArrowRightIcon } from "./icons";

// Deliberate internal linking. Every commercial and resource page ends with
// one of these, pointing at the pages that genuinely continue the reader's
// question — with descriptive anchor text, never "click here" or a repeated
// exact-match phrase. Rendered as a row of pills: the label is the whole
// pitch, and the page it links to makes its own case.
export function RelatedLinks({
  title = "Keep reading",
  items,
}: {
  title?: string;
  items: { href: string; label: string; description?: string }[];
}) {
  return (
    <nav aria-labelledby="related-links" className="rounded-2xl border border-tf-border bg-tf-card p-6 sm:p-8">
      <h2 id="related-links" className="font-tf-display text-xl font-bold text-tf-ink">
        {title}
      </h2>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="tf-lift group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-tf-border bg-tf-paper px-4 py-2 text-sm font-semibold text-tf-ink hover:border-tf-brown hover:bg-tf-brown-wash focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-brown-dark"
            >
              {item.label}
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-tf-brown-dark transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
