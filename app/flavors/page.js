import { products } from "@/lib/products";
import FlavorGrid from "@/components/FlavorGrid";
import { Sparkles } from "lucide-react";

export const metadata = { title: "The Flavors - Scoop Social®" };

const WRAP =
  "mx-auto w-[min(1280px,calc(100%-96px))] max-tab:w-[calc(100%-48px)] max-mob:w-[calc(100%-36px)] max-tiny:w-[calc(100%-28px)]";
const EYEBROW =
  "inline-flex items-center gap-[9px] text-eyebrow font-extrabold tracking-eyebrow";

export default function FlavorsPage() {
  return (
    <section
      className={`${WRAP} pb-30 pt-20 max-sm:pb-18.75 max-sm:pt-13.75`}
    >
      <div
        className="relative min-h-87.5 pb-15 max-sm:min-h-78.75 max-sm:pb-10"
        data-reveal="up"
      >
        <span className={EYEBROW}>THE GOOD STUFF / ALL SIX</span>
        <h1 className="my-6 font-display text-[clamp(80px,10vw,138px)] font-bold leading-[.88] tracking-[-.085em] max-sm:my-6 max-sm:text-[clamp(72px,18vw,105px)]">
          Pick your
          <br />
          <em className="font-serif font-normal tracking-[-.065em] text-cherry">
            happy place.
          </em>
        </h1>
        <p className="m-0 max-w-92.5 text-[13px] leading-[1.8] text-[#786f64] max-sm:max-w-68.75 max-sm:text-[11px]">
          Six small-batch flavors made with real ingredients. Choose a size, add
          it to your bag, and get ready for a very good day.
        </p>
        <span className="absolute right-[17%] top-[22%] rotate-12 text-[76px] text-butter max-sm:right-[6%] max-sm:top-[16%] max-sm:text-12">
          <Sparkles />
        </span>
        <span className="absolute bottom-16.25 right-0 text-right text-[8px] font-extrabold leading-[1.8] tracking-[.14em] max-sm:bottom-6 max-sm:text-1.75">
          001-006
          <br />
          THE COLLECTION
        </span>
      </div>
      <div data-reveal="left">
        <FlavorGrid products={products} />
      </div>
      <div
        className="mt-20 flex items-center gap-4.5 border-t border-line py-6 max-sm:mt-13.75"
        data-reveal="right"
      >
        <span className="text-7.5 text-cherry">✳</span>
        <p className="m-0 max-w-122.5 text-[11px] leading-[1.7] text-clay">
          Every flavor is made in small batches with real ingredients. What's in
          stock may change, but the good mood is guaranteed.
        </p>
      </div>
    </section>
  );
}
