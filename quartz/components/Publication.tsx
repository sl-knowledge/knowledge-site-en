import { QuartzComponent, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"
import {
  readingSections,
  articleReadings,
  readingFor,
  readingHref,
  isTranslated,
  sourceUrl,
} from "./ReadingNavigation"
import release from "../site-release.json"
// @ts-ignore
import pageviewsScript from "./scripts/pageviews.inline"

export const SiteNavigation: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const root = pathToRoot(fileData.slug!)
  const current = String(fileData.slug)
  const reading = readingFor(current)
  return (
    <nav class="site-navigation" aria-label="Main navigation">
      <a class="internal nav-home" href={`${root}/`}>
        SL / Research &amp; Learning
      </a>
      <div>
        {readingSections.map((section) => {
          const translated = isTranslated(allFiles, section.slug)
          return (
            <a
              class={translated ? "internal" : "external cross-site"}
              href={readingHref(root, section.slug, translated)}
              hreflang={translated ? undefined : "zh-CN"}
              key={section.id}
              aria-current={
                current === section.slug
                  ? "page"
                  : reading?.section === section.id
                    ? "location"
                    : undefined
              }
            >
              {section.title}
              {!translated && <span class="zh-badge">中文</span>}
            </a>
          )
        })}
        <a
          class="internal"
          href={`${root}/about`}
          aria-current={current === "about" ? "page" : undefined}
        >
          About
        </a>
        <a class="language-switch" href={sourceUrl(fileData.slug!)} hreflang="zh-CN" lang="zh-CN">
          中文
        </a>
      </div>
    </nav>
  )
}

const published = (allFiles: QuartzComponentProps["allFiles"]) =>
  allFiles.filter((file) => file.frontmatter?.kind === "article" && file.slug)

const updatedValue = (file: QuartzComponentProps["allFiles"][number]) =>
  String(file.frontmatter?.updated ?? file.frontmatter?.created ?? "")

export const PublicationMeta: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const fm: Record<string, unknown> = fileData.frontmatter ?? {}
  const notes = published(allFiles)
  const root = pathToRoot(fileData.slug!)
  if (fm.kind === "home") {
    const recent = [...notes]
      .sort((a, b) => updatedValue(b).localeCompare(updatedValue(a)))
      .slice(0, 4)
    const updatesTranslated = isTranslated(allFiles, "updates")
    return (
      <section class="home-hero">
        <p class="eyebrow">SL’S FIELD NOTES · Continuously revised</p>
        <h1>
          Start from small models,
          <br />
          understand larger worlds.
        </h1>
        <p class="hero-description">
          An independent researcher’s open research site:
          <br />
          continuously revised drafts, working papers and testable inferences.
        </p>
        <p class="hero-purpose"><a class="internal" href={`${root}/site-purpose`}>What This Site Is For <span aria-hidden="true">→</span></a></p>
        <div class="hero-bottom">
          <span>{String(notes.length).padStart(2, "0")} published notes / {readingSections.length} reading paths</span>
          <a class="internal" href={`${root}/updates`}>
            Site v{release.version} · {release.date}
          </a>
        </div>
        <div class="research-cycle" aria-label="How the research runs">
          Ask a question <span>→</span> Try an explanation <span>→</span> Check reality{" "}
          <span>→</span> Keep asking
        </div>
        <div class="collection-heading">
          <h2>Start here</h2>
          <span>READING PATHS</span>
        </div>
        <p class="reading-paths-note">
          The complete public collection is available in English. Use the language switch to read the corresponding Chinese edition.
        </p>
        <div class="notes-grid topic-grid">
          {readingSections.map((section, index) => {
            const translated = isTranslated(allFiles, section.slug)
            const total = Object.keys(articleReadings).filter(
              (slug) => articleReadings[slug].section === section.id,
            ).length
            const available = Object.keys(articleReadings).filter(
              (slug) =>
                articleReadings[slug].section === section.id && isTranslated(allFiles, slug),
            ).length
            const size =
              section.id === "book" ? "Five parts · fifty-two chapters" : `${total} articles`
            const availability =
              available === total
                ? ""
                : available > 0
                  ? ` · ${available} in English`
                  : " · not yet in English"
            return (
              <a
                class={translated ? "internal note-card" : "external note-card cross-site"}
                href={readingHref(root, section.slug, translated)}
                hreflang={translated ? undefined : "zh-CN"}
                key={section.id}
              >
                <div class="card-top">
                  <span>Reading path</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <div class="card-bottom">
                  <span>
                    {size}
                    {availability}
                  </span>
                  <span>Enter path ↗</span>
                </div>
              </a>
            )
          })}
        </div>
        <div class="latest-release">
          <span>Latest release · v{release.version}</span>
          <a
            class={updatesTranslated ? "internal" : "external cross-site"}
            href={
              updatesTranslated
                ? `${root}/updates#v${release.version.replaceAll(".", "-")}`
                : sourceUrl("updates")
            }
          >
            {release.title} ↗
          </a>
          <p>{release.summary}</p>
        </div>
        <div class="collection-heading">
          <h2>Recently published</h2>
          <span>RECENT NOTES</span>
        </div>
        <div class="notes-grid recent-notes">
          {recent.map((file) => {
            const section = readingSections.find(
              (s) => s.id === articleReadings[String(file.slug)]?.section,
            )
            return (
              <a class="internal note-card" href={`${root}/${file.slug}`}>
                <div class="card-top">
                  <span>{section?.title ?? String(file.frontmatter?.kind ?? "note")}</span>
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
            )
          })}
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
      <p class="site-release">
        <a class="internal" href={`${root}/updates`}>
          Site v{release.version} · Update log
        </a>
        <span> · {release.date}</span>
      </p>
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
        <a class="internal" href={`${root}/about#contact`}>Contact</a>
        <a class="language-switch" href={sourceUrl(fileData.slug!)} hreflang="zh-CN" lang="zh-CN">
          中文版
        </a>
        <a href="https://github.com/sl-knowledge/knowledge-site-en/issues/new?template=research-feedback.yml">Research feedback</a>
        <a href="https://github.com/sl-knowledge/knowledge-site-en">GitHub</a>
        <a href="https://quartz.jzhao.xyz/">Built with Quartz</a>
      </div>
    </footer>
  )
}

PublicationFooter.afterDOMLoaded = pageviewsScript
