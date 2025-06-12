import { render, screen } from '@testing-library/react'

jest.mock('next-intl/server', () => ({
  getTranslations: async () => (key: string) => {
const dict: Record<string, string> = {
      projects: '프로젝트 수',
      stacks: '사용 기술 수',
      representative: '대표 기술',
      stars: 'GitHub Stars',
      errorValue: '조회 실패',
      error: 'GitHub 정보를 불러오지 못했습니다.',
    }
    return dict[key]
  },
}))

jest.mock('@/lib/projects', () => ({
  __esModule: true,
  getProjects: jest.fn().mockResolvedValue([
    {
      id: 'p1',
      title: 'proj',
      description: 'desc',
      image: '/img.png',
      stack: ['React'],
      slug: 'proj',
      year: 2024,
      contribution: 100,
      features: [],
      learnings: [],
    },
  ]),
}))

jest.mock('@/lib/projects', () => ({
  __esModule: true,
  getProjects: jest.fn().mockResolvedValue([
    {
      id: 'p1',
      title: 'proj',
      description: 'desc',
      image: '/img.png',
      stack: ['React'],
      slug: 'proj',
      year: 2024,
      contribution: 100,
      features: [],
      learnings: [],
    },
  ]),
}))

beforeEach(() => {
  jest.resetModules()
  jest.resetAllMocks()
  process.env.EMAILJS_SERVICE_ID = 'svc'
  process.env.EMAILJS_TEMPLATE_ID = 'tpl'
  process.env.EMAILJS_USER_ID = 'key'
})

test('shows github stars on success', async () => {
  global.fetch = jest
    .fn()
    .mockResolvedValueOnce({ ok: true, json: async () => ({ followers: 1 }) })
    .mockResolvedValueOnce({ ok: true, json: async () => [{ stargazers_count: 5 }] })
  const { StatsSection } = require('../StatsSection')
  render(await StatsSection())
  expect(await screen.findByText('GitHub Stars')).toBeInTheDocument()
  expect(screen.getByText('5')).toBeInTheDocument()
})

test('shows fallback message on github failure', async () => {
  global.fetch = jest.fn().mockRejectedValue(new Error('fail'))
  const { StatsSection } = require('../StatsSection')
  render(await StatsSection())
  expect(await screen.findByText('조회 실패')).toBeInTheDocument()
  expect(screen.getByText('GitHub 정보를 불러오지 못했습니다.')).toBeInTheDocument()
})
