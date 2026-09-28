import type { MetadataRoute } from "next";
import { business } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} — Dog Grooming in Eatontown, NJ`,
    short_name: business.shortName,
    description: "Established local dog grooming salon on Main St in Eatontown, NJ.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdf5ea",
    theme_color: "#fdf5ea",
    icons: [
      {
        src: "/icon.jpg",
        sizes: "740x740",
        type: "image/jpeg",
      },
    ],
  };
}
