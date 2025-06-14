import { getEmailJsEnv } from '../env';

describe('getEmailJsEnv', () => {
  const originalEnv = process.env;

  afterEach(() => {
    process.env = { ...originalEnv };
    jest.restoreAllMocks();
  });

  it('returns environment variables when all are set', () => {
    process.env.EMAILJS_SERVICE_ID = 'svc';
    process.env.EMAILJS_TEMPLATE_ID = 'tpl';
    process.env.EMAILJS_USER_ID = 'uid';
    expect(getEmailJsEnv()).toEqual({
      serviceId: 'svc',
      templateId: 'tpl',
      userId: 'uid',
    });
  });

  it('returns undefined values when variables are missing', () => {
    delete process.env.EMAILJS_SERVICE_ID;
    delete process.env.EMAILJS_TEMPLATE_ID;
    delete process.env.EMAILJS_USER_ID;
    expect(getEmailJsEnv()).toEqual({
      serviceId: undefined,
      templateId: undefined,
      userId: undefined,
    });
  });
});
