import React from "react";
import { 
  Users, 
  ShoppingBag, 
  DollarSign, 
  Activity,
  AlertCircle,
  CheckCircle2,
  Clock
} from "lucide-react";

export default function AdminOverviewPage() {
  const adminStats = [
    { label: "Marketplace Volume", value: "$142,500", icon: DollarSign, color: "text-brand-indigo" },
    { label: "Active Users", value: "2,840", icon: Users, color: "text-brand-purple" },
    { label: "Live Products", value: "1,245", icon: ShoppingBag, color: "text-brand-neon" },
    { label: "Conversion Rate", value: "3.24%", icon: Activity, color: "text-red-400" },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-outfit mb-2">System Overview</h1>
          <p className="text-white/40">Global marketplace performance and health monitoring.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all">
            Generate Report
          </button>
        </div>
      </div>

      {/* Admin Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map((stat) => (
          <div key={stat.label} className="bg-white/[0.02] border border-white/5 p-8 rounded-[30px] hover:border-white/10 transition-all">
            <div className={`p-3 rounded-2xl bg-white/5 w-fit mb-6 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-xs text-white/20 uppercase tracking-widest font-bold">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Pending Approvals Section */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold font-outfit flex items-center gap-3">
              <Clock className="w-5 h-5 text-yellow-500" />
              Pending Approvals
            </h3>
            <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px] font-bold">12 ACTION REQUIRED</span>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10"></div>
                  <div>
                    <h4 className="font-bold text-sm">Nexora Pro Kit v2</h4>
                    <p className="text-[10px] text-white/40">by <span className="text-brand-indigo">CreativeStudio</span> • 2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500 transition-all hover:text-white">
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 transition-all hover:text-white">
                    <AlertCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-sm text-white/40 hover:text-white font-medium transition-colors">
            View All Pending Products
          </button>
        </div>

        {/* Global Sales Activity */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8">
          <h3 className="text-xl font-bold font-outfit mb-8">System Health</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/40 uppercase font-bold">Database Load</span>
                <span className="text-brand-neon">12% - Optimal</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-brand-neon w-[12%]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/40 uppercase font-bold">Payout Queue</span>
                <span className="text-yellow-500">$4,200 Pending</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 w-[45%]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/40 uppercase font-bold">Spam Detection Rate</span>
                <span className="text-brand-purple">99.9% Protection</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-brand-purple w-[99%]"></div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-3xl bg-red-500/5 border border-red-500/10 flex items-center gap-4">
            <div className="p-3 rounded-full bg-red-500/20 text-red-500">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-red-500">Security Notice</h4>
              <p className="text-[10px] text-red-500/60 mt-1">
                Detected 12 unauthorized login attempts in the last 15 minutes. All IPs blocked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ShieldAlert } from "lucide-react";
