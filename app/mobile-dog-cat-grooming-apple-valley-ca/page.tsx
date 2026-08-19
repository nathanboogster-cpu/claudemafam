import type { Metadata } from "next";
import { serviceAreaPages } from "@/lib/site-data";
import { AreaPageContent } from "@/components/AreaPageContent";

const area = serviceAreaPages.find((a) => a.city === "Apple Valley")!;

export const metadata: Metadata = {
  title: "Mobile Dog & Cat Grooming in Apple Valley, CA | Pampered Puppies",
  description:
    "Mobile dog & cat grooming in Apple Valley, CA — Pampered Puppies At Your Door brings in-driveway grooming from our Victorville studio. Call to check availability.",
  alternates: { canonical: area.slug },
};

export default function AppleValleyPage() {
  return <AreaPageContent area={area} />;
}
