import { QuartzComponent, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"
// @ts-ignore
import pageviewsScript from "./scripts/pageviews.inline"

// The Chinese edition is the source of truth for every page. The English tree
// mirrors it path for path, so the counterpart of a page is always the same
// relative path on the source site.
export const SOURCE_SITE = "https://sl-knowledge.github.io/knowledge-site"

export function sourceUrl(slug: string): string {
  if (slug === "index") return `${SOURCE_SITE}/`
  if (slug.endsWith("/index")) return `${SOURCE_SITE}/${slug.slice(0, -"/index".length)}/`
  return `${SOURCE_SITE}/${slug}`
}

type Collection = { slug: string; label: string; title: string; description: string }

// Collections are listed only when the English site actually holds pages for
// them, so a partially translated edition never renders empty entry points.
const collections: Collection[] = [
  {
    slug: "framework",
    label: "Framework",
    title: "Theory Framework",
    description: "Five drafts, research methods, systems and values, and case studies.",
  },
  {
    slug: "learning",
    label: "Learning",
    title: "Learning Methods",
    description: "Turn frameworks, questions and feedback into ability you can call on.",
  },
  {
    slug: "economics",
    label: "Economics",
    title: "Economics",
    description: "Exchange and continuous circulation, starting from minimal models.",
  },
  {
    slug: "language",
    label: "Language",
    title: "Language & Writing",
    description: "Vocabulary, experience compression, concept packaging and writing systems.",
  },
  {
    slug: "applications",
    label: "Applications",
    title: "Applications",
    description:
      "Theory put to concrete problems: hypotheses, action windows, testable mechanisms.",
  },
]

const published = (allFiles: QuartzComponentProps["allFiles"]) =>
  allFiles.filter((file) => file.frontmatter?.kind === "article" && file.slug)

const updatedValue = (file: QuartzComponentProps["allFiles"][number]) =>
  String(file.frontmatter?.updated ?? file.frontmatter?.created ?? "")

export const SiteNavigation: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const root = pathToRoot(fileData.slug!)
  const available = collections.filter((collection) =>
    allFiles.some((file) => file.slug?.startsWith(`${collection.slug}/`)),
  )
  return (
    <nav class="site-navigation" aria-label="Main navigation">
      <a class="internal nav-home" href={`${root}/`}>
        SL / Research &amp; Learning
      </a>
      <div>
        {available.map((collection) => (
          <a class="internal" href={`${root}/${collection.slug}/`}>
            {collection.label}
          </a>
        ))}
        <a class="internal" href={`${root}/about`}>
          About
        </a>
        <a class="language-switch" href={sourceUrl(fileData.slug!)} hreflang="zh-CN" lang="zh-CN">
          中文
        </a>
      </div>
    </nav>
  )
}

export const PublicationMeta: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const fm: Record<string, unknown> = fileData.frontmatter ?? {}
  const notes = published(allFiles)
  const available = collections.filter((collection) =>
    allFiles.some((file) => file.slug?.startsWith(`${collection.slug}/`)),
  )
  const root = pathToRoot(fileData.slug!)
  if (fm.kind === "home") {
    const recent = [...notes]
      .sort((a, b) => updatedValue(b).localeCompare(updatedValue(a)))
      .slice(0, 4)
    return (
      <section class="home-hero">
        <p class="eyebrow">SL’S FIELD NOTES · Continuously revised</p>
        <h1>
          Start from small models,
          <br />
          understand larger worlds.
        </h1>
        <p class="hero-description">
          Research notes on learning, economics, language and complex systems.
          <br />
          Let deduction form expectations; let reality correct understanding.
        </p>
        <div class="hero-bottom">
          <span>
            {String(notes.length).padStart(2, "0")} published notes /{" "}
            {String(available.length).padStart(2, "0")} research directions
          </span>
          <span>First collection · 2026.10</span>
        </div>
        <div class="collection-heading">
          <h2>Read by research direction</h2>
          <span>RESEARCH COLLECTIONS</span>
        </div>
        <div class="notes-grid topic-grid">
          {available.map((collection, index) => (
            <a class="internal note-card" href={`${root}/${collection.slug}/`}>
              <div class="card-top">
                <span>Research direction</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <div class="card-bottom">
                <span>
                  {notes.filter((file) => file.slug?.startsWith(`${collection.slug}/`)).length}{" "}
                  published notes
                </span>
                <span>Open collection ↗</span>
              </div>
            </a>
          ))}
        </div>
        <div class="collection-heading">
          <h2>Recently published</h2>
          <span>RECENT NOTES</span>
        </div>
        <div class="notes-grid recent-notes">
          {recent.map((file) => (
            <a class="internal note-card" href={`${root}/${file.slug}`}>
              <div class="card-top">
                <span>{String(file.frontmatter?.kind ?? "note")}</span>
                <span>{updatedValue(file).slice(0, 10)}</span>
              </div>
              <h3>{String(file.frontmatter?.title ?? file.slug)}</h3>
              <p>{String(file.frontmatter?.description ?? "")}</p>
              <div class="card-bottom">
                <span>
                  v{String(file.frontmatter?.version ?? "0.1")} ·{" "}
                  {String(file.frontmatter?.author ?? "SL")}
                </span>
                <span aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    )
  }
  const date = (value: unknown) => String(value ?? "").slice(0, 10)
  return (
    <div class="publication-meta" aria-label="Article version information">
      <span class="version-badge">v{String(fm.version ?? "0.1")}</span>
      <span>Author {String(fm.author ?? "SL")}</span>
      <span>
        Created <time dateTime={date(fm.created)}>{date(fm.created)}</time>
      </span>
      <span>
        Updated <time dateTime={date(fm.updated)}>{date(fm.updated)}</time>
      </span>
    </div>
  )
}

export const PublicationFooter: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const root = pathToRoot(fileData.slug!)
  return (
    <footer class="publication-footer">
      <p>© 2026 SL. All rights reserved.</p>
      <p class="research-use-footer">
        This site publishes research notes. Safety and investment material is research only, not
        operational or trading advice.
      </p>
      <p
        class="site-pageviews"
        data-pageviews-url={`${root}/static/pageviews.json`}
        aria-live="polite"
      >
        Total pageviews: <span data-pageviews-count>Loading…</span>
      </p>
      <div>
        <a class="internal" href={`${root}/disclaimer`}>
          Research-use disclaimer
        </a>
        <a class="internal" href={`${root}/about`}>
          About &amp; copyright
        </a>
        <a class="language-switch" href={sourceUrl(fileData.slug!)} hreflang="zh-CN" lang="zh-CN">
          中文版
        </a>
        <a href="https://github.com/sl-knowledge/knowledge-site-en">GitHub</a>
        <a href="https://quartz.jzhao.xyz/">Built with Quartz</a>
      </div>
    </footer>
  )
}

PublicationFooter.afterDOMLoaded = pageviewsScript
