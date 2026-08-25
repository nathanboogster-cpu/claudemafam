import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in a subdirectory of a monorepo that also contains the
  // (unrelated) Pampered Puppies app, each with its own lockfile. Pin the
  // Turbopack root here so it doesn't guess based on the parent lockfile.
  turbopack: {
    root: path.join(__dirname),
  },
  // Inlines critical above-the-fold CSS and defers the rest, reducing
  // render-blocking CSS on first paint (LCP).
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
