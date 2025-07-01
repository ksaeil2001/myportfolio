import { getGithubStats } from '../github'

describe('getGithubStats', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('uses default repo count when not provided', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ followers: 1 }) })
      .mockResolvedValueOnce({ ok: true, json: async () => [] })

    await getGithubStats()

    expect(global.fetch).toHaveBeenNthCalledWith(
      2,
      'https://api.github.com/users/ksaeil2001/repos?per_page=5',
      expect.anything(),
    )
  })

  it('fetches specified number of repos', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ followers: 1 }) })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [
          { stargazers_count: 2 },
          { stargazers_count: 3 },
        ],
      })

    const stats = await getGithubStats(2)

    expect(global.fetch).toHaveBeenNthCalledWith(
      2,
      'https://api.github.com/users/ksaeil2001/repos?per_page=2',
      expect.anything(),
    )
    expect(stats).toEqual({ followers: 1, stars: 5, error: false })
  })
})
