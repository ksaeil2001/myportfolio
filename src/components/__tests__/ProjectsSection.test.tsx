import { render, screen } from '@testing-library/react'
import { ProjectsSection } from '../ProjectsSection'
import type { ComponentProps } from 'react'

jest.mock('next-intl/server', () => ({
  getTranslations: async () => (key: string) => ({ heading: '프로젝트 모음' }[key]),
}))

type MockProps = ComponentProps<'img'>

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: MockProps) => <img alt="" {...props} />,
}))

jest.mock('next-intl/server', () => ({
  getTranslations: async () => (key: string) => ({ heading: '프로젝트 모음' }[key]),
}))

jest.mock('@/lib/projects', () => ({
  __esModule: true,
  getProjects: jest.fn().mockResolvedValue([
    {
      id: 'p1',
      title: 'proj1',
      description: 'desc',
      image: 'img.png',
      stack: ['React'],
      slug: 'proj1',
      year: 2024,
      contribution: 100,
      features: [],
      learnings: [],
    },
  ]),
}))

test('renders project cards', async () => {
  render(await ProjectsSection())
  expect(await screen.findByRole('heading', { name: '프로젝트 모음' })).toBeInTheDocument()
  expect(screen.getByText('proj1')).toBeInTheDocument()
})
