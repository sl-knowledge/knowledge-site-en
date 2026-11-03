// Fetch the published aggregate only. Tracking remains the Umami tracker's job.
type PublicPageviews = { pageviews: number; updatedAt: string }
let pageviewsCache: PublicPageviews | undefined
let pageviewsFetchedAt = 0
let pageviewsPending: Promise<PublicPageviews> | undefined

async function loadPageviews(url: string): Promise<PublicPageviews> {
  if (pageviewsCache && Date.now() - pageviewsFetchedAt < 5 * 60_000) return pageviewsCache
  if (pageviewsPending) return pageviewsPending
  pageviewsPending = (async () => {
    // The site and its JSON snapshot deploy separately from this tab's lifetime.
    // Bypass both browser and edge caches; keep the five-minute SPA memory cache.
    const requestUrl = new URL(url)
    requestUrl.searchParams.set("snapshot", String(Date.now()))
    const response = await fetch(requestUrl.href, {
      cache: "no-store",
      credentials: "omit",
      signal: AbortSignal.timeout(8000),
    })
    if (!response.ok) throw new Error("Pageviews unavailable")
    const data = await response.json()
    if (
      !Number.isSafeInteger(data.pageviews) ||
      data.pageviews < 0 ||
      typeof data.updatedAt !== "string" ||
      !Number.isFinite(Date.parse(data.updatedAt))
    ) {
      throw new Error("Invalid pageviews")
    }
    pageviewsCache = { pageviews: data.pageviews, updatedAt: data.updatedAt }
    pageviewsFetchedAt = Date.now()
    return pageviewsCache
  })()
  try {
    return await pageviewsPending
  } finally {
    pageviewsPending = undefined
  }
}

const formatCount = (value: number) => new Intl.NumberFormat("en-US").format(value)
const formatTime = (value: string) => new Date(value).toLocaleString("en-US")

// Modules run once; this handler intentionally lasts across Quartz SPA navigation.
document.addEventListener("nav", async () => {
  const footer = document.querySelector<HTMLElement>("[data-pageviews-url]")
  const count = footer?.querySelector<HTMLElement>("[data-pageviews-count]")
  if (!footer || !count) return
  try {
    const data = await loadPageviews(new URL(footer.dataset.pageviewsUrl!, document.baseURI).href)
    count.textContent = formatCount(data.pageviews)
    footer.title = `Umami page views, counted since 2026-11-01; updated ${formatTime(data.updatedAt)}. Refreshed about every hour, and the published statistics are authoritative.`
  } catch {
    if (pageviewsCache) {
      count.textContent = formatCount(pageviewsCache.pageviews)
      footer.title = `Most recent available figure, updated ${formatTime(pageviewsCache.updatedAt)}`
    } else {
      count.textContent = "Unavailable"
      footer.title = "The statistics cannot be read right now. Please try again later."
    }
  }
})
