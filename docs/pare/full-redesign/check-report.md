# Phase 5 check report: the full sweep, every page type

Run 2026-11-15 on the phase-5 build (tasteskill 2.5.1): per page, one gate build
(`gate.mjs --start --new <page> --root dist --kind service --category "engineering manager"
--primary "Book a call"`), the checker at 1440/1024/820/768/390 with the 320 walk
(`consistency.mjs --widths 1440,1024,820,768,390 --rhythm-widths 1440,820,768,390`), the layout
check at 1440x900/1024x768/820x1180/768x1024/390x844, and perf at 1440 and 390.

## The gate lines

| Page | Gate | Waivers | Open FAILs |
| --- | --- | --- | --- |
| `/` | PASS | 0 | 0 |
| `/about` | PASS | 1 | 0 |
| `/projects` | PASS | 1 | 0 |
| `/writing` | PASS | 1 | 0 |
| `/writing/build-it-to-run-without-you` | OPEN 6 (rounds used up) | 5 | 6, reasons below |
| `/404` | PASS | 2 | 0 |

## Waivers, with reasons

- **/about** `no-visual` on `#story`: the only artifact of 3gforfree.com is its real ~150px
  screenshot; the brief invents no images, and a blow-up past 1.33x trips `photo-upscale`.
- **/projects** `copy-headline` on the h1: the approved copy.md h1 is "Apps I build on nights
  and weekends"; the category is named by Home's h1 and this page's meta description.
- **/writing** `copy-headline` on the h1: "Writing" is the plan's fixed wording.
- **the post** (5, the cap): `screen-height` and `section-height` on the essay body (a
  2,300-word published essay has a reading height, not a screen height; plan.md keeps the post
  as written), `one-heading` (the essay's own eight h2s are its structure), `no-visual` (an
  essay with no pictures; the brief invents none), `hole` (the 68ch reading measure leaves the
  right margin empty by design).
- **/404** `copy-headline` and `copy-fact` on "Page not found.": the plan's fixed 404 wording;
  a utility error page sells nothing and nothing may be invented.

## The post page's open FAILs (6, each with its reason)

Same record as phase 4; the skill's checks are built for company landing pages and a published
essay is not one. `section-height` and `one-section` on the footer (it starts off the screen
grid only because the essay above it has a reading height — the same root as the waived body);
`copy-headline` (the h1 is the post's title); `copy-headings`, `copy-stock-phrase`,
`copy-contrast` (the published post's own headings and voice; plan.md keeps the post body as
written, and rewriting it to pass a lint is not a redesign change).

## Checker at the five widths + the 320 walk

FAIL counts are the raw checker's; every FAIL below is one of the waived/open findings above,
none is new. The 320 walk (`off-viewport`, `spill`, `fold-card`, `hidden-visual`,
`card-family`, `card-layout`): 0 FAIL on every page.

| Page | 1440 | 1024 | 820 | 768 | 390 | 320 walk |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 0 | 0 | 0 | 0 | 0 | 0 |
| `/about` | 1 (waived no-visual) | 1 | 1 | 1 | 1 | 0 |
| `/projects` | 1 (waived copy-headline, 1440 only) | 0 | 0 | 0 | 0 | 0 |
| `/writing` | 1 (waived copy-headline, 1440 only) | 0 | 0 | 0 | 0 | 0 |
| the post | 8 | 1 | 6 | 6 | 7 | 0 |
| `/404` | 2 (both waived, 1440 only) | 0 | 0 | 0 | 0 | 0 |

## Layout check at the five sizes

No findings on `/`, `/about`, `/projects`, `/writing`, `/404`. The post: only `screen-height`
on the essay body at every size (the waived reading-height root); nothing else.

## Perf (1440 and 390)

All pages PASS every line (transfer, requests, image bytes, JS, CSS, one font family, layout
shift) with one WARN: the post's layout shift 0.176 at 1440, the `word-highlight` moment
arriving on the standfirst (0.000 at 390; the moment is the dealt one and runs once on load).
Largest page `/` at 731.6 KiB total transfer, largest image 193.3 KiB
(`photos/pinterest-standing.jpg`).

## Assumed facts

None introduced in phase 5: the 404's copy is the plan's fixed wording, and every other word
on the page set was checked in its own phase against copy.md's sources.
