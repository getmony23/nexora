"use client";

import React, { useState, useRef } from "react";
import { 
  Upload, 
  FileArchive, 
  Link as LinkIcon,
  HelpCircle,
  Save,
  CheckCircle2,
  AlertCircle,
  Loader2,
  X
} from "lucide-react";
import { createProduct } from "@/actions/products";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [asset, setAsset] = useState<File | null>(null);

  const thumbnailRef = useRef<HTMLInputElement>(null);
  const assetRef = useRef<HTMLInputElement>(null);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAssetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setAsset(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    if (thumbnail) formData.append("thumbnail", thumbnail);
    if (asset) formData.append("asset", asset);

    const result = await createProduct(formData);

    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-black font-outfit text-white">Product Submitted!</h2>
          <p className="text-white/40 mt-2">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20 animate-in fade-in duration-700">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black font-outfit text-white">Add New Product</h1>
        <p className="text-white/40 mt-1">Ready to share your creation with the world?</p>
      </div>

      <div className="glass-card rounded-[3rem] p-10 neon-border-indigo shadow-2xl">
        <form className="space-y-12" onSubmit={handleSubmit}>
          
          {/* Step 1: Basic Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black font-outfit text-white flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-brand-indigo/20 text-brand-indigo text-sm flex items-center justify-center font-black">01</span>
              Essential Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 col-span-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Product Title</label>
                <input 
                  name="title"
                  type="text" 
                  required
                  placeholder="e.g. Modern SaaS Dashboard Kit"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all text-white font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Category</label>
                <select 
                  name="category"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo appearance-none cursor-pointer text-white font-medium"
                >
                  <option className="bg-[#02040a]">Landing Page</option>
                  <option className="bg-[#02040a]">Dashboard</option>
                  <option className="bg-[#02040a]">App Template</option>
                  <option className="bg-[#02040a]">UI Kit</option>
                  <option className="bg-[#02040a]">Icon Set</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Price (USD)</label>
                <input 
                  name="price"
                  type="number" 
                  required
                  step="0.01"
                  placeholder="0.00"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all text-white font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Detailed Description</label>
              <textarea 
                name="description"
                rows={4}
                required
                placeholder="Describe your product features, technologies used, and instructions..."
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all text-white font-medium resize-none"
              ></textarea>
            </div>
          </div>

          <div className="h-[1px] bg-white/5"></div>

          {/* Step 2: Media & Assets */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black font-outfit text-white flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-brand-purple/20 text-brand-purple text-sm flex items-center justify-center font-black">02</span>
              Media & Assets
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Thumbnail Upload */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Main Thumbnail</label>
                <input 
                  type="file" 
                  ref={thumbnailRef}
                  onChange={handleThumbnailChange}
                  accept="image/*"
                  className="hidden"
                />
                <div 
                  onClick={() => thumbnailRef.current?.click()}
                  className="aspect-video rounded-[2.5rem] border-2 border-dashed border-white/5 hover:border-brand-indigo/50 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer group bg-white/[0.01] relative overflow-hidden"
                >
                  {thumbnailPreview ? (
                    <>
                      <img src={thumbnailPreview} alt="Preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Upload className="w-8 h-8 text-white" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-5 rounded-3xl bg-white/5 group-hover:bg-brand-indigo/10 group-hover:scale-110 transition-all">
                        <Upload className="w-8 h-8 text-white/20 group-hover:text-brand-indigo" />
                      </div>
                      <div className="text-center px-4">
                        <p className="text-sm font-black text-white">Upload Thumbnail</p>
                        <p className="text-[10px] text-white/20 mt-1 font-bold uppercase tracking-widest">JPG, PNG up to 5MB</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Asset ZIP Upload */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Source Code (ZIP)</label>
                <input 
                  type="file" 
                  ref={assetRef}
                  onChange={handleAssetChange}
                  accept=".zip,.rar,.7z"
                  className="hidden"
                />
                <div 
                  onClick={() => assetRef.current?.click()}
                  className={`aspect-video rounded-[2.5rem] border-2 border-dashed transition-all flex flex-col items-center justify-center gap-4 cursor-pointer group bg-white/[0.01] ${
                    asset ? 'border-brand-purple/50 bg-brand-purple/5' : 'border-white/5 hover:border-brand-purple/50'
                  }`}
                >
                  <div className={`p-5 rounded-3xl bg-white/5 group-hover:bg-brand-purple/10 group-hover:scale-110 transition-all ${asset ? 'bg-brand-purple/20' : ''}`}>
                    <FileArchive className={`w-8 h-8 ${asset ? 'text-brand-purple' : 'text-white/20 group-hover:text-brand-purple'}`} />
                  </div>
                  <div className="text-center px-4">
                    <p className="text-sm font-black text-white">
                      {asset ? asset.name : 'Upload Source Code'}
                    </p>
                    <p className="text-[10px] text-white/20 mt-1 font-bold uppercase tracking-widest">
                      {asset ? `${(asset.size / 1024 / 1024).toFixed(2)} MB` : 'ZIP file up to 500MB'}
                    </p>
                  </div>
                  {asset && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); setAsset(null); }}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-red-500/20 text-white/20 hover:text-red-500 transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-white/5"></div>

          {/* Step 3: Final Details */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black font-outfit text-white flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-brand-neon/20 text-brand-neon text-sm flex items-center justify-center font-black">03</span>
              Final Details
            </h3>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">رابط المعاينة الحية (اختياري)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <LinkIcon className="h-5 w-5 text-white/20" />
                </div>
                <input 
                  name="demoUrl"
                  type="url" 
                  placeholder="https://demo.nexora.com/your-product"
                  className="w-full pl-16 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-indigo transition-all text-white font-medium"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-[2rem] bg-brand-indigo/5 border border-brand-indigo/10">
              <div className="w-12 h-12 rounded-2xl bg-brand-indigo/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-6 h-6 text-brand-indigo" />
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed font-medium">
                By submitting this product, you agree to Nexora&apos;s <span className="text-brand-indigo cursor-pointer hover:underline">Seller Terms of Service</span>. Your product will undergo a brief review process to ensure it meets our quality standards.
              </p>
            </div>
          </div>

          {error && (
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-500 text-sm font-bold animate-pulse">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          <div className="pt-10 flex items-center justify-end gap-6">
            <button 
              type="button"
              className="px-8 py-4 rounded-2xl glass hover:bg-white/5 font-black text-sm transition-all text-white/40 hover:text-white"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={loading}
              className="px-12 py-4 rounded-2xl bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-neon text-white font-black text-base shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  Submit Product
                  <Save className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

