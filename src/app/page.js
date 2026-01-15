
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="relative min-h-[70vh] rounded-[3rem] overflow-hidden flex items-center p-8 md:p-20">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCztU07lj-lOs543ewzI1LDIU-O3P8wMOJ_FQjoZn4tFCNmTJRMB_YbunqL1ftWf4IGmx54mcFSvVGPrjXoK_YNucfZEA6pgYzBdFpz4C8Rlo6_Ux13OduDg5-l-Csvb4OX3IaZCh-cfXtz0EhrYOfTqvzFVgLSqT44-XGD7sSbgV9RJqxp09k7ls3lNP07Y-sIa7jDHpUQGRzO21JWSjCJnSqNKAmKa-KquP--fyPmAN_QUvHcHTNF2VdAZzawULv_ZgHA4_2_zaU-")'}}
          ></div>
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"></div>
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">Support Local Culture</span>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              The future of commerce <span className="text-accent italic">is local.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-12 text-ultra-min leading-relaxed max-w-lg">
              Curated goods from the world's most talented neighborhood artisans. 
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-gradient px-10 py-5 rounded-[2rem] font-extrabold text-sm uppercase tracking-widest">
                Explore Marketplace
              </Link>
              <Link href="#" className="glass px-10 py-5 rounded-[2rem] font-extrabold text-sm text-white uppercase tracking-widest hover:bg-white/20 transition-all">
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="glass rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-2">1,200+</div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Artisans Supported</p>
          </div>
          <div className="w-px h-16 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-2">$50k+</div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Reinvested Locally</p>
          </div>
          <div className="w-px h-16 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-7xl font-extrabold tracking-tighter text-accent mb-2">5,000+</div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Unique Products</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Curated</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Shop Categories</h2>
          </div>
          <Link className="text-xs font-black uppercase tracking-widest border-b-2 border-primary pb-1" href="#">View Archive</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] glass-card">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDklwf4gLkT5w1nRL3HeyYm4F6NML6_NTndBlJpM4rOoYPZBRMhtjTxF1h4PM2OqAVdA0htYqOo_2rJNN6aEXd67tDmcddPpACYr2wHz9neAg3z_h6sMdCutaqFbeRGK7Q2Zz7R7iimac5eM-2CVLjoCr_ICJPv8lLMsyI_eogb5OZhKVWpSwHiE4HV4Nexbdg87Jt-wSMaYjoSc6Yw4r4al3WC_X0tUNR6MGUKdY2oodZ80u7JLW_3ykpHm_gOPrecvj1PY-FO4Pw0")'}}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white text-3xl font-extrabold tracking-tighter mb-2">Handmade</h3>
              <p className="text-white/60 text-sm text-ultra-min">The finest clay and textile works.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-[2.5rem] glass-card">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMk9pEDgpT0gULMi3nVWHLsNJyv9gZeJWaR11jkMmdK5esHvLAOAjIsTpB6ECfco_q5uTMi2-ELcyLNalzOu0gBQj2VvNrbY0hMvAgFEholoo9ZQjDoccQ5K4TpjuyCUX2EgQxEoO12-xekceBWE7pEuJnk7dPIkMttoha8FcbsSicFrQ09rZZZmKcLow7F7SttTVryurK16wiKh82suJWoDmAtZSbhYA_vIfdRg2lxZQTAgZmXix0JbDkmJEDFc5wqUymavCj2Sra")'}}
            ></div>
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-extrabold tracking-tighter">Clothing</h3>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-[2.5rem] glass-card">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9X_CZQCi1laSfSr-_pLrLxxOJvTsMoNyT71Dkyev-ZbbtH2PgkPZCsgBQOG4ennY0VUTDOo-ohRkvjxdWTxGUNNcX-yZhybrajXHmH-ZtehLTn7ODcLfjZeZZ35Iiut8Z_tynIWocJAMxA4mDYlEh7DDXSkOU806CM3onTq-kCcWOdNCdPuYLOrOmuzzvlzEKb8JheNZlN1moUL_urWd3g0PE3hJ82USCsnrS4D-fBuZ4vmAA1LG5LAwMPIoL8Qce14hWbN1C85rW")'}}
            ></div>
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-extrabold tracking-tighter">Electronics</h3>
            </div>
          </div>
          <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] glass-card">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlCYcBcwVS2-qeAFRUNeZQu_VO616aeLydBPKsXmLfsOTFxFnDncIv8KgrY24IxsdlPFyvPzAv3VreAt6ax1eo9GhL9fO1AwQqPUjj19YXkPhEyNl728vgqCEnV3CpLgHW0hboxZ5M-IOW0Nll3ELhTBNvZfRaSGBaXTXXqzYV2f7BZ7OM2_RV9RL8t2SWnWUqSekFzIEBwvxvUX2i15D1_xD3ggUrncjNiPa0xp-i9d3ATNNXnwA-4k8gIKkNBVzlMuP_PsbRiuAs")'}}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-2xl font-extrabold tracking-tighter">Gourmet Food & Drink</h3>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="glass rounded-[4rem] p-12 md:p-20">
          <div className="max-w-3xl mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Human-Centric</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">Meet the Makers</h2>
            <p className="text-slate-500 text-lg text-ultra-min leading-relaxed">Discover the faces and stories behind your favorite handcrafted pieces. Our community is built on people, not algorithms.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="relative mb-8 rounded-[3rem] overflow-hidden aspect-[4/5] glass-card">
                <div 
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYaSqTVFX2TyYPRRi57kiHDh2PgtRuqWhu4ynygA02sPgK8kXNEQ7CENM91f4B-nHfhSCKIqw5sp-_UU9RzWhAu6aB9pjtTE7Dq25dASG7TjCUJDQKHHzC_HCHaD2mwmUTzG7vjcsiEk0zG9siYG5EpGX18S9isZr5CZW6J4vsUvOjmAewW98FCJoytIleP_16rdkrw7Ph9JtzZMB21KLMQV6SjtWWuZAd3FYeaayqGhPw95DAs2BZiSpmPVg4xP6__HhfXphakq7l")'}}
                ></div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-extrabold tracking-tighter mb-1">Clara Evans</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Master Ceramicist</p>
              <p className="text-slate-500 text-sm text-ultra-min leading-relaxed">Crafting stories through clay for over 15 years in her quiet backyard studio.</p>
            </div>
            <div className="group">
              <div className="relative mb-8 rounded-[3rem] overflow-hidden aspect-[4/5] glass-card">
                <div 
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZU4O4VZzzSy4jVu_yazTAwEGNL7wN1GKkR7YZkjCDdRxm1YANksmfRKWOSbO3oSsoTy-SiczJRgHTkRzni7YfHQEQVE-6dMO0tPLjK2fZgsioCvOZ2wAtSC2X5hAd43EM1JCGXtZRv1oa015FWEC7Cjm5n-2AUxNdKDe1KocpVixo07TVxZLb1E0Iagxi3WNNxWfr8PzgfleTg85nkGYaOd4Wemg97DietDwstEVa6MO2vJ1QqoKKmYMWAcRENTy014yzT_Cjy6yg")'}}
                ></div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-extrabold tracking-tighter mb-1">Julian Rivers</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Woodworker</p>
              <p className="text-slate-500 text-sm text-ultra-min leading-relaxed">Transforming fallen local timber into modern heirlooms for the next generation.</p>
            </div>
            <div className="group">
              <div className="relative mb-8 rounded-[3rem] overflow-hidden aspect-[4/5] glass-card">
                <div 
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYlTPiLNtb5pCTuWmXayuuTxioinLlR_Pdch6fkUxYrafUswYExQzaM14crCAIW6wPVxQql03CCoIO3cu5C9TqpB_hvGtXtgiOBzAZ7x5KaxxpojPMdFFU_QsJpQ0Cp8xuryYbKQ-96e0IjNn1E5-E05H2i7Y3VJyvu1jlraG98NguJW--Wcj38ht22TWT0-cD9MRjKYOip0xtwYholNNIbK0Ih7TFL15eWz52Q78lM9PzCCG4jjQ40RShUVllSS1UGozBQCpS7l61")'}}
                ></div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-extrabold tracking-tighter mb-1">Maya Thorne</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Textile Designer</p>
              <p className="text-slate-500 text-sm text-ultra-min leading-relaxed">Sustainable weaving techniques meeting bold, modern color palettes.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">New Arrivals</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Featured Drops</h2>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors">
              <FaChevronLeft className="text-lg" />
            </button>
            <button className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors">
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[400px]">
          <div className="md:col-span-1 glass-card rounded-[2.5rem] p-6 flex flex-col group">
            <div className="relative flex-1 rounded-3xl overflow-hidden mb-6">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdocsehkq_8IeOlJkNP5f1QsHfSrnW_z2oo1LzF8P3yoWadr3X8jQdq2jpWfoKWXYK7QLPtUE9rtSzfhaFo0Op8Z9VoZMcOcbH29r4xZImWApk166rnRDR8Uk5pj8STzlTYB3-BL9q7SecCfhZJ93PXCtX2kjSxXXXpU_ncAnbZ_opkVsSWZfcsohosg0a3IJLckx6mqFcD13zdsOH8xKCpIVYI03422N_vqL5UzLgkF_Wx5M5L6k3P6Pzf5UsU8PDW0teQyGKNeb7")'}}
              ></div>
              <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-black uppercase text-white">New</div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-extrabold text-lg tracking-tight">Earthy Soy Candle</h3>
                <span className="text-primary font-black">$24</span>
              </div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Wick & Wax</p>
              <button className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] group-hover:bg-primary transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="md:col-span-1 glass-card rounded-[2.5rem] p-6 flex flex-col group">
            <div className="relative flex-1 rounded-3xl overflow-hidden mb-6">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDW8btLfGdjO-Nn9SCRYwh8TB4wPr4cmfSWX9bihmCcSG95IlNXQn-K6YxXaqMsYJOyAJSpZceHYgCFlKaD2eXpPpYLjqoA7w9ueLNX-X4TiOJjiKX4YQALMnHFHI-3Ba-Ii9vcoYxTJ1Tqxrq0axAwCcP1ELBNK-12XF5-iFat1-0_11Pyd-J5_k_gfMyEhmPNqZn0GGxq-naWTrOPkdqYtYcZnQU4T9O446HlvTH4rXpVfKQ5iyeO30Sa4UipZDlo-n0Lu7PQN9xM")'}}
              ></div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-extrabold text-lg tracking-tight">Linen Tote Bag</h3>
                <span className="text-primary font-black">$35</span>
              </div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Green Stitch</p>
              <button className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] group-hover:bg-primary transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="md:col-span-2 glass-card rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 group">
            <div className="relative flex-1 rounded-3xl overflow-hidden min-h-[200px]">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBf3nUsjmTuB4EwowqpAY8fonWOaC43VIBnim-wvnKqEVfxXdChZT62YGTNk1iyvdXU5ASki8ZKluThnkDDBJZIDxwF7mD30VRbmwlxbDztltKJVInE2E3GAu5gJWYSPtEGcTUTdZ5rM--yQp8E_mytgCefZwpqqZiUZxmXhwdtlrHW61pU1f-Hz_yz_UQILkMl5OwgkhKCZDZ1XYPEU8OLC9xBavlF1V7trAWmh8Ji9FSBjIqdIOShljzcN4I1YBX2zAWEadW6z83t")'}}
              ></div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Featured Piece</p>
              <h3 className="text-3xl font-extrabold tracking-tighter mb-2">Hand-Painted Ceramic Bowl</h3>
              <p className="text-slate-500 text-sm text-ultra-min mb-6">One-of-a-kind breakfast bowl, double-glazed for a unique textured finish.</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mb-8">$18</div>
              <button className="btn-gradient w-full py-5 rounded-3xl text-xs font-black uppercase tracking-[0.2em]">
                Shop this drop
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 py-12">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Gather</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">Local Events & Workshops</h2>
            <p className="text-slate-500 text-lg text-ultra-min mb-8">Reconnect with your community through hands-on learning and seasonal markets.</p>
            <button className="glass px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-all">
              Full Calendar
            </button>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-[2.5rem] p-8 group relative overflow-hidden h-[300px] flex flex-col justify-end">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDklwf4gLkT5w1nRL3HeyYm4F6NML6_NTndBlJpM4rOoYPZBRMhtjTxF1h4PM2OqAVdA0htYqOo_2rJNN6aEXd67tDmcddPpACYr2wHz9neAg3z_h6sMdCutaqFbeRGK7Q2Zz7R7iimac5eM-2CVLjoCr_ICJPv8lLMsyI_eogb5OZhKVWpSwHiE4HV4Nexbdg87Jt-wSMaYjoSc6Yw4r4al3WC_X0tUNR6MGUKdY2oodZ80u7JLW_3ykpHm_gOPrecvj1PY-FO4Pw0")'}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="glass px-3 py-1 rounded-full text-[10px] font-black text-white">JUN 15</span>
                  <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Workshop</span>
                </div>
                <h3 className="text-white text-2xl font-extrabold tracking-tighter mb-4">Summer Pottery Workshop</h3>
                <Link className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                  Learn More <FaArrowRight className="text-lg" />
                </Link>
              </div>
            </div>
            <div className="glass-card rounded-[2.5rem] p-8 group relative overflow-hidden h-[300px] flex flex-col justify-end">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlCYcBcwVS2-qeAFRUNeZQu_VO616aeLydBPKsXmLfsOTFxFnDncIv8KgrY24IxsdlPFyvPzAv3VreAt6ax1eo9GhL9fO1AwQqPUjj19YXkPhEyNl728vgqCEnV3CpLgHW0hboxZ5M-IOW0Nll3ELhTBNvZfRaSGBaXTXXqzYV2f7BZ7OM2_RV9RL8t2SWnWUqSekFzIEBwvxvUX2i15D1_xD3ggUrncjNiPa0xp-i9d3ATNNXnwA-4k8gIKkNBVzlMuP_PsbRiuAs")'}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="glass px-3 py-1 rounded-full text-[10px] font-black text-white">JUN 22</span>
                  <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Community</span>
                </div>
                <h3 className="text-white text-2xl font-extrabold tracking-tighter mb-4">Community Farmers Market</h3>
                <Link className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                  Learn More <FaArrowRight className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="btn-gradient rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-black/5 rounded-full blur-[100px] -ml-40 -mb-40"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-10 max-w-4xl mx-auto">
              Be the heart of your <span className="text-slate-900">neighborhood.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-primary px-12 py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl">
                Start Shopping
              </button>
              <button className="bg-slate-900 text-white px-12 py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl">
                Become a Maker
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
