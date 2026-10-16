import type { Metadata, Viewport } from "next";
import "./globals.css";
import { business, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: business.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f4d3a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script src="/track.js" defer />
      </body>
    </html>
  );
}
