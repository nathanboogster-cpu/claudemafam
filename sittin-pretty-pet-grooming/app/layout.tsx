import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_URL, PATHS, business } from "@/lib/site-data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const defaultTitle = "Pet Grooming in Funkstown & Hagerstown, MD | Sittin' Pretty Pet Grooming";
const defaultDescription =
  "Established local pet grooming salon in Funkstown, MD serving Hagerstown, Halfway & Washington County. Dog & cat grooming. Call (301) 790-0466 to schedule.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | Sittin' Pretty Pet Grooming",
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
    <html lang="en" className={`h-full antialiased ${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col font-sp-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
