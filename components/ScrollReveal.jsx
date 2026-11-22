"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const DIRECTIONAL_REVEALS = new Set(["up", "left", "right", "zoom"]);
const HIDDEN_REVEAL = {
  up: "translate-y-6",
  left: "-translate-x-6",
  right: "translate-x-6",
  zoom: "scale-95",
};
const REVEAL_BASE = [
  "opacity-0",
  "blur-[6px]",
  "transition-[opacity,translate,scale,filter]",
  "duration-[900ms]",
  "ease-[cubic-bezier(0.22,1,0.36,1)]",
  "[transition-delay:calc(var(--i,0)*90ms)]",
];
const REVEAL_VISIBLE = [
  "opacity-100",
  "blur-none",
  "translate-x-0",
  "translate-y-0",
  "scale-100",
];

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.querySelector("main");
    if (!root) return undefined;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasIO = "IntersectionObserver" in window;

    const navLinks = [
      ...document.querySelectorAll(
        '.desktop-nav a[href^="#"], .mobile-menu a[href^="#"]',
      ),
    ];

    const syncNavSpace = () => {
      const header = document.querySelector("header");
      const height = header ? header.getBoundingClientRect().height : 0;
      document.documentElement.style.setProperty(
        "--nav-space",
        `${Math.round(height)}px`,
      );
    };

    const updateNav = () => {
      if (!navLinks.length) return;
      const offset = window.scrollY + 140;
      let active = null;
      navLinks.forEach((link) => {
        const section = document.getElementById(
          link.getAttribute("href").slice(1),
        );
        const top = section
          ? section.getBoundingClientRect().top + window.scrollY
          : Infinity;
        if (top <= offset) active = link;
      });
      navLinks.forEach((link) =>
        link.classList.toggle("is-active", link === active),
      );
    };

    syncNavSpace();
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", syncNavSpace);

    const targets = [...root.querySelectorAll("[data-reveal]")];
    const prepared = new Set();
    const pendingFrames = [];
    let observer;

    if (!reduced && hasIO) {
      root.classList.add("is-motion");

      const reveal = (el) => {
        if (!el || el.classList.contains("is-in")) return;
        observer.unobserve(el);
        el.classList.add("is-in");

        if (prepared.has(el)) {
          el.classList.remove(
            "opacity-0",
            "blur-[6px]",
            HIDDEN_REVEAL[el.dataset.reveal],
          );
          el.classList.add(...REVEAL_VISIBLE);
        }
      };

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal(entry.target);
          });
        },
        { rootMargin: "0px 0px -10% 0px" },
      );

      targets.forEach((el, i) => {
        if (!el.style.getPropertyValue("--i")) {
          el.style.setProperty("--i", String(Math.min(i, 5)));
        }

        const variant = el.dataset.reveal;
        if (DIRECTIONAL_REVEALS.has(variant)) {
          el.classList.add(...REVEAL_BASE, HIDDEN_REVEAL[variant]);
          prepared.add(el);
        }

        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          pendingFrames.push(requestAnimationFrame(() => reveal(el)));
        } else {
          observer.observe(el);
        }
      });
    }

    return () => {
      if (observer) observer.disconnect();
      pendingFrames.forEach(cancelAnimationFrame);
      prepared.forEach((el) => {
        el.classList.remove(
          ...REVEAL_BASE,
          ...REVEAL_VISIBLE,
          ...Object.values(HIDDEN_REVEAL),
        );
      });
      prepared.clear();
      root.classList.remove("is-motion");
      window.removeEventListener("scroll", updateNav);
      window.removeEventListener("resize", syncNavSpace);
      document.documentElement.style.removeProperty("--nav-space");
    };
  }, [pathname]);

  return null;
}
