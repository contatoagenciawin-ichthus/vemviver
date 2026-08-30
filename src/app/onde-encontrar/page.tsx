import type { Metadata } from "next";
import Link from "next/link";
import { PublicFooter } from "@/components/public-footer";
import { PublicHeader } from "@/components/public-header";

export const metadata: Metadata = {
  title: "Onde encontrar | Vem Viver",
  description: "Consulte a disponibilidade dos sucos integrais Vem Viver em Americana e região.",
};

const cities = [
  "Americana",
  "Santa Bárbara d’Oeste",
  "Nova Odessa",
  "Sumaré",
  "Limeira",
  "Piracicaba",
  "Campinas",
];

const paths = [
  {
    index: "01",
    title: "Quero encontrar perto de mim",
    text: "Fale com nosso atendimento e consulte o ponto de venda ou a disponibilidade mais próxima da sua localização.",
    href: "/contato?assunto=Onde%20encontrar#mensagem",
    label: "Consultar minha região",
  },
  {
    index: "02",
    title: "Tenho um ponto de venda",
    text: "Mercados, empórios, lojas de produtos naturais, restaurantes e outros estabelecimentos podem solicitar atendimento comercial.",
    href: "/contato?assunto=Revenda#mensagem",
    label: "Quero revender",
  },
  {
    index: "03",
    title: "Atuo com distribuição",
    text: "Buscamos parceiros alinhados ao cuidado com o produto, sua apresentação e a qualidade do atendimento.",
    href: "/contato?assunto=Distribuição#mensagem",
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
          A distribuição começa por sete cidades da região. Consulte nosso atendimento
          para saber onde encontrar a Vem Viver perto de você.
        </p>
      </section>

      <section className="availability-region">
        <div className="availability-region__mark" aria-hidden="true">
          <span>Ponto de partida</span>
          <strong>Americana</strong>
          <small>e região</small>
        </div>
        <div>
          <p className="section-index">Cobertura inicial</p>
          <h2>Presença construída com bons parceiros.</h2>
          <p>{cities.join(" · ")}</p>
          <p>
            Novas localidades e pontos de venda serão incluídos conforme a distribuição
            avançar.
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
        <p className="section-index">Atendimento direto</p>
        <h2>Consulte a disponibilidade na sua cidade.</h2>
        <p>
          Fale com Luther Liasch pelo WhatsApp (19) 99708-8241. Atendimento de
          segunda a sexta, das 8h às 18h, e sábado, das 8h às 13h.
        </p>
        <a
          className="button"
          href="https://wa.me/5519997088241?text=Ol%C3%A1%2C%20Luther.%20Gostaria%20de%20saber%20onde%20encontrar%20os%20sucos%20Vem%20Viver."
          target="_blank"
          rel="noreferrer"
        >
          Consultar pelo WhatsApp
        </a>
      </section>
      <PublicFooter />
    </main>
  );
}
