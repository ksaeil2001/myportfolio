import { getEmailJsEnv, validateEmailJsEnv } from '../env';

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

  it('throws when required variables are missing', () => {
    delete process.env.EMAILJS_SERVICE_ID;
    delete process.env.EMAILJS_TEMPLATE_ID;
    delete process.env.EMAILJS_USER_ID;
    expect(() => validateEmailJsEnv()).toThrow(
      'Missing EmailJS environment variables: EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID',
    );
  });

  it('does not throw when all variables exist', () => {
    process.env.EMAILJS_SERVICE_ID = 'svc';
    process.env.EMAILJS_TEMPLATE_ID = 'tpl';
    process.env.EMAILJS_USER_ID = 'uid';
    expect(() => validateEmailJsEnv()).not.toThrow();
  });
});
