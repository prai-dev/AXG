# AXG

A modern rebuild of [alloyx.com](https://www.alloyx.com/) — the site for AXG /
AlloyX (Solowin Holdings, Nasdaq: AXG).

Live: **https://axg.prai.co/**

## Stack

| | |
|---|---|
| Framework | React 19 + Vite (rolldown) |
| Routing | React Router 7 |
| Motion | Framer Motion, plus hand-rolled `requestAnimationFrame` scroll effects |
| Scrolling | Lenis (exposed as `window.__lenis`) |
| Icons | Phosphor (duotone) and Lucide |

No CSS framework. Each component owns a plain `.css` file next to it; design
tokens live in `src/styles/globals.css`.

## Design system

Monochrome by rule — ink `#0B0B0D`, muted `#6C6C70`, hairline `#EAEAE7`, white
ground. The single accent, periwinkle `#677FE3`, is reserved for data marks in
charts. Photography and third-party artwork are desaturated so nothing breaks
the register.

Three families: **Manrope** for everything, **Fraunces** for figures only,
**JetBrains Mono** for labels and eyebrows.

## Content

Every string, figure and quote comes from alloyx.com or its newsroom — nothing
is invented. `src/content/posts.json` holds 58 scraped articles (title, date,
body, artwork) and is the source for `/pressroom` and `/post/:slug`.
`src/content/products.js` is the single source of truth for the three product
cards, so the homepage board and the product pages cannot drift apart.
`src/content/market.json` carries a dated Yahoo Finance snapshot used for the
gold and T-bill benchmarks.

News headlines and publication names are kept verbatim; our own marketing copy
is not.

## Running it

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # -> dist/
npm run lint     # oxlint
```

## Layout

```
src/
  components/    section-level building blocks, each with its own .css
  pages/         route components
  content/       posts.json, products.js, market.json
  styles/        globals.css — tokens, resets, shared primitives
public/
  blog/          newsroom artwork          media/    hero + film video
  team/          leadership portraits      partners/ ecosystem wordmarks
  brand/         axg-mark.png + axg-word.png (header lockup)
  chains/        network marks             products/ product imagery
```

## Notes

`src/components/HeroBento.jsx` is the earlier pinned scroll-stepper for the
homepage. It was replaced by `ProductsBoard` and is deliberately kept, and
deliberately unreferenced, for reference — its import in `src/pages/Home.jsx`
is commented out rather than deleted.
