import type { Metadata } from "next";
import Link from "next/link";
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
    href: "/contato?assunto=consumidor#mensagem",
  },
  {
    title: "Revenda",
    text: "Atendimento para mercados, empórios, restaurantes e outros pontos de venda.",
    href: "/contato?assunto=revenda#mensagem",
  },
  {
    title: "Distribuição",
    text: "Conversas sobre cobertura regional, operação comercial e expansão da marca.",
    href: "/contato?assunto=distribuicao#mensagem",
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
          Escolha o canal correspondente. Assim sua mensagem já chega organizada
          para o atendimento certo.
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
          <p className="section-index">Envie sua mensagem</p>
          <h2>Conte como podemos ajudar.</h2>
          <p>
            A estrutura do atendimento está pronta. O envio será ativado assim que
            o WhatsApp ou e-mail oficial da Vem Viver for confirmado.
          </p>
        </div>
        <form className="contact-form">
          <label>
            Nome
            <input name="nome" type="text" autoComplete="name" placeholder="Seu nome" disabled />
          </label>
          <label>
            Empresa <small>(quando aplicável)</small>
            <input name="empresa" type="text" placeholder="Nome da empresa" disabled />
          </label>
          <label>
            Cidade e estado
            <input name="localidade" type="text" placeholder="Americana, SP" disabled />
          </label>
          <label>
            Assunto
            <select name="assunto" disabled defaultValue="">
              <option value="">Selecione</option>
              <option value="consumidor">Consumidor</option>
              <option value="onde-encontrar">Onde encontrar</option>
              <option value="revenda">Revenda</option>
              <option value="distribuicao">Distribuição</option>
            </select>
          </label>
          <label className="contact-form__wide">
            Mensagem
            <textarea name="mensagem" rows={5} placeholder="Escreva sua mensagem" disabled />
          </label>
          <button className="button contact-form__wide" type="button" disabled>
            Canal em implantação
          </button>
        </form>
      </section>

      <section className="contact-return">
        <p>Procurando um ponto de venda?</p>
        <Link className="text-link" href="/onde-encontrar">Ver onde encontrar</Link>
      </section>
      <PublicFooter />
    </main>
  );
}
