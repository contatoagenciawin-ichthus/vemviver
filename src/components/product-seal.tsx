import Image from "next/image";

type ProductSealProps = {
  kind: "grape" | "orange";
};

export function ProductSeal({ kind }: ProductSealProps) {
  const isGrape = kind === "grape";

  return (
    <article className={`product-seal product-seal--${kind}`}>
      <div className="product-seal__asset">
        <Image
          alt={
            isGrape
              ? "Selo de referência Suco de Uva Puro"
              : "Identificador conceitual de laranja Vem Viver"
          }
          height={isGrape ? 350 : 280}
          src={
            isGrape
              ? "/brand/seal-uva-puro.svg"
              : "/brand/seal-laranja-puro.svg"
          }
          width={isGrape ? 135 : 280}
        />
      </div>
      <div className="product-seal__copy">
        <p className="section-index">
          {isGrape ? "Elemento de terceiro" : "Elemento proprietário"}
        </p>
        <h2>
          {isGrape
            ? "Aplicação condicionada à validação."
            : "Um recurso visual da linguagem Vem Viver."}
        </h2>
        <p>
          {isGrape
            ? "O arquivo permanece no projeto como referência. Qualquer uso comercial dependerá da confirmação das regras, autorização aplicável e adequação do produto."
            : "Este identificador é um estudo proprietário da Vem Viver. Sua redação e aplicação comercial também serão revistas antes de qualquer publicação ou impressão."}
        </p>
      </div>
    </article>
  );
}
