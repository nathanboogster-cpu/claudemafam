import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in a subdirectory of a monorepo that also contains the
  // (unrelated) Pampered Puppies app, each with its own lockfile. Pin the
  // Turbopack root here so it doesn't guess based on the parent lockfile.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
