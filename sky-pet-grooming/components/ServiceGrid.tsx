import Link from "next/link";
import { blogPostPath, services } from "@/lib/site-data";
import { postForService } from "@/lib/blog-data";
import { Pic } from "./Pic";

// The services from the owner's booking page, each with one of their photos.
export function ServiceGrid({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => {
        const guide = postForService(s.key);
        return (
          <li key={s.title} className="flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
            <div className="relative aspect-[4/3] bg-sky-deep">
              <Pic slug={s.photo} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <Heading className="font-display text-lg font-extrabold text-ink">{s.title}</Heading>
              <p className="mt-1 text-sm text-ink-soft">{s.body}</p>
              {guide && (
                <Link
                  href={blogPostPath(guide.slug)}
                  className="mt-auto inline-flex min-h-[44px] items-center pt-2 text-sm font-bold text-brand hover:underline"
                  aria-label={`Read our guide: ${guide.title}`}
                >
                  Read the guide →
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
