import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in a subdirectory of a monorepo that also contains
  // several other unrelated client apps, each with its own lockfile. Pin
  // the Turbopack root here so it doesn't guess based on a sibling lockfile.
  turbopack: {
    root: path.join(__dirname),
  },
  // Inlines critical above-the-fold CSS and defers the rest, reducing
  // render-blocking CSS on first paint (LCP).
  experimental: {
    optimizeCss: true,
  },
  // Preserve SEO equity from the previous bowwags.com information
  // architecture (/daycare, /boarding, /grooming) by permanently
  // redirecting those legacy URLs to their new, more specific paths.
  async redirects() {
    return [
      { source: "/daycare", destination: "/dog-daycare", permanent: true },
      { source: "/boarding", destination: "/dog-boarding", permanent: true },
      { source: "/grooming", destination: "/dog-grooming", permanent: true },
    ];
  },
};

export default nextConfig;
