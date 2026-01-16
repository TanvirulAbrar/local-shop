import React from "react";

const ButtonPrimary = ({ children }) => {
  return (
    <button className="group relative px-14 py-5 overflow-hidden rounded-full border border-slate-200 dark:border-white/10 transition-all hover:border-electric-blue">
      <div className="absolute inset-0 w-0 bg-electric-blue transition-all duration-300 ease-out group-hover:w-full"></div>
      <span className="relative text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">
        {children}
      </span>
    </button>
  );
};
export default ButtonPrimary;
