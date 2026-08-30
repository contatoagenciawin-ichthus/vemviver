"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "5519997088241";

export function ContactForm() {
  const [subject, setSubject] = useState(() =>
    typeof window === "undefined"
      ? ""
      : new URLSearchParams(window.location.search).get("assunto") ?? "",
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("nome") ?? "").trim();
    const company = String(data.get("empresa") ?? "").trim();
    const location = String(data.get("localidade") ?? "").trim();
    const selectedSubject = String(data.get("assunto") ?? "").trim();
    const message = String(data.get("mensagem") ?? "").trim();

    const lines = [
      "Olá, Luther. Vim pelo site da Vem Viver.",
      `Nome: ${name}`,
      company ? `Empresa: ${company}` : "",
      `Cidade/UF: ${location}`,
      `Assunto: ${selectedSubject}`,
      "",
      message,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Nome
        <input name="nome" type="text" autoComplete="name" placeholder="Seu nome" required />
      </label>
      <label>
        Empresa <small>(quando aplicável)</small>
        <input name="empresa" type="text" autoComplete="organization" placeholder="Nome da empresa" />
      </label>
      <label>
        Cidade e estado
        <input name="localidade" type="text" placeholder="Americana, SP" required />
      </label>
      <label>
        Assunto
        <select
          name="assunto"
          required
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Consumidor">Consumidor</option>
          <option value="Onde encontrar">Onde encontrar</option>
          <option value="Revenda">Revenda</option>
          <option value="Distribuição">Distribuição</option>
        </select>
      </label>
      <label className="contact-form__wide">
        Mensagem
        <textarea name="mensagem" rows={5} placeholder="Escreva sua mensagem" required />
      </label>
      <button className="button contact-form__wide" type="submit">
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
