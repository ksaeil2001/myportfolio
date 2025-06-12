import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '../ContactForm';
import emailjs from 'emailjs-com';

const startMock = jest.fn();
const doneMock = jest.fn();
const showMock = jest.fn();

jest.mock('../Providers', () => ({
  useToast: () => ({ show: showMock }),
}));

jest.mock('../LoadingProvider', () => ({
  useLoading: () => ({ start: startMock, done: doneMock }),
}));

jest.mock('emailjs-com', () => ({
  send: jest.fn(() =>
    Promise.resolve({
      status: 200,
      text: 'OK',
    })
  ),
}));

beforeEach(() => {
  jest.clearAllMocks();
  process.env.EMAILJS_SERVICE_ID = 'svc';
  process.env.EMAILJS_TEMPLATE_ID = 'tpl';
  process.env.EMAILJS_USER_ID = 'key';
});

describe('ContactForm', () => {
  it('shows validation errors when required fields are missing', async () => {
    render(<ContactForm />);

    fireEvent.submit(screen.getByRole('form', { name: 'Contact Form' }));

    expect(await screen.findByText('이름을 입력해주세요')).toBeInTheDocument();
    expect(screen.getByText('이메일을 입력해주세요')).toBeInTheDocument();
    expect(screen.getByText('메시지를 입력해주세요')).toBeInTheDocument();
    expect(emailjs.send).not.toHaveBeenCalled();
  });

  it('calls emailjs and shows success toast on valid submit', async () => {
    (emailjs.send as jest.Mock).mockResolvedValue({});

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('이름'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText('이메일'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText('메시지'), {
      target: { value: 'Hello' },
    });

    fireEvent.click(screen.getByRole('button', { name: '보내기' }));

    await waitFor(() => expect(emailjs.send).toHaveBeenCalled());
    expect(showMock).toHaveBeenCalledWith('메시지가 전송되었습니다!', 'success');
    expect(startMock).toHaveBeenCalled();
    expect(doneMock).toHaveBeenCalled();
  });

  it('shows error toast when emailjs fails', async () => {
    (emailjs.send as jest.Mock).mockRejectedValue(new Error('Email service error'));

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('이름'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText('이메일'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText('메시지'), {
      target: { value: 'Hello' },
    });

    fireEvent.click(screen.getByRole('button', { name: '보내기' }));

    await waitFor(() => expect(emailjs.send).toHaveBeenCalled());
    expect(showMock).toHaveBeenCalledWith(
      '전송 중 오류가 발생했습니다. 서비스 상태를 확인해주세요.',
      'error'
    );
    expect(startMock).toHaveBeenCalled();
    expect(doneMock).toHaveBeenCalled();
  });

  it('handles emailjs network failure gracefully', async () => {
    (emailjs.send as jest.Mock).mockRejectedValue(new Error('Network Error'));

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('이름'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText('이메일'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText('메시지'), {
      target: { value: 'Hello' },
    });

    fireEvent.click(screen.getByRole('button', { name: '보내기' }));

    await waitFor(() => expect(emailjs.send).toHaveBeenCalled());
    expect(showMock).toHaveBeenCalledWith(
      '전송 중 오류가 발생했습니다. 서비스 상태를 확인해주세요.',
      'error'
    );
    expect(startMock).toHaveBeenCalled();
    expect(doneMock).toHaveBeenCalled();
  });

  it('shows toast when email service env vars are missing', async () => {
    delete process.env.EMAILJS_SERVICE_ID;
    delete process.env.EMAILJS_TEMPLATE_ID;
    delete process.env.EMAILJS_USER_ID;

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('이름'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText('이메일'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText('메시지'), {
      target: { value: 'Hello' },
    });

    fireEvent.click(screen.getByRole('button', { name: '보내기' }));

    await waitFor(() =>
      expect(showMock).toHaveBeenCalledWith(
        'Email service is not configured properly. Please check the environment variables.',
        'error',
      ),
    );
    expect(emailjs.send).not.toHaveBeenCalled();
  });
});
