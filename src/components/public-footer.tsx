import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export function PublicFooter() {
  return (
    <footer className="public-footer" id="contato">
      <div className="public-footer__brand">
        <BrandLogo light />
        <p>Sucos integrais para boas escolhas e bons momentos.</p>
      </div>
      <div>
        <span>Navegue</span>
        <Link href="/produtos">Produtos</Link>
        <Link href="/nossa-historia">Nossa história</Link>
        <Link href="/onde-encontrar">Onde encontrar</Link>
      </div>
      <div>
        <span>Converse com a Vem Viver</span>
        <Link href="/contato">Consumidor</Link>
        <Link href="/contato?assunto=revenda">Revenda</Link>
        <Link href="/contato?assunto=distribuicao">Distribuição</Link>
      </div>
      <div className="public-footer__bottom">
        <p>© 2026 Vem Viver · Americana, São Paulo</p>
        <Link href="/brand-lab">Brand Lab</Link>
      </div>
    </footer>
  );
}
