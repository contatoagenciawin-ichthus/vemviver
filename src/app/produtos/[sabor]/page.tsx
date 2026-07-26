import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bottle } from "@/components/bottle";
import { PublicFooter } from "@/components/public-footer";
import { PublicHeader } from "@/components/public-header";
import { getProduct, products } from "@/data/products";

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
          <Bottle tone={product.tone} label={product.name} />
        </div>
      </section>

      <section className="product-detail__pending">
        <p className="section-index">Informações do produto</p>
        <h2>Transparência em cada escolha.</h2>
        <p>
          Ingredientes, tabela nutricional, conservação e demais informações
          regulatórias serão publicadas aqui a partir dos dados finais aprovados
          para o rótulo.
        </p>
      </section>

      <PublicFooter />
    </main>
  );
}
