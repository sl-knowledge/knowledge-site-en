import fs from "node:fs"
import path from "node:path"
import { fromHtml } from "hast-util-from-html"

// Marked linguistic data is not untranslated prose.
const ALLOWED_LABEL = new Set(["中", "文", "版"])
const files = fs.readdirSync("public", { recursive: true })
  .filter(file => file.endsWith(".html")).map(file => path.join("public", file))
const problems = []
let examples = 0
for (const file of files) {
  const html = fs.readFileSync(file, "utf8")
  const tree = fromHtml(html)
  const inspect = (node, linguistic = false) => {
    const props = node.properties ?? {}
    const lang = String(props.lang ?? "")
    const declared = node.type === "element" && node.tagName === "span" &&
      (/^zh(?:-|$)/.test(lang) || (lang === "ja" && "dataLinguisticExample" in props))
    if (declared && !linguistic) {
      const text = n => n.type === "text" ? n.value : (n.children ?? []).map(text).join("")
      if (text(node).length > 300) problems.push(file + ": linguistic example exceeds 300 characters")
      examples++
    }
    const data = linguistic || declared
    if (node.type === "text" && !data) {
      const unexpected = (node.value.match(/[\u4e00-\u9fff]/g) ?? []).filter(char => !ALLOWED_LABEL.has(char))
      if (unexpected.length) problems.push(file + ": untranslated Chinese prose (" + unexpected.length + " characters)")
    }
    for (const child of node.children ?? []) inspect(child, data)
  }
  inspect(tree)
  if (!html.includes('lang="zh-CN"') && !html.includes('http-equiv="refresh"'))
    problems.push(file + ": missing Chinese-edition link")
}
if (problems.length) {
  console.error([...new Set(problems)].join("\n"))
  process.exit(1)
}
console.log("Verified " + files.length + " English HTML pages; " + examples + " marked linguistic examples; no untranslated Chinese prose.")
