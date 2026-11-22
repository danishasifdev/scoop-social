import { ArrowUpRight, Sparkles } from "lucide-react";
import LiquidLink from "@/components/LiquidLink";
import ParallaxImage from "@/components/ParallaxImage";

export const metadata = { title: "Our Story - Scoop Social®" };

const WRAP =
  "mx-auto w-[min(1280px,calc(100%-96px))] max-tab:w-[calc(100%-48px)] max-mob:w-[calc(100%-36px)] max-tiny:w-[calc(100%-28px)]";
const EYEBROW =
  "inline-flex items-center gap-[9px] text-eyebrow font-extrabold tracking-eyebrow";

const STEPS = [
  {
    number: "01",
    title: "Start with the real stuff.",
    copy: "Fruit, chocolate, nuts, cream. If we can't pronounce it, it doesn't go in the mix.",
    image: "/flavor-cherry.svg",
    color: "#F3B5B4",
  },
  {
    number: "02",
    title: "Make it in small batches.",
    copy: "Slow enough to care, small enough to keep every scoop as good as the first.",
    image: "/flavor-pistachio.svg",
    color: "#C9DB9A",
  },
  {
    number: "03",
    title: "Give it personality.",
    copy: "Classics worth coming back for, and odd little flavors worth telling your friends about.",
    image: "/flavor-cookie.svg",
    color: "#F6D66B",
  },
];

