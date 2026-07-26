export const products = [
  {
    slug: "uva-tinto",
    tone: "tinto",
    name: "Uva Tinto",
    note: "Profundo e encorpado",
    intro:
      "Um sabor marcante, criado para acompanhar a mesa e os momentos que merecem ser compartilhados.",
    accent: "O clássico da linha",
    experience:
      "Uma escolha de presença mais intensa para refeições, encontros e ocasiões em que o suco também faz parte da experiência à mesa.",
    occasions: ["Refeições em família", "Encontros e celebrações", "Momentos à mesa"],
  },
  {
    slug: "uva-branco",
    tone: "branco",
    name: "Uva Branco",
    note: "Leve e luminoso",
    intro:
      "Leveza e delicadeza em uma escolha versátil para diferentes momentos do dia.",
    accent: "Leveza à mesa",
    experience:
      "Uma proposta mais leve e versátil, pensada para acompanhar desde as pausas do dia até refeições compartilhadas.",
    occasions: ["Café da manhã", "Pausas ao longo do dia", "Refeições leves"],
  },
  {
    slug: "uva-rose",
    tone: "rose",
    name: "Uva Rosé",
    note: "Delicado e acolhedor",
    intro:
      "Uma expressão delicada da uva, com presença suave e uma personalidade própria.",
    accent: "Delicadeza com presença",
    experience:
      "Delicado sem passar despercebido, traz uma personalidade própria para encontros, recepções e momentos de descontração.",
    occasions: ["Encontros especiais", "Receber em casa", "Momentos de descontração"],
  },
  {
    slug: "laranja",
    tone: "laranja",
    name: "Laranja",
    note: "Familiar e vibrante",
    intro:
      "O sabor familiar da laranja em uma proposta vibrante para começar ou acompanhar o dia.",
    accent: "Um sabor que aproxima",
    experience:
      "Um sabor conhecido e acolhedor, apresentado com a qualidade e o cuidado que orientam toda a linha Vem Viver.",
    occasions: ["Café da manhã", "Lanches e pausas", "Rotina em família"],
  },
] as const;

export const packageSizes = [
  {
    volume: "1 L",
    size: "1l",
    description: "Prático para a rotina e para diferentes momentos do dia.",
  },
  {
    volume: "1,5 L",
    size: "1-5l",
    description: "Mais volume para compartilhar à mesa e em família.",
  },
] as const;

export type Product = (typeof products)[number];
export type ProductTone = Product["tone"];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
