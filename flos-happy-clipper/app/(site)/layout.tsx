import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-data";

// Chrome for the public marketing site only — isolated in this route group
// so any standalone routes outside it (none currently) could render
// without the header/nav/footer.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={localBusinessSchema(SITE_URL)} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-fh-amber-dark focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
