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

  it('falls back to defaults and warns when variables are missing', () => {
    delete process.env.EMAILJS_SERVICE_ID;
    delete process.env.EMAILJS_TEMPLATE_ID;
    delete process.env.EMAILJS_USER_ID;
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(getEmailJsEnv()).toEqual({
      serviceId: 'default_service_id',
      templateId: 'default_template_id',
      userId: 'default_user_id',
    });
    expect(warn).toHaveBeenCalledWith(
      'Missing EmailJS environment variables. Using default values.'
    );
  });
});
