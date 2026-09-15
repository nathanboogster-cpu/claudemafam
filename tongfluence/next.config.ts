import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in a subdirectory of a monorepo that also contains the
  // grooming client sites Tongfluence builds, each with its own lockfile.
  // Pin the Turbopack root so it doesn't guess based on a sibling lockfile.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
