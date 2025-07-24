"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Smartphone,
  Laptop,
  Tablet,
  Monitor,
  Headphones,
  Watch,
  Speaker,
  Apple,
} from "lucide-react";

import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Điện thoại",
    icon: <Smartphone className="mr-3 size-5" />,
    href: "/categories/phones",
  },
  {
    name: "Apple",
    icon: <Apple className="mr-3 size-5" />,
    href: "/categories/apple",
  },
  {
    name: "Laptop",
    icon: <Laptop className="mr-3 size-5" />,
    href: "/categories/laptops",
  },
  {
    name: "Tablet",
    icon: <Tablet className="mr-3 size-5" />,
    href: "/categories/tablets",
  },
  {
    name: "Màn hình",
    icon: <Monitor className="mr-3 size-5" />,
    href: "/categories/monitors",
  },
  {
    name: "Điện máy",
    icon: <Speaker className="mr-3 size-5" />,
    href: "/categories/electronics",
  },
  {
    name: "Đồng hồ",
    icon: <Watch className="mr-3 size-5" />,
    href: "/categories/watches",
  },
  {
    name: "Âm thanh",
    icon: <Headphones className="mr-3 size-5" />,
    href: "/categories/audio",
  },
];

export function SidebarMenu({ inHeader = false }: { inHeader?: boolean }) {
  const pathname = usePathname();

  return (
    <div className={cn("w-full", inHeader ? "" : "rounded-lg border shadow-sm")}>
      <div className="border-b p-4 text-lg font-medium">Danh mục</div>
      <div className="p-2">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className={cn(
              "hover:bg-muted flex items-center rounded-md px-3 py-3 text-sm transition-colors",
              pathname === category.href ? "bg-muted" : "",
            )}
          >
            {category.icon}
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
