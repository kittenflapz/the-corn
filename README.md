# 🌽 The Corn

> *Serving the concerned residents of North Durham since 2026*

A satirical hyperlocal news site for North Durham Region (Port Perry, Uxbridge, Blackstock, Beaverton), in the spirit of *The Onion* and *The Beaverton*. Articles are deadpan AP-style rewrites of the kind of low-stakes panic that swirls through community Facebook groups — unattended vans, cancellation rumours, downtown construction nobody understands, ongoing investigations of a single coin car wash.

**Live at:** [https://thecorn.ca](https://thecorn.ca)

The bit is that small-town vigilance is funny when you zoom out, and that the breathless certainty with which people in these groups discuss minor non-events deserves a deadpan newswire treatment.

We love these towns. The joke is on the *phenomenon* of collective panic, never on the individual people who fall into it.

## What this repo is

A static site built with [Astro](https://astro.build), deployed to Cloudflare Pages. Articles are markdown files in `src/content/articles/`, validated by a zod schema in `src/content.config.ts`, rendered via file-based routing.

There is no CMS, no database, no auth, no submissions UI. Articles get added by editing markdown files and opening a PR.

## Editorial guardrails

All articles must pass the sniff test in [`STYLE_GUIDE.md`](./STYLE_GUIDE.md) before merging:

- No real names, even initials. No real businesses (chains are sometimes OK, generically). No real addresses.
- Source posts are composited and rewritten, never reproduced verbatim.
- The joke is the phenomenon, not the people.
- Sensitive topics (kids, real crime, mental health, race-coded panic) are off-limits.

[`AUTHORING.md`](./AUTHORING.md) walks through the article-writing workflow end to end. Pull-request template enforces the checklist.

## Local dev

```sh
npm install
npm run dev        # http://localhost:4321
npm run astro check
npm run build
npm run format
```

Node 20+ required.

## Project structure

```
.
├── src/
│   ├── content/articles/   # markdown articles (the actual content)
│   ├── content.config.ts   # zod schema for article frontmatter
│   ├── components/         # Masthead, ArticleCard, ArticleBody, Footer
│   ├── layouts/            # BaseLayout (html shell, fonts, OG/Twitter meta)
│   ├── pages/              # routes (index, articles/[slug], archive, about, 404, feed.xml)
│   └── styles/global.css   # design tokens, self-hosted fonts via fontsource
├── public/                 # robots.txt, favicon, humans.txt
├── .github/                # PR template, CI workflow
├── STYLE_GUIDE.md          # editorial guardrails
├── AUTHORING.md            # how to write an article
└── astro.config.mjs
```

## Contributing

This is a private editorial project — PRs from outside the editorial team won't be merged, but corrections, complaints, and takedown requests are welcome:

**[corrections@thecorn.ca](mailto:corrections@thecorn.ca)**

We mean this. If you see yourself in an article and would rather not be there, write to us. The whole project rests on nobody specific feeling targeted.

## License

Source code: MIT.
Article content: not licensed for reproduction. Don't republish our jokes; ours don't make sense outside the context of this town.

---

*The Corn is a satirical publication. All persons, businesses, and events depicted are fictional or fictionalized. Any resemblance to actual residents or local establishments is coincidental and affectionate.*
