"use client";

import React, { useState } from "react";
import { 
  Upload, 
  Plus, 
  X, 
  Image as ImageIcon, 
  FileArchive, 
  Link as LinkIcon,
  HelpCircle,
  Save
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddProductPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-outfit mb-2">Add New Product</h1>
          <p className="text-white/40">Upload your digital asset to the marketplace.</p>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`h-2 w-12 rounded-full transition-all ${s === step ? 'bg-brand-indigo w-16' : 'bg-white/10'}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="glass p-8 rounded-[40px] border-white/5 shadow-2xl">
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          
          {/* Step 1: Basic Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-indigo/20 text-brand-indigo text-sm flex items-center justify-center font-bold">1</span>
              Basic Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 col-span-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Product Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Modern SaaS Dashboard Kit"
                  className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Category</label>
                <select className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo appearance-none cursor-pointer">
                  <option>Landing Page</option>
                  <option>Dashboard</option>
                  <option>App Template</option>
                  <option>UI Kit</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Price (USD)</label>
                <input 
                  type="number" 
                  placeholder="0.00"
                  className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Short Description</label>
              <textarea 
                rows={4}
                placeholder="Describe your product in a few sentences..."
                className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all resize-none"
              ></textarea>
            </div>
          </div>

          <div className="h-[1px] bg-white/5"></div>

          {/* Step 2: Media & Assets */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-indigo/20 text-brand-indigo text-sm flex items-center justify-center font-bold">2</span>
              Media & Files
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Thumbnail Upload */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Main Thumbnail</label>
                <div className="aspect-video rounded-[30px] border-2 border-dashed border-white/10 hover:border-brand-indigo/50 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer group bg-white/[0.02]">
                  <div className="p-4 rounded-full bg-white/5 group-hover:bg-brand-indigo/10 group-hover:scale-110 transition-all">
                    <Upload className="w-6 h-6 text-white/40 group-hover:text-brand-indigo" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold">Click to upload image</p>
                    <p className="text-[10px] text-white/20 mt-1">Recommended size: 1200x900px</p>
                  </div>
                </div>
              </div>

              {/* Asset ZIP Upload */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Main Product File (ZIP)</label>
                <div className="aspect-video rounded-[30px] border-2 border-dashed border-white/10 hover:border-brand-indigo/50 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer group bg-white/[0.02]">
                  <div className="p-4 rounded-full bg-white/5 group-hover:bg-brand-indigo/10 group-hover:scale-110 transition-all">
                    <FileArchive className="w-6 h-6 text-white/40 group-hover:text-brand-indigo" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold">Upload Source Code</p>
                    <p className="text-[10px] text-white/20 mt-1">Max file size: 500MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-white/5"></div>

          {/* Step 3: Preview & Submit */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-indigo/20 text-brand-indigo text-sm flex items-center justify-center font-bold">3</span>
              Preview & Submission
            </h3>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Live Demo URL (Optional)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LinkIcon className="h-4 w-4 text-white/20" />
                </div>
                <input 
                  type="url" 
                  placeholder="https://demo.yourproduct.com"
                  className="w-full pl-12 pr-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-brand-neon/5 border border-brand-neon/10">
              <HelpCircle className="w-5 h-5 text-brand-neon" />
              <p className="text-xs text-brand-neon/80">
                Your product will be reviewed by our team before going live. This usually takes 24-48 hours.
              </p>
            </div>
          </div>

          <div className="pt-8 flex items-center justify-end gap-4">
            <button className="px-8 py-3 rounded-2xl glass hover:bg-white/5 font-bold transition-all">
              Save Draft
            </button>
            <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold shadow-xl shadow-brand-indigo/20 hover:opacity-90 active:scale-95 transition-all flex items-center gap-2">
              Submit Product
              <Save className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
