import { render, screen, waitFor } from '@testing-library/react';
import ResumeDownloadLink from '../ResumeDownloadLink';

jest.mock('../Providers', () => ({
  useToast: () => ({ show: jest.fn() }),
}));

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const dict: Record<string, string> = {
      unavailable: '이력서 준비 중입니다',
      toast: '이력서 다운로드가 시작되었습니다.',
    }
    return dict[key]
  },
}));

describe('ResumeDownloadLink', () => {
  it('renders download link when resume exists', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true });
    render(<ResumeDownloadLink>이력서 다운로드</ResumeDownloadLink>);
    await waitFor(() => expect(screen.getByRole('link')).toBeInTheDocument());
  });

  it('shows placeholder when resume missing', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false });
    render(<ResumeDownloadLink>이력서 다운로드</ResumeDownloadLink>);
    await waitFor(() =>
      expect(screen.getByText('이력서 준비 중입니다')).toBeInTheDocument(),
    );
  });
});
