import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Get the first in-stock variation or the first variation if none are in stock
  const defaultVariation = product.variations.find((v) => v.inStock) || product.variations[0];

  return (
    <Card className="flex h-full flex-col overflow-hidden border-0 md:border" data-slot="card">
      <CardHeader className="p-0 md:p-4">
        <div className="relative aspect-square overflow-hidden rounded-none md:rounded-md">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 absolute top-2 right-2 size-8 backdrop-blur-sm"
            data-slot="icon"
          >
            <Heart className="size-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-4">
        <CardTitle className="line-clamp-1 text-lg">{product.name}</CardTitle>
        <CardDescription className="mt-1 line-clamp-2">{product.description}</CardDescription>

        <div className="mt-4 mb-2 flex items-center justify-between">
          <div className="text-lg font-bold">${defaultVariation.price.toFixed(2)}</div>
          {!defaultVariation.inStock && <Badge variant="destructive">Out of Stock</Badge>}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {Object.entries(defaultVariation.attributes).map(([key, value]) => (
            <Badge key={key} variant="secondary" className="px-2 py-1">
              {key}: {value}
            </Badge>
          ))}
        </div>

        <Link
          href={`/products/${product.id}`}
          className="text-primary mt-auto block text-sm hover:underline"
        >
          View all variations
        </Link>
      </CardContent>
    </Card>
  );
}
