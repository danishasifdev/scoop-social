import { ArrowUpRight, MapPin } from "lucide-react";
import LiquidLink from "@/components/LiquidLink";
import ParallaxImage from "@/components/ParallaxImage";

export const metadata = { title: "Find a Scoop - Scoop Social®" };

const WRAP =
  "mx-auto w-[min(1280px,calc(100%-96px))] max-tab:w-[calc(100%-48px)] max-mob:w-[calc(100%-36px)] max-tiny:w-[calc(100%-28px)]";
const EYEBROW =
  "inline-flex items-center gap-[9px] text-eyebrow font-extrabold tracking-eyebrow";

const STOPS = [
  {
    day: "SATURDAY",
    time: "11:00 - 18:00",
    place: "Weekend Market",
    detail: "Scoops by the cup or pint. Come early for the good flavors.",
    color: "#F3B5B4",
    image: "/flavor-cherry.svg",
  },
  {
    day: "SUNDAY",
    time: "12:00 - 17:00",
    place: "Riverside Pop-Up",
    detail: "Sunny days, shady spot, very good ice cream.",
    color: "#C9DB9A",
    image: "/flavor-pistachio.svg",
  },
  {
    day: "WEDNESDAY",
    time: "14:00 - 19:00",
    place: "The Studio Window",
    detail: "Small-batch drops straight from the freezer to you.",
    color: "#B9B8F1",
    image: "/flavor-blueberry.svg",
  },
];

