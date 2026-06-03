# Authoring Guide — the corn

The longer companion to `STYLE_GUIDE.md`. The style guide is about *what the
finished article looks like*; this guide is about *how it gets made* — from raw
source post to merged PR.

If you're writing an article, read both. If you're only here for source-material
handling, jump to [Source material handling](#source-material-handling).

---

## The editorial workflow

Catt is editor-of-record. Every article that ships under the corn's masthead is
something Catt has read and approved. AI agents may draft, suggest, or rewrite —
but the merge button is hers, and the audit trail (this guide + the PR template
+ STYLE_GUIDE sniff test) is what makes that responsibility legible.

The flow:

1. **Source comes in.** Usually a screenshot in a Discord DM or a HEIC on the
   phone. It lives there. It does not enter the repo. See
   [Source material handling](#source-material-handling).
2. **Describe the source in prose.** In the PR description, in your own words.
   This is the audit-trail substitute for the screenshot — enough detail that
   future-you (or a reviewer) can reconstruct the inspiration without the
   source material itself ever touching git.
3. **Draft.** Compose under `src/content/articles/YYYY-MM-DD-<slug>.md` with
   `draft: true` in the frontmatter while you're working.
4. **Anonymize.** Apply STYLE_GUIDE §Names, §Businesses & Locations, §Source
   Posts. Document what you changed in the PR's "Anonymization notes" section.
5. **Sniff-test.** Walk every checkbox in `.github/PULL_REQUEST_TEMPLATE.md`. If
   any box can't be honestly ticked, rewrite until it can.
6. **PR.** Open against `main`. Fill the template completely — every section, no
   skips. The template *is* the editorial audit trail; an empty template is the
   same as no audit.
7. **Catt reviews and merges.** Or asks for changes. Or kills the article. Her
   call.
8. **Flip `draft: false` and merge.** Or merge as `draft: true` and flip later
   in a follow-up PR — both are fine.

---

## Draft → publish

- Frontmatter `draft: true` keeps the article out of the homepage, archive, and
  RSS feed at build time.
- Frontmatter `draft: false` (or omitting the field, since the schema defaults
  to `false`) publishes it.
- It's totally fine to merge a draft and iterate in subsequent PRs before
  flipping the flag.

## Featuring an article

The homepage hero is normally the most recent non-draft article. To **pin** a
specific article as the hero indefinitely (overriding the recency rule), set
`featured: true` in its frontmatter:

```yaml
---
title: "..."
pubDate: 2026-05-31
draft: false
featured: true
---
```

**Only one article may be featured at a time.** The build will fail loudly if
two articles are flagged `featured: true` — this is intentional, so you can't
silently double-pin by forgetting to demote the previous favorite.

To swap which article is featured: open the currently-featured article's
markdown, flip `featured: true` → `featured: false` (or delete the line), and
flip the new pick to `featured: true` in the same PR.

If no article is flagged featured, the homepage falls back to the
most-recent-pubDate behavior automatically.

---

## Anonymization checklist

This is the operational version of STYLE_GUIDE §Names and §Businesses &
Locations. Run it on every draft before opening a PR.

**Names:**
- [ ] No real first or last names from source posts
- [ ] No real initials (even "B.M." is too identifiable here)
- [ ] No real usernames or handles
- [ ] Invented composite names cross-checked against people you actually know in
      town — if a Karen Doyle exists locally, pick a different name
- [ ] Default to generic descriptors ("a longtime resident", "one local woman")
      unless an invented name adds to the joke

**Places & businesses:**
- [ ] No independent local businesses named (Sue's Cafe, The Bookmark, etc.)
- [ ] No specific street addresses
- [ ] No named landmarks tied to one owner
- [ ] No schools, churches, community centers by real name
- [ ] National chains: only where the joke needs them, no street/intersection

**Details that fingerprint:**
- [ ] Vehicle make/model/colour shifted (white van → grey SUV, etc.)
- [ ] Dates shifted or vagued ("last Tuesday" instead of "May 22nd")
- [ ] Witness occupations/relationships dropped if not load-bearing for the bit
- [ ] Anything that, combined with other details, would let a local reader
      identify the source post → changed or dropped

**Source coupling:**
- [ ] Article is a composite of 2–3 posts, not a paraphrase of one
- [ ] No sentence in the article is a reworded version of a specific sentence in
      a source post

---

## Sensitive topics — don't even start

Per STYLE_GUIDE §Sensitive Topics. If a source post wades into any of these,
**drop that thread entirely** and find a different angle on the same hysteria.
Don't try to "handle it carefully" — just don't.

- Real children, schools, named minors
- Real crimes, real accidents, real deaths
- Mental health, addiction, domestic situations
- Race/ethnicity-coded "suspicious stranger" panic
- Specific named local political figures or candidates

---

## Tone calibration

(Compressed restatement of STYLE_GUIDE §Tone — keep this in mind while drafting.)

- Deadpan AP-style voice, absurd subject matter.
- The phenomenon of vigilance is the joke. The people doing the vigilance are
  not.
- "This town is insane and I love it" — yes.
- "These people are idiots" — no.
- Punching up at the *vibe*; never down at the residents.

---

## Source material handling

**Source FB screenshots, HEIC photos, and any raw material from Discord or
private storage NEVER go in this repo.**

A committed image is public on GitHub forever — even if you `git rm` it later,
it lives in the history and on every fork and clone. There is no "delete from
GitHub" once it's pushed. Assume anything that lands in `main` is permanently
public.

### Where source material lives

- **FB screenshots / received PNGs:** stay in Discord DMs or private cloud
  storage (iCloud, Drive, whatever).
- **HEIC originals from phone:** stay on device or in private storage. Convert
  to redacted/processed JPEG/PNG before anything touches the repo working tree.
- **Working copies during editing:** drop into the repo's `screenshots/` or
  `source-material/` directories — both are gitignored, so they exist on your
  machine but git won't track them.

### Gitignored paths (do not commit)

- `screenshots/` — local-only screenshot staging
- `source-material/` — raw source assets
- `*.heic`, `*.HEIC` — iOS originals, never web-safe anyway

### What CAN go in the repo

- Fully redacted, anonymized, processed images intended for publication (faces
  blurred, names removed, etc.) — placed under `public/` or `src/assets/` as
  the post requires.
- If in doubt: don't commit. Ask first.

### Pre-commit sanity check

Before `git add .`, run `git status` and confirm no `.heic`, `.HEIC`,
`screenshots/`, or `source-material/` paths appear in "Untracked files" that
you're about to stage. The gitignore should handle this automatically, but
verify.

---

## If something goes wrong post-publish

- **Real person recognizes themselves and asks for takedown:** comply
  immediately. Open a PR that either rewrites the offending bit or deletes the
  article entirely; merge ASAP. Apologise in whatever channel the request came
  through. The About page (T18) has the takedown contact path — keep that
  promise.
- **Real business asks for takedown:** same flow.
- **Source material accidentally committed:** treat the repo as compromised
  for that file — it's in history now. The fastest mitigation is `git rm` +
  push, then BFG repo-cleaner / `git filter-repo` to scrub history, then force-
  push (and notify anyone with a clone). Better to never do this in the first
  place.
- **Catt is unsure:** don't publish. The default action when uncertain is
  "leave it as a draft and ask."

---

## For AI agents drafting articles

If an agent (Claude Code, Codex, whoever) is drafting an article on Catt's
behalf:

- The agent fills out the PR template's "Source post description" and
  "Anonymization notes" sections — that's the agent's contribution to the audit
  trail.
- The agent **does not** check the "Catt has read this PR and approves
  publication" box. Catt checks that herself after reviewing.
- The agent **does not** auto-merge article PRs. Even if it has merge perms,
  hold for human review. (Non-article infra PRs can follow normal CI gates.)
- If the agent is unsure whether a sniff-test box honestly ticks, leave it
  unchecked and note the uncertainty in the PR description. Don't perform
  confidence.
