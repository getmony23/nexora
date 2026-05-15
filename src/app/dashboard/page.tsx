import { 
  TrendingUp, 
  ArrowUpRight,
  MoreHorizontal,
  Plus,
  Play,
  Cpu,
  Rocket,
  Layout,
  Repeat
} from "lucide-react";

import { createSupabaseServerClient } from "@/lib/supabase-server";
import Particles from "@/components/dashboard/Particles";
import Link from "next/link";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || "User";

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 relative">
        <div className="z-10">
          <p className="text-white/40 text-sm mb-2 font-medium tracking-wide">Welcome back, {userName}! /</p>
          <h1 className="text-5xl md:text-6xl font-black font-outfit text-white tracking-tight leading-none">
            Dashboard Overview
          </h1>
          <p className="text-white/30 mt-4 text-base font-medium max-w-md">Premium high-tech SaaS website template with integrated analytics.</p>
          
          <div className="flex items-center gap-4 mt-8">
            <button className="px-8 py-3 rounded-xl bg-brand-indigo text-white font-black text-sm shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center gap-2 hover:scale-105 transition-all">
              <Layout className="w-4 h-4" />
              Dashboard
            </button>
            <button className="px-8 py-3 rounded-xl glass bg-white/5 text-white/40 font-black text-sm flex items-center gap-2 hover:text-white hover:bg-white/10 transition-all border border-white/5">
              <Repeat className="w-4 h-4" />
              Forecast
            </button>
          </div>
        </div>

        {/* Animated Particles Container */}
        <div className="absolute top-[-100px] right-[-50px] md:relative md:top-0 md:right-0 w-full md:w-[450px] h-[300px] pointer-events-none overflow-visible">
          <div className="w-full h-full opacity-80">
            <Particles />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Overview Chart (Curved Line Chart) */}
        <div className="lg:col-span-2 glass-card rounded-[3rem] p-10 relative overflow-hidden group neon-border-indigo">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-2xl font-black font-outfit text-white tracking-tight">Performance Overview</h3>
              <p className="text-xs text-white/20 font-bold uppercase tracking-widest mt-1">SF Pro Display / Sep 2024</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-xl glass bg-white/5 border-white/10 text-[10px] font-black text-white/60 flex items-center gap-2">
                Sep 2024
                <TrendingUp className="w-3 h-3 text-brand-neon" />
              </div>
              <button className="p-2 text-white/20 hover:text-white transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
            </div>
          </div>

          {/* SVG Line Chart UI Mockup */}
          <div className="h-[300px] w-full relative">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200">
              {/* Grid Lines */}
              <g className="opacity-5">
                <line x1="0" y1="0" x2="800" y2="0" stroke="white" strokeWidth="1" />
                <line x1="0" y1="50" x2="800" y2="50" stroke="white" strokeWidth="1" />
                <line x1="0" y1="100" x2="800" y2="100" stroke="white" strokeWidth="1" />
                <line x1="0" y1="150" x2="800" y2="150" stroke="white" strokeWidth="1" />
              </g>

              {/* Cyan Line */}
              <path 
                d="M0,150 C100,160 200,80 300,100 C400,120 500,40 600,60 C700,80 800,20 800,20" 
                fill="none" 
                stroke="#22d3ee" 
                strokeWidth="4" 
                className="neon-glow-cyan"
              />
              {/* Purple Line */}
              <path 
                d="M0,180 C100,190 200,140 300,150 C400,160 500,100 600,120 C700,140 800,80 800,80" 
                fill="none" 
                stroke="#a855f7" 
                strokeWidth="4" 
                className="neon-glow-purple opacity-60"
              />
              
              {/* Data Points */}
              <circle cx="300" cy="100" r="6" fill="#22d3ee" className="animate-pulse shadow-[0_0_10px_#22d3ee]" />
              <circle cx="600" cy="60" r="6" fill="#22d3ee" className="animate-pulse shadow-[0_0_10px_#22d3ee]" />
              <circle cx="300" cy="150" r="6" fill="#a855f7" className="animate-pulse shadow-[0_0_10px_#a855f7]" />
            </svg>
            
            {/* X-Axis Labels */}
            <div className="flex justify-between mt-6 px-2">
              {['Sep 2024', 'Sep 3', 'Sep 8', 'Sep 9', 'Sep 14', 'Sep 21', 'Sep 2024'].map((label, i) => (
                <span key={i} className="text-[10px] text-white/20 font-black tracking-tighter">{label}</span>
              ))}
            </div>
            
            {/* Growth Badge */}
            <div className="absolute top-6 left-[40%] px-5 py-2.5 rounded-2xl bg-brand-indigo/30 border border-brand-indigo/50 backdrop-blur-3xl flex items-center gap-3 shadow-[0_0_40px_rgba(99,102,241,0.4)]">
              <span className="text-brand-neon font-black text-lg">+28.5%</span>
              <span className="text-[10px] text-white/60 uppercase tracking-[0.3em] font-black">Growth</span>
            </div>
          </div>
        </div>

        {/* Task Distribution (Circular Progress) */}
        <div className="lg:col-span-1 glass-card rounded-[3rem] p-10 flex flex-col items-center justify-center text-center neon-border-purple">
          <div className="w-full flex justify-between mb-12">
            <h3 className="text-2xl font-black font-outfit text-left text-white">Task Distribution</h3>
            <button className="text-white/20 hover:text-white transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
          </div>
          
          <div className="relative w-64 h-64 mb-12">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="128" cy="128" r="110"
                stroke="currentColor"
                strokeWidth="16"
                fill="transparent"
                className="text-white/5"
              />
              <circle
                cx="128" cy="128" r="110"
                stroke="url(#neonGradient)"
                strokeWidth="16"
                strokeDasharray={2 * Math.PI * 110}
                strokeDashoffset={2 * Math.PI * 110 * 0.25}
                strokeLinecap="round"
                fill="transparent"
                className="neon-glow-cyan animate-pulse-neon"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-6xl font-black font-outfit text-white">75%</span>
              <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-black mt-3">Complete</span>
            </div>
          </div>

          <div className="w-full grid grid-cols-3 gap-4">
            {[
              { label: "75%", desc: "Complete", color: "bg-brand-neon" },
              { label: "15%", desc: "Pending", color: "bg-brand-purple" },
              { label: "10%", desc: "Due", color: "bg-red-400" },
            ].map((item) => (
              <div key={item.desc} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${item.color} shadow-[0_0_12px_currentColor]`}></div>
                  <span className="text-base font-black text-white">{item.label}</span>
                </div>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Progress Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black font-outfit tracking-tight">Your Projects</h2>
          <Link href="/dashboard/products/add" className="text-brand-neon hover:underline text-sm font-bold">Add New</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products && products.length > 0 ? products.map((item: any) => (
            <div key={item.id} className="glass-card rounded-[2.5rem] p-10 hover:border-white/20 transition-all group neon-border-indigo glass-hover">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform neon-glow-purple border border-white/5 overflow-hidden">
                    {item.thumbnail_url ? (
                      <img src={item.thumbnail_url} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <Cpu className="w-7 h-7 text-white/80" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white line-clamp-1">{item.title}</h4>
                    <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mt-1">{item.category}</p>
                  </div>
                </div>
                <span className="text-3xl font-black font-outfit text-white">${item.price}</span>
              </div>

              <div className="w-full h-2.5 bg-white/5 rounded-full mb-10 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-brand-indigo to-brand-neon rounded-full neon-glow-cyan"
                  style={{ width: `100%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <button className="px-6 py-3 rounded-xl bg-brand-indigo/30 text-brand-neon text-[11px] font-black uppercase tracking-[0.3em] hover:bg-brand-indigo hover:text-white transition-all border border-brand-indigo/40">
                  Manage Product
                </button>
                <Link href={`/product/${item.slug}`} className="p-3.5 rounded-xl glass bg-white/5 text-white/40 group-hover:text-white group-hover:scale-110 transition-all">
                  <ArrowUpRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-20 text-center glass-card rounded-[3rem] border-dashed border-2 border-white/5">
              <p className="text-white/20 font-black uppercase tracking-[0.3em]">No projects found</p>
              <Link href="/dashboard/products/add">
                <button className="mt-6 px-8 py-3 rounded-xl bg-brand-indigo text-white font-black text-sm">Upload Your First Project</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


