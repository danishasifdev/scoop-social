"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function sectionStops(sections, bar) {
  const view = window.innerHeight - bar;
  const pts = [];

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top + window.scrollY - bar;

    if (section.dataset.snap === "end") {
      pts.push(top + bar + section.offsetHeight - window.innerHeight);
      return;
    }

    pts.push(top);

    const style = window.getComputedStyle(section);
    const content = section.offsetHeight - parseFloat(style.paddingBottom || 0);
    const end = top + content + 24 - view;

    const markers = [...section.querySelectorAll("[data-snap]")]
      .filter((el) => el.dataset.snap !== "end")
      .map((el) => el.getBoundingClientRect().top + window.scrollY - bar);

    if (markers.length) {
      pts.push(...markers);
      if (end > Math.max(top, ...markers) + 40) pts.push(end);
      return;
    }

    for (let y = top + view * 0.85; y < end - 40; y += view * 0.85) {
      pts.push(y);
    }
    if (end > top + 40) pts.push(end);
  });

  return [...new Set(pts.map(Math.round))].sort((a, b) => a - b);
}

export default function WheelSnap() {
  const pathname = usePathname();

  useEffect(() => {
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!fine) return undefined;

    let glide = null;
    let raf = 0;
    let lastWheel = 0;
    let lastDelta = 0;

    const stops = () => {
      const sections = [
        ...document.querySelectorAll(
          ".home-page > section, main > section, .site-footer",
        ),
      ];
      const header = document.querySelector("header");
      const bar = Math.round(
        header ? header.getBoundingClientRect().height : 70,
      );
      return sectionStops(sections, bar);
    };

    const stop = () => {
      glide = null;
    };

    const step = (now) => {
      if (!glide) return;
      const t = Math.min(1, (now - glide.t0) / glide.dur);
      const k = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      window.scrollTo({
        top: glide.from + (glide.to - glide.from) * k,
        behavior: "instant",
      });

      if (t < 1) raf = requestAnimationFrame(step);
      else stop();
    };

    const scrollsItself = (el, dir) => {
      for (; el && el !== document.body; el = el.parentElement) {
        const oy = window.getComputedStyle(el).overflowY;
        if (
          (oy === "auto" || oy === "scroll") &&
          el.scrollHeight > el.clientHeight
        ) {
          if (
            dir > 0
              ? el.scrollTop + el.clientHeight < el.scrollHeight - 1
              : el.scrollTop > 0
          ) {
            return true;
          }
        }
      }
      return false;
    };

    const onWheel = (event) => {
      if (
        event.ctrlKey ||
        !event.deltaY ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ) {
        return;
      }

      if (!(event.target instanceof Node)) return;

      // The footer and header scroll with the page too. Ignoring them leaves
      // the wheel unhandled at the bottom, where the footer fills the pointer.
      const areas = [
        document.querySelector("main"),
        document.querySelector(".site-footer"),
        document.querySelector("header"),
      ];
      if (!areas.some((area) => area && area.contains(event.target))) return;

      const dir = Math.sign(event.deltaY);
      if (scrollsItself(event.target, dir)) return;

      event.preventDefault();

      const now = performance.now();
      const d = Math.abs(event.deltaY);
      const fresh = now - lastWheel > 100 || d > lastDelta || d >= 60;
      lastWheel = now;
      lastDelta = d;
      if (glide || !fresh) return;

      const y = window.scrollY;
      const pts = stops().filter((p, i, a) => i === 0 || p - a[i - 1] > 60);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      let to =
        dir > 0
          ? pts.find((p) => p > y + 2)
          : [...pts].reverse().find((p) => p < y - 2);
      to = Math.min(max, Math.max(0, to ?? (dir > 0 ? max : 0)));
      if (Math.abs(to - y) < 1) return;

      glide = {
        from: y,
        to,
        t0: now,
        dur: Math.min(
          1000,
          520 + (260 * Math.abs(to - y)) / window.innerHeight,
        ),
      };
      raf = requestAnimationFrame(step);
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(raf);
      stop();
    };
  }, [pathname]);

  return null;
}
