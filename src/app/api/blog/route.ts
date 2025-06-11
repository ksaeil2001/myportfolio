import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

export const dynamic = 'force-dynamic'

const parser = new Parser()

export async function GET() {
  const feedUrl = process.env.BLOG_RSS_URL || 'https://hnrss.org/frontpage'
  try {
    const feed = await parser.parseURL(feedUrl)
    const items = feed.items?.slice(0, 5).map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
    })) || []
    return NextResponse.json({ items })
  } catch {
    return NextResponse.json({ items: [], error: 'Failed to load RSS' }, { status: 500 })
  }
}
