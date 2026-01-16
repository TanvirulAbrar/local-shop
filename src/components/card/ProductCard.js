"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdFavoriteBorder, MdAddShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const id = product.id;
  return (
    <div className="group flex flex-col bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${product.image})` }}
        />

        <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
          <MdFavoriteBorder size={20} />
        </button>

        {product.badge && (
          <div className="absolute bottom-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <p className="text-slate-500 dark:text-gray-400 text-xs font-semibold">
          By {product.brand}
        </p>

        {/* Name + View Details */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-slate-900 dark:text-white font-bold text-base truncate">
            {product.name}
          </h3>

          <Link
            href={`/products/${product.id}`}
            className="text-xs font-semibold text-primary hover:underline whitespace-nowrap"
          >
            View Details →
          </Link>
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between mt-2">
          <p className="text-primary font-black text-lg">${product.price}</p>

          <button className="p-2 bg-slate-100 dark:bg-white/10 rounded-lg hover:bg-primary transition-colors group/btn">
            <MdAddShoppingCart className="text-[18px] text-slate-600 dark:text-slate-300 group-hover/btn:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
