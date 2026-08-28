import { BrandLogo } from "@/components/brand-logo";

type BottleProps = {
  tone: "tinto" | "branco" | "rose" | "laranja";
  label: string;
  volume?: "1 L" | "1,5 L";
  size?: "1l" | "1-5l";
};

export function Bottle({ tone, label, volume = "1 L", size = "1l" }: BottleProps) {
  return (
    <div
      className={`bottle bottle--${tone} bottle--${size}`}
      aria-label={`${label} Vem Viver, estudo de embalagem de ${volume}`}
    >
      <div className="bottle__neck" />
      <div className="bottle__glass">
        <div className="bottle__label">
          <span className="bottle__brand">
            <BrandLogo />
          </span>
          <span className="bottle__flavor">{label}</span>
          <span className="bottle__type">Suco integral</span>
          <span className="bottle__volume">{volume}</span>
        </div>
      </div>
    </div>
  );
}
