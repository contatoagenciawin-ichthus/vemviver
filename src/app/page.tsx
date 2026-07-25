import Link from "next/link";
import { Bottle } from "@/components/bottle";
import { BrandLogo } from "@/components/brand-logo";

const products = [
  { tone: "tinto", name: "Uva Tinto", note: "Profundo e encorpado" },
  { tone: "branco", name: "Uva Branco", note: "Leve e luminoso" },
  { tone: "rose", name: "Uva Rosé", note: "Delicado e acolhedor" },
  { tone: "laranja", name: "Laranja", note: "Familiar e vibrante" },
] as const;

export default function Home() {
  return (
    <main className="public-site">
      <header className="public-header">
        <Link className="public-header__brand" href="/" aria-label="Vem Viver — início">
          <BrandLogo priority />
        </Link>
        <nav className="public-header__nav" aria-label="Navegação principal">
          <a href="#produtos">Produtos</a>
          <a href="#historia">Nossa história</a>
          <a href="#comercial">Para revendedores</a>
        </nav>
        <a className="button button--small" href="#contato">Fale conosco</a>
      </header>

      <section className="public-hero">
        <div className="public-hero__copy">
          <p className="eyebrow">Sucos integrais · Desde 1992</p>
          <h1>Boas escolhas merecem ser <em>servidas.</em></h1>
          <p>
            Sucos integrais feitos para ocupar a mesa, acompanhar a rotina e tornar
            os bons momentos ainda mais especiais.
          </p>
          <div className="public-hero__actions">
            <a className="button" href="#produtos">Conheça os sabores</a>
            <a className="text-link" href="#historia">Conheça a Vem Viver</a>
          </div>
        </div>

        <div className="public-hero__visual" aria-label="Sucos integrais Vem Viver">
          <span className="public-hero__stamp">100% integral</span>
          <div className="public-hero__halo" />
          <Bottle tone="tinto" label="Uva Tinto" />
          <Bottle tone="branco" label="Uva Branco" />
          <Bottle tone="rose" label="Uva Rosé" />
        </div>
      </section>

      <section className="public-promise" aria-label="Proposta da marca">
        <p>Qualidade que se percebe</p>
        <span />
        <p>Sabor para compartilhar</p>
        <span />
        <p>Escolhas feitas com critério</p>
      </section>

      <section className="products-section" id="produtos">
        <div className="public-section-heading">
          <div>
            <p className="section-index">Nossa linha</p>
            <h2>Um sabor para cada <em>momento.</em></h2>
          </div>
          <p>
            Uma linha criada para quem valoriza bons produtos e o prazer simples
            de servir algo escolhido com cuidado.
          </p>
        </div>

        <div className="product-showcase">
          {products.map((product, index) => (
            <article className={`product-tile product-tile--${product.tone}`} key={product.tone}>
              <span className="product-tile__number">0{index + 1}</span>
              <div className="product-tile__bottle">
                <Bottle tone={product.tone} label={product.name} />
              </div>
              <div className="product-tile__copy">
                <h3>{product.name}</h3>
                <p>{product.note}</p>
                <span>Conhecer o produto →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section" id="historia">
        <div className="story-section__year" aria-hidden="true">1992</div>
        <div className="story-section__copy">
          <p className="section-index">Nossa história</p>
          <h2>Uma história que continua em cada escolha.</h2>
          <p>
            A Vem Viver nasceu em Americana, em 1992. Hoje, o nome que atravessou
            gerações ganha um novo capítulo por meio de sucos integrais de alta
            qualidade, mantendo aquilo que sempre importou: cuidado, confiança e
            prazer em servir.
          </p>
          <span className="story-section__signature">O nome permanece. O cuidado também.</span>
        </div>
      </section>

      <section className="occasion-section">
        <div className="occasion-section__frame">
          <span>Da rotina aos encontros</span>
          <strong>Vem para a mesa.<br />Vem para a vida.</strong>
        </div>
        <div className="occasion-section__copy">
          <p className="section-index">Feito para compartilhar</p>
          <h2>O suco que temos prazer em servir.</h2>
          <p>
            No café da manhã, no almoço em família ou em uma pausa no meio do dia:
            Vem Viver combina qualidade, sabor e presença para acompanhar momentos reais.
          </p>
        </div>
      </section>

      <section className="trade-section" id="comercial">
        <div>
          <p className="section-index">Revenda e distribuição</p>
          <h2>Leve Vem Viver para mais mesas.</h2>
        </div>
        <div>
          <p>
            Quer oferecer a linha Vem Viver em seu mercado, empório, restaurante ou
            canal de distribuição? Converse com nossa equipe comercial.
          </p>
          <a className="button button--light" href="#contato">Quero ser parceiro</a>
        </div>
      </section>

      <footer className="public-footer" id="contato">
        <div className="public-footer__brand">
          <BrandLogo light />
          <p>Sucos integrais para boas escolhas e bons momentos.</p>
        </div>
        <div>
          <span>Navegue</span>
          <a href="#produtos">Produtos</a>
          <a href="#historia">Nossa história</a>
          <a href="#comercial">Seja um parceiro</a>
        </div>
        <div>
          <span>Contato</span>
          <p>Canal comercial em implantação</p>
          <p>Americana · São Paulo</p>
        </div>
        <div className="public-footer__bottom">
          <p>© 2026 Vem Viver</p>
          <Link href="/brand-lab">Brand Lab</Link>
        </div>
      </footer>
    </main>
  );
}
