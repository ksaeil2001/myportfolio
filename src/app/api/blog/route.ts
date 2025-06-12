import { NextResponse } from 'next/server'
import Parser from 'rss-parser'
import { getBlogRssUrl } from '@/lib/env'

export const dynamic = 'force-dynamic'

const parser = new Parser()
const CACHE_DURATION = 10 * 60 * 1000 // 10 minutes
let cache: { data: unknown; timestamp: number } | null = null

export async function GET() {
  const feedUrl = getBlogRssUrl() || 'https://hnrss.org/frontpage'

  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data)
  }

  try {
    const feed = await parser.parseURL(feedUrl)
    const items =
      feed.items?.slice(0, 5).map((item) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
      })) || []
    cache = { data: { items }, timestamp: Date.now() }
    return NextResponse.json({ items })
  } catch (err) {
    const message = (err as Error).message
    const errorBody = { items: [], error: 'Feed fetch failed', detail: message }
    return NextResponse.json(errorBody, { status: 502 })
  }
}
