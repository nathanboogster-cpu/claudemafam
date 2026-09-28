import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ConversionTracking } from "@/components/ConversionTracking";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-data";

/**
 * Shell for every public page.
 *
 * The LocalBusiness (PetGroomer) entity is emitted here, once per page, with
 * a stable @id — so service pages, blog posts and the homepage all resolve
 * to the same business entity rather than declaring a new one each.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={localBusinessSchema(SITE_URL)} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-goc-ink focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
      <ConversionTracking />
    </>
  );
}
