import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Placeholder for Featured Products Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold font-outfit mb-2">Featured Assets</h2>
              <p className="text-white/40">Handpicked premium products from our top sellers.</p>
            </div>
            <button className="text-brand-indigo font-medium hover:underline">View all</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-3xl overflow-hidden group glass-hover">
                <div className="aspect-video bg-white/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-white/60">Next.js Template</span>
                    <span className="text-brand-neon font-bold">$49</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-outfit">Nexora Dashboard Kit</h3>
                  <p className="text-sm text-white/40 mb-6">A professional dashboard template with Supabase integration.</p>
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-purple/20"></div>
                      <span className="text-xs text-white/60">CreativeStudio</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-xs font-medium">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="glass border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-purple flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight font-outfit">Nexora</span>
            </div>
            <p className="text-white/40 max-w-sm mb-6">
              The world's leading marketplace for premium digital assets. Empowering creators to build the future of the web.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Marketplace</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Tools</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 text-center text-white/20 text-xs">
          © 2026 Nexora Marketplace. All rights reserved. Built with passion for creators.
        </div>
      </footer>
    </div>
  );
}
