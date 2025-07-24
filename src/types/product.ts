export type ProductVariation = {
  id: string;
  name: string;
  price: number;
  attributes: {
    [key: string]: string;
  };
  inStock: boolean;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  basePrice: number;
  variations: ProductVariation[];
  variationTypes: string[]; // e.g., ["Color", "Storage", "RAM"]
};

export type CartItem = {
  productId: string;
  variationId: string;
  quantity: number;
  product: Product;
  selectedVariation: ProductVariation;
};

export type WishlistItem = {
  productId: string;
  variationId: string;
  product: Product;
  selectedVariation: ProductVariation;
};
