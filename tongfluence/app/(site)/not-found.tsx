import Link from "next/link";
import { PATHS, serviceNav } from "@/lib/site-data";
import { Section } from "@/components/Section";
import { BookCallButton, SecondaryCTA } from "@/components/CTAButton";

// A real 404 with useful links out, so a mistyped or retired URL is a
// recoverable moment rather than a dead end. Next.js returns a 404 status for
// this automatically — it is never a soft 404.
export default function NotFound() {
  return (
    <Section width="narrow" className="py-20 text-center">
      <p className="font-tf-mono text-sm font-semibold text-tf-brown">404</p>
      <h1 className="mt-3 font-tf-display text-3xl font-extrabold text-tf-ink sm:text-4xl">
        That page isn&rsquo;t here.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-tf-ink-soft">
        It may have moved, or the link may be wrong. Here is everything on the site.
      </p>

      <ul className="mx-auto mt-10 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
        {[
          ...serviceNav,
          { label: "Case Studies", href: PATHS.caseStudies, description: "Real grooming builds, broken down." },
          { label: "Resources", href: PATHS.resources, description: "Guides written from real builds." },
          { label: "About", href: PATHS.about, description: "Why we only work with groomers." },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-2xl border border-tf-border bg-white p-4 hover:border-tf-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-brown-dark"
            >
              <span className="block font-semibold text-tf-ink">{item.label}</span>
              {item.description ? (
                <span className="mt-0.5 block text-sm text-tf-ink-soft">{item.description}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        <BookCallButton location="not_found" />
        <SecondaryCTA href={PATHS.home} label="Back to the homepage" location="not_found" />
      </div>
    </Section>
  );
}
