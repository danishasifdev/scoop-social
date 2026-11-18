const VARIANTS = {
  dark: "bg-espresso text-cream hover:bg-cherry [--liquid-color:var(--cherry)]",
  light: "bg-cream text-espresso hover:bg-white [--liquid-color:var(--butter)]",
  outline:
    "border border-espresso bg-transparent text-espresso hover:bg-transparent hover:text-espresso [--liquid-color:var(--butter)]",
};

const BASE = [
  "group relative isolate inline-flex items-center justify-center gap-cta-gap overflow-hidden rounded-pill px-cta-x py-cta-y text-cta font-bold tracking-cta",
  "transition-cta duration-cta hover:-translate-y-cta-lift",
  "[&_svg]:transition-transform [&_svg]:duration-cta [&_svg]:ease-cta",
  "group-hover:[&_svg]:translate-x-cta-lift group-hover:[&_svg]:-translate-y-cta-lift",
];

const FILL_BASE = [
  "pointer-events-none absolute inset-fill z-0 scale-0 rounded-liquid bg-liquid",
  "transition-transform duration-liquid ease-liquid",
  "group-hover:scale-150 group-hover:rotate-[8deg] group-hover:animate-liquid",
  "group-focus-visible:scale-150 group-focus-visible:rotate-[8deg] group-focus-visible:animate-liquid",
  "motion-reduce:animate-none motion-reduce:transition-none",
];

export function liquidClasses({
  variant = "dark",
  className = "",
  added = false,
} = {}) {
  return [
    ...BASE,
    VARIANTS[variant] || VARIANTS.dark,
    added ? "bg-pistachio! text-espresso!" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function liquidFillClasses({ added = false } = {}) {
  return [
    ...FILL_BASE,
    added ? "scale-150! bg-pistachio! [animation:none!important]" : "",
  ]
    .filter(Boolean)
    .join(" ");
}
