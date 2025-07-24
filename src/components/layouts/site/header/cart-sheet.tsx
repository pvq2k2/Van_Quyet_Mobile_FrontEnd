"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { mockCartItems } from "@/data/mock-data";
import type { CartItem } from "@/types/product";

export function CartSheet() {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.selectedVariation.price * item.quantity,
    0,
  );

  const updateQuantity = (productId: string, variationId: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((items) =>
      items.map((item) =>
        item.productId === productId && item.variationId === variationId
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    );
  };

  const removeItem = (productId: string, variationId: string) => {
    setCartItems((items) =>
      items.filter((item) => !(item.productId === productId && item.variationId === variationId)),
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" data-slot="icon">
          <ShoppingCart className="size-5" />
          {cartCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full p-0"
            >
              {cartCount}
            </Badge>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <ShoppingCart className="mr-2 size-5" />
            Your Cart ({cartCount})
          </SheetTitle>
          <SheetDescription className="sr-only">Your Cart</SheetDescription>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
            <ShoppingCart className="text-muted-foreground mb-4 size-12" />
            <p className="text-muted-foreground text-center">Your cart is empty</p>
            <Button asChild className="mt-4">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="my-4 flex-1 px-4">
              <div className="flex flex-col gap-6 pr-4">
                {cartItems.map((item) => (
                  <div
                    key={`${item.productId}-${item.variationId}`}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex gap-4">
                      <div className="relative size-20 overflow-hidden rounded-md border">
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
                            className="size-8"
                            data-slot="icon"
                            onClick={() => removeItem(item.productId, item.variationId)}
                          >
                            <Trash2 className="size-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="size-8 rounded-r-none"
                              data-slot="icon"
                              onClick={() =>
                                updateQuantity(item.productId, item.variationId, item.quantity - 1)
                              }
                            >
                              <Minus className="size-3" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <div className="flex h-8 w-10 items-center justify-center border-y">
                              {item.quantity}
                            </div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="size-8 rounded-l-none"
                              data-slot="icon"
                              onClick={() =>
                                updateQuantity(item.productId, item.variationId, item.quantity + 1)
                              }
                            >
                              <Plus className="size-3" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
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

                    <Separator />
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 pt-4">
              <div className="px-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="text-muted-foreground text-sm">
                  Shipping and taxes calculated at checkout
                </div>
              </div>

              <SheetFooter className="flex flex-col gap-2 sm:flex-col sm:justify-center sm:space-x-0">
                <Button
                  className="w-full"
                  onClick={() => {
                    // Close the sheet when clicking Checkout
                    setOpen(false);
                  }}
                >
                  Checkout
                </Button>
                <Button className="w-full" variant="outline">
                  <Link href="/products" className="w-full" onClick={() => setOpen(false)}>
                    Continue Shopping
                  </Link>
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
