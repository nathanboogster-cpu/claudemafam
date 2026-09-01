import Link from "next/link";
import { TruckIcon, DogIcon } from "@/components/icons";
import { PawIcon } from "@/components/PawIcon";
import { business, hours, PATHS, serviceNav, areaNav } from "@/lib/site-data";

const companyLinks = [
  { label: "Home", href: PATHS.home },
  { label: "About", href: PATHS.about },
  { label: "Gallery", href: PATHS.gallery },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
];

export function Footer() {
  return (
    <footer className="border-t border-bb-border bg-bb-cream-deep text-bb-ink-soft font-bb-sans">
      <div className="border-b border-bb-border bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5">
          <div className="flex items-center gap-2 text-bb-ink">
            <TruckIcon className="h-5 w-5 shrink-0 text-bb-coral-dark" />
            <span className="text-sm font-semibold">Mobile Grooming — We Come to You</span>
          </div>
          <div className="flex items-center gap-2 text-bb-ink">
            <DogIcon className="h-5 w-5 shrink-0 text-bb-coral-dark" />
            <span className="text-sm font-semibold">Small to Extra-Large Dogs</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bb-coral-dark text-white">
              <PawIcon className="h-5 w-5" />
            </span>
            <span className="font-bb-display text-lg font-bold text-bb-ink">Bark &amp; Bork</span>
          </div>
          <p className="mt-3 text-sm">
            Mobile dog grooming based in {business.homeBase}, serving pet owners throughout the {business.broadMarket}.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-bb-ink">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {serviceNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-bb-coral-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-bb-ink">Service Areas</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {areaNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-bb-coral-dark">
                  Mobile Grooming in {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-bb-ink">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-bb-coral-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-bb-ink">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={business.phoneHref} className="hover:text-bb-coral-dark">
                {business.phoneDisplay}
              </a>
            </li>
            <li>Mobile — based in {business.homeBase}</li>
            <li>
              <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-bb-coral-dark">
                Book Online →
              </a>
            </li>
          </ul>
          <h2 className="mt-4 text-sm font-semibold uppercase tracking-wide text-bb-ink">Hours</h2>
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

      <div className="border-t border-bb-border py-4 text-center text-xs text-bb-ink-soft">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
