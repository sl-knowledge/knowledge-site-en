import fs from "node:fs"
import path from "node:path"

// The English edition must render in English. The only Chinese characters the
// site may contain are the deliberate labels of the link back to the Chinese
// edition ("中文"), so anything else means the build picked up another tree.
const ALLOWED = new Set(["中", "文", "版"])

const files = []
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith(".html")) files.push(full)
  }
}
walk("public")

const problems = []
for (const file of files) {
  const html = fs.readFileSync(file, "utf8")
  const matches = html.match(/[\u4e00-\u9fff]/g) ?? []
  const unexpected = matches.filter((char) => !ALLOWED.has(char))
  if (unexpected.length) {
    problems.push(`${file}: unexpected Chinese text (${unexpected.length} characters)`)
  }
  if (!html.includes('lang="zh-CN"') && !html.includes('http-equiv="refresh"')) {
    problems.push(`${file}: missing link to the Chinese edition`)
  }
}

if (problems.length) {
  console.error(problems.join("\n"))
  process.exit(1)
}
console.log(`Verified ${files.length} built pages render in English with the Chinese-edition link.`)
