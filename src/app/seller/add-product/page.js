import MarketplaceLayout from '@/components/MarketplaceLayout';
import Link from 'next/link';
import { FaTag, FaTags, FaDollarSign, FaAlignLeft, FaCamera, FaCloudUploadAlt, FaArrowRight, FaUserCheck } from 'react-icons/fa';

export default function AddProductPage() {
  return (
    < >
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            <div className="flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/30">1</div>
              <span className="text-xs font-semibold text-primary">Details</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-[#e2e8f0] dark:bg-[#334155] text-[#64748b] flex items-center justify-center font-bold">2</div>
              <span className="text-xs font-semibold text-[#64748b]">Pricing</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-[#e2e8f0] dark:bg-[#334155] text-[#64748b] flex items-center justify-center font-bold">3</div>
              <span className="text-xs font-semibold text-[#64748b]">Media</span>
            </div>
          </div>
          <div className="w-full h-3 bg-[#e2e8f0] dark:bg-[#1e293b] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-electric-blue w-1/3 transition-all duration-500 ease-out"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-10 text-center">
          <h1 className="text-4xl font-black tracking-tight text-[#1e293b] dark:text-white">Listing your product</h1>
          <p className="text-[#64748b] dark:text-[#94a3b8] text-lg">Step 1: Tell us about your masterpiece</p>
        </div>
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl shadow-primary/5 p-8 md:p-12 border border-[#e2e8f0] dark:border-[#334155]">
          <form className="space-y-8">
            <div className="space-y-6">
              <div className="flex flex-col gap-3 focus-ring-glow transition-all duration-300">
                <label className="text-[#1e293b] dark:text-white text-base font-bold flex items-center gap-2">
                  <FaTag className="text-primary" />
                  Product Title
                </label>
                <input 
                  className="w-full h-16 px-6 text-lg rounded-xl border border-[#e2e8f0] dark:border-[#334155] bg-white dark:bg-[#0f172a] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-[#94a3b8]" 
                  placeholder="What are you selling today?" 
                  type="text"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3 focus-ring-glow transition-all duration-300">
                  <label className="text-[#1e293b] dark:text-white text-base font-bold flex items-center gap-2">
                    <FaTags className="text-primary" />
                    Category
                  </label>
                  <select className="w-full h-16 px-6 text-lg rounded-xl border border-[#e2e8f0] dark:border-[#334155] bg-white dark:bg-[#0f172a] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all">
                    <option>Fresh Produce</option>
                    <option>Handmade Crafts</option>
                    <option>Baked Goods</option>
                    <option>Home Decor</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3 focus-ring-glow transition-all duration-300">
                  <label className="text-[#1e293b] dark:text-white text-base font-bold flex items-center gap-2">
                    <FaDollarSign className="text-primary" />
                    Price Point
                  </label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94a3b8] font-bold text-xl">$</span>
                    <input 
                      className="w-full h-16 pl-12 pr-6 text-xl font-bold rounded-xl border border-[#e2e8f0] dark:border-[#334155] bg-white dark:bg-[#0f172a] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all" 
                      placeholder="0.00" 
                      type="text" 
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 focus-ring-glow transition-all duration-300">
                <label className="text-[#1e293b] dark:text-white text-base font-bold flex items-center gap-2">
                  <FaAlignLeft className="text-primary" />
                  The Story Behind It
                </label>
                <textarea 
                  className="w-full min-h-[160px] p-6 text-lg rounded-xl border border-[#e2e8f0] dark:border-[#334155] bg-white dark:bg-[#0f172a] focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-[#94a3b8]" 
                  placeholder="Describe what makes this product special..."
                ></textarea>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[#1e293b] dark:text-white text-base font-bold flex items-center gap-2">
                  <FaCamera className="text-primary" />
                  Visuals
                </label>
                <div className="glass-zone rounded-2xl p-10 flex flex-col items-center justify-center gap-4 transition-all hover:border-primary group cursor-pointer">
                  <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <FaCloudUploadAlt className="text-4xl" />
                  </div>
                  <div className="text-center">
                    <p className="text-[#1e293b] dark:text-white font-bold text-lg">Drag & drop product photos</p>
                    <p className="text-[#64748b] dark:text-[#94a3b8]">or <span className="text-primary font-semibold underline">browse your files</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row items-center gap-4 pt-6">
              <button 
                className="w-full md:w-1/3 py-5 text-[#64748b] dark:text-[#94a3b8] font-bold hover:bg-[#f1f5f9] dark:hover:bg-[#334155] rounded-xl transition-colors" 
                type="button"
              >
                Save as Draft
              </button>
              <button 
                className="w-full md:flex-1 py-5 bg-gradient-to-r from-primary to-electric-blue hover:opacity-90 text-white font-bold text-lg rounded-xl transition-all transform active:scale-[0.98] shadow-xl shadow-primary/25 flex items-center justify-center gap-2" 
                type="submit"
              >
                Next Step
                <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-[#64748b] dark:text-[#94a3b8] text-sm">
            <FaUserCheck className="text-lg" />
            <span>Your shop is in Good Standing. Listings appear instantly.</span>
          </div>
          <div className="flex gap-4">
            <div className="size-2 rounded-full bg-primary"></div>
            <div className="size-2 rounded-full bg-[#e2e8f0] dark:bg-[#334155]"></div>
            <div className="size-2 rounded-full bg-[#e2e8f0] dark:bg-[#334155]"></div>
          </div>
        </div>
      </main>
    </ >
  );
}