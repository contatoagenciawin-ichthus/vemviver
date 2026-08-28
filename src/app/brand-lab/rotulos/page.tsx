import type { Metadata } from "next";
import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Estudos conceituais de rótulos | Vem Viver",
  description: "Arquivo interno de estudos conceituais da família de rótulos Vem Viver.",
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

function classNames(...names: Array<string | undefined>) {
  return names.filter(Boolean).join(" ");
}

export default function LabelReviewPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.logo} href="#inicio" aria-label="Vem Viver — início dos estudos conceituais">
          <BrandLogo priority />
        </a>
        <nav className={styles.nav} aria-label="Navegação dos estudos">
          <a href="#conceito">Conceito</a>
          <a href="#familia">Família</a>
          <a href="#sabores">Sabores</a>
          <a href="#status">Status</a>
        </nav>
        <span className={styles.internalTag}>Arquivo conceitual</span>
      </header>

      <section className={styles.hero} id="inicio">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Estudos conceituais · 1 L e 1,5 L</p>
          <h1>Uma identidade para ocupar a <em>mesa</em> e permanecer na memória.</h1>
          <p className={styles.lead}>
            Estes mockups registram uma etapa anterior da exploração de embalagem. Eles continuam úteis para avaliar arquitetura e família, mas não representam arte final nem prevalecem sobre a Brand Foundation v1.0.
          </p>
          <a className={styles.textLink} href="#conceito">Revisar os estudos <span>↓</span></a>
        </div>
        <div className={styles.heroLineup} aria-label="Estudos conceituais da família Vem Viver em 1,5 litro">
          {products.map((product, index) => (
            <div className={classNames(styles.heroBottle, styles[product.id])} key={product.id}>
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
            <p>Fruta ilustrada, detalhes de apoio e organização editorial constroem percepção de cuidado.</p>
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
          <p>A arquitetura permanece como referência conceitual; proporções e aplicações serão reavaliadas quando a fase de embalagem for reaberta.</p>
        </div>

        <div className={styles.volumeBlock}>
          <div className={styles.volumeIntro}>
            <span>Estudo 01</span>
            <strong>1 L</strong>
            <p>Referência de hierarquia, presença de marca e relação entre os sabores.</p>
          </div>
          <div className={styles.volumeLineup}>
            {products.map((product) => (
              <figure key={product.id}>
                <ProductImage alt={`${product.name} Vem Viver, estudo conceitual de 1 litro`} src={product.one} />
                <figcaption>{product.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className={`${styles.volumeBlock} ${styles.volumeBlockDark}`}>
          <div className={styles.volumeIntro}>
            <span>Estudo 02</span>
            <strong>1,5 L</strong>
            <p>Referência de escala e consistência de família em uma embalagem de maior presença.</p>
          </div>
          <div className={styles.volumeLineup}>
            {products.map((product) => (
              <figure key={product.id}>
                <ProductImage alt={`${product.name} Vem Viver, estudo conceitual de 1,5 litro`} src={product.oneHalf} />
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
          <article className={classNames(styles.flavor, styles[`flavor-${product.id}`])} id={product.id} key={product.id}>
            <div className={styles.flavorCopy}>
              <span>0{index + 1}</span>
              <p>{product.note}</p>
              <h3>{product.name}</h3>
              <p>{product.copy}</p>
              <small>{product.seal ? "A Casa Granda confirmou a condição 100% integral e o selo de pureza para a linha de uva; a aplicação final seguirá o arquivo oficial e suas regras técnicas." : "A condição 100% integral foi confirmada com a Casa Granda. A variante de laranja usa linguagem proprietária, sem selo de certificação de uva."}</small>
            </div>
            <div className={styles.pair}>
              <figure>
                <ProductImage alt={`${product.name}, mockup conceitual de 1 litro`} src={product.one} />
                <figcaption>1 L</figcaption>
              </figure>
              <figure>
                <ProductImage alt={`${product.name}, mockup conceitual de 1,5 litro`} src={product.oneHalf} />
                <figcaption>1,5 L</figcaption>
              </figure>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.approval} id="status">
        <p className={styles.sectionIndex}>04 · Status</p>
        <h2>Como ler estes estudos agora.</h2>
        <ol>
          <li><span>01</span><strong>Referência, não arte final</strong><p>Os mockups ajudam a observar composição, família e hierarquia.</p></li>
          <li><span>02</span><strong>A marca atual prevalece</strong><p>A Brand Foundation v1.0 substitui qualquer versão anterior da assinatura presente nestas imagens.</p></li>
          <li><span>03</span><strong>Produto já confirmado</strong><p>A condição 100% integral e, para os sucos de uva, o selo de pureza já foram confirmados com a Casa Granda.</p></li>
          <li><span>04</span><strong>Produção está fora desta fase</strong><p>Faca, substrato, impressão e acabamentos serão tratados somente quando os demais insumos técnicos estiverem definidos.</p></li>
        </ol>
        <div className={styles.nextStep}>
          <span>Quando a fase gráfica for aberta</span>
          <p>Retomaremos estes aprendizados com a master atual, medidas reais, arquivo oficial do selo, dados técnicos aprovados e especificações da Casa Granda e do fornecedor gráfico.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <BrandLogo light />
        <p>Arquivo conceitual de projeto. A Brand Foundation v1.0 é a referência vigente da marca.</p>
      </footer>
    </main>
  );
}
