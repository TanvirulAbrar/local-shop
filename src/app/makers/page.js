import MarketplaceLayout from '@/components/MarketplaceLayout';
import { FaSearch,  FaArrowRight, FaFilter } from 'react-icons/fa';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import { BiSolidCategoryAlt, BiLogOut } from 'react-icons/bi';
import { CiLocationOn, CiHeart, CiStar } from 'react-icons/ci';
import { PiTagLight } from 'react-icons/pi';

export default function MakersPage() {
  return (
    < >
      <main className="max-w-7xl mx-auto px-4 pt-16 pb-32">
        <section className="mb-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6">The Community</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              Meet the <span className="text-primary italic">Makers</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl text-ultra-min leading-relaxed">
              Celebrating the skilled hands and creative minds that define our local culture. Every piece tells a story, every story starts with a maker.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4 items-center">
            <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest">All Artisans</button>
            <button className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Ceramics</button>
            <button className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Textiles</button>
            <button className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Woodworking</button>
            <button className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Jewelry</button>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <article className="artisan-card group">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 mb-10">
                <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                  <img 
                    alt="Clara Evans" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYaSqTVFX2TyYPRRi57kiHDh2PgtRuqWhu4ynygA02sPgK8kXNEQ7CENM91f4B-nHfhSCKIqw5sp-_UU9RzWhAu6aB9pjtTE7Dq25dASG7TjCUJDQKHHzC_HCHaD2mwmUTzG7vjcsiEk0zG9siYG5EpGX18S9isZr5CZW6J4vsUvOjmAewW98FCJoytIleP_16rdkrw7Ph9JtzZMB21KLMQV6SjtWWuZAd3FYeaayqGhPw95DAs2BZiSpmPVg4xP6__HhfXphakq7l" 
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Master Ceramicist</span>
                    <h3 className="text-3xl font-extrabold tracking-tighter mb-4">Clara Evans</h3>
                    <p className="text-slate-500 text-sm leading-relaxed text-ultra-min italic mb-6">
                      "Clay is a living medium that responds to your mood. I don't just shape it; we collaborate to create something timeless."
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-ultra-min">
                      Based in the quiet suburbs of Portland, Clara has spent 15 years perfecting her unique double-glazing technique that creates a celestial finish on every piece.
                    </p>
                  </div>
                  <div className="pt-6">
                    <button className="btn-gradient w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                      View Shop < FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Latest Work</h4>
                <div className="grid grid-cols-3 gap-4">
                  <img 
                    alt="Work 1" 
                    className="gallery-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf3nUsjmTuB4EwowqpAY8fonWOaC43VIBnim-wvnKqEVfxXdChZT62YGTNk1iyvdXU5ASki8ZKluThnkDDBJZIDxwF7mD30VRbmwlxbDztltKJVInE2E3GAu5gJWYSPtEGcTUTdZ5rM--yQp8E_mytgCefZwpqqZiUZxmXhwdtlrHW61pU1f-Hz_yz_UQILkMl5OwgkhKCZDZ1XYPEU8OLC9xBavlF1V7trAWmh8Ji9FSBjIqdIOShljzcN4I1YBX2zAWEadW6z83t" 
                  />
                  <img 
                    alt="Work 2" 
                    className="gallery-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdocsehkq_8IeOlJkNP5f1QsHfSrnW_z2oo1LzF8P3yoWadr3X8jQdq2jpWfoKWXYK7QLPtUE9rtSzfhaFo0Op8Z9VoZMcOcbH29r4xZImWApk166rnRDR8Uk5pj8STzlTYB3-BL9q7SecCfhZJ93PXCtX2kjSxXXXpU_ncAnbZ_opkVsSWZfcsohosg0a3IJLckx6mqFcD13zdsOH8xKCpIVYI03422N_vqL5UzLgkF_Wx5M5L6k3P6Pzf5UsU8PDW0teQyGKNeb7" 
                  />
                  <img 
                    alt="Work 3" 
                    className="gallery-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDklwf4gLkT5w1nRL3HeyYm4F6NML6_NTndBlJpM4rOoYPZBRMhtjTxF1h4PM2OqAVdA0htYqOo_2rJNN6aEXd67tDmcddPpACYr2wHz9neAg3z_h6sMdCutaqFbeRGK7Q2Zz7R7iimac5eM-2CVLjoCr_ICJPv8lLMsyI_eogb5OZhKVWpSwHiE4HV4Nexbdg87Jt-wSMaYjoSc6Yw4r4al3WC_X0tUNR6MGUKdY2oodZ80u7JLW_3ykpHm_gOPrecvj1PY-FO4Pw0" 
                  />
                </div>
              </div>
            </div>
          </article>
          <article className="artisan-card group">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 mb-10">
                <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                  <img 
                    alt="Julian Rivers" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZU4O4VZzzSy4jVu_yazTAwEGNL7wN1GKkR7YZkjCDdRxm1YANksmfRKWOSbO3oSsoTy-SiczJRgHTkRzni7YfHQEQVE-6dMO0tPLjK2fZgsioCvOZ2wAtSC2X5hAd43EM1JCGXtZRv1oa015FWEC7Cjm5n-2AUxNdKDe1KocpVixo07TVxZLb1E0Iagxi3WNNxWfr8PzgfleTg85nkGYaOd4Wemg97DietDwstEVa6MO2vJ1QqoKKmYMWAcRENTy014yzT_Cjy6yg" 
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Woodworker</span>
                    <h3 className="text-3xl font-extrabold tracking-tighter mb-4">Julian Rivers</h3>
                    <p className="text-slate-500 text-sm leading-relaxed text-ultra-min italic mb-6">
                      "Every piece of wood has a previous life. My job is simply to help it find its next one in your home."
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-ultra-min">
                      Julian sources exclusively from fallen timber in the local valley, transforming salvaged oak and maple into modern heirlooms using traditional hand-tool methods.
                    </p>
                  </div>
                  <div className="pt-6">
                    <button className="btn-gradient w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                      View Shop < FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Latest Work</h4>
                <div className="grid grid-cols-3 gap-4">
                  <img 
                    alt="Work 1" 
                    className="gallery-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9X_CZQCi1laSfSr-_pLrLxxOJvTsMoNyT71Dkyev-ZbbtH2PgkPZCsgBQOG4ennY0VUTDOo-ohRkvjxdWTxGUNNcX-yZhybrajXHmH-ZtehLTn7ODcLfjZeZZ35Iiut8Z_tynIWocJAMxA4mDYlEh7DDXSkOU806CM3onTq-kCcWOdNCdPuYLOrOmuzzvlzEKb8JheNZlN1moUL_urWd3g0PE3hJ82USCsnrS4D-fBuZ4vmAA1LG5LAwMPIoL8Qce14hWbN1C85rW" 
                  />
                  <img 
                    alt="Work 2" 
                    className="gallery-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDklwf4gLkT5w1nRL3HeyYm4F6NML6_NTndBlJpM4rOoYPZBRMhtjTxF1h4PM2OqAVdA0htYqOo_2rJNN6aEXd67tDmcddPpACYr2wHz9neAg3z_h6sMdCutaqFbeRGK7Q2Zz7R7iimac5eM-2CVLjoCr_ICJPv8lLMsyI_eogb5OZhKVWpSwHiE4HV4Nexbdg87Jt-wSMaYjoSc6Yw4r4al3WC_X0tUNR6MGUKdY2oodZ80u7JLW_3ykpHm_gOPrecvj1PY-FO4Pw0" 
                  />
                  <img 
                    alt="Work 3" 
                    className="gallery-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf3nUsjmTuB4EwowqpAY8fonWOaC43VIBnim-wvnKqEVfxXdChZT62YGTNk1iyvdXU5ASki8ZKluThnkDDBJZIDxwF7mD30VRbmwlxbDztltKJVInE2E3GAu5gJWYSPtEGcTUTdZ5rM--yQp8E_mytgCefZwpqqZiUZxmXhwdtlrHW61pU1f-Hz_yz_UQILkMl5OwgkhKCZDZ1XYPEU8OLC9xBavlF1V7trAWmh8Ji9FSBjIqdIOShljzcN4I1YBX2zAWEadW6z83t" 
                  />
                </div>
              </div>
            </div>
          </article>
          <article className="artisan-card group">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 mb-10">
                <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                  <img 
                    alt="Maya Thorne" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYlTPiLNtb5pCTuWmXayuuTxioinLlR_Pdch6fkUxYrafUswYExQzaM14crCAIW6wPVxQql03CCoIO3cu5C9TqpB_hvGtXtgiOBzAZ7x5KaxxpojPMdFFU_QsJpQ0Cp8xuryYbKQ-96e0IjNn1E5-E05H2i7Y3VJyvu1jlraG98NguJW--Wcj38ht22TWT0-cD9MRjKYOip0xtwYholNNIbK0Ih7TFL15eWz52Q78lM9PzCCG4jjQ40RShUVllSS1UGozBQCpS7l61" 
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Textile Designer</span>
                    <h3 className="text-3xl font-extrabold tracking-tighter mb-4">Maya Thorne</h3>
                    <p className="text-slate-500 text-sm leading-relaxed text-ultra-min italic mb-6">
                      "Color is an emotion you can touch. I weave vibrancy into the everyday fabrics of our lives."
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-ultra-min">
                      Maya blends ancient loom techniques with sustainable organic dyes to create textiles that are as environmentally conscious as they are visually striking.
                    </p>
                  </div>
                  <div className="pt-6">
                    <button className="btn-gradient w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                      View Shop < FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Latest Work</h4>
                <div className="grid grid-cols-3 gap-4">
                  <img 
                    alt="Work 1" 
                    className="gallery-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW8btLfGdjO-Nn9SCRYwh8TB4wPr4cmfSWX9bihmCcSG95IlNXQn-K6YxXaqMsYJOyAJSpZceHYgCFlKaD2eXpPpYLjqoA7w9ueLNX-X4TiOJjiKX4YQALMnHFHI-3Ba-Ii9vcoYxTJ1Tqxrq0axAwCcP1ELBNK-12XF5-iFat1-0_11Pyd-J5_k_gfMyEhmPNqZn0GGxq-naWTrOPkdqYtYcZnQU4T9O446HlvTH4rXpVfKQ5iyeO30Sa4UipZDlo-n0Lu7PQN9xM" 
                  />
                  <img 
                    alt="Work 2" 
                    className="gallery-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMk9pEDgpT0gULMi3nVWHLsNJyv9gZeJWaR11jkMmdK5esHvLAOAjIsTpB6ECfco_q5uTMi2-ELcyLNalzOu0gBQj2VvNrbY0hMvAgFEholoo9ZQjDoccQ5K4TpjuyCUX2EgQxEoO12-xekceBWE7pEuJnk7dPIkMttoha8FcbsSicFrQ09rZZZmKcLow7F7SttTVryurK16wiKh82suJWoDmAtZSbhYA_vIfdRg2lxZQTAgZmXix0JbDkmJEDFc5wqUymavCj2Sra" 
                  />
                  <img 
                    alt="Work 3" 
                    className="gallery-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlCYcBcwVS2-qeAFRUNeZQu_VO616aeLydBPKsXmLfsOTFxFnDncIv8KgrY24IxsdlPFyvPzAv3VreAt6ax1eo9GhL9fO1AwQqPUjj19YXkPhEyNl728vgqCEnV3CpLgHW0hboxZ5M-IOW0Nll3ELhTBNvZfRaSGBaXTXXqzYV2f7BZ7OM2_RV9RL8t2SWnWUqSekFzIEBwvxvUX2i15D1_xD3ggUrncjNiPa0xp-i9d3ATNNXnwA-4k8gIKkNBVzlMuP_PsbRiuAs" 
                  />
                </div>
              </div>
            </div>
          </article>
          <article className="artisan-card group">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 mb-10">
                <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                  <img 
                    alt="New Artisan" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCztU07lj-lOs543ewzI1LDIU-O3P8wMOJ_FQjoZn4tFCNmTJRMB_YbunqL1ftWf4IGmx54mcFSvVGPrjXoK_YNucfZEA6pgYzBdFpz4C8Rlo6_Ux13OduDg5-l-Csvb4OX3IaZCh-cfXtz0EhrYOfTqvzFVgLSqT44-XGD7sSbgV9RJqxp09k7ls3lNP07Y-sIa7jDHpUQGRzO21JWSjCJnSqNKAmKa-KquP--fyPmAN_QUvHcHTNF2VdAZzawULv_ZgHA4_2_zaU-" 
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Culinary Artisan</span>
                    <h3 className="text-3xl font-extrabold tracking-tighter mb-4">Marcus Finch</h3>
                    <p className="text-slate-500 text-sm leading-relaxed text-ultra-min italic mb-6">
                      "The best ingredients are the ones grown right outside our door. I just give them a spotlight."
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-ultra-min">
                      Marcus specializes in small-batch preservation and gourmet botanicals, using seasonal foraged items to create shelf-stable culinary art.
                    </p>
                  </div>
                  <div className="pt-6">
                    <button className="btn-gradient w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                      View Shop < FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Latest Work</h4>
                <div className="grid grid-cols-3 gap-4">
                  <img 
                    alt="Work 1" 
                    className="gallery-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlCYcBcwVS2-qeAFRUNeZQu_VO616aeLydBPKsXmLfsOTFxFnDncIv8KgrY24IxsdlPFyvPzAv3VreAt6ax1eo9GhL9fO1AwQqPUjj19YXkPhEyNl728vgqCEnV3CpLgHW0hboxZ5M-IOW0Nll3ELhTBNvZfRaSGBaXTXXqzYV2f7BZ7OM2_RV9RL8t2SWnWUqSekFzIEBwvxvUX2i15D1_xD3ggUrncjNiPa0xp-i9d3ATNNXnwA-4k8gIKkNBVzlMuP_PsbRiuAs" 
                  />
                  <img 
                    alt="Work 2" 
                    className="gallery-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf3nUsjmTuB4EwowqpAY8fonWOaC43VIBnim-wvnKqEVfxXdChZT62YGTNk1iyvdXU5ASki8ZKluThnkDDBJZIDxwF7mD30VRbmwlxbDztltKJVInE2E3GAu5gJWYSPtEGcTUTdZ5rM--yQp8E_mytgCefZwpqqZiUZxmXhwdtlrHW61pU1f-Hz_yz_UQILkMl5OwgkhKCZDZ1XYPEU8OLC9xBavlF1V7trAWmh8Ji9FSBjIqdIOShljzcN4I1YBX2zAWEadW6z83t" 
                  />
                  <img 
                    alt="Work 3" 
                    className="gallery-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdocsehkq_8IeOlJkNP5f1QsHfSrnW_z2oo1LzF8P3yoWadr3X8jQdq2jpWfoKWXYK7QLPtUE9rtSzfhaFo0Op8Z9VoZMcOcbH29r4xZImWApk166rnRDR8Uk5pj8STzlTYB3-BL9q7SecCfhZJ93PXCtX2kjSxXXXpU_ncAnbZ_opkVsSWZfcsohosg0a3IJLckx6mqFcD13zdsOH8xKCpIVYI03422N_vqL5UzLgkF_Wx5M5L6k3P6Pzf5UsU8PDW0teQyGKNeb7" 
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
        <section className="mt-32">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-8 max-w-3xl mx-auto">
                Are you a local creator? Join our <span className="text-primary italic">collective.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto text-ultra-min">
                We're always looking for talented makers to join our community and grow their business alongside neighbors.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-white text-slate-900 px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl">
                  Apply to Join
                </button>
                <button className="glass border-white/10 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                  View Requirements
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ >
  );
}