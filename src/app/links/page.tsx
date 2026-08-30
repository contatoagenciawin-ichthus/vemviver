import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vem Viver | Central de links",
  description: "Central oficial de materiais, identidade, apresentação e ativos da Vem Viver.",
  robots: { index: false, follow: false },
};

const mainLinks = [
  {
    eyebrow: "Comece aqui",
    title: "Entrega institucional",
    copy: "Visão consolidada da identidade, linha visual, governança e estágio atual do projeto.",
    href: "/entrega",
    action: "Abrir entrega",
  },
  {
    eyebrow: "Para prestadores",
    title: "Guia de Marca v1.0",
    copy: "PDF para social media, designers, agências, fornecedores e profissionais de registro de marca.",
    href: "/guia-da-marca",
    action: "Baixar guia em PDF",
  },
  {
    eyebrow: "Para parceiros",
    title: "Apresentação institucional",
    copy: "Narrativa da marca para apresentar origem, novo ciclo, identidade e linha atual.",
    href: "/institucional",
    action: "Abrir apresentação",
  },
] as const;

const referenceLinks = [
  ["Identidade completa", "Brand Foundation, cores, tipografia, respiro e regras de uso.", "/identidade"],
  ["Mockups vigentes", "Os oito produtos atuais: quatro sabores em 1 L e 1,5 L.", "/rotulos"],
  ["Brand Lab", "Sistema visual, decisões e fundamentos vivos do projeto.", "/marca"],
  ["Site em evolução", "Prévia da presença pública da Vem Viver.", "/site"],
] as const;

const assetLinks = [
  ["Logomarca master SVG", "/brand/vem-viver-logo-master.svg"],
  ["Linha completa horizontal", "/brand/mockups-atualizados/linha-horizontal-1.png"],
  ["Linha completa vertical", "/brand/mockups-atualizados/linha-vertical-1.png"],
] as const;

export default function LinksPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="Vem Viver">
          <BrandLogo priority />
        </Link>
        <div>
          <span>Central oficial</span>
          <strong>Links e materiais</strong>
        </div>
      </header>

      <section className={styles.hero}>
        <p>Vem Viver · fonte única de verdade</p>
        <h1>Tudo o que precisa ser <em>consultado, enviado ou baixado</em> em um único lugar.</h1>
        <p className={styles.lead}>
          Esta página é o ponto de entrada recomendado para Luther Liasch, parceiros e prestadores. Os materiais abaixo refletem o estágio vigente da marca.
        </p>
      </section>

      <section className={styles.primary} aria-label="Materiais principais">
        {mainLinks.map((item) => (
          <article key={item.title}>
            <span>{item.eyebrow}</span>
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
            <Link href={item.href}>{item.action} <b aria-hidden="true">→</b></Link>
          </article>
        ))}
      </section>

      <section className={styles.references}>
        <div className={styles.sectionIntro}>
          <p>Consulta</p>
          <h2>Áreas de referência do projeto</h2>
        </div>
        <div className={styles.referenceList}>
          {referenceLinks.map(([title, copy, href]) => (
            <Link href={href} key={title}>
              <div><strong>{title}</strong><p>{copy}</p></div>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.assets}>
        <div className={styles.sectionIntro}>
          <p>Downloads rápidos</p>
          <h2>Ativos para uso imediato</h2>
        </div>
        <div className={styles.assetGrid}>
          {assetLinks.map(([title, href]) => (
            <a href={href} download key={title}>
              <span>{title}</span>
              <strong>Baixar ↓</strong>
            </a>
          ))}
        </div>
        <p className={styles.assetNote}>
          Para mockups individuais de cada sabor e volume, use a área “Mockups vigentes”. Para qualquer aplicação nova da marca, a master SVG prevalece sobre versões anteriores.
        </p>
      </section>

      <footer className={styles.footer}>
        <div><BrandLogo light /></div>
        <p>Vem Viver · Central de links · agosto de 2026</p>
        <Link href="/entrega">Voltar à entrega institucional →</Link>
      </footer>
    </main>
  );
}
