import type { Metadata } from "next";
import Link from "next/link";
import { PublicFooter } from "@/components/public-footer";
import { PublicHeader } from "@/components/public-header";

export const metadata: Metadata = {
  title: "Onde encontrar | Vem Viver",
  description: "Encontre os sucos integrais Vem Viver ou indique sua cidade para receber novidades sobre novos pontos de venda.",
};

const paths = [
  {
    index: "01",
    title: "Quero encontrar perto de mim",
    text: "A distribuição começa por Americana e região. Conte onde você está para direcionarmos sua busca e avisarmos quando a Vem Viver chegar mais perto.",
    href: "/contato?assunto=onde-encontrar",
    label: "Consultar minha região",
  },
  {
    index: "02",
    title: "Tenho um ponto de venda",
    text: "Mercados, empórios, lojas de produtos naturais, restaurantes e outros estabelecimentos podem solicitar atendimento comercial.",
    href: "/contato?assunto=revenda",
    label: "Quero revender",
  },
  {
    index: "03",
    title: "Atuo com distribuição",
    text: "Para ampliar a presença da marca de forma consistente, buscamos parceiros alinhados ao cuidado com produto, apresentação e atendimento.",
    href: "/contato?assunto=distribuicao",
    label: "Falar sobre distribuição",
  },
];

export default function WhereToFindPage() {
  return (
    <main className="public-site availability-page">
      <PublicHeader />
      <section className="conversion-hero">
        <div>
          <p className="eyebrow">Onde encontrar</p>
          <h1>Mais perto da sua mesa, <em>passo a passo.</em></h1>
        </div>
        <p>
          A Vem Viver está iniciando sua distribuição. Enquanto ampliamos os pontos
          de venda, queremos saber onde você gostaria de encontrar nossos sucos.
        </p>
      </section>

      <section className="availability-region">
        <div className="availability-region__mark" aria-hidden="true">
          <span>Ponto de partida</span>
          <strong>Americana</strong>
          <small>São Paulo</small>
        </div>
        <div>
          <p className="section-index">Expansão responsável</p>
          <h2>Presença construída com bons parceiros.</h2>
          <p>
            Começamos por Americana e região, próximos da origem da marca. Novas
            localidades serão incluídas aqui conforme os pontos de venda forem
            confirmados.
          </p>
        </div>
      </section>

      <section className="contact-paths" aria-label="Canais para encontrar e comercializar Vem Viver">
        {paths.map((path) => (
          <article key={path.index}>
            <span>{path.index}</span>
            <h2>{path.title}</h2>
            <p>{path.text}</p>
            <Link className="text-link" href={path.href}>{path.label}</Link>
          </article>
        ))}
      </section>

      <section className="availability-note">
        <p className="section-index">Em breve</p>
        <h2>Um mapa vivo dos pontos de venda.</h2>
        <p>
          Quando os primeiros parceiros estiverem confirmados, esta página passará a
          reunir endereços, cidades e canais de compra da Vem Viver.
        </p>
      </section>
      <PublicFooter />
    </main>
  );
}
