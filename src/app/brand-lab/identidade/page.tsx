import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vem Viver | Brand Foundation v1.0",
  description: "Identidade visual consolidada da marca Vem Viver.",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "Verde Vem Viver", hex: "#394524", className: styles.green },
  { name: "Marfim", hex: "#F6F0E5", className: styles.ivory },
  { name: "Uva tinto", hex: "#541D33", className: styles.wine },
  { name: "Dourado quente", hex: "#B89C4A", className: styles.gold },
  { name: "Rosé", hex: "#B7737D", className: styles.rose },
  { name: "Laranja", hex: "#CA7B2D", className: styles.orange },
] as const;

const rules = [
  ["Fonte de verdade", "A assinatura master é a única matriz autorizada. Não redigitar ou reconstruir a logomarca."],
  ["Respiro", "Manter, como referência, cerca de 1/3 da altura total da assinatura livre em todos os lados."],
  ["Redução", "Referência digital: 160 px de largura. Referência impressa: 28 mm, a ser revalidada na fase gráfica."],
  ["Pré-impressão", "CMYK final, Pantone, substrato, verniz, hot stamp, faca e sangria permanecem fora desta etapa."],
] as const;

export default function IdentidadePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a href="/brand-lab" className={styles.back}>← Brand Lab</a>
        <span>Brand Foundation · v1.0 · 28.08.2026</span>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Identidade visual · versão 1.0</p>
        <div className={styles.heroLogo}><BrandLogo priority /></div>
        <h1>Conceito aprovado.<br/><em>Fundação consolidada.</em></h1>
        <p className={styles.lead}>
          Esta é a referência oficial da identidade-base Vem Viver para aplicações institucionais e digitais. Especificações de produção gráfica permanecem em uma etapa futura.
        </p>
        <div className={styles.heroActions}>
          <a className={styles.primaryAction} href="/brand/vem-viver-logo-master.svg" download>
            Baixar master SVG
          </a>
          <a className={styles.secondaryAction} href="/apresentacao">
            Voltar ao hub do projeto
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <span>01</span>
          <div>
            <p>Assinatura principal</p>
            <h2>Uma marca tipográfica que não precisa de símbolo adicional.</h2>
          </div>
        </div>
        <div className={styles.masterCard}>
          <BrandLogo />
          <p>Uso prioritário: verde Vem Viver sobre marfim, branco ou fundos de baixa interferência.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <span>02</span>
          <div>
            <p>Variações essenciais</p>
            <h2>Poucas versões. Regras claras.</h2>
          </div>
        </div>
        <div className={styles.variantGrid}>
          <article className={`${styles.variant} ${styles.variantLight}`}>
            <BrandLogo />
            <span>Principal · verde / marfim</span>
          </article>
          <article className={`${styles.variant} ${styles.variantDark}`}>
            <BrandLogo light />
            <span>Negativa · branco / verde</span>
          </article>
          <article className={`${styles.variant} ${styles.variantWhite}`}>
            <div className={styles.blackLogo}><BrandLogo /></div>
            <span>Monocromática · preto</span>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <span>03</span>
          <div>
            <p>Sistema de cor</p>
            <h2>O verde sustenta a marca. As demais cores organizam a linha.</h2>
          </div>
        </div>
        <div className={styles.palette}>
          {colors.map((color) => (
            <article key={color.hex} className={styles.colorCard}>
              <div className={`${styles.swatch} ${color.className}`} />
              <h3>{color.name}</h3>
              <code>{color.hex}</code>
            </article>
          ))}
        </div>
        <p className={styles.note}>Os valores de cor são referências institucionais. A conversão de produção será definida com o fornecedor gráfico.</p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <span>04</span>
          <div>
            <p>Tipografia de apoio</p>
            <h2>A tipografia apoia. A logomarca permanece intocável.</h2>
          </div>
        </div>
        <div className={styles.typeGrid}>
          <article className={styles.typeDisplay}>
            <span>Display</span>
            <strong>Cormorant Garamond</strong>
            <em>Escolhas que merecem ser servidas.</em>
          </article>
          <article className={styles.typeSans}>
            <span>Apoio</span>
            <strong>Manrope</strong>
            <p>Clareza para textos, informações, navegação e comunicação institucional.</p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <span>05</span>
          <div>
            <p>Governança</p>
            <h2>A partir daqui, existe uma única fonte de verdade.</h2>
          </div>
        </div>
        <div className={styles.rules}>
          {rules.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.closing}>
        <p>Próxima etapa</p>
        <h2>Aplicar a identidade consolidada aos materiais institucionais e ao ecossistema Vem Viver.</h2>
        <span>Produção gráfica de rótulos permanece deliberadamente fora desta versão.</span>
      </section>
    </main>
  );
}
