import { render, screen } from '@testing-library/react'
import { BlogSection } from '../BlogSection'
import useSWR from 'swr'

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const dict: Record<string, string> = {
      heading: '최신 글',
      empty: '게시글이 없습니다.',
      error: '블로그 글을 불러오지 못했습니다.'
    }
    return dict[key]
  },
}))

jest.mock('swr', () => jest.fn())

const mockedUseSWR = useSWR as jest.Mock

describe('BlogSection', () => {
  it('renders posts when data loaded', () => {
    mockedUseSWR.mockReturnValue({ data: { items: [{ title: 'post', link: '/p' }] }, error: undefined, isLoading: false })
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: '최신 글' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'post' })).toHaveAttribute('href', '/p')
  })

  it('shows empty message when no posts', () => {
    mockedUseSWR.mockReturnValue({ data: { items: [] }, error: undefined, isLoading: false })
    render(<BlogSection />)
    expect(screen.getByText('게시글이 없습니다.')).toBeInTheDocument()
  })

  it('shows error message', () => {
    mockedUseSWR.mockReturnValue({ data: undefined, error: new Error('fail'), isLoading: false })
    render(<BlogSection />)
    expect(screen.getByText('블로그 글을 불러오지 못했습니다.')).toBeInTheDocument()
  })

  it('shows loading placeholder', () => {
    mockedUseSWR.mockReturnValue({ data: undefined, error: undefined, isLoading: true })
    render(<BlogSection />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
