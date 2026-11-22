"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const TransitionContext = createContext(null);
export function usePageTransition() {
  return useContext(TransitionContext);
}

export default function TransitionProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState("idle");
  const [queuedPath, setQueuedPath] = useState("");

  const navigate = useCallback(
    (href) => {
      if (!href || href === pathname || phase !== "idle") return;
      if (reduceMotion) {
        router.push(href);
        return;
      }
      setQueuedPath(href);
      setPhase("cover");
    },
    [pathname, phase, reduceMotion, router],
  );

  useEffect(() => {
    if (phase !== "cover") return;
    const timer = setTimeout(() => router.push(queuedPath), 820);
    return () => clearTimeout(timer);
  }, [phase, queuedPath, router]);

  useEffect(() => {
    if (phase === "cover" && pathname === queuedPath) {
      const timer = setTimeout(() => setPhase("reveal"), 160);
      return () => clearTimeout(timer);
    }
  }, [pathname, phase, queuedPath]);

  useEffect(() => {
    if (phase !== "reveal") return;
    const timer = setTimeout(() => {
      setPhase("idle");
      setQueuedPath("");
    }, 760);
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    const onClick = (event) => {
      const anchor = event.target.closest("a");
      if (
        !anchor ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const url = new URL(anchor.href, window.location.href);
      if (
        url.origin !== window.location.origin ||
        url.hash ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      )
        return;
      if (url.pathname === pathname) return;
      event.preventDefault();
      navigate(url.pathname + url.search);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [navigate, pathname]);

  const value = useMemo(() => ({ navigate }), [navigate]);
  const active = !reduceMotion && phase !== "idle";
  return (
    <TransitionContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {active && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-1000 grid place-items-center overflow-hidden bg-transparent"
            aria-hidden="true"
            initial={false}
          >
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-1 sm:grid-cols-9 max-sm:[&>*:nth-child(n+7)]:hidden">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-full w-full origin-bottom will-change-transform"
                  style={{
                    background: ["#E94F37", "#F6D66B", "#C9DB9A", "#7776D9"][
                      i % 4
                    ],
                  }}
                  initial={phase === "cover" ? { scaleY: 0 } : { scaleY: 1 }}
                  animate={phase === "cover" ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{
                    duration: 0.48,
                    delay: phase === "cover" ? i * 0.055 : (8 - i) * 0.045,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                />
              ))}
            </div>
            <motion.div
              className="relative z-2 flex flex-col items-center gap-1.75 text-center font-display text-[clamp(22px,4vw,42px)] font-black tracking-[-0.07em] text-espresso"
              initial={{ opacity: 0, y: 18 }}
              animate={{
                opacity: phase === "cover" ? 1 : 0,
                y: phase === "cover" ? 0 : -18,
              }}
              transition={{
                duration: 0.28,
                delay: phase === "cover" ? 0.42 : 0,
              }}
            >
              <span className="text-[clamp(32px,5vw,58px)] leading-none text-espresso">
                ✳
              </span>
              <span>SCOOP SOCIAL</span>
              <small className="mt-4 font-sans text-[9px] font-extrabold tracking-[0.22em]">
                GOOD TASTE IN MOTION
              </small>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
