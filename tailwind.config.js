/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        tab: "900px",
        mob: "640px",
        tiny: "380px",
      },
      colors: {
        cream: "#F7F1E7",
        cherry: "#E94F37",
        pistachio: "#C9DB9A",
        butter: "#F6D66B",
        blueberry: "#7776D9",
        espresso: "#28241F",
        line: "rgba(40,36,31,.16)",
        lineLight: "rgba(247,241,231,.3)",
        ink: "#71695E",
        muted: "#81796E",
        clay: "#766F64",
        dusk: "#8A8175",
        blush: "#F4C5B5",
        night: "#17130F",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(40,36,31,.08)",
        toast: "0 18px 45px rgba(23,19,15,.25)",
        sticker: "0 14px 30px rgba(40,36,31,.09)",
        card: "0 18px 40px rgba(40,36,31,.07)",
        spot: "0 16px 35px rgba(40,36,31,.07)",
      },
      spacing: {
        "cta-x": "21px",
        "cta-y": "16px",
        "cta-gap": "25px",
        "cta-lift": "1px",
      },
      borderRadius: {
        pill: "9999px",
        liquid: "46% 54% 42% 58% / 55% 45% 55% 45%",
        art: "48% 48% 45% 45% / 39% 39% 31% 31%",
        "art-mobile": "47% 47% 43% 43% / 35% 35% 30% 30%",
        blob: "48% 52% 42% 58% / 55% 43% 57% 45%",
        "story-art": "48% 52% 45% 55% / 45% 45% 55% 55%",
        "locate-art": "45% 55% 50% 50% / 50% 45% 55% 50%",
      },
      inset: {
        fill: "-35%",
      },
      fontSize: {
        cta: ["11px", "1"],
        eyebrow: ["9px", "1.4"],
        micro: ["8px", "1.4"],
      },
      letterSpacing: {
        cta: "0.01em",
        eyebrow: "0.16em",
        micro: "0.14em",
      },
      backgroundColor: {
        liquid: "var(--liquid-color)",
      },
      transitionProperty: {
        cta: "transform, translate, scale, rotate, background-color, color",
      },
      transitionDuration: {
        cta: "250ms",
        liquid: "550ms",
      },
      transitionTimingFunction: {
        cta: "cubic-bezier(0.2,0.8,0.2,1)",
        liquid: "cubic-bezier(0.2,0.9,0.2,1)",
      },
      keyframes: {
        liquidMorph: {
          from: {
            borderRadius: "46% 54% 42% 58% / 55% 45% 55% 45%",
            transform: "scale(1.48) rotate(-6deg)",
          },
          to: {
            borderRadius: "58% 42% 55% 45% / 45% 55% 42% 58%",
            transform: "scale(1.55) rotate(10deg)",
          },
        },
        marquee: { to: { transform: "translateX(-50%)" } },
        spin: { to: { transform: "rotate(360deg)" } },
        floaty: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-13px) rotate(2deg)" },
        },
        sunPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.08)", opacity: "0.85" },
        },
        stickerBob: {
          "0%, 100%": { transform: "translateY(0) rotate(11deg)" },
          "50%": { transform: "translateY(-9px) rotate(5deg)" },
        },
        stickerWiggle: {
          "0%, 100%": { transform: "translateY(0) rotate(-12deg)" },
          "50%": { transform: "translateY(8px) rotate(-5deg)" },
        },
        cardIn: {
          from: { opacity: "0", transform: "translateY(22px) rotate(-1.5deg)" },
          to: { opacity: "1", transform: "none" },
        },
        pinBob: {
          "0%, 100%": { transform: "translateY(0) rotate(-10deg)" },
          "50%": { transform: "translateY(-9px) rotate(-3deg)" },
        },
        colorDrift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        bagPop: {
          "0%, 100%": { transform: "scale(1) rotate(0)" },
          "35%": { transform: "scale(1.12) rotate(-4deg)" },
          "65%": { transform: "scale(0.96) rotate(3deg)" },
        },
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(0) scale(0.8)" },
          "30%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(-26px) scale(1.1)" },
        },
        menuIn: {
          from: { opacity: "0", clipPath: "inset(0 0 100% 0)" },
          to: { opacity: "1", clipPath: "inset(0 0 0 0)" },
        },
      },
      animation: {
        liquid: "liquidMorph 1.15s ease-in-out infinite alternate",
        marquee: "marquee 32s linear infinite",
        spinSlow: "spin 22s linear infinite",
        spin20: "spin 20s linear infinite",
        spin26: "spin 26s linear infinite",
        floaty: "floaty 7s ease-in-out infinite",
        sunPulse: "sunPulse 9s ease-in-out infinite",
        stickerBob: "stickerBob 4.5s ease-in-out infinite",
        stickerWiggle: "stickerWiggle 5.5s ease-in-out -1.8s infinite",
        cardIn: "cardIn 0.55s cubic-bezier(0.2,0.8,0.2,1) backwards",
        pinBob: "pinBob 3s ease-in-out infinite",
        colorDrift: "colorDrift 9s ease-in-out infinite",
        bagPop: "bagPop 0.5s",
        floatUp: "floatUp 0.8s ease-out forwards",
        menuIn: "menuIn 0.35s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
