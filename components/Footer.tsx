import Image from "next/image";
import Link from "next/link";
import {
  business,
  hours,
  serviceAreaGeneral,
  PATHS,
  serviceNav,
  areaNavLinks,
} from "@/lib/site-data";

const companyLinks = [
  { label: "Home", href: PATHS.home },
  { label: "About", href: PATHS.about },
  { label: "Gallery", href: PATHS.gallery },
  { label: "Reviews", href: PATHS.reviews },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
  { label: "Employment", href: PATHS.employment },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream-deep text-ink-soft">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 text-ink">
            <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
              <Image src="/images/logo-icon.png" alt="" fill className="object-cover" sizes="32px" />
            </span>
            <span className="font-display text-lg font-bold">{business.name}</span>
          </div>
          <p className="mt-3 text-sm">
            Dog & cat grooming in Victorville, CA — in-store and at your door.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href={business.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-dark">
              Facebook
            </a>
            <a href={business.socials.yelp} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-dark">
              Yelp
            </a>
            <a href={business.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-dark">
              X / Twitter
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {serviceNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-terracotta-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Service Areas</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {areaNavLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-terracotta-dark">
                  Mobile Grooming in {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink-soft/80">and {serviceAreaGeneral}.</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-terracotta-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={business.phoneHref} className="hover:text-terracotta-dark">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-terracotta-dark break-all">
                {business.email}
              </a>
            </li>
            <li>{business.addressFull}</li>
          </ul>
          {/* Hours pending final confirmation from Donna/Ellen — see lib/site-data.ts */}
          <h2 className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink">
            Hours <span className="font-normal normal-case text-xs text-ink-soft/70">(pending confirmation)</span>
          </h2>
          <ul className="mt-2 space-y-1 text-sm">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center text-xs text-ink-soft/70">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
