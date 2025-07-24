import type { Product, CartItem, WishlistItem } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "TechX Smartphone Pro",
    description:
      "The latest flagship smartphone with cutting-edge features and exceptional camera quality.",
    image:
      "https://cdn.hoanghamobile.com/default/Uploads/2024/09/10/iphone-16-pro-sa-mac-1.png;trim.threshold=80;trim.percentpadding=0.5;width=138;height=180;mode=pad;",
    basePrice: 799.99,
    variationTypes: ["Color", "Storage"],
    variations: [
      {
        id: "v1",
        name: "TechX Smartphone Pro - Midnight Black 128GB",
        price: 799.99,
        attributes: {
          Color: "Midnight Black",
          Storage: "128GB",
        },
        inStock: true,
      },
      {
        id: "v2",
        name: "TechX Smartphone Pro - Midnight Black 256GB",
        price: 899.99,
        attributes: {
          Color: "Midnight Black",
          Storage: "256GB",
        },
        inStock: true,
      },
      {
        id: "v3",
        name: "TechX Smartphone Pro - Glacier Blue 128GB",
        price: 799.99,
        attributes: {
          Color: "Glacier Blue",
          Storage: "128GB",
        },
        inStock: true,
      },
      {
        id: "v4",
        name: "TechX Smartphone Pro - Glacier Blue 256GB",
        price: 899.99,
        attributes: {
          Color: "Glacier Blue",
          Storage: "256GB",
        },
        inStock: false,
      },
    ],
  },
  {
    id: "p2",
    name: "UltraBook Laptop X1",
    description: "Powerful, lightweight laptop with all-day battery life and stunning display.",
    image: "/placeholder.svg?height=200&width=200",
    basePrice: 1299.99,
    variationTypes: ["Color", "RAM", "Storage"],
    variations: [
      {
        id: "v5",
        name: "UltraBook Laptop X1 - Silver 8GB 256GB",
        price: 1299.99,
        attributes: {
          Color: "Silver",
          RAM: "8GB",
          Storage: "256GB SSD",
        },
        inStock: true,
      },
      {
        id: "v6",
        name: "UltraBook Laptop X1 - Silver 16GB 512GB",
        price: 1599.99,
        attributes: {
          Color: "Silver",
          RAM: "16GB",
          Storage: "512GB SSD",
        },
        inStock: true,
      },
      {
        id: "v7",
        name: "UltraBook Laptop X1 - Space Gray 8GB 256GB",
        price: 1299.99,
        attributes: {
          Color: "Space Gray",
          RAM: "8GB",
          Storage: "256GB SSD",
        },
        inStock: true,
      },
      {
        id: "v8",
        name: "UltraBook Laptop X1 - Space Gray 16GB 512GB",
        price: 1599.99,
        attributes: {
          Color: "Space Gray",
          RAM: "16GB",
          Storage: "512GB SSD",
        },
        inStock: true,
      },
    ],
  },
  {
    id: "p3",
    name: "SoundWave Wireless Earbuds",
    description: "Premium wireless earbuds with active noise cancellation and crystal-clear sound.",
    image: "/placeholder.svg?height=200&width=200",
    basePrice: 149.99,
    variationTypes: ["Color"],
    variations: [
      {
        id: "v9",
        name: "SoundWave Wireless Earbuds - White",
        price: 149.99,
        attributes: {
          Color: "White",
        },
        inStock: true,
      },
      {
        id: "v10",
        name: "SoundWave Wireless Earbuds - Black",
        price: 149.99,
        attributes: {
          Color: "Black",
        },
        inStock: true,
      },
      {
        id: "v11",
        name: "SoundWave Wireless Earbuds - Navy Blue",
        price: 159.99,
        attributes: {
          Color: "Navy Blue",
        },
        inStock: false,
      },
    ],
  },
];

export const mockCartItems: CartItem[] = [
  {
    productId: "p1",
    variationId: "v2",
    quantity: 1,
    product: mockProducts[0],
    selectedVariation: mockProducts[0].variations[1],
  },
  {
    productId: "p3",
    variationId: "v9",
    quantity: 2,
    product: mockProducts[2],
    selectedVariation: mockProducts[2].variations[0],
  },
];

export const mockWishlistItems: WishlistItem[] = [
  {
    productId: "p1",
    variationId: "v3",
    product: mockProducts[0],
    selectedVariation: mockProducts[0].variations[2],
  },
  {
    productId: "p2",
    variationId: "v6",
    product: mockProducts[1],
    selectedVariation: mockProducts[1].variations[1],
  },
];
