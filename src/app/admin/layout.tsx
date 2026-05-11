import React from "react";
import Link from "next/link";
import { 
  ShieldAlert,
  LayoutDashboard, 
  PackageSearch, 
  Users, 
  Wallet,
  MessageSquareWarning,
  Settings,
  LogOut,
  Bell,
  Search
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adminMenuItems = [
    { icon: LayoutDashboard, label: "Admin Overview", href: "/admin" },
    { icon: PackageSearch, label: "Review Products", href: "/admin/products" },
    { icon: Users, label: "Manage Users", href: "/admin/users" },
    { icon: Wallet, label: "Payouts", href: "/admin/payouts" },
    { icon: MessageSquareWarning, label: "Reports", href: "/admin/reports" },
    { icon: Settings, label: "System Settings", href: "/admin/settings" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] flex">
      {/* Admin Sidebar - Darker & More Solid */}
      <aside className="w-64 border-r border-white/5 hidden md:flex flex-col fixed inset-y-0 bg-[#020617]">
        <div className="p-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-brand-purple flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight font-outfit text-white">Nexora Admin</span>
          </Link>
        </div>

        <nav className="flex-grow px-4 space-y-2 mt-4">
          {adminMenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all group"
            >
              <item.icon className="w-5 h-5 group-hover:text-red-400 transition-colors" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-white/5">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-white/20 hover:text-white hover:bg-red-500/10 transition-all group">
            <LogOut className="w-5 h-5 group-hover:text-red-400" />
            <span className="text-sm font-medium">Exit Admin</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col">
        {/* Top Header */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-10 bg-[#020617]/80 backdrop-blur-xl">
          <div className="flex items-center gap-4 w-96">
            <Search className="w-4 h-4 text-white/20" />
            <input 
              type="text" 
              placeholder="Search users, orders, or logs..."
              className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder-white/20 w-full"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="p-2 text-white/40 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/50">
              <span className="text-[10px] font-bold text-red-500">AD</span>
            </div>
          </div>
        </header>

        <main className="p-8 text-white">
          {children}
        </main>
      </div>
    </div>
  );
}
