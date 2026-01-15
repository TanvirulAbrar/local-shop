import MarketplaceLayout from '@/components/MarketplaceLayout';
import { FaSearch,  FaArrowRight } from 'react-icons/fa';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import { BiSolidCategoryAlt, BiLogOut } from 'react-icons/bi';
import { CiLocationOn, CiHeart, CiStar } from 'react-icons/ci';
import { PiTagLight } from 'react-icons/pi';

export default function MissionImpactPage() {
  return (
    < >
      <main className="space-y-32 pb-32">
        <section className="px-4 pt-16">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">Rooted in Community</span>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              We exist to keep <br/><span className="text-primary italic">commerce human.</span>
            </h1>
            <p className="text-slate-500 text-xl md:text-2xl text-ultra-min leading-relaxed max-w-2xl mx-auto">
              Building a bridge between talented neighborhood artisans and a global audience that values craft over convenience.
            </p>
          </div>
        </section>
        <section className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary text-white p-12 rounded-[3rem] shadow-2xl shadow-primary/20 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70 mb-4">Reinvested Locally</p>
                <div className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-4">$2.4M</div>
                <p className="text-sm font-medium opacity-80 leading-relaxed">Direct capital returned to small business owners in our partner neighborhoods this year.</p>
              </div>
              <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl shadow-slate-900/10 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70 mb-4">Artisans Supported</p>
                <div className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-4">1,850+</div>
                <p className="text-sm font-medium opacity-80 leading-relaxed">Independent makers who have expanded their reach and secured their craft's future.</p>
              </div>
              <div className="glass-card p-12 rounded-[3rem] border-slate-200/60 relative overflow-hidden group">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Community Reach</p>
                <div className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-4">42</div>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">Unique neighborhoods across the country where local economies are thriving through our platform.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
                  <img 
                    alt="Artisan at work" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCztU07lj-lOs543ewzI1LDIU-O3P8wMOJ_FQjoZn4tFCNmTJRMB_YbunqL1ftWf4IGmx54mcFSvVGPrjXoK_YNucfZEA6pgYzBdFpz4C8Rlo6_Ux13OduDg5-l-Csvb4OX3IaZCh-cfXtz0EhrYOfTqvzFVgLSqT44-XGD7sSbgV9RJqxp09k7ls3lNP07Y-sIa7jDHpUQGRzO21JWSjCJnSqNKAmKa-KquP--fyPmAN_QUvHcHTNF2VdAZzawULv_ZgHA4_2_zaU-" 
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-[3rem] overflow-hidden border-8 border-white shadow-xl hidden md:block">
                  <img 
                    alt="Craft detail" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDklwf4gLkT5w1nRL3HeyYm4F6NML6_NTndBlJpM4rOoYPZBRMhtjTxF1h4PM2OqAVdA0htYqOo_2rJNN6aEXd67tDmcddPpACYr2wHz9neAg3z_h6sMdCutaqFbeRGK7Q2Zz7R7iimac5eM-2CVLjoCr_ICJPv8lLMsyI_eogb5OZhKVWpSwHiE4HV4Nexbdg87Jt-wSMaYjoSc6Yw4r4al3WC_X0tUNR6MGUKdY2oodZ80u7JLW_3ykpHm_gOPrecvj1PY-FO4Pw0" 
                  />
                </div>
              </div>
              <div className="space-y-8 lg:pl-12">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Our Story</p>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">It started in a small <br/><span className="text-slate-400">ceramic studio.</span></h2>
                <p className="text-slate-500 text-lg text-ultra-min leading-relaxed">
                  In 2018, we noticed a disconnect. Incredible talent was hiding in plain sight—in back garages, rented studios, and kitchen tables. These makers weren't looking for fame; they were looking for a way to sustain their passion.
                </p>
                <p className="text-slate-500 text-lg text-ultra-min leading-relaxed">
                  We built local. as a digital town square. Not just a storefront, but a storytelling engine that preserves the heritage of handmade goods while providing the infrastructure modern businesses need to scale.
                </p>
                <div className="pt-4">
                  <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary transition-all">
                    Read the Manifesto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4">
          <div className="max-w-7xl mx-auto glass-card rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
            <div className="max-w-3xl relative z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">The Local Foundation</p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8">Investing in the next generation of craft.</h2>
              <p className="text-slate-500 text-xl text-ultra-min leading-relaxed mb-12">
                5% of every transaction goes directly into the Local Foundation, providing interest-free micro-loans and studio space grants for emerging artisans in underserved communities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg mb-2">Apprenticeships</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Funding 6-month programs for youth to learn traditional trades from master makers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.41.55-.19 1.3.44 1.3h14.72c.64 0 .85-.75.44-1.3z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg mb-2">Equipment Grants</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Providing the tools and technology needed to modernize artisanal production.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4">
          <div className="max-w-7xl mx-auto btn-gradient rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-black blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-10 max-w-4xl mx-auto">
                Help us build a <span className="text-slate-900">better economy.</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-white text-primary px-12 py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl">
                  Shop Small
                </button>
                <button className="bg-slate-900 text-white px-12 py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl">
                  Become a Partner
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ >
  );
}