import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_URL, PATHS, business } from "@/lib/site-data";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const defaultTitle = "Mobile Dog Grooming in Los Angeles | Bark and Bork Mobile Pet Spa";
const defaultDescription =
  "Bark and Bork Mobile Pet Spa brings professional dog grooming to your door — based in Compton, serving greater Los Angeles. Bath & Tidy from $75, Full Groom from $100. Book online today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${business.shortName}`,
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
    <html lang="en" className={`h-full antialiased ${dmSerif.variable} ${manrope.variable}`}>
      <body className="min-h-full flex flex-col font-bb-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
