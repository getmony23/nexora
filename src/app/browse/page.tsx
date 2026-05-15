"use client";

import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  ChevronDown, 
  Star, 
  Download,
  ShoppingBag
} from "lucide-react";

const CATEGORIES = ["All", "Landing Page", "Dashboard", "App Template", "UI Kit", "Icon Set"];

export default function BrowsePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-1000">
      {/* Header & Search */}
      <div className="text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-black font-outfit text-white tracking-tight">
          Discover the Future of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-neon">Digital Assets</span>
        </h1>
        
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-white/20 group-focus-within:text-brand-indigo transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search for templates, dashboards, icons..."
            className="w-full pl-16 pr-24 py-6 rounded-3xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all text-white font-medium text-lg shadow-2xl"
          />
          <button className="absolute right-3 top-3 bottom-3 px-6 rounded-2xl bg-brand-indigo text-white font-black text-sm flex items-center gap-2 hover:opacity-90 transition-all">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all border ${
              activeCategory === cat 
                ? 'bg-brand-indigo border-brand-indigo text-white shadow-lg shadow-brand-indigo/20' 
                : 'bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="glass-card rounded-[2.5rem] overflow-hidden group hover:border-white/20 transition-all neon-border-indigo glass-hover">
            <div className="aspect-video bg-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] to-transparent opacity-60"></div>
              {/* Mock Image */}
              <div className="w-full h-full bg-gradient-to-br from-brand-indigo/10 to-brand-purple/10 flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-white/5 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl glass bg-black/40 text-brand-neon text-xs font-black">
                $49.00
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-brand-purple uppercase tracking-[0.3em]">Dashboard</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold text-white">4.9</span>
                </div>
              </div>
              
              <h3 className="text-xl font-black text-white group-hover:text-brand-indigo transition-colors">Quantum UI Dashboard Kit</h3>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10"></div>
                  <span className="text-xs font-bold text-white/40">by TechLeap</span>
                </div>
                <button className="p-3 rounded-xl glass bg-white/5 text-white/40 hover:text-brand-neon hover:bg-brand-neon/10 transition-all">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-10">
        <button className="px-10 py-4 rounded-2xl glass bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all flex items-center gap-2">
          Load More Assets
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
