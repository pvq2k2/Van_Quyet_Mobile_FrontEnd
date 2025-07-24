"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, User, LogOut, Heart, ShoppingBag, Settings, Menu } from "lucide-react";
import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartSheet } from "@/components/layouts/site/header/cart-sheet";
import { WishlistSheet } from "@/components/layouts/site/header/wishlist-sheet";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarMenu } from "@/components/sidebar-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "../../../theme-toggle";

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b md:z-50">
      <div className="container mx-auto flex h-16 items-center">
        {/* Mobile Menu Toggle */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0 sm:w-[350px]">
            <SheetTitle className="sr-only">Danh mục chính</SheetTitle>
            <SheetDescription className="sr-only">
              Điều hướng chính của trang, chứa các liên kết và danh mục.
            </SheetDescription>
            <div className="h-full overflow-y-auto">
              <SidebarMenu inHeader={true} />
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo - Centered on mobile, left-aligned on desktop */}
        <div className="flex flex-1 justify-center md:justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-6 w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-unicorn-head-icon lucide-unicorn-head"
              >
                <path d="m15.6 4.8 2.7 2.3" />
                <path d="M15.5 10S19 7 22 2c-6 2-10 5-10 5" />
                <path d="M11.5 12H11" />
                <path d="M5 15a4 4 0 0 0 4 4h7.8l.3.3a3 3 0 0 0 4-4.46L12 7c0-3-1-5-1-5S8 3 8 7c-4 1-6 3-6 3" />
                <path d="M2 4.5C4 3 6 3 6 3l2 4" />
                <path d="M6.14 17.8S4 19 2 22" />
              </svg>
            </div>
            <span className="hidden font-bold md:inline-block">Văn Quyết Mobile</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search - Only on desktop */}
          <div className="relative hidden md:flex">
            {isSearchOpen ? (
              <div className="flex items-center">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-[200px] lg:w-[300px]"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <span className="sr-only">Close search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="size-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Wishlist Sheet - Only on desktop */}
          <div className="hidden md:flex">
            <WishlistSheet />
          </div>

          {/* Cart Sheet - Only on desktop */}
          <div className="hidden md:flex">
            <CartSheet />
          </div>

          {/* User Account - Only on desktop */}
          <div className="hidden md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
                  {user ? (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar || ""} alt={user.name} />
                      <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <User className="size-5" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                {user ? (
                  <>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm leading-none font-medium">{user.name}</p>
                        <p className="text-muted-foreground text-xs leading-none">{user.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => router.push("/account")}>
                        <User className="mr-2 size-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => router.push("/account/orders")}>
                        <ShoppingBag className="mr-2 size-4" />
                        <span>Orders</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => router.push("/wishlist")}>
                        <Heart className="mr-2 size-4" />
                        <span>Wishlist</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => router.push("/account/settings")}>
                        <Settings className="mr-2 size-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 size-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/auth/login" className="w-full">
                        <User className="mr-2 size-4" />
                        <span>Sign In</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/auth/register" className="w-full">
                        <User className="mr-2 size-4" />
                        <span>Create Account</span>
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
