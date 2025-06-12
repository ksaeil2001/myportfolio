/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import { HeroSection } from '../HeroSection'

jest.mock('../ResumeDownloadLink', () => ({
  __esModule: true,
  default: (props: any) => <a {...props} href="/resume.pdf" />,
}))

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const dict: Record<string, string> = {
      greeting: 'hello',
      intro: 'intro',
      projects: '프로젝트 보기',
      download: '이력서 다운로드',
    }
    return dict[key]
  },
  useLocale: () => 'ko',
}))

test('renders action links', () => {
  render(<HeroSection />)
  expect(screen.getByRole('link', { name: '프로젝트 목록 보기' })).toHaveAttribute('href', '/projects')
  expect(screen.getByRole('link', { name: '이력서 다운로드' })).toHaveAttribute('href', '/resume.pdf')
})
