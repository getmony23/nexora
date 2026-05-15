"use client";

import React from "react";
import { 
  User, 
  Shield, 
  Bell, 
  CreditCard,
  Save,
  Globe
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl font-black font-outfit text-white">Settings</h1>
        <p className="text-white/40 mt-1">Manage your account and platform preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Nav */}
        <div className="lg:col-span-1 space-y-2">
          {[
            { label: "Profile", icon: User, active: true },
            { label: "Security", icon: Shield, active: false },
            { label: "Notifications", icon: Bell, active: false },
            { label: "Billing", icon: CreditCard, active: false },
            { label: "Language", icon: Globe, active: false },
          ].map((item) => (
            <button 
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                item.active ? 'bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20' : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-8">
          <div className="glass-card rounded-[2.5rem] p-8 neon-border-indigo">
            <h3 className="text-xl font-bold mb-8">Personal Information</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all text-white font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all text-white font-medium opacity-50 cursor-not-allowed"
                    disabled
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-1">Bio</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about yourself..."
                  className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all text-white font-medium resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end pt-4">
                <button className="px-8 py-3 rounded-xl bg-brand-indigo text-white font-black text-sm shadow-lg shadow-brand-indigo/20 flex items-center gap-2 hover:scale-105 transition-all">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
