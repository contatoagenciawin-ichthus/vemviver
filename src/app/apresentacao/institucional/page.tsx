import type { Metadata } from "next";
import { Bottle } from "@/components/bottle";
import { BrandLogo } from "@/components/brand-logo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vem Viver | Apresentação institucional",
  description: "Apresentação institucional do novo ciclo da marca Vem Viver.",
  robots: { index: false, follow: false },
};

const line = [
  { tone: "tinto", name: "Uva Tinto", note: "Profundo e encorpado" },
  { tone: "branco", name: "Uva Branco", note: "Leve e luminoso" },
  { tone: "rose", name: "Uva Rosé", note: "Delicado e acolhedor" },
  { tone: "laranja", name: "Laranja", note: "Familiar e vibrante" },
] as const;

const principles = [
  ["01", "Critério antes de escala", "A marca nasce para colocar seu nome apenas em produtos capazes de sustentar a percepção de qualidade que pretende construir."],
  ["02", "Marca antes do sabor", "A arquitetura privilegia reconhecimento de Vem Viver e permite que cada variante tenha personalidade sem fragmentar o conjunto."],
  ["03", "Clareza antes de excesso", "A linguagem visual busca presença, leitura e permanência — sem depender de modismos ou recursos gráficos desnecessários."],
] as const;

export default function InstitutionalPresentationPage() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <a href="/apresentacao" aria-label="Voltar à área de apresentação">← Área do projeto</a>
        <span>Apresentação institucional · 2026</span>
      </header>

      <section className={styles.cover}>
        <div className={styles.coverLogo}><BrandLogo priority /></div>
        <div className={styles.coverCopy}>
          <p>Americana · uma história iniciada em 1992</p>
          <h1>Um novo ciclo para uma marca que sempre teve prazer em <em>servir.</em></h1>
        </div>
        <div className={styles.coverFooter}>
          <span>Sucos integrais</span>
          <span>Apresentação institucional do projeto</span>
        </div>
      </section>

      <section className={styles.origin}>
        <div className={styles.sectionIndex}>01 · Origem</div>
        <div className={styles.originYear} aria-hidden="true">1992</div>
        <div className={styles.originCopy}>
          <p className={styles.kicker}>O nome não começa agora.</p>
          <h2>A Vem Viver nasceu de uma relação simples entre produto, cuidado e confiança.</h2>
          <div className={styles.twoColumns}>
            <p>
              Em 1992, Luther iniciou em Americana uma pequena casa de sucos naturais. A proposta era direta: escolher bons ingredientes, preparar com cuidado e receber bem.
            </p>
            <p>
              A trajetória passou por novos ciclos e pelo universo dos vinhos, ampliando o repertório sobre origem, seleção e fornecedores. Mais de três décadas depois, a história volta aos sucos com uma marca mais madura e uma ambição maior.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.thesis}>
        <div className={styles.sectionHeading}>
          <p>02 · Novo ciclo</p>
          <h2>Não se trata apenas de lançar um suco. Trata-se de construir uma marca confiável à mesa.</h2>
        </div>
        <div className={styles.principles}>
          {principles.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.identity}>
        <div className={styles.identityIntro}>
          <p className={styles.sectionIndex}>03 · Identidade</p>
          <h2>Uma assinatura proprietária, elegante e suficientemente simples para crescer.</h2>
          <p>
            A logomarca foi consolidada como uma assinatura tipográfica própria. O grande V central cria reconhecimento sem exigir um símbolo adicional e permite que o universo da fruta permaneça nas aplicações — não dentro do logotipo.
          </p>
        </div>
        <div className={styles.identityLogo}><BrandLogo /></div>
        <div className={styles.palette} aria-label="Paleta institucional Vem Viver">
          <article><span className={styles.green} /><strong>Verde Vem Viver</strong><code>#394524</code></article>
          <article><span className={styles.ivory} /><strong>Marfim</strong><code>#F6F0E5</code></article>
          <article><span className={styles.wine} /><strong>Uva tinto</strong><code>#541D33</code></article>
          <article><span className={styles.gold} /><strong>Dourado quente</strong><code>#B89C4A</code></article>
        </div>
      </section>

      <section className={styles.lineup}>
        <div className={styles.sectionHeadingRow}>
          <div>
            <p>04 · Linha inicial</p>
            <h2>Quatro sabores.<br />Uma só assinatura.</h2>
          </div>
          <p>
            Uvas formam o eixo inicial da proposta e a laranja amplia a presença na rotina. A arquitetura foi pensada para permitir leitura de família sem apagar a personalidade de cada sabor.
          </p>
        </div>
        <div className={styles.bottleGrid}>
          {line.map((product, index) => (
            <article key={product.tone}>
              <span>0{index + 1}</span>
              <div className={styles.bottleWrap}>
                <Bottle tone={product.tone} label={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p>{product.note}</p>
            </article>
          ))}
        </div>
        <p className={styles.lineNote}>
          As embalagens mostradas nesta apresentação são estudos de arquitetura de marca. Formatos, textos técnicos, selos e acabamentos serão definidos na etapa específica de embalagem e produção.
        </p>
      </section>

      <section className={styles.system}>
        <div>
          <p className={styles.sectionIndex}>05 · Sistema</p>
          <h2>Uma identidade preparada para existir além do rótulo.</h2>
        </div>
        <div className={styles.systemGrid}>
          <article>
            <span>Institucional</span>
            <strong>História, apresentação e relacionamento</strong>
            <p>Uma linguagem capaz de sustentar conversas com parceiros, distribuidores e futuros pontos de contato da marca.</p>
          </article>
          <article>
            <span>Digital</span>
            <strong>Site, conteúdo e presença de marca</strong>
            <p>O sistema visual já foi estruturado para se desdobrar com consistência em ambientes digitais.</p>
          </article>
          <article>
            <span>Produto</span>
            <strong>Família reconhecível e extensível</strong>
            <p>O sabor muda; a assinatura permanece. Essa lógica permite crescimento sem recomeçar a identidade a cada lançamento.</p>
          </article>
        </div>
      </section>

      <section className={styles.stage}>
        <div className={styles.stageCopy}>
          <p className={styles.sectionIndex}>06 · Momento atual</p>
          <h2>A base da marca está consolidada. Agora, o trabalho é transformar consistência em presença.</h2>
        </div>
        <div className={styles.stageList}>
          <div><span>Consolidado</span><strong>Logomarca e Brand Foundation v1.0</strong></div>
          <div><span>Em evolução</span><strong>Aplicações institucionais, site e arquitetura do portfólio</strong></div>
          <div><span>Etapa futura</span><strong>Embalagem técnica, pré-impressão e produção gráfica</strong></div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><BrandLogo light /></div>
        <blockquote>“O suco que temos prazer em servir.”</blockquote>
        <p>Material institucional de apresentação do projeto Vem Viver. Não constitui arte final de embalagem ou material regulatório.</p>
      </footer>
    </main>
  );
}
