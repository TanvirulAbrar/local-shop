"use client"
import MarketplaceLayout from '@/components/MarketplaceLayout';
import { FaSearch,  FaArrowRight, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import { BiSolidCategoryAlt, BiLogOut } from 'react-icons/bi';
import { CiLocationOn, CiHeart, CiStar } from 'react-icons/ci';
import { PiTagLight } from 'react-icons/pi';
import { useState } from 'react';

export default function HelpCenterPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    < >
      <main className="space-y-32 pb-32 pt-16">
        <section className="px-4">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8">Help Center &amp; Support</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.85] mb-12">
              How can we <br/><span className="text-primary italic">help you?</span>
            </h1>
            <div className="relative max-w-2xl mx-auto group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative flex items-center glass rounded-full px-8 py-6 shadow-2xl">
                <FaSearch className="text-slate-400 text-3xl mr-4" />
                <input 
                  className="bg-transparent border-none focus:ring-0 text-lg w-full placeholder:text-slate-400 font-medium" 
                  placeholder="Search for shipping, returns, or selling tips..." 
                  type="text"
                />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="text-xs font-bold text-slate-400">Popular:</span>
              <a className="text-xs font-bold text-primary hover:underline" href="#">Track Order</a>
              <a className="text-xs font-bold text-primary hover:underline" href="#">Become a Maker</a>
              <a className="text-xs font-bold text-primary hover:underline" href="#">Return Policy</a>
            </div>
          </div>
        </section>
        <section className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bento-item group md:row-span-2 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-3xl flex items-center justify-center mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M20 7H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-6 9H4v-2h10v2M4 11v2h16v-2H4m18 2c0-2.8-2.2-5-5-5s-5 2.2-5 5v2h10v-2m-1.5 6h-7c-.3 0-.5.2-.5.5v.5h8v-.5c0-.3-.2-.5-.5-.5"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter mb-4">Shipping &amp; Delivery</h3>
                  <p className="text-slate-500 text-ultra-min leading-relaxed">Everything you need to know about how your handmade treasures travel from the workshop to your doorstep.</p>
                </div>
                <ul className="mt-12 space-y-4">
                  <li className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary cursor-pointer">
                    < FaArrowRight className="text-lg" /> Tracking your local delivery
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary cursor-pointer">
                    < FaArrowRight className="text-lg" /> International shipping rates
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary cursor-pointer">
                    < FaArrowRight className="text-lg" /> Eco-friendly packaging
                  </li>
                </ul>
              </div>
              <div className="bento-item md:col-span-2 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 rounded-3xl flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M16 6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6h-6m-6-2h4v2h-4V4m6 13v-4h-3v4h-2v-7h2v-2h-5v9h2v4h7v-4h-2m2-9c0-.6-.4-1-1-1s-1 .4-1 1s.4 1 1 1s1-.4 1-1m-6 0c0-.6-.4-1-1-1s-1 .4-1 1s.4 1 1 1s1-.4 1-1"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter mb-4">Selling on Local</h3>
                  <p className="text-slate-500 text-ultra-min">Tools and guides for neighborhood artisans and small business owners.</p>
                </div>
                <div className="flex-1 grid grid-cols-1 gap-3 w-full">
                  <div className="glass p-5 rounded-3xl hover:bg-white transition-colors">
                    <h4 className="font-black text-sm uppercase tracking-wider mb-1">Maker Dashboard</h4>
                    <p className="text-xs text-slate-400">Manage your listings and orders</p>
                  </div>
                  <div className="glass p-5 rounded-3xl hover:bg-white transition-colors">
                    <h4 className="font-black text-sm uppercase tracking-wider mb-1">Fee Structure</h4>
                    <p className="text-xs text-slate-400">Transparent 5% community reinvestment fee</p>
                  </div>
                </div>
              </div>
              <div className="bento-item">
                <div className="w-16 h-16 bg-orange-50 dark:bg-orange-900/30 rounded-3xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14v14M12 16c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m1-3h-2v-6h2v6"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black tracking-tighter mb-3">Returns &amp; Refunds</h3>
                <p className="text-slate-500 text-sm text-ultra-min leading-relaxed mb-6">Hassle-free returns within our 30-day community guarantee period.</p>
                <a className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2" href="#">Policy Details <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></a>
              </div>
              <div className="bento-item">
                <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/30 rounded-3xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4m0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black tracking-tighter mb-3">Account Safety</h3>
                <p className="text-slate-500 text-sm text-ultra-min leading-relaxed mb-6">Protecting your data and transactions with modern encryption.</p>
                <a className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2" href="#">Security Hub <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></a>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Common Questions</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Everything else you <br/><span className="italic">might wonder.</span></h2>
            </div>
            <div className="space-y-4">
              <details 
                className={`group glass-card rounded-[2rem] overflow-hidden ${openIndex === 0 ? 'open' : ''}`}
                open={openIndex === 0}
                onClick={() => toggleAccordion(0)}
              >
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h3 className="text-xl font-extrabold tracking-tight">How does the community reinvestment fee work?</h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="1em" 
                    height="1em" 
                    viewBox="0 0 24 24"
                    className={`text-slate-400 transition-transform duration-300 ${openIndex === 0 ? 'rotate-180' : ''}`}
                  >
                    <path fill="currentColor" d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6l-1.41-1.41z"/>
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-slate-500 text-ultra-min leading-relaxed max-w-2xl">
                  We take a flat 5% fee from every transaction. Half of this goes towards platform maintenance, and the other half is directly reinvested into local neighborhood community events and artisan grants.
                </div>
              </details>
              <details 
                className={`group glass-card rounded-[2rem] overflow-hidden ${openIndex === 1 ? 'open' : ''}`}
                open={openIndex === 1}
                onClick={() => toggleAccordion(1)}
              >
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h3 className="text-xl font-extrabold tracking-tight">What if my item arrives damaged?</h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="1em" 
                    height="1em" 
                    viewBox="0 0 24 24"
                    className={`text-slate-400 transition-transform duration-300 ${openIndex === 1 ? 'rotate-180' : ''}`}
                  >
                    <path fill="currentColor" d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6l-1.41-1.41z"/>
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-slate-500 text-ultra-min leading-relaxed max-w-2xl">
                  Because we deal with unique handmade items, we handle damages with extra care. Contact the maker directly via your dashboard, or reach out to our support team within 48 hours for a full refund or replacement.
                </div>
              </details>
              <details 
                className={`group glass-card rounded-[2rem] overflow-hidden ${openIndex === 2 ? 'open' : ''}`}
                open={openIndex === 2}
                onClick={() => toggleAccordion(2)}
              >
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h3 className="text-xl font-extrabold tracking-tight">Can I sell items from multiple locations?</h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="1em" 
                    height="1em" 
                    viewBox="0 0 24 24"
                    className={`text-slate-400 transition-transform duration-300 ${openIndex === 2 ? 'rotate-180' : ''}`}
                  >
                    <path fill="currentColor" d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6l-1.41-1.41z"/>
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-slate-500 text-ultra-min leading-relaxed max-w-2xl">
                  Yes! Our Maker Pro accounts allow for multiple workshop locations, helping you manage local pickup and shipping logistics efficiently across different regions.
                </div>
              </details>
              <details 
                className={`group glass-card rounded-[2rem] overflow-hidden ${openIndex === 3 ? 'open' : ''}`}
                open={openIndex === 3}
                onClick={() => toggleAccordion(3)}
              >
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h3 className="text-xl font-extrabold tracking-tight">Do you offer gift wrapping?</h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="1em" 
                    height="1em" 
                    viewBox="0 0 24 24"
                    className={`text-slate-400 transition-transform duration-300 ${openIndex === 3 ? 'rotate-180' : ''}`}
                  >
                    <path fill="currentColor" d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6l-1.41-1.41z"/>
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-slate-500 text-ultra-min leading-relaxed max-w-2xl">
                  Many of our makers offer artisanal gift wrapping options. You'll see these choices at the checkout stage for each individual shop.
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="px-4">
          <div className="max-w-7xl mx-auto glass rounded-4xl p-12 md:p-24 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
              <div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">Still need <br/><span className="text-primary italic">human help?</span></h2>
                <p className="text-slate-500 text-xl text-ultra-min leading-relaxed max-w-md mb-12">
                  Our support team is made up of real people from our community. We're here to help you thrive.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Us</p>
                      <p className="text-lg font-extrabold">hello@localmarket.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4l4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 12H6v-2h12v2m0-3H6v-2h12v2m0-3H6V6h12v2"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live Chat</p>
                      <p className="text-lg font-extrabold">Mon-Fri, 9am - 6pm EST</p>
                    </div>
                  </div>
                </div>
                <div className="mt-16 flex gap-6">
                  <a className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="glass-card rounded-4xl p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-4">Name</label>
                      <input 
                        className="w-full glass rounded-2xl border-none focus:ring-2 focus:ring-primary/20 py-4 px-6 text-sm font-bold" 
                        placeholder="Jane Doe" 
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-4">Order ID</label>
                      <input 
                        className="w-full glass rounded-2xl border-none focus:ring-2 focus:ring-primary/20 py-4 px-6 text-sm font-bold" 
                        placeholder="#LM-12345" 
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-4">Subject</label>
                    <select className="w-full glass rounded-2xl border-none focus:ring-2 focus:ring-primary/20 py-4 px-6 text-sm font-bold appearance-none">
                      <option>Shipping Inquiry</option>
                      <option>Return Request</option>
                      <option>Selling Help</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-4">Message</label>
                    <textarea 
                      className="w-full glass rounded-2xl border-none focus:ring-2 focus:ring-primary/20 py-4 px-6 text-sm font-bold resize-none" 
                      placeholder="Tell us how we can help..." 
                      rows="4"
                    ></textarea>
                  </div>
                  <button className="btn-gradient w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em]">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ >
  );
}