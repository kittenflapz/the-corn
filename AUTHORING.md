# Authoring Guide — the corn

## Source material handling

**Source FB screenshots, HEIC photos, and any raw material from Discord or private storage NEVER go in this repo.**

A committed image is public on GitHub forever — even if you `git rm` it later, it lives in the history and on every fork and clone. There is no "delete from GitHub" once it's pushed. Assume anything that lands in `main` is permanently public.

### Where source material lives

- **FB screenshots / received PNGs**: stay in Discord DMs or private cloud storage (iCloud, Drive, whatever).
- **HEIC originals from phone**: stay on device or in private storage. Convert to redacted/processed JPEG/PNG before anything touches the repo working tree.
- **Working copies during editing**: drop into the repo's `screenshots/` or `source-material/` directories — both are gitignored, so they exist on your machine but git won't track them.

### Gitignored paths (do not commit)

- `screenshots/` — local-only screenshot staging
- `source-material/` — raw source assets
- `*.heic`, `*.HEIC` — iOS originals, never web-safe anyway

### What CAN go in the repo

- Fully redacted, anonymized, processed images intended for publication (faces blurred, names removed, etc.) — placed under `public/` or `src/assets/` as the post requires.
- If in doubt: don't commit. Ask first.

### Pre-commit sanity check

Before `git add .`, run `git status` and confirm no `.heic`, `.HEIC`, `screenshots/`, or `source-material/` paths appear in "Untracked files" that you're about to stage. The gitignore should handle this automatically, but verify.
