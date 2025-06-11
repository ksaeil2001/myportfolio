'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

type Post = {
  title: string
  link: string
  pubDate?: string
}

export function BlogSection() {
  const { data, error } = useSWR<{ items: Post[] }>( '/api/blog', fetcher)

  if (error) {
    return <p className="mt-4 text-red-500">블로그 글을 불러오지 못했습니다.</p>
  }
  const posts = data?.items ?? []
  return (
    <section className="w-full mt-12" aria-labelledby="blog-heading">
      <h2 id="blog-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        최신 글
      </h2>
      {posts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">게시글이 없습니다.</p>
      ) : (
        <ul className="space-y-2">
          {posts.map((post, i) => (
            <li key={i} className="rounded-md p-4 bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 transition">
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                {post.title}
              </a>
              {post.pubDate && (
                <span className="block text-xs text-gray-400 mt-1">{post.pubDate}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
