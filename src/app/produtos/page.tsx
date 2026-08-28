import type { Metadata } from "next";
import Link from "next/link";
import { Bottle } from "@/components/bottle";
import { PublicFooter } from "@/components/public-footer";
import { PublicHeader } from "@/components/public-header";
import { packageSizes, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Produtos | Vem Viver",
  description: "Conheça a linha de sucos integrais Vem Viver.",
};

export default function ProductsPage() {
  return (
    <main className="public-site">
      <PublicHeader />

      <section className="inner-hero">
        <p className="eyebrow">Nossa linha</p>
        <h1>Sabores para viver e <em>compartilhar.</em></h1>
        <p>
          Conheça a linha Vem Viver e encontre o sabor que combina com a sua mesa,
          a sua rotina e os seus melhores momentos.
        </p>
      </section>

      <section className="products-catalog" aria-label="Linha de produtos Vem Viver">
        {products.map((product, index) => (
          <article className={`catalog-card catalog-card--${product.tone}`} key={product.slug}>
            <div className="catalog-card__visual">
              <span>0{index + 1}</span>
              <Bottle tone={product.tone} label={product.name} />
            </div>
            <div className="catalog-card__copy">
              <p className="section-index">{product.accent}</p>
              <h2>{product.name}</h2>
              <strong>{product.note}</strong>
              <p>{product.intro}</p>
              <Link className="text-link" href={`/produtos/${product.slug}`}>
                Conhecer o produto
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="formats-intro">
        <div>
          <p className="section-index">Formatos em estudo</p>
          <h2>Para a rotina.<br />Para compartilhar.</h2>
        </div>
        <div className="formats-intro__sizes">
          {packageSizes.map((format) => (
            <article key={format.volume}>
              <strong>{format.volume}</strong>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
