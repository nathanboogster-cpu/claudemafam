import { townPages } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { TownPageContent } from "@/components/TownPageContent";

const town = townPages.find((t) => t.city === "Gladwyne")!;

export const metadata = pageMetadata({
  title: "Dog Grooming Near Gladwyne, PA | I Love Dogs Pet Grooming",
  description:
    "Dog grooming for Gladwyne, PA from our Bryn Mawr salon, with pickup and delivery. Packages from $75. Call 610-525-7387.",
  path: town.slug,
});

export default function GladwynePage() {
  return <TownPageContent town={town} />;
}
