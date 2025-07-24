import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="container mx-auto px-2 py-6 md:py-8 lg:px-0">
      <h1 className="mb-6 text-2xl font-bold md:text-3xl">Search Products</h1>

      <div className="relative mb-8">
        <Input type="search" placeholder="Search for products..." className="h-12 pl-10" />
        <SearchIcon className="text-muted-foreground absolute top-3.5 left-3 h-5 w-5" />
      </div>

      <div className="py-12 text-center">
        <p className="text-muted-foreground mb-4">Enter a search term to find products</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Button variant="outline" size="sm">
            Smartphones
          </Button>
          <Button variant="outline" size="sm">
            Laptops
          </Button>
          <Button variant="outline" size="sm">
            Headphones
          </Button>
          <Button variant="outline" size="sm">
            Tablets
          </Button>
          <Button variant="outline" size="sm">
            Smartwatches
          </Button>
        </div>
      </div>
    </div>
  );
}
