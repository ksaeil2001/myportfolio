export default function getRequestConfig({ locale } = { locale: 'ko' }) {
  return {
    locale: locale || 'ko',
    messages: require(`./src/dictionaries/${locale || 'ko'}.json`),
  };
}
