import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projeto Vem Viver | Área de apresentação",
  description: "Ambiente de acompanhamento, alinhamento e aprovação do projeto Vem Viver.",
  robots: { index: false, follow: false },
};

const materials = [
  {
    eyebrow: "Aprovação atual",
    title: "Família de rótulos",
    copy: "Apresentação consolidada dos rótulos da linha inicial, com quatro sabores e embalagens de 1 L e 1,5 L.",
    status: "Aguardando aprovação",
    href: "/rotulos",
    action: "Abrir apresentação",
    featured: true,
  },
  {
    eyebrow: "Fundação",
    title: "Marca e sistema visual",
    copy: "Essência, princípios de identidade, paleta, tipografia e lógica visual que sustentam a Vem Viver.",
    status: "Base definida",
    href: "/marca",
    action: "Ver Brand Lab",
    featured: false,
  },
  {
    eyebrow: "Portfólio",
    title: "Linha de produtos",
    copy: "Estrutura inicial dos produtos e informações já consolidadas para a presença institucional da marca.",
    status: "Em evolução",
    href: "/produtos",
    action: "Ver produtos",
    featured: false,
  },
  {
    eyebrow: "Presença digital",
    title: "Site institucional",
    copy: "Prévia da experiência pública que receberá os conteúdos finais após as aprovações de marca e embalagem.",
    status: "Em desenvolvimento",
    href: "/site",
    action: "Ver prévia do site",
    featured: false,
  },
] as const;

const roadmap = [
  ["01", "Aprovar a família de rótulos", "Validar direção visual, hierarquia e aplicação nos dois volumes."],
  ["02", "Finalizar embalagens e mockups", "Consolidar os arquivos definitivos e substituir as imagens conceituais."],
  ["03", "Concluir documentação da marca", "Organizar regras de uso, aplicações e materiais de referência."],
  ["04", "Publicar a presença definitiva", "Migrar a experiência para o domínio próprio da Vem Viver no momento adequado."],
] as const;

export default function PresentationHubPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="Vem Viver — área de apresentação">
          <BrandLogo priority />
        </Link>
        <div className={styles.headerMeta}>
          <span>Projeto Vem Viver</span>
          <strong>Área de apresentação</strong>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Marca · embalagens · presença digital</p>
          <h1>Um único lugar para acompanhar a evolução da <em>Vem Viver.</em></h1>
          <p className={styles.lead}>
            Este ambiente reúne os materiais em desenvolvimento para ciência, alinhamento e aprovação antes da publicação definitiva da marca.
          </p>
          <div className={styles.heroTags} aria-label="Status do ambiente">
            <span>Ambiente de projeto</span>
            <span>Não indexado</span>
            <span>Atualizado por etapa</span>
          </div>
        </div>
        <aside className={styles.heroAside}>
          <span className={styles.asideLabel}>Em foco agora</span>
          <strong>Rótulos Vem Viver</strong>
          <p>Revisão da família inicial para 1 L e 1,5 L.</p>
          <Link href="/rotulos">Revisar apresentação <span aria-hidden="true">↗</span></Link>
        </aside>
      </section>

      <section className={styles.materials} aria-labelledby="materiais">
        <div className={styles.sectionHeading}>
          <p>01 · Materiais do projeto</p>
          <h2 id="materiais">O que está disponível para consulta.</h2>
        </div>
        <div className={styles.materialGrid}>
          {materials.map((item) => (
            <article className={`${styles.materialCard} ${item.featured ? styles.featured : ""}`} key={item.title}>
              <div className={styles.cardTopline}>
                <span>{item.eyebrow}</span>
                <span className={styles.status}>{item.status}</span>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
              <Link href={item.href}>{item.action} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.approval} aria-labelledby="aprovacao">
        <div className={styles.approvalIntro}>
          <p className={styles.sectionIndex}>02 · Aprovações</p>
          <h2 id="aprovacao">O próximo avanço depende desta validação.</h2>
          <p>
            A prioridade atual é aprovar a direção dos rótulos para que mockups, materiais comerciais e presença digital avancem sobre uma base definitiva.
          </p>
        </div>
        <div className={styles.approvalPanel}>
          <div>
            <span>Status</span>
            <strong>Aguardando aprovação</strong>
          </div>
          <div>
            <span>Material</span>
            <strong>8 aplicações · 4 sabores · 2 volumes</strong>
          </div>
          <Link href="/rotulos">Abrir material de aprovação <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className={styles.roadmap} aria-labelledby="proximas-etapas">
        <div className={styles.sectionHeading}>
          <p>03 · Próximas etapas</p>
          <h2 id="proximas-etapas">Da aprovação ao lançamento.</h2>
        </div>
        <div className={styles.roadmapList}>
          {roadmap.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <BrandLogo />
        <p>
          Ambiente temporário de projeto hospedado sob o domínio Empório Liasch. Na etapa definitiva, a experiência poderá ser associada ao domínio próprio da Vem Viver sem reconstrução do conteúdo.
        </p>
      </footer>
    </main>
  );
}
