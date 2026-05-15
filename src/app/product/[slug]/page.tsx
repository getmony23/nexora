"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { 
  Download, 
  ExternalLink, 
  Star, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  ChevronLeft,
  ShoppingBag,
  Share2
} from "lucide-react";
import Link from "next/link";
import { createSupabaseClient } from "@/lib/supabase";

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createSupabaseClient();

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("slug", slug)
        .single();
      
      if (data) setProduct(data);
      setLoading(false);
    }
    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#02040a]">
        <div className="w-12 h-12 border-4 border-brand-indigo border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#02040a] text-white">
        <h1 className="text-4xl font-black mb-4">Product Not Found</h1>
        <Link href="/browse" className="text-brand-indigo hover:underline font-bold">Return to Marketplace</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto animate-in fade-in duration-1000">
      <Link href="/browse" className="flex items-center gap-2 text-white/40 hover:text-white mb-10 transition-colors font-bold text-sm uppercase tracking-widest">
        <ChevronLeft className="w-4 h-4" />
        Back to Gallery
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Preview & Details */}
        <div className="lg:col-span-8 space-y-12">
          <div className="glass-card rounded-[3rem] overflow-hidden neon-border-indigo shadow-2xl relative group">
            <img 
              src={product.thumbnail_url || "/placeholder.png"} 
              alt={product.title}
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-2xl glass-card bg-white/10 text-white font-black text-sm flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-brand-indigo/10 text-[11px] font-black uppercase tracking-widest text-brand-indigo border border-brand-indigo/20">
                {product.category}
              </span>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-black text-white">4.9 (12 reviews)</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black font-outfit text-white tracking-tight">
              {product.title}
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/50 leading-relaxed font-medium">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-white/5">
              {[
                "Regular License Included",
                "Full Source Code Access",
                "Future Updates for Free",
                "Community Support",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-white/60 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-neon" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Purchase Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-8">
            <div className="glass-card rounded-[3rem] p-10 neon-border-purple shadow-2xl space-y-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">Standard License</p>
                  <p className="text-5xl font-black text-white font-outfit">${product.price}</p>
                </div>
                <ShoppingBag className="w-10 h-10 text-white/10" />
              </div>

              <div className="space-y-4">
                <button className="w-full py-5 rounded-[2rem] bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-neon text-white font-black text-lg shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                  Purchase Now
                  <ShoppingBag className="w-6 h-6" />
                </button>
                
                {product.demo_url && (
                  <a 
                    href={product.demo_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-5 rounded-[2rem] glass bg-white/5 text-white font-black text-base flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/10"
                  >
                    Live Preview
                    <ExternalLink className="w-5 h-5 text-brand-neon" />
                  </a>
                )}
              </div>

              <div className="pt-8 space-y-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-indigo" />
                  <div>
                    <p className="text-xs font-black text-white">Secure Checkout</p>
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">SSL Encrypted Payment</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-purple" />
                  <div>
                    <p className="text-xs font-black text-white">Instant Delivery</p>
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Automatic ZIP Link</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Card */}
            <div className="glass-card rounded-[2.5rem] p-8 border-white/5 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-brand-indigo/20 flex items-center justify-center text-xl font-black text-brand-indigo">
                {(product.author || "User")[0]}
              </div>
              <div>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">Created By</p>
                <p className="text-lg font-black text-white">{product.author || "Nexora Elite Seller"}</p>
                <Link href="#" className="text-xs text-brand-neon hover:underline font-bold">View Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
