# iandunn.net

Ian Dunn's personal site. A portfolio built with [Astro](https://astro.build)
and deployed as a static site to Cloudflare Pages.

## Status

All five pages are built:

- Home (`/`)
- About (`/about`)
- Case studies (`/projects`)
- Writing (`/writing`)
- Contact (`/contact`)

Plus a 404 page. Still to come: the first Writing posts, and a livestream-rig
photo for the home page's "Off the clock" slot.

## Local development

Requires Node 18.20+, 20.3+, or 22+.

```sh
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static output to dist/
npm run preview    # serve the production build locally
```

No environment variables are needed; every page builds from data in the repo.

## Deployment

`npm run build` produces a fully static `dist/` folder. It deploys to
Cloudflare Pages with no adapter. Cloudflare serves `dist/404.html` for
unknown routes automatically.

## Project structure

```
src/
  layouts/     BaseLayout: document shell, fonts, meta tags
  components/  SiteNav, SiteFooter, PageHeader, Plate, CaseStudyRow,
               StoreBadges, SocialIcon
  pages/       index, about, projects (case studies), writing, contact, 404
  data/        site.js: nav, store, social, and footer links
               caseStudies.js: the shared case-study model (one opinion per
               product; a `tease` key picks the field shown on Home)
  styles/      global.css: design tokens
public/
  photos/      portrait imagery
  logos/       project marks
  badges/      official App Store / Google Play badge art
```

## Design

A warm editorial style: cream paper, ink text, and one terracotta accent kept
in reserve. Display type is Sorts Mill Goudy, body text is Helvetica Neue, and
JetBrains Mono is the label voice (eyebrows, captions, case-study numbers).
The dark panel appears only in the footer.

Colors, fonts, and spacing are CSS custom properties in
`src/styles/global.css`. Change a token there and it updates across the whole
site. The design direction is recorded in `.impeccable.md`.
