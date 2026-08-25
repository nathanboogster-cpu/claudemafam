import Image from "next/image";
import Link from "next/link";
import { business, hours, PATHS, serviceNav, areaNav } from "@/lib/psl/site-data";

const companyLinks = [
  { label: "Home", href: PATHS.home },
  { label: "About", href: PATHS.about },
  { label: "Gallery", href: PATHS.gallery },
  { label: "Reviews", href: PATHS.reviews },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
];

export function Footer() {
  return (
    <footer className="border-t border-psl-border bg-psl-cream-deep text-psl-ink-soft font-psl-sans">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 text-psl-ink">
            <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full border border-psl-border bg-white">
              <Image src={business.logoMark} alt="" fill className="object-cover" sizes="36px" />
            </span>
            <span className="font-psl-display text-lg font-bold">{business.name}</span>
          </div>
          <p className="mt-3 text-sm">{business.tagline} — brought to your home in {business.primaryLocation} and the surrounding Bay Area.</p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href={business.yelpUrl} target="_blank" rel="noopener noreferrer" className="hover:text-psl-brass-dark">
              Yelp
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-psl-ink">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {serviceNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-psl-brass-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-psl-ink">Service Areas</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {areaNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-psl-brass-dark">
                  Mobile Grooming in {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-psl-ink-soft/80">
            Plus the surrounding Bay Area by mobile visit — call to confirm your address.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-psl-ink">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-psl-brass-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-psl-ink">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={business.phoneHref} className="hover:text-psl-brass-dark">
                {business.phoneDisplay}
              </a>
            </li>
            <li>{business.addressFull} <span className="text-xs text-psl-ink-soft/70">(mobile service base — not a walk-in location)</span></li>
          </ul>
          <h2 className="mt-4 text-sm font-semibold uppercase tracking-wide text-psl-ink">Hours</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="whitespace-nowrap">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-psl-border py-4 text-center text-xs text-psl-ink-soft/70">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
