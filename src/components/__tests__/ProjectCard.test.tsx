/* eslint-disable @next/next/no-img-element */
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import type { ComponentProps } from 'react'

type MockProps = ComponentProps<'img'> & { fill?: boolean }

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: MockProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, ...rest } = props
    return <img alt="" {...rest} />
  },
}))

const project = {
  title: 'proj',
  description: 'desc',
  image: 'img.png',
  stack: ['React', 'Next.js'],
  slug: 'proj',
}

test('renders project info', () => {
  render(<ProjectCard {...project} />)
  expect(screen.getByRole('group', { name: 'proj' })).toBeInTheDocument()
  expect(screen.getByText('desc')).toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'proj 프로젝트 상세 보기' })).toHaveAttribute('href', '/projects/proj')
})
