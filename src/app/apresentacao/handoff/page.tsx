import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vem Viver | Handoff institucional v1.0",
  description: "Pacote institucional vigente da identidade e da linha visual Vem Viver.",
  robots: { index: false, follow: false },
};

const productAssets = [
  ["Uva Tinto", "1 L", "/brand/mockups-atualizados/vem-viver-tinto-1l.jpg"],
  ["Uva Tinto", "1,5 L", "/brand/mockups-atualizados/vem-viver-tinto-15l.jpg"],
  ["Uva Branco", "1 L", "/brand/mockups-atualizados/vem-viver-branco-1l.jpg"],
  ["Uva Branco", "1,5 L", "/brand/mockups-atualizados/vem-viver-branco-15l.jpg"],
  ["Uva Rosé", "1 L", "/brand/mockups-atualizados/vem-viver-rose-1l.jpg"],
  ["Uva Rosé", "1,5 L", "/brand/mockups-atualizados/vem-viver-rose-15l.jpg"],
  ["Laranja", "1 L", "/brand/mockups-atualizados/vem-viver-laranja-1l.jpg"],
  ["Laranja", "1,5 L", "/brand/mockups-atualizados/vem-viver-laranja-15l.jpg"],
] as const;

const status = [
  ["Consolidado", "Identidade", "Logomarca master, paleta institucional, tipografias de apoio e regras mínimas de uso."],
  ["Consolidado", "Linha visual", "Oito mockups vigentes: quatro sabores em 1 L e 1,5 L, além das composições horizontal e vertical."],
  ["Confirmado", "Produto", "Casa Granda como fabricante/envasador, condição 100% integral e selo de pureza para os sucos de uva."],
  ["Em evolução", "Implantação", "Site, materiais comerciais, apresentação para parceiros e demais pontos de contato da marca."],
  ["Etapa futura", "Produção gráfica", "Faca, substrato, Pantone/CMYK final, prova de cor, acabamentos e pré-impressão."],
] as const;

