"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import LiquidLink from "@/components/LiquidLink";
import ParallaxImage from "@/components/ParallaxImage";
import CountUp from "@/components/CountUp";
import ColorText from "@/components/ColorText";
import { products } from "@/lib/products";

const EYEBROW =
  "inline-flex items-center gap-[9px] text-eyebrow font-extrabold tracking-eyebrow";
const DISPLAY = "font-display font-extrabold tracking-[-.07em]";
const UNDERLINE_LINK =
  "inline-flex min-h-11 items-center gap-3 border-b border-espresso pb-2 text-[10px] font-extrabold tracking-[.07em] [&_svg]:transition-transform [&_svg]:duration-250 [&_svg]:ease-cta hover:[&_svg]:translate-x-[3px] hover:[&_svg]:translate-y-[-3px] active:text-cherry";
const WRAP =
  "mx-auto w-[min(1280px,calc(100%-96px))] max-tab:w-[calc(100%-48px)] max-mob:w-[calc(100%-36px)] max-tiny:w-[calc(100%-28px)]";

export default function Home() {
  return (
    <div className="home-page">
      <section
        className={`${WRAP} relative grid min-h-168 grid-cols-2 pb-15 pt-19 max-tab:min-h-150 max-tab:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] max-tab:gap-2.5 max-tab:pt-14 max-sm:flex max-sm:min-h-0 max-sm:flex-col max-sm:pb-14.5 max-sm:pt-11`}
        data-reveal=""
      >
        <div className="relative z-2 pt-7.5 max-sm:pt-0">
          <span className={EYEBROW}>
            <span className="h-1.75 w-1.75 rounded-full bg-cherry shadow-[0_0_0_4px_#e94f3720]" />{" "}
            SMALL-BATCH ICE CREAM STUDIO
          </span>
          <h1
            data-reveal="mask"
            className="my-7 font-display text-[clamp(76px,9.3vw,132px)] font-bold leading-[.88] tracking-[-.085em] max-tab:text-[clamp(62px,8.5vw,92px)] max-sm:my-6 max-sm:text-[clamp(70px,18vw,105px)] max-tiny:text-[68px]"
          >
            Big flavor.
            <br />
            No{" "}
            <ColorText
              as="em"
              className="font-serif font-normal tracking-[-.065em] text-cherry"
            >
              boring
            </ColorText>
            <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_#28241f]">
              scoops.
            </span>
          </h1>
          <p className="my-5 max-w-90 text-sm leading-[1.8] text-ink max-sm:max-w-[320px] max-sm:text-xs">
            Real ingredients, made in small batches, scooped with a whole lot of
            personality. Six flavors. One very good decision.
          </p>
          <div className="flex items-center gap-6 max-sm:gap-4.25 max-tiny:flex-col max-tiny:items-start max-tiny:gap-4">
            <LiquidLink href="/flavors" variant="dark">
              Shop all flavors <ArrowUpRight size={16} />
            </LiquidLink>
            <LiquidLink href="/our-story" variant="outline">
              Meet the scoop shop <ArrowUpRight size={16} />
            </LiquidLink>
          </div>
          <div className="flex mt-4 items-center gap-3 text-[8px] font-extrabold leading-[1.6] tracking-[.13em] max-sm:hidden">
            <span className="text-[35px] leading-none text-cherry">✳</span>
            <span>
              REAL INGREDIENTS.
              <br />
              UNREAL LITTLE MOMENTS.
            </span>
          </div>
        </div>
        <div className="relative isolate -ml-5 min-h-130 animate-none overflow-hidden rounded-art bg-blush before:absolute before:inset-0 before:-z-2 before:bg-[linear-gradient(140deg,#f8d0bc_0%,#f5b1a4_47%,#f6d66b_100%)] before:content-[''] max-tab:ml-0 max-tab:min-h-110 max-sm:ml-0 max-sm:mt-12 max-sm:h-[105vw] max-sm:min-h-0 max-sm:max-h-117.5 max-sm:w-full max-sm:rounded-art-mobile">
          <div className="absolute right-[-3%] top-[-8%] aspect-square w-[75%] animate-sunPulse rounded-full bg-butter opacity-70 mix-blend-screen motion-reduce:animate-none" />
          <div className="absolute left-[10%] top-[9%] z-1 h-[80%] w-[80%] rotate-[-23deg] rounded-full border border-white/70" />
          <div className="absolute left-[-2%] top-[17%] z-1 h-[70%] w-[105%] rotate-34 rounded-full border border-white/70" />
          <span className="absolute left-[5%] top-[10%] z-3 grid h-22.5 w-22.5 animate-stickerBob place-content-center rounded-full bg-butter text-center font-display text-[10px] font-extrabold leading-[1.1] tracking-[-.03em] motion-reduce:animate-none">
            100%
            <br />
            GOOD
            <br />
            MOOD
          </span>
          <span className="absolute bottom-[12%] right-[3%] z-3 grid h-25 w-25 animate-stickerWiggle place-content-center rounded-full bg-cherry text-center font-display text-[10px] font-extrabold leading-[1.1] tracking-[-.03em] text-white motion-reduce:animate-none">
            SCOOP
            <br />
            THERE IT
            <br />
            IS ✳
          </span>
          <ParallaxImage
            src="/hero-scoop.svg"
            alt="Colorful ice cream scoops in a cone"
            wrapperClassName="hero-art-media"
            imageClassName="absolute inset-0 h-full w-full animate-floaty object-cover mix-blend-multiply saturate-110 mask-[linear-gradient(180deg,#000_65%,transparent_100%)] motion-reduce:animate-none"
            strength={18}
            tilt={5}
          />
          <div className="absolute bottom-2 md:bottom-6 left-32 right-32 z-4 flex flex-col lg:flex-row justify-between text-[8px] font-extrabold tracking-[.12em] text-white [text-shadow:0_1px_8px_#0004]">
            <span>01 / THE GOOD STUFF</span>
            <span>MADE FRESH, ALWAYS.</span>
          </div>
        </div>
        <div className="absolute bottom-5 left-0 right-0 flex justify-between text-[8px] font-extrabold tracking-[.13em] text-[#81786c] max-sm:bottom-4.5 max-sm:text-[6px]">
          <span>SCROLL A LITTLE, STAY A WHILE</span>
          <span>EST. WITH LOVE · 2026</span>
        </div>
      </section>

      <div
        className="-rotate-1 mb-28 overflow-hidden bg-cherry py-4.5 text-cream max-sm:mb-19 max-sm:py-3.5"
        aria-label="Small batch, big personality"
      >
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="whitespace-nowrap pr-4.5 font-display text- font-extrabold tracking-[.04em] max-sm:text-[13px]"
            >
              SMALL BATCH <b className="px-4.5 ml-4 text-butter">✳</b> BIG
              PERSONALITY <b className="px-4.5 text-butter">✳</b> NO BORING
              FLAVORS <b className="px-4.5 text-butter">✳</b> GOOD DAYS START
              HERE <b className="px-4.5 text-butter">✳</b>
            </span>
          ))}
        </div>
      </div>

      <section className="border-b border-line py-9.5" data-reveal="">
        <dl
          className={`${WRAP} grid grid-cols-4 gap-6 max-tab:grid-cols-2 max-sm:gap-4.5`}
        >
          <div>
            <dt className="text-[9px] font-extrabold leading-normal tracking-[.14em] opacity-[.62]">
              SMALL-BATCH FLAVORS
            </dt>
            <dd className="m-0 mt-2.5 font-display text-[clamp(40px,5vw,66px)] font-extrabold leading-[.9] tracking-[-.07em] text-cherry max-sm:text-[42px]">
              <CountUp value={6} />
            </dd>
          </div>
          <div>
            <dt className="text-[9px] font-extrabold leading-normal tracking-[.14em] opacity-[.62]">
              INGREDIENTS WE CAN PRONOUNCE
            </dt>
            <dd className="m-0 mt-2.5 font-display text-[clamp(40px,5vw,66px)] font-extrabold leading-[.9] tracking-[-.07em] text-cherry max-sm:text-[42px]">
              <CountUp value={100} suffix="%" />
            </dd>
          </div>
          <div>
            <dt className="text-[9px] font-extrabold leading-normal tracking-[.14em] opacity-[.62]">
              BORING SCOOPS ON THE MENU
            </dt>
            <dd className="m-0 mt-2.5 font-display text-[clamp(40px,5vw,66px)] font-extrabold leading-[.9] tracking-[-.07em] text-cherry max-sm:text-[42px]">
              <CountUp value={0} />
            </dd>
          </div>
          <div>
            <dt className="text-[9px] font-extrabold leading-normal tracking-[.14em] opacity-[.62]">
              VERY GOOD DECISION
            </dt>
            <dd className="m-0 mt-2.5 font-display text-[clamp(40px,5vw,66px)] font-extrabold leading-[.9] tracking-[-.07em] text-cherry max-sm:text-[42px]">
              <CountUp value={1} />
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="grid grid-cols-2 gap-px border-b border-line bg-line max-tab:grid-cols-1"
        aria-label="How Scoop Social works"
      >
        <article className="bg-cream px-[max(24px,calc((100vw-1280px)/2))] py-[clamp(58px,7vw,110px)]">
          <span className={EYEBROW}>PICK YOUR PERSONALITY</span>
          <h2
            data-reveal="mask"
            className={`mb-5.5 mt-6 ${DISPLAY} text-[clamp(44px,5.4vw,76px)] leading-[.93]`}
          >
            You pick
            <br />
            the flavor.
          </h2>
          <p
            data-reveal=""
            className="max-w-[38em] leading-[1.7] opacity-[.82]"
          >
            Six small batches, each with its own mood. Go for the bright and
            fruity, the deeply chocolatey, or the one with cookie pieces in it.
            There are no wrong answers here.
          </p>
          <ul
            data-reveal=""
            className="m-0 mb-8.5 mt-7 grid list-none gap-3 p-0"
          >
            <li className="relative pl-6 text-[13px] leading-normal before:absolute before:left-0 before:top-0 before:text-cherry before:content-['✳']">
              Real fruit, chocolate, nuts and cream
            </li>
            <li className="relative pl-6 text-[13px] leading-normal before:absolute before:left-0 before:top-0 before:text-cherry before:content-['✳']">
              Made in small batches, never rushed
            </li>
            <li className="relative pl-6 text-[13px] leading-normal before:absolute before:left-0 before:top-0 before:text-cherry before:content-['✳']">
              Full flavor notes on every pint
            </li>
            <li className="relative pl-6 text-[13px] leading-normal before:absolute before:left-0 before:top-0 before:text-cherry before:content-['✳']">
              Fresh scoops at every pop-up
            </li>
          </ul>
          <LiquidLink href="/flavors" variant="dark">
            See all six flavors <ArrowUpRight size={16} />
          </LiquidLink>
        </article>
        <article className="bg-espresso px-[max(24px,calc((100vw-1280px)/2))] py-[clamp(58px,7vw,110px)] text-cream">
          <span className={EYEBROW}>WE HANDLE THE SCOOPING</span>
          <h2
            data-reveal="mask"
            className={`mb-5 mt-6 ${DISPLAY} text-[clamp(44px,5.4vw,76px)] leading-[.93] text-white mix-blend-difference [-webkit-text-fill-color:currentColor]`}
          >
            We bring
            <br />
            the good mood.
          </h2>
          <p
            data-reveal=""
            className="max-w-[38em] leading-[1.7] opacity-[.82]"
          >
            From the first mix to the final swirl, every scoop is made with a
            little extra care. We keep the batches small so the flavor stays
            big, and we bring the whole setup to your neighborhood.
          </p>
          <ul data-reveal="" className="m-0 mb-8 mt-7 grid list-none gap-3 p-0">
            <li className="relative pl-6 text-[13px] leading-normal before:absolute before:left-0 before:top-0 before:text-butter before:content-['✳']">
              Hand-scooped, never machine-packed
            </li>
            <li className="relative pl-6 text-[13px] leading-normal before:absolute before:left-0 before:top-0 before:text-butter before:content-['✳']">
              Pop-up dates and studio drops all week
            </li>
            <li className="relative pl-6 text-[13px] leading-normal before:absolute before:left-0 before:top-0 before:text-butter before:content-['✳']">
              Bring a friend, bring an appetite
            </li>
            <li className="relative pl-6 text-[13px] leading-normal before:absolute before:left-0 before:top-0 before:text-butter before:content-['✳']">
              Every pint is made to be shared
            </li>
          </ul>
          <LiquidLink href="/our-story" variant="light">
            Meet the scoop shop <ArrowUpRight size={16} />
          </LiquidLink>
        </article>
      </section>

      <section
        className={`${WRAP} py-31 max-sm:pb-20`}
        id="lineup"
        data-reveal=""
      >
        <div className="mb-11 grid grid-cols-[1fr_280px_54px] items-end gap-7.5 max-tab:grid-cols-[minmax(0,1fr)_220px_46px] max-tab:gap-5 max-sm:mb-7 max-sm:grid-cols-[minmax(0,1fr)_42px] max-sm:gap-4">
          <div>
            <span className={EYEBROW}>THE LINEUP / 001-006</span>
            <h2
              data-reveal="mask"
              className="mt-5 font-display text-[clamp(54px,6.1vw,82px)] leading-[.9] tracking-[-.08em] max-sm:text-[62px]"
            >
              Six flavors.
              <br />
              <ColorText as="em" className="font-serif font-normal text-cherry">
                Zero
              </ColorText>{" "}
              boring ones.
            </h2>
          </div>
          <p className="m-0 mb-2 text-xs leading-[1.8] text-clay max-sm:col-span-full max-sm:mb-0 max-sm:max-w-72">
            From cherry chocolate to brown-butter cookie, there's a pint for
            every mood. Pick your favorite and add it to your bag.
          </p>
          <Link
            href="/flavors"
            className="grid h-12 w-12 place-items-center rounded-full border border-espresso transition duration-250 hover:rotate-45 hover:bg-butter [&_svg]:transition-transform [&_svg]:duration-250 [&_svg]:ease-cta hover:[&_svg]:translate-x-0.75 hover:[&_svg]:-translate-y-0.75 max-tab:h-11.5 max-tab:w-11.5 max-sm:col-start-2 max-sm:row-start-1 max-sm:h-11 max-sm:w-11"
            aria-label="View all flavors"
          >
            <ArrowUpRight />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-2 max-sm:gap-x-3 max-sm:gap-y-6.5 max-tiny:gap-x-2.5 max-tiny:gap-y-6">
          {products.slice(0, 3).map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center max-sm:mt-9">
          <Link href="/flavors" className={UNDERLINE_LINK}>
            ALL SIX FLAVORS <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section
        className="grid min-h-147.5 grid-cols-2 overflow-hidden bg-cherry text-cream max-sm:grid-cols-1"
        id="drop"
        data-reveal=""
      >
        <div className="relative min-h-147.5 max-sm:min-h-82.5">
          <ParallaxImage
            src="/flavor-blueberry.svg"
            alt="A blueberry ice cream scoop"
            wrapperClassName="drop-image-media"
            imageClassName="absolute inset-0 h-full w-full object-cover opacity-85 mix-blend-screen"
            strength={12}
            tilt={4}
          />
          <span className="absolute bottom-7 left-8.5 text-[8px] font-extrabold tracking-micro">
            THE LIMITED DROP / NO. 04
          </span>
        </div>
        <div className="relative overflow-hidden px-[clamp(40px,8vw,125px)] py-20.5 max-tab:px-11 max-tab:py-17.5 max-sm:px-7 max-sm:pb-11.25 max-sm:pt-13">
          <span className={EYEBROW}>HERE FOR A GOOD TIME</span>
          <span className="absolute right-[12%] top-[17%] animate-spinSlow text-[82px] text-butter motion-reduce:animate-none max-sm:right-[10%] max-sm:top-[12%] max-sm:text-[55px]">
            ✳
          </span>
          <h2
            data-reveal="mask"
            className="relative z-1 mb-6.5 mt-12.5 font-display text-[clamp(70px,8vw,108px)] leading-[.82] tracking-[-.09em] max-sm:mb-5.5 max-sm:mt-8.75 max-sm:text-[clamp(70px,21vw,83px)]"
          >
            Summer,
            <br />
            <ColorText as="em" className="font-serif font-normal text-butter">
              scooped.
            </ColorText>
          </h2>
          <p className="mb-6.75 max-w-77.5 text-xs leading-[1.8] text-[#ffe1d8]">
            Meet Blue Moon: blueberry, lemon and a little cheesecake situation.
            Bright, creamy, gone before you know it.
          </p>
          <LiquidLink href="/flavors/blue-moon" variant="light">
            Shop Blue Moon <ArrowUpRight size={16} />
          </LiquidLink>
          <span className="mt-17 block text-[8px] font-extrabold tracking-micro max-sm:mt-10.5">
            LIMITED BATCH · WHILE IT LASTS
          </span>
        </div>
      </section>

      <section
        className={`${WRAP} py-[clamp(80px,10vw,140px)]`}
        id="details"
        data-reveal=""
      >
        <div className="mb-12.5 grid grid-cols-2 items-end gap-x-17.5 gap-y-6 max-sm:grid-cols-1">
          <span className={`${EYEBROW} col-span-full`}>
            THE SCOOP LEDGER / NO SURPRISES
          </span>
          <h2
            data-reveal="mask"
            className={`m-0 ${DISPLAY} text-[clamp(48px,6vw,84px)] leading-[.92]`}
          >
            Good math.
            <br />
            <ColorText as="em" className="font-serif font-normal text-cherry">
              Great
            </ColorText>{" "}
            scoops.
          </h2>
          <p className="m-0 max-w-[34em] leading-[1.7] opacity-75">
            Pick the size that fits the moment. Every scoop is made the same way
            - carefully, in small batches, with real ingredients.
          </p>
        </div>
        <table className="w-full border-collapse">
          <caption className="sr-only">Scoop Social sizes and prices</caption>
          <tbody>
            <tr data-reveal="rule">
              <th
                scope="row"
                className="py-7 text-left align-middle max-sm:py-5"
              >
                <span className="block font-display text-[26px] font-extrabold tracking-[-.04em] max-sm:text-xl">
                  Single scoop
                </span>
                <span className="mt-1.5 block text-[11px] leading-normal opacity-[.62]">
                  One perfect cup or cone, scooped fresh.
                </span>
              </th>
              <td className="whitespace-nowrap py-7 text-right align-middle font-display text-[34px] font-extrabold tracking-tighter max-sm:py-5 max-sm:text-6">
                $4.50
              </td>
              <td className="py-7 text-right align-middle text-[10px] font-extrabold tracking-micro opacity-[.55] max-sm:py-5">
                4 oz
              </td>
            </tr>
            <tr data-reveal="rule">
              <th
                scope="row"
                className="py-7 text-left align-middle max-sm:py-5"
              >
                <span className="block font-display text-[26px] font-extrabold tracking-[-.04em] max-sm:text-xl">
                  Pint
                </span>
                <span className="mt-1.5 block text-[11px] leading-normal opacity-[.62]">
                  The good kind of commitment. Take it home.
                </span>
              </th>
              <td className="whitespace-nowrap py-7 text-right align-middle font-display text-[34px] font-extrabold tracking-tighter max-sm:py-5 max-sm:text-6">
                $8-$10
              </td>
              <td className="py-7 text-right align-middle text-[10px] font-extrabold tracking-micro opacity-[.55] max-sm:py-5">
                16 oz
              </td>
            </tr>
            <tr data-reveal="rule">
              <th
                scope="row"
                className="py-7 text-left align-middle max-sm:py-5"
              >
                <span className="block font-display text-[26px] font-extrabold tracking-[-.04em] max-sm:text-xl">
                  Party tub
                </span>
                <span className="mt-1.5 block text-[11px] leading-normal opacity-[.62]">
                  For sharing, or for a very dedicated afternoon.
                </span>
              </th>
              <td className="whitespace-nowrap py-7 text-right align-middle font-display text-[34px] font-extrabold tracking-tighter max-sm:py-5 max-sm:text-6">
                $21.60+
              </td>
              <td className="py-7 text-right align-middle text-[10px] font-extrabold tracking-micro opacity-[.55] max-sm:py-5">
                32 oz
              </td>
            </tr>
          </tbody>
        </table>
        <LiquidLink href="/flavors" variant="dark" className="mt-9">
          Build your bag <ArrowUpRight size={16} />
        </LiquidLink>
      </section>

      <section
        className={`${WRAP} grid grid-cols-2 items-center gap-25 pb-36.25 pt-35 max-tab:gap-11.25 max-sm:grid-cols-1 max-sm:gap-6 max-sm:pb-21.25 max-sm:pt-20`}
        id="story"
        data-reveal=""
      >
        <div className="group relative grid h-112.5 place-items-center max-sm:h-85">
          <div className="relative h-[90%] w-[78%] rotate-[-8deg] overflow-hidden rounded-blob bg-pistachio">
            <ParallaxImage
              src="/flavor-pistachio.svg"
              alt="Freshly scooped pistachio ice cream"
              wrapperClassName="overflow-hidden rounded-[inherit]"
              imageClassName="h-full w-full rotate-[8deg] scale-[1.12] object-cover mix-blend-multiply"
              strength={12}
              tilt={5}
            />
          </div>
          <span className="absolute right-[2%] top-[10%] grid h-25 w-25 rotate-12 place-content-center rounded-full bg-butter text-center font-display text-[11px] font-extrabold leading-[1.15] transition-transform duration-350 ease-cta group-hover:rotate-[-8deg] group-hover:scale-110">
            A LITTLE
            <br />
            EXTRA ✳
          </span>
          <span className="absolute bottom-[3%] left-0 rotate-180 text-[8px] font-extrabold tracking-[.12em] [writing-mode:vertical-rl]">
            MADE WITH FEELING, NOT SHORTCUTS.
          </span>
        </div>
        <div>
          <span className={EYEBROW}>A NOTE FROM THE SCOOP SHOP</span>
          <h2
            data-reveal="mask"
            className="my-6 font-display text-[clamp(48px,5.4vw,73px)] leading-[.9] tracking-[-.08em] max-sm:my-5 max-sm:text-[58px]"
          >
            Ice cream made
            <br />
            with{" "}
            <ColorText
              as="em"
              className="font-serif font-normal text-blueberry"
            >
              feeling
            </ColorText>
            ,<br />
            not shortcuts.
          </h2>
          <p className="mb-7.5 max-w-97.5 text-xs leading-[1.9] text-clay max-sm:text-[11px]">
            Scoop Social is a tiny independent ice cream studio. We use real
            ingredients, make small batches, and give every flavor its own
            personality.
          </p>
          <Link href="/our-story" className={UNDERLINE_LINK}>
            READ OUR STORY <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section
        className="grid min-h-130 grid-cols-[1fr_0.8fr] overflow-hidden bg-butter max-sm:grid-cols-1"
        id="find"
        data-reveal=""
      >
        <div className="relative px-[8vw] py-20 pl-[max(48px,calc((100vw-1280px)/2))] max-tab:pl-12 max-sm:px-6 max-sm:pb-13.75 max-sm:pt-16.25">
          <span className={EYEBROW}>
            YOUR HAPPY PLACE IS CLOSER THAN YOU THINK
          </span>
          <h2
            data-reveal="mask"
            className="mb-6 mt-9 font-display text-[clamp(65px,7.8vw,104px)] leading-[.82] tracking-[-.09em] max-sm:mb-5 max-sm:mt-7 max-sm:text-[83px]"
          >
            Find us.
            <br />
            <ColorText as="em" className="font-serif font-normal text-cherry">
              Scoop
            </ColorText>{" "}
            happily.
          </h2>
          <p className="m-0 mb-6 text-xs text-[#675a3b]">
            See where we're popping up, grab a pint, and bring a friend. The
            good stuff is never far away.
          </p>
          <LiquidLink href="/find-us" variant="dark">
            See where to find us <ArrowUpRight size={16} />
          </LiquidLink>
          <span className="absolute right-[9%] top-[20%] animate-spin26 text-[76px] text-cherry motion-reduce:animate-none max-sm:right-[10%] max-sm:top-[15%] max-sm:text-[50px]">
            ✳
          </span>
        </div>
        <div className="relative min-h-130 overflow-hidden max-sm:h-[75vw] max-sm:min-h-80">
          <ParallaxImage
            src="/flavor-cocoa.svg"
            alt="A rich chocolate ice cream scoop"
            wrapperClassName="find-photo-media"
            imageClassName="h-full w-full object-cover mix-blend-multiply"
            strength={12}
            tilt={4}
          />
        </div>
      </section>

      <section
        className="bg-espresso px-[max(24px,calc((100vw-1280px)/2))] py-[clamp(80px,10vw,140px)] text-cream"
        aria-labelledby="scoop-voices-title"
        data-reveal=""
      >
        <span className={`${EYEBROW} text-butter`}>NOTES FROM THE COUNTER</span>
        <h2
          data-reveal="mask"
          id="scoop-voices-title"
          className={`mb-13.5 mt-5.5 ${DISPLAY} text-[clamp(48px,6vw,84px)] leading-[.92]`}
        >
          Good days,
          <br />
          scoop by scoop.
        </h2>
        <div className="grid grid-cols-3 gap-7 max-sm:grid-cols-1">
          <figure
            data-reveal="rule"
            className="m-0 border-t border-lineLight pt-6"
          >
            <blockquote className="m-0 mb-6 font-display text-[23px] font-semibold leading-tight tracking-[-.03em]">
              That first spoonful when the flavor hits exactly right. No
              speeches needed.
            </blockquote>
            <figcaption className="grid gap-1.25 text-[10px] tracking-[.12em] opacity-70">
              <b className="text-butter">THE GOOD STUFF</b>
              <span>A note from the counter</span>
            </figcaption>
          </figure>
          <figure
            data-reveal="rule"
            className="m-0 border-t border-lineLight pt-6"
          >
            <blockquote className="m-0 mb-6 font-display text-[23px] font-semibold leading-tight tracking-[-.03em]">
              Small batch means we can chase the good ideas fast. Today's
              favorite was yesterday's experiment.
            </blockquote>
            <figcaption className="grid gap-1.25 text-[10px] tracking-[.12em] opacity-70">
              <b className="text-butter">THE EXPERIMENT</b>
              <span>A note from the studio</span>
            </figcaption>
          </figure>
          <figure
            data-reveal="rule"
            className="m-0 border-t border-lineLight pt-6"
          >
            <blockquote className="m-0 mb-6 font-display text-[23px] font-semibold leading-tight tracking-[-.03em]">
              Someone always comes back for one more scoop. We like to pretend
              we're surprised.
            </blockquote>
            <figcaption className="grid gap-1.25 text-[10px] tracking-[.12em] opacity-70">
              <b className="text-butter">THE REGULARS</b>
              <span>A note from the pop-up</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={`${WRAP} py-[clamp(80px,10vw,140px)]`} data-reveal="">
        <span className={EYEBROW}>THE LITTLE DETAILS</span>
        <h2
          data-reveal="mask"
          className={`mb-11 mt-5.5 ${DISPLAY} text-[clamp(48px,6vw,84px)] leading-[.92]`}
        >
          Questions,
          <br />
          <ColorText as="em" className="font-serif font-normal text-cherry">
            answered.
          </ColorText>
        </h2>
        <div className="max-w-full">
          <details data-reveal="rule" className="group py-6">
            <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-5 font-display text-2xl font-bold tracking-[-.03em] [list-style:none] after:text-[26px] after:text-cherry after:content-['+'] group-open:after:content-['−'] [&::-webkit-details-marker]:hidden max-sm:text-xl">
              What's actually in the ice cream?
            </summary>
            <p className="mb-0 mt-4.5 max-w-[42em] leading-[1.75] opacity-75">
              Real fruit, chocolate, nuts, cream and the occasional cookie. If
              we can't pronounce it, it doesn't go in the mix.
            </p>
          </details>
          <details data-reveal="rule" className="group py-6">
            <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-5 font-display text-2xl font-bold tracking-[-.03em] [list-style:none] after:text-[26px] after:text-cherry after:content-['+'] group-open:after:content-['−'] [&::-webkit-details-marker]:hidden max-sm:text-xl">
              Can I find you in person?
            </summary>
            <p className="mb-0 mt-4.5 max-w-[42em] leading-[1.75] opacity-75">
              Yes. We're at markets and pop-ups through the week, and the studio
              window opens for small-batch drops. See the full list on our Find
              a scoop page.
            </p>
          </details>
          <details data-reveal="rule" className="group py-6">
            <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-5 font-display text-2xl font-bold tracking-[-.03em] [list-style:none] after:text-[26px] after:text-cherry after:content-['+'] group-open:after:content-['−'] [&::-webkit-details-marker]:hidden max-sm:text-xl">
              How do I choose a flavor?
            </summary>
            <p className="mb-0 mt-4.5 max-w-[42em] leading-[1.75] opacity-75">
              Start with the one that sounds like your mood. Cherry for a little
              drama, pistachio for a classic, Blue Moon when you want something
              bright.
            </p>
          </details>
          <details data-reveal="rule" className="group py-6">
            <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-5 font-display text-2xl font-bold tracking-[-.03em] [list-style:none] after:text-[26px] after:text-cherry after:content-['+'] group-open:after:content-['−'] [&::-webkit-details-marker]:hidden max-sm:text-xl">
              Do you make limited batches?
            </summary>
            <p className="mb-0 mt-4.5 max-w-[42em] leading-[1.75] opacity-75">
              Always. Limited drops are announced right here on the site, and
              they tend to disappear quickly.
            </p>
          </details>
        </div>
      </section>

      <section
        className="bg-cherry px-6 py-[clamp(90px,11vw,160px)] text-center text-cream"
        data-reveal=""
      >
        <span className={`${EYEBROW} justify-center text-butter`}>
          ENOUGH READING
        </span>
        <h2
          data-reveal="mask"
          className="mb-5.5 mt-6.5 font-display text-[clamp(52px,8vw,112px)] font-extrabold leading-[.88] tracking-[-.08em]"
        >
          Let's find your
          <br />
          <ColorText as="em" className="font-serif font-normal text-butter">
            favorite scoop.
          </ColorText>
        </h2>
        <p className="mx-auto mb-8.5 max-w-[34em] leading-[1.6] opacity-90">
          Six flavors, one very good decision. Your bag is waiting.
        </p>
        <LiquidLink href="/flavors" variant="light" className="mx-auto">
          Shop all flavors <ArrowUpRight size={16} />
        </LiquidLink>
      </section>
    </div>
  );
}
