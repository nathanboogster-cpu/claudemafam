import Image from "next/image";

// The client's logo mark: the dog and cat line art from their logo on its
// teal tile (generated from public/images/logo.png). Decorative next to the
// business name, so it has empty alt text.
export function BrandMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/images/logo-mark.png"
      alt=""
      width={size}
      height={size}
      preload
      className={`shrink-0 rounded-xl ${className}`}
    />
  );
}
