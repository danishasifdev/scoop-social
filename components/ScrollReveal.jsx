"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

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

    let observer;
    if (!reduced && hasIO) {
      root.classList.add("is-motion");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            entry.target.classList.add("is-in");
          });
        },
        { rootMargin: "0px 0px -10% 0px" },
      );

      const targets = [...root.querySelectorAll("[data-reveal]")];
      targets.forEach((el, i) => {
        if (!el.style.getPropertyValue("--i")) {
          el.style.setProperty("--i", String(Math.min(i, 5)));
        }
        observer.observe(el);
      });
    }

    return () => {
      if (observer) observer.disconnect();
      root.classList.remove("is-motion");
      window.removeEventListener("scroll", updateNav);
      window.removeEventListener("resize", syncNavSpace);
      document.documentElement.style.removeProperty("--nav-space");
    };
  }, [pathname]);

  return null;
}
