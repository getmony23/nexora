import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ArrowRight } from "lucide-react";

export default function Home() {
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
              <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white">
                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Digital Assets</span>
              </h2>
            </div>
            <button className="px-6 py-3 rounded-xl glass border-white/10 text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2 group">
              Browse All Assets
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Nexora Dashboard Kit",
                category: "Next.js Template",
                price: "49",
                image: "/template.png",
                author: "CreativeStudio",
                rating: "4.9",
                desc: "A professional, high-performance dashboard template with full Supabase integration and dark mode."
              },
              {
                title: "Lumina Agency Landing",
                category: "React / Tailwind",
                price: "29",
                image: "/landing.png",
                author: "PixelPerfect",
                rating: "4.8",
                desc: "Convert more visitors with this stunning agency landing page featuring smooth scroll and animations."
              },
              {
                title: "Quantum UI System",
                category: "Figma Asset",
                price: "35",
                image: "/ui-kit.png",
                author: "DesignFlow",
                rating: "5.0",
                desc: "A comprehensive UI kit for modern web applications with 500+ components and 50+ page layouts."
              }
            ].map((product, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-indigo to-brand-purple rounded-[2rem] opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                <div className="relative glass rounded-3xl overflow-hidden border-white/5 flex flex-col h-full hover:border-white/20 transition-colors duration-300">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl glass border-white/10 backdrop-blur-md text-white font-bold">
                      ${product.price}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-brand-indigo/10 text-[10px] font-bold uppercase tracking-wider text-brand-indigo border border-brand-indigo/20">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 font-outfit text-white group-hover:text-brand-indigo transition-colors">
                      {product.title}
                    </h3>
                    
                    <p className="text-sm text-white/40 mb-8 line-clamp-2 leading-relaxed">
                      {product.desc}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold">
                          {product.author[0]}
                        </div>
                        <span className="text-xs font-medium text-white/60">{product.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg">
                        <span className="text-yellow-500 text-xs">★</span>
                        <span className="text-xs font-bold text-white">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="glass border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-purple flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight font-outfit">Nexora</span>
            </div>
            <p className="text-white/40 max-w-sm mb-6">
              The world&apos;s leading marketplace for premium digital assets. Empowering creators to build the future of the web.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Marketplace</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Tools</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 text-center text-white/20 text-xs">
          © 2026 Nexora Marketplace. All rights reserved. Built with passion for creators.
        </div>
      </footer>
    </div>
  );
}
