import Image from "next/image";
import type { ProductTone } from "@/data/products";

type ProductMockupProps = {
  tone: ProductTone;
  volume?: "1l" | "15l";
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const names: Record<ProductTone, string> = {
  tinto: "Uva Tinto",
  branco: "Uva Branco",
  rose: "Uva Rosé",
  laranja: "Laranja",
};

export function ProductMockup({
  tone,
  volume = "1l",
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 720px) 72vw, 320px",
}: ProductMockupProps) {
  const volumeLabel = volume === "15l" ? "1,5 L" : "1 L";
  const src = `/brand/mockups-atualizados/vem-viver-${tone}-${volume}.jpg`;

  return (
    <Image
      alt={alt ?? `${names[tone]} Vem Viver, ${volumeLabel}`}
      className={`product-mockup ${className}`.trim()}
      height={1402}
      priority={priority}
      sizes={sizes}
      src={src}
      width={1122}
    />
  );
}
