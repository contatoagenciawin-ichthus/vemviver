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
    eyebrow: "Entrega institucional · v1.0",
    title: "Handoff da marca",
    copy: "Pacote consolidado para compartilhamento com Liasch, parceiros e interlocutores: identidade oficial, ativos de marca, mockups vigentes, governança e limites da futura etapa gráfica.",
    status: "Pronto",
    href: "/apresentacao/handoff",
    action: "Abrir handoff",
    featured: true,
  },
  {
    eyebrow: "Identidade · v1.0",
    title: "Brand Foundation",
    copy: "Logomarca aprovada, master vetorial, paleta institucional, tipografia de apoio e regras básicas de governança da marca.",
    status: "Consolidada",
    href: "/brand-lab/identidade",
    action: "Abrir identidade",
    featured: false,
  },
  {
    eyebrow: "Material institucional",
    title: "Apresentação da marca",
    copy: "Narrativa atualizada para apresentar a origem, o novo ciclo, a identidade e a linha atual Vem Viver a parceiros e interlocutores do projeto.",
    status: "Atualizada",
    href: "/apresentacao/institucional",
    action: "Abrir apresentação",
    featured: false,
  },
  {
    eyebrow: "Fundação",
    title: "Brand Lab",
    copy: "Ambiente vivo com essência, princípios, sistema visual, linha atual e decisões que orientam a implantação da Vem Viver.",
    status: "Em uso",
    href: "/brand-lab",
    action: "Abrir Brand Lab",
    featured: false,
  },
  {
    eyebrow: "Produto · linha atual",
    title: "Mockups da linha",
    copy: "Os oito produtos — quatro sabores em 1 L e 1,5 L — apresentados com as garrafas, logomarca e direção de rótulo vigentes.",
    status: "Vigente",
    href: "/brand-lab/rotulos",
    action: "Ver mockups atuais",
    featured: false,
  },
  {
    eyebrow: "Presença institucional",
    title: "Site e ecossistema",
    copy: "Prévia da experiência pública já alimentada pela identidade e pelos mockups atuais da linha.",
    status: "Em evolução",
    href: "/site-preview",
    action: "Ver prévia",
    featured: false,
  },
] as const;

const roadmap = [
  ["01", "Compartilhar o handoff institucional", "O pacote v1.0 passa a ser a porta de entrada para Liasch e demais interlocutores consultarem o estágio consolidado da marca."],
  ["02", "Concluir a implantação institucional", "Revisar site, materiais comerciais e demais pontos de contato para que utilizem somente os ativos vigentes."],
  ["03", "Preparar o ecossistema de lançamento", "Organizar presença digital, materiais para parceiros e comunicação comercial a partir da identidade e da linha já consolidadas."],
  ["04", "Abrir a fase gráfica em etapa própria", "Faca, substrato, perfil de cor, acabamentos e pré-impressão serão tratados quando a produção gráfica for efetivamente iniciada."],
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
            Este ambiente funciona como referência oficial do projeto: identidade consolidada, representação atual da linha, materiais institucionais e próximos passos de implantação.
          </p>
          <div className={styles.heroTags} aria-label="Status do ambiente">
            <span>Ambiente de projeto</span>
            <span>Não indexado</span>
            <span>Fonte única de verdade</span>
          </div>
        </div>
        <aside className={styles.heroAside}>
          <span className={styles.asideLabel}>Marco atual</span>
          <strong>Handoff institucional v1.0 pronto</strong>
          <p>Identidade, linha visual vigente, ativos oficiais e governança organizados em uma única entrega.</p>
          <Link href="/apresentacao/handoff">Abrir handoff <span aria-hidden="true">↗</span></Link>
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
          <h2 id="aprovacao">A marca já tem uma base institucional organizada para avançar.</h2>
          <p>
            A logomarca aprovada, a Brand Foundation e os novos mockups orientam todas as aplicações principais. O handoff v1.0 reúne essa base em uma entrega clara, enquanto estudos anteriores permanecem apenas como memória de processo.
          </p>
        </div>
        <div className={styles.approvalPanel}>
          <div>
            <span>Status</span>
            <strong>Handoff institucional pronto</strong>
          </div>
          <div>
            <span>Fase atual</span>
            <strong>Implantação da marca e preparação do ecossistema de lançamento</strong>
          </div>
          <Link href="/apresentacao/handoff">Abrir entrega v1.0 <span aria-hidden="true">↗</span></Link>
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
          Ambiente temporário de projeto hospedado sob o domínio Empório Liasch. A Casa Granda está confirmada como fabricante/envasador; o fechamento de pré-impressão e produção gráfica permanece como etapa técnica independente.
        </p>
      </footer>
    </main>
  );
}
