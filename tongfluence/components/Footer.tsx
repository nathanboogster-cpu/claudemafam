import Link from "next/link";
import { PATHS, business, offer, serviceNav, socialProfiles } from "@/lib/site-data";
import { caseStudyBuilds } from "@/lib/client-builds";
import { caseStudyPath } from "@/lib/site-data";
import { resources } from "@/lib/resources-data";
import { Logo } from "./Logo";

// Deliberately small. Four columns of real, useful links — not a keyword-
// stuffed link farm, and not a duplicate of the whole sitemap.
export function Footer() {
  return (
    <footer className="mt-20 border-t border-tf-border bg-tf-paper-deep text-tf-ink-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo size="footer" />
          {/* The brand tagline as it appears on the logo lockup. It lives here
              as brand furniture rather than in page copy, which is written
              specifically for groomers rather than in general growth language. */}
          <p className="mt-3 text-xs tf-caps text-tf-brown-dark">{business.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed">{business.shortDescription}</p>
          <p className="mt-3 text-sm">
            <span className="font-semibold text-tf-ink">{offer.priceLine}</span> — cancel anytime.
          </p>
          {socialProfiles.length ? (
            <ul className="mt-4 flex flex-wrap gap-4 text-sm">
              {socialProfiles.map((p) => (
                <li key={p.url}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-tf-brown-dark">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <nav aria-labelledby="footer-services">
          <h2 id="footer-services" className="tf-caps text-xs text-tf-ink">
            What we do
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {serviceNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-tf-brown-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-proof">
          <h2 id="footer-proof" className="tf-caps text-xs text-tf-ink">
            Case studies
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href={PATHS.caseStudies} className="font-semibold hover:text-tf-brown-dark">
                All case studies
              </Link>
            </li>
            {caseStudyBuilds.map((b) => (
              <li key={b.slug}>
                <Link href={caseStudyPath(b.slug)} className="hover:text-tf-brown-dark">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-company">
          <h2 id="footer-company" className="tf-caps text-xs text-tf-ink">
            Company
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href={PATHS.about} className="hover:text-tf-brown-dark">
                About Tongfluence
              </Link>
            </li>
            <li>
              <Link href={PATHS.book} className="hover:text-tf-brown-dark">
                Book a call
              </Link>
            </li>
            <li>
              <Link href={PATHS.resources} className="hover:text-tf-brown-dark">
                Resources
              </Link>
            </li>
            {resources.map((r) => (
              <li key={r.slug}>
                <Link href={`/resources/${r.slug}`} className="hover:text-tf-brown-dark">
                  {r.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-tf-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. Marketing and SEO for dog grooming businesses.
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href={PATHS.privacy} className="hover:text-tf-brown-dark">
                Privacy
              </Link>
            </li>
            <li>
              <Link href={PATHS.terms} className="hover:text-tf-brown-dark">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
