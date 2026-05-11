"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Bell, Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-indigo to-brand-purple flex items-center justify-center shadow-lg shadow-brand-indigo/20 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-outfit">Nexora</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-white/40" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full leading-5 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-brand-indigo sm:text-sm transition-all"
                placeholder="Search digital assets..."
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-neon rounded-full border border-background"></span>
            </button>
            <button className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
            <Link 
              href="/login" 
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-brand-indigo to-brand-purple text-white shadow-lg shadow-brand-indigo/20 hover:opacity-90 transition-all active:scale-95"
            >
              Join Nexora
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden glass border-t border-white/5", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5">Home</Link>
          <Link href="/browse" className="block px-3 py-2 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/5">Browse</Link>
          <Link href="/categories" className="block px-3 py-2 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/5">Categories</Link>
        </div>
        <div className="pt-4 pb-3 border-t border-white/5 px-4 space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-white/40" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full leading-5 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-brand-indigo sm:text-sm"
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center justify-between">
            <Link href="/login" className="text-white/80 font-medium">Sign In</Link>
            <Link href="/register" className="px-5 py-2 rounded-full bg-brand-indigo text-white font-medium">Join Now</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
