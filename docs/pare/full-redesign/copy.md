# Copy draft: iandunn.net, all pages

Notes: phase 1 of plan.md. Every visitor-facing word on the redesigned site. Later phases take this file as it stands; edit it here (the phase 1 PR is the redline point). Lint: node ~/.claude/skills/design-taste-frontend/scripts/copy-lint.mjs docs/pare/full-redesign/copy.md --kind service
Notes: lines starting "Notes:" and the voice card are skipped by copy-lint; every other line is copy. Headings marked ### are the page's h1 or h2 as written.
Notes: sources for every fact are listed at the end of this file. Nothing here is invented: no figures, quotes, testimonials or dates the brief and the live sites do not give.

Voice: facts only, first person (copy-registers.md 1), with one move borrowed from the founder's letter (3): the team with no product manager, named once on Home and once on About
Pairs: plain, not flat; specific, not chatty
Person: "I" for Ian; each product is the subject of its own lines, by name
Sentences: mostly 8 to 20 words; one longer one a section, where it explains
Humour: none
House words: the products' own nouns (check-in, match clock, fixtures, session), "engineering team", "nights and weekends", "field" for a soccer pitch
Never: virtue words about Ian or the apps; the old opinion, problem, tradeoff and different labels; a thesis or slogan in any h1; the old period flourish

## Nav

Notes: fixed words from plan.md. Dealt nav-centre: the name and the initial mark on the left line, the four words in the middle, the main action as the one button on the right line.
Ian Dunn
Home
About
Projects
Writing
Book a call

## Buttons

Notes: the main action is Book a call (the calendar link). It reads the same, word for word, in the nav, the Home hero, the close and the phone bar, and nowhere else as a filled button. Email me is the hero's second action.
Notes: Book a call opens https://calendar.app.google/aEmvi9bEvT1sPwnS8 ; Email me opens mailto:iandunn@iandunn.net (real contacts stay: brief, decisions table; the skill's .example rule is waived for them).
Book a call
Email me

# Copy draft: Home

## Meta

Ian Dunn: engineering manager in Los Angeles
Ian Dunn runs an engineering team at Pinterest and builds FutAve, TheraBasics and Center Ref at home in Los Angeles.

## Hero

Notes: dealt hero split. Text on span-5, the portrait on span-6 at the right (public/photos/chin-portrait.jpg). h1 maxChars 45 for this hero; this one is 43.
### Engineering manager who builds his own apps
I run a team at Pinterest with no product manager, and build FutAve, TheraBasics and Center Ref at home in Los Angeles.
Book a call
Email me
Notes: the split hero's one float card, flat with a hairline, on the portrait's lower left. It holds this one fact:
AYSO referee, U-12, most Saturdays

Notes: section 2, the dealt moment pinned-chapters. One h2, then three chapters that open in turn; the frame at the right shows each app's real screenshot (src/assets/screens: futave-featured.png, therabasics-therapists.png, watch-active-1h.png). Each chapter: the app's mark, its name, its status, one line.
### Apps I build and run
FutAve and TheraBasics are live on iPhone, Android and the web. Center Ref is in public beta on Apple Watch.
FutAve
Live
Finds football worth watching around the clubs you follow, with fixtures, scores, lineups and key moments.
TheraBasics
Live
A 30-second daily check-in for therapy clients, read by their therapist as one summary before the next session.
Center Ref
Public beta
A match clock for soccer referees on the Apple Watch, with AYSO presets from U6 to U19.
Notes: the section's one link, to /projects:
See all three projects

Notes: section 3, on the surface band (dealt rhythm surface-pairs). Text left, a portrait right (suggested: public/photos/glasses-portrait.jpg). Points at About.
### From a ringtone site to Pinterest
I ran 3gforfree.com, a ringtone business, for about eight years before I moved into engineering jobs. Then came Disney, NBC, Netflix, Spotify and Pinterest.
Notes: the section's one link, to /about:
Read the whole story

## Close

Notes: dealt close-photo, shared by every page as row 1 of footer.closing: the h2, one line and the main action on the left, a portrait never used above it on the right (suggested: public/photos/pinterest-standing.jpg).
### A 30-minute call about your team or app
For advice on running an engineering team, or a second pair of eyes on an app you’re building.
Book a call

## Footer

