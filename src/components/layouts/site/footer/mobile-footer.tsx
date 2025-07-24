import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground px-2 pt-8 pb-20 md:hidden lg:px-0">
      {/* Newsletter Section */}
      <div className="container mx-auto border-b pb-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Join our newsletter</h3>
          <p className="text-sm">
            Stay updated with the latest products, exclusive offers and tech news.
          </p>
          <div className="flex space-x-2">
            <Input type="email" placeholder="Enter your email" className="bg-background" />
            <Button size="sm">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center space-y-4 text-center">
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
          <div className="flex justify-center space-x-5">
            <Link href="#" className="transition-colors hover:text-zinc-400">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="transition-colors hover:text-zinc-400">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="transition-colors hover:text-zinc-400">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="transition-colors hover:text-zinc-400">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Accordion Links */}
      <div className="container mx-auto py-4">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="quick-links" className="border-b">
            <AccordionTrigger className="py-4 hover:text-zinc-400 hover:no-underline">
              Quick Links
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-y-2 pb-2">
                <Link
                  href="/products"
                  className="py-1 text-sm transition-colors hover:text-zinc-400"
                >
                  Products
                </Link>
                <Link
                  href="/categories"
                  className="py-1 text-sm transition-colors hover:text-zinc-400"
                >
                  Categories
                </Link>
                <Link href="/deals" className="py-1 text-sm transition-colors hover:text-zinc-400">
                  Deals
                </Link>
                <Link href="/about" className="py-1 text-sm transition-colors hover:text-zinc-400">
                  About Us
                </Link>
                <Link href="/blog" className="py-1 text-sm transition-colors hover:text-zinc-400">
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="py-1 text-sm transition-colors hover:text-zinc-400"
                >
                  Contact
                </Link>
                <Link href="/faq" className="py-1 text-sm transition-colors hover:text-zinc-400">
                  FAQ
                </Link>
                <Link
                  href="/support"
                  className="py-1 text-sm transition-colors hover:text-zinc-400"
                >
                  Support
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="contact" className="border-b">
            <AccordionTrigger className="py-4 hover:text-zinc-400 hover:no-underline">
              Contact Us
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pb-2">
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto pt-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms" className="text-xs transition-colors hover:text-zinc-400">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs transition-colors hover:text-zinc-400">
              Privacy
            </Link>
            <Link href="/cookies" className="text-xs transition-colors hover:text-zinc-400">
              Cookies
            </Link>
            <Link href="/accessibility" className="text-xs transition-colors hover:text-zinc-400">
              Accessibility
            </Link>
          </div>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} TechStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
