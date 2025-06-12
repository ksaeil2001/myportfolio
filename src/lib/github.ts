import { getGithubToken } from './env'

export type GithubStats = {
  followers: number
  stars: number
  error: boolean
}

export async function getGithubStats(repoCount = 5): Promise<GithubStats> {
  try {
    const token = getGithubToken()
    const userHeaders: Record<string, string> = {
      Accept: 'application/vnd.github+json',
    }
    if (token) {
      userHeaders['Authorization'] = `token ${token}`
    }
    const res = await fetch('https://api.github.com/users/ksaeil2001', {
      headers: userHeaders,
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error('Failed to fetch GitHub data')
    const data = await res.json()

    const repoHeaders: Record<string, string> = {}
    if (token) {
      repoHeaders['Authorization'] = `token ${token}`
    }
    const repoRes = await fetch(
      `https://api.github.com/users/ksaeil2001/repos?per_page=${repoCount}`,
      Object.keys(repoHeaders).length
        ? { headers: repoHeaders, next: { revalidate: 3600 } }
        : { next: { revalidate: 3600 } },
    )
    if (!repoRes.ok) throw new Error('Failed to fetch repo list')
    const repos: { stargazers_count?: number }[] = await repoRes.json()
    const totalStars = repos.reduce(
      (sum, repo) => sum + (repo.stargazers_count ?? 0),
      0,
    )

    return {
      followers: data.followers as number,
      stars: totalStars,
      error: false,
    }
  } catch {
    return {
      followers: 0,
      stars: 0,
      error: true,
    }
  }
}
