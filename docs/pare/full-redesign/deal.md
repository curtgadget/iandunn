# Deal: full-redesign

The look of the redesigned site, dealt by the taste-skill (`design-taste-frontend`, tasteskill 2.5.1)
on 2026-11-15, phase 1 of `plan.md`. Nothing here was picked by taste: each part is the first result
the skill's dealers printed, checked only against the brief's hard constraints. Phases 2 to 5 build
exactly this.

**Plan line 1 (kind):** service. Page type `service`, site-kind `other`, kind `service`
(`SKILL.md` section 1: people are hired). On every page: `<html data-type="service">`,
`<meta name="page-type" content="service">`, `<meta name="site-kind" content="other">`.

**Plan line 2 (the deal):** hero `split` · palette `oxblood-grey` (a neutral stone ground that leaves
the colour to the portraits and the app screenshots, with one deep oxblood for text, links and the
main button) · pairing `nunito` · radius `soft` · nav `nav-centre` · footer `footer-dark` · close
`close-photo` · rhythm `surface-pairs` · buttons `arrow` · mark `initial` · Home's moment
`pinned-chapters` · no grounds, effects or scenes (kind other).

## Rejected deals

None. The first palette and the first pairing passed all three hard constraints, so nothing was
dealt again. The checks, in OKLCH (the skill's violet rule is a hue between about 270 and 330):

| Colour | Hex | L | C | Hue | Verdict |
| --- | --- | --- | --- | --- | --- |
| Ground `--p-bg` | `#e2e2e2` | 0.913 | 0 | — | neutral grey, no hue: not cream |
| Surface `--p-surface` | `#d6d6d6` | 0.876 | 0 | — | neutral grey |
| Ink and accent `--p-ink`, `--p-accent` | `#7d0c14` | 0.378 | 0.144 | 25° | deep red: not violet, not olive/sage, not terracotta |
| Old cream (for comparison) | `#f5f1ea` | 0.959 | 0.010 | 82° | |
| Old terracotta (for comparison) | `#c4622d` | 0.604 | 0.141 | 46° | |
| Sage reference | `#9caf88` | 0.729 | 0.059 | 129° | |
| Olive reference | `#808000` | 0.581 | 0.127 | 110° | |

- **Never violet:** the only chromatic colour sits at 25°, far from 270 to 330. Pass.
- **No olive or sage:** nothing in the 100 to 140° band. Pass.
- **Not cream + terracotta:** the ground has no chroma at all (cream is a warm 82° tint), and the
  accent is 21° redder and much darker than the old terracotta (L 0.38 against 0.60): a different
  colour family on a different ground. Pass.

The plan's accepted risk applies: oxblood type next to the warm portraits may clash. The deal is
re-run only on the hard constraints, so this is built as dealt; phase 2's screenshots show it.

## Palette: oxblood-grey

The first of three palettes `start.mjs deal --page service --trade agency` printed (made for the
trade, tagged `two-tone`: the ink and the accent are one colour). The other two, not taken: `card-pastels`
(off-white `#f7f7f5`, black ink, pink `#d0106f` accent) and `blush-aubergine` (putty `#edccbe`,
aubergine `#351a2b`).

`start.mjs css --page service --palette oxblood-grey --type nunito --radius soft` printed this.
Keep the `:root` block exactly as printed (`SKILL.md` step 4):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400..700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/system.css">
<link rel="stylesheet" href="assets/ui/cards.css">
<link rel="stylesheet" href="assets/motion/motion.css">
<link rel="stylesheet" href="assets/backgrounds/backgrounds.css">
<link rel="stylesheet" href="assets/layout/layout.css">
<link rel="stylesheet" href="assets/icons/icon.css">
<!-- <html lang="en" data-radius="soft">; keep this <style> after the links: layout.css resets --ly-scale -->
<style>
:root {
  --p-bg: #e2e2e2; --p-surface: #d6d6d6; --p-ink: #7d0c14; --p-muted: #7a4a4e;
  --p-accent: #7d0c14; --p-accent-ink: #e2e2e2; --p-action: #7d0c14; --p-action-ink: #e2e2e2;
  --p-inv-bg: #7d0c14; --p-inv-surface: #862323; --p-inv-ink: #e2e2e2; --p-inv-muted: #d0b3af;
  --p-inv-accent: #e2e2e2; --p-inv-accent-ink: #7d0c14; --p-inv-action: #e2e2e2; --p-inv-action-ink: #7d0c14;
  --font-display: "Nunito", system-ui, sans-serif;
  --font-text: "Nunito", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.02em;
  --display-tracking-xl: -0.03em;
}
</style>
```

In the Astro build the kit loads from `public/assets`, so the stylesheet paths become root-relative
(`/assets/system.css` and so on); everything else is as printed.

Contrast, measured (WCAG): ink on ground 8.38:1, ink on surface 7.47:1, muted on ground 5.56:1,
muted on surface 4.95:1, the button label on the action colour 8.38:1, inverse ink on the inverse
ground (the dark footer) 8.38:1, inverse muted 5.56:1, inverse ink on the inverse surface 7.12:1.
All meet the system's 7:1 for text and 4.5:1 for muted.

`theme-color` is `--p-bg`, `#e2e2e2` (`system.md`, Head).

## Type: nunito

The first of three pairings dealt for service: Nunito alone, one family in two jobs (display 400
with -2% tracking, -3% at hero size; text 400 and 500). Not taken: `work-sans` (Work Sans) and
`source-serif` (Source Serif 4 with Libre Franklin). No `--axis` deal was needed: the dealt hero is
`split`, not `word` or `editorial`. If the split hero's stress test fails `hero-lines` in phase 2,
the skill allows the next pairing (Work Sans) and that change goes on plan line 2.

## Hero: split

`deal.mjs --type service --has photo` (the brief's material for the hero is the kept portraits; it
names no film, object or setting). At 1440: text on span-5, the h1 at 72/1.02 on at most three
lines (45 characters at most), the lead at 20/30 on three lines; one portrait on span-6 from column
7 to the right line, 628x716, radius `--r-lg`; one flat float card (a hairline, no shadow) 24px in
from the picture's lower left, holding one fact (copy.md: "AYSO referee, U-12, most Saturdays").
At 390: h1 40 on two lines, the lead, the buttons stacked full width, then the portrait 342 wide
in what is left (at least 240 tall). No moment in the hero on a photograph. Its mistakes to avoid:
the picture out to the viewport edge, a crop through a face, the picture above the text on a
phone, a second float card.

## The template parts

Dealt with the service lists from `SKILL.md` step 4, one random pick each, in order:

| Part | Dealt | What it means here |
| --- | --- | --- |
| Nav | `nav-centre` | `header.nav.nav--centre`: the name and mark on the left line, Home · About · Projects · Writing in the middle, Book a call as the one button on the right line |
| Footer | `footer-dark` | row 2 of `footer.closing`: the name set large, link columns on the right (Pages, Projects, Contact), the legal row; on the inverse ground (oxblood) |
| Close | `close-photo` | row 1 of `footer.closing`: the h2, one line, Book a call, then a portrait never used above it |
| Rhythm | `surface-pairs` | one `.ground-surface` band of one or two sections (Home: the "From a ringtone site to Pinterest" block); every other section on the page ground |
| Buttons | `arrow` | `<html data-buttons="arrow">`; the primary carries `svg.m-arrow` |
| Mark | `initial` | `<span class="mark mark--initial">I</span>` beside the name in the nav and the footer; the favicon is the letter on a rounded square in `--p-ink` |

Every dealt part fits the material, so none was dealt again (`sections.md` section 2): `close-photo`
needs a photograph and seven portraits exist; `footer-visit` (which wants a street address) was not
dealt. Radius `soft` (8/12/20), the default for service.

## Moments

Home is a short page (hero, the three apps, the About pointer, the close), so it takes one moment:
`moments.mjs pick --page service --count 1 --fits section,statement --photo` dealt
**`pinned-chapters`** (seed `4ad9dd94`, no WebGL): a section that holds for two screens of scroll
while three chapters open in turn on the left and the frame on the right crossfades to each
chapter's picture. It carries Home's "Apps I build and run" section: one chapter per app, each app's
real screenshot in the frame. Copy its section from `assets/moments/_demo/in-page-service.html`.

About, Projects and Writing each deal their own moment in their phases with the same command and
the same `--history .taste-skill/history.json`, so pages differ.

## For the gate in later phases

- `--kind service`
- `--category "engineering manager"` (the checker splits it into words: the Home h1 "Engineering
  manager who builds his own apps" names it)
- `--primary "Book a call"` (copy.md: the main action)

Phase 2's command, from `plan.md`:

```bash
node ~/.claude/skills/design-taste-frontend/scripts/gate.mjs --start --new dist/index.html --root dist --kind service --category "engineering manager" --primary "Book a call"
```

## How it was dealt (commands, from the project folder)

```bash
S=~/.claude/skills/design-taste-frontend
node $S/assets/layout/deal.mjs --type service --has photo --history .taste-skill/layout-history.json
node $S/scripts/start.mjs deal --page service --trade agency --history .taste-skill/history.json
node $S/scripts/start.mjs css --page service --palette oxblood-grey --type nunito --radius soft --history .taste-skill/history.json
node $S/scripts/moments.mjs pick --page service --count 1 --fits section,statement --photo --history .taste-skill/history.json
node -e "for(const l of process.argv.slice(1)){const o=l.split('|');console.log(o[Math.floor(Math.random()*o.length)])}" "nav-mega|nav-split|nav-centre" "footer-visit|footer-dark|footer-columns" "close-type|close-photo" "surface-pairs|dark-band|space" "solid|tonal|block|arrow" "wordmark|initial|arc|ring|stack|dots"
```

Notes on the run:

- **The trade.** `plan.md` names the trade "engineering leader / product builder". Passed as written,
  the dealer's trade matcher reads the word "product" and deals `consumer-product` palettes (made for
  physical goods). The closest trade it knows for a person hired for judgment is `agency` (its words
  include "consult"), so the deal used `--trade agency`.
- **The skill would not run as installed.** `~/.claude/package.json` holds `{"type":"commonjs"}`,
  which makes Node read every `.js` file under `~/.claude` as CommonJS, so `start.mjs` failed on its
  import of the ES module `assets/effects/fx.js`. Fix: a one-line
  `~/.claude/skills/design-taste-frontend/package.json` with `{"type":"module"}`, which scopes the
  skill folder back to ES modules. All 133 `.js` files in the skill are ES modules (none uses
  `require` or `module.exports`), no kit file was edited, and `~/.claude/package.json` is untouched.
  A reinstall of the skill removes the file; put it back if the scripts fail the same way.
- **The gate is armed.** `start.mjs deal` armed a build in the project folder
  (`.taste-skill/build.json`, kind service, no page). It stays open, as `plan.md` expects; phase 2
  re-points it with `--start --new`. Phase 1 pointed it at the built old site and ran it once to prove
  the toolchain: `GATE: FAIL 27 (round 1 of 3)`, every FAIL a fault of the old design (captions under
  pictures, a short hero, sections off the screen grid, no `.wrap`, no moment, five contrast frames in
  the old copy). The full output is in `gate-old-site.txt`; nothing was fixed or waived. `.taste-skill/` is local state: the deal histories
  (`history.json`, `layout-history.json`) are committed so later deals stay away from these picks;
  the build marker, the gate's rounds and its crops are not.

## Built in phase 2: what changed from the deal, and why

- **Hero text on span-6, not span-5.** Home's h1 ("Engineering manager who builds his own apps", 43
  characters with long words) sets on four lines in the dealt 519px column at 72px, and the layout
  check fails `hero-lines`. The other two dealt pairings were tried as the deal allows: Work Sans
  (four lines at 1440, five at 1024) and Source Serif 4 with Libre Franklin (four lines) fail the same
  way, because the words, not the face, are too long for the column. The starter's own split pair is
  6/6, so the text takes span-6 (628px) beside the picture on span-6 start-7: three lines at 1440,
  `hero-lines` passes, and the pairing stays Nunito. The split line (x 732) is unchanged on every
  split of the page.
