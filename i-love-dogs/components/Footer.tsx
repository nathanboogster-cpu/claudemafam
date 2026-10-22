import Link from "next/link";
import { business, companyNav, serviceNav, areaNavLinks, serviceAreaGeneral } from "@/lib/site-data";
import { BrandMark } from "./BrandMark";
import { DirectionsLink, PhoneLink } from "./CTAButton";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream-deep text-ink-soft">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 text-ink">
            <BrandMark className="h-8 w-8" />
            <span className="font-display text-lg font-bold">{business.name}</span>
          </div>
          <p className="mt-3 text-sm">Family-owned dog grooming in Bryn Mawr, PA, with pickup and delivery.</p>
          <ul className="mt-2 flex gap-4 text-sm">
            <li>
              <a href={business.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center hover:text-brand">
                Facebook
              </a>
            </li>
            <li>
              <a href={business.socials.yelp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center hover:text-brand">
                Yelp
              </a>
            </li>
          </ul>
        </div>

        <FooterList title="Services" items={serviceNav} />

        <div>
          <FooterList title="Service Areas" items={areaNavLinks} />
          <p className="mt-2 text-xs">and {serviceAreaGeneral}.</p>
        </div>

        <FooterList title="Company" items={companyNav} />

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Contact</h2>
          <address className="mt-3 not-italic text-sm">
            {business.addressLine1}
            <br />
            {business.addressCity}, {business.addressState} {business.addressZip}
          </address>
          <ul className="mt-1 text-sm">
            <li>
              <PhoneLink location="footer" className="inline-flex min-h-[44px] items-center" />
            </li>
            <li>
              <DirectionsLink location="footer" className="inline-flex min-h-[44px] items-center" />
            </li>
          </ul>
          <h2 className="mt-3 text-sm font-semibold uppercase tracking-wide text-ink">Hours</h2>
          <p className="mt-2 text-sm">{business.hoursNote}</p>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} {business.name}. Family-owned dog grooming in Bryn Mawr, PA.{" "}
        <a href="https://www.tongfluence.com" className="inline-flex min-h-6 items-center whitespace-nowrap underline underline-offset-2 hover:opacity-80">
          Website by Tongfluence
        </a>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">{title}</h2>
      <ul className="mt-2 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="inline-flex min-h-[44px] items-center hover:text-brand">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
