import { ProductCard } from "@/components/product-card";
import { mockProducts } from "@/data/mock-data";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-2 py-6 md:py-8 lg:px-0">
      <h1 className="mb-4 px-4 text-2xl font-bold md:mb-6 md:px-0 md:text-3xl">Tech Products</h1>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