- **Two portraits swapped against copy.md's suggestions.** The close-photo strip runs the full 1280px
  `.wrap`, and only `glasses-portrait.jpg` (1586px wide) fills it without a blow-up (the checker's
  `photo-upscale` FAILs the 724px `pinterest-standing.jpg` there at 1.77x). So the close shows the
  glasses portrait (the eyes and the hand on the frames, Astro-resized to 800 and 1586) and the story
  section ("From a ringtone site to Pinterest") shows `pinterest-standing.jpg`.

Phase 2 gate: `GATE: PASS` on round 1 of 3 for `dist/index.html`, no waivers; checker 0 FAIL at
1440/1024/820/768/390, layout check no findings, perf 0 FAIL 0 WARN, copy-lint 0 FAIL 0 WARN.

## Dealt in phase 3: the Projects page

Dealt 2026-11-15 with the committed histories, from the project folder:

```bash
node $S/assets/layout/deal.mjs --type service --has ui --history .taste-skill/layout-history.json
node $S/scripts/moments.mjs pick --page service --count 1 --fits section,statement --photo --exclude photo-chapters,word-highlight --history .taste-skill/history.json
```

- **Hero: split** (the page's second deal). The first, `--has photo,ui`, dealt **film** and it was
  rejected: film wants a real film or a wide photograph with a calm dark foot, and the page has
  neither (its material is the three apps' screenshots; the portraits belong to Home and About).
  Re-dealt as `--has ui`: **split**. The text takes span-6 on the page's 6/6 split pair (the
  phase-2 note above), the FutAve home screen on span-6 start-7, cropped from its top left
  (`futave-featured-hero.png`, the same capture less its bottom 51px, where a browser link tooltip
  sits in the file). The split's float card is not built: copy.md gives this hero no card fact, and
  nothing may be invented. The hero carries the main action and Email me, as `sections.md` has
  every hero carry the main action; the checker holds `cta` on a hero without a button.
- **Moment: picture-develops** (film look), the third deal. **photo-chapters** came first and was
  rejected: it wants three to five page-wide photographs, and the only Center Ref asset is 388px
  wide (a page-wide frame of it would be a 3x blow-up). **word-highlight** came second and was
  rejected: it wants a statement of 12 to 40 words, and copy.md's Projects page has none (phases
  take copy.md as it stands). picture-develops carries the TheraBasics dashboard screenshot in
  `#therabasics`, the one large light frame on the page.
- **Shapes.** Three one-screen sections on the stack: FutAve a split with the players screenshot
  filling the right column; TheraBasics on the surface band (rhythm surface-pairs) with the
  developing dashboard; Center Ref a split with the watch standing at its own size on a surface
  panel (its 388px file is never cover-cropped; at most 1.3x, inside the checker's 1.33x ceiling).
  Stacked (640 to 1023) each section becomes a column that fills its screens exactly, the figure
  taking what the screen leaves; the band and the watch section take two screens under 800px and
  on a phone.
- **Waiver (1).** `copy-headline` on the h1: the approved copy.md h1 for /projects is "Apps I
  build on nights and weekends"; the category is named by Home's h1 and this page's meta
  description.

Phase 3 gate: `GATE: PASS` for `dist/projects/index.html`, the one waiver above; checker 0 FAIL
besides it at 1440/1024/820/768/390 and the 320 walk, layout check no findings at the five sizes,
perf 0 FAIL 0 WARN, copy-lint 0 FAIL 0 WARN.
