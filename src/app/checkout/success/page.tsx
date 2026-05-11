"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { 
  CheckCircle2, 
  Download, 
  ArrowRight, 
  Mail,
  Share2,
  FileText
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-20 pb-20">
        <div className="max-w-2xl w-full px-4 text-center">
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 12 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-24 h-24 rounded-full bg-brand-neon/10 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full bg-brand-neon/20 animate-ping"></div>
              <CheckCircle2 className="w-12 h-12 text-brand-neon relative z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Payment Successful!</h1>
            <p className="text-white/40 text-lg mb-12">
              Thank you for your purchase. Your digital asset is now ready for download.
              A confirmation email has been sent to your inbox.
            </p>

            <div className="glass p-8 rounded-[40px] border-white/5 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold shadow-xl shadow-brand-indigo/20 hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Files (ZIP)
                </button>
                <Link 
                  href="/dashboard/purchases"
                  className="flex-1 py-4 rounded-2xl glass hover:bg-white/5 text-white font-bold transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  View Invoice
                </Link>
              </div>

              <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Order ID</span>
                  <span className="text-sm font-mono">NX-9284-AX</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">License Type</span>
                  <span className="text-sm">Commercial</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/browse" className="text-white/40 hover:text-white font-bold flex items-center gap-2 transition-colors group">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Back to Marketplace
              </Link>
              <button className="text-white/40 hover:text-white font-bold flex items-center gap-2 transition-colors">
                <Share2 className="w-4 h-4" />
                Share your purchase
              </button>
            </div>
          </motion.div>

        </div>
      </main>

      <footer className="py-8 text-center text-white/10 text-[10px] uppercase tracking-widest">
        Secure Transaction Verified by Nexora
      </footer>
    </div>
  );
}
