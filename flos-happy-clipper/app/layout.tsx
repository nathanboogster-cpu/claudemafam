import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_URL, PATHS, business } from "@/lib/site-data";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const defaultTitle = "Dog Grooming in Eatontown, NJ | Flo's Happy Clipper";
const defaultDescription =
  "Established local dog grooming salon on Main St in Eatontown, NJ, serving Monmouth County. Call (732) 544-8186 to schedule.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | Flo's Happy Clipper",
  },
  description: defaultDescription,
  alternates: { canonical: PATHS.home },
  openGraph: {
    type: "website",
    siteName: business.name,
    title: defaultTitle,
    description: defaultDescription,
    url: PATHS.home,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${baloo.variable} ${nunito.variable}`}>
      <body className="min-h-full flex flex-col font-fh-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
