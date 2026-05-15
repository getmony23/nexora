import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase-server";

export default async function Home() {
  const supabase = await createSupabaseServerClient();
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  // Fallback static data if no products in DB yet
  const displayProducts = products && products.length > 0 ? products : [
    {
      id: "1",
      title: "Nexora Dashboard Kit",
      category: "Next.js Template",
      price: "49",
      thumbnail_url: "/template.png",
      author: "CreativeStudio",
      rating: "4.9",
      description: "A professional, high-performance dashboard template with full Supabase integration."
    },
    {
      id: "2",
      title: "Lumina Agency Landing",
      category: "React / Tailwind",
      price: "29",
      thumbnail_url: "/landing.png",
      author: "PixelPerfect",
      rating: "4.8",
      description: "Convert more visitors with this stunning agency landing page featuring smooth animations."
    },
    {
      id: "3",
      title: "Quantum UI System",
      category: "Figma Asset",
      price: "35",
      thumbnail_url: "/ui-kit.png",
      author: "DesignFlow",
      rating: "5.0",
      description: "A comprehensive UI kit for modern web applications with 500+ components."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Products Section */}
        <section id="featured-assets" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-brand-indigo font-bold text-sm uppercase tracking-widest mb-3">
                <span className="w-8 h-[2px] bg-brand-indigo"></span>
                Curated Collection
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-outfit text-white">
                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-neon">Digital Assets</span>
              </h2>
            </div>
            <Link href="/browse">
              <button className="px-8 py-3 rounded-xl glass border-white/10 text-white font-black text-sm hover:bg-white/5 transition-all flex items-center gap-2 group">
                Browse All Assets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-indigo to-brand-purple rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>
                <div className="relative glass-card rounded-[2.5rem] overflow-hidden border-white/5 flex flex-col h-full hover:border-white/20 transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={product.thumbnail_url || "/placeholder.png"} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-5 right-5 px-4 py-2 rounded-2xl glass-card border-white/10 backdrop-blur-xl text-white font-black text-sm shadow-2xl">
                      ${product.price}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-brand-indigo/10 text-[10px] font-black uppercase tracking-widest text-brand-indigo border border-brand-indigo/20">
                        {product.category || "General"}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-black mb-3 font-outfit text-white group-hover:text-brand-indigo transition-colors leading-tight">
                      {product.title}
                    </h3>
                    
                    <p className="text-sm text-white/40 mb-8 line-clamp-2 leading-relaxed font-medium">
                      {product.description}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-indigo/20 to-brand-purple/20 border border-white/10 flex items-center justify-center text-xs font-black text-white/80">
                          {(product.author || "User")[0]}
                        </div>
                        <span className="text-xs font-black text-white/60">{product.author || "Nexora Seller"}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-black text-white">{product.rating || "5.0"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="glass-card border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-indigo via-brand-purple to-brand-neon flex items-center justify-center shadow-lg shadow-brand-indigo/20">
                <span className="text-white font-black text-lg">N</span>
              </div>
              <span className="text-2xl font-black tracking-tighter font-outfit text-white">Nexora</span>
            </div>
            <p className="text-white/30 max-w-sm mb-8 leading-relaxed font-medium">
              The world&apos;s leading marketplace for premium digital assets. Empowering creators to build the future of the web.
            </p>
          </div>
          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs">Marketplace</h4>
            <ul className="space-y-4 text-white/40 text-sm font-bold">
              <li><Link href="/browse" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/browse" className="hover:text-white transition-colors">Landing Pages</Link></li>
              <li><Link href="/browse" className="hover:text-white transition-colors">Templates</Link></li>
              <li><Link href="/browse" className="hover:text-white transition-colors">Web Tools</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4 text-white/40 text-sm font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 text-center text-white/10 text-[10px] font-black uppercase tracking-[0.3em]">
          © 2026 Nexora Marketplace. All rights reserved. Built with passion for creators.
        </div>
      </footer>
    </div>
  );
}

