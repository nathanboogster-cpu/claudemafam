import Link from "next/link";
import { business, mainNav } from "@/lib/site-data";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-border bg-sky-deep text-ink-soft">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-ink">
            <BrandMark className="h-8 w-8" />
            <span className="font-display text-lg font-bold">{business.name}</span>
          </div>
          <p className="mt-3 text-sm">{business.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Menu</h2>
          <ul className="mt-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-[44px] items-center hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Service Area</h2>
          <p className="mt-3 text-sm">Mobile grooming across {business.state}. We come to your doorstep.</p>
          <h2 className="mt-5 text-sm font-semibold uppercase tracking-wide text-ink">Booking</h2>
          <p className="mt-3 text-sm">By appointment request. We get back to you to confirm a time.</p>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} {business.name}. Licensed, insured, eco-friendly mobile pet grooming.{" "}
        <a href="https://www.tongfluence.com" className="inline-flex min-h-6 items-center whitespace-nowrap underline underline-offset-2 hover:opacity-80">
          Website by Tongfluence
        </a>
      </div>
    </footer>
  );
}
