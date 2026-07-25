import { BrandLogo } from "@/components/brand-logo";

type BottleProps = {
  tone: "tinto" | "branco" | "rose" | "laranja";
  label: string;
};

export function Bottle({ tone, label }: BottleProps) {
  return (
    <div className={`bottle bottle--${tone}`} aria-label={`Suco de ${label}`}>
      <div className="bottle__neck" />
      <div className="bottle__glass">
        <div className="bottle__label">
          <span className="bottle__brand">
            <BrandLogo />
          </span>
          <span className="bottle__flavor">{label}</span>
          <span className="bottle__type">Suco 100% integral</span>
          <span className="bottle__volume">1 L</span>
        </div>
      </div>
    </div>
  );
}
