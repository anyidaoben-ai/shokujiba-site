export type Product = {
  id: string;
  name: string;
  price: number;
};

export const products: Product[] = [
  {
    id: "ikdi",
    name: "泥つき生姜",
    price: 520,
  },
  {
    id: "kiui",
    name: "完熟キウイ",
    price: 620,
  },
  {
    id: "kek",
    name: "グリーンパプリカ",
    price: 460,
  },
  {
    id: "kokonat",
    name: "ココナッツ",
    price: 980,
  },
];

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};