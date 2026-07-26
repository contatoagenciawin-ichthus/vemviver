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
        <Link href="/#comercial">Seja um parceiro</Link>
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
  );
}
