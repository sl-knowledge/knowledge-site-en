import { QuartzComponent, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"
import map from "../reading-map.json"
// @ts-ignore
import readingScript from "./scripts/reading-navigation.inline"

type Reading = {
  section: string
  group: string
  role?: string
  bookReference?: string
  readings?: string[]
}

// Chinese records translation provenance for this baseline. Pages not translated
// yet keep their place in the reading structure and open on the Chinese site,
// so the outline never leads to a dead page.
export const SOURCE_SITE = "https://sl-knowledge.github.io/knowledge-site"

export const sourceUrl = (slug: string): string => {
  if (slug === "index") return `${SOURCE_SITE}/`
  if (slug.endsWith("/index")) return `${SOURCE_SITE}/${slug.slice(0, -"/index".length)}/`
  return `${SOURCE_SITE}/${slug}`
}

export const readingSections = map.sections
export const articleReadings: Record<string, Reading> = map.articles
const auxiliaryReadings: Record<string, Reading> = map.auxiliary
const shortTitles: Record<string, string> = map.labels
const mappedTitles: Record<string, string> = map.titles

export const readingFor = (slug: string) => articleReadings[slug] ?? auxiliaryReadings[slug]

// A page can be read in this edition only once it has been translated here.
export const isTranslated = (allFiles: QuartzComponentProps["allFiles"], slug: string) =>
  allFiles.some((file) => file.slug === slug)

export const readingHref = (root: string, slug: string, translated = true) =>
  translated ? `${root}/${slug.endsWith("/index") ? slug.slice(0, -5) : slug}` : sourceUrl(slug)

// The display title of a page: the translated frontmatter wins, then the short
// label of the draft, then the title recorded in the reading map.
export const readingTitle = (allFiles: QuartzComponentProps["allFiles"], slug: string): string =>
  String(
    allFiles.find((file) => file.slug === slug)?.frontmatter?.title ??
      shortTitles[slug] ??
      mappedTitles[slug] ??
      slug,
  )

export const ReadingNavigation: QuartzComponent = ({ fileData, allFiles }) => {
  const current = String(fileData.slug)
  const root = pathToRoot(fileData.slug!)
  const reading = readingFor(current)
  const item = (slug: string, label?: string) => {
    const translated = isTranslated(allFiles, slug)
    const text = label ?? readingTitle(allFiles, slug)
    return (
      <li key={slug}>
        {translated ? (
          <a
            class="internal"
            href={readingHref(root, slug)}
            aria-current={current === slug ? "page" : undefined}
          >
            {text}
          </a>
        ) : (
          <a
            class="external cross-site"
            href={sourceUrl(slug)}
            hreflang="zh-CN"
            title="Not yet translated — opens on the Chinese edition"
          >
            {text}
            <span class="zh-badge">中文</span>
          </a>
        )}
      </li>
    )
  }
  return (
    <nav class="reading-navigation" aria-label="Reading outline">
      <details class="reading-outline" open>
        <summary class="reading-outline-title">Reading outline</summary>
        <div class="reading-tree">
          {readingSections.map((section) => {
            const active = reading?.section === section.id || current === section.slug
            return (
              <details
                class="reading-section"
                key={section.id}
                data-reading-section={section.id}
                open={active || (current === "index" && section.id === "theory")}
              >
                <summary>{section.title}</summary>
                <ul>
                  {item(section.slug, `${section.title} overview`)}
                  {section.groups.map((group) => (
                    <li key={group.id}>
                      <details class="reading-group" open={active && reading?.group === group.id}>
                        <summary>{group.title}</summary>
                        <ul>{group.slugs.map((slug) => item(slug))}</ul>
                      </details>
                    </li>
                  ))}
                </ul>
              </details>
            )
          })}
          {map.sidebarGroups.map((group) => (
            <details class="reading-section" key={group.id} data-reading-section={group.id} open={group.slugs.includes(current)}>
              <summary>{group.title}</summary>
              <ul>{group.slugs.map((slug) => item(slug))}</ul>
            </details>
          ))}
          <ul class="reading-utility">{map.utilitySlugs.map((slug) => item(slug))}</ul>
        </div>
      </details>
    </nav>
  )
}

export const ReadingContext: QuartzComponent = ({ fileData, allFiles }) => {
  const current = String(fileData.slug)
  const reading = articleReadings[current]
  if (!reading) return null
  const root = pathToRoot(fileData.slug!)
  const section = readingSections.find((s) => s.id === reading.section)!
  const group = section.groups.find((g) => g.id === reading.group)!
  const guideSlug = "framework/book/book-reading-guide"
  const guideTranslated = isTranslated(allFiles, guideSlug)
  return (
    <aside class="reading-context" aria-label="Article reading context">
      <nav aria-label="Reading position">
        <a class="internal" href={readingHref(root, section.slug)}>
          {section.title}
        </a>
        <span aria-hidden="true"> › </span>
        <a class="internal" href={`${readingHref(root, section.slug)}#${group.id}`}>
          {group.title}
        </a>
        <span class="reading-role">{reading.role}</span>
      </nav>
      <p>
        <a
          class={guideTranslated ? "internal" : "external cross-site"}
          href={readingHref(root, guideSlug, guideTranslated)}
          hreflang={guideTranslated ? undefined : "zh-CN"}
        >
          Related draft
        </a>
        : {reading.bookReference}
      </p>
      {!!reading.readings?.length && (
        <p class="reading-prerequisites">
          Suggested prerequisite reading:{" "}
          {reading.readings.map((slug, i) => {
            const translated = isTranslated(allFiles, slug)
            return (
              <span key={slug}>
                {i > 0 && " · "}
                <a
                  class={translated ? "internal" : "external cross-site"}
                  href={readingHref(root, slug, translated)}
                  hreflang={translated ? undefined : "zh-CN"}
                >
                  {readingTitle(allFiles, slug)}
                  {!translated && <span class="zh-badge">中文</span>}
                </a>
              </span>
            )
          })}
        </p>
      )}
    </aside>
  )
}

ReadingNavigation.afterDOMLoaded = readingScript
