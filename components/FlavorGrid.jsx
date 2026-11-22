"use client";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

export default function FlavorGrid({ products }) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filtered = useMemo(
    () =>
      filter === "All"
        ? products
        : products.filter((p) => p.category === filter),
    [filter, products],
  );

  return (
    <>
      <div className="mb-7 flex items-center gap-2 overflow-x-auto border-y border-line py-4 max-sm:gap-2 max-sm:py-3">
        {categories.map((c) => (
          <button
            key={c}
            className={`shrink-0 rounded-pill border border-line bg-transparent px-4 py-2.5 text-[10px] transition duration-200 hover:-rotate-3 hover:border-espresso hover:bg-espresso hover:text-cream active:scale-95 max-sm:min-h-11 max-sm:px-4 max-sm:text-[9px] ${filter === c ? "border-espresso bg-espresso text-cream" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto text-[8px] font-extrabold tracking-[.12em] text-ink max-sm:hidden">
          {filtered.length} GOOD THINGS
        </span>
      </div>
      <div
        className="grid grid-cols-3 gap-x-6 gap-y-11 max-sm:grid-cols-2 max-sm:gap-x-3 max-sm:gap-y-7 max-tiny:gap-x-2.5 max-tiny:gap-y-6"
        key={filter}
      >
        {filtered.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </>
  );
}
