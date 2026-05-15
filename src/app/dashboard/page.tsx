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
        <div className="lg:col-span-2 glass-card rounded-[2.5rem] p-8 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold font-outfit">Performance Overview</h3>
              <p className="text-xs text-white/20">SF Pro Display / Sep 2024</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-lg glass bg-white/5 border-white/5 text-[10px] font-bold text-white/40 flex items-center gap-2">
                Sep 2024
                <TrendingUp className="w-3 h-3 text-brand-indigo" />
              </div>
              <button className="p-2 text-white/20 hover:text-white"><MoreHorizontal className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Chart UI Mockup */}
          <div className="h-[250px] w-full relative">
            <div className="absolute inset-0 flex items-end justify-between px-4 pb-8">
              {[40, 60, 45, 80, 55, 90, 70].map((height, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group/bar">
                  <div className="w-1.5 rounded-full bg-white/5 relative overflow-hidden h-[180px]">
                    <div 
                      className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-indigo to-brand-purple rounded-full transition-all duration-1000 delay-300"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  <span className="text-[10px] text-white/20 font-bold">Sep {3 + i*4}</span>
                </div>
              ))}
            </div>
            
            {/* Growth Badge */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 px-4 py-2 rounded-2xl bg-brand-indigo/10 border border-brand-indigo/20 backdrop-blur-xl flex items-center gap-2">
              <span className="text-brand-indigo font-bold text-sm">+28.5%</span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Growth</span>
            </div>
          </div>
        </div>

        {/* Task Distribution (Circular Progress) Mockup */}
        <div className="lg:col-span-1 glass-card rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center">
          <div className="w-full flex justify-between mb-8">
            <h3 className="text-lg font-bold font-outfit text-left">Task Distribution</h3>
            <button className="text-white/20 hover:text-white"><MoreHorizontal className="w-4 h-4" /></button>
          </div>
          
          <div className="relative w-48 h-48 mb-8">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96" cy="96" r="80"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-white/5"
              />
              <circle
                cx="96" cy="96" r="80"
                stroke="url(#neonGradient)"
                strokeWidth="12"
                strokeDasharray={2 * Math.PI * 80}
                strokeDashoffset={2 * Math.PI * 80 * 0.25}
                strokeLinecap="round"
                fill="transparent"
              />
              <defs>
                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold font-outfit">75%</span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Complete</span>
            </div>
          </div>

          <div className="w-full grid grid-cols-3 gap-2">
            {[
              { label: "75%", desc: "Complete", color: "bg-brand-indigo" },
              { label: "15%", desc: "Pending", color: "bg-brand-purple" },
              { label: "10%", desc: "Due", color: "bg-red-400" },
            ].map((item) => (
              <div key={item.desc} className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.color}`}></div>
                  <span className="text-xs font-bold">{item.label}</span>
                </div>
                <p className="text-[10px] text-white/20 font-medium">{item.desc}</p>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "AI Implementation", progress: 84, icon: Cpu, color: "from-brand-indigo to-brand-purple" },
            { title: "Product Launch", progress: 62, icon: Rocket, color: "from-brand-purple to-brand-neon" },
            { title: "Quantum System", progress: 75, icon: Play, color: "from-brand-indigo to-brand-neon" },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-3xl p-6 hover:border-white/20 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{item.title}</h4>
                    <p className="text-[10px] text-white/20 font-medium">Progress cards</p>
                  </div>
                </div>
                <span className="text-lg font-bold font-outfit">{item.progress}%</span>
              </div>

              <div className="w-full h-1.5 bg-white/5 rounded-full mb-6 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <button className="px-4 py-2 rounded-xl bg-brand-indigo/10 text-brand-indigo text-[10px] font-bold uppercase tracking-widest hover:bg-brand-indigo hover:text-white transition-all">
                  View details
                </button>
                <button className="p-2 rounded-lg glass bg-white/5 text-white/20 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

