"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { MdGridView } from "react-icons/md";
import cookies from 'js-cookie';

export default function MarketplaceLayout({ children }) {
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    if (cookies.get('auth')) {
      setLoggedin(true);
    }else{
      setLoggedin(false);
    }
  }, [cookies.get('auth')])
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: '/' },
    // { name: 'Services', path: '/services' },
    // { name: 'Contact', path: '/contact' },
    { name: 'Shop', path: '/products' },
    { name: 'Makers', path: '/makers' },
    { name: 'Events', path: '/events-workshops' },
    { name: 'About', path: '/mission-impact' },
    { name: 'Add product', path: '/seller/add-product' },
  ];
  {
    
  }
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full px-4 pt-4">
        <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-12">
            
            <Link href={'/'} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <MdGridView size={24} className="text-white" />
              </div>
              <h2 className="text-xl font-extrabold tracking-tighter">local.</h2>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
      {navItems.map((item) => {
      const isActive =
      pathname === item.path ||
      (item.path !== '/' && pathname.startsWith(item.path));

    return (
      <Link
        key={item.name}
        href={item.path}
        className={`text-xs font-bold uppercase tracking-widest transition-colors
          ${isActive ? 'text-primary' : 'text-slate-500'}
          hover:text-primary`}
      >
        {item.name}
      </Link>
    );
  })}
</nav>

          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center glass rounded-2xl px-4 py-2">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-slate-400 text-xl"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input
                className="bg-transparent border-none focus:ring-0 text-xs w-48 placeholder:text-slate-400 font-medium"
                placeholder="Find workshops..."
                type="text"
              />
            </div>
            <button className="btn-gradient px-6 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-widest">
              {loggedin?<div onClick={()=>{
                setLoggedin(false);
                cookies.remove('auth');
              }} href="/auth/login" >logout</div>:<Link href="/auth/login" >Login</Link>}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900/50 border-t border-slate-100 dark:border-white/5 mt-32 py-24 px-6 lg:px-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-4 flex flex-col gap-8">
            <Link href={'/'} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <MdGridView size={24} className="text-white" />
              </div>
              <h2 className="text-xl font-extrabold tracking-tighter">local.</h2>
            </Link>
            <p className="text-slate-400 dark:text-gray-500 text-sm thin-typeface leading-relaxed max-w-xs">
              A digital destination for slow living and artisanal excellence,
              connecting you with the finest local makers.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="text-slate-400 dark:text-gray-500 text-[11px] flex flex-col gap-5 uppercase tracking-widest font-medium">
              <li>
                <Link
                  href="#"
                  className="hover:text-electric-blue transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-electric-blue transition-colors"
                >
                  The Edit
                </Link>
              </li>
              <li>
                <Link
                  href="/makers"
                  className="hover:text-electric-blue transition-colors"
                >
                  Makers
                </Link>
              </li>
              <li>
                <Link
                  href="/events-workshops"
                  className="hover:text-electric-blue transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/mission-impact"
                  className="hover:text-electric-blue transition-colors"
                >
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-electric-blue transition-colors"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-slate-900 dark:text-white">
              Service
            </h4>
            <ul className="text-slate-400 dark:text-gray-500 text-[11px] flex flex-col gap-5 uppercase tracking-widest font-medium">
              <li>
                <Link
                  href="/help-center"
                  className="hover:text-electric-blue transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-electric-blue transition-colors"
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-electric-blue transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-electric-blue transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-slate-900 dark:text-white">
              Newsletter
            </h4>
            <p className="text-slate-400 dark:text-gray-500 text-xs thin-typeface mb-8">
              Join for early access to limited edition drops.
            </p>
            <div className="flex border-b border-slate-200 dark:border-white/10 pb-4">
              <input
                className="flex-1 bg-transparent border-none px-0 py-2 text-sm focus:ring-0 placeholder:text-slate-300"
                placeholder="Email Address"
                type="email"
              />
              <button className="text-[10px] font-bold uppercase tracking-widest text-electric-blue hover:tracking-[0.3em] transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto pt-24 mt-24 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] text-slate-400 uppercase tracking-[0.3em] font-medium">
            © 2024 LOCAL MARKETPLACE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10 text-[9px] text-slate-400 uppercase tracking-[0.3em] font-medium">
            <Link href="#" className="hover:text-electric-blue">
              Privacy
            </Link>
            <Link href="#" className="hover:text-electric-blue">
              Terms
            </Link>
            <Link href="#" className="hover:text-electric-blue">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}