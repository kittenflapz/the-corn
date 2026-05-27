# Authoring Guide

How to write a new article for The Corn without leaking source material or tripping the editorial guardrails.

## Source material — never in this repo

Source posts (Facebook screenshots, copy-pasted text, neighbourhood gossip, etc.) live in **Discord and private storage only**. They must never be committed to this repository. The `.gitignore` defensively blocks `screenshots/`, `source-material/`, and `*.heic|*.HEIF` files, but the rule is: don't put them here in the first place.

When you describe a source post in a PR, do it **in plain text** in the PR description. Do not attach the screenshot.

## Writing a new article

1. **Branch.** Cut a branch off `main`: `git checkout -b article/<short-slug>`.
2. **File.** Create `src/content/articles/YYYY-MM-DD-<slug>.md`. Use today's date (or planned publish date) as the prefix.
3. **Frontmatter.** Match the schema in [`src/content/config.ts`](src/content/config.ts). If you add a field, update the schema first.
4. **Compose, don't copy.** Articles should be a composite of 2+ source posts. If you only have one source, either wait for another or pick a different angle.
5. **Anonymize.** No real names, no real initials, no specific independent businesses, no real street addresses or named landmarks. See [`STYLE_GUIDE.md`](https://github.com/kittenflapz/the-corn/blob/main/STYLE_GUIDE.md) (in the editorial repo) for the full rules.
6. **Sniff test.** Run the sniff test from STYLE_GUIDE before opening the PR. The PR template will walk you through the checklist again — that's intentional double-checking.

## Drafts

To keep an in-progress piece out of the homepage, archive, and RSS feed, set `draft: true` in the frontmatter. The content collection schema treats `draft` as optional and the page templates filter it out. Drop the flag (or set `false`) when you're ready to publish.

## Preview and merge

- Opening a PR triggers a Cloudflare Pages preview deploy. The URL appears as a check on the PR.
- Use the preview to **visually** confirm the disclaimer renders, the layout looks right, and nothing weird happened with markdown rendering.
- The PR template's checklist must be completed before merge.
- **Catt is the editor of record.** Catt reviews and merges. CF Pages auto-deploys from `main`.

## When in doubt

If something feels too close to a real identifiable person/place/event, it probably is. Cut it, change it, or shelve the piece. The Corn's safety margin lives in the boring, generic details.
