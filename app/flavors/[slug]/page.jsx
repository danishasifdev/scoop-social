"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Minus, Plus, Check } from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/components/cart/CartProvider";
import LiquidLink from "@/components/LiquidLink";
import LiquidButton from "@/components/LiquidButton";
import ParallaxImage from "@/components/ParallaxImage";

const WRAP =
  "mx-auto w-[min(1280px,calc(100%-96px))] max-tab:w-[calc(100%-48px)] max-mob:w-[calc(100%-36px)] max-tiny:w-[calc(100%-28px)]";
const EYEBROW =
  "inline-flex items-center gap-[9px] text-eyebrow font-extrabold tracking-eyebrow";
const SIZES = [
  { label: "Single scoop", amount: "4 oz" },
  { label: "Pint", amount: "16 oz" },
  { label: "Party tub", amount: "32 oz" },
];

export default function FlavorDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [size, setSize] = useState("Pint");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const timer = useRef(null);
  const { add, celebrate } = useCart();

  useEffect(() => () => clearTimeout(timer.current), []);

  if (!product) {
    return (
      <section
        className={`${WRAP} min-h-[65vh] pb-35 pt-25 max-sm:pb-25 max-sm:pt-18.75`}
        data-reveal="up"
      >
        <h1 className="my-6 font-display text-[clamp(76px,9.3vw,132px)] font-bold leading-[.88] tracking-[-.085em] max-sm:text-[80px]">
          This scoop
          <br />
          <em className="font-serif font-normal tracking-[-.065em] text-cherry">
            melted away.
          </em>
        </h1>
        <p className="my-6 text-[13px] text-clay">
          That flavor isn't on the menu. Let's get you back to the good stuff.
        </p>
        <LiquidLink href="/flavors" variant="dark">
          Back to flavors <ArrowUpRight size={16} />
        </LiquidLink>
      </section>
    );
  }

  const unitPrice =
    size === "Single scoop"
      ? 4.5
      : size === "Party tub"
        ? product.price * 2.4
        : product.price;

  const handleAdd = (event) => {
    for (let i = 0; i < qty; i++) add(product, size, unitPrice);
    celebrate(product, event.currentTarget);
    setAdded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1300);
  };

  return (
    <section className={`${WRAP} pb-7.5 pt-9 max-sm:pt-4.5`} data-reveal="up">
      <Link
        href="/flavors"
        className="inline-flex min-h-11 items-center gap-2.5 pb-7 text-[9px] font-extrabold tracking-[.12em] transition-colors hover:text-cherry active:text-cherry max-sm:pb-4"
      >
        <ArrowLeft size={15} /> BACK TO THE LINEUP
      </Link>
      <div className="grid grid-cols-[1fr_.85fr] items-center gap-[9%] py-5 pb-18.75 max-tab:gap-[5%] max-sm:grid-cols-1 max-sm:gap-8 max-sm:pb-11.25 max-sm:pt-2.5">
        <div
          className="group relative grid h-145 place-items-center overflow-hidden rounded-[3px] max-tab:h-120 max-sm:h-[105vw] max-sm:max-h-110"
          style={{ background: product.color }}
        >
          <span className="absolute left-5.5 top-5.5 z-2 rounded-pill bg-cream px-3.25 py-2 text-[8px] font-extrabold tracking-[.12em]">
            {product.tag}
          </span>
          <ParallaxImage
            src={product.image}
            alt={product.name}
            wrapperClassName="detail-image-media"
            imageClassName="h-full w-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.04] group-hover:-rotate-2"
            strength={14}
            tilt={5}
          />
          <span className="absolute bottom-5 right-5 font-display text-4.5 font-extrabold -tracking-widest">
            S✳S
          </span>
        </div>
        <div>
          <span className={EYEBROW}>
            SCOOP SOCIAL ORIGINAL / FLAVOR NO. 0{products.indexOf(product) + 1}
          </span>
          <h1 className="mb-2.5 mt-6 font-display text-[clamp(52px,6vw,78px)] leading-[.9] tracking-[-.08em] max-sm:mt-4.5 max-sm:text-[60px]">
            {product.name}
            <span className="font-serif text-cherry">.</span>
          </h1>
          <p className="text-[12px] text-[#81796e]">{product.note}</p>
          <p className="my-7 max-w-105 text-[13px] leading-[1.9] text-ink max-sm:my-5 max-sm:text-[12px]">
            {product.description}
          </p>
          <div className="my-7 h-px bg-line" />
          <span className="text-[8px] font-extrabold tracking-[.14em]">
            PICK YOUR SIZE
          </span>
          <div className="my-3 mb-6 grid grid-cols-3 gap-2 max-tiny:gap-1.25">
            {SIZES.map((option) => (
              <button
                key={option.label}
                className={`rounded-[3px] border border-line bg-transparent px-2 py-3.25 text-left text-[10px] transition-colors active:bg-white/70 max-tiny:px-1.5 max-tiny:py-2.75 max-tiny:text-[9px] ${size === option.label ? "border-espresso bg-white/60" : ""}`}
                onClick={() => setSize(option.label)}
              >
                {option.label}
                <small className="mt-1.25 block text-[8px] text-[#82796e]">
                  {option.amount}
                </small>
              </button>
            ))}
          </div>
          <div className="flex gap-3 max-sm:flex-wrap">
            <div className="flex w-27.5 shrink-0 items-center justify-around rounded-pill border border-line">
              <button
                className="grid h-11 w-11 shrink-0 place-items-center border-0 bg-transparent transition-transform active:scale-90"
                onClick={() => setQty(Math.max(1, qty - 1))}
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="text-[11px]">{qty}</span>
              <button
                className="grid h-11 w-11 shrink-0 place-items-center border-0 bg-transparent transition-transform active:scale-90"
                onClick={() => setQty(Math.min(12, qty + 1))}
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
            <LiquidButton
              variant="dark"
              className={`min-w-0 flex-1 gap-3 max-sm:min-h-12 ${added ? "is-added animate-bagPop" : ""}`}
              onClick={handleAdd}
            >
              {added ? (
                <>
                  SCOOPED! <Check size={16} strokeWidth={3} />
                </>
              ) : (
                <>
                  ADD TO BAG · ${(unitPrice * qty).toFixed(2)}{" "}
                  <ArrowUpRight size={16} />
                </>
              )}
            </LiquidButton>
          </div>
          <div className="mt-6 grid gap-2.25 text-[8px] font-extrabold tracking-widest text-[#82796e] max-sm:text-1.75">
            <span>✳ MADE IN SMALL BATCHES</span>
            <span>✳ VERY GOOD INGREDIENTS</span>
            <span>✳ BIG SCOOP ENERGY</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t border-line py-4.5 text-[8px] font-extrabold tracking-[.12em] max-sm:text-[6px]">
        <span>GOOD TASTE IS A GROUP PROJECT.</span>
        <Link href="/flavors" className="flex min-h-11 items-center gap-2 transition-colors hover:text-cherry active:text-cherry">
          KEEP EXPLORING <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
