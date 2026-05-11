"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Code, Globe } from "lucide-react";
import Link from "next/link";

import { signIn, signUp } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { createSupabaseClient } from "@/lib/supabase";

interface AuthFormProps {
  type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createSupabaseClient();

  const isLogin = type === "login";

  const handleOAuth = async (provider: 'google' | 'github') => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/api/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (err) {
      const message = err instanceof Error ? err.message : "An authentication error occurred";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      if (isLogin) {
        const result = await signIn(formData);
        if (result?.error) setError(result.error);
      } else {
        const result = await signUp(formData);
        if (result?.error) setError(result.error);
        else {
          alert("Registration successful! Please check your email for verification.");
          router.push("/login");
        }
      }
    } catch {
      // Error is handled by Supabase or can be logged
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-8 rounded-3xl border-white/5 shadow-2xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-outfit mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-white/40 text-sm">
            {isLogin 
              ? "Sign in to access your digital assets" 
              : "Join Nexora and start your digital journey"}
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs text-center">
              {error}
            </div>
          )}
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-xs font-medium text-white/60 ml-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-white/20" />
                </div>
                <input
                  name="fullName"
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-white/10 rounded-xl bg-white/5 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-indigo transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-medium text-white/60 ml-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-white/20" />
              </div>
              <input
                name="email"
                type="email"
                required
                className="block w-full pl-10 pr-3 py-2.5 border border-white/10 rounded-xl bg-white/5 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-indigo transition-all"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-white/60 ml-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-white/20" />
              </div>
              <input
                name="password"
                type="password"
                required
                className="block w-full pl-10 pr-3 py-2.5 border border-white/10 rounded-xl bg-white/5 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-indigo transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {isLogin && (
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-xs text-brand-indigo hover:underline">
                Forgot password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-gradient-to-r from-brand-indigo to-brand-purple rounded-xl text-white font-bold shadow-lg shadow-brand-indigo/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : (isLogin ? "Sign In" : "Register Now")}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#030712] px-2 text-white/20">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            type="button"
            onClick={() => handleOAuth('google')}
            disabled={loading}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-sm font-medium disabled:opacity-50"
          >
            <Globe className="w-4 h-4" />
            Google
          </button>
          <button 
            type="button"
            onClick={() => handleOAuth('github')}
            disabled={loading}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-sm font-medium disabled:opacity-50"
          >
            <Code className="w-4 h-4" />
            GitHub
          </button>
        </div>

        <p className="text-center mt-8 text-sm text-white/40">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link 
            href={isLogin ? "/register" : "/login"} 
            className="text-brand-indigo font-bold hover:underline"
          >
            {isLogin ? "Register" : "Sign In"}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
