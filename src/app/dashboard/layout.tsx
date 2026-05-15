import React from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  PackagePlus, 
  ShoppingBag, 
  BarChart3, 
  Settings, 
  LogOut,
  Bell,
  Search,
  User as UserIcon
} from "lucide-react";

import { createSupabaseServerClient } from "@/lib/supabase-server";
import { signOut } from "@/actions/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  const userName = user?.user_metadata?.full_name || 
                   user?.user_metadata?.name || 
                   user?.email?.split('@')[0] || 
                   "User";

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: PackagePlus, label: "Projects", href: "/dashboard/products/add" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-white relative overflow-hidden bg-grid">
      {/* Futuristic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-indigo/20 blur-[120px] animate-pulse-neon"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-purple/20 blur-[120px] animate-pulse-neon"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-brand-neon/10 blur-[100px] animate-pulse-neon"></div>
        <div className="absolute middle-0 left-1/2 -translate-x-1/2 w-[40%] h-[40%] rounded-full bg-brand-indigo/5 blur-[150px]"></div>
        
        {/* Floating geometric shape */}
        <div className="absolute top-20 right-[-5%] w-[500px] h-[500px] animate-float opacity-40">
          <img src="/geometric-shape.png" alt="" className="w-full h-full object-contain neon-glow-cyan" />
        </div>
      </div>

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 h-20 z-50 px-8">
        <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between glass-card mt-4 rounded-2xl px-6 border-white/5">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-purple flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight font-outfit">Nexora</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all relative group ${
                    item.label === "Dashboard" ? "text-white" : "text-white/40 hover:text-white"
                  }`}
                >
                  {item.label}
                  {item.label === "Dashboard" && (
                    <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-purple rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center glass bg-white/5 rounded-xl px-4 py-2 border-white/10 group focus-within:border-brand-indigo/50 transition-all">
              <Search className="w-4 h-4 text-white/20 mr-3 group-focus-within:text-brand-indigo transition-colors" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-xs w-48 placeholder:text-white/20 text-white font-medium"
              />
            </div>
            
            <button className="relative p-2.5 rounded-xl glass bg-white/5 border-white/10 text-white/40 hover:text-white transition-all hover:scale-110">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-neon rounded-full border-2 border-[#02040a]"></span>
            </button>

            <div className="flex items-center gap-4 pl-6 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-white">{userName}</p>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Pro Account</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-indigo via-brand-purple to-brand-neon p-[1.5px] shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <div className="w-full h-full rounded-[0.9rem] bg-[#02040a] flex items-center justify-center overflow-hidden">
                  <UserIcon className="w-6 h-6 text-white/60" />
                </div>
              </div>
              <MoreHorizontal className="w-4 h-4 text-white/20 cursor-pointer hover:text-white transition-colors" />
            </div>

            <form action={signOut}>
              <button type="submit" className="p-2.5 rounded-xl glass bg-white/5 border-white/10 text-red-400/40 hover:text-red-400 transition-all hover:scale-110">
                <LogOut className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-32 pb-12 px-8 max-w-[1400px] mx-auto">
        {children}
      </main>
    </div>
  );
}

