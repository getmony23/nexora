"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  ArrowRight, 
  Lock,
  Info
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "vodafone">("paypal");

  const product = {
    title: "Nexora SaaS Dashboard Kit",
    price: 49.00,
    license: "Commercial License",
    thumbnail: ""
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold font-outfit mb-4">Complete Your Purchase</h1>
            <p className="text-white/40 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Secure, encrypted checkout process
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Payment Methods */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Payment Method Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-outfit flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-brand-indigo/20 text-brand-indigo text-xs flex items-center justify-center font-bold">1</span>
                  Choose Payment Method
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => setPaymentMethod("paypal")}
                    className={`p-6 rounded-[30px] border-2 transition-all flex flex-col gap-4 text-left group ${
                      paymentMethod === "paypal" 
                      ? "border-brand-indigo bg-brand-indigo/5 shadow-lg shadow-brand-indigo/10" 
                      : "border-white/5 bg-white/[0.02] hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-white/5">
                        <CreditCard className={`w-6 h-6 ${paymentMethod === "paypal" ? 'text-brand-indigo' : 'text-white/20'}`} />
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "paypal" ? 'border-brand-indigo' : 'border-white/10'
                      }`}>
                        {paymentMethod === "paypal" && <div className="w-2.5 h-2.5 bg-brand-indigo rounded-full" />}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold">PayPal / Credit Card</h4>
                      <p className="text-xs text-white/40 mt-1">Pay with global credit cards or PayPal account.</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod("vodafone")}
                    className={`p-6 rounded-[30px] border-2 transition-all flex flex-col gap-4 text-left group ${
                      paymentMethod === "vodafone" 
                      ? "border-brand-indigo bg-brand-indigo/5 shadow-lg shadow-brand-indigo/10" 
                      : "border-white/5 bg-white/[0.02] hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-white/5">
                        <Smartphone className={`w-6 h-6 ${paymentMethod === "vodafone" ? 'text-brand-indigo' : 'text-white/20'}`} />
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "vodafone" ? 'border-brand-indigo' : 'border-white/10'
                      }`}>
                        {paymentMethod === "vodafone" && <div className="w-2.5 h-2.5 bg-brand-indigo rounded-full" />}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold">Vodafone Cash</h4>
                      <p className="text-xs text-white/40 mt-1">Direct transfer via Vodafone Cash (Egypt Only).</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Dynamic Payment Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={paymentMethod}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="glass p-8 rounded-[40px] border-white/5"
                >
                  {paymentMethod === "paypal" ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-sm text-brand-indigo font-bold bg-brand-indigo/10 p-4 rounded-2xl">
                        <Info className="w-5 h-5" />
                        You will be redirected to PayPal to complete your purchase securely.
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm text-white/40">Items in your cart are protected by Nexora Guarantee. You can request a refund within 14 days if the product doesn&apos;t work as described.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="p-6 rounded-[30px] bg-white/5 border border-white/5 space-y-4">
                        <h4 className="font-bold text-brand-indigo flex items-center gap-2">
                          <Smartphone className="w-4 h-4" />
                          Transfer Instructions
                        </h4>
                        <p className="text-sm text-white/60">Please transfer the amount to the following number:</p>
                        <div className="bg-[#030712] p-4 rounded-2xl border border-white/5 text-center">
                          <span className="text-2xl font-mono font-bold text-white tracking-widest">010 1234 5678</span>
                        </div>
                        <p className="text-xs text-white/40">After transfer, please enter the Transaction ID or your phone number below for verification.</p>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-white/20 uppercase tracking-widest ml-1">Transfer Detail</label>
                        <input 
                          type="text" 
                          placeholder="Your number or Transaction ID"
                          className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4 text-xs text-white/20 px-4">
                <ShieldCheck className="w-5 h-5 text-brand-neon" />
                <p>By clicking &quot;Purchase&quot;, you agree to our Terms of Service and the specific license of this digital asset.</p>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                <div className="glass p-8 rounded-[40px] border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 blur-[60px] -z-10"></div>
                  
                  <h3 className="text-xl font-bold font-outfit mb-8">Order Summary</h3>
                  
                  {/* Product Info */}
                  <div className="flex gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-sm line-clamp-1">{product.title}</h4>
                      <p className="text-[10px] text-white/40 mt-1 uppercase tracking-wider">{product.license}</p>
                      <div className="mt-2 text-brand-indigo font-bold">${product.price}</div>
                    </div>
                  </div>

                  {/* Calculations */}
                  <div className="space-y-3 pt-6 border-t border-white/5 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Subtotal</span>
                      <span>${product.price}.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Platform Fee</span>
                      <span>$2.00</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-3 border-t border-white/5">
                      <span>Total</span>
                      <span className="text-brand-neon">${product.price + 2}.00</span>
                    </div>
                  </div>

                  <Link 
                    href="/checkout/success"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold text-lg shadow-xl shadow-brand-indigo/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    Complete Purchase
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-white/20 uppercase font-bold tracking-widest">
                    <Lock className="w-3 h-3" />
                    SSL Secured Transaction
                  </div>
                </div>

                {/* Help Card */}
                <div className="glass p-6 rounded-[30px] border-white/5">
                  <h4 className="font-bold text-sm mb-2">Need help?</h4>
                  <p className="text-xs text-white/40 mb-4">Our support team is available 24/7 to assist with your payment.</p>
                  <button className="text-xs text-brand-indigo font-bold hover:underline">Contact Support</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
