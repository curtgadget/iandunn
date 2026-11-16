# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`iandunn.net` — Ian Dunn's personal portfolio, an Astro 5 static site deployed to
Cloudflare Pages with **no adapter** (`dist/` is served directly, from `main`).
Every page is prerendered to plain HTML; there is no runtime server.

## Commands

```sh
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static output to dist/
npm run preview    # serve the production build locally
```

Requires Node 18.20+, 20.3+, or 22+. There is **no test or lint tooling** — the
quality gates are `astro build` succeeding under TypeScript strict mode
(`tsconfig.json` extends `astro/tsconfigs/strict`) and, for UI changes, the
taste-skill gate (below).

The build needs no environment variables; every page renders from data in the repo.

## Architecture & conventions

**Single sources of truth — edit these, don't hardcode:**

- `src/data/site.js` — nav items (`NAV_ITEMS`), store links (`APP_LINKS`), the
  main action (`BOOK_CALL`) and second action (`EMAIL`), socials, and the
  footer's three link columns. Shared so the nav and footer never drift.
- `src/data/caseStudies.js` — one entry per app (FutAve, TheraBasics,
  Center Ref): teaser line, free-form write-up paragraphs, platforms line,
  status, screenshot, store links. Home's chapters and `/projects` both render
  from it. The words come from `docs/pare/full-redesign/copy.md`.
- `src/styles/global.css` — **only** the dealt `:root` block (palette and type
  tokens, kept exactly as the taste-skill printed it). Everything else — grid,
  spacing, type scale, buttons, nav, footer, motion — comes from the taste-skill
  kit in `public/assets`, which is **never edited** (the checker's `kit-edited`
  rule fails any changed kit file). The kit is pruned to the files the built
  pages actually load.

**Writing is a content collection**: posts are markdown files in
`src/content/writing/` (the filename is the slug), defined in
`src/content.config.ts`. Frontmatter: `title`, `description`, `date`,
`category` — the category validates against a four-value enum but is not
rendered anywhere.

**Component pattern** (`src/components/*.astro`): frontmatter `interface Props`
with destructured `Astro.props`, markup on the kit's classes
(`hero hero--split`, `wrap`, `grid`, `span-*`, `btn btn--primary`…), then a
scoped `<style>` block only for what the kit doesn't cover, referencing kit
tokens (`var(--p-ink)`, `var(--s-5)`, `var(--t-h3)`…). No Tailwind, no CSS
framework.

**Layout**: `src/layouts/BaseLayout.astro` is the document shell (meta, Open
Graph, canonical URL, Nunito from Google Fonts, the kit's stylesheets and
end-of-body scripts, the page's moment module preload). Pages compose
`BaseLayout` + `SiteNav` + content + `SiteFooter`. Pass `active="<NavLabel>"`
to `SiteNav` and `moment="<moment-id>"` to `BaseLayout`.

## Design constraints (the dealt system)

The look was **dealt** by the taste-skill (`design-taste-frontend`), not
hand-picked — see `docs/pare/full-redesign/deal.md` for the full record and
`brief.md` for what was decided and turned down. Don't re-deal; build inside it:

- **Palette `oxblood-grey`**: neutral stone ground `#e2e2e2`, surface
  `#d6d6d6`, one deep oxblood `#7d0c14` doing ink, links and the action. The
  footer is the one inverse (oxblood) ground. Colour comes from the portraits
  and app screenshots, not the system.
- **Type `nunito`**: one family in two jobs (display 400 with −2% tracking,
  −3% at hero size; text 400/500). No second face, no mono label voice.
- **Parts**: split heroes (text span-6, image span-6 start-7 on the 6/6 pair),
  `nav-centre`, `footer-dark` + `close-photo` (every page ends with the close
  and the directory), rhythm `surface-pairs` (the one surface band lives on
  Home), `arrow` buttons ("Book a call" is the only filled recurring action),
  `initial` mark, radius `soft`.
- **Moments**: every page carries one dealt moment (`data-moment`), dealt with
  `moments.mjs pick` against the committed `.taste-skill/history.json` — never
  hand-picked.
- **Hard rules** (brief): never violet; no olive/sage (TheraBasics
  separation); never back to cream+terracotta; no invented numbers,
  testimonials or fake screenshots; real contact handles stay (the skill's
  `.example` rule is waived with the brief as the reason).
- **Photographs repeat only across pages, never within one** (the checker
  reads per page). The close's portrait is the glasses portrait on every page.

**The gate**: UI changes are checked with the taste-skill's checker at
1440/1024/820/768/390 plus the 320 walk, and finished through
`scripts/gate.mjs` (arm per page with
`gate.mjs --start --new dist/<page> --root dist --kind service --category
"engineering manager" --primary "Book a call"`). PASS, or OPEN with reasoned
waivers only. `.impeccable.md` holds the short design context for review
tooling.

Fixed wording lives in `docs/pare/full-redesign/copy.md` (every
visitor-facing word) — edit copy there first, then mirror it in the page.
