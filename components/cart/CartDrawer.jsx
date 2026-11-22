"use client";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X, ShoppingBag, ArrowUpRight } from "lucide-react";
import { useCart } from "./CartProvider";
import LiquidButton from "../LiquidButton";

export default function CartDrawer() {
  const { items, update, remove, total, open, setOpen } = useCart();

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            className="fixed inset-0 z-90 h-full w-full border-0 bg-[#17130f75]"
            aria-label="Close cart"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="fixed bottom-0 right-0 top-0 z-91 flex w-[min(480px,100%)] flex-col bg-cream p-8.5 shadow-[-15px_0_60px_#17130f1c] max-sm:w-[min(100%,440px)] max-sm:p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
          >
            <div className="flex items-start justify-between border-b border-line pb-6">
              <div>
                <span className="inline-flex items-center gap-2.25 text-eyebrow font-extrabold tracking-eyebrow">
                  THE GOOD STUFF
                </span>
                <h2 className="mt-2 font-display text-[42px] tracking-[-.07em] max-sm:text-[36px]">
                  Your bag<span className="font-serif text-cherry">.</span>
                </h2>
              </div>
              <button
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-transparent transition-transform active:scale-95"
                onClick={() => setOpen(false)}
                aria-label="Close bag"
              >
                <X />
              </button>
            </div>
            {items.length ? (
              <>
                <div className="flex-1 overflow-auto">
                  {items.map((item) => (
                    <div
                      className="grid grid-cols-[86px_1fr_auto] items-center gap-4 border-b border-line py-5 max-sm:grid-cols-[72px_1fr_auto] max-sm:gap-2.5"
                      key={item.key}
                    >
                      <img
                        className="h-24 w-21.5 rounded-sm object-cover max-sm:h-20.5 max-sm:w-18"
                        src={item.image}
                        alt=""
                      />
                      <div className="grid gap-1.75">
                        <strong className="font-display text-base max-sm:text-sm">
                          {item.name}
                        </strong>
                        <span className="text-[10px] text-[#7b7368]">
                          {item.size} · ${item.price.toFixed(2)}
                        </span>
                        <div className="flex items-center gap-3 text-[11px]">
                          <button
                            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-transparent transition-transform active:scale-90"
                            onClick={() => update(item.key, -1)}
                            aria-label={`Remove one ${item.name}`}
                          >
                            <Minus size={12} />
                          </button>
                          <span>{item.qty}</span>
                          <button
                            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-transparent transition-transform active:scale-90"
                            onClick={() => update(item.key, 1)}
                            aria-label={`Add one ${item.name}`}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <button
                        className="min-h-10 border-0 bg-none px-1 text-[9px] underline text-[#82796e] transition-colors active:text-cherry max-sm:text-[8px]"
                        onClick={() => remove(item.key)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="border-t border-line pt-5.5">
                  <div className="flex justify-between text-[13px]">
                    <span>Subtotal</span>
                    <strong>${total.toFixed(2)}</strong>
                  </div>
                  <p className="text-[10px] text-[#82796e]">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <LiquidButton
                    variant="dark"
                    className="mt-3 w-full"
                    onClick={() =>
                      alert("This is a demo store - no payment is taken.")
                    }
                  >
                    Checkout <ArrowUpRight size={16} />
                  </LiquidButton>
                </div>
              </>
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <div className="mb-5 grid h-19 w-19 place-items-center rounded-full bg-butter">
                  <ShoppingBag size={28} />
                </div>
                <h3 className="m-0 mb-2 font-display text-6 tracking-tighter">
                  It's a little empty in here.
                </h3>
                <p className="m-0 mb-5.5 max-w-60 text-[11px] leading-[1.7] text-[#82796e]">
                  Let's fix that. Your next favorite flavor is waiting.
                </p>
                <LiquidButton variant="dark" onClick={() => setOpen(false)}>
                  Explore flavors <ArrowUpRight size={16} />
                </LiquidButton>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
