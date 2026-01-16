
"use client";
import Link from 'next/link';
import cookies from 'js-cookie'
import { FaEye, FaGoogle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [error,setError]= useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    if(email == "admin@example.com" && password == "123Qwe$"){
      cookies.set('auth', true,{expires:30});
      router.push('/products')
    }else {
      setError("Invalid email or password");
    }

  };
  return (
    <>
      
      <main className="flex-1 flex flex-col md:flex-row">
        <div className="hidden md:flex md:w-1/2 relative bg-primary overflow-hidden items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHuxIqUPGWIY_9icsNYSx_VPbHVcfy8xj6UdMb1HG89LsbFN1gPqXR4itg6cvy02ZYOiHRsq1B1kGT2P1mgs0-kpWBv_Owm8ZMKU8PG-ezzfMdcsWnfQpJ_nwoBGcLNWvqeNzdUG9eYDJMzGKc5NBH1QsY6ov0r56aoOQ_4Y3hJWOXrQsC5p-ndEph5Av0QzErrt52JCuKEwpzRn_lU5XgJiw46SAvtr_3dLi4C9l62yuonPrJ4DK-kV_dO4hmqfPh8COANzGnoaFS")'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-black/80"></div>
          <div className="relative z-10 p-16 flex flex-col gap-8 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-white text-xs font-bold uppercase tracking-wider">Welcome Back</span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Your local community is waiting for you.
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed">
              Log in to manage your shop, discover new favorites, and support your neighbors.
            </p>
            <div className="flex items-center gap-5 mt-4">
              <div className="flex -space-x-3">
                <img 
                  className="w-12 h-12 rounded-full border-2 border-white object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDulyGVuOYycEy4rule8oZelGVuVywQkBiakqel5i4PI_CxcEShFbdA0ljZlV_hRa5TGBEG5HQMIiTL3kcxHHV3jhxX3Y4tDh9nJtkT72jmFJL1ZEILgSPdFtbO65cqAckxKiA6sXfb4uvo1bdMIQIlF1wQMoGtHkYs054fprxMytBzvZo52D01VT_xZeto2FBujDZiAG5NkbPx2Nlg-2Cl7SNfClJ5oRBJM41FD0ct_g3HCHghEWEPWWO5SDdrK9AHPwyP7UgQu7e" 
                  alt="Community member"
                />
                <img 
                  className="w-12 h-12 rounded-full border-2 border-white object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjpL1SR-U1uzbeLHTwPStVOptYmlz-BdIzRZRc1vR7di-yS1vrz7q1qIxAPy5ymv58Syoy309wnUvzUQuZFOHj3lMKVwUhpupYCSj7TBH1MfVWK-GLc-7mewZMVsjLAPOWCanuLjjXgbPjCNHvDFASP-X6G2FLLSt0FI1GKO5v1f-AhPgPLZ5MV-mgSv9GlO6PjfyNpt7T6v0nKyVgRFgE9C_yLRuasttocheZUUL7G8cIDzdrSWy3se_gDCW_ghR5vGj09--q-r_h" 
                  alt="Community member"
                />
                <img 
                  className="w-12 h-12 rounded-full border-2 border-white object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdJYw8n7wcy-SOawZo8-ZyQW9uiqmlkS9G23lzQw5pW0ub5bkW2UGXBnSGnJyyR8Z8ZbVYYQ8ZKUeFLsIWJ9FLAdadAIlL2NljxIS-iMWBwG1AIImi9w3E3mb8sOo-wbuwuWSMhHdi8xAlBCO0W84tGOvAWAOWurmNN0CUy7thE0VRcD_tWeC6uibD7T-nHpGQEDO4jj_N5ZrnCB7B1uINgj34nh7QnyunWRjDXZsJFaF0zklUP-Ba3Tmj0viXmdo5WMmiFULSxR7x" 
                  alt="Community member"
                />
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-xs text-white font-black">+5k</div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">5,000+ Members</span>
                <span className="text-white/60 text-sm">Active in your area</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:px-24 bg-white dark:bg-slate-900">
          <div className="w-full max-w-[440px] flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-slate-900 dark:text-white text-[32px] font-black leading-tight">Welcome back</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base font-medium">Please enter your details to sign in</p>
            </div>
            <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl h-14">
              <label className="flex-1 relative cursor-pointer group">
                <input 
                  defaultChecked 
                  className="sr-only peer" 
                  name="login-type" 
                  type="radio" 
                  value="user"
                />
                <div className="h-full flex items-center justify-center rounded-xl transition-all duration-200 peer-checked:bg-white peer-checked:shadow-sm peer-checked:text-primary text-slate-500 font-bold text-sm">
                  As a User
                </div>
              </label>
              <label className="flex-1 relative cursor-pointer group">
                <input 
                  className="sr-only peer" 
                  name="login-type" 
                  type="radio" 
                  value="seller"
                />
                <div className="h-full flex items-center justify-center rounded-xl transition-all duration-200 peer-checked:bg-white peer-checked:shadow-sm peer-checked:text-primary text-slate-500 font-bold text-sm">
                  As a Seller
                </div>
              </label>
              <label className="flex-1 relative cursor-pointer group">
                <input 
                  className="sr-only peer" 
                  name="login-type" 
                  type="radio" 
                  value="admin"
                />
                <div className="h-full flex items-center justify-center rounded-xl transition-all duration-200 peer-checked:bg-white peer-checked:shadow-sm peer-checked:text-primary text-slate-500 font-bold text-sm">
                  As an Admin
                </div>
              </label>
            </div>
            <button className="flex w-full items-center justify-center rounded-2xl h-14 px-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 font-bold text-base shadow-sm active:scale-[0.99]">
              <FaGoogle className="w-5 h-5 text-red-500" />
              Sign in with Google
            </button>
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
              <span className="flex-shrink mx-4 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">or with email</span>
              <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
            </div>
            <form onSubmit={handelSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                <input 
                  className="w-full h-14 rounded-2xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 px-5 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all dark:placeholder-slate-600 text-base" 
                  placeholder="john@example.com" 
                  type="email"
                  name='email'
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Password</label>
                  <a className="text-xs font-bold text-primary hover:underline" href="#">Forgot?</a>
                </div>
                <div className="relative">
                  <input 
                    className="w-full h-14 rounded-2xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 px-5 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all dark:placeholder-slate-600 text-base" 
                    placeholder="••••••••" 
                    type="password"
                    name='password'
                  />
                  <button 
                    type="button" 
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer text-xl hover:text-primary transition-colors"
                  >
                    <FaEye />
                  </button>
                </div>
                <div className="flex justify-between items-center ml-1">
                  <label className="text-xs font-bold text-red-500 dark:text-red-400 uppercase tracking-wider">{error}</label>
                 
                </div>
              </div>
              <button 
                className="w-full h-14 bg-primary hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all mt-4 active:scale-[0.98] text-base" 
                type="submit"
              >
                Log In
              </button>
            </form>
            <div className="text-center">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Don't have an account? 
                <Link className="text-primary font-black hover:underline ml-1" href="/auth/register">Sign up here</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}