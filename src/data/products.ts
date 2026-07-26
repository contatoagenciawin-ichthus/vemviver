export const products = [
  {
    slug: "uva-tinto",
    tone: "tinto",
    name: "Uva Tinto",
    note: "Profundo e encorpado",
    intro:
      "Um sabor marcante, criado para acompanhar a mesa e os momentos que merecem ser compartilhados.",
    accent: "O clássico da linha",
  },
  {
    slug: "uva-branco",
    tone: "branco",
    name: "Uva Branco",
    note: "Leve e luminoso",
    intro:
      "Leveza e delicadeza em uma escolha versátil para diferentes momentos do dia.",
    accent: "Leveza à mesa",
  },
  {
    slug: "uva-rose",
    tone: "rose",
    name: "Uva Rosé",
    note: "Delicado e acolhedor",
    intro:
      "Uma expressão delicada da uva, com presença suave e uma personalidade própria.",
    accent: "Delicadeza com presença",
  },
  {
    slug: "laranja",
    tone: "laranja",
    name: "Laranja",
    note: "Familiar e vibrante",
    intro:
      "O sabor familiar da laranja em uma proposta vibrante para começar ou acompanhar o dia.",
    accent: "Um sabor que aproxima",
  },
] as const;

export type Product = (typeof products)[number];
export type ProductTone = Product["tone"];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
