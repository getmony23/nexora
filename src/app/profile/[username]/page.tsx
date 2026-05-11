import Navbar from "@/components/Navbar";
import ProductCard from "@/components/products/ProductCard";
import { 
  UserCircle, 
  Award, 
  Star, 
  Users, 
  ShoppingBag, 
  Code, 
  Globe,
  Mail,
  CheckCircle2
} from "lucide-react";

export default function SellerProfilePage({ params }: { params: { username: string } }) {
  // Mock data for the seller
  const seller = {
    name: "CreativeStudio",
    username: params.username,
    bio: "We are a team of digital artists and developers passionate about creating high-quality SaaS templates and UI kits. With over 5 years of experience, we help developers launch faster.",
    joined_date: "January 2024",
    avatar_url: "",
    is_verified: true,
    stats: {
      total_sales: 1450,
      total_products: 12,
      average_rating: 4.9,
      followers: 320
    }
  };

  const sellerProducts = [
    { id: "1", title: "Nexora SaaS Dashboard", price: 59, old_price: 99, category: "Dashboards", thumbnail_url: "", rating: 4.9, sales_count: 124, slug: "nexora-dashboard" },
    { id: "2", title: "Modern Portfolio Template", price: 29, category: "Templates", thumbnail_url: "", rating: 4.8, sales_count: 86, slug: "modern-portfolio" },
    { id: "3", title: "E-commerce Landing Page", price: 39, old_price: 49, category: "Landing Pages", thumbnail_url: "", rating: 4.7, sales_count: 215, slug: "ecommerce-landing" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        {/* Cover Header */}
        <div className="h-64 bg-gradient-to-r from-brand-indigo/20 to-brand-purple/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column: Seller Info */}
            <div className="lg:w-80 space-y-8">
              <div className="glass p-8 rounded-[40px] border-white/5 shadow-2xl">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-brand-indigo/10 border-4 border-background flex items-center justify-center relative mb-6">
                    <UserCircle className="w-20 h-20 text-white/20" />
                    {seller.is_verified && (
                      <div className="absolute bottom-1 right-1 bg-brand-indigo p-1.5 rounded-full border-4 border-background">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <h1 className="text-2xl font-bold font-outfit mb-1">{seller.name}</h1>
                  <p className="text-brand-indigo font-medium text-sm mb-6">@{seller.username}</p>
                  
                  <div className="flex gap-3 mb-8">
                    <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                      <Globe className="w-4 h-4 text-white/40" />
                    </button>
                    <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                      <Code className="w-4 h-4 text-white/40" />
                    </button>
                    <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                      <Globe className="w-4 h-4 text-white/40" />
                    </button>
                  </div>

                  <button className="w-full py-3 rounded-2xl bg-brand-indigo text-white font-bold shadow-lg shadow-brand-indigo/20 hover:opacity-90 transition-all">
                    Follow
                  </button>
                  <button className="w-full py-3 rounded-2xl glass mt-3 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                    <Mail className="w-4 h-4" />
                    Contact
                  </button>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 space-y-4">
                  <h4 className="text-xs font-bold text-white/20 uppercase tracking-widest">About</h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {seller.bio}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <span>Joined {seller.joined_date}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="glass p-6 rounded-[30px] border-white/5 space-y-4">
                <h4 className="text-xs font-bold text-white/20 uppercase tracking-widest ml-1">Achievements</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center" title="Top Rated">
                    <Award className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 flex items-center justify-center" title="Trusted Seller">
                    <CheckCircle2 className="w-6 h-6 text-brand-indigo" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Stats & Products */}
            <div className="flex-1 space-y-12">
              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Sales", value: seller.stats.total_sales, icon: ShoppingBag },
                  { label: "Products", value: seller.stats.total_products, icon: Award },
                  { label: "Rating", value: seller.stats.average_rating, icon: Star },
                  { label: "Followers", value: seller.stats.followers, icon: Users },
                ].map((stat) => (
                  <div key={stat.label} className="glass p-6 rounded-3xl border-white/5 text-center">
                    <stat.icon className="w-5 h-5 text-brand-indigo mx-auto mb-3" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-[10px] text-white/20 uppercase tracking-widest font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Products Section */}
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold font-outfit">Seller Products</h2>
                  <div className="flex gap-4 text-sm text-white/40">
                    <button className="text-brand-indigo font-bold border-b border-brand-indigo">All Products</button>
                    <button className="hover:text-white transition-colors">Best Sellers</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {sellerProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
