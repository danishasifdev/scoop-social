# Scoop Social®

A colorful, premium ice-cream storefront concept built with Next.js App Router, JavaScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Included

- Editorial homepage with the Scoop Social cream, cherry, pistachio, butter, blueberry and espresso palette
- Responsive desktop, tablet and mobile layouts
- Six flavor products with individual detail pages
- Separate pages for every nav link: flavors, our story and find a scoop
- Local SVG artwork for the hero and every flavor, stored in `public/`
- Category filtering on the collection page
- Product size selection and quantity controls with size-based demo pricing
- Functional cart drawer with quantity updates, removal and localStorage persistence
- Playful add-to-bag animation: flying scoop, confetti, bag bump and a confirmation toast
- Liquid-fill CTAs that grow from the pointer position, plus a bolder hero button pair
- Reference-style scroll system: sticky section nav, proof stats, paired editorial panels, scoop ledger, counter notes, FAQ and closing CTA
- Cinematic section-by-section reveals with staggered inner content, blur-to-focus text, mask wipes on headings and drawn eyebrow rules
- Mouse-reactive parallax artwork across the hero, drop, story and collection imagery
- Floating art and hover motion, all disabled under reduced-motion and touch settings
- Staggered colored block-wipe page transitions inspired by the linked Tabulatum transition reference
- Mobile navigation, focus-visible states and reduced-motion CSS support
- All calls to action stay on-site; there are no email or external links
- Product data centralized in `lib/products.js`

## Project structure

```text
app/                 App Router pages and global styles
components/          Shared layout, product and cart components
lib/products.js      Product catalog data
public/              Local SVG brand and product artwork
```

## Notes

- The page transition is an original implementation inspired by the block-wipe effect. It is not the Framer Marketplace component or its source code.
- All product artwork is local SVG, so the site does not depend on remote image hosts.
- Product photography is represented by custom vector illustrations for this portfolio concept.
- Checkout is a demo interaction only. No payment is taken and no data is sent.
- Prices are illustrative portfolio content.
- Fonts use local system fallbacks so the app does not need to download Google Fonts during build.
