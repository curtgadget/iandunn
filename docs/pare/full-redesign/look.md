# Look — iandunn.net today

Five static pages, Astro 5, deployed to Cloudflare Pages. All content lives in
page frontmatter and two data files. The current look is the July 2026 "warm
editorial" redesign: cream paper, terracotta accent, Sorts Mill Goudy display
serif, JetBrains Mono eyebrow labels, dark footer panel.

## The pages, in nav order

1. **Home** — serif hero "The best systems run without you." (terracotta period),
   Pinterest/eight-years-a-founder intro, portrait photo; three case-study rows
   (FutAve, TheraBasics, Center Ref); "the other half of the week" section:
   Episcopal parish in L.A. (vestry), Board Member of Good Shepherd Manor
   (Leimert Park senior housing), livestream producer (Sundays 10 a.m.),
   AYSO regional referee; dark "Say hi." footer.
2. **About** — "The long way in": 3gforfree.com ringtone-business origin story
   (~8 years, Drupal/CodeIgniter/WURFL), then "the formal years" at Disney,
   NBC, Netflix, Spotify, Pinterest. Links to LinkedIn for the record.
3. **Case studies (/projects)** — "One opinion per product." All four projects,
   each with the same four-field template: opinion quote, "the problem that
   mattered", "the tradeoff I made", "why it's different", plus status pill,
   meta line, store badges, screenshot.
4. **Writing** — "The notebook": four category cards (Building / Leading /
   Learning / Life) and an archive holding exactly one post
   ("Build it to run without you", 2026-07-29).
5. **Contact** — "Let's talk": six channel cards (email, book-a-call, LinkedIn,
   Threads, Instagram, GitHub).

## The project claims as published

| Project | Status shown | Links on the site | Link check (2026-11-15) |
| --- | --- | --- | --- |
| FutAve | Live | futave.com + iOS & Play store badges | all 200 |
| TheraBasics | Live | therabasics.com + iOS & Play store badges | all 200 |
| Center Ref | Public beta | centerref.com | 200 |
| Stonefold | Prototype | none ("nothing to show yet") | n/a |

## Numbered problems, worst first

1. **The look is current-AI-default from top to bottom** (checked: screenshots
   of all five pages). The tells stack: cream + single warm accent, giant
   display serif with an accent-colored period, letterspaced mono eyebrow
   labels (`CASE STUDIES`, `ORIGIN STORY`, `THE TRADEOFF I MADE`), italic
   serif pull-quotes, status pills, uniform card grids. Each is defensible
   alone; together they read as a template. Evidence: `src/styles/global.css`
   tokens, every page screenshot.
2. **Project facts may be stale** (not checked — only Ian knows). Statuses
   ("Live", "Public beta", "Prototype") date from July 2026; the user says some
   projects have moved and some are likely abandoned. All seven external links
   do respond HTTP 200 as of today, so nothing is outright dead — the question
   is which entries still deserve the space and which statuses are wrong.
3. **The copy is one formula repeated** (checked). Every project gets
   opinion → problem → tradeoff → different, verbatim field names in
   `src/data/caseStudies.js`; the formula is visible to a reader within two
   rows. The voice itself is good in places, but the scaffolding shows.
4. **Writing is overbuilt for its content** (checked). Four category cards and
   an "archive" frame holding one post from July 2026 — the structure promises
   a cadence that doesn't exist.
5. **Personal facts need a pass** (not checked). "Sr. Engineering Manager,
   Pinterest", vestry/board roles, Saturday AYSO refereeing, Sunday livestream:
   all plausible, all only verifiable by Ian, all shipping on the home page.
