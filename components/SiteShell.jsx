"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "./cart/CartProvider";
import CartDrawer from "./cart/CartDrawer";
import CartCelebration from "./cart/CartCelebration";

const NAV_LINKS = [
  { href: "/flavors", label: "The flavors" },
  { href: "/our-story", label: "Our story" },
  { href: "/find-us", label: "Find a scoop" },
];

export default function SiteShell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const bagRef = useRef(null);
  const { count, setOpen, celebration } = useCart();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-60 max-w-full bg-cream/95">
        <div className="mx-auto flex md:px-6 h-19 max-w-7xl items-center justify-between border-b border-espresso/15 backdrop-blur-xl max-sm:w-[calc(100%-36px)]">
          <Link
            href="/"
            className="flex items-center gap-2.5 py-1 font-display text-lg font-extrabold leading-[.83] tracking-[-.07em] transition-opacity active:opacity-70 max-sm:py-2.5"
          >
            <span className="rotate-[-14deg] text-[35px] leading-none text-cherry">
              ✳
            </span>
            <span>
              SCOOP
              <br />
              SOCIAL<span className="ml-0.5 align-top text-[8px]">®</span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-10.5 text-xs font-semibold sm:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition-colors hover:text-cherry ${active ? "text-cherry after:absolute after:left-1/2 after:-bottom-2.5 after:h-1.25 after:w-1.25 after:-translate-x-1/2 after:rounded-full after:bg-cherry after:content-['']" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button
              ref={bagRef}
              className={`flex items-center gap-2.5 rounded-full border border-espresso bg-transparent px-4.25 py-3 text-[11px] font-bold transition-[background-color,color,transform,scale] duration-200 hover:bg-espresso hover:text-cream active:scale-95 max-sm:px-3 max-sm:py-3.5 max-sm:text-[10px] ${celebration ? "animate-bagPop" : ""}`}
              onClick={() => setOpen(true)}
              aria-label={`Open shopping bag, ${count} items`}
            >
              <ShoppingBag size={17} />
              <span>Bag ({count})</span>
            </button>
            <button
              className="hidden place-items-center border-0 bg-transparent p-2.5 transition-transform active:scale-95 max-sm:grid"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-70 flex animate-menuIn flex-col justify-center gap-1.5 bg-espresso px-5.5 pb-8.5 pt-27.5 sm:hidden">
          <button
            type="button"
            className="absolute right-5.5 top-6 grid h-11 w-11 place-items-center rounded-full border border-cream/25 bg-cream/10 text-cream transition-colors hover:bg-cream hover:text-espresso"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-end justify-between gap-3.5 border-b border-cream/15 py-3.5 font-display text-[clamp(46px,12vw,72px)] font-extrabold leading-[.94] tracking-[-.07em] transition-opacity active:opacity-70 ${index === 0 ? "text-cherry" : index === 1 ? "text-butter" : "text-pistachio"} ${pathname === link.href ? "underline decoration-[3px] underline-offset-[6px]" : ""}`}
            >
              {link.label}{" "}
              <ArrowUpRight
                size={18}
                className="mb-2.5 shrink-0 stroke-[2.5]"
              />
            </Link>
          ))}
        </div>
      )}

      <main>{children}</main>

      <footer
        className="site-footer bg-espresso px-[max(48px,calc((100vw-1280px)/2))] pb-6 pt-16.25 text-cream max-tab:px-12 max-sm:px-5.5 max-sm:pb-5 max-sm:pt-12"
        data-snap="end"
      >
        <div className="grid grid-cols-3 items-start pb-17.5 max-sm:grid-cols-2 max-sm:gap-x-4 max-sm:gap-y-10 max-sm:pb-11">
          <div>
            <div className="font-display text-12 font-extrabold leading-[.76] tracking-[-.09em] max-sm:text-[42px]">
              SCOOP
              <br />
              SOCIAL<span className="ml-1 align-top text-[10px]">®</span>
            </div>
            <p className="mt-6 text-[10px] leading-[1.8] text-[#b6ada1]">
              Small batch. Big personality.
              <br />
              Made for the very good days.
            </p>
          </div>
          <div className="grid justify-center gap-4 text-[11px] max-sm:col-start-1 max-sm:row-start-2 max-sm:justify-start">
            <Link
              href="/flavors"
              className="flex items-center gap-1.5 transition-colors hover:text-cherry active:text-cherry max-sm:py-4"
            >
              All flavors
            </Link>
            <Link
              href="/our-story"
              className="flex items-center gap-1.5 transition-colors hover:text-cherry active:text-cherry max-sm:py-4"
            >
              Our story
            </Link>
            <Link
              href="/find-us"
              className="flex items-center gap-1.5 transition-colors hover:text-cherry active:text-cherry max-sm:py-4"
            >
              Find a scoop
            </Link>
            <Link
              href="/flavors"
              className="flex items-center gap-1.5 transition-colors hover:text-cherry active:text-cherry max-sm:py-4"
            >
              Build your bag <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="grid h-30 w-30 rotate-[9deg] place-content-center justify-self-end rounded-full bg-butter text-center font-display text-3.5 font-extrabold leading-[1.05] text-espresso max-sm:col-start-2 max-sm:row-start-1 max-sm:h-25 max-sm:w-25">
            A LITTLE
            <br />
            MORE
            <br />
            <em className="font-serif text-[22px] font-normal">extra.</em>
          </div>
        </div>
        <div className="flex justify-between border-t border-white/30 pt-5 text-1.75 tracking-[.14em] text-[#a89f93] max-sm:flex-wrap max-sm:gap-2.5 max-sm:text-[6px]">
          <span>© 2026 SCOOP SOCIAL STUDIO</span>
          <span className="max-sm:hidden">MADE WITH A LITTLE EXTRA ✳</span>
          <span>NOT YOUR AVERAGE SCOOP</span>
        </div>
      </footer>

      <CartDrawer />
      <CartCelebration bagRef={bagRef} />
    </>
  );
}
