import Image from "next/image";

type BrandLogoProps = {
  priority?: boolean;
  light?: boolean;
};

export function BrandLogo({ priority = false, light = false }: BrandLogoProps) {
  return (
    <Image
      className={light ? "brand-logo brand-logo--light" : "brand-logo"}
      src="/brand/vem-viver-logo.png"
      alt="Vem Viver"
      width={820}
      height={240}
      priority={priority}
    />
  );
}
