# full-redesign

## What and why

iandunn.net gets a complete redesign. The July 2026 "warm editorial" look
(cream + terracotta, display serif with accent period, mono eyebrow labels,
formula case studies) reads as a typical AI-generated site and is thrown away
entirely — only the seven portraits in `public/photos` are required keepers,
with product logos and app screenshots staying available as facts about the
products. Content is mostly good and survives, but gets rewritten out of its
visible template and fact-checked. The build runs under the installed
taste-skill (`design-taste-frontend`, tasteskill 2.5), which deals palette,
type and hero form from randomized lists and enforces quality with a headless-
Chrome gate — that dealing, not hand-picked taste, is the mechanism for not
looking AI-made.

## Decisions

| Decision | Answer | Decided by |
| --- | --- | --- |
| Size of the job | Large: three reviewers read the plan once | Pare start |
| Site leads with | Person first, products as proof; main action: email / book a call | Ian |
| FutAve | Keep, Live; rewrite copy to the product's current positioning ("Find your next match", not Wave Detector) | Ian |
| TheraBasics | Keep as Live, both store links stay | Ian |
| Center Ref | Keep as Public beta | Ian |
| Stonefold | Cut from the site | Ian |
| Page count | Four: Home, About, Projects, Writing; Contact folds into footer + hero line | Ian |
| Writing | Keep as a plain dated list; category cards and archive frame go | Ian |
| Parish / board / AYSO section | Moves from Home to About | Ian |
| Copy refresh | Rewrite out of the opinion/problem/tradeoff/different formula; keep facts and good lines | Ian |
| Release route | Phases merge to a `redesign` branch; main gets one final merge (Cloudflare Pages deploys from main) | Ian |
| Look direction | Trust the taste-skill deal within hard constraints | Ian |
| Stack | Astro 5, static, Cloudflare Pages, no adapter — unchanged | Claude |
| Palette constraints fed to the deal | Never violet (skill rule); no olive/sage (TheraBasics separation); not cream+terracotta again | Claude |
| Safety | Git tag before the redesign lands; CLAUDE.md design section rewritten after | Claude |
| Honesty | No invented numbers, testimonials, or fake screenshots | Claude |

## Turned down

- **Products-first or writing-first site** — the combination (career + shipped
  products) is stronger than either alone, and one post can't carry a site.
- **Keeping the FutAve wave-detector copy** — futave.com no longer leads with it.
- **Keeping Stonefold** — a prototype with "nothing to show yet" weakens the
  page; cutting is free to reverse.
- **Five pages / one-pager** — the Contact page duplicated the footer; a
  one-pager leaves no room for the About story.
- **Cutting Writing** — the one post is good; a plain list is honest at any count.
- **Shipping phase-by-phase to main** — a half-redesigned live site looks broken.
- **Hand-steering the visual direction** — reintroduces the defaults being
  thrown away; the dealer decides within constraints.
- **Restyling via tokens only** — same bones, same template smell; the user
  asked to throw everything away.

## Not doing

- No CMS, content collections, or framework change.
- No new content beyond the refresh (no new posts, no new projects).
- No changes to the FutAve/TheraBasics/Center Ref products themselves.
- No contribution-graph or deployment workflow changes.

## How we will know it worked

- The taste-skill gate reports PASS on every page at 1440/1024/820/768/390.
- No page carries the old tells: no cream+terracotta, no mono eyebrow labels,
  no four-field case-study scaffold, no six-card contact grid.
- Every fact on the site matches the answers above (three projects, their
  statuses, current FutAve positioning).
- `astro build` succeeds; the site deploys from main in one release.
- Ian looks at it and does not say "AI made this".