export default function OurStoryPage() {
  return (
    <section
      className={`${WRAP} pb-30 pt-20 max-sm:pb-20 max-sm:pt-13.75`}
    >
      <div
        className="grid min-h-140 grid-cols-[1.05fr_.95fr] items-center gap-[6%] max-tab:min-h-0 max-tab:gap-[4%] max-sm:grid-cols-1 max-sm:gap-10"
        data-reveal="up"
      >
        <div>
          <span className={EYEBROW}>
            <span className="h-1.75 w-1.75 rounded-full bg-cherry shadow-[0_0_0_4px_#e94f3720]" />{" "}
            OUR STORY / SCOOP SOCIAL®
          </span>
          <h1 className="my-6.5 font-display text-[clamp(72px,8vw,120px)] font-bold leading-[.88] tracking-[-.085em] max-sm:my-6 max-sm:text-[clamp(66px,17vw,96px)]">
            Small studio.
            <br />
            <em className="font-serif font-normal text-cherry">Big</em> scoop
            energy.
          </h1>
          <p className="mb-7.5 max-w-107.5 text-sm leading-[1.85] text-[#716a60]">
            Scoop Social is an independent ice cream studio making small batches
            with real ingredients and a little extra attitude.
          </p>
          <div className="flex flex-wrap items-center gap-6.5">
            <LiquidLink href="/flavors" variant="dark">
              Shop all flavors <ArrowUpRight size={16} />
            </LiquidLink>
            <LiquidLink href="/find-us" variant="outline">
              Find us in person <ArrowUpRight size={16} />
            </LiquidLink>
          </div>
        </div>
        <div className="relative grid h-130 place-items-center rounded-story-art bg-pistachio max-tab:h-105 max-sm:h-auto max-sm:aspect-square max-sm:max-h-97.5">
          <ParallaxImage
            src="/flavor-pistachio.svg"
            alt="A scoop of pistachio ice cream"
            wrapperClassName="story-page-art-media overflow-hidden rounded-[inherit]"
            imageClassName="h-full w-full rounded-[inherit] object-cover mix-blend-multiply"
            strength={16}
            tilt={5}
          />
          <span className="absolute bottom-8.5 -right-4.5 grid h-29.5 w-29.5 rotate-10 place-content-center rounded-full bg-butter text-center font-display text-[11px] font-extrabold leading-[1.2] shadow-sticker max-sm:bottom-4.5 max-sm:-right-2 max-sm:h-23 max-sm:w-23 max-sm:text-[9px]">
            MADE
            <br />
            WITH
            <br />
            <em className="font-serif text-5 font-normal text-cherry">
              feeling
            </em>
          </span>
          <span className="absolute -left-7 top-10 animate-spin20 text-cherry max-sm:-left-2.5 max-sm:top-4.5">
            <Sparkles size={42} />
          </span>
        </div>
      </div>

      <div
        className="relative my-27.5 overflow-hidden rounded-sm bg-espresso px-[8%] py-17.5 text-center text-cream before:absolute before:-left-8.75 before:-top-22.5 before:text-[230px] before:text-white/5 before:content-['✳'] max-sm:mb-16.25 max-sm:mt-18.75 max-sm:px-5.5 max-sm:py-12.5"
        data-reveal="zoom"
      >
        <span className={`${EYEBROW} text-butter`}>WHAT WE BELIEVE</span>
        <p className="mx-auto my-7 max-w-225 font-display text-[clamp(38px,5vw,68px)] leading-[1.03] tracking-[-.07em] max-sm:text-[38px]">
          Ice cream should taste like something{" "}
          <em className="font-serif font-normal text-butter">and</em> make you
          feel something.
        </p>
        <span className="text-[8px] font-extrabold tracking-[.16em] text-[#b6ada1]">
          THAT'S THE WHOLE IDEA. ✳
        </span>
      </div>

      <div
        className="mb-9.5 flex items-end justify-between gap-7.5 max-sm:mb-7 max-sm:mt-17.5 max-sm:block"
        data-reveal="left"
      >
        <h2 className="m-0 font-display text-[clamp(48px,5.5vw,78px)] leading-[.92] tracking-[-.08em]">
          How the good
          <br />
          stuff happens.
        </h2>
        <p className="m-0 mb-1.5 max-w-65 text-xs leading-[1.7] text-clay max-sm:mb-0 max-sm:mt-4.5">
          Three simple rules. Zero shortcuts.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5.5 max-tab:gap-3.5 max-sm:grid-cols-1 max-sm:gap-5">
        {STEPS.map((step) => (
          <article
            className="group overflow-hidden rounded-sm border border-line bg-white/55 pb-7 transition-[transform,translate,scale,rotate,box-shadow] duration-300 hover:-translate-y-1.75 hover:rotate-[-0.5deg] hover:shadow-card"
            key={step.number}
            style={{ "--step-color": step.color }}
            data-reveal="up"
          >
            <div className="relative h-57.5 overflow-hidden bg-(--step-color)">
              <ParallaxImage
                src={step.image}
                alt=""
                wrapperClassName="story-step-media"
                imageClassName="h-full w-full object-cover mix-blend-multiply transition-transform duration-550 group-hover:scale-[1.06] group-hover:-rotate-2"
                strength={9}
                tilt={3}
              />
            </div>
            <span className="mx-6 mb-2.5 mt-6 block text-[8px] font-extrabold tracking-[.14em] text-cherry">
              {step.number} / THE RULE
            </span>
            <h3 className="mx-6 mb-2.5 font-display text-[26px] leading-[1.05] tracking-[-.06em] max-tab:text-[22px]">
              {step.title}
            </h3>
            <p className="mx-6 text-[11px] leading-[1.75] text-clay">
              {step.copy}
            </p>
          </article>
        ))}
      </div>

      <div
        className="mt-25 flex items-end justify-between gap-7.5 border-t border-line pt-10 max-sm:mt-17.5 max-sm:grid max-sm:gap-6"
        data-reveal="right"
      >
        <div>
          <span className={EYEBROW}>ENOUGH TALKING</span>
          <h2 className="mt-4.5 font-display text-[clamp(48px,5.5vw,76px)] leading-[.92] tracking-[-.08em]">
            Let's find your
            <br />
            <em className="font-serif font-normal text-cherry">
              favorite scoop.
            </em>
          </h2>
        </div>
        <LiquidLink href="/flavors" variant="dark">
          See all six flavors <ArrowUpRight size={16} />
        </LiquidLink>
      </div>
    </section>
  );
}
