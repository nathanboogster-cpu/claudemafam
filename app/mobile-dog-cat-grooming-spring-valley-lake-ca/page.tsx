import type { Metadata } from "next";
import { serviceAreaPages } from "@/lib/site-data";
import { AreaPageContent } from "@/components/AreaPageContent";

const area = serviceAreaPages.find((a) => a.city === "Spring Valley Lake")!;

export const metadata: Metadata = {
  title: "Mobile Dog & Cat Grooming in Spring Valley Lake, CA | Pampered Puppies",
  description:
    "Mobile dog & cat grooming in Spring Valley Lake, CA — Pampered Puppies At Your Door brings in-driveway grooming from our Victorville studio. Call to check availability.",
  alternates: { canonical: area.slug },
};

export default function SpringValleyLakePage() {
  return <AreaPageContent area={area} />;
}
