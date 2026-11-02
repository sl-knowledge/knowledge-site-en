# SL · Research & Learning

[Read the website](https://sl-knowledge.github.io/knowledge-site-en/)

SL's public research notes in English, covering learning methods, economics, language and writing, and theory frameworks. The articles are continuously revised, and each one states its author, version and dates.

This is the English edition. The [Chinese edition](https://sl-knowledge.github.io/knowledge-site/) is the source of truth: every page here is a translation of a page there, and the two are kept in step by an automated check.

The content is for learning and research. The scope of the safety and investment material is set out in the [research-use disclaimer](https://sl-knowledge.github.io/knowledge-site-en/disclaimer).

## How the two editions stay in sync

- `content/` mirrors the Chinese tree path for path. Every English page records the Chinese page it translates in its `source` frontmatter, together with the `sourceUpdated` date and the same `version`.
- `sync/glossary.md` fixes the English rendering of the recurring terms.
- `sync/pending.json` lists the Chinese pages that have not been translated yet.
- `npm run validate:content` checks each English page on its own: frontmatter, dates, publish flag, research-use boundary, and that every internal link resolves.
- `npm run check:sync` compares the English edition against the Chinese source: version, dates, research scope, kind, and the link graph of each page. It runs in CI as a separate job, so a translation that falls behind is visible without blocking publication.
- `npm run build` runs the local validation, builds the site and verifies the built output.

## Copyright

Original articles: © 2026 SL. All rights reserved. See [CONTENT-LICENSE.md](CONTENT-LICENSE.md).

The site is built with [Quartz](https://quartz.jzhao.xyz/); the Quartz code is under the [MIT licence](LICENSE.txt).