Notes: dealt footer-dark, shared by every page as row 2 of footer.closing: the name set large with the initial mark, link columns on the right, then the legal row. Column heads are h3. Every contact channel lives here (Contact folds into the footer, brief).
Ian Dunn
Pages
Home
About
Projects
Writing
Apps
FutAve
TheraBasics
Center Ref
Contact
iandunn@iandunn.net
Book a call
LinkedIn in/iancdunn
Threads @curtgadget
Instagram @curtgadget
GitHub @curtgadget
© 2026 Ian Dunn
The App Store and Google Play badges are trademarks of Apple and Google.
Notes: the project links go to /projects#futave, /projects#therabasics and /projects#center-ref. Social URLs as in src/data/site.js SOCIALS. The year line follows the build year.

# Copy draft: About page

## Meta

About Ian Dunn: from 3gforfree.com to Pinterest
How eight years running a ringtone business led Ian Dunn into engineering at Disney, NBC, Netflix, Spotify and Pinterest.

## Hero

### Engineering manager who started as a founder
I run an engineering team at Pinterest and live in Los Angeles with my wife, Dr. Raven Barrow, and our three kids.

## Story

Notes: the 3gforfree origin story, kept and reshaped out of its eyebrow, facts-list and takeaways scaffold. The 3gforfree screenshot (public/3gforfree-site.png) keeps its slot.
### 3gforfree.com, my first business
In the early days of the mobile web I worked at Sprint. Coworkers wanted ringtones and screensavers for their flip phones, so I worked out how to deliver them and put up a site on a computer at my parents’ house.
They passed the link to customers, the traffic grew, and a favor became my full-time work for about eight years, through my twenties.
I built both halves: the website, and a mobile site that fingerprinted each phone with WURFL device detection so it only got files it could play. There was no cloud to scale on, so every slowdown got fixed by hand. I also learned the business side: what customers asked for, music and content rights, and running a whole system on my own.
Then the carriers and platforms took over ringtone sales. The market moved, and I moved into engineering jobs.
Built with Drupal and CodeIgniter.

Notes: the career line. A kept portrait not used on Home (suggested: public/photos/pinterest-seated-close.jpg). The post title is a running-text link to /writing/build-it-to-run-without-you.
### Disney, NBC, Netflix, Spotify and Pinterest
After 3gforfree came engineering jobs, then management. For more than two years I’ve run a small team inside Pinterest’s ad sales organization, building internal tools for the account teams who manage some of the largest advertisers in the world.
The team has no product manager, designer or program manager. The engineers talk to the people who use our tools and decide what to build. I wrote about how that works in Build it to run without you.
Notes: the section's one link, to https://www.linkedin.com/in/iancdunn :
See my roles on LinkedIn

Notes: the parish, board, livestream and AYSO material, moved here from Home (brief). Four ruled rows: the role as the row's name, where and when beside it, one or two sentences under it. A kept portrait (suggested: public/photos/stool-seated.jpg).
### Church, a board seat and Saturday soccer
Most of my week outside Pinterest and the apps goes to four roles in Los Angeles.
People’s Warden
Christ the Good Shepherd, Episcopal
Elected to represent the congregation on the vestry, the parish’s governing board.
Board member
Good Shepherd Manor, Leimert Park
Affordable housing for seniors in Leimert Park.
Livestream producer
Sundays at 10 a.m.
I built the parish’s broadcast setup and automated the thumbnails, bulletins and clips. It goes live every Sunday and runs without me.
AYSO regional referee
U-12, most Saturdays
I referee in my kids’ league. Center Ref started on that field.

# Copy draft: Projects page

## Meta

Projects: FutAve, TheraBasics and Center Ref by Ian Dunn
Three apps Ian Dunn builds outside his job at Pinterest: a football app, a therapy check-in app and a match clock for referees.

## Hero

### Apps I build on nights and weekends
FutAve and TheraBasics are live on iPhone, Android and the web; Center Ref is in public beta on Apple Watch and iPhone.

Notes: each project gets its own shape (plan phase 3), never one template three times. Each shows its real screenshot, its logo, its status, its platforms line and its one button; FutAve and TheraBasics add the App Store and Google Play badges (src/data/site.js APP_LINKS). Anchors: #futave, #therabasics, #center-ref.

