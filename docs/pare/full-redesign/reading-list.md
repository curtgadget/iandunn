# Reading list — full-redesign

- `src/data/caseStudies.js` — all four project entries: names, statuses, copy, links. The content to fact-check.
- `src/data/site.js` — nav, store links, socials, footer columns. The site's link inventory.
- `src/pages/index.astro` — home: hero copy, three case-study rows, "other half of the week" section (parish, board, AYSO).
- `src/pages/about.astro` — the 3gforfree origin story, Disney/NBC/Netflix/Spotify/Pinterest career line.
- `src/pages/projects/index.astro` — full four-project case-study page.
- `src/pages/writing.astro` + `src/pages/writing/[slug].astro` — "The notebook": four category cards, one real post (2026-07-29).
- `src/pages/contact.astro` — six contact channels as cards.
- `src/styles/global.css` — every design token of the current look (cream/terracotta/serif). All replaced in a redesign.
- `src/layouts/BaseLayout.astro` — document shell: meta, OG, canonical, fonts. Structure likely survives even a full redesign.
- `src/components/` (7 files) — CaseStudyRow, SiteNav, SiteFooter, StoreBadges etc. All visual components are throwaway per the brief.
- `public/photos/` — 7 portrait photos. **The only assets the user wants kept.**
- `public/logos/`, `src/assets/screens/` — product marks and app screenshots; reusable if the projects survive the fact-check.
- `CLAUDE.md` — records the *old* design constraints ("warm editorial"); will need rewriting after the redesign.
- `~/.claude/skills/design-taste-frontend/SKILL.md` — the installed taste-skill; the build stages run under it.
