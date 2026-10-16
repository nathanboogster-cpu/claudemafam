import Link from "next/link";
import { business, nav, PATHS, type SitePath } from "@/lib/site-data";
import { CallButton, DirectionsLink, PhoneLink } from "./Cta";

const footerPages: { label: string; href: SitePath }[] = [{ label: "Home", href: PATHS.home }, ...nav];

// Page chrome (skip link, header, footer, sticky mobile call bar). Each page
// passes its own path so aria-current is rendered on the server, with no
// client-side pathname hook.
export function SiteShell({ path, children }: { path?: SitePath; children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link href={PATHS.home} className="brand" aria-current={path === PATHS.home ? "page" : undefined}>
            <span className="brand-name">{business.shortName}</span>
            <span className="brand-sub">Pet Grooming · Bryn Mawr, PA</span>
          </Link>
          <nav aria-label="Main" className="nav">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={path === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <CallButton where="header" className="btn btn-primary header-call" />
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        {children}
      </main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <h2 className="footer-h">{business.name}</h2>
            <p>
              {business.street}
              <br />
              {business.city}, {business.region} {business.zip}
              <br />
              <PhoneLink where="footer" />
              <br />
              <DirectionsLink where="footer" />
            </p>
          </div>
          <div>
            <h2 className="footer-h">Pages</h2>
            <ul className="footer-list">
              {footerPages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="footer-h">Find us</h2>
            <ul className="footer-list">
              <li>
                <a href={business.facebookUrl} rel="noopener">
                  Facebook
                </a>
              </li>
              <li>
                <a href={business.yelpUrl} rel="noopener">
                  Yelp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="wrap footer-bottom">
          © {new Date().getFullYear()} {business.name}. Family-owned dog grooming in Bryn Mawr, PA.
        </p>
      </footer>

      <div className="sticky-call">
        <CallButton where="sticky-bar" className="btn btn-accent" />
      </div>
    </>
  );
}

// Hero band shared by every page: optional kicker, the page's only <h1>, a
// lead built from short lines, then CTAs.
export function Hero({
  kicker,
  title,
  lines,
  children,
}: {
  kicker?: string;
  title: string;
  lines: React.ReactNode[];
  children?: React.ReactNode;
}) {
  return (
    <section className="hero">
      <div className="wrap">
        {kicker ? <p className="kicker">{kicker}</p> : null}
        <h1>{title}</h1>
        <p className="lead">
          {lines.map((line, i) => (
            <span key={i}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </p>
        {children}
      </div>
    </section>
  );
}
