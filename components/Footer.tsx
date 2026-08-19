import Link from "next/link";
import { business, footerNav, hours, serviceAreas, serviceAreaGeneral, PATHS } from "@/lib/site-data";
import { PawIcon } from "./PawIcon";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream-deep text-ink-soft">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-ink">
            <PawIcon className="h-6 w-6 text-terracotta" />
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
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Site</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNav.map((item) => (
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

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Areas We Serve</h2>
          <p className="mt-3 text-sm">
            {serviceAreas.join(", ")}, and {serviceAreaGeneral}.
          </p>
          <Link href={PATHS.mobile} className="mt-3 inline-block text-sm font-semibold text-terracotta-dark hover:underline">
            See mobile grooming areas →
          </Link>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center text-xs text-ink-soft/70">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
