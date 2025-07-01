codex/emailjs-환경-변수-및-ci-개선
import { getEmailJsEnv } from '../env';

import { getEmailJsEnv, validateEmailJsEnv } from '../env';
 main

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

 codex/emailjs-환경-변수-및-ci-개선
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

  it('warns but does not throw when variables are missing in development', () => {
    process.env.NODE_ENV = 'development';
    delete process.env.EMAILJS_SERVICE_ID;
    delete process.env.EMAILJS_TEMPLATE_ID;
    delete process.env.EMAILJS_USER_ID;
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(() => validateEmailJsEnv()).not.toThrow();
    expect(spy).toHaveBeenCalledWith(
      'Missing EmailJS environment variables: EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID',
    );
  });

  it('throws when required variables are missing in production', () => {
    process.env.NODE_ENV = 'production';
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
 main
});