export default function HandoffPage() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/apresentacao">← Área do projeto</Link>
        <span>Handoff institucional · v1.0 · agosto de 2026</span>
      </header>

      <section className={styles.cover}>
        <div className={styles.coverBrand}><BrandLogo priority /></div>
        <div className={styles.coverCopy}>
          <p>Identidade consolidada · linha visual vigente</p>
          <h1>Uma base clara para <em>apresentar, implantar e fazer a marca crescer.</em></h1>
          <p className={styles.lead}>
            Este handoff reúne o que passa a ser tratado como referência oficial da Vem Viver nesta fase: identidade, ativos de marca, mockups atuais, regras de uso e limites da etapa de produção gráfica.
          </p>
        </div>
        <div className={styles.coverMeta}>
          <div><span>Status</span><strong>Pronto para compartilhamento institucional</strong></div>
          <div><span>Escopo</span><strong>Marca + representação atual da linha</strong></div>
          <div><span>Governança</span><strong>Fonte única de verdade do projeto</strong></div>
        </div>
      </section>

      <section className={styles.overview}>
        <div className={styles.sectionIntro}>
          <p>01 · O que está sendo entregue</p>
          <h2>O conceito deixou de ser uma coleção de estudos e passou a funcionar como sistema.</h2>
        </div>
        <div className={styles.overviewGrid}>
          <article>
            <span>01</span>
            <h3>Marca</h3>
            <p>Assinatura Vem Viver em master vetorial, com versão positiva, negativa e parâmetros mínimos de aplicação.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Identidade</h3>
            <p>Paleta institucional, tipografias de apoio, hierarquia visual e princípios para preservar consistência.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Produto</h3>
            <p>Representação visual vigente dos oito produtos da linha e composições institucionais da família.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Governança</h3>
            <p>Separação explícita entre ativos oficiais, materiais históricos, implantação e futura pré-impressão.</p>
          </article>
        </div>
      </section>

      <section className={styles.identity}>
        <div className={styles.sectionIntroLight}>
          <p>02 · Identidade oficial</p>
          <h2>A assinatura aprovada passa a ser o ponto de partida de toda nova aplicação.</h2>
        </div>
        <div className={styles.identityCard}>
          <div className={styles.identityMark}><BrandLogo light /></div>
          <div className={styles.identityInfo}>
            <div>
              <span>Master vetorial</span>
              <strong>vem-viver-logo-master.svg</strong>
              <a href="/brand/vem-viver-logo-master.svg" download>Baixar master SVG ↓</a>
            </div>
            <div className={styles.colorPair}>
              <article><i className={styles.green} /><span>Verde Vem Viver</span><code>#394524</code></article>
              <article><i className={styles.ivory} /><span>Marfim</span><code>#F6F0E5</code></article>
            </div>
          </div>
        </div>
        <div className={styles.rules}>
          <p>Regras essenciais</p>
          <ul>
            <li>Não redigitar ou reconstruir a marca com fontes.</li>
            <li>Não adicionar uvas, folhas, cachos ou outros símbolos ao logotipo.</li>
            <li>Não aplicar sombra, contorno, bevel, gradiente ou efeitos diretamente na assinatura.</li>
            <li>Manter proporção original, respiro e contraste adequados em qualquer aplicação.</li>
          </ul>
          <Link href="/brand-lab/identidade">Consultar Brand Foundation completa →</Link>
        </div>
      </section>

      <section className={styles.lineup}>
        <div className={styles.sectionIntro}>
          <p>03 · Linha visual vigente</p>
          <h2>Quatro sabores, dois volumes e uma família reconhecível.</h2>
          <p className={styles.sectionLead}>
            As imagens abaixo substituem os estudos anteriores nas áreas principais do projeto. Elas representam o estágio visual atual da linha e são adequadas para apresentação institucional, validação e implantação digital.
          </p>
        </div>
        <div className={styles.lineupVisual}>
          <Image
            alt="Linha completa Vem Viver em composição ambientalizada"
            height={1200}
            priority
            sizes="(max-width: 760px) 0px, 92vw"
            src="/brand/mockups-atualizados/linha-horizontal-1.png"
            width={1800}
          />
          <Image
            alt="Linha completa Vem Viver em composição ambientalizada vertical"
            className={styles.lineupMobile}
            height={1800}
            sizes="(max-width: 760px) 92vw, 0px"
            src="/brand/mockups-atualizados/linha-vertical-1.png"
            width={1200}
          />
        </div>
        <div className={styles.assetGrid}>
          {productAssets.map(([name, volume, href]) => (
            <a href={href} download key={`${name}-${volume}`}>
              <span>{name}</span>
              <strong>{volume}</strong>
              <small>Baixar JPG ↓</small>
            </a>
          ))}
        </div>
        <div className={styles.lineupDownloads}>
          <a href="/brand/mockups-atualizados/linha-horizontal-1.png" download>Composição horizontal ↓</a>
          <a href="/brand/mockups-atualizados/linha-vertical-1.png" download>Composição vertical ↓</a>
          <Link href="/brand-lab/rotulos">Abrir visão completa da linha →</Link>
        </div>
      </section>

      <section className={styles.status}>
        <div className={styles.sectionIntro}>
          <p>04 · Estado do projeto</p>
          <h2>O que já está fechado e o que ainda pertence às próximas etapas.</h2>
        </div>
        <div className={styles.statusTable}>
          {status.map(([state, area, copy]) => (
            <article key={area}>
              <span>{state}</span>
              <strong>{area}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.boundary}>
        <div>
          <p>05 · Limite técnico</p>
          <h2>Mockup não é arquivo de gráfica.</h2>
        </div>
        <div className={styles.boundaryCopy}>
          <p>
            A identidade e a representação visual da linha estão suficientemente consolidadas para comunicação e implantação. A arte final de produção exige outra camada de informação: embalagem definitiva, faca real, processo de impressão, dados regulatórios completos, perfil de cor e provas físicas.
          </p>
          <p>
            Essa separação protege a qualidade do projeto: evita que um estudo visual seja tratado como arquivo técnico antes de existirem as condições reais de produção.
          </p>
        </div>
      </section>

      <section className={styles.next}>
        <div className={styles.nextCopy}>
          <p>06 · Próximo marco</p>
          <h2>Da identidade consolidada para a implantação da marca.</h2>
          <p>
            O trabalho passa agora a concentrar-se em presença institucional, materiais comerciais, site, implantação junto aos parceiros e preparação organizada da futura etapa gráfica.
          </p>
        </div>
        <div className={styles.nextLinks}>
          <Link href="/apresentacao/institucional"><span>Apresentação institucional</span><strong>Ver material para parceiros ↗</strong></Link>
          <Link href="/site-preview"><span>Presença digital</span><strong>Ver site em evolução ↗</strong></Link>
          <Link href="/brand-lab"><span>Sistema visual</span><strong>Abrir Brand Lab ↗</strong></Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><BrandLogo light /></div>
        <blockquote>“O suco que temos prazer em servir.”</blockquote>
        <p>Handoff institucional v1.0 · Vem Viver · agosto de 2026</p>
      </footer>
    </main>
  );
}
