import Image from "next/image";
import { business } from "@/lib/site-data";

// The owner's logo, without the phone line (the number is shown as text and
// as a tap-to-call link instead). Transparent background; 480x295 source.
export function Logo({ className = "h-12 w-auto", preload = false }: { className?: string; preload?: boolean }) {
  return (
    <Image
      src="/logo.png"
      alt={business.name}
      width={480}
      height={295}
      sizes="160px"
      preload={preload}
      className={className}
    />
  );
}
