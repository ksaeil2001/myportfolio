import { render, screen, fireEvent } from '@testing-library/react'
import { ProjectFilterBar } from '../ProjectFilterBar'

let search = ''
const push = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
  useSearchParams: () => new URLSearchParams(search),
}))

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const dict: Record<string, string> = {
      stack: '기술 스택 필터',
      year: '연도',
      contribution: '기여도',
      sort: '정렬',
      all: '전체',
      latest: '최신순',
      oldest: '오래된순',
      name: '이름순',
      contributionSort: '기여도순',
      usage: '사용 빈도순',
      reset: '초기화',
    }
    return dict[key]
  },
}))

describe('ProjectFilterBar', () => {
  beforeEach(() => {
    search = ''
    push.mockClear()
  })

  it('renders with selected params', () => {
    search = 'stack=React&year=2024'
    render(<ProjectFilterBar stacks={['React']} years={[2024]} />)
    expect((screen.getByLabelText('React') as HTMLInputElement).checked).toBe(true)
    expect((screen.getByLabelText('연도') as HTMLSelectElement).value).toBe('2024')
  })

  it('updates stack on toggle', () => {
    search = ''
    render(<ProjectFilterBar stacks={['React']} years={[2024]} />)
    fireEvent.click(screen.getByLabelText('React'))
    expect(push).toHaveBeenCalledWith('?stack=React')
  })

  it('updates year on select', () => {
    render(<ProjectFilterBar stacks={['React']} years={[2024]} />)
    fireEvent.change(screen.getByLabelText('연도'), { target: { value: '2024' } })
    expect(push).toHaveBeenCalledWith('?year=2024')
  })

  it('resets filters', () => {
    render(<ProjectFilterBar stacks={['React']} years={[2024]} />)
    fireEvent.click(screen.getByRole('button', { name: '초기화' }))
    expect(push).toHaveBeenCalledWith('/projects')
  })
})
