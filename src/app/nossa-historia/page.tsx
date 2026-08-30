import type { Metadata } from "next";
import Link from "next/link";
import { PublicFooter } from "@/components/public-footer";
import { PublicHeader } from "@/components/public-header";

export const metadata: Metadata = {
  title: "Nossa história | Vem Viver",
  description:
    "Conheça a história da Vem Viver, iniciada em Americana em 1992 e renovada em uma linha de sucos integrais.",
};

const timeline = [
  {
    marker: "1992",
    title: "Uma pequena casa de sucos",
    text: "Luther deixa a segurança de um emprego para abrir, em Americana, uma casa dedicada a sucos naturais preparados com frutas de verdade.",
  },
  {
    marker: "5 anos",
    title: "Parte da rotina da cidade",
    text: "A Vem Viver torna-se conhecida pela qualidade dos produtos, pelo atendimento próximo e pelo cuidado ao receber cada cliente.",
  },
  {
    marker: "Novo ciclo",
    title: "Da casa de sucos ao restaurante",
    text: "O negócio muda, mas preserva o mesmo nome e o mesmo princípio: servir bem, escolher bons ingredientes e tratar qualidade como parte essencial do trabalho.",
  },
  {
    marker: "Vinhos",
    title: "Um olhar ainda mais apurado",
    text: "A experiência de Luther no universo dos vinhos amplia seu repertório sobre seleção, origem, fornecedores e confiança nas relações comerciais.",
  },
  {
    marker: "Hoje",
    title: "A história volta aos sucos",
    text: "Mais de três décadas depois, a Vem Viver começa uma nova fase com uma linha de sucos integrais escolhida para representar o cuidado presente desde o primeiro dia.",
  },
];

export default function OurStoryPage() {
  return (
    <main className="public-site history-page">
      <PublicHeader />

      <section className="history-hero">
        <div className="history-hero__copy">
          <p className="eyebrow">Americana · Desde 1992</p>
          <h1>O nome permanece.<br /><em>O cuidado também.</em></h1>
          <p>
            A Vem Viver não começa agora. Ela dá continuidade a uma história real,
            construída por mais de três décadas entre produtos bem escolhidos,
            atendimento próximo e prazer em servir.
          </p>
        </div>
        <div className="history-hero__year" aria-hidden="true">
          <span>Desde</span>
          <strong>1992</strong>
        </div>
      </section>

      <section className="history-origin">
        <div>
          <p className="section-index">Onde tudo começou</p>
          <h2>Frutas de verdade, antes de isso virar tendência.</h2>
        </div>
        <div className="history-origin__copy">
          <p>
            Em 1992, Luther decidiu deixar a segurança de um emprego para abrir uma
            pequena casa de sucos naturais em Americana.
          </p>
          <p>
            A proposta era direta: preparar sucos sem concentrados, valorizar
            ingredientes naturais e cuidar de cada preparo. Durante cinco anos, a
            Vem Viver fez parte da rotina de muitas pessoas e se tornou conhecida
            tanto pelo produto quanto pela forma de receber.
          </p>
          <blockquote>
            “Qualidade nunca é um detalhe.”
          </blockquote>
        </div>
      </section>

      <section className="history-timeline" aria-label="Linha do tempo da Vem Viver">
        <div className="history-timeline__intro">
          <p className="section-index">Nossa trajetória</p>
          <h2>Uma história feita de novos ciclos.</h2>
        </div>
        <div className="history-timeline__items">
          {timeline.map((item, index) => (
            <article key={item.marker}>
              <span>0{index + 1}</span>
              <strong>{item.marker}</strong>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="history-grape">
        <div className="history-grape__visual" aria-hidden="true">
          <span>Origem</span>
          <span>Seleção</span>
          <span>Confiança</span>
        </div>
        <div className="history-grape__copy">
          <p className="section-index">Por que começar pela uva</p>
          <h2>O repertório dos vinhos encontra uma nova forma de chegar à mesa.</h2>
          <p>
            A uva ocupa o centro desta nova fase porque se conecta ao olhar
            desenvolvido por Luther ao longo dos anos: conhecer a origem, escolher
            com critério e construir relações de confiança.
          </p>
          <p>
            Uva Tinto, Uva Branco e Uva Rosé formam o eixo inicial da linha. A
            Laranja completa essa chegada com um sabor familiar e presente na rotina
            brasileira.
          </p>
          <Link className="text-link" href="/produtos">Conheça a linha</Link>
        </div>
      </section>

      <section className="history-principle">
        <p className="section-index">O que continua</p>
        <h2>O suco que temos prazer em servir.</h2>
        <p>
          A Vem Viver coloca seu nome apenas em produtos capazes de representar o
          padrão de qualidade que deseja construir. Antes de crescer em quantidade,
          a marca escolhe crescer em confiança.
        </p>
        <Link className="button button--light" href="/produtos">
          Descubra os sabores
        </Link>
      </section>

      <PublicFooter />
    </main>
  );
}
