import React from "react";
import { 
  TrendingUp, 
  Users, 
  CreditCard, 
  Package,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { label: "Total Revenue", value: "$12,450.00", icon: CreditCard, trend: "+12.5%", isPositive: true },
    { label: "Total Orders", value: "458", icon: Package, trend: "+5.2%", isPositive: true },
    { label: "Total Views", value: "15.2k", icon: TrendingUp, trend: "-2.1%", isPositive: false },
    { label: "Active Customers", value: "320", icon: Users, trend: "+8.4%", isPositive: true },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold font-outfit mb-2">Welcome back, CreativeStudio</h1>
        <p className="text-white/40">Here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="glass p-6 rounded-3xl border-white/5 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-brand-indigo/20 group-hover:text-brand-indigo transition-all">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {stat.trend}
                {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Sales Table */}
        <div className="lg:col-span-2 glass rounded-3xl border-white/5 overflow-hidden">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h3 className="font-bold font-outfit">Recent Sales</h3>
            <button className="text-xs text-brand-indigo hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] text-white/20 uppercase tracking-widest border-b border-white/5">
                  <th className="px-6 py-4 font-bold">Product</th>
                  <th className="px-6 py-4 font-bold">Customer</th>
                  <th className="px-6 py-4 font-bold">Date</th>
                  <th className="px-6 py-4 font-bold text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5"></div>
                        <span className="font-medium">Nexora Kit v2</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white/60">alex@example.com</td>
                    <td className="px-6 py-4 text-white/40 text-xs">2 hours ago</td>
                    <td className="px-6 py-4 text-right font-bold text-brand-neon">$49.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="lg:col-span-1 glass rounded-3xl border-white/5 p-6">
          <h3 className="font-bold font-outfit mb-6">Top Products</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center font-bold text-white/20">{i}</div>
                  <div>
                    <h4 className="text-sm font-bold">Saas App Script</h4>
                    <p className="text-[10px] text-white/40">124 sales</p>
                  </div>
                </div>
                <div className="text-sm font-bold">$3,450</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
