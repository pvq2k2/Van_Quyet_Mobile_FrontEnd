import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { mockCartItems } from "@/data/mock-data";

export default function CartPage() {
  const cartCount = mockCartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = mockCartItems.reduce(
    (total, item) => total + item.selectedVariation.price * item.quantity,
    0,
  );

  return (
    <div className="container mx-auto px-2 py-6 md:py-8 lg:px-0">
      <div className="mb-6 flex items-center">
        <Link href="/products" className="text-muted-foreground mr-4 flex items-center text-sm">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Continue Shopping
        </Link>
        <h1 className="text-center text-2xl font-bold md:text-3xl">Your Cart ({cartCount})</h1>
      </div>

      {mockCartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="bg-muted mb-6 flex h-24 w-24 items-center justify-center rounded-full">
            <Trash2 className="text-muted-foreground h-12 w-12" />
          </div>
          <h2 className="mb-2 text-xl font-medium">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6 max-w-md">
            Looks like you haven&apos;t added any products to your cart yet.
          </p>
          <Button asChild>
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            {mockCartItems.map((item) => (
              <div
                key={`${item.productId}-${item.variationId}`}
                className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row"
              >
                <div className="relative h-24 w-24 overflow-hidden rounded-md border md:h-32 md:w-32">
                  <Image
                    src={item.product.image || "/placeholder.svg"}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-muted-foreground text-sm">
                        ${item.selectedVariation.price.toFixed(2)}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>

                  <div className="my-2 flex flex-wrap gap-2">
                    {Object.entries(item.selectedVariation.attributes).map(([key, value]) => (
                      <Badge key={key} variant="secondary" className="px-2 py-1">
                        {key}: {value}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none">
                      <Minus className="h-3 w-3" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <div className="flex h-8 w-10 items-center justify-center border-y">
                      {item.quantity}
                    </div>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none">
                      <Plus className="h-3 w-3" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-20 rounded-lg border p-6">
              <h2 className="mb-4 text-lg font-medium">Order Summary</h2>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="mb-6 flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <Button className="w-full">Proceed to Checkout</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
