import Link from "next/link";
import { business, mainNav, PATHS } from "@/lib/site-data";
import { MobileNav } from "./MobileNav";
import { BookButton } from "./CTAButton";
import { BrandMark } from "./BrandMark";

// "Book" is the header button, so it is left out of the text links.
const desktopLinks = mainNav.filter((item) => item.href !== PATHS.book);

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-border bg-sky/95 backdrop-blur supports-[backdrop-filter]:bg-sky/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href={PATHS.home} className="flex items-center gap-2 shrink-0 text-ink">
          <BrandMark />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold sm:text-xl">{business.name}</span>
            <span className="block text-xs text-ink-soft">Mobile Grooming · California</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 text-sm font-medium text-ink-soft">
          {desktopLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand whitespace-nowrap">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <BookButton location="header" className="px-4 py-2 text-sm" />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
