"use client";
import { FaPlus } from "react-icons/fa";
import ProductCard from "@/components/card/ProductCard";

import { useEffect, useState } from "react";
import ButtonPrimary from "@/components/button/ButtonPrimary";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filter states
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategories, setSelectedCategories] = useState(["All Works"]);

  const [priceRange, setPriceRange] = useState(500);
  const [availability, setAvailability] = useState("inStock"); //
  useEffect(() => {
    if (products.length === 0) {
      const fetchProducts = async () => {
        try {
          const res = await fetch("/data.json");
          const data = await res.json();
          setProducts(data);
          setFilteredProducts(data);
        } catch (error) {
          console.error("Failed to load products", error);
        }
      };

      fetchProducts();
    }
  }, [products.length]);

  // Update filtered
  useEffect(() => {
    let updated = [...products];

    // Category filtering
    if (!selectedCategories.includes("All Works")) {
      updated = updated.filter((p) => selectedCategories.includes(p.category));
    }

    // Price filtering
    updated = updated.filter((p) => p.price <= priceRange);

    // Availability filtering
    if (availability === "inStock") {
      updated = updated.filter((p) => p.availability === "in_stock");
    } else if (availability === "preOrder") {
      updated = updated.filter((p) => p.availability === "pre_order");
    }

    // Sorting
    if (sortBy === "newest") {
      updated.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    } else if (sortBy === "priceLowToHigh") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighToLow") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);
  }, [products, sortBy, selectedCategories, priceRange, availability]);

  // Category
  function toggleCategory(cat) {
    if (cat === "All Works") {
      setSelectedCategories(["All Works"]);
      return;
    }

    let newSelected = [...selectedCategories];

    if (newSelected.includes(cat)) {
      newSelected = newSelected.filter((c) => c !== cat);
    } else {
      newSelected.push(cat);
    }

    if (newSelected.length === 0) {
      newSelected = ["All Works"];
    } else {
      // Remove
      newSelected = newSelected.filter((c) => c !== "All Works");
    }

    setSelectedCategories(newSelected);
  }

  const categories = ["Handmade", "Clothing", "Electronics", "Food & Drink"];

  return (
    <>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-12">
        <div className="flex flex-col gap-2 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6">
              Shop now
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              Explore our <br />
              <span className="text-accent italic">products</span>
            </h1>

            <p className="text-slate-500 text-lg md:text-xl text-ultra-min leading-relaxed">
              High-quality product designed to deliver reliable performance and
              long-term value. Perfect for everyday use with a balance of
              affordability and durability.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-32 space-y-12">
              {/* Sort Section */}
              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                  Sort By
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { id: "featured", label: "Featured" },
                    { id: "newest", label: "Newest" },
                    { id: "priceLowToHigh", label: "Price: Low to High" },
                    { id: "priceHighToLow", label: "Price: High to Low" },
                  ].map(({ id, label }) => (
                    <label
                      key={id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        className="form-radio size-4 text-electric-blue border-slate-200 focus:ring-electric-blue/20"
                        name="sort"
                        type="radio"
                        checked={sortBy === id}
                        onChange={() => setSortBy(id)}
                      />
                      <span className="text-sm thin-typeface text-slate-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </section>

              {/* Categories Section */}
              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                  Categories
                </h3>
                <div className="flex flex-col gap-4">
                  {/* "All Works" checkbox */}
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <input
                        checked={selectedCategories.includes("All Works")}
                        onChange={() => setSelectedCategories([])}
                        className="form-checkbox size-4 rounded text-electric-blue border-slate-200 focus:ring-electric-blue/20"
                        type="checkbox"
                      />
                      <span className="text-sm thin-typeface text-slate-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors">
                        All Works
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-300">
                      {products.length}
                    </span>
                  </label>

                  {categories.map((category) => {
                    // Count
                    const count = products.filter(
                      (p) => p.category === category
                    ).length;
                    return (
                      <label
                        key={category}
                        className="flex items-center justify-between cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="form-checkbox size-4 rounded text-electric-blue border-slate-200 focus:ring-electric-blue/20"
                            type="checkbox"
                          />
                          <span className="text-sm thin-typeface text-slate-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors">
                            {category}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-300">
                          {count}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </section>

              {/* Price Range */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Price Range
                  </h3>
                  <span className="text-[10px] font-medium text-electric-blue">
                    ${15} — ${priceRange}
                  </span>
                </div>
                <div className="px-1">
                  <input
                    className="custom-range"
                    max="500"
                    min="15"
                    type="range"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-[10px] text-slate-400">$15</span>
                  <span className="text-[10px] text-slate-400">$500+</span>
                </div>
              </section>

              {/* Availability */}
              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                  Availability
                </h3>
                <div className="flex items-center gap-3">
                  <button
                    className={`flex-1 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                      availability === "inStock"
                        ? "soft-ui-button soft-ui-active"
                        : "soft-ui-button text-slate-400"
                    }`}
                    onClick={() => setAvailability("inStock")}
                  >
                    In Stock
                  </button>
                  <button
                    className={`flex-1 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                      availability === "preOrder"
                        ? "soft-ui-button soft-ui-active"
                        : "soft-ui-button text-slate-400"
                    }`}
                    onClick={() => setAvailability("preOrder")}
                  >
                    Pre-order
                  </button>
                  <button
                    className={`flex-1 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                      availability === "all"
                        ? "soft-ui-button soft-ui-active"
                        : "soft-ui-button text-slate-400"
                    }`}
                    onClick={() => setAvailability("all")}
                  >
                    All
                  </button>
                </div>
              </section>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 asymmetric-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id || product.name}
                  product={product}
                />
              ))}
            </div>

            <div className="mt-32 flex flex-col items-center gap-8">
              <div className="flex items-center gap-12">
                <div className="w-24 h-px bg-slate-100 dark:bg-white/5"></div>
                <p className="text-[10px] text-slate-300 dark:text-gray-500 uppercase tracking-[0.4em] font-medium">
                  {filteredProducts.length} of {products.length} products
                </p>
                <div className="w-24 h-px bg-slate-100 dark:bg-white/5"></div>
              </div>

              <ButtonPrimary>Discover More</ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
