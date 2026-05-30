export type Product = {
  id: string;
  name: string;
  price: number;
};

export const products: Product[] = [
  {
    id: "shokujiba-product-001",
    name: "食事場 商品",
    price: 3000,
  },
];

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};