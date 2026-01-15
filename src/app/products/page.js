 
import { FaPlus } from 'react-icons/fa';

export default function ProductsPage() {
  return (
    < >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-12">
        <div className="flex flex-col gap-2 mb-16">
        <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6">
              Shop now
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              Explore our <br />
                <span className="text-accent italic">products</span>
              </h1>

              <p className="text-slate-500 text-lg md:text-xl text-ultra-min leading-relaxed">
              High-quality product designed to deliver reliable performance and long-term value.
              Perfect for everyday use with a balance of affordability and durability.
              </p>
            </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-32 space-y-12">
              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Sort By</h3>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input defaultChecked className="form-radio size-4 text-electric-blue border-slate-200 focus:ring-electric-blue/20" name="sort" type="radio" />
                    <span className="text-sm thin-typeface text-slate-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors">Featured</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-radio size-4 text-electric-blue border-slate-200 focus:ring-electric-blue/20" name="sort" type="radio" />
                    <span className="text-sm thin-typeface text-slate-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors">Newest</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-radio size-4 text-electric-blue border-slate-200 focus:ring-electric-blue/20" name="sort" type="radio" />
                    <span className="text-sm thin-typeface text-slate-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors">Price: Low to High</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-radio size-4 text-electric-blue border-slate-200 focus:ring-electric-blue/20" name="sort" type="radio" />
                    <span className="text-sm thin-typeface text-slate-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors">Price: High to Low</span>
                  </label>
                </div>
              </section>
              
              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Categories</h3>
                <div className="flex flex-col gap-4">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <input defaultChecked className="form-checkbox size-4 rounded text-electric-blue border-slate-200 focus:ring-electric-blue/20" type="checkbox" />
                      <span className="text-sm thin-typeface text-slate-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors">All Works</span>
                    </div>
                    <span className="text-[10px] text-slate-300">128</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <input className="form-checkbox size-4 rounded text-electric-blue border-slate-200 focus:ring-electric-blue/20" type="checkbox" />
                      <span className="text-sm thin-typeface text-slate-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors">Home Decor</span>
                    </div>
                    <span className="text-[10px] text-slate-300">42</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <input className="form-checkbox size-4 rounded text-electric-blue border-slate-200 focus:ring-electric-blue/20" type="checkbox" />
                      <span className="text-sm thin-typeface text-slate-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors">Textiles</span>
                    </div>
                    <span className="text-[10px] text-slate-300">28</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <input className="form-checkbox size-4 rounded text-electric-blue border-slate-200 focus:ring-electric-blue/20" type="checkbox" />
                      <span className="text-sm thin-typeface text-slate-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors">Wellness</span>
                    </div>
                    <span className="text-[10px] text-slate-300">16</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <input className="form-checkbox size-4 rounded text-electric-blue border-slate-200 focus:ring-electric-blue/20" type="checkbox" />
                      <span className="text-sm thin-typeface text-slate-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors">Jewelry</span>
                    </div>
                    <span className="text-[10px] text-slate-300">22</span>
                  </label>
                </div>
              </section>
              
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Price Range</h3>
                  <span className="text-[10px] font-medium text-electric-blue">$15 — $500</span>
                </div>
                <div className="px-1">
                  <input className="custom-range" max="500" min="15" type="range" defaultValue="350" />
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-[10px] text-slate-400">$15</span>
                  <span className="text-[10px] text-slate-400">$500+</span>
                </div>
              </section>
              
              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Availability</h3>
                <div className="flex items-center gap-3">
                  <button className="flex-1 soft-ui-button soft-ui-active py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all">In Stock</button>
                  <button className="flex-1 soft-ui-button py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-all">Pre-order</button>
                </div>
              </section>
            </div>
          </aside>
          
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 asymmetric-grid">
              <div className="group flex flex-col gap-5">
                <div className="relative product-image overflow-hidden rounded-2xl bg-slate-50 dark:bg-white/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZSGnN5OGeClMlB4-HRe0G2NIxsU0hV7C-m3rfahKLfaAam7ws3CkjE4NAdbrurbNUfiOP2BBkI787ErYDAAWAhxvBeGIWZiTQ6EOHqdOQUIolzGcetlrwgwDuwcgdmGzW8FblT0DPALyudpeqNlXadeJpINsSgECwIq5dy-r9w9Bdbfi1PxABJftggV8QPDqaXW0sfEUxsaa0FJAPoB00fpeFxcW9qZs5XSRoR6idCCHEcgHg4C1Zn4kkRqHI8Yz1vlE8qeTF3RAH")'}}
                  ></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                  <button className="absolute bottom-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center size-14 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-electric-blue hover:text-white">
                    <FaPlus className="text-lg" />
                  </button>
                  <div className="absolute top-8 left-8 flex items-center gap-2">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-sm">Iconic</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] text-slate-400 dark:text-gray-500 uppercase tracking-[0.3em] font-medium">Bloom Ceramics</p>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl thin-typeface text-slate-900 dark:text-white">Artisanal Terra Vase</h3>
                    <p className="text-xl thin-typeface text-slate-500">$48.00</p>
                  </div>
                </div>
              </div>
              
              <div className="group flex flex-col gap-5">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-50 dark:bg-white/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdgYohFVS48kY1IAc-kAzdRJSzJ_Zh3PsRjFk4kt89QhcYsS1PKkI8b7nFbozbJ4WGvujl0zyK-_bHgrBJnherDcQx9s9FVCE3kaCgPruJnEUzR-p6TIg7LlZBz_AEAp1rKH_hRqk8nnvR8h5s5zUSc3kIIpzyxYmrydIhKstHdMDSZho5AHYZLvnFHhWvJz2bB7Y2Q95Vrp5UyoN0O1glR_b22KvBPnZgc1mmZ9YMAEytOgjqm__21uYzHlm4wP0GPaV2K_5aM5f6")'}}
                  ></div>
                  <button className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center size-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-electric-blue hover:text-white">
                    <FaPlus className="text-lg" />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] text-slate-400 dark:text-gray-500 uppercase tracking-[0.3em] font-medium">Loom &amp; Knot</p>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl thin-typeface text-slate-900 dark:text-white">Macramé Wall Hanging</h3>
                    <p className="text-lg thin-typeface text-slate-500">$75.00</p>
                  </div>
                </div>
              </div>
              
              <div className="group flex flex-col gap-5">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-50 dark:bg-white/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDipG-AjisCOuYM-gT0DCTqBeUOEfQ44uMw_6CNTIUesMVhLIJTGFiYp_dGmVLMYZbZhdKCAzUcut8i7IcvNR5xEWRcsf2OU7uvjJiFxf9EkB-qMGkyG4GB1ac-sLChJ9G0fgfCMp-xObEXj9M4Z3h9dZgdIrejgVC_SpXvHbx6cIqCXRen3gkDSfZxQd4lg-r-fPvy_kqT0i8dG3qFDQSZXcK4MI5m-dbss0eFEvEKEbTFpAgWjs8fuvlcSqCCRutXqNmWjTcsohrg")'}}
                  ></div>
                  <button className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center size-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-electric-blue hover:text-white">
                    <FaPlus className="text-lg" />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] text-slate-400 dark:text-gray-500 uppercase tracking-[0.3em] font-medium">Pure Light Co.</p>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl thin-typeface text-slate-900 dark:text-white">Organic Honey Tapers</h3>
                    <p className="text-lg thin-typeface text-slate-500">$18.50</p>
                  </div>
                </div>
              </div>
              
              <div className="group flex flex-col gap-5">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-50 dark:bg-white/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbDg8jjJFZsyhcxUEutAmuSsc3r23fmFwF8CRnwjYZc13QyhWmtPvugJjQyLXnlP64a8W02j1jZwCGMGS46o5CsnwvK0ebeACtBAloF_mAY8OOETSHahRtZYIF8ppjpsPy65hHO5gf-_5tNAN6GtNAwbo2qjgAFChoD5L1wnhEq5wO13pzq81cOD19NyH6FMTcLjkhxb-6Q5OhAmN0wbGgmqFfMnA8ONWqB7gjGWSnxcxHshZlOMzCJoz4u23vpi2rFlxpuLvhoqeE")'}}
                  ></div>
                  <button className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center size-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-electric-blue hover:text-white">
                    <FaPlus className="text-lg" />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] text-slate-400 dark:text-gray-500 uppercase tracking-[0.3em] font-medium">Oak &amp; Ember</p>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl thin-typeface text-slate-900 dark:text-white">Walnut Serving Platter</h3>
                    <p className="text-lg thin-typeface text-slate-500">$62.00</p>
                  </div>
                </div>
              </div>
              
              <div className="group flex flex-col gap-5">
                <div className="relative product-image overflow-hidden rounded-2xl bg-slate-50 dark:bg-white/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5U5POIeSnWbC7fXkQdUZT54dujAG35PSE_SMIjyCHX-XH3Pv-TYM5UliNOKCn2eMpHzPW6T3qYlO3T64ErjcsgtReOdme9XAmFjgiHgxRhUE54Fgpgd-qmrNRVG-UdKDdVuEBUNATsokkBuZPNa1ejC9Gwsu-jmazedUq18cAjmtsgnX-oTsG-woKRC3HVNtEBNdn9zepFT9zxK00iPLf4OTb5x7bpGxodwcuZ19IzCQi2bUDA1T3nZ4BPyaRXOFMY6bBy1Qs_vkP")'}}
                  ></div>
                  <button className="absolute bottom-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center size-14 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-electric-blue hover:text-white">
                    <FaPlus className="text-lg" />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] text-slate-400 dark:text-gray-500 uppercase tracking-[0.3em] font-medium">Studio V</p>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl thin-typeface text-slate-900 dark:text-white">Ethereal Flow Sculpture</h3>
                    <p className="text-xl thin-typeface text-slate-500">$320.00</p>
                  </div>
                </div>
              </div>
              
              <div className="group flex flex-col gap-5">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-50 dark:bg-white/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnDHtvsPKioQicoqCvYVNBxehXvZHrkAUyS-gVM0k-YwmlZdCxQFSTVcjRlnofsZnsWXquR4ErlFoPM1jKqEhcO8jPfXfSbegsIuPBbN_D_78NXcewB-JoFsVz4W6rB813hDX5Czwbx0t98MwO8D8SkHDyjZl_Xq-dgkqGxPABMCL8aFDN_1AIpFBmPxVTe3CjiPbvcr-Gos5eXqJ3kw1DEko74lsjgSlQxEUYHCPpN9d2OtmVPTZTipCa3Q4l2ooDH2ImYheb3RSm")'}}
                  ></div>
                  <button className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center size-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-electric-blue hover:text-white">
                    <FaPlus className="text-lg" />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] text-slate-400 dark:text-gray-500 uppercase tracking-[0.3em] font-medium">Paper Path</p>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl thin-typeface text-slate-900 dark:text-white">Leather Journal</h3>
                    <p className="text-lg thin-typeface text-slate-500">$35.00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-32 flex flex-col items-center gap-8">
              <div className="flex items-center gap-12">
                <div className="w-24 h-px bg-slate-100 dark:bg-white/5"></div>
                <p className="text-[10px] text-slate-300 dark:text-gray-500 uppercase tracking-[0.4em] font-medium">6 of 128 products</p>
                <div className="w-24 h-px bg-slate-100 dark:bg-white/5"></div>
              </div>
              <button className="group relative px-14 py-5 overflow-hidden rounded-full border border-slate-200 dark:border-white/10 transition-all hover:border-electric-blue">
                <div className="absolute inset-0 w-0 bg-electric-blue transition-all duration-300 ease-out group-hover:w-full"></div>
                <span className="relative text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">Discover More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ >
  );
}