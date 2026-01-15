import MarketplaceLayout from "@/components/MarketplaceLayout";
import { FaSearch, FaArrowRight, FaTh, FaCalendarAlt } from "react-icons/fa";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { BiSolidCategoryAlt, BiLogOut } from "react-icons/bi";
import { CiLocationOn, CiHeart, CiStar } from "react-icons/ci";
import { PiTagLight } from "react-icons/pi";

export default function EventsWorkshopsPage() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 pt-16 pb-24 space-y-16">
        <section className="relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6">
                Learn &amp; Connect
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
                Community Events <br />
                <span className="text-accent italic">&amp; Workshops.</span>
              </h1>

              <p className="text-slate-500 text-lg md:text-xl text-ultra-min leading-relaxed">
                Gather with neighbors to master new skills, share stories, and
                support the local artisans who make our city vibrant.
              </p>
            </div>
            <div className="flex items-center glass p-2 rounded-3xl gap-2">
              <button className="bg-white dark:bg-slate-800 shadow-sm px-6 py-3 rounded-2xl flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <FaTh className="text-sm" />
                Grid View
              </button>
              <button className="px-6 py-3 rounded-2xl flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
                <FaCalendarAlt className="text-sm" />
                Calendar
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-wrap items-center gap-4">
          <button className="px-8 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-widest">
            All Events
          </button>
          <button className="px-8 py-3 rounded-2xl glass hover:bg-white/60 transition-colors text-[10px] font-black uppercase tracking-widest text-slate-500">
            Crafts
          </button>
          <button className="px-8 py-3 rounded-2xl glass hover:bg-white/60 transition-colors text-[10px] font-black uppercase tracking-widest text-slate-500">
            Food &amp; Drink
          </button>
          <button className="px-8 py-3 rounded-2xl glass hover:bg-white/60 transition-colors text-[10px] font-black uppercase tracking-widest text-slate-500">
            Music
          </button>
          <button className="px-8 py-3 rounded-2xl glass hover:bg-white/60 transition-colors text-[10px] font-black uppercase tracking-widest text-slate-500">
            Wellness
          </button>
        </section>
        <section className="bento-grid-events">
          <div className="col-span-1 md:col-span-2 row-span-2 group relative overflow-hidden rounded-4xl glass-card">
            <img
              alt="Pottery Workshop"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDklwf4gLkT5w1nRL3HeyYm4F6NML6_NTndBlJpM4rOoYPZBRMhtjTxF1h4PM2OqAVdA0htYqOo_2rJNN6aEXd67tDmcddPpACYr2wHz9neAg3z_h6sMdCutaqFbeRGK7Q2Zz7R7iimac5eM-2CVLjoCr_ICJPv8lLMsyI_eogb5OZhKVWpSwHiE4HV4Nexbdg87Jt-wSMaYjoSc6Yw4r4al3WC_X0tUNR6MGUKdY2oodZ80u7JLW_3ykpHm_gOPrecvj1PY-FO4Pw0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
            <div className="absolute top-8 left-8 flex gap-3">
              <div className="glass px-4 py-2 rounded-2xl flex flex-col items-center min-w-[60px]">
                <span className="text-white text-xl font-extrabold">24</span>
                <span className="text-white/60 text-[9px] font-black uppercase tracking-widest">
                  JUN
                </span>
              </div>
              <div className="glass px-4 py-2 rounded-2xl flex items-center">
                <span className="text-white text-[10px] font-black uppercase tracking-widest">
                  Crafts
                </span>
              </div>
            </div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex justify-between items-end mb-4">
                <div className="space-y-2">
                  <h3 className="text-white text-4xl font-extrabold tracking-tighter leading-none">
                    Mastering the Wheel: <br />
                    Advanced Ceramics
                  </h3>
                  <p className="text-white/60 text-sm text-ultra-min">
                    3-hour intensive session with Clara Evans.
                  </p>
                </div>
                <div className="text-white text-3xl font-black">$85</div>
              </div>
              <button className="btn-gradient w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em]">
                Register Now
              </button>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 row-span-1 group relative overflow-hidden rounded-4xl glass-card p-6 flex flex-col">
            <div className="relative flex-1 rounded-3xl overflow-hidden mb-6">
              <img
                alt="Coffee Tasting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlCYcBcwVS2-qeAFRUNeZQu_VO616aeLydBPKsXmLfsOTFxFnDncIv8KgrY24IxsdlPFyvPzAv3VreAt6ax1eo9GhL9fO1AwQqPUjj19YXkPhEyNl728vgqCEnV3CpLgHW0hboxZ5M-IOW0Nll3ELhTBNvZfRaSGBaXTXXqzYV2f7BZ7OM2_RV9RL8t2SWnWUqSekFzIEBwvxvUX2i15D1_xD3ggUrncjNiPa0xp-i9d3ATNNXnwA-4k8gIKkNBVzlMuP_PsbRiuAs"
              />
              <div className="absolute top-3 left-3 glass px-3 py-1 rounded-full text-[9px] font-black text-white uppercase">
                Food
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    JUN 26 • 10:00 AM
                  </p>
                  <h3 className="font-extrabold text-xl tracking-tight">
                    Artisan Roasting
                  </h3>
                </div>
                <span className="font-black text-lg">$25</span>
              </div>
              <button className="w-full glass py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                View Details
              </button>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 row-span-1 group relative overflow-hidden rounded-4xl glass-card p-6 flex flex-col">
            <div className="relative flex-1 rounded-3xl overflow-hidden mb-6">
              <img
                alt="Live Music"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlCYcBcwVS2-qeAFRUNeZQu_VO616aeLydBPKsXmLfsOTFxFnDncIv8KgrY24IxsdlPFyvPzAv3VreAt6ax1eo9GhL9fO1AwQqPUjj19YXkPhEyNl728vgqCEnV3CpLgHW0hboxZ5M-IOW0Nll3ELhTBNvZfRaSGBaXTXXqzYV2f7BZ7OM2_RV9RL8t2SWnWUqSekFzIEBwvxvUX2i15D1_xD3ggUrncjNiPa0xp-i9d3ATNNXnwA-4k8gIKkNBVzlMuP_PsbRiuAs"
              />
              <div className="absolute top-3 left-3 glass px-3 py-1 rounded-full text-[9px] font-black text-white uppercase">
                Music
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    JUN 28 • 07:00 PM
                  </p>
                  <h3 className="font-extrabold text-xl tracking-tight">
                    Garden Acoustics
                  </h3>
                </div>
                <span className="font-black text-lg">Free</span>
              </div>
              <button className="w-full glass py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                RSVP
              </button>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 row-span-1 group relative overflow-hidden rounded-4xl glass-card flex p-6 gap-8">
            <div className="w-2/5 rounded-3xl overflow-hidden relative">
              <img
                alt="Textile Workshop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYlTPiLNtb5pCTuWmXayuuTxioinLlR_Pdch6fkUxYrafUswYExQzaM14crCAIW6wPVxQql03CCoIO3cu5C9TqpB_hvGtXtgiOBzAZ7x5KaxxpojPMdFFU_QsJpQ0Cp8xuryYbKQ-96e0IjNn1E5-E05H2i7Y3VJyvu1jlraG98NguJW--Wcj38ht22TWT0-cD9MRjKYOip0xtwYholNNIbK0Ih7TFL15eWz52Q78lM9PzCCG4jjQ40RShUVllSS1UGozBQCpS7l61"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="w-3/5 flex flex-col justify-center">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">
                Weekend Special
              </span>
              <h3 className="text-3xl font-extrabold tracking-tighter mb-2">
                Sustainable Weaving
              </h3>
              <p className="text-slate-500 text-sm text-ultra-min mb-6">
                Learn traditional loom techniques with modern eco-friendly
                materials.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-xl font-black text-slate-900">$45</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Materials Included
                  </span>
                </div>
                <button className="btn-gradient px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest">
                  Register
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-12">
          <div className="glass-card rounded-4xl p-12 md:p-20 relative overflow-hidden text-center">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="text-primary text-5xl mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5 9v-1h12v1c0 1.66-1.34 3-3 3H9c-1.66 0-3-1.34-3-3"
                  />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
                Host your own event.
              </h2>
              <p className="text-slate-500 text-lg text-ultra-min mb-10">
                Are you a maker, teacher, or community leader? Share your
                passion with the neighborhood using our platform tools.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-gradient px-10 py-5 rounded-3xl font-extrabold text-sm uppercase tracking-widest">
                  Apply to Host
                </button>
                <button className="glass px-10 py-5 rounded-3xl font-extrabold text-sm text-slate-900 uppercase tracking-widest hover:bg-white transition-all">
                  Download Guide
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
