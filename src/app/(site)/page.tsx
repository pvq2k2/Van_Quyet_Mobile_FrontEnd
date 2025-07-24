"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SidebarMenu } from "@/components/sidebar-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Featured product card component
function ProductCard({ title, price, image }: { title: string; price: string; image: string }) {
  return (
    <div className="group overflow-hidden rounded-lg border">
      <div className="bg-muted relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <h3 className="line-clamp-2 font-medium">{title}</h3>
        <p className="text-primary mt-1 font-bold">{price}</p>
      </div>
    </div>
  );
}

// Banner slider component using shadcn/ui carousel with autoplay and thumbnails
function BannerSlider() {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbsApi, setThumbsApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [maxLength, setMaxLength] = useState(30); // Mặc định mobile
  const [isThumbSyncing, setIsThumbSyncing] = useState(false);
  const [isMainSyncing, setIsMainSyncing] = useState(false);
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: true,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };
  const autoplayPlugin = useRef(Autoplay(autoplayOptions));

  const banners = [
    {
      id: 1,
      image: "https://cdn.hoanghamobile.com/i/home/Uploads/2025/05/13/redmi-13-copyweb.jpg",
      quickLink: { name: "Mở bán Xiaomi Redmi 13", description: "Nhận ưu đãi giá tốt" },
    },
    {
      id: 2,
      image: "https://cdn.hoanghamobile.com/i/home/Uploads/2025/05/06/a56-a36-atsh-1200x375.jpg",
      quickLink: { name: "Galaxy A56 | A36 5G", description: "Mua ngay" },
    },
    {
      id: 3,
      image: "https://cdn.hoanghamobile.com/i/home/Uploads/2025/05/13/m4-w-100.jpg",
      quickLink: { name: "Macbook Air M4", description: "Đặt trước ngay" },
    },
    {
      id: 4,
      image: "https://cdn.hoanghamobile.com/i/home/Uploads/2025/04/02/iphone-16-series-w.png",
      quickLink: { name: "iPhone 16 Pro Max", description: "Ưu đãi tới 4.000.000đ" },
    },
    {
      id: 5,
      image: "https://cdn.hoanghamobile.com/i/home/Uploads/2025/04/28/1200x375-manlg-220425.jpg",
      quickLink: { name: "Tuần lễ màn hình LG", description: "Mua ngay" },
    },
  ];

  useEffect(() => {
    const updateMaxLength = () => {
      if (window.innerWidth >= 768) {
        // md trở lên
        setMaxLength(20);
      } else {
        setMaxLength(30);
      }
    };

    updateMaxLength(); // chạy ngay khi load
    window.addEventListener("resize", updateMaxLength);

    return () => window.removeEventListener("resize", updateMaxLength);
  }, []);

  // Sync main carousel to thumbnails
  useEffect(() => {
    if (!mainApi || !thumbsApi) return;

    const onMainSelect = () => {
      if (isThumbSyncing) return;
      setIsMainSyncing(true);
      setCurrent(mainApi.selectedScrollSnap());
      thumbsApi.scrollTo(mainApi.selectedScrollSnap());
      setTimeout(() => setIsMainSyncing(false), 100);
    };

    mainApi.on("select", onMainSelect);
    // Initial selection
    onMainSelect();

    return () => {
      mainApi.off("select", onMainSelect);
    };
  }, [mainApi, thumbsApi, isThumbSyncing]);

  // Sync thumbnails to main carousel
  useEffect(() => {
    if (!thumbsApi || !mainApi) return;

    const onThumbSelect = () => {
      if (isMainSyncing) return;
      setIsThumbSyncing(true);
      const thumbIndex = thumbsApi.selectedScrollSnap();
      setCurrent(thumbIndex);
      mainApi.scrollTo(thumbIndex);
      // Reset autoplay
      autoplayPlugin.current.reset();
      autoplayPlugin.current.play();
      setTimeout(() => setIsThumbSyncing(false), 100);
    };

    thumbsApi.on("select", onThumbSelect);

    return () => {
      thumbsApi.off("select", onThumbSelect);
    };
  }, [thumbsApi, mainApi, isMainSyncing]);

  // Handle thumbnail click
  const handleThumbnailClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbsApi) return;
      setIsThumbSyncing(true);
      mainApi.scrollTo(index);
      thumbsApi.scrollTo(index);
      setCurrent(index);
      autoplayPlugin.current.reset();
      autoplayPlugin.current.play();
      setTimeout(() => setIsThumbSyncing(false), 100);
    },
    [mainApi, thumbsApi],
  );

  // Reset autoplay on mouse leave
  const handleMouseLeave = useCallback(() => {
    if (!mainApi) return;
    autoplayPlugin.current.reset();
    autoplayPlugin.current.play();
  }, [mainApi]);

  // Stop autoplay on mouse enter
  const handleMouseEnter = useCallback(() => {
    if (!mainApi) return;
    autoplayPlugin.current.stop();
  }, [mainApi]);

  return (
    <div className="space-y-3">
      {/* Banner Slider using shadcn/ui carousel with autoplay */}
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Carousel
          setApi={setMainApi}
          className="w-full"
          plugins={[autoplayPlugin.current]}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className="relative aspect-[21/9] overflow-hidden md:aspect-[3/1]">
                  <Image
                    src={banner.image || "/placeholder.svg"}
                    alt={banner.quickLink.name}
                    fill
                    className="rounded-lg border object-contain shadow-sm"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Hide navigation arrows on small screens */}
          <CarouselPrevious className="group absolute top-1/2 left-2 hidden size-10 -translate-y-1/2 rounded-full border-gray-200 bg-white shadow-md transition-colors md:flex">
            <ArrowLeft className="group-hover:text-primary size-4 transition-colors dark:text-black dark:group-hover:text-white" />
          </CarouselPrevious>
          <CarouselNext className="group absolute top-1/2 right-2 hidden size-10 -translate-y-1/2 rounded-full border-gray-200 bg-white shadow-md transition-colors md:flex">
            <ArrowRight className="group-hover:text-primary size-4 transition-colors dark:text-black dark:group-hover:text-white" />
          </CarouselNext>
        </Carousel>
      </div>

      {/* Thumbnails Carousel - 2 visible on mobile, 4 on md screens */}
      <div className="relative">
        <Carousel
          setApi={setThumbsApi}
          opts={{
            loop: true,
            align: "start",
            containScroll: "keepSnaps",
            dragFree: true,
          }}
        >
          <CarouselContent className="-ml-2">
            {banners.map((item, index) => (
              <CarouselItem key={item.id} className="basis-1/2 pl-2 md:basis-1/4">
                <div
                  onClick={() => handleThumbnailClick(index)}
                  className={`h-full cursor-pointer rounded-lg border p-3 text-center transition-colors ${
                    index === current
                      ? "border-primary text-primary bg-primary/5"
                      : "hover:border-primary"
                  }`}
                >
                  <h3 className="text-sm font-medium">
                    {item.quickLink.name.length > maxLength
                      ? item.quickLink.name.slice(0, maxLength) + "..."
                      : item.quickLink.name}
                  </h3>

                  <p className="text-muted-foreground mt-1 text-xs">{item.quickLink.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Slider Indicators */}
      <div className="mt-2 flex justify-center gap-1">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${index === current ? "bg-foreground w-8" : "w-2 bg-gray-300"}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex-1">
      <div className="container mx-auto px-2 py-6 lg:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_1fr]">
          {/* Sidebar Menu - Fixed position for large screens */}
          <div className="sticky top-20 hidden h-fit self-start lg:block">
            <SidebarMenu />
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Banner Slider with integrated Quick Links */}
            <BannerSlider />

            {/* Featured Products */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Featured Products</h2>
                <Link
                  href="/products"
                  className="text-primary flex items-center text-sm font-medium"
                >
                  View all <ArrowRight className="ml-1 size-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <ProductCard
                  title="Smartphone Pro Max"
                  price="6,290,000đ"
                  image="/placeholder.svg?height=200&width=200"
                />
                <ProductCard
                  title="Laptop Ultra Slim"
                  price="15,990,000đ"
                  image="/placeholder.svg?height=200&width=200"
                />
                <ProductCard
                  title="Wireless Earbuds"
                  price="2,490,000đ"
                  image="/placeholder.svg?height=200&width=200"
                />
                <ProductCard
                  title="Smart Watch Series 5"
                  price="5,790,000đ"
                  image="/placeholder.svg?height=200&width=200"
                />
              </div>
            </div>

            {/* New Arrivals */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">New Arrivals</h2>
                <Link
                  href="/products"
                  className="text-primary flex items-center text-sm font-medium"
                >
                  View all <ArrowRight className="ml-1 size-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <ProductCard
                  title="Tablet Pro 11-inch"
                  price="12,990,000đ"
                  image="/placeholder.svg?height=200&width=200"
                />
                <ProductCard
                  title="Gaming Headset"
                  price="1,890,000đ"
                  image="/placeholder.svg?height=200&width=200"
                />
                <ProductCard
                  title="Bluetooth Speaker"
                  price="3,490,000đ"
                  image="/placeholder.svg?height=200&width=200"
                />
                <ProductCard
                  title="4K Monitor 27-inch"
                  price="7,990,000đ"
                  image="/placeholder.svg?height=200&width=200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
