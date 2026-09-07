import Image from "next/image";
import Link from "next/link";
import { business, PATHS, serviceNav, areaNav } from "@/lib/site-data";
import { MobileNav } from "./MobileNav";
import { MobileHeaderCall } from "./MobileHeaderCall";
import { CallButton, RequestButton } from "./CTAButton";
import { NavDropdown } from "./NavDropdown";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-psl-border bg-psl-cream/95 backdrop-blur supports-[backdrop-filter]:bg-psl-cream/80 font-psl-sans">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href={PATHS.home} className="flex items-center gap-2 shrink-0 text-psl-ink">
          <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full border border-psl-border bg-white">
            <Image src={business.logoMark} alt="" fill className="object-cover" sizes="44px" />
          </span>
          <span className="font-psl-display text-lg font-bold leading-tight sm:text-xl">
            {business.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-5 text-sm font-medium text-psl-ink-soft">
          <Link href={PATHS.home} className="hover:text-psl-brass-dark whitespace-nowrap">
            Home
          </Link>
          <Link href={PATHS.about} className="hover:text-psl-brass-dark whitespace-nowrap">
            About
          </Link>
          <NavDropdown label="Services" items={serviceNav} />
          <NavDropdown label="Service Areas" items={areaNav} />
          <Link href={PATHS.gallery} className="hover:text-psl-brass-dark whitespace-nowrap">
            Gallery
          </Link>
          <Link href={PATHS.reviews} className="hover:text-psl-brass-dark whitespace-nowrap">
            Reviews
          </Link>
          <Link href={PATHS.faq} className="hover:text-psl-brass-dark whitespace-nowrap">
            FAQ
          </Link>
          <Link href={PATHS.contact} className="hover:text-psl-brass-dark whitespace-nowrap">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a href={business.phoneHref} className="text-sm font-semibold text-psl-ink-soft hover:text-psl-brass-dark whitespace-nowrap">
            {business.phoneDisplay}
          </a>
          <RequestButton location="header" variant="secondary" className="px-4 py-2 text-sm" />
          <CallButton location="header" variant="primary" className="px-4 py-2 text-sm" />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <MobileHeaderCall />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
