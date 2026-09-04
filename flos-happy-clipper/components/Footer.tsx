import Link from "next/link";
import { HeartIcon, DogIcon } from "@/components/icons";
import { PawIcon } from "@/components/PawIcon";
import { business, hours, PATHS, serviceNav } from "@/lib/site-data";

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
    <footer className="border-t border-fh-border bg-fh-cream-deep text-fh-ink-soft font-fh-sans">
      <div className="border-b border-fh-border bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5">
          <div className="flex items-center gap-2 text-fh-ink">
            <HeartIcon className="h-5 w-5 shrink-0 text-fh-amber-dark" />
            <span className="text-sm font-semibold">Established Local Grooming Salon</span>
          </div>
          <div className="flex items-center gap-2 text-fh-ink">
            <DogIcon className="h-5 w-5 shrink-0 text-fh-amber-dark" />
            <span className="text-sm font-semibold">Dog Grooming</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <PawIcon className="h-7 w-7 shrink-0 text-fh-amber-dark" />
            <span className="font-fh-display text-lg font-bold text-fh-ink">Flo&apos;s Happy Clipper</span>
          </div>
          <p className="mt-3 text-sm">
            Dog grooming at {business.addressFull}, serving pet owners throughout {business.county}.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-fh-ink">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {serviceNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-fh-amber-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-fh-ink">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-fh-amber-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-fh-ink">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={business.phoneHref} className="hover:text-fh-amber-dark">
                {business.phoneDisplay}
              </a>
            </li>
            <li>{business.addressFull}</li>
          </ul>
          <h2 className="mt-4 text-sm font-semibold uppercase tracking-wide text-fh-ink">Hours</h2>
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

      <div className="border-t border-fh-border py-4 text-center text-xs text-fh-ink-soft">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
