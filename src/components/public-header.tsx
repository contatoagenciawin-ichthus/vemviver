import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export function PublicHeader() {
  return (
    <header className="public-header">
      <Link className="public-header__brand" href="/" aria-label="Vem Viver — início">
        <BrandLogo priority />
      </Link>
      <nav className="public-header__nav" aria-label="Navegação principal">
        <Link href="/produtos">Produtos</Link>
        <Link href="/#historia">Nossa história</Link>
        <Link href="/#comercial">Para revendedores</Link>
      </nav>
      <Link className="button button--small" href="/#contato">Fale conosco</Link>
    </header>
  );
}
