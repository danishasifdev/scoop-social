"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ParallaxImage({
  src,
  alt = "",
  wrapperClassName = "",
  imageClassName = "",
  strength = 16,
  tilt = 4,
}) {
  const ref = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 170, damping: 20, mass: 0.4 });
  const y = useSpring(pointerY, { stiffness: 170, damping: 20, mass: 0.4 });
  const moveX = useTransform(x, [-1, 1], [-strength, strength]);
  const moveY = useTransform(y, [-1, 1], [-strength, strength]);
  const rotateX = useTransform(y, [-1, 1], [tilt, -tilt]);
  const rotateY = useTransform(x, [-1, 1], [-tilt, tilt]);

  const trackPointer = (event) => {
    if (event.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`absolute inset-0 z-0 will-change-transform [@media(hover:none)]:transform-none! motion-reduce:transform-none! motion-reduce:animate-none! ${wrapperClassName}`}
      onPointerMove={trackPointer}
      onPointerLeave={resetPointer}
      style={{
        x: moveX,
        y: moveY,
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`block ${imageClassName}`}
        draggable="false"
      />
    </motion.div>
  );
}
