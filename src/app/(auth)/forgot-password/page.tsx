"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Mail, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      setIsSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-4 pt-24 pb-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold font-outfit mb-3">Reset Password</h1>
            <p className="text-white/40">We&apos;ll send you a link to reset your password.</p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass p-8 rounded-[40px] border-white/5 shadow-2xl"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">
                      Email Address
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-brand-indigo">
                        <Mail className="h-5 w-5 opacity-40 group-focus-within:opacity-100" />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/50 transition-all text-white placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded-xl border border-red-400/20">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold shadow-xl shadow-brand-indigo/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Send Reset Link"
                    )}
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <Link
                    href="/login"
                    className="text-white/40 hover:text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors group"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to login
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-10 rounded-[40px] border-white/5 shadow-2xl text-center"
              >
                <div className="w-20 h-20 bg-brand-neon/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-brand-neon" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Check your email</h3>
                <p className="text-white/40 mb-8 leading-relaxed">
                  We have sent a password reset link to <span className="text-white font-medium">{email}</span>. Please check your inbox.
                </p>
                <Link
                  href="/login"
                  className="inline-block w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold transition-all"
                >
                  Return to Login
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
