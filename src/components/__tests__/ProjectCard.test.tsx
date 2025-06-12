/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => <img alt="" {...props} />,
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
