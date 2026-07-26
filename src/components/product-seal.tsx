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
              ? "Selo Suco de Uva Puro, certificado de pureza e qualidade"
              : "Identificador Suco de Laranja Puro Vem Viver"
          }
          height={isGrape ? 350 : 280}
          src={
            isGrape
              ? "/brand/seal-uva-puro.png"
              : "/brand/seal-laranja-puro.svg"
          }
          width={isGrape ? 135 : 280}
        />
      </div>
      <div className="product-seal__copy">
        <p className="section-index">
          {isGrape ? "Pureza certificada" : "A identidade da pureza"}
        </p>
        <h2>
          {isGrape
            ? "Suco de uva puro, com certificação."
            : "Laranja pura, com a assinatura Vem Viver."}
        </h2>
        <p>
          {isGrape
            ? "O selo identifica o suco de uva certificado em pureza e qualidade pela Associação Brasileira de Elaboradores de Suco de Uva Puro."
            : "Este identificador proprietário comunica a proposta de um suco de laranja puro e integral. Ele faz parte da linguagem da Vem Viver e não representa uma certificação oficial."}
        </p>
      </div>
    </article>
  );
}
