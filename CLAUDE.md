# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`iandunn.net` — Ian Dunn's personal portfolio, an Astro 5 static site deployed to
Cloudflare Pages with **no adapter** (`dist/` is served directly). Every page is
prerendered to plain HTML; there is no runtime server.

## Commands

```sh
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static output to dist/
npm run preview    # serve the production build locally
```

Requires Node 18.20+, 20.3+, or 22+. There is **no test or lint tooling** — the
only quality gate is `astro build` succeeding under TypeScript strict mode
(`tsconfig.json` extends `astro/tsconfigs/strict`).

The build needs no environment variables; every page renders from data in the
repo.

## Architecture & conventions

**Single sources of truth — edit these, don't hardcode:**

- `src/data/site.js` — nav items, store links (`APP_LINKS`), socials, and footer
  columns. Shared so the nav, footer, and social rows never drift.
- `src/data/caseStudies.js` — the shared case-study model: one entry per product
  (opinion + problem/tradeoff/different fields, status, shot, store links). The
  Home rows render the first three entries (teasing one field, picked by the
  optional `tease` key); `/projects` renders all four in full. Copy edits happen
  here, once.
- `src/styles/global.css` — all design tokens as CSS custom properties (palette,
  fonts, layout widths, photo grade). Change a token here and it updates sitewide.

**Component pattern** (`src/components/*.astro`): frontmatter `interface Props`
with destructured `Astro.props`, markup, then a scoped `<style>` block. Styling is
**vanilla CSS referencing the global tokens** — no Tailwind, no CSS framework.
Use `var(--token)` rather than literal colors/fonts.

**Layout**: `src/layouts/BaseLayout.astro` is the document shell (meta, Open Graph,
canonical URL, font loading, skip link). Pages compose `BaseLayout` + `SiteNav` +
content + `SiteFooter`. Pass `active="<NavLabel>"` to `SiteNav` to mark the current
page.

**Content lives in page frontmatter**: page data (project lists, service entries,
etc.) is defined as plain JS objects at the top of the `.astro` page and mapped
into components. There is no CMS or content collection.

## Design constraints (from `.impeccable.md`)

When touching UI, respect the established "warm editorial" direction — these are
explicit decisions, not defaults:

- **Palette**: cream paper, ink text, terracotta accent held *in reserve* (interaction
  + one CTA, never splashed). The accent is split into `--accent` (decoration only),
  `--accent-strong` (accent text on light), and `--accent-on-dark` so the brand hue
  never ships as a contrast failure.
- **No olive/sage tones** — those belong to Ian's TheraBasics product and are kept
  off this site for visual separation.
- **Fonts**: Sorts Mill Goudy (display serif) + Helvetica Neue (body, a system font,
  not loaded). JetBrains Mono is the **label voice** — eyebrows, captions, and
  case-study numbers, small and letterspaced — never body or display text.
- The dark panel (`--dark`) appears **only in the footer**; pages are cream paper.
- **Plain speech over cleverness**: section titles and copy are direct ("Things I'm
  building", not wordplay). The one deliberate flourish is the terracotta period.
- Italic serif is for genuine quotes/taglines only; placeholders stay honest (no fake
  screenshots or invented data).
