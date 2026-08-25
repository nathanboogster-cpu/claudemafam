import type { Metadata } from "next";
import { serviceAreaPages } from "@/lib/site-data";
import { AreaPageContent } from "@/components/AreaPageContent";

const area = serviceAreaPages.find((a) => a.city === "Helendale")!;

export const metadata: Metadata = {
  title: "Mobile Dog & Cat Grooming in Helendale, CA | Pampered Puppies",
  description:
    "Mobile dog & cat grooming in Helendale, CA — Pampered Puppies At Your Door brings in-driveway grooming from our Victorville studio. Call to check availability.",
  alternates: { canonical: area.slug },
};

export default function HelendalePage() {
  return <AreaPageContent area={area} />;
}
