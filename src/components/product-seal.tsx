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
              ? "Selo de pureza dos sucos de uva"
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
          {isGrape ? "Selo de pureza" : "Elemento proprietário"}
        </p>
        <h2>
          {isGrape
            ? "Condição confirmada com o fabricante."
            : "Um recurso visual da linguagem Vem Viver."}
        </h2>
        <p>
          {isGrape
            ? "A Casa Granda, fabricante e envasadora, confirmou a condição 100% integral e dispõe do selo de pureza para os sucos de uva. Na fase gráfica, a aplicação seguirá o arquivo oficial e as regras técnicas correspondentes."
            : "Este identificador é um estudo proprietário da Vem Viver. Sua redação e aplicação comercial serão revistas antes de qualquer publicação ou impressão."}
        </p>
      </div>
    </article>
  );
}
