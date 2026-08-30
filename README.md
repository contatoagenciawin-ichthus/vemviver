# Vem Viver

Repositório de desenvolvimento da identidade, presença institucional e implantação digital da marca Vem Viver.

## Estado do projeto

A identidade-base está consolidada em **Brand Foundation v1.0**. A representação visual atual da linha também está consolidada por meio dos mockups aprovados dos oito produtos.

### Fontes vigentes

- Logomarca master: `public/brand/vem-viver-logo-master.svg`
- Mockups atuais: `public/brand/mockups-atualizados/`
- Governança: `docs/brand-governance-v1.md`
- Especificações futuras de embalagem: `docs/packaging-label-spec.md`

A pasta `public/brand/label-review/` e demais ativos antigos existem apenas como arquivo histórico e não devem alimentar novas aplicações.

## Linha atual

Quatro sabores em dois volumes:

- Uva Tinto — 1 L e 1,5 L
- Uva Branco — 1 L e 1,5 L
- Uva Rosé — 1 L e 1,5 L
- Laranja — 1 L e 1,5 L

Fabricante/envasador confirmado: **Casa Granda**.  
A condição **100% integral** está confirmada. Para os sucos de uva, o **selo de pureza** também está confirmado; detalhes técnicos de aplicação ficam para o fechamento gráfico.

## Rotas principais

- `/apresentacao` — hub do projeto
- `/apresentacao/institucional` — material institucional vigente
- `/brand-lab` — fundamentos e sistema visual
- `/brand-lab/identidade` — Brand Foundation v1.0
- `/brand-lab/rotulos` — mockups atuais dos oito produtos
- `/site-preview` — site institucional em evolução

No domínio de apresentação, os atalhos amigáveis são `/institucional`, `/identidade`, `/rotulos`, `/marca` e `/site`.

## Escopo deliberadamente fora desta fase

O projeto ainda não está em fechamento de pré-impressão. Permanecem para uma etapa técnica posterior:

- faca e sangria
- Pantone / perfil CMYK final
- substrato
- prova de cor
- verniz, hot stamp ou relevo
- demais acabamentos de produção
- arquivo técnico definitivo e regras de aplicação do selo

## Desenvolvimento

```bash
npm install
npm run dev
```

O projeto utiliza Next.js e é publicado pela Vercel a partir da branch de trabalho apropriada.
