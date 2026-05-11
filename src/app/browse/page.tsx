import Navbar from "@/components/Navbar";
import ProductCard from "@/components/products/ProductCard";
import FilterSidebar from "@/components/products/FilterSidebar";
import { Search, SlidersHorizontal } from "lucide-react";

// Dummy Data
const DUMMY_PRODUCTS = [
  { id: "1", title: "Nexora SaaS Dashboard", price: 59, old_price: 99, category: "Dashboards", thumbnail_url: "", rating: 4.9, sales_count: 124, slug: "nexora-dashboard" },
  { id: "2", title: "Modern Portfolio Template", price: 29, category: "Templates", thumbnail_url: "", rating: 4.8, sales_count: 86, slug: "modern-portfolio" },
  { id: "3", title: "E-commerce Landing Page", price: 39, old_price: 49, category: "Landing Pages", thumbnail_url: "", rating: 4.7, sales_count: 215, slug: "ecommerce-landing" },
  { id: "4", title: "Crypto Tracker App Script", price: 89, category: "Scripts", thumbnail_url: "", rating: 4.9, sales_count: 54, slug: "crypto-tracker" },
  { id: "5", title: "Minimal UI Kit for Figma", price: 19, category: "UI Kits", thumbnail_url: "", rating: 4.5, sales_count: 320, slug: "minimal-ui-kit" },
  { id: "6", title: "SEO Analyzer Tool", price: 45, old_price: 60, category: "Web Tools", thumbnail_url: "", rating: 4.6, sales_count: 110, slug: "seo-analyzer" },
];

export default function BrowsePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold font-outfit mb-4">Browse Marketplace</h1>
            <p className="text-white/40">Explore thousands of premium digital assets built for the future.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar */}
            <FilterSidebar />

            {/* Product Grid */}
            <div className="flex-1">
              {/* Search & Sort Bar */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-white/20" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-12 pr-4 py-3 border border-white/5 rounded-2xl bg-white/5 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-indigo transition-all"
                    placeholder="Search for something specific..."
                  />
                </div>
                <div className="flex gap-4">
                  <select className="px-4 py-3 border border-white/5 rounded-2xl bg-white/5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-indigo outline-none cursor-pointer">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Top Rated</option>
                    <option>Most Popular</option>
                  </select>
                  <button className="md:hidden p-3 border border-white/5 rounded-2xl bg-white/5 text-white">
                    <SlidersHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {DUMMY_PRODUCTS.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination Placeholder */}
              <div className="mt-16 flex justify-center gap-2">
                {[1, 2, 3, "...", 10].map((page, i) => (
                  <button
                    key={i}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                      page === 1 
                        ? "bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20" 
                        : "glass hover:bg-white/10 text-white/60"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="glass border-t border-white/5 py-8 text-center text-white/20 text-xs">
        © 2026 Nexora Marketplace. All rights reserved.
      </footer>
    </div>
  );
}
