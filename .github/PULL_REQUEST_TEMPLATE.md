<!--
the corn — Pull Request Template

This template exists so Catt-as-editor-of-record has an auditable trail for every
article that ships. Fill out every section. PRs that skip sections will be
asked to redo them — this is the guardrail, not paperwork.

For non-article changes (infra, styles, components, bugfixes), use the "Non-article
change" section at the bottom and skip the article-specific blocks.
-->

## What is this PR?

<!-- One-line summary. e.g. "New article: Unattended Van Spurs Five-Day Investigation" -->

- [ ] New article
- [ ] Article edit / correction
- [ ] Non-article change (infra, styles, components, copy on About/etc.)

---

## Article details

<!-- DELETE this whole section if this is a non-article change. -->

**Slug / filename:** `src/content/articles/YYYY-MM-DD-<slug>.md`

**Category:** <!-- local news | community alert | food & dining | civic affairs -->

**Draft status on merge:** <!-- draft: true | draft: false (publishing live) -->

### Source post description

<!--
DESCRIBE the source FB post(s) in your own words. DO NOT paste screenshots, DO NOT
quote verbatim, DO NOT include real names or addresses from the source.

Goal: enough detail that a reviewer (or future-you) can reconstruct what inspired
the bit without the source material itself ever entering the repo.

Example:
"Composite of three posts from the Port Perry community group between May 20–24
about an unfamiliar vehicle parked behind a downtown shop. Original posts named
the business and a witness; I've moved it to 'a local grocery store' and the
witness is 'a longtime resident.' Original made it sound vaguely sinister; I'm
playing the sustained five-day surveillance as the joke."
-->

### Anonymization notes

<!--
What did you change to scrub identifying details? Be specific about what was in
the source vs. what's in the article. Reference STYLE_GUIDE.md sections if helpful.

Example:
- Real first+last name → 'a concerned homeowner'
- 'Lucy's Bakery on Queen Street' → 'a Main Street business'
- White Honda CR-V → grey SUV
- Date shifted from May 22 → 'last Tuesday'
- Witness's profession (nurse) dropped entirely, not load-bearing for the bit
-->

### Sniff test (STYLE_GUIDE §"The Sniff Test")

- [ ] **No real identifiable person** is recognizably the butt of the joke
- [ ] **No real local business** could plausibly lose customers over this
- [ ] **The joke is collective panic / the phenomenon** — NOT "people in this town are stupid"
- [ ] **I'd be comfortable** if the people in the source posts saw this article
- [ ] **Sensitive topics avoided**: no real children, no real crimes/accidents/deaths, no mental health / addiction / domestic angles, no race-coded suspicion narratives, no named local political figures
- [ ] **Names cross-checked**: none of the invented names match a real person in town that I can think of
- [ ] **Source material is NOT in this PR**: no screenshots, no HEIC files, nothing under `screenshots/` or `source-material/` (gitignore should enforce; verify with `git status` anyway)
- [ ] **Footer disclaimer + satire kicker** present (handled by layout — confirm the article renders with both)
- [ ] **It makes me snort** (STYLE_GUIDE §"The Sniff Test" item 5)

### Editor-of-record sign-off

<!--
Catt signs off here before merging. If anyone other than Catt opens this PR
(including an AI agent), leave this unchecked — Catt will check it after reviewing.
-->

- [ ] Catt has read this PR and approves publication

---

## Non-article change

<!-- DELETE if this IS an article PR. Otherwise: short description + screenshots if UI. -->

**What changed and why:**

**Verification:**

- [ ] `npm run build` passes locally
- [ ] `npm run astro check` passes locally (if type-affecting)
- [ ] No source material accidentally staged (`git status` clean of `screenshots/`, `source-material/`, `*.heic`)
