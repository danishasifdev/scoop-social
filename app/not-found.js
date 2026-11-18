import Link from "next/link";
import LiquidLink from "@/components/LiquidLink";

const WRAP =
  "mx-auto w-[min(1280px,calc(100%-96px))] max-tab:w-[calc(100%-48px)] max-mob:w-[calc(100%-36px)] max-tiny:w-[calc(100%-28px)]";
const EYEBROW =
  "inline-flex items-center gap-[9px] text-eyebrow font-extrabold tracking-eyebrow";

export default function NotFound() {
  return (
    <section
      className={`${WRAP} min-h-[65vh] pb-35 pt-25 max-sm:pb-25 max-sm:pt-18`}
    >
      <span className={EYEBROW}>WHOOPS / 404</span>
      <h1 className="my-6 font-display text-[clamp(76px,9.3vw,132px)] font-bold leading-[.88] tracking-[-.085em] max-sm:text-[80px]">
        This scoop
        <br />
        <em className="font-serif font-normal tracking-[-.065em] text-cherry">
          melted away.
        </em>
      </h1>
      <p className="my-6 text-[13px] text-clay">
        That page isn't on the menu. Let's get you back to the good stuff.
      </p>
      <LiquidLink href="/" variant="dark" className="mt-1">
        Back to the good stuff
      </LiquidLink>
    </section>
  );
}
