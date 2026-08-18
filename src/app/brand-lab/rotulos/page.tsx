import type { Metadata } from "next";
import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Apresentação dos rótulos | Vem Viver",
  description: "Apresentação interna da família de rótulos Vem Viver.",
  robots: { index: false, follow: false },
};

const products = [
  {
    id: "tinto",
    name: "Uva Tinto",
    note: "Profundo e encorpado",
    copy: "A opção de maior densidade visual e contraste da família.",
    one: "/brand/label-review/tinto-1l.webp",
    oneHalf: "/brand/label-review/tinto-15l.webp",
    seal: true,
  },
  {
    id: "rose",
    name: "Uva Rosé",
    note: "Delicado e acolhedor",
    copy: "Leveza cromática sem infantilizar a apresentação.",
    one: "/brand/label-review/rose-1l.webp",
    oneHalf: "/brand/label-review/rose-15l.webp",
    seal: true,
  },
  {
    id: "branco",
    name: "Uva Branco",
    note: "Leve e luminoso",
    copy: "Uma leitura clara, natural e alinhada ao vidro verde.",
    one: "/brand/label-review/branco-1l.webp",
    oneHalf: "/brand/label-review/branco-15l.webp",
    seal: true,
  },
  {
    id: "laranja",
    name: "Laranja",
    note: "Familiar e vibrante",
    copy: "A mesma assinatura visual, sem o selo exclusivo dos sucos de uva.",
    one: "/brand/label-review/laranja-1l.webp",
    oneHalf: "/brand/label-review/laranja-15l.webp",
    seal: false,
  },
] as const;

function ProductImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <Image
      alt={alt}
      className={styles.productImage}
      height={1600}
      priority={priority}
      sizes="(max-width: 720px) 46vw, (max-width: 1100px) 22vw, 260px"
      src={src}
      width={822}
    />
  );
}

export default function LabelReviewPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.logo} href="#inicio" aria-label="Vem Viver — início da apresentação">
          <BrandLogo priority />
        </a>
        <nav className={styles.nav} aria-label="Navegação da apresentação">
          <a href="#conceito">Conceito</a>
          <a href="#familia">Família</a>
          <a href="#sabores">Sabores</a>
          <a href="#aprovacao">Aprovação</a>
        </nav>
        <span className={styles.internalTag}>Apresentação interna</span>
      </header>

      <section className={styles.hero} id="inicio">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Família de rótulos · 1 L e 1,5 L</p>
          <h1>Uma identidade para ocupar a <em>mesa</em> e permanecer na memória.</h1>
          <p className={styles.lead}>
            Quatro sabores, dois volumes e uma arquitetura visual única para apresentar
            a Vem Viver com clareza, presença e unidade.
          </p>
          <a className={styles.textLink} href="#conceito">Conheça a proposta <span>↓</span></a>
        </div>
        <div className={styles.heroLineup} aria-label="Família Vem Viver em 1,5 litro">
          {products.map((product, index) => (
            <div className={`${styles.heroBottle} ${styles[product.id]}`} key={product.id}>
              <ProductImage
                alt={`${product.name} Vem Viver, embalagem conceitual de 1,5 litro`}
                priority={index < 2}
                src={product.oneHalf}
              />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.concept} id="conceito">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionIndex}>01 · Conceito</p>
          <h2>A marca vem primeiro. O sabor orienta a escolha.</h2>
        </div>
        <div className={styles.principles}>
          <article>
            <span>01</span>
            <h3>Marca dominante</h3>
            <p>O arco creme concentra a leitura e dá protagonismo à Vem Viver.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Código de cor</h3>
            <p>Cada sabor ganha uma cor própria sem fragmentar a família.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Origem e qualidade</h3>
            <p>Fruta ilustrada, dourado e selo reforçam procedência e cuidado.</p>
          </article>
        </div>
        <blockquote>“Primeiro reconhecemos Vem Viver. Depois, escolhemos o sabor.”</blockquote>
      </section>

      <section className={styles.family} id="familia">
        <div className={styles.sectionHeadingRow}>
          <div>
            <p className={styles.sectionIndex}>02 · Família</p>
            <h2>A mesma assinatura nos dois volumes.</h2>
          </div>
          <p>A arquitetura permanece. Muda apenas o necessário para reconhecer cada produto.</p>
        </div>

        <div className={styles.volumeBlock}>
          <div className={styles.volumeIntro}>
            <span>Volume 01</span>
            <strong>1 L</strong>
            <p>Uma apresentação próxima, equilibrada e com boa presença de prateleira.</p>
          </div>
          <div className={styles.volumeLineup}>
            {products.map((product) => (
              <figure key={product.id}>
                <ProductImage alt={`${product.name} Vem Viver, 1 litro`} src={product.one} />
                <figcaption>{product.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className={`${styles.volumeBlock} ${styles.volumeBlockDark}`}>
          <div className={styles.volumeIntro}>
            <span>Volume 02</span>
            <strong>1,5 L</strong>
            <p>Mais presença, mantendo a hierarquia, a leitura e o reconhecimento da marca.</p>
          </div>
          <div className={styles.volumeLineup}>
            {products.map((product) => (
              <figure key={product.id}>
                <ProductImage alt={`${product.name} Vem Viver, 1,5 litro`} src={product.oneHalf} />
                <figcaption>{product.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.flavors} id="sabores">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionIndex}>03 · Sabores</p>
          <h2>Quatro expressões de uma mesma marca.</h2>
        </div>
        {products.map((product, index) => (
          <article className={`${styles.flavor} ${styles[`flavor-${product.id}`]}`} id={product.id} key={product.id}>
            <div className={styles.flavorCopy}>
              <span>0{index + 1}</span>
              <p>{product.note}</p>
              <h3>{product.name}</h3>
              <p>{product.copy}</p>
              <small>{product.seal ? "Selo aplicado nos dois volumes." : "Sem selo de uva nesta variante."}</small>
            </div>
            <div className={styles.pair}>
              <figure>
                <ProductImage alt={`${product.name}, mockup de 1 litro`} src={product.one} />
                <figcaption>1 L</figcaption>
              </figure>
              <figure>
                <ProductImage alt={`${product.name}, mockup de 1,5 litro`} src={product.oneHalf} />
                <figcaption>1,5 L</figcaption>
              </figure>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.approval} id="aprovacao">
        <p className={styles.sectionIndex}>04 · Aprovação</p>
        <h2>O que precisamos definir agora.</h2>
        <ol>
          <li><span>01</span><strong>Direção visual</strong><p>A linguagem geral da família.</p></li>
          <li><span>02</span><strong>Cores</strong><p>A diferenciação dos quatro sabores.</p></li>
          <li><span>03</span><strong>Nomenclaturas</strong><p>Tinto, Rosé, Branco e Laranja.</p></li>
          <li><span>04</span><strong>Aplicações</strong><p>Rótulos de 1 L e 1,5 L.</p></li>
        </ol>
        <div className={styles.nextStep}>
          <span>Após a aprovação</span>
          <p>Vetorização, medidas finais, verso técnico e arte-final para produção.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <BrandLogo light />
        <p>Apresentação conceitual. Imagens sujeitas a refinamento técnico e validação final.</p>
      </footer>
    </main>
  );
}
