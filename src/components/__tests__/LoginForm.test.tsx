import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from '../LoginForm';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const dict: Record<string, string> = {
      title: '로그인',
      email: '이메일',
      password: '비밀번호',
      submit: '로그인',
      emailRequired: '이메일을 입력해주세요',
      passwordRequired: '비밀번호를 입력해주세요',
      success: '로그인되었습니다!'
    };
    return dict[key];
  },
}));

describe('LoginForm', () => {
  it('shows validation errors when fields are empty', () => {
    render(<LoginForm />);
    fireEvent.submit(screen.getByRole('form', { name: '로그인' }));
    expect(screen.getByText('이메일을 입력해주세요')).toBeInTheDocument();
    expect(screen.getByText('비밀번호를 입력해주세요')).toBeInTheDocument();
  });

  it('shows success message on valid submit', () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText('이메일'), {
      target: { value: 'a@example.com' },
    });
    fireEvent.change(screen.getByLabelText('비밀번호'), {
      target: { value: 'secret' },
    });
    fireEvent.click(screen.getByRole('button', { name: '로그인' }));
    expect(screen.getByText('로그인되었습니다!')).toBeInTheDocument();
  });
});
