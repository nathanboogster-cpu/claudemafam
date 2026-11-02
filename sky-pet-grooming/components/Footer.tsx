import Link from "next/link";
import { BOOKING_URL, business, mainNav, PATHS, serviceAreas } from "@/lib/site-data";
import { PhoneLink } from "./CTAButton";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="bg-rainbow h-1.5" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1.6fr]">
        <div>
          <Link href={PATHS.home} className="inline-block rounded-2xl bg-white p-3" aria-label={`${business.name} home`}>
            <Logo className="h-16 w-auto" />
          </Link>
          <p className="mt-4 text-sm">{business.tagline}</p>
          <p className="mt-2 font-display text-sm font-bold text-white">{business.slogan}</p>
          <p className="mt-3 text-sm">Licensed, insured and eco-friendly.</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Menu</h2>
          <ul className="mt-2 text-sm">
            {[{ label: "Home", href: PATHS.home }, ...mainNav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-[44px] items-center hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-2 text-sm">
            <li>
              <PhoneLink location="footer" className="inline-flex min-h-[44px] items-center text-white" />
            </li>
            <li>
              <PhoneLink which="phoneAlt" location="footer" className="inline-flex min-h-[44px] items-center text-white" />
            </li>
            <li>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center font-semibold text-white hover:underline">
                Book Online
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            <Link href={PATHS.serviceArea} className="inline-flex min-h-6 items-center hover:underline">
              Service Areas
            </Link>
          </h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 text-sm">
            {serviceAreas.map((a) => (
              <li key={a.slug}>
                <Link href={a.slug} className="inline-flex min-h-[44px] items-center hover:text-white">
                  {a.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} {business.name}.{" "}
        <a href="https://www.tongfluence.com" className="inline-flex min-h-6 items-center whitespace-nowrap underline underline-offset-2 hover:text-white">
          Website by Tongfluence
        </a>
      </div>
    </footer>
  );
}
