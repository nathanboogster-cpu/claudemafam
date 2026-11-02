import { townPages } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { TownPageContent } from "@/components/TownPageContent";

const town = townPages.find((t) => t.city === "Rosemont")!;

export const metadata = pageMetadata({
  title: "Dog Grooming Near Rosemont, PA | I Love Dogs Pet Grooming",
  description:
    "Dog grooming for Rosemont, PA from our Bryn Mawr salon, with pickup and delivery. Packages from $75. Call 610-525-7387.",
  path: town.slug,
});

export default function RosemontPage() {
  return <TownPageContent town={town} />;
}
