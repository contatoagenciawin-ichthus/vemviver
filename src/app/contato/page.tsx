import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PublicFooter } from "@/components/public-footer";
import { PublicHeader } from "@/components/public-header";

export const metadata: Metadata = {
  title: "Contato | Vem Viver",
  description: "Fale com a Vem Viver como consumidor, ponto de venda ou parceiro de distribuição.",
};

const audiences = [
  {
    title: "Consumidor",
    text: "Dúvidas sobre produtos, conservação, disponibilidade ou onde encontrar.",
    href: "/contato?assunto=Consumidor#mensagem",
  },
  {
    title: "Revenda",
    text: "Atendimento para mercados, empórios, restaurantes e outros pontos de venda.",
    href: "/contato?assunto=Revenda#mensagem",
  },
  {
    title: "Distribuição",
    text: "Conversas sobre cobertura regional, operação comercial e expansão da marca.",
    href: "/contato?assunto=Distribuição#mensagem",
  },
];

export default function ContactPage() {
  return (
    <main className="public-site contact-page">
      <PublicHeader />
      <section className="conversion-hero conversion-hero--contact">
        <div>
          <p className="eyebrow">Contato</p>
          <h1>Uma conversa para cada <em>necessidade.</em></h1>
        </div>
        <p>
          O atendimento é realizado por Luther Liasch, de segunda a sexta, das 8h às
          18h, e aos sábados, das 8h às 13h.
        </p>
      </section>

      <section className="audience-grid">
        {audiences.map((audience, index) => (
          <Link href={audience.href} key={audience.title}>
            <span>0{index + 1}</span>
            <h2>{audience.title}</h2>
            <p>{audience.text}</p>
            <strong>Selecionar →</strong>
          </Link>
        ))}
      </section>

      <section className="contact-form-section" id="mensagem">
        <div>
          <p className="section-index">Fale com a Vem Viver</p>
          <h2>Conte como podemos ajudar.</h2>
          <p>
            Preencha os dados e continue a conversa pelo WhatsApp. Se preferir,
            escreva para{" "}
            <a className="text-link" href="mailto:contato@emporioliasch.com.br">
              contato@emporioliasch.com.br
            </a>
            .
          </p>
        </div>
        <ContactForm />
      </section>

      <section className="contact-return">
        <p>WhatsApp: (19) 99708-8241</p>
        <a
          className="text-link"
          href="https://wa.me/5519997088241"
          target="_blank"
          rel="noreferrer"
        >
          Iniciar conversa
        </a>
      </section>
      <PublicFooter />
    </main>
  );
}
