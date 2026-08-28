import Image from "next/image";

type BrandLogoProps = {
  priority?: boolean;
  light?: boolean;
};

export function BrandLogo({ priority = false, light = false }: BrandLogoProps) {
  return (
    <Image
      className={light ? "brand-logo brand-logo--light" : "brand-logo"}
      src="/brand/vem-viver-logo-master.svg"
      alt="Vem Viver"
      width={697}
      height={199}
      priority={priority}
    />
  );
}
