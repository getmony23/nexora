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
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-indigo/10 blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-purple/10 blur-[150px] animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-brand-neon/5 blur-[100px]"></div>
        
        {/* Floating geometric shape */}
        <div className="absolute top-20 right-[-5%] w-[400px] h-[400px] animate-float opacity-30">
          <img src="/geometric-shape.png" alt="" className="w-full h-full object-contain" />
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
                  className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center glass bg-white/5 rounded-xl px-3 py-1.5 border-white/5">
              <Search className="w-4 h-4 text-white/40 mr-2" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-xs w-40 placeholder:text-white/20"
              />
            </div>
            
            <button className="relative p-2 text-white/40 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-neon rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold">{userName}</p>
                <p className="text-[10px] text-white/40">Pro Account</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-indigo to-brand-purple p-[1px]">
                <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center overflow-hidden">
                  <UserIcon className="w-5 h-5 text-white/60" />
                </div>
              </div>
            </div>

            <form action={signOut}>
              <button type="submit" className="p-2 text-red-400/60 hover:text-red-400 transition-colors">
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

