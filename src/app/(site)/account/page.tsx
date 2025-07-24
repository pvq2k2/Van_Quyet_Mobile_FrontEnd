"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  User,
  Package,
  CreditCard,
  Heart,
  LogOut,
  Settings,
  Bell,
  ShieldCheck,
  UserPlus,
  LogIn,
} from "lucide-react";

import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AccountPage() {
  const { user } = useAuth();
  const router = useRouter();

  const menuItems = [
    { icon: <User className="mr-3 h-5 w-5" />, label: "Profile", href: "/account/profile" },
    { icon: <Package className="mr-3 h-5 w-5" />, label: "Orders", href: "/account/orders" },
    {
      icon: <CreditCard className="mr-3 h-5 w-5" />,
      label: "Payment Methods",
      href: "/account/payment",
    },
    { icon: <Heart className="mr-3 h-5 w-5" />, label: "Wishlist", href: "/wishlist" },
    {
      icon: <Bell className="mr-3 h-5 w-5" />,
      label: "Notifications",
      href: "/account/notifications",
    },
    {
      icon: <ShieldCheck className="mr-3 h-5 w-5" />,
      label: "Security",
      href: "/account/security",
    },
    { icon: <Settings className="mr-3 h-5 w-5" />, label: "Settings", href: "/account/settings" },
  ];

  // If not logged in, show login/register prompt
  if (!user) {
    return (
      <div className="container mx-auto px-2 py-6 md:py-12 lg:px-0">
        <h1 className="mb-6 text-2xl font-bold md:text-3xl">My Account</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Access your account, orders, and wishlist</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <div className="bg-primary/10 mb-4 rounded-full p-4">
                <LogIn className="text-primary h-8 w-8" />
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Sign in to view your orders, manage your wishlist, and update your profile.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>Join us for a better shopping experience</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <div className="bg-primary/10 mb-4 rounded-full p-4">
                <UserPlus className="text-primary h-8 w-8" />
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Create an account to enjoy faster checkout, order tracking, and personalized
                recommendations.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/auth/register">Create Account</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Benefits of an Account</CardTitle>
              <CardDescription>Why you should create an account with us</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary/10 mt-0.5 mr-2 rounded-full p-1">
                    <Package className="text-primary h-4 w-4" />
                  </span>
                  <span className="text-sm">Track your orders and view order history</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 mt-0.5 mr-2 rounded-full p-1">
                    <Heart className="text-primary h-4 w-4" />
                  </span>
                  <span className="text-sm">Save items to your wishlist</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 mt-0.5 mr-2 rounded-full p-1">
                    <CreditCard className="text-primary h-4 w-4" />
                  </span>
                  <span className="text-sm">Save payment methods for faster checkout</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 mt-0.5 mr-2 rounded-full p-1">
                    <Bell className="text-primary h-4 w-4" />
                  </span>
                  <span className="text-sm">
                    Receive notifications about deals and new products
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // If logged in, show account dashboard
  return (
    <div className="container mx-auto px-2 py-6 md:py-8 lg:px-0">
      <h1 className="mb-6 text-2xl font-bold md:text-3xl">My Account</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="mb-6 flex flex-col items-center rounded-lg border p-4">
            <Avatar className="mb-4 h-20 w-20">
              <AvatarImage src={user.avatar || ""} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-medium">{user.name}</h2>
            <p className="text-muted-foreground text-sm">{user.email}</p>
          </div>

          <div className="flex flex-col space-y-1">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-12 justify-start"
                onClick={() => router.push(item.href)}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
            <Separator className="my-2" />
            <Button variant="ghost" className="text-destructive h-12 justify-start">
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </Button>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-medium">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground text-sm">Name</p>
                <p className="font-medium">{user.name}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Phone</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Default Shipping Address</p>
                <p className="font-medium">
                  123 Main St, Apt 4B
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <Button>Edit Profile</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
