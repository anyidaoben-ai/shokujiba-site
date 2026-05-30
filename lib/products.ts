export type Product = {
  id: string;
  name: string;
  price: number;
};

export const products: Product[] = [
  {
    id: "rice-001",
    name: "食事場 特製ライス",
    price: 1200,
  },
  {
    id: "meat-001",
    name: "食事場 プレミアムミート",
    price: 3000,
  },
  {
    id: "drink-001",
    name: "食事場 ドリンク",
    price: 500,
  },
];

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};