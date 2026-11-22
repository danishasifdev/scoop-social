"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus, Check } from "lucide-react";
import { useCart } from "./cart/CartProvider";

export default function ProductCard({ product, index = 0, snap = false }) {
  const { add, celebrate } = useCart();
  const [added, setAdded] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleAdd = (event) => {
    add(product);
    celebrate(product, event.currentTarget);
    setAdded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1100);
  };

  return (
    <article
      data-snap={snap ? "" : undefined}
      className="group relative min-w-0 animate-cardIn [animation-delay:calc(var(--card-index)*60ms)] transition-transform duration-350 ease-cta hover:-translate-y-1.75 hover:rotate-[-0.6deg]"
      style={{ "--card-color": product.color, "--card-index": index }}
    >
      <Link
        href={`/flavors/${product.slug}`}
        className="relative block h-82.5 overflow-hidden rounded-[5px] bg-(--card-color) transition-opacity active:opacity-85 max-tab:h-[clamp(220px,30vw,285px)] max-sm:h-[clamp(170px,55vw,240px)]"
      >
        <span className="absolute left-4 top-4 z-2 rounded-pill bg-cream px-2.5 py-2 text-[8px] font-extrabold tracking-micro max-sm:left-2.25 max-sm:top-2.25 max-sm:p-1.75 max-sm:text-[6px]">
          {product.tag}
        </span>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover mix-blend-multiply transition-[transform,translate,scale,rotate,filter] duration-650 ease-[cubic-bezier(0.2,0.75,0.2,1)] group-hover:scale-[1.055] group-hover:-rotate-1 group-hover:saturate-110"
        />
        <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-cream transition-[background-color,color,transform,translate,scale,rotate] duration-250 group-hover:rotate-45 group-hover:bg-espresso group-hover:text-cream max-sm:bottom-2.25 max-sm:right-2.25 max-sm:h-8 max-sm:w-8">
          <ArrowUpRight size={19} />
        </span>
      </Link>
      <div className="flex items-center justify-between px-px pb-2.25 pt-4.25 max-sm:gap-1.5 max-sm:pt-3">
        <div>
          <Link
            href={`/flavors/${product.slug}`}
            className="font-display text-5 font-bold tracking-tighter max-sm:text-base max-tiny:text-sm"
          >
            {product.name}
          </Link>
          <p className="m-0 mt-1.25 text-[10px] text-muted max-sm:text-[8px] max-sm:leading-[1.4] max-tiny:text-1.75">
            {product.note}
          </p>
        </div>
        <button
          className={`relative grid h-8.5 w-8.5 shrink-0 place-items-center rounded-full border border-line bg-transparent transition-[transform,translate,scale,rotate,background-color,color,border-color] duration-200 hover:rotate-12 hover:scale-110 hover:bg-espresso hover:text-white active:scale-95 max-sm:h-11 max-sm:w-11 ${added ? 'animate-bagPop border-pistachio bg-pistachio text-espresso after:absolute after:-right-2.5 after:-top-4 after:text-[10px] after:font-extrabold after:text-cherry after:content-["+1"] after:animate-floatUp' : ""}`}
          aria-label={
            added
              ? `${product.name} added to bag`
              : `Add ${product.name} to bag`
          }
          onClick={handleAdd}
        >
          {added ? <Check size={17} strokeWidth={3} /> : <Plus size={18} />}
        </button>
      </div>
      <div className="px-px text-[8px] font-extrabold tracking-[.14em] text-dusk max-sm:text-1.75">
        FROM ${product.price}.00
      </div>
    </article>
  );
}
