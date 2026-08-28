import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projeto Vem Viver | Área de apresentação",
  description: "Ambiente de acompanhamento, alinhamento e consolidação do projeto Vem Viver.",
  robots: { index: false, follow: false },
};

const materials = [
  {
    eyebrow: "Identidade · v1.0",
    title: "Brand Foundation",
    copy: "Logomarca aprovada, master vetorial, paleta institucional, tipografia de apoio e regras básicas de governança da marca.",
    status: "Consolidada",
    href: "/brand-lab/identidade",
    action: "Abrir identidade",
    featured: true,
  },
  {
    eyebrow: "Material institucional",
    title: "Apresentação da marca",
    copy: "Narrativa atualizada para apresentar a origem, o novo ciclo, a identidade e a arquitetura inicial Vem Viver a parceiros e interlocutores do projeto.",
    status: "Atualizada",
    href: "/apresentacao/institucional",
    action: "Abrir apresentação",
    featured: false,
  },
  {
    eyebrow: "Fundação",
    title: "Brand Lab",
    copy: "Ambiente vivo com essência, princípios, sistema visual, linha inicial e decisões que orientam a evolução da Vem Viver.",
    status: "Em uso",
    href: "/brand-lab",
    action: "Abrir Brand Lab",
    featured: false,
  },
  {
    eyebrow: "Aplicação conceitual",
    title: "Estudos de rótulos",
    copy: "Família visual em estudo para os produtos iniciais. Esta área serve para direção e comparação, não como arquivo de produção gráfica.",
    status: "Conceitual",
    href: "/brand-lab/rotulos",
    action: "Revisar estudos",
    featured: false,
  },
  {
    eyebrow: "Presença institucional",
    title: "Site e ecossistema",
    copy: "Prévia da experiência pública que receberá conteúdos e aplicações finais conforme as decisões de marca forem consolidadas.",
    status: "Em evolução",
    href: "/site-preview",
    action: "Ver prévia",
    featured: false,
  },
] as const;

const roadmap = [
  ["01", "Usar a apresentação institucional como material vigente", "A narrativa para parceiros passa a usar exclusivamente a identidade consolidada e o estágio real do projeto."],
  ["02", "Completar as aplicações institucionais", "Substituir versões antigas da marca no site, materiais comerciais e demais pontos de contato em evolução."],
  ["03", "Validar a arquitetura do portfólio", "Ajustar linha, nomenclaturas, mensagens e aplicações conceituais antes de qualquer preparação de gráfica."],
  ["04", "Abrir a fase de produção quando houver insumos", "Somente com embalagem, fabricante e fornecedor definidos entram faca, substrato, prova de cor e pré-impressão."],
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
        <div>
          <p className={styles.eyebrow}>Marca · sistema visual · presença institucional</p>
          <h1>Um único lugar para acompanhar a evolução da <em>Vem Viver.</em></h1>
          <p className={styles.lead}>
            Este ambiente passa a funcionar como referência oficial do projeto: o que já foi consolidado, o que permanece conceitual e o que ainda depende de decisões futuras.
          </p>
          <div className={styles.heroTags} aria-label="Status do ambiente">
            <span>Ambiente de projeto</span>
            <span>Não indexado</span>
            <span>Fonte única de verdade</span>
          </div>
        </div>
        <aside className={styles.heroAside}>
          <span className={styles.asideLabel}>Marco atual</span>
          <strong>Identidade visual consolidada</strong>
          <p>Brand Foundation v1.0 com logomarca master e regras de uso.</p>
          <Link href="/brand-lab/identidade">Abrir Brand Foundation <span aria-hidden="true">↗</span></Link>
        </aside>
      </section>

      <section className={styles.materials} aria-labelledby="materiais">
        <div className={styles.sectionHeading}>
          <p>01 · Materiais do projeto</p>
          <h2 id="materiais">O que está disponível para consulta.</h2>
        </div>
        <div className={styles.materialGrid}>
          {materials.map((item) => (
            <article className={item.featured ? `${styles.materialCard} ${styles.featured}` : styles.materialCard} key={item.title}>
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
          <p className={styles.sectionIndex}>02 · Marco de projeto</p>
          <h2 id="aprovacao">A marca deixa de ser uma proposta e passa a ser uma referência.</h2>
          <p>
            A logomarca aprovada e sua fundação visual passam a orientar todas as novas aplicações. Estudos anteriores continuam disponíveis apenas como histórico ou material conceitual, sem prevalecer sobre a master atual.
          </p>
        </div>
        <div className={styles.approvalPanel}>
          <div>
            <span>Status</span>
            <strong>Brand Foundation v1.0 consolidada</strong>
          </div>
          <div>
            <span>Fase atual</span>
            <strong>Aplicações institucionais e organização do ecossistema</strong>
          </div>
          <Link href="/brand-lab/identidade">Consultar identidade oficial <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className={styles.roadmap} aria-labelledby="proximas-etapas">
        <div className={styles.sectionHeading}>
          <p>03 · Próximas etapas</p>
          <h2 id="proximas-etapas">Da identidade consolidada à implantação.</h2>
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
          Ambiente temporário de projeto hospedado sob o domínio Empório Liasch. A produção gráfica de rótulos será tratada como uma fase independente quando embalagem, fabricante e fornecedor estiverem definidos.
        </p>
      </footer>
    </main>
  );
}
