import Link from "next/link";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { CallButton } from "./CTAButton";
import { PATHS, services, servicePath, market } from "@/lib/site-data";
import { ArrowIcon } from "./icons";

const navLinks = [
  { href: PATHS.serviceAreas, label: "Service Areas" },
  { href: PATHS.about, label: "About" },
  { href: PATHS.faq, label: "FAQ" },
  { href: PATHS.blog, label: "Guides" },
  { href: PATHS.contact, label: "Contact" },
];

/**
 * Site header. Server-rendered, so every nav link is in the initial HTML and
 * crawlable; only the mobile drawer ships JavaScript.
 *
 * The Services dropdown opens on hover AND on focus-within, so it is fully
 * keyboard-operable without any JS — and its links are real <a> elements in
 * the DOM whether or not it is open, so Google discovers the service pages
 * from the markup alone.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-goc-border bg-goc-cream/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4">
        {/* No aria-label here: an aria-label would override the visible
            wordmark text and break WCAG 2.5.3 (Label in Name). The visible
            text "Groomer On Call / Mobile Pet Grooming" is already a good
            accessible name for the home link. */}
        <Link href={PATHS.home} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <li className="group relative">
              <Link
                href={PATHS.services}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-bold text-goc-ink hover:text-goc-magenta-darker"
              >
                Services
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                  <path d="m6 9.5 6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <div className="invisible absolute left-0 top-full z-50 w-72 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="rounded-2xl border border-goc-border bg-white p-2 shadow-xl shadow-black/10">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={servicePath(service.slug)}
                        className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-goc-ink hover:bg-goc-cream hover:text-goc-magenta-darker"
                      >
                        {service.navLabel}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-1 border-t border-goc-border pt-1">
                    <Link
                      href={PATHS.services}
                      className="flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-bold text-goc-magenta-darker hover:bg-goc-cream"
                    >
                      All services <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-bold text-goc-ink hover:text-goc-magenta-darker"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop only: on a phone the sticky bottom bar carries the call
              action, so repeating it in the header would waste header space.
              The visibility lives on this wrapper rather than on the button —
              `hidden` and the button's own `inline-flex` are both display
              utilities, so combining them on one element leaves the winner up
              to Tailwind's stylesheet order rather than the class order. */}
          <span className="hidden md:block">
            <CallButton location="header" className="text-sm" />
          </span>
          <MobileNav />
        </div>
      </div>

      {/* Thin, permanent statement of the two things a local searcher needs
          to know in the first second: it's mobile, and where it operates. */}
      <div className="goc-dark bg-goc-ink">
        <p className="mx-auto max-w-6xl px-4 py-1.5 text-center text-xs font-bold uppercase tracking-[0.12em] text-white">
          Mobile pet grooming <span className="text-goc-orange">·</span> we come to your home{" "}
          <span className="text-goc-orange">·</span> {market.cityState} area
        </p>
      </div>
    </header>
  );
}
