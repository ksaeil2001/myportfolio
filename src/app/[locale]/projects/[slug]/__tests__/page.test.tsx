/* eslint-disable @next/next/no-img-element */
import { render, screen } from '@testing-library/react'
import Page from '../page'
import type { ComponentProps } from 'react'

type ImgProps = ComponentProps<'img'> & { fill?: boolean }

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: ImgProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, ...rest } = props
    return <img alt="" {...rest} />
  },
}))

jest.mock('@/lib/projects', () => ({
  __esModule: true,
  getProjects: jest.fn().mockResolvedValue([
    {
      id: 'p1',
      title: 'Project One',
      description: 'Desc',
      image: '/img.png',
      stack: ['React'],
      slug: 'proj-one',
      year: 2024,
      contribution: 100,
      features: ['Feat'],
      learnings: [],
      team: [],
      reviews: [],
      contentHtml: '<p>content</p>',
    },
  ]),
}))

jest.mock('next-intl/server', () => ({
  getTranslations: async () => (key: string) => {
    const dict: Record<string, string> = {
      stack: '스택',
      features: '기능',
      team: '팀',
      reviews: '리뷰',
      learnings: '배운 점',
      detail: '상세',
    }
    return dict[key]
  },
}))

jest.mock('next/navigation', () => ({ notFound: jest.fn(() => { throw new Error('not-found') }) }))

const { notFound } = require('next/navigation')

describe('Project detail page', () => {
  it('renders project content', async () => {
    const Comp = await Page({ params: { slug: 'proj-one', locale: 'en' } })
    render(Comp)
    expect(screen.getByRole('heading', { name: 'Project One' })).toBeInTheDocument()
    expect(screen.getByText('Desc')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Feat')).toBeInTheDocument()
  })

  it('calls notFound when slug missing', async () => {
    await expect(
      Page({ params: { slug: 'missing', locale: 'en' } })
    ).rejects.toThrow('not-found')
    expect(notFound).toHaveBeenCalled()
  })
})
