"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, ShoppingBag, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { mockCartItems, mockWishlistItems } from "@/data/mock-data";

export function MobileNav() {
  const pathname = usePathname();
  const cartCount = mockCartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = mockWishlistItems.length;

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: <Home className="h-5 w-5" />,
      badge: null,
    },
    {
      href: "/search",
      label: "Search",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      ),
      badge: null,
    },
    {
      href: "/wishlist",
      label: "Wishlist",
      icon: <Heart className="h-5 w-5" />,
      badge: wishlistCount > 0 ? wishlistCount : null,
    },
    {
      href: "/cart",
      label: "Cart",
      icon: <ShoppingBag className="h-5 w-5" />,
      badge: cartCount > 0 ? cartCount : null,
    },
    {
      href: "/account",
      label: "Account",
      icon: <User className="h-5 w-5" />,
      badge: null,
    },
  ];

  return (
    <div className="bg-background fixed right-0 bottom-0 left-0 z-50 border-t md:hidden">
      <div className="flex h-16 items-center justify-around">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="flex-1">
            <div
              className={cn(
                "flex h-full flex-col items-center justify-center",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              <div className="relative">
                {item.icon}
                {item.badge && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full p-0 text-[10px]"
                  >
                    {item.badge}
                  </Badge>
                )}
              </div>
              <span className="mt-1 text-xs">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
