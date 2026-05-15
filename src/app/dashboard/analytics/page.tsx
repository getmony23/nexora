"use client";

import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  ArrowUpRight,
  ChevronDown
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black font-outfit text-white">Analytics</h1>
          <p className="text-white/40 mt-1">Detailed performance metrics for your store.</p>
        </div>
        <button className="px-6 py-2.5 rounded-xl glass bg-white/5 text-white/60 font-bold text-sm flex items-center gap-2 hover:text-white transition-all">
          Last 30 Days
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Earnings", value: "$42,500.00", icon: DollarSign, trend: "+12.5%", color: "text-brand-neon" },
          { label: "Conversion Rate", value: "3.2%", icon: TrendingUp, trend: "+0.8%", color: "text-brand-purple" },
          { label: "Store Visits", value: "128,430", icon: Users, trend: "+24.2%", color: "text-brand-indigo" },
          { label: "Orders", value: "1,420", icon: BarChart3, trend: "+5.1%", color: "text-brand-neon" },
        ].map((stat) => (
          <div key={stat.label} className="glass-card rounded-3xl p-6 neon-border-indigo">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <span className="text-green-400 text-xs font-bold flex items-center gap-1">
                {stat.trend}
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
            <p className="text-2xl font-black text-white">{stat.value}</p>
            <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-[3rem] p-10 neon-border-purple h-[400px] flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="w-12 h-12 text-white/10 mx-auto mb-4" />
          <p className="text-white/20 font-bold uppercase tracking-[0.3em]">Detailed charts coming soon</p>
        </div>
      </div>
    </div>
  );
}
