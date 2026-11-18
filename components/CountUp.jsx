'use client';
import { useEffect, useRef, useState } from 'react';

export default function CountUp({ value, suffix = '', duration = 1200 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return undefined;
    }

    let frame;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const fallback = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) run();
    };

    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          run();
          observer.disconnect();
        }
      }, { threshold: 0.4 })
      : null;

    if (observer) observer.observe(node);
    fallback();
    window.addEventListener('scroll', fallback, { passive: true });

    return () => {
      if (observer) observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', fallback);
    };
  }, [value, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}
