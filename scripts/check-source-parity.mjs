import fs from "node:fs"
import path from "node:path"
import { parse } from "yaml"

const REPO = process.env.SOURCE_REPO ?? "sl-knowledge/knowledge-site"
const REF = process.env.SOURCE_REF ?? "main"
const SOURCE_SITE = "https://sl-knowledge.github.io/knowledge-site"
const ENGLISH_SITE = "https://sl-knowledge.github.io/knowledge-site-en"
const RAW = `https://raw.githubusercontent.com/${REPO}/${REF}`
const API = `https://api.github.com/repos/${REPO}/git/trees/${REF}?recursive=1`
const headers = process.env.GITHUB_TOKEN
  ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
  : {}

const errors = []
const warnings = []

const readFrontmatter = (text) => {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!match) return null
  return { frontmatter: parse(match[1]) ?? {}, body: text.slice(match[0].length) }
}

// Repository-relative paths of every Markdown link in a page.
const markdownLinkPaths = (body, directory) => {
  const paths = new Set()
  for (const [, target] of body.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    if (/^(https?:|mailto:|#)/.test(target)) continue
    if (!target.endsWith(".md")) continue
    paths.add(path.posix.normalize(path.posix.join(directory, target)))
  }
  return paths
}

// Repository-relative paths this page points at on the Chinese source site.
const crossSiteLinkPaths = (body, site = SOURCE_SITE) => {
  const paths = new Set()
  const pattern = new RegExp(
    `${site.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/([^)\\s#]+)`,
    "g",
  )
  for (const [, tail] of body.matchAll(pattern)) {
    if (!tail) continue
    let target = tail
    if (target.endsWith("/")) target = `${target}index.md`
    else if (!target.endsWith(".md")) target = `${target}.md`
    paths.add(`content/${target}`)
  }
  return paths
}

async function fetchText(url) {
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(20000) })
  if (!response.ok) throw new Error(`${url} -> HTTP ${response.status}`)
  return response.text()
}

const tree = JSON.parse(await fetchText(API))
const sourceFiles = tree.tree
  .filter(
    (entry) =>
      entry.type === "blob" && entry.path.startsWith("content/") && entry.path.endsWith(".md"),
  )
  .map((entry) => entry.path)

const pendingFile = path.join("sync", "pending.json")
const pending = fs.existsSync(pendingFile) ? JSON.parse(fs.readFileSync(pendingFile, "utf8")) : []
const pendingSet = new Set(pending)

const englishFiles = fs
  .readdirSync("content", { recursive: true })
  .filter((file) => file.endsWith(".md"))
  .map((file) => file.replaceAll(path.sep, "/"))

const translated = new Set()

for (const file of englishFiles) {
  const text = fs.readFileSync(path.join("content", file), "utf8")
  const parsed = readFrontmatter(text)
  if (!parsed) {
    errors.push(`${file}: missing frontmatter`)
    continue
  }
  const { frontmatter, body } = parsed
  const source = String(frontmatter.source ?? "")
  if (source !== file) {
    errors.push(`${file}: source (${source}) must match the mirrored path of this page`)
    continue
  }
  // The Chinese edition keeps its Markdown under content/; the English edition
  // mirrors those paths without the prefix.
  const sourcePath = `content/${source}`
  translated.add(sourcePath)

  let sourceText
  try {
    sourceText = await fetchText(`${RAW}/${sourcePath}`)
  } catch (error) {
    errors.push(`${file}: cannot read source page ${sourcePath} (${error.message})`)
    continue
  }
  const sourceParsed = readFrontmatter(sourceText)
  if (!sourceParsed) {
    errors.push(`${file}: source page ${source} has no frontmatter`)
    continue
  }
  const { frontmatter: sourceFrontmatter, body: sourceBody } = sourceParsed

  if (String(sourceFrontmatter.version) !== String(frontmatter.version)) {
    errors.push(
      `${file}: version ${frontmatter.version} differs from source ${sourceFrontmatter.version}`,
    )
  }
  if (String(sourceFrontmatter.updated) !== String(frontmatter.sourceUpdated)) {
    errors.push(
      `${file}: sourceUpdated ${frontmatter.sourceUpdated} differs from source updated ${sourceFrontmatter.updated}`,
    )
  }
  if ((sourceFrontmatter.researchScope ?? undefined) !== (frontmatter.researchScope ?? undefined)) {
    errors.push(
      `${file}: researchScope ${frontmatter.researchScope ?? "-"} differs from source ${sourceFrontmatter.researchScope ?? "-"}`,
    )
  }
  if ((sourceFrontmatter.kind ?? undefined) !== (frontmatter.kind ?? undefined)) {
    errors.push(
      `${file}: kind ${frontmatter.kind ?? "-"} differs from source ${sourceFrontmatter.kind ?? "-"}`,
    )
  }

  // Link-graph parity: every source link must have a counterpart in the
  // English page, either as an internal link or as a link to the Chinese page.
  const sourceLinks = markdownLinkPaths(sourceBody, path.posix.dirname(sourcePath))
  const englishLinks = markdownLinkPaths(body, path.posix.dirname(sourcePath))
  const englishCrossLinks = new Set([...crossSiteLinkPaths(body), ...crossSiteLinkPaths(body, ENGLISH_SITE)])
  for (const target of sourceLinks) {
    if (!englishLinks.has(target) && !englishCrossLinks.has(target)) {
      errors.push(`${file}: missing counterpart for source link ${target}`)
    }
  }
}

for (const source of sourceFiles) {
  if (translated.has(source)) continue
  if (pendingSet.has(source)) {
    warnings.push(`${source}: not translated yet (listed in sync/pending.json)`)
    continue
  }
  errors.push(`${source}: no English page; add it or list it in sync/pending.json`)
}

// The Chinese site links back to this edition page by page. Its list of
// English pages has to match the pages that exist here, otherwise the switch
// would lead to an address that is not published.
const manifestText = await fetchText(`${RAW}/quartz/english-edition.json`)
const manifest = new Set(JSON.parse(manifestText).pages)
for (const file of englishFiles) {
  const slug = file.replace(/\.md$/, "")
  if (!manifest.has(slug)) {
    errors.push(`${file}: missing from the Chinese site's English-edition list`)
  }
}
for (const slug of manifest) {
  if (!englishFiles.some((file) => file.replace(/\.md$/, "") === slug)) {
    errors.push(`English-edition list names a page that does not exist here: ${slug}`)
  }
}

if (warnings.length) console.warn(warnings.join("\n"))
if (errors.length) {
  console.error(errors.join("\n"))
  process.exit(1)
}
console.log(
  `Checked ${englishFiles.length} English pages against ${REPO}@${REF}: versions, dates, scope, kinds and link graph match.`,
)
