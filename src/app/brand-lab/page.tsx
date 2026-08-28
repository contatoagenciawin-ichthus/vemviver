import { Bottle } from "@/components/bottle";
import { BrandLogo } from "@/components/brand-logo";

const flavors = [
  { id: "tinto", name: "Uva Tinto", note: "Profundo e encorpado" },
  { id: "branco", name: "Uva Branco", note: "Leve e luminoso" },
  { id: "rose", name: "Uva Rosé", note: "Delicado e acolhedor" },
  { id: "laranja", name: "Laranja", note: "Familiar e vibrante" },
] as const;

const principles = [
  ["01", "Marca antes do sabor", "Primeiro reconhecemos Vem Viver. Depois, navegamos pela linha."],
  ["02", "Clareza comunica qualidade", "Hierarquia, respiro e boa leitura tornam a escolha mais simples."],
  ["03", "Feita para permanecer", "Um sistema contemporâneo, sem depender de modismos ou excessos."],
];

const colorTokens = [
  { name: "Marfim", value: "#F6F0E5", token: "cream-100" },
  { name: "Verde Vem Viver", value: "#394524", token: "brand-green" },
  { name: "Uva tinto", value: "#541D33", token: "wine" },
  { name: "Uva branco", value: "#B89C4A", token: "white-grape" },
  { name: "Uva rosé", value: "#B7737D", token: "rose" },
  { name: "Laranja", value: "#CA7B2D", token: "orange" },
] as const;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="site-header__brand" href="#inicio" aria-label="Vem Viver — início">
          <BrandLogo priority />
        </a>
        <nav className="site-header__nav" aria-label="Navegação principal">
          <a href="/brand-lab/identidade">Identidade</a>
          <a href="#essencia">Essência</a>
          <a href="#sistema">Sistema</a>
          <a href="#linha">Linha inicial</a>
        </nav>
        <span className="site-header__tag">Brand Foundation · 1.0</span>
      </header>

      <section className="hero" id="inicio">
        <div className="hero__copy">
          <p className="eyebrow">Sucos integrais · Desde 1992</p>
          <h1>O prazer de servir <em>boas escolhas.</em></h1>
          <p className="hero__lead">
            Uma marca construída com critério para ocupar a mesa, a rotina e os bons
            momentos da vida.
          </p>
          <a className="text-link" href="/brand-lab/identidade">
            Ver identidade consolidada <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="hero__visual" aria-label="Linha inicial Vem Viver">
          <div className="hero__halo" />
          <Bottle tone="tinto" label="Uva Tinto" />
          <Bottle tone="branco" label="Uva Branco" />
          <Bottle tone="rose" label="Uva Rosé" />
        </div>
      </section>

      <section className="manifesto" id="essencia">
        <p className="section-index">01 · Essência</p>
        <div className="manifesto__content">
          <p className="manifesto__intro">A qualidade não precisa ser anunciada o tempo todo.</p>
          <h2>Ela deve ser percebida em cada escolha.</h2>
          <div className="manifesto__grid">
            <p>
              A Vem Viver dá continuidade a uma história iniciada em Americana, em 1992.
              O nome permanece. O cuidado também.
            </p>
            <p>
              Agora, esse compromisso chega por meio de sucos integrais de alta qualidade:
              produtos que temos prazer em escolher, levar para casa e servir.
            </p>
          </div>
        </div>
      </section>

      <section className="system" id="sistema">
        <div className="system__heading">
          <p className="section-index">02 · Sistema</p>
          <h2>Uma linguagem segura, próxima e criteriosa.</h2>
        </div>
        <div className="principles">
          {principles.map(([number, title, copy]) => (
            <article className="principle" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="type-specimen">
          <div>
            <span className="type-specimen__label">Voz principal · Display</span>
            <p className="type-specimen__display">Escolhas que merecem ser servidas.</p>
          </div>
          <div>
            <span className="type-specimen__label">Voz de apoio · Sans</span>
            <p className="type-specimen__body">
              Simples sem ser comum. Elegante sem parecer distante. Clara em todos os
              pontos de contato.
            </p>
          </div>
        </div>

        <div className="tokens" aria-label="Tokens fundamentais do design system">
          <div className="tokens__heading">
            <div>
              <p className="section-index">Fundamentos</p>
              <h3>Paleta de marca</h3>
            </div>
            <p>
              O marfim e o verde sustentam a marca. As cores dos sabores orientam a
              escolha sem competir com a assinatura Vem Viver.
            </p>
          </div>
          <div className="tokens__grid">
            {colorTokens.map((color) => (
              <article className="color-token" key={color.token}>
                <div
                  className="color-token__swatch"
                  style={{ backgroundColor: color.value }}
                  aria-hidden="true"
                />
                <div>
                  <h4>{color.name}</h4>
                  <p>{color.value}</p>
                  <code>--{color.token}</code>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lineup" id="linha">
        <div className="lineup__heading">
          <div>
            <p className="section-index">03 · Linha inicial</p>
            <h2>Quatro sabores.<br />Uma só assinatura.</h2>
          </div>
          <p>
            A cor orienta a escolha sem fragmentar a marca. A estrutura permanece; muda
            apenas o necessário para reconhecer cada produto.
          </p>
        </div>

        <div className="flavor-grid">
          {flavors.map((flavor, index) => (
            <article className={`flavor-card flavor-card--${flavor.id}`} key={flavor.id}>
              <span className="flavor-card__number">0{index + 1}</span>
              <div className="flavor-card__swatch" />
              <div>
                <h3>{flavor.name}</h3>
                <p>{flavor.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <p className="section-index">Princípio central</p>
        <blockquote>“O suco que temos prazer em servir.”</blockquote>
        <BrandLogo light />
        <p className="closing__note">Fundação digital · versão 1.0</p>
      </section>
    </main>
  );
}
