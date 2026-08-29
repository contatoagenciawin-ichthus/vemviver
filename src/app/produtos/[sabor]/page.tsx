import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductMockup } from "@/components/product-mockup";
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
          <Link className="button" href="/onde-encontrar">Onde encontrar</Link>
        </div>
        <div className="product-detail__visual product-detail__visual--approved">
          <span className="product-detail__word" aria-hidden="true">{product.name}</span>
          <div className="product-detail__bottles product-detail__bottles--approved">
            <ProductMockup
              tone={product.tone}
              volume="1l"
              priority
              sizes="(max-width: 760px) 42vw, 280px"
            />
            <ProductMockup
              tone={product.tone}
              volume="15l"
              priority
              sizes="(max-width: 760px) 46vw, 310px"
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
          <p className="section-index">Formatos da linha</p>
          <h2>Escolha como<br />Vem Viver.</h2>
          <p>
            Cada sabor da linha está apresentado em 1 L e 1,5 L, mantendo a mesma
            assinatura visual e a identidade da família Vem Viver.
          </p>
        </div>
        <div className="product-formats__grid">
          {packageSizes.map((format) => (
            <article key={format.volume}>
              <div className="product-formats__bottle product-formats__bottle--approved">
                <ProductMockup
                  tone={product.tone}
                  volume={format.volume === "1,5 L" ? "15l" : "1l"}
                  sizes="(max-width: 760px) 62vw, 280px"
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
          <p className="section-index">Informações de referência</p>
          <h2>Clareza antes de publicar.</h2>
        </div>
        <dl className="product-information__grid">
          <div>
            <dt>Categoria</dt>
            <dd>Suco 100% integral</dd>
          </div>
          <div>
            <dt>Confirmação do produto</dt>
            <dd>Condição 100% integral confirmada pelo fabricante e envasador Casa Granda.</dd>
          </div>
          <div>
            <dt>Volumes da linha</dt>
            <dd>1 L e 1,5 L</dd>
          </div>
          {product.technical ? (
            <>
              <div>
                <dt>Ingredientes informados</dt>
                <dd>{product.technical.ingredients}</dd>
              </div>
              <div>
                <dt>Variedades informadas</dt>
                <dd>{product.technical.varieties}</dd>
              </div>
              <div>
                <dt>Origem informada</dt>
                <dd>{product.technical.origin}</dd>
              </div>
              <div>
                <dt>Conservação informada</dt>
                <dd>{product.technical.conservation}</dd>
              </div>
              <div>
                <dt>Validade informada</dt>
                <dd>{product.technical.shelfLife}</dd>
              </div>
              <div className="product-information__pending">
                <dt>Demais alegações</dt>
                <dd>Serão publicadas conforme a documentação final de cada SKU.</dd>
              </div>
            </>
          ) : (
            <div className="product-information__pending">
              <dt>Ficha técnica específica</dt>
              <dd>Em consolidação para este sabor; a condição 100% integral já está confirmada.</dd>
            </div>
          )}
          <div className="product-information__pending">
            <dt>Informação nutricional</dt>
            <dd>Será incorporada após validação técnica e regulatória.</dd>
          </div>
        </dl>
        {product.technical && (
          <div className="product-process">
            <p className="section-index">Processo informado</p>
            <p>{product.technical.process}</p>
          </div>
        )}
        <p className="product-information__note">
          A condição 100% integral já foi confirmada com a Casa Granda. Os demais
          dados técnicos e regulatórios serão incorporados à medida que a documentação
          final de cada apresentação for consolidada.
        </p>
      </section>

      <PublicFooter />
    </main>
  );
}
