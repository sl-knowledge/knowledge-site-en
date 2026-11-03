import fs from "node:fs"
import path from "node:path"
import assert from "node:assert/strict"
import { parse } from "yaml"

// Catch a successful generator run that accidentally filters out public pages.
const files = fs.readdirSync("content", { recursive: true }).filter((file) => file.endsWith(".md"))
const search = JSON.parse(fs.readFileSync("public/static/contentIndex.json", "utf8"))
const frontmatterOf = (file) =>
  parse(fs.readFileSync(path.join("content", file), "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---/)[1])

for (const file of files) {
  const slug = file.replaceAll(path.sep, "/").replace(/\.md$/, "")
  const html = fs.readFileSync(path.join("public", `${slug}.html`), "utf8")
  assert.ok(html.includes("© 2026 SL. All rights reserved."), `${file}: missing copyright`)
  assert.ok(
    html.includes(slug === "index" ? 'class="home-hero"' : 'class="publication-meta"'),
    `${file}: missing publication layout`,
  )
  assert.ok(search[slug], `${file}: missing from search index`)
  assert.ok(html.includes("Research-use disclaimer"), `${file}: missing disclaimer link`)
  assert.ok(html.includes('lang="zh-CN"'), `${file}: missing link to the Chinese edition`)
  assert.ok(
    !html.includes("item under this folder"),
    `${file}: storage-folder count must not replace reading classification`,
  )
  const fm = frontmatterOf(file)
  if (fm.researchScope) {
    const heading =
      fm.researchScope === "safety"
        ? "Research-use disclaimer — Not operational guidance"
        : "Research-use disclaimer — No investment or trading advice"
    assert.ok(html.includes(heading), `${file}: missing research-use notice`)
    const articleStart = html.indexOf("<article")
    const noticePosition = html.indexOf(heading, articleStart)
    assert.ok(
      noticePosition >= articleStart && noticePosition < html.indexOf("</article>", articleStart),
      `${file}: notice must be in article content`,
    )
  }
}
console.log(
  `Verified ${files.length} built English pages, publication layout, copyright, search entries and research-use notices.`,
)

// The reading structure mirrors the Chinese edition: every article has one
// primary location, and a page that is not translated yet keeps its place in
// the outline and opens on the Chinese site instead of disappearing.
const readingMap = JSON.parse(fs.readFileSync("quartz/reading-map.json", "utf8"))
const release = JSON.parse(fs.readFileSync("quartz/site-release.json", "utf8"))
const pending = new Set(JSON.parse(fs.readFileSync("sync/pending.json", "utf8")))
const englishArticles = new Set(
  files
    .filter((file) => frontmatterOf(file).kind === "article")
    .map((file) => file.replaceAll(path.sep, "/").replace(/\.md$/, "")),
)

for (const slug of englishArticles) {
  assert.ok(readingMap.articles[slug], `${slug}: missing a primary reading location`)
}
for (const slug of Object.keys(readingMap.articles)) {
  assert.ok(
    englishArticles.has(slug) || pending.has(`content/${slug}.md`),
    `${slug}: reading entry has neither an English page nor a pending translation`,
  )
}
const primaryOccurrences = new Map()
for (const section of readingMap.sections) {
  assert.ok(search[section.slug], `${section.slug}: missing reading overview`)
  const overview = fs.readFileSync(`public/${section.slug}.html`, "utf8")
  for (const group of section.groups) {
    assert.ok(
      overview.includes(`id="${group.id}"`),
      `${section.slug}: missing group anchor ${group.id}`,
    )
    for (const slug of group.slugs) {
      assert.ok(readingMap.articles[slug], `${slug}: reading link must have a reading entry`)
      const reading = readingMap.articles[slug]
      if (reading.section === section.id && reading.group === group.id) {
        primaryOccurrences.set(slug, (primaryOccurrences.get(slug) ?? 0) + 1)
      }
    }
  }
}
for (const slug of Object.keys(readingMap.articles)) {
  assert.equal(primaryOccurrences.get(slug), 1, `${slug}: expected one primary location`)
  for (const target of readingMap.articles[slug].readings) {
    assert.ok(readingMap.articles[target], `${slug}: invalid prerequisite ${target}`)
  }
}
for (const slug of englishArticles) {
  const html = fs.readFileSync(`public/${slug}.html`, "utf8")
  assert.ok(
    html.includes('aria-label="Article reading context"'),
    `${slug}: missing reading context`,
  )
}
for (const file of files) {
  const html = fs.readFileSync(path.join("public", file.replace(/\.md$/, ".html")), "utf8")
  assert.ok(html.includes('aria-label="Reading outline"'), `${file}: missing reading outline`)
  assert.ok(html.includes(`Site v${release.version}`), `${file}: incorrect site release`)
}
assert.match(release.version, /^\d+\.\d+\.\d+$/)
assert.ok(
  fs
    .readFileSync("public/updates.html", "utf8")
    .includes(`id="v${release.version.replaceAll(".", "-")}"`),
  "release must have a public update record",
)
console.log(
  `Verified reading coverage for ${englishArticles.size} English articles, ${Object.keys(readingMap.articles).length} mapped articles and site release v${release.version}.`,
)
