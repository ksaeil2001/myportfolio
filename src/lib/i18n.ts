export async function getDictionary(locale: string) {
  switch (locale) {
    case 'en':
      return (await import('../dictionaries/en.json')).default
    default:
      return (await import('../dictionaries/ko.json')).default
  }
}
