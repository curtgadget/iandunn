# Check — full-redesign

Reviewers: pare:code-truth, pare:build-ready, pare:smaller — run once, in
parallel, on Fable (the strongest model this harness offers). All three
verdicts: **ready after fixes**. Every finding below was verified against the
cited files before being acted on; none were dropped as wrong.

## Fixed (in plan.md)

- Phase 1 told the builder to "disarm" the gate — no such operation exists,
  and the deal itself arms the build (all three reviewers; gate.md:93-98).
  Rewritten: the build stays open, later phases re-point it with
  `--start --new`.
- Phase 2 built Home teasers on the four-field data phase 3 then deleted, and
  phase 2's own copy-lint would have failed the old formula copy (build-ready,
  code-truth). The caseStudies.js rewrite moved into phase 2; phase 3 is now
  only the /projects page.
- Phase 2's done-when claimed unrebuilt pages "still render (old design)" —
  impossible once the `:root` tokens are replaced (code-truth; about.astro:217,
  writing.astro:103 resolve old tokens). Restated: they build but render
  broken mid-branch, accepted.
- The shipping section claimed a CI that does not exist — the one workflow was
  added in PR #4 and deleted in PR #6 (code-truth; verified in git history).
  Restated: no CI; each phase verifies locally before merging.
- Phases 4-5 were two single-page restyles paying two full phase cycles, and
  phase 4 could not delete PageHeader because writing.astro still imported it
  (smaller). Merged into one About + Writing phase; plan is now five phases.
- The whole 1,594-file / 37 MB kit copied to `public/assets` would deploy to
  production forever (smaller, build-ready). Phase 5 now prunes it to the
  files the built pages load.
- The final grep for `--accent` would flag the new system's own token
  (smaller, build-ready; system.css:10,139). Grep now targets old hex values
  and font names instead.
- Phases 3-5 said "gate passes" with no waiver clause, unlike 2 and 6
  (build-ready). All phases now allow OPEN with only reasoned waivers.
- Phase 4's relies-on pointed at parish copy in index.astro, which phase 2
  removes (build-ready, below-bar note). Now points at copy.md.
- CaseStudyRow described as rendering "both Home rows" — it is Home-only
  (code-truth). Parenthetical fixed; its rebuild moved to phase 2.

## Could-not-check items, followed up

- Node and headless Chrome presence: verified on this machine (Node v24.21.0,
  Google Chrome installed). Written into phase 1's relies-on.
- Whether the checker tolerates Astro's dist structure: remains phase 1's
  job to prove; already the plan's first accepted risk.
- Real contact handles vs the skill's contacts-on-`.example` rule: real
  conflict for a personal site. Decided: real handles stay, FAILs waived with
  the brief as reason. Added to risks.
- Whether Cloudflare Pages builds branch previews: set outside the repo,
  unknowable from here. Noted in risks; nothing depends on it.
- Whether `gate.mjs --start` accepts non-index page paths like
  `dist/projects/index.html`: unresolved; phase 1 proves the toolchain and
  would surface it before any page is rebuilt.

## Your call

- None. No finding reopened a decision from the brief.

## Not doing

- None of the surviving findings were declined.
