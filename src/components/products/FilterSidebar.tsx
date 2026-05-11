"use client";

import React from "react";
import { Filter, ChevronDown, Check } from "lucide-react";

export default function FilterSidebar() {
  const categories = [
    "Ready Websites",
    "Landing Pages",
    "Dashboards",
    "Templates",
    "Scripts",
    "HTML5 Games",
    "UI Kits",
    "Web Tools"
  ];

  return (
    <aside className="w-full md:w-64 space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-5 h-5 text-brand-indigo" />
          <h2 className="text-xl font-bold font-outfit">Filters</h2>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest">Categories</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-5 h-5 rounded-md border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-brand-indigo transition-colors">
                  {/* <Check className="w-3 h-3 text-brand-indigo" /> */}
                </div>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="h-[1px] bg-white/5 my-8"></div>

        {/* Price Range */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest">Price Range</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] text-white/20 ml-1">Min</label>
              <input type="number" placeholder="$0" className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-brand-indigo" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-white/20 ml-1">Max</label>
              <input type="number" placeholder="$500" className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-brand-indigo" />
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-white/5 my-8"></div>

        {/* Rating */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest">Rating</h3>
          <div className="space-y-2">
            {[5, 4, 3].map((star) => (
              <label key={star} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-5 h-5 rounded-md border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-brand-indigo transition-colors"></div>
                <span className="text-sm text-white/60 flex items-center gap-1">
                  {star} Stars & Up
                </span>
              </label>
            ))}
          </div>
        </div>
        
        <button className="w-full mt-8 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all active:scale-95">
          Reset Filters
        </button>
      </div>
    </aside>
  );
}