### FutAve
Live
FutAve finds football worth watching. Follow your clubs and it lays out the fixtures, then keeps up with scores, lineups and key moments.
A lineup builder and a tactics board sit alongside the matches.
iOS, Android and web. Built with React Native, Next.js and Payload CMS.
Visit futave.com
Notes: the button opens https://futave.com . Positioned to futave.com as it stands (title "Find your next match"); the old Wave Detector framing is gone (brief).

### TheraBasics
Live
TheraBasics is my wife’s company. Dr. Raven Barrow, a psychologist, founded it, and we designed it together at our kitchen table. When product instinct and clinical reality disagreed, clinical reality won.
Clients do a 30-second check-in on good days and hard days, keep a private journal and track habits, with no streaks or points. They choose what to share. Before each session their therapist opens a dashboard and reads the week as one written summary.
Coaches use it too, to follow a client’s goals and habits between sessions.
iOS, Android and web. Built with React Native and Next.js. HIPAA-compliant.
Visit therabasics.com
Notes: the button opens https://therabasics.com .

### Center Ref
Public beta
I referee AYSO games most Saturdays, and looking down at a phone is how you miss the foul. Center Ref is a match clock for the Apple Watch: a large clock and score that read in bright sun, and haptic taps for half time and the final whistle.
Set up the match on your iPhone: an AYSO preset from U6 to U19, club soccer or a custom format, the rosters and your role. Hold the yellow bar and the match moves to the watch. Stoppage time arms with one tap and counts itself down.
After the final whistle the watch sends the event log back, with each player’s minutes for AYSO’s 50% playing-time rule. It needs no network on the field, and it’s free during the beta.
Apple Watch and iPhone, watchOS 11 and iOS 18 or later. Built in Swift.
Visit centerref.com
Notes: the button opens https://centerref.com . No store badges: the beta runs on TestFlight.

# Copy draft: Writing page

## Meta

Writing by Ian Dunn
Posts by Ian Dunn on running an engineering team and building apps, newest first.

## Hero

### Writing
Posts on running an engineering team and building apps, newest first.
Notes: then a plain dated list, no category cards and no archive frame. Each row: the post title (linked), the date as "July 29, 2026", and the description from the post's frontmatter, as written in src/content/writing/*.md. The category field stays in the schema and is not shown.
Notes: the post page byline reads "{date} · {n} min read" (plan.md wording table). The post body is the post as written; it is not part of this draft.

# Copy draft: 404 page

## Meta

Ian Dunn: page not found
No page lives at this address on iandunn.net.

## Hero

### Page not found.
The address may be mistyped or out of date. The four pages are in the menu above.
Back to the front page
Notes: the link goes to /. The h1 and the link are the plan's fixed wording.

# Copy draft: sources

Notes: Home, About and Projects facts come from the pre-redesign site (src/pages/index.astro, about.astro, contact.astro, src/data/caseStudies.js, site.js at tag v2-pre-redesign) and the one post (src/content/writing/build-it-to-run-without-you.md: the Pinterest team, no PM, designer or TPM, more than two years, account teams for some of the largest advertisers in the world).
Notes: FutAve: futave.com title and meta, read 2026-11-15 ("Find your next match"; "Find football worth watching. Follow your clubs, explore fixtures and keep up with scores, lineups and key moments."; nav: Leagues, Transfers, Lineup Builder, Tactics board). Stack and platforms from caseStudies.js.
Notes: TheraBasics: therabasics.com, read 2026-11-15 (30-second check-in, good days and hard days, journal, habits, no gamification or streaks, clients control what they share, therapist dashboard and one written summary, coaches, HIPAA-compliant, founder Raven Barrow PsyD). "Designed across the kitchen table" and "clinical reality won" from the old case study.
Notes: Center Ref: centerref.com, read 2026-11-15 (watch-first match clock, AYSO U6 to U19 plus Club Soccer and Custom, haptic patterns, one-tap stoppage with an automatic countdown, hold the yellow bar to send the setup, no network needed, event log and per-player minutes for the 50% rule, free during the beta, watchOS 11 and iOS 18, TestFlight beta). The phone-glance line from the old case study.
Notes: the parish rows reword the old Home "off the clock" rows; "represent the congregation" restates "represent the laity", and "the parish's governing board" explains vestry. Belizean roots (old hero caption) were cut after the fresh-reader check: the line read as abrupt.
