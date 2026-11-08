import { parse } from "yaml"
import { QuartzTransformerPlugin } from "../types"

// Keep the full notice after the article; descriptions retain the boundary in feeds.
export const ResearchNotice: QuartzTransformerPlugin = () => ({
  name: "ResearchNotice",
  textTransform(ctx, src) {
    const match = src.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
    if (!match) return src
    const fm = parse(match[1]) as Record<string, unknown> | null
    const scope = fm?.researchScope
    if (scope !== "safety" && scope !== "investment") return src
    const base = ctx.cfg.configuration.baseUrl?.replace(/\/$/, "")
    const policy = base ? `https://${base}/disclaimer` : "/disclaimer"
    const heading =
      scope === "safety"
        ? "Research-use disclaimer — Not operational guidance"
        : "Research-use disclaimer — No investment or trading advice"
    const text =
      scope === "safety"
        ? "This is research, not a flight manual, emergency checklist, certified design or deployment approval. The proposed arrangements have not been validated by this website for a specific system. These notes must not be used as a basis for changing operations, overriding protections or directly deploying a controller. They do not replace applicable current approved documentation, procedures, qualified training or independent engineering review."
        : "This material discusses research methods, cases and hypotheses. It is not a recommendation to buy, sell or hold, or advice on timing, position size or asset allocation. No personal suitability assessment is provided. Examples, historical results and backtests neither establish executable performance nor guarantee future results. These notes should not be used as a basis for trading."
    const notice = `> **${heading}**\n>\n> ${text} [Full research-use disclaimer](${policy})\n\n`
    const marker = '<a id="research-use-disclaimer"></a>'
    if (src.includes(marker)) return src
    const copyright = /\n(?:---\r?\n(?:\r?\n)*)?© \d{4} SL\. All rights reserved\.\s*$/.exec(src)
    const position = copyright?.index ?? src.trimEnd().length
    return (
      src.slice(0, position).trimEnd() +
      "\n\n---\n\n" + marker + "\n\n" + notice.trimEnd() +
      (copyright ? src.slice(position).trimEnd() : "") + "\n"
    )
  },
})
