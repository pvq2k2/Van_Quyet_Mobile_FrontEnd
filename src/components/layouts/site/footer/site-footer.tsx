import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b">
        <div className="container mx-auto py-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-md">
              <h3 className="mb-2 text-2xl font-bold">Join our newsletter</h3>
              <p>Stay updated with the latest products, exclusive offers and tech news.</p>
            </div>
            <div className="w-full max-w-md">
              <div className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="bg-background" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
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
              <span className="text-xl font-bold">Văn Quyết Mobile</span>
            </Link>
            <p className="text-sm">
              Your one-stop destination for premium tech products. We offer the latest smartphones,
              laptops, and accessories with exceptional service and competitive prices.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="transition-colors hover:text-zinc-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="transition-colors hover:text-zinc-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="transition-colors hover:text-zinc-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="transition-colors hover:text-zinc-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/products" className="py-1 text-sm transition-colors hover:text-zinc-500">
                Products
              </Link>
              <Link
                href="/categories"
                className="py-1 text-sm transition-colors hover:text-zinc-500"
              >
                Categories
              </Link>
              <Link href="/deals" className="py-1 text-sm transition-colors hover:text-zinc-500">
                Deals
              </Link>
              <Link href="/about" className="py-1 text-sm transition-colors hover:text-zinc-500">
                About Us
              </Link>
              <Link href="/blog" className="py-1 text-sm transition-colors hover:text-zinc-500">
                Blog
              </Link>
              <Link href="/contact" className="py-1 text-sm transition-colors hover:text-zinc-500">
                Contact
              </Link>
              <Link href="/faq" className="py-1 text-sm transition-colors hover:text-zinc-500">
                FAQ
              </Link>
              <Link href="/support" className="py-1 text-sm transition-colors hover:text-zinc-500">
                Support
              </Link>
              <Link href="/shipping" className="py-1 text-sm transition-colors hover:text-zinc-500">
                Shipping
              </Link>
              <Link href="/returns" className="py-1 text-sm transition-colors hover:text-zinc-500">
                Returns
              </Link>
              <Link href="/warranty" className="py-1 text-sm transition-colors hover:text-zinc-500">
                Warranty
              </Link>
              <Link href="/privacy" className="py-1 text-sm transition-colors hover:text-zinc-500">
                Privacy
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mt-0.5 mr-3 h-5 w-5" />
                <p className="text-sm">
                  123 Tech Street, Silicon Valley
                  <br />
                  California, 94043
                  <br />
                  United States
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5" />
                <p className="text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5" />
                <p className="text-sm">support@techstore.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="mr-3 h-5 w-5" />
                <p className="text-sm">
                  Mon-Fri: 9AM - 8PM
                  <br />
                  Sat-Sun: 10AM - 6PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t">
        <div className="container mx-auto py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} TechStore. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/terms" className="text-sm transition-colors hover:text-zinc-500">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm transition-colors hover:text-zinc-500">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm transition-colors hover:text-zinc-500">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-sm transition-colors hover:text-zinc-500">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