export default function FindUsPage() {
  return (
    <section
      className={`${WRAP} pb-30 pt-20 max-sm:pb-20 max-sm:pt-13.75`}
    >
      <div
        className="grid min-h-140 grid-cols-[1fr_.85fr] items-center gap-[7%] max-tab:min-h-0 max-tab:gap-[4%] max-sm:grid-cols-1 max-sm:gap-10"
        data-reveal="up"
      >
        <div>
          <span className={EYEBROW}>
            <span className="h-1.75 w-1.75 rounded-full bg-cherry shadow-[0_0_0_4px_#e94f3720]" />{" "}
            FIND A SCOOP / COME SAY HI
          </span>
          <h1 className="my-6.5 font-display text-[clamp(72px,8vw,120px)] font-bold leading-[.88] tracking-[-.085em] max-sm:my-6 max-sm:text-[clamp(66px,17vw,96px)]">
            Good ice cream.
            <br />
            <em className="font-serif font-normal text-blueberry">
              Close to you.
            </em>
          </h1>
          <p className="mb-7.5 max-w-107.5 text-sm leading-[1.85] text-[#716a60]">
            We're out in the neighborhood at markets and pop-ups all week. Pick
            a stop, bring a friend, and we'll handle the scoops.
          </p>
          <LiquidLink href="/flavors" variant="dark">
            Build your bag first <ArrowUpRight size={16} />
          </LiquidLink>
        </div>
        <div className="relative grid h-125 place-items-center rounded-locate-art bg-butter max-tab:h-105 max-sm:h-auto max-sm:aspect-square max-sm:max-h-97.5">
          <ParallaxImage
            src="/flavor-cocoa.svg"
            alt="A chocolate ice cream scoop"
            wrapperClassName="locate-hero-art-media overflow-hidden rounded-[inherit]"
            imageClassName="h-full w-full rounded-[inherit] object-cover mix-blend-multiply"
            strength={16}
            tilt={5}
          />
          <span className="absolute -right-2.5 top-6 grid h-18.5 w-18.5 -rotate-10 place-items-center animate-pinBob rounded-full bg-cherry text-white max-sm:-right-1.5 max-sm:h-14.5 max-sm:w-14.5">
            <MapPin size={34} />
          </span>
          <span className="absolute bottom-8 -left-6 -rotate-7 rounded-pill border border-espresso bg-cream px-4.5 py-3 text-[9px] font-extrabold leading-[1.3] tracking-widest max-sm:bottom-4.5 max-sm:-left-2 max-sm:px-3 max-sm:py-2.25">
            SCOOP
            <br />
            SOCIAL
            <br />
            <em className="font-serif font-normal text-cherry">near you</em>
          </span>
        </div>
      </div>

      <div
        className="mb-9 mt-27.5 flex items-end justify-between gap-7.5 border-t border-line pt-10 max-sm:mb-7 max-sm:mt-17.5 max-sm:block"
        data-reveal="left"
      >
        <h2 className="m-0 font-display text-[clamp(48px,5.5vw,78px)] leading-[.92] tracking-[-.08em]">
          Where to
          <br />
          find us.
        </h2>
        <p className="m-0 mb-1.5 max-w-65 text-xs leading-[1.7] text-clay max-sm:mb-0 max-sm:mt-4.5">
          Rotating pop-ups, fresh batches and a very friendly scoop crew. Check
          back for the latest stops.
        </p>
      </div>

      <div className="grid gap-3.5">
        {STOPS.map((stop, i) => (
          <article
            className="group relative grid grid-cols-[110px_1fr_auto] items-center gap-6 rounded-sm border border-line bg-white/55 py-3.5 pl-3.5 pr-5.5 transition-[transform,translate,scale,rotate,box-shadow] duration-300 hover:translate-x-2 hover:rotate-[-0.4deg] hover:shadow-spot max-tab:grid-cols-[92px_1fr_auto] max-tab:gap-4 max-sm:grid-cols-[72px_1fr] max-sm:gap-3 max-sm:p-2.75"
            key={stop.day}
            style={{ "--spot-color": stop.color }}
            data-reveal="right"
          >
            <div className="relative h-25 w-27.5 overflow-hidden rounded-[3px] bg-(--spot-color) max-tab:h-23 max-tab:w-23 max-sm:h-19.5 max-sm:w-18">
              <ParallaxImage
                src={stop.image}
                alt=""
                wrapperClassName="spot-media"
                imageClassName="h-full w-full object-cover mix-blend-multiply"
                strength={8}
                tilt={3}
              />
            </div>
            <div className="spot-info">
              <span className="text-[8px] font-extrabold tracking-[.14em] text-cherry">
                {stop.day} <span className="text-espresso">·</span> {stop.time}
              </span>
              <h3 className="mb-1.5 mt-2.25 font-display text-7 tracking-[-.06em] max-sm:text-[23px]">
                {stop.place}
              </h3>
              <p className="mb-2.5 text-[11px] text-clay">{stop.detail}</p>
              <span className="text-1.75 font-extrabold tracking-[.14em] text-dusk">
                STOP 0{i + 1} / SCOOP SOCIAL
              </span>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-full border border-line transition duration-200 group-hover:rotate-45 group-hover:bg-espresso group-hover:text-cream max-sm:hidden">
              <ArrowUpRight size={20} />
            </span>
          </article>
        ))}
      </div>

      <div
        className="mt-20 grid grid-cols-[auto_1fr_auto] items-center gap-6.5 rounded-sm bg-cherry px-[6%] py-12.5 text-cream max-sm:mt-12 max-sm:grid-cols-1 max-sm:gap-4 max-sm:px-5.5 max-sm:py-9"
        data-reveal="zoom"
      >
        <span className="text-[54px] text-butter max-sm:text-[40px]">✳</span>
        <div>
          <h2 className="mb-2 font-display text-[clamp(34px,4vw,54px)] tracking-[-.07em]">
            Can't make a pop-up?
          </h2>
          <p className="m-0 max-w-120 text-xs leading-[1.7] text-[#ffe1d8]">
            All six flavors are right here. Pick a pint, add it to your bag, and
            bring the good mood home.
          </p>
        </div>
        <LiquidLink href="/flavors" variant="light">
          Shop the flavors <ArrowUpRight size={16} />
        </LiquidLink>
      </div>
    </section>
  );
}
