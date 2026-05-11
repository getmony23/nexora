"use client";

import React from "react";
import Link from "next/link";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: number;
    old_price?: number;
    category: string;
    thumbnail_url: string;
    rating: number;
    sales_count: number;
    slug: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-3xl overflow-hidden group glass-hover h-full flex flex-col"
    >
      <Link href={`/product/${product.slug}`} className="block relative aspect-[4/3] overflow-hidden">
        {/* Placeholder for Image - in production use real thumbnail_url */}
        <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="text-white/10 font-bold text-2xl group-hover:scale-110 transition-transform">Preview</span>
        </div>
        
        {/* Hover Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <button className="p-2 rounded-full glass hover:bg-brand-indigo text-white transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-full glass hover:bg-brand-indigo text-white transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 rounded-full bg-brand-indigo/10 text-[10px] font-bold text-brand-indigo uppercase tracking-wider">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-bold">{product.rating}</span>
          </div>
        </div>

        <Link href={`/product/${product.slug}`}>
          <h3 className="text-lg font-bold mb-2 font-outfit line-clamp-1 group-hover:text-brand-indigo transition-colors">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-xs text-white/40 mb-6 line-clamp-2">
          Premium high-quality asset built with the latest technologies. Perfect for your next commercial project.
        </p>

        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-brand-neon">${product.price}</span>
            {product.old_price && (
              <span className="text-xs text-white/20 line-through">${product.old_price}</span>
            )}
          </div>
          <div className="flex items-center gap-4 text-white/40">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span className="text-[10px]">{product.sales_count * 12}</span>
            </div>
            <div className="flex items-center gap-1">
              <ShoppingCart className="w-3 h-3" />
              <span className="text-[10px]">{product.sales_count}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
