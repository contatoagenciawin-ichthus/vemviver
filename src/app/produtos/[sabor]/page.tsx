import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bottle } from "@/components/bottle";
import { PublicFooter } from "@/components/public-footer";
import { PublicHeader } from "@/components/public-header";
import { getProduct, packageSizes, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ sabor: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ sabor: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { sabor } = await params;
  const product = getProduct(sabor);

  if (!product) return {};

  return {
    title: `${product.name} | Vem Viver`,
    description: product.intro,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { sabor } = await params;
  const product = getProduct(sabor);

  if (!product) notFound();

  return (
    <main className={`public-site product-page product-page--${product.tone}`}>
      <PublicHeader />

      <section className="product-detail">
        <div className="product-detail__copy">
          <Link className="product-detail__back" href="/produtos">← Todos os sabores</Link>
          <p className="eyebrow">Suco 100% integral</p>
          <h1>{product.name}</h1>
          <strong>{product.note}</strong>
          <p>{product.intro}</p>
          <Link className="button" href="/#contato">Onde encontrar</Link>
        </div>
        <div className="product-detail__visual">
          <span className="product-detail__word" aria-hidden="true">{product.name}</span>
          <div className="product-detail__bottles">
            <Bottle
              tone={product.tone}
              label={product.name}
              volume="1 L"
              size="1l"
            />
            <Bottle
              tone={product.tone}
              label={product.name}
              volume="1,5 L"
              size="1-5l"
            />
          </div>
        </div>
      </section>

      <section className="product-experience">
        <div className="product-experience__heading">
          <p className="section-index">A experiência</p>
          <h2>{product.accent}.</h2>
          <p>{product.experience}</p>
        </div>
        <div className="product-experience__occasions">
          <span>Combina com</span>
          <ul>
            {product.occasions.map((occasion) => (
              <li key={occasion}>{occasion}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="product-formats">
        <div className="product-formats__copy">
          <p className="section-index">Formatos disponíveis</p>
          <h2>Escolha como<br />Vem Viver.</h2>
          <p>
            Dois volumes pensados para acompanhar tanto a rotina quanto os
            momentos compartilhados.
          </p>
        </div>
        <div className="product-formats__grid">
          {packageSizes.map((format) => (
            <article key={format.volume}>
              <div className="product-formats__bottle">
                <Bottle
                  tone={product.tone}
                  label={product.name}
                  volume={format.volume}
                  size={format.size}
                />
              </div>
              <strong>{format.volume}</strong>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-information">
        <div className="product-information__heading">
          <p className="section-index">Informações do produto</p>
          <h2>Clareza em cada escolha.</h2>
        </div>
        <dl className="product-information__grid">
          <div>
            <dt>Categoria</dt>
            <dd>Suco 100% integral</dd>
          </div>
          <div>
            <dt>Conteúdo líquido</dt>
            <dd>1 L e 1,5 L</dd>
          </div>
          <div className="product-information__pending">
            <dt>Ingredientes e conservação</dt>
            <dd>Informações em validação com o fabricante.</dd>
          </div>
          <div className="product-information__pending">
            <dt>Informação nutricional</dt>
            <dd>Tabela final será publicada após aprovação do rótulo.</dd>
          </div>
        </dl>
        <p className="product-information__note">
          As especificações regulatórias completas serão inseridas a partir da
          ficha técnica definitiva de cada produto.
        </p>
      </section>

      <PublicFooter />
    </main>
  );
}
