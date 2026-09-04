import Link from "next/link";
import { business, PATHS, serviceNav, areaNav } from "@/lib/site-data";
import { PawIcon } from "./PawIcon";
import { MobileNav } from "./MobileNav";
import { MobileHeaderCall } from "./MobileHeaderCall";
import { CallButton } from "./CTAButton";
import { NavDropdown } from "./NavDropdown";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-fh-border bg-fh-cream/95 backdrop-blur supports-[backdrop-filter]:bg-fh-cream/80 font-fh-sans">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href={PATHS.home} className="flex shrink-0 items-center gap-2" aria-label={business.name}>
          <PawIcon className="h-7 w-7 text-fh-amber-dark" />
          <span className="font-fh-display text-lg font-bold leading-tight text-fh-ink sm:text-xl">
            Flo&apos;s Happy Clipper
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-5 text-sm font-medium text-fh-ink-soft">
          <Link href={PATHS.home} className="hover:text-fh-amber-dark whitespace-nowrap">
            Home
          </Link>
          <Link href={PATHS.about} className="hover:text-fh-amber-dark whitespace-nowrap">
            About
          </Link>
          <NavDropdown label="Services" items={serviceNav} />
          <NavDropdown label="Service Areas" items={areaNav} />
          <Link href={PATHS.gallery} className="hover:text-fh-amber-dark whitespace-nowrap">
            Gallery
          </Link>
          <Link href={PATHS.reviews} className="hover:text-fh-amber-dark whitespace-nowrap">
            Reviews
          </Link>
          <Link href={PATHS.faq} className="hover:text-fh-amber-dark whitespace-nowrap">
            FAQ
          </Link>
          <Link href={PATHS.contact} className="hover:text-fh-amber-dark whitespace-nowrap">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a href={business.phoneHref} className="text-sm font-semibold text-fh-ink-soft hover:text-fh-amber-dark whitespace-nowrap">
            {business.phoneDisplay}
          </a>
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
