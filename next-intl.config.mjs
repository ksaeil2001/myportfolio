import {getRequestConfig} from 'next-intl/server'

export default getRequestConfig(async ({locale, requestLocale}) => {
  const current = locale ?? (await requestLocale);
  return {
    messages: (await import(`./src/dictionaries/${current}.json`)).default,
    locale: current
  };
});

export const locales = ['en', 'ko']
export const defaultLocale = 'en'
