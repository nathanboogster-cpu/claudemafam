import Link from "next/link";
import { servicePath, type ServiceSlug } from "@/lib/site-data";
import { ArrowIcon, BrushIcon, DropletIcon, NailIcon, CatIcon } from "./icons";

const iconFor: Record<ServiceSlug, (p: { className?: string }) => React.ReactElement> = {
  "mobile-dog-grooming": BrushIcon,
  "dog-bath-and-blow-dry": DropletIcon,
  "dog-nail-trimming": NailIcon,
  "mobile-cat-bathing": CatIcon,
};

/**
 * Service card. The whole card is a single <a> wrapping a heading — one
 * link per card, with descriptive anchor text, rather than a "learn more"
 * link that tells neither a reader nor a crawler where it goes.
 */
export function ServiceCard({
  slug,
  name,
  summary,
  featured = false,
}: {
  slug: ServiceSlug;
  name: string;
  summary: string;
  featured?: boolean;
}) {
  const Icon = iconFor[slug];
  return (
    <Link
      href={servicePath(slug)}
      className={`group flex flex-col rounded-3xl border-2 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 ${
        featured
          ? "border-goc-magenta-dark bg-white shadow-lg shadow-goc-magenta-dark/10"
          : "border-goc-border bg-white hover:border-goc-magenta-dark"
      }`}
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-goc-cream-deep text-goc-magenta-darker">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-goc-display text-xl font-extrabold text-goc-ink">{name}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-goc-ink-soft">{summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-goc-magenta-darker">
        {name} details
        <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
