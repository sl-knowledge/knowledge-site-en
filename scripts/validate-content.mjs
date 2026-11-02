import fs from "node:fs"
import path from "node:path"
import { parse } from "yaml"

const SOURCE_SITE = "https://sl-knowledge.github.io/knowledge-site"
const problems = []
const files = fs.readdirSync("content", { recursive: true }).filter((f) => f.endsWith(".md"))
const validDate = (value) =>
  typeof value === "string" &&
  /^\d{4}-\d{2}-\d{2}$/.test(value) &&
  !Number.isNaN(Date.parse(value)) &&
  new Date(value).toISOString().slice(0, 10) === value

const exists = (relative) => fs.existsSync(path.join("content", relative))

for (const file of files) {
  const text = fs.readFileSync(path.join("content", file), "utf8")
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!match) {
    problems.push(`${file}: missing YAML frontmatter`)
    continue
  }
  const fm = parse(match[1]) ?? {}
  for (const key of ["title", "description", "author", "version", "created", "updated"]) {
    if (typeof fm[key] !== "string" || !fm[key].trim()) problems.push(`${file}: missing ${key}`)
  }
  if (!/^\d+\.\d+(?:\.\d+)?$/.test(fm.version)) problems.push(`${file}: invalid version`)
  for (const key of ["created", "updated"]) {
    if (!validDate(fm[key])) problems.push(`${file}: invalid ${key} date`)
  }
  if (fm.updated < fm.created) problems.push(`${file}: updated date precedes created date`)

  // Every English page states which Chinese page it translates.
  if (fm.lang !== "en") problems.push(`${file}: set lang: en`)
  if (typeof fm.source !== "string" || !fm.source.trim()) {
    problems.push(`${file}: missing source (path of the Chinese page)`)
  } else {
    const source = fm.source.replaceAll("\\", "/")
    if (!source.endsWith(".md")) problems.push(`${file}: source must end with .md`)
    if (source.startsWith("/") || source.includes(".."))
      problems.push(`${file}: source must be a relative path`)
  }
  if (!validDate(fm.sourceUpdated)) problems.push(`${file}: invalid sourceUpdated date`)
  else if (fm.updated && fm.sourceUpdated > fm.updated) {
    problems.push(`${file}: sourceUpdated is newer than updated`)
  }

  if (fm.researchScope !== undefined && !["safety", "investment"].includes(fm.researchScope)) {
    problems.push(`${file}: invalid researchScope`)
  }
  if (fm.researchScope) {
    const phrase =
      fm.researchScope === "safety"
        ? "not operational guidance"
        : "not investment or trading advice"
    if (!String(fm.description).toLowerCase().includes(phrase)) {
      problems.push(`${file}: description must retain research-use boundary for RSS`)
    }
  }
  if (fm.publish !== true) problems.push(`${file}: set publish: true for an approved public page`)
  if (/\]\((?:file:|[A-Za-z]:[\\/])/.test(text)) problems.push(`${file}: local filesystem link`)

  // Internal links must resolve inside this edition; cross-edition links must
  // point at the Chinese source site so readers are never sent to a dead page.
  const directory = path.dirname(file)
  for (const [, target] of text.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    if (/^(https?:|mailto:|#)/.test(target)) {
      if (target.startsWith(SOURCE_SITE)) {
        const tail = target.slice(SOURCE_SITE.length).replace(/^\//, "")
        // The source site serves extensionless URLs, so a tail with a space,
        // a query, a fragment or a .md suffix is malformed.
        if (tail && (/[\s?#]/.test(tail) || tail.endsWith(".md") || tail.includes("//"))) {
          problems.push(`${file}: cross-edition link looks malformed: ${target}`)
        }
      }
      continue
    }
    if (!target.endsWith(".md")) continue
    const resolved = path.normalize(path.join(directory, target)).replaceAll(path.sep, "/")
    if (!exists(resolved)) problems.push(`${file}: link target does not exist: ${target}`)
  }
}

if (problems.length) {
  console.error(problems.join("\n"))
  process.exit(1)
}
console.log(
  `Validated ${files.length} English pages (author, version, dates, source page, publish flag, links).`,
)
