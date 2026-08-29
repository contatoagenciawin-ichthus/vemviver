import type { Metadata } from "next";
import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mockups atuais da linha | Vem Viver",
  description: "Referência visual vigente dos produtos Vem Viver em 1 L e 1,5 L.",
  robots: { index: false, follow: false },
};

const products = [
  {
    id: "tinto",
    name: "Uva Tinto",
    note: "Profundo e encorpado",
    copy: "A expressão de maior densidade visual e contraste da família.",
    one: "/brand/mockups-atualizados/vem-viver-tinto-1l.jpg",
    oneHalf: "/brand/mockups-atualizados/vem-viver-tinto-15l.jpg",
    seal: true,
  },
  {
    id: "rose",
    name: "Uva Rosé",
    note: "Delicado e acolhedor",
    copy: "Leveza cromática com presença própria dentro da família.",
    one: "/brand/mockups-atualizados/vem-viver-rose-1l.jpg",
    oneHalf: "/brand/mockups-atualizados/vem-viver-rose-15l.jpg",
    seal: true,
  },
  {
    id: "branco",
    name: "Uva Branco",
    note: "Leve e luminoso",
    copy: "Uma leitura clara e natural, alinhada à apresentação do produto.",
    one: "/brand/mockups-atualizados/vem-viver-branco-1l.jpg",
    oneHalf: "/brand/mockups-atualizados/vem-viver-branco-15l.jpg",
    seal: true,
  },
  {
    id: "laranja",
    name: "Laranja",
    note: "Familiar e vibrante",
    copy: "A mesma assinatura visual aplicada à variante de laranja.",
    one: "/brand/mockups-atualizados/vem-viver-laranja-1l.jpg",
    oneHalf: "/brand/mockups-atualizados/vem-viver-laranja-15l.jpg",
    seal: false,
  },
] as const;

function ProductImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <Image
      alt={alt}
      className={styles.productImage}
      height={1402}
      priority={priority}
      sizes="(max-width: 720px) 46vw, (max-width: 1100px) 22vw, 260px"
      src={src}
      width={1122}
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
        <a className={styles.logo} href="#inicio" aria-label="Vem Viver — mockups atuais da linha">
          <BrandLogo priority />
        </a>
        <nav className={styles.nav} aria-label="Navegação dos mockups">
          <a href="#conceito">Sistema</a>
          <a href="#familia">Família</a>
          <a href="#sabores">Sabores</a>
          <a href="#status">Status</a>
        </nav>
        <span className={styles.internalTag}>Referência vigente</span>
      </header>

      <section className={styles.hero} id="inicio">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Linha atual · 1 L e 1,5 L</p>
          <h1>Uma família que agora pode ser vista como <em>marca real.</em></h1>
          <p className={styles.lead}>
            Estes mockups substituem as representações conceituais anteriores. Eles refletem as garrafas, a logomarca e a direção atual dos rótulos dos oito produtos da linha.
          </p>
          <a className={styles.textLink} href="#familia">Ver a linha completa <span>↓</span></a>
        </div>
        <div className={styles.heroLineup} aria-label="Linha Vem Viver em mockups atuais de 1,5 litro">
          {products.map((product, index) => (
            <div className={classNames(styles.heroBottle, styles[product.id])} key={product.id}>
              <ProductImage
                alt={`${product.name} Vem Viver, mockup atual de 1,5 litro`}
                priority={index < 2}
                src={product.oneHalf}
              />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.concept} id="conceito">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionIndex}>01 · Sistema</p>
          <h2>A marca vem primeiro. O sabor orienta a escolha.</h2>
        </div>
        <div className={styles.principles}>
          <article>
            <span>01</span>
            <h3>Marca dominante</h3>
            <p>A assinatura Vem Viver concentra a leitura e unifica todos os produtos.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Código de cor</h3>
            <p>Cada sabor mantém uma cor própria sem romper a percepção de família.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Fruta com presença</h3>
            <p>O tratamento de luz, sombra e volume da fruta passa a fazer parte do acabamento vigente.</p>
          </article>
        </div>
        <blockquote>“Primeiro reconhecemos Vem Viver. Depois, escolhemos o sabor.”</blockquote>
      </section>

      <section className={styles.family} id="familia">
        <div className={styles.sectionHeadingRow}>
          <div>
            <p className={styles.sectionIndex}>02 · Família</p>
            <h2>Oito produtos. A mesma assinatura.</h2>
          </div>
          <p>Quatro sabores em dois volumes, agora apresentados com os mockups que representam o estágio atual do projeto.</p>
        </div>

        <div className={styles.volumeBlock}>
          <div className={styles.volumeIntro}>
            <span>Volume 01</span>
            <strong>1 L</strong>
            <p>Formato de menor volume para toda a família Vem Viver.</p>
          </div>
          <div className={styles.volumeLineup}>
            {products.map((product) => (
              <figure key={product.id}>
                <ProductImage alt={`${product.name} Vem Viver, mockup atual de 1 litro`} src={product.one} />
                <figcaption>{product.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className={`${styles.volumeBlock} ${styles.volumeBlockDark}`}>
          <div className={styles.volumeIntro}>
            <span>Volume 02</span>
            <strong>1,5 L</strong>
            <p>Formato de maior volume mantendo a arquitetura visual da linha.</p>
          </div>
          <div className={styles.volumeLineup}>
            {products.map((product) => (
              <figure key={product.id}>
                <ProductImage alt={`${product.name} Vem Viver, mockup atual de 1,5 litro`} src={product.oneHalf} />
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
              <small>{product.seal ? "A linha de uva incorpora o selo de pureza confirmado com a Casa Granda; o arquivo e as regras de produção serão tratados no fechamento técnico." : "A variante de laranja mantém a identidade da família sem utilizar o selo específico dos sucos de uva."}</small>
            </div>
            <div className={styles.pair}>
              <figure>
                <ProductImage alt={`${product.name}, mockup atual de 1 litro`} src={product.one} />
                <figcaption>1 L</figcaption>
              </figure>
              <figure>
                <ProductImage alt={`${product.name}, mockup atual de 1,5 litro`} src={product.oneHalf} />
                <figcaption>1,5 L</figcaption>
              </figure>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.approval} id="status">
        <p className={styles.sectionIndex}>04 · Status</p>
        <h2>O que estes mockups representam.</h2>
        <ol>
          <li><span>01</span><strong>Referência visual vigente</strong><p>Substituem as imagens de garrafa e os mockups conceituais anteriores nas áreas principais do projeto.</p></li>
          <li><span>02</span><strong>Marca consolidada</strong><p>A logomarca e a Brand Foundation v1.0 são as referências oficiais do sistema visual.</p></li>
          <li><span>03</span><strong>Produto confirmado</strong><p>A condição 100% integral e, para os sucos de uva, o selo de pureza foram confirmados com a Casa Granda.</p></li>
          <li><span>04</span><strong>Pré-impressão é etapa posterior</strong><p>Faca, substrato, perfil de cor, impressão e acabamentos ainda pertencem ao fechamento técnico de produção.</p></li>
        </ol>
        <div className={styles.nextStep}>
          <span>Próximo uso</span>
          <p>Estes arquivos passam a alimentar a apresentação institucional, o site em evolução e os materiais de implantação da marca.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <BrandLogo light />
        <p>Referência visual vigente do projeto Vem Viver. Arquivos finais de produção gráfica serão preparados em etapa própria.</p>
      </footer>
    </main>
  );
}
