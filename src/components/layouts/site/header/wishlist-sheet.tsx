"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { mockWishlistItems } from "@/data/mock-data";
import type { WishlistItem } from "@/types/product";

export function WishlistSheet() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(mockWishlistItems);
  const [open, setOpen] = useState(false);

  const removeItem = (productId: string, variationId: string) => {
    setWishlistItems((items) =>
      items.filter((item) => !(item.productId === productId && item.variationId === variationId)),
    );
  };

  // In a real app, this would add the item to your cart state
  const addToCart = (productId: string, variationId: string) => {
    console.log(`Added item ${productId} with variation ${variationId} to cart`);
    // You would typically dispatch an action to your state management here
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Heart className="h-5 w-5" />
          {wishlistItems.length > 0 && (
            <Badge
              variant="secondary"
              className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full p-0"
            >
              {wishlistItems.length}
            </Badge>
          )}
          <span className="sr-only">Open wishlist</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <Heart className="mr-2 h-5 w-5" />
            Your Wishlist ({wishlistItems.length})
          </SheetTitle>
          <SheetDescription className="sr-only">Your Wishlist</SheetDescription>
        </SheetHeader>

        {wishlistItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
            <Heart className="text-muted-foreground mb-4 h-12 w-12" />
            <p className="text-muted-foreground text-center">Your wishlist is empty</p>
            <Button asChild className="mt-4">
              <Link href="/products" onClick={() => setOpen(false)}>
                Explore Products
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="my-4 flex-1 px-4">
              <div className="flex flex-col gap-6 pr-4">
                {wishlistItems.map((item) => (
                  <div
                    key={`${item.productId}-${item.variationId}`}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                        <Image
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">{item.product.name}</h3>
                            <p className="text-muted-foreground text-sm">
                              ${item.selectedVariation.price.toFixed(2)}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => removeItem(item.productId, item.variationId)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs">
                      {Object.entries(item.selectedVariation.attributes).map(([key, value]) => (
                        <Badge key={key} variant="secondary" className="px-2 py-1">
                          {key}: {value}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      className="w-full"
                      onClick={() => addToCart(item.productId, item.variationId)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>

                    <Separator />
                  </div>
                ))}
              </div>
            </ScrollArea>

            <SheetFooter className="flex flex-col gap-2 sm:flex-col sm:justify-center sm:space-x-0">
              <Button className="w-full" variant="outline">
                <Link href="/products" className="w-full" onClick={() => setOpen(false)}>
                  Continue Shopping
                </Link>
              </Button>
              <Button
                variant="destructive"
                className="w-full"
                onClick={() => {
                  setWishlistItems([]);
                }}
              >
                Clear Wishlist
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
