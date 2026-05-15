import React from "react";
import { 
  TrendingUp, 
  ArrowUpRight,
  MoreHorizontal,
  Plus,
  Play,
  Cpu,
  Rocket,
  Layout
} from "lucide-react";

import { createSupabaseServerClient } from "@/lib/supabase-server";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || "User";

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-white/40 text-sm mb-2">Welcome back, {userName}! /</p>
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-white">
            Dashboard Overview
          </h1>
          <p className="text-white/40 mt-2 text-sm">Premium high-tech SaaS website template</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 rounded-xl bg-brand-indigo text-white font-bold text-sm shadow-lg shadow-brand-indigo/20 flex items-center gap-2 hover:scale-105 transition-transform">
            <Layout className="w-4 h-4" />
            Dashboard
          </button>
          <button className="px-6 py-2.5 rounded-xl glass bg-white/5 text-white/60 font-bold text-sm flex items-center gap-2 hover:text-white transition-colors">
            <Plus className="w-4 h-4" />
            Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Overview Chart Mockup */}
        <div className="lg:col-span-2 glass-card rounded-[2.5rem] p-8 relative overflow-hidden group neon-border-indigo">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-xl font-bold font-outfit text-white">Performance Overview</h3>
              <p className="text-xs text-white/20">SF Pro Display / Sep 2024</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-xl glass bg-white/5 border-white/10 text-[10px] font-bold text-white/40 flex items-center gap-2">
                Sep 2024
                <TrendingUp className="w-3 h-3 text-brand-neon" />
              </div>
              <button className="p-2 text-white/20 hover:text-white transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
            </div>
          </div>

          {/* Chart UI Mockup */}
          <div className="h-[280px] w-full relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-5">
              {[1, 2, 3, 4, 5].map((line) => (
                <div key={line} className="w-full h-[1px] bg-white"></div>
              ))}
            </div>
            
            <div className="absolute inset-0 flex items-end justify-between px-4 pb-8">
              {[45, 65, 50, 90, 60, 95, 75].map((height, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group/bar">
                  <div className="w-2.5 rounded-full bg-white/5 relative overflow-hidden h-[200px]">
                    <div 
                      className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-indigo via-brand-purple to-brand-neon rounded-full transition-all duration-1000 delay-300 neon-glow-cyan"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(34,211,238,1)] opacity-100 scale-110"></div>
                    </div>
                  </div>
                  <span className="text-[10px] text-white/30 font-bold tracking-tighter">Sep {3 + i*4}</span>
                </div>
              ))}
            </div>
            
            {/* Growth Badge */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-2xl bg-brand-indigo/20 border border-brand-indigo/40 backdrop-blur-2xl flex items-center gap-3 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
              <span className="text-brand-neon font-black text-base">+28.5%</span>
              <span className="text-[10px] text-white/60 uppercase tracking-[0.2em] font-black">Growth</span>
            </div>
          </div>
        </div>

        {/* Task Distribution (Circular Progress) Mockup */}
        <div className="lg:col-span-1 glass-card rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center neon-border-purple">
          <div className="w-full flex justify-between mb-10">
            <h3 className="text-xl font-bold font-outfit text-left text-white">Task Distribution</h3>
            <button className="text-white/20 hover:text-white transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
          </div>
          
          <div className="relative w-56 h-56 mb-10">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="112" cy="112" r="95"
                stroke="currentColor"
                strokeWidth="14"
                fill="transparent"
                className="text-white/5"
              />
              <circle
                cx="112" cy="112" r="95"
                stroke="url(#neonGradient)"
                strokeWidth="14"
                strokeDasharray={2 * Math.PI * 95}
                strokeDashoffset={2 * Math.PI * 95 * 0.25}
                strokeLinecap="round"
                fill="transparent"
                className="neon-glow-cyan"
              />
              <defs>
                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="50%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black font-outfit text-white">75%</span>
              <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black mt-2">Complete</span>
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
                  <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_8px_currentColor]`}></div>
                  <span className="text-sm font-black text-white">{item.label}</span>
                </div>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Progress Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold font-outfit">Project Progress</h3>
          <button className="text-white/20 hover:text-white"><MoreHorizontal className="w-5 h-5" /></button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI Implementation", progress: 84, icon: Cpu, color: "from-brand-indigo via-brand-purple to-brand-neon" },
            { title: "Product Launch", progress: 62, icon: Rocket, color: "from-brand-purple to-brand-neon" },
            { title: "Quantum System", progress: 75, icon: Play, color: "from-brand-indigo to-brand-neon" },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-[2rem] p-8 hover:border-white/20 transition-all group neon-border-indigo glass-hover">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform neon-glow-purple">
                    <item.icon className="w-6 h-6 text-white/80" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-white">{item.title}</h4>
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Progress cards</p>
                  </div>
                </div>
                <span className="text-2xl font-black font-outfit text-white">{item.progress}%</span>
              </div>

              <div className="w-full h-2 bg-white/5 rounded-full mb-8 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full neon-glow-cyan`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <button className="px-5 py-2.5 rounded-xl bg-brand-indigo/20 text-brand-neon text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-indigo hover:text-white transition-all border border-brand-indigo/30">
                  View details
                </button>
                <button className="p-3 rounded-xl glass bg-white/5 text-white/40 group-hover:text-white group-hover:scale-110 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

