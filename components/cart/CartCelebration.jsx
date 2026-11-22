"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useCart } from "./CartProvider";

const CONFETTI_COLORS = ["#E94F37", "#F6D66B", "#C9DB9A", "#7776D9"];

export default function CartCelebration({ bagRef }) {
  const { celebration, setOpen } = useCart();
  const reduceMotion = useReducedMotion();
  const [target, setTarget] = useState(null);

  useEffect(() => {
    if (!celebration) return;
    const rect = bagRef.current?.getBoundingClientRect?.();
    if (rect)
      setTarget({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
  }, [celebration, bagRef]);

  return (
    <AnimatePresence>
      {celebration && target && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-120"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {!reduceMotion && (
            <motion.div
              className="fixed left-0 top-0 grid h-11 w-11 -ml-5.5 -mt-5.5 place-items-center rounded-full text-5 font-extrabold text-espresso shadow-[0_12px_25px_#28241f33]"
              style={{ background: celebration.color }}
              initial={{
                x: celebration.x,
                y: celebration.y,
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                x: target.x,
                y: target.y,
                scale: 0.25,
                rotate: 420,
                opacity: 0.9,
              }}
              transition={{ duration: 0.55, ease: [0.3, 0.1, 0.3, 1] }}
            >
              <span>✳</span>
            </motion.div>
          )}
          {!reduceMotion &&
            Array.from({ length: 10 }).map((_, i) => {
              const angle = (i / 10) * Math.PI * 2;
              const distance = 48 + (i % 3) * 18;
              return (
                <motion.span
                  key={i}
                  className="fixed left-0 top-0 h-2.25 w-2.25 -ml-1 -mt-1 rounded-full"
                  style={{ background: CONFETTI_COLORS[i % 4] }}
                  initial={{ x: target.x, y: target.y, scale: 0, opacity: 1 }}
                  animate={{
                    x: target.x + Math.cos(angle) * distance,
                    y: target.y + Math.sin(angle) * distance,
                    scale: [0, 1, 0],
                    opacity: [1, 1, 0],
                  }}
                  transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
                />
              );
            })}
          <motion.div
            className="pointer-events-auto fixed bottom-7 left-1/2 flex max-w-[calc(100vw-32px)] items-center gap-2.75 whitespace-nowrap rounded-pill bg-espresso px-3.25 py-2.75 pl-2.75 text-[11px] text-cream shadow-toast max-sm:bottom-4 max-sm:px-2.5 max-sm:py-2.25 max-sm:text-[10px]"
            role="status"
            initial={{ opacity: 0, x: "-50%", y: 28, scale: 0.9 }}
            animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }}
            transition={{
              delay: reduceMotion ? 0 : 0.4,
              type: "spring",
              stiffness: 320,
              damping: 24,
            }}
          >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pistachio text-espresso">
              <Check size={14} strokeWidth={3} />
            </span>
            <span>
              <strong>{celebration.name}</strong> is in the bag.
            </span>
            <button
              type="button"
              className="min-h-10 rounded-pill border-0 bg-cream px-3 py-2 text-[9px] font-extrabold tracking-[.04em] text-espresso transition-colors hover:bg-butter active:bg-butter max-sm:min-h-11 max-sm:px-3"
              onClick={() => setOpen(true)}
            >
              View bag
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
