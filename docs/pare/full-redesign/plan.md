# Plan: full-redesign

Brief: ./brief.md

Shipping: all phases are pull requests into a long-lived `redesign` branch cut
from `main`. The plan files travel with phase 1's PR. The repo has no CI (the
one workflow, refresh-contrib.yml, was deleted in the July 2026 redesign), so
each phase runs `astro build` and the taste-skill gate locally before its PR
merges. `main` (which Cloudflare Pages deploys) gets exactly one merge, in
phase 5, so visitors never see a half-redesigned site.

## Phases at a glance

| # | What people get | Depends on |
| --- | --- | --- |
| 1 | The dealt design system, all copy drafted, taste-skill toolchain proven | — |
| 2 | New shell (tokens, nav, footer), new Home, trimmed project data; Contact page retired | 1 |
| 3 | New Projects page | 2 |
| 4 | New About (parish/AYSO folded in) and new Writing list + post page | 2 |
| 5 | 404, kit prune, full gate on every page, docs rewritten, release to main | 3, 4 |

## Phase 1: The deal, the copy, the toolchain

- Changes: create the `redesign` branch off `main` and tag the branch point
  `v2-pre-redesign`. Copy the taste-skill kit into `public/assets` (the
  skill's existing-project path; it is pruned in phase 5). Run the skill's
  deal commands for a **service** page (personal portfolio — people hire
  him), trade "engineering leader / product builder", with the constraints
  from the brief: reject any deal that lands violet (skill rule), olive/sage,
  or cream+terracotta — deal again and record each rejection. Record the full
  deal (palette, pairing, hero form, nav, footer, close, rhythm, buttons,
  mark) in `docs/pare/full-redesign/deal.md`. Draft all site copy as
  `docs/pare/full-redesign/copy.md` under the skill's copy rules and lint it
  with `copy-lint.mjs`: hero, Home sections, three project write-ups rewritten
  out of the four-field formula (FutAve repositioned to its current
  "find your next match" framing), About including the parish/board/AYSO
  material, Writing intro, footer, 404. The deal arms the gate in the project
  folder — that is expected and the build stays open; run
  `gate.mjs --start dist/index.html --root dist --kind service` once against
  the built old site purely to prove the toolchain runs (headless Chrome is
  installed; FAILs against the old design are expected and are not fixed).
  Phase 1's PR is the copy redline point: Ian can edit copy.md there or any
  time before phase 5; later phases always take the file as it stands.
- Files: `public/assets/*` new (kit); `docs/pare/full-redesign/deal.md`,
  `copy.md` new; nothing in `src/` changes.
- Relies on: taste-skill installed at
  `~/.claude/skills/design-taste-frontend` with deal scripts
  (`SKILL.md` section 4, step 4; the deal arms the gate, `SKILL.md:207`);
  existing-project path copies the kit to `public/assets` (`SKILL.md`
  section 4, step 0); service-kind row (`SKILL.md` section 1 table); gate
  builds end only by PASS, used-up rounds, or user-authorized `--done`
  (`references/gate.md:93-98`) — no disarm exists, so none is attempted;
  Node v24 and Google Chrome are installed (verified); `astro build` works
  with no env vars (`package.json:7-9`).
- Tests: none (no product code changes).
- Done when: `copy-lint.mjs` passes on `copy.md` (or every WARN has a written
  reason); `deal.md` records one complete deal and any rejected ones;
  `gate.mjs` produced a report against the built old site; `astro build`
  still succeeds on the branch.
- Start prompt: "Build phase 1 of docs/pare/full-redesign/plan.md".

## Phase 2: Shell, Home, and the data

- Changes: `global.css` tokens replaced wholesale with the dealt system
  (palette, type pairing, spacing); `BaseLayout` updated (new fonts, new
  `theme-color`; meta/OG/canonical/skip-link logic kept); `SiteNav` and
  `SiteFooter` rebuilt to the dealt nav and footer with four items — Home,
  About, Projects, Writing — and the footer carrying every contact channel
  (email, book-a-call, LinkedIn, Threads, Instagram, GitHub).
  `caseStudies.js` rewritten **in this phase**: three entries — FutAve (Live),
  TheraBasics (Live), Center Ref (Public beta) — with the four-field formula
  replaced by each project's free-form write-up and one-line teaser from
  copy.md; Stonefold removed. Home rebuilt to the dealt hero (h1 from
  copy.md, one portrait from `public/photos`, main action: email or book a
  call) and dealt sections: three project teasers (name, status, teaser line,
  mark — rendered by a rebuilt `CaseStudyRow`, which only Home imports), a
  short who-is-this block pointing at About. The parish section leaves Home
  (its material lives in copy.md). `contact.astro` deleted;
  `public/_redirects` added with `/contact` → `/` (301). The open build is
  re-pointed with `gate.mjs --start --new dist/index.html --root dist --kind
  service --category "<from deal.md>" --primary "<from copy.md>"`; checker,
  layout check, shoot, and perf run at 1440/1024/820/768/390.
- Files: `src/styles/global.css` changed (rewritten);
  `src/layouts/BaseLayout.astro` changed; `src/components/SiteNav.astro`,
  `SiteFooter.astro`, `CaseStudyRow.astro` changed (rebuilt);
  `src/pages/index.astro` changed (rebuilt); `src/pages/contact.astro`
  deleted; `public/_redirects` new; `src/data/site.js` changed (NAV_ITEMS to
  four, FOOTER_COLUMNS reshaped, SOCIALS kept); `src/data/caseStudies.js`
  changed (three entries, new fields).
- Relies on: all design tokens live in `:root` of
  `src/styles/global.css:10-48` and components reference them as
  `var(--token)`, so replacing tokens plus the named components reaches every
  page; fonts load via one Google Fonts link in
  `src/layouts/BaseLayout.astro:48-53`; OG image is
  `/photos/chin-portrait.jpg` (`BaseLayout.astro:21`); nav/footer data in
  `src/data/site.js:18-64`; store links at `src/data/site.js:7-16`;
  `CaseStudyRow.astro` is imported only by `src/pages/index.astro`; Astro
  copies `public/` into `dist/`, and Cloudflare Pages reads `_redirects`
  from the deploy root.
- Tests: none automated beyond the gate; `astro build` is the gate's input.
- Done when: `gate.mjs` ends `GATE: PASS` (or `OPEN` with only reasoned
  waivers — real contact handles and names may need them, the brief is the
  reason) for Home; About/Projects/Writing still **build** — mid-branch they
  render visually broken against the new tokens, which is accepted until
  their phases; `/contact` redirect present in `dist/_redirects`; no
  Stonefold entry in the data.
- Start prompt: "Build phase 2 of docs/pare/full-redesign/plan.md".

## Phase 3: Projects

- Changes: `/projects` page rebuilt to the dealt section recipes from the
  phase-2 data: each project with its real screenshot
  (`src/assets/screens/`), logo, store badges where they exist, and its own
  shape — not one template stamped three times. Footer project links and the
  `/projects#stonefold` anchor target removed from `site.js` if phase 2 did
  not already. Gate re-pointed to `/projects` and run.
- Files: `src/pages/projects/index.astro` changed (rebuilt);
  `src/components/StoreBadges.astro` kept (restyled if the deal requires);
  `src/data/site.js` changed only if footer links remain.
- Relies on: the trimmed three-entry data and field names from phase 2;
  real screenshots exist at `src/assets/screens/` (futave-featured.png,
  therabasics-therapists.png, watch-active-1h.png); store links at
  `src/data/site.js:7-16`.
- Tests: none automated; the build fails if an import breaks.
- Done when: gate ends PASS (or OPEN with only reasoned waivers) on
  `/projects`; no Stonefold string anywhere in `src/`; the three write-ups
  match copy.md; Home still builds and shows three teasers.
- Start prompt: "Build phase 3 of docs/pare/full-redesign/plan.md".

## Phase 4: About and Writing

- Changes: About rebuilt to the dealt recipes with the phase-1 copy: the
  3gforfree origin story (kept, reshaped out of its eyebrow-label scaffold),
  the career line (Disney, NBC, Netflix, Spotify, Pinterest), and the
  parish / Good Shepherd Manor board / livestream / AYSO material (from
  copy.md; it left Home in phase 2). Uses one or two of the kept portraits
  not used by Home; the 3gforfree screenshot (`public/3gforfree-site.png`)
  keeps its slot. `/writing` rebuilt as a plain dated list — no category
  cards, no archive framing; the one post listed with title, date, and
  description. The post page (`[slug].astro`) restyled to the new system
  (its prose styles currently restate the old tokens). The `category` field
  stays in the schema and frontmatter but stops rendering as a navigation
  device. `PageHeader.astro` and `Plate.astro` deleted here if nothing still
  imports them (About and Writing are their last importers once Contact is
  gone). Gate run on `/about`, `/writing`, and the post page.
- Files: `src/pages/about.astro` changed (rebuilt);
  `src/pages/writing.astro` changed (rebuilt);
  `src/pages/writing/[slug].astro` changed (restyled);
  `src/components/PageHeader.astro`, `Plate.astro` deleted if unused.
- Relies on: About's current content is self-contained in
  `src/pages/about.astro` (245 lines, frontmatter data); `PageHeader` is
  imported by about.astro:5, contact.astro:5 (deleted in phase 2), and
  writing.astro:6 — all handled in this phase; Writing is a content
  collection defined in `src/content.config.ts:7-16` with a four-value
  category enum (posts keep validating without schema changes); the post
  page renders via `getCollection('writing')` at
  `src/pages/writing/[slug].astro:9-12`; one post exists
  (`src/content/writing/build-it-to-run-without-you.md`); portraits in
  `public/photos/` (7 files). Note: CLAUDE.md's "no content collection" line
  is wrong and gets fixed in phase 5.
- Tests: none automated.
- Done when: gate ends PASS (or OPEN with only reasoned waivers) on `/about`,
  `/writing`, and `/writing/build-it-to-run-without-you`; the parish section
  exists on About and not on Home; the post URL is unchanged; no page imports
  the deleted components.
- Start prompt: "Build phase 4 of docs/pare/full-redesign/plan.md".

## Phase 5: Sweep and release

- Changes: 404 rebuilt in the new system; dead code removed (any component or
  token only the old design used — candidate: `SocialIcon.astro` if the new
  footer does not use it); `public/assets` pruned to the kit files the built
  pages actually load (the full kit is ~1,594 files / 37 MB — keep
  system.css/js, the motion layer, and used assets; delete unused families,
  demos and `_lab` pages); the full taste-skill check run on every page at
  1440/1024/820/768/390 plus the 320 walk, with the report (GATE line,
  waivers, open FAILs, assumed facts) saved to `check-report.md` in the run
  folder; CLAUDE.md's design-constraints section and architecture notes
  rewritten to describe the new system (including the content-collection
  correction); `.impeccable.md` reference removed or updated. Then one PR
  `redesign` → `main`, and the run closed per Pare rules (Outcome added to
  brief.md, working files removed).
- Files: `src/pages/404.astro` changed; `CLAUDE.md` changed; `public/assets`
  pruned; unused components deleted; `docs/pare/full-redesign/*` per closing
  rules.
- Relies on: deploys happen from `main` (brief; memory note "live on
  Cloudflare Pages"); tag `v1-pre-redesign` exists and `v2-pre-redesign`
  was created in phase 1 (rollback points).
- Tests: none automated beyond `astro build` and the gate.
- Done when: gate ends PASS (or OPEN with only reasoned waivers) on all five
  page types; grep finds no old-palette hex (`#f5f1ea`, `#c4622d`), no
  `Sorts Mill`, `JetBrains`, `Stonefold`/`stonefold`, and no `/contact`
  references in `src/` (the new system's own `--accent` token is fine);
  every file left in `public/assets` is referenced by a built page;
  CLAUDE.md describes the shipped system; the merge to main is deployed.
- Start prompt: "Build phase 5 of docs/pare/full-redesign/plan.md".

## Wording

Body copy is drafted in phase 1 as `copy.md` (it is a work product of the
dealt voice, linted by the skill, and too long for this table). The fixed
structural words:

| Where | Words |
| --- | --- |
| Nav items | Home · About · Projects · Writing |
| Nav label (page title prefix) | Ian Dunn |
| Hero main action | Email me — or — Book a call (final pick in copy.md) |
| Project statuses | Live · Live · Public beta |
| Project CTAs | Visit futave.com · Visit therabasics.com · Visit centerref.com |
| Footer contact handles | iandunn@iandunn.net · Book a call · LinkedIn in/iancdunn · Threads @curtgadget · Instagram @curtgadget · GitHub @curtgadget |
| Writing page title | Writing |
| Post byline | {date} · {n} min read |
| 404 | Page not found. · Back to the front page |
| /contact redirect | 301 to / |

## Risks we accepted

- The taste-skill is built for single-page company sites; multi-page Astro use
  means running its gate per page against `dist` — phase 1 proves the
  toolchain before any page is rebuilt. Its house rule putting contacts on
  `.example` conflicts with a real personal site: real handles stay, and the
  resulting copy-lint/checker FAILs are waived with the brief as the reason.
- The dealt palette/type may clash with the kept portraits' warm tones; the
  deal is re-run only on the brief's hard constraints, otherwise we build it.
- One-release shipping means the branch lives for the whole build; `main` is
  quiet (last commit July 2026), so drift risk is low. Whether Cloudflare
  Pages builds branch previews is set outside the repo and was not checked;
  nothing in the plan depends on it.
- Copy is rewritten by Claude in Ian's voice during phase 1, after the
  preview; phase 1's PR is the redline point, and later phases take copy.md
  as it stands.
- Mid-branch, pages not yet rebuilt render broken against the new tokens;
  accepted because only the `redesign` branch sees them.
