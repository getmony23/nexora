"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, ShieldCheck, Users, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-indigo/20 blur-[120px] animate-pulse"></div>
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-purple/20 blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-brand-neon/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-brand-neon text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4" />
            <span>Launch Your Next Project Faster</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 font-outfit"
          >
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-neon">
              Digital Assets
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10"
          >
            Discover a curated marketplace for premium websites, landing pages,
            SaaS templates, and web tools. Built for developers, designers, and entrepreneurs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold text-lg shadow-2xl shadow-brand-indigo/30 hover:shadow-brand-indigo/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl glass hover:bg-white/5 text-white font-bold text-lg transition-all border-white/10">
              Sell Your Assets
            </button>
          </motion.div>

          {/* Feature Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/5 pt-16"
          >
            {[
              { label: "Premium Items", value: "2,500+", icon: Layout },
              { label: "Happy Sellers", value: "450+", icon: Users },
              { label: "Secure Payments", value: "100%", icon: ShieldCheck },
              { label: "Custom Code", value: "Ready", icon: Code },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-indigo/20 group-hover:text-brand-indigo transition-colors">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
