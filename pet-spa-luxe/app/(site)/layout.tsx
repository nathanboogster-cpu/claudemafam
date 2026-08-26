import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PromoBar } from "@/components/PromoBar";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-data";

// Chrome for the public marketing site only — isolated in this route group
// so standalone routes (e.g. app/analytics-report) can render without the
// header/nav/footer by simply living outside this group.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={localBusinessSchema(SITE_URL)} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-psl-brass-dark focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <PromoBar />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
