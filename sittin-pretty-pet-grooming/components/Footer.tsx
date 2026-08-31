import Link from "next/link";
import { HeartIcon, DogIcon, CatIcon } from "@/components/icons";
import { PawIcon } from "@/components/PawIcon";
import { business, hours, PATHS, serviceNav, areaNav } from "@/lib/site-data";

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
    <footer className="border-t border-sp-border bg-sp-cream-deep text-sp-ink-soft font-sp-sans">
      <div className="border-b border-sp-border bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5">
          <div className="flex items-center gap-2 text-sp-ink">
            <HeartIcon className="h-5 w-5 shrink-0 text-sp-green-dark" />
            <span className="text-sm font-semibold">Established Local Grooming Salon</span>
          </div>
          <div className="flex items-center gap-2 text-sp-ink">
            <DogIcon className="h-5 w-5 shrink-0 text-sp-green-dark" />
            <CatIcon className="h-5 w-5 shrink-0 text-sp-green-dark" />
            <span className="text-sm font-semibold">Dog & Cat Grooming</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 text-sp-ink">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sp-green-dark text-sp-cream">
              <PawIcon className="h-5 w-5" />
            </span>
            <span className="font-sp-display text-lg font-bold">{business.shortName}</span>
          </div>
          <p className="mt-3 text-sm">
            Full-service dog & cat grooming in {business.primaryLocation}, serving pet owners throughout the{" "}
            {business.secondaryMarket} area.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sp-ink">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {serviceNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sp-green-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sp-ink">Service Areas</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {areaNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sp-green-dark">
                  Pet Grooming in {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sp-ink">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sp-green-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sp-ink">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={business.phoneHref} className="hover:text-sp-green-dark">
                {business.phoneDisplay}
              </a>
            </li>
            <li>{business.addressFull}</li>
          </ul>
          <h2 className="mt-4 text-sm font-semibold uppercase tracking-wide text-sp-ink">Hours</h2>
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

      <div className="border-t border-sp-border py-4 text-center text-xs text-sp-ink-soft">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
