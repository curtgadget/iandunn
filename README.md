# iandunn.net

Ian Dunn's personal site. A portfolio built with [Astro](https://astro.build)
and deployed as a static site to Cloudflare Pages.

## Status

Three of the planned six pages are built:

- Home (`/`)
- Contact (`/contact`)
- Writing (`/writing`)

Still to come: About, Projects, and a Center Ref project page.

## Local development

Requires Node 18.20+, 20.3+, or 22+.

```sh
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static output to dist/
npm run preview    # serve the production build locally
```

## Contribution graph

The home page shows a GitHub contribution heatmap. The data is fetched from
the GitHub GraphQL API during the build and written into the static HTML, so
the build needs a token.

1. Create a GitHub personal access token (classic) with the `read:user` scope.
2. For local builds, copy `.env.example` to `.env` and set `GITHUB_TOKEN`.
   The `.env` file is git-ignored.
3. For Cloudflare Pages, add `GITHUB_TOKEN` as a build environment variable
   in the project settings.

Two things to know. Private contributions are only counted if the GitHub
account setting "Include private contributions on my profile" is turned on.
And if no token is present, the build still succeeds; it leaves the section
out rather than showing placeholder data.

## Deployment

`npm run build` produces a fully static `dist/` folder. It deploys to
Cloudflare Pages with no adapter. Every deploy re-runs the build, which is
also how the contribution graph stays current.

## Project structure

```
src/
  layouts/     BaseLayout: document shell, fonts, meta tags
  components/  SiteNav, SiteFooter, PageHeader, Plate, ProjectCard,
               SocialIcon, SocialRow, ContribGrid
  pages/       index, contact, writing
  lib/         contrib.js: the build-time GitHub fetch
  data/        site.js: nav, social, and footer links
  styles/      global.css: design tokens
public/
  photos/      portrait imagery
```

## Design

A warm editorial style: cream paper, ink text, and one terracotta accent kept
in reserve. Display type is Sorts Mill Goudy, body text is Helvetica Neue, and
JetBrains Mono appears only inside the contribution graph.

Colors, fonts, and spacing are CSS custom properties in
`src/styles/global.css`. Change a token there and it updates across the whole
site. The design direction is recorded in `.impeccable.md`.
