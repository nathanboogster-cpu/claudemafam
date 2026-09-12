import Link from "next/link";
import Image from "next/image";
import { business, hours, trustPillars, PATHS, mainNav } from "@/lib/site-data";
import { ShieldCheckIcon, TreesIcon, HouseIcon, ScissorsIcon } from "./icons";

const badgeIcons = [ShieldCheckIcon, TreesIcon, HouseIcon, ScissorsIcon];

const companyLinks = [
  { label: "Home", href: PATHS.home },
  { label: "About", href: PATHS.about },
  { label: "Gallery", href: PATHS.gallery },
  { label: "Reviews", href: PATHS.reviews },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
  { label: "Reservations", href: PATHS.reservations },
  { label: "Requirements", href: PATHS.requirements },
];

export function Footer() {
  return (
    <footer className="border-t border-bw-border bg-bw-cream-deep text-bw-ink-soft font-bw-sans">
      <div className="border-b border-bw-border bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5">
          {trustPillars.map((s, i) => {
            const Icon = badgeIcons[i];
            return (
              <div key={s.label} className="flex items-center gap-2 text-bw-ink">
                <Icon className="h-5 w-5 shrink-0 text-bw-red-dark" />
                <span className="text-sm font-semibold whitespace-nowrap">
                  {s.value} <span className="font-normal text-bw-ink-soft">{s.label}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="relative block h-9 w-[86px] overflow-hidden rounded-lg border border-bw-border">
            <Image src="/images/logo-mark.jpg" alt="Bow Wags" fill className="object-cover" sizes="86px" />
          </span>
          <p className="mt-3 text-sm">Dog daycare, boarding &amp; grooming in {business.primaryLocation} — {business.regionLabel}.</p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href={business.yelpUrl} target="_blank" rel="noopener noreferrer" className="hover:text-bw-red-dark">
              Yelp
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-bw-ink">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href={PATHS.services} className="font-semibold hover:text-bw-red-dark">
                All Services
              </Link>
            </li>
            {mainNav.slice(0, 3).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-bw-red-dark">
                  Dog {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={PATHS.rates} className="hover:text-bw-red-dark">
                Rates
              </Link>
            </li>
            <li>
              <Link href={PATHS.serviceAreas} className="hover:text-bw-red-dark">
                Service Areas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-bw-ink">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-bw-red-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-bw-ink">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={business.phoneHref} className="hover:text-bw-red-dark">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-bw-red-dark">
                {business.email}
              </a>
            </li>
            <li>{business.addressFull}</li>
          </ul>
          <h2 className="mt-4 text-sm font-semibold uppercase tracking-wide text-bw-ink">Hours</h2>
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

      <div className="border-t border-bw-border py-4 text-center text-xs text-bw-ink-soft">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
