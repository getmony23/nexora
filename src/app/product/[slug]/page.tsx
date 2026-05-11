import Navbar from "@/components/Navbar";
import { 
  Star, 
  ShoppingCart, 
  Download, 
  ShieldCheck, 
  Zap, 
  Globe, 
  MessageSquare,
  ArrowLeft,
  PlayCircle,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

import ReviewSection from "@/components/products/ReviewSection";

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log("Loading product:", slug);
  // In a real app, fetch data from Supabase using the slug
  const product = {
    title: "Nexora SaaS Dashboard Kit",
    price: 49,
    old_price: 79,
    category: "Dashboards",
    rating: 4.9,
    reviews_count: 24,
    sales_count: 124,
    description: "Nexora Dashboard is a comprehensive UI kit and dashboard template built with Next.js, TypeScript, and Tailwind CSS. It includes over 50+ pre-built components and 10+ ready-to-use pages to accelerate your SaaS development.",
    features: [
      "Next.js 15 & App Router",
      "TypeScript Support",
      "Tailwind CSS v4",
      "Fully Responsive Design",
      "Dark & Light Mode",
      "Supabase Integration Ready",
      "Clean & Documented Code"
    ],
    tags: ["SaaS", "Dashboard", "Admin", "UI Kit", "Next.js"]
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs & Back */}
          <Link href="/browse" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 text-sm group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Marketplace
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Gallery & Description */}
            <div className="lg:col-span-2 space-y-12">
              {/* Product Preview */}
              <div className="glass rounded-[40px] aspect-video relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 to-brand-purple/5"></div>
                  <PlayCircle className="w-20 h-20 text-white/20 group-hover:text-brand-indigo transition-all group-hover:scale-110" />
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-brand-indigo' : 'bg-white/20'}`}></div>
                  ))}
                </div>
              </div>

              {/* Title & Info */}
              <div>
                <h1 className="text-4xl font-bold font-outfit mb-4">{product.title}</h1>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">{product.rating}</span>
                    <span className="text-white/40 text-sm">({product.reviews_count} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <ShoppingCart className="w-4 h-4" />
                    <span>{product.sales_count} Sales</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <Globe className="w-4 h-4" />
                    <span>Last updated: May 2026</span>
                  </div>
                </div>
              </div>

              {/* Tabs / Content */}
              <div className="space-y-8">
                <div className="flex gap-8 border-b border-white/5 pb-4">
                  <button className="text-brand-indigo font-bold border-b-2 border-brand-indigo pb-4 -mb-4.5">Description</button>
                  <button className="text-white/40 hover:text-white transition-colors">Features</button>
                  <button className="text-white/40 hover:text-white transition-colors">Reviews</button>
                  <button className="text-white/40 hover:text-white transition-colors">Support</button>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-white/60 leading-relaxed text-lg">{product.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20 border-b border-white/5">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 glass p-4 rounded-2xl">
                      <Zap className="w-5 h-5 text-brand-neon flex-shrink-0 mt-1" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h2 className="text-3xl font-bold font-outfit mb-12">Customer Reviews</h2>
                  <ReviewSection />
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="glass p-8 rounded-[40px] border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/10 blur-[60px] -z-10"></div>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-white font-outfit">${product.price}</span>
                      <span className="text-white/20 line-through text-sm">${product.old_price}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-brand-neon/10 text-brand-neon text-[10px] font-bold uppercase">
                      Best Value
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-sm text-white/60">
                      <ShieldCheck className="w-4 h-4 text-brand-neon" />
                      <span>Commercial License Included</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/60">
                      <Download className="w-4 h-4 text-brand-neon" />
                      <span>Instant File Access</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/60">
                      <Zap className="w-4 h-4 text-brand-neon" />
                      <span>Lifetime Updates</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold text-lg shadow-xl shadow-brand-indigo/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                      Buy Now
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <Link href={`/preview/${params.slug}`} className="w-full py-4 rounded-2xl glass hover:bg-white/5 text-white font-bold flex items-center justify-center gap-2 transition-all">
                      Live Preview
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/5">
                    <div className="flex items-center justify-between text-xs text-white/40">
                      <span>Secure Payment with</span>
                      <div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
                        {/* Placeholder for Payment Logos */}
                        <span className="font-bold">PayPal</span>
                        <span className="font-bold text-brand-indigo">VCash</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seller Info Card */}
                <div className="glass p-6 rounded-[30px] border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-purple/20"></div>
                    <div>
                      <h4 className="font-bold text-sm">CreativeStudio</h4>
                      <p className="text-[10px] text-white/40">Level 5 Seller</p>
                    </div>
                  </div>
                  <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
