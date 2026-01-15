 
import Link from 'next/link';
import { FaArrowLeft, FaPlay, FaLeaf, FaTruck, FaStar, FaCheck, FaShoppingCart, FaHeart } from 'react-icons/fa';

export default function ProductDetailPage({ params }) {
  return (
    < >
      <div className="min-h-screen relative">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[55%] xl:w-[60%] px-6 md:px-12 py-8 space-y-8">
            <div className="mb-4">
              <Link href="/products" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-all group">
                <FaArrowLeft className="text-[20px] transition-transform group-hover:-translate-x-1" />
                <span className="text-sm font-semibold tracking-wide uppercase">Back to Collection</span>
              </Link>
            </div>
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-white ring-1 ring-slate-200 dark:ring-slate-800">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0wbNZBwuZktChSrzoboUoGBIDzDziun3149TZ0k3nR7QPboxndarBky-8nvooKRF5sPwqYoXLZ80YTTiDNse3_wZqGtHGz8yEBVxAikM1QSzXMfPmOoSqUcXFdTT9YER3OxJd0wAlegJOee14FBG3Xi6e93FP_pWnnH0pVLHUgBjatR_soDVVecMarV9rfRqR8YemQ346CtB7VJkHeqmxJjytX3Sdp4MNu_BafJ-GACzKWc3UhXLq0VgLzDkLQ7qM4G1Tje9ddRlJ")'}}
              ></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">The Maker's Story</h3>
                <div className="flex gap-1">
                  <div className="h-1 w-8 bg-primary rounded-full"></div>
                  <div className="h-1 w-2 bg-slate-200 rounded-full"></div>
                  <div className="h-1 w-2 bg-slate-200 rounded-full"></div>
                </div>
              </div>
              <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-2 px-2">
                <div className="relative flex-none w-40 aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group shadow-lg ring-2 ring-primary">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                      <FaPlay className="text-white" />
                    </div>
                  </div>
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3ARr5I5uLX8JzHMejDpbVt8yPHTbhgdwjpJtFzoMegSm97Bsrtm12Q5sQRC1FTr3L2QIuuoAjxRm--7loYBYicBbtWGkCA8pqX8cpVcih4WrMD5X0nOlfk8klS8ZJV6VIXCeHLpT3EsUCAj103msfG31_qoK4c-nywM1CHsa9J_j9WM3oSPmI_Do0jjuNnemfFzoL0tu9ztIp2epGutY20imxyapxwrL95zTY1VlriLVqyn8SSYAMvF-1jS7zq9tJiV9h1mEBfxBv")'}}
                  ></div>
                  <span className="absolute bottom-3 left-3 z-20 text-[10px] font-bold text-white uppercase tracking-wider">The Wheel</span>
                </div>
                <div className="relative flex-none w-40 aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group shadow-md opacity-80 hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJn0T6n39_wDmAgfnpeT3jL23u3OQRcwgjSHftdzGhPQOU2C3iwiLsIBcEjHA99o1g9kAq1b9DSiqsEBHR7UYm4LI_y54_6Biv5xHnWKjET0j8Zfw8fx4LL4aFkE8obnFSppo4FnxqJkXsw8qSTr9F5BjDHn8_qPvG0N90Vkp8YUajizkTQsxY39_5IjoZEeNVw1Vlvkl0E8ZOg8TLdoGqRbU3LwQK5-rWI5q_fbHsoH5LBPYVvvP3SIxq-AB_obvc22KM7T6UQquM")'}}
                  ></div>
                  <span className="absolute bottom-3 left-3 z-20 text-[10px] font-bold text-white uppercase tracking-wider">Glazing</span>
                </div>
                <div className="relative flex-none w-40 aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group shadow-md opacity-80 hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4G0uvV2Qrz03xFxl_stUhL9NkiAWupjDceIYbMDXhBMBw5cLvg6sKfHZ_1Z7gul2Haq9iS6FqCPOQwCrkRPitHdTwAgyyGF6LqmkN-Top5rKRFo4POZBH56LpnmU8AfL8jKJlnz9iJ2aGOgsqyzTVELpcwEWk4KM06Fen5Yocb0gSIRWNF0Tlz2uv9gjlAA4bUb_o8EwsTcc9jegqp-QfgPQEzjwEACQfUzPr-E_tVQ8vc4ZA8sOf9zZzmSZpb5qJ9tgEQAR0-MSR")'}}
                  ></div>
                  <span className="absolute bottom-3 left-3 z-20 text-[10px] font-bold text-white uppercase tracking-wider">The Studio</span>
                </div>
                <div className="relative flex-none w-40 aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-md opacity-80 hover:opacity-100 transition-opacity">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBXjX8T3MqPyNTVQe56lfBWQgNC7ekaFY_6Z86rV35aoRparunxvfwN29Ye_DXAcFkCPc_A82Nj3teC1_JezhI-wObk-11y2rG05V4_4vH1Fiy701Z1vE39l1gNU0UZfLyuUZGKMbnyi_rN3o7eftwlgCY1IOUNmJdlx3abVNBqTtaICjQPwtXeLSBm-LR4W__ckPJCtV9B7UPMYC7oqH4BoyeevFpQBa_7Pg7KBZTJtTOIpBK5ZX83MpSlrKp4-HN9fuGzOMYmlnq")'}}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJn0T6n39_wDmAgfnpeT3jL23u3OQRcwgjSHftdzGhPQOU2C3iwiLsIBcEjHA99o1g9kAq1b9DSiqsEBHR7UYm4LI_y54_6Biv5xHnWKjET0j8Zfw8fx4LL4aFkE8obnFSppo4FnxqJkXsw8qSTr9F5BjDHn8_qPvG0N90Vkp8YUajizkTQsxY39_5IjoZEeNVw1Vlvkl0E8ZOg8TLdoGqRbU3LwQK5-rWI5q_fbHsoH5LBPYVvvP3SIxq-AB_obvc22KM7T6UQquM")'}}
                  ></div>
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4G0uvV2Qrz03xFxl_stUhL9NkiAWupjDceIYbMDXhBMBw5cLvg6sKfHZ_1Z7gul2Haq9iS6FqCPOQwCrkRPitHdTwAgyyGF6LqmkN-Top5rKRFo4POZBH56LpnmU8AfL8jKJlnz9iJ2aGOgsqyzTVELpcwEWk4KM06Fen5Yocb0gSIRWNF0Tlz2uv9gjlAA4bUb_o8EwsTcc9jegqp-QfgPQEzjwEACQfUzPr-E_tVQ8vc4ZA8sOf9zZzmSZpb5qJ9tgEQAR0-MSR")'}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[45%] xl:w-[40%] bg-slate-50 dark:bg-slate-900 lg:min-h-screen relative lg:border-l border-slate-200 dark:border-slate-800">
            <div className="lg:sticky lg:top-[72px] p-6 md:p-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full">Limited Edition</span>
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-200 dark:bg-slate-800 rounded-full">Sustainable</span>
                </div>
                <h1 className="text-4xl xl:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">Hand-thrown Ceramic Pitcher</h1>
                <div className="flex items-center gap-3 group cursor-pointer w-fit">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-primary/20">
                    <div 
                      className="w-full h-full bg-cover" 
                      style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDs0TfcJAc8JZBh4-BDhHH7AfjNjB_n0gmlldLrCp3fkT4-5bvbUPyYj6SMN6gwVDUcY8wdJNyxa0O3bzOptMciOCK2a0Vxx5neFbbAGHZDoxwQ_j-tpUW4J4EfUnOQAc1udgRhHw2xz66hFoTMEY9e0ZiFgVqnfUkneMzKZjEZoThcvXo8Ell_RTSEjTnB6Y3vudjCu8AWgpCjDNCUiGPYlZ7VcmNdMgtW1CM2hrhLu7GbAg7XopPpIDeBTJR3uNKwvUeDsCzmNCcW")'}}
                    ></div>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Crafted By</p>
                    <p className="text-slate-900 dark:text-white font-bold group-hover:text-primary transition-colors">Oak Grove Pottery</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  A masterwork of functional art. Individually hand-thrown in Portland using local stoneware clay. Features a signature birch-inspired glaze that highlights the natural texture of the earth.
                </p>
                <div className="grid grid-cols-2 gap-y-3">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                    <FaLeaf className="text-primary" />
                    <span>Organic Sourcing</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                    <FaTruck className="text-primary" />
                    <span>Free Local Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                    <FaStar className="text-primary" />
                    <span>One of a Kind</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                    <FaCheck className="text-primary" />
                    <span>Artist Certified</span>
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 blur-3xl rounded-full"></div>
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-baseline">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-1">Current Price</span>
                      <div className="flex items-baseline gap-3">
                        <span className="text-5xl font-black text-primary">$45.00</span>
                        <span className="text-lg font-medium text-slate-400 line-through">$58.00</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs font-bold text-primary mb-1">In Stock</span>
                      <span className="block text-[10px] text-slate-500">Only 4 units left</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-8 py-5 bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-2xl transition-all shadow-xl shadow-primary/30 transform active:scale-95">
                      <FaShoppingCart />
                      <span>Add to Cart</span>
                    </button>
                    <button className="flex items-center justify-center w-16 h-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Handmade in Portland, OR
                </div>
                <Link href="#" className="hover:text-primary transition-colors underline underline-offset-4">Shipping Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ >
  );
}