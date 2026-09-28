import Link from "next/link";
import { PATHS, services, servicePath, business } from "@/lib/site-data";

// A real 404 (correct status code, noindex by default in Next) with useful
// routes out — not a soft 404 that returns 200 with "page not found" text.
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-goc-magenta-darker">Page not found</p>
      <h1 className="mt-3 font-goc-display text-4xl font-extrabold text-goc-ink">
        That page doesn&rsquo;t exist
      </h1>
      <p className="mt-4 text-lg text-goc-ink-soft">
        The link may be out of date. Here&rsquo;s where most people are heading — or call{" "}
        <a href={business.phoneHref} className="font-bold text-goc-magenta-darker underline underline-offset-4">
          {business.phoneDisplay}
        </a>
        .
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={servicePath(service.slug)}
              className="inline-flex min-h-11 items-center rounded-full border-2 border-goc-border bg-white px-4 py-2 text-sm font-bold text-goc-ink hover:border-goc-magenta-dark hover:text-goc-magenta-darker"
            >
              {service.navLabel}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={PATHS.home}
            className="inline-flex min-h-11 items-center rounded-full bg-goc-magenta-dark px-5 py-2 text-sm font-bold text-white hover:bg-goc-magenta-darker"
          >
            Back to home
          </Link>
        </li>
      </ul>
    </main>
  );
}
