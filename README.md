# SL · Research & Learning

[Read the website](https://sl-knowledge.github.io/knowledge-site-en/)

SL's public research notes in English, covering learning methods, economics, language and writing, and theory frameworks. The articles are continuously revised, and each one states its author, version and dates.

This is the English edition. The [Chinese edition](https://sl-knowledge.github.io/knowledge-site/) is the source of truth: every page here is a translation of a page there, and the two are kept in step by an automated check.

The content is for learning and research. The scope of the safety and investment material is set out in the [research-use disclaimer](https://sl-knowledge.github.io/knowledge-site-en/disclaimer).

## How the two editions stay in sync

- `content/` mirrors the Chinese tree path for path. Every English page records the Chinese page it translates in its `source` frontmatter, together with the `sourceUpdated` date and the same `version`.
- `sync/glossary.md` fixes the English rendering of the recurring terms.
- `sync/pending.json` lists the Chinese pages that have not been translated yet.
- `quartz/reading-map.json` holds the reading structure of the Chinese edition: the four reading paths, their groups and the articles in them. The reading outline of every page is built from it. A page that is not translated yet keeps its place in the structure and opens on the Chinese edition, marked with a Chinese badge, so no entry leads to a dead page.
- `npm run validate:content` checks each English page on its own: frontmatter, dates, publish flag, research-use boundary, and that every internal link resolves.
- `npm run check:sync` compares the English edition against the Chinese source: version, dates, research scope, kind, the link graph of each page, and the list of English pages that the Chinese site links back to. It runs in CI as a separate job, so a translation that falls behind is visible without blocking publication.
- `npm run build` runs the local validation, builds the site and verifies the built output.

The Chinese site links back to this edition from its navigation and footer. The list of pages it may link to is kept in `quartz/english-edition.json` there; `npm run check:sync` fails if this edition publishes a page that the list does not name.

## Visitor statistics

Both editions report into the same Umami property (`8486d200-3738-4f33-a408-d8415cf6d20f`), so the
pageview count in the footer is the shared aggregate of both sites. The tracker is loaded on
`sl-knowledge.github.io` only; no visitor identifiers or session replay are added.

The footer total is published as a static snapshot by CI. Set the `UMAMI_SHARE_URL` repository secret
to the same Umami Cloud Share URL the Chinese edition uses; without it the build retains the last
published total instead of failing.

## Copyright

Original articles: © 2026 SL. All rights reserved. See [CONTENT-LICENSE.md](CONTENT-LICENSE.md).

The site is built with [Quartz](https://quartz.jzhao.xyz/); the Quartz code is under the [MIT licence](LICENSE.txt).
