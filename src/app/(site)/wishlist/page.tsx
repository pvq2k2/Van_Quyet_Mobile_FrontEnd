import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockWishlistItems } from "@/data/mock-data";

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-2 py-6 md:py-8 lg:px-0">
      <div className="mb-6 flex items-center">
        <Link href="/products" className="text-muted-foreground mr-4 flex items-center text-sm">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Continue Shopping
        </Link>
        <h1 className="text-2xl font-bold md:text-3xl">
          Your Wishlist ({mockWishlistItems.length})
        </h1>
      </div>

      {mockWishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="bg-muted mb-6 flex h-24 w-24 items-center justify-center rounded-full">
            <Heart className="text-muted-foreground h-12 w-12" />
          </div>
          <h2 className="mb-2 text-xl font-medium">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-6 max-w-md">
            Looks like you haven&apos;t added any products to your wishlist yet.
          </p>
          <Button asChild>
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {mockWishlistItems.map((item) => (
            <div
              key={`${item.productId}-${item.variationId}`}
              className="flex flex-col overflow-hidden rounded-lg border"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.product.image || "/placeholder.svg"}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="bg-background/80 hover:bg-destructive absolute top-2 right-2 h-8 w-8 backdrop-blur-sm"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove from wishlist</span>
                </Button>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="line-clamp-1 font-medium">{item.product.name}</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  ${item.selectedVariation.price.toFixed(2)}
                </p>

                <div className="my-3 flex flex-wrap gap-2">
                  {Object.entries(item.selectedVariation.attributes).map(([key, value]) => (
                    <Badge key={key} variant="secondary" className="px-2 py-1">
                      {key}: {value}
                    </Badge>
                  ))}
                </div>

                <Button className="mt-auto w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
