"use client";
import { Children, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function SceneTransition({ children }) {
  const sequenceRef = useRef(null);
  const viewportRef = useRef(null);
  const scenes = Children.toArray(children);

  useEffect(() => {
    const sequence = sequenceRef.current;
    const viewport = viewportRef.current;
    if (!sequence || !viewport) return undefined;

    const layers = gsap.utils.toArray("[data-scene-layer]", viewport);
    if (layers.length < 2) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sequence.dataset.static = "true";
      return () => {
        delete sequence.dataset.static;
      };
    }

    const context = gsap.context(() => {
      gsap.set(layers, { yPercent: (index) => (index === 0 ? 0 : 100) });

      const timeline = gsap.timeline({
        defaults: { ease: "none", immediateRender: false },
        scrollTrigger: {
          trigger: sequence,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: viewport,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      layers.forEach((layer, index) => {
        if (index < layers.length - 1) {
          timeline.fromTo(
            layer,
            { yPercent: 0 },
            { yPercent: -100, duration: 1 },
            index,
          );
        }
        if (index > 0) {
          timeline.fromTo(
            layer,
            { yPercent: 100 },
            { yPercent: 0, duration: 1 },
            index - 1,
          );
        }
      });
    }, sequence);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={sequenceRef}
      className="relative h-[calc(var(--scene-count,1)*100svh)] motion-reduce:h-auto!"
      style={{ "--scene-count": scenes.length }}
    >
      <div
        ref={viewportRef}
        className="relative h-svh w-full overflow-hidden bg-(--cream) motion-reduce:static! motion-reduce:h-auto! motion-reduce:overflow-visible!"
      >
        {scenes.map((child, index) => (
          <div
            key={index}
            data-scene-layer
            className="absolute inset-0 h-full w-full overflow-hidden will-change-transform motion-reduce:relative! motion-reduce:h-auto! motion-reduce:min-h-svh! motion-reduce:overflow-visible! motion-reduce:transform-none!"
          >
            <div className="relative box-border flex h-full w-full flex-col justify-center pt-(--nav-space,70px) [&>section]:shrink-0 [@media(max-height:800px)]:pt-12! [@media(max-height:800px)]:[&>section]:py-2! [@media(max-height:800px)]:[&>.flavors-section]:origin-center [@media(max-height:800px)]:[&>.flavors-section]:scale-[0.92] motion-reduce:h-auto! motion-reduce:min-h-svh!">
              {child}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
