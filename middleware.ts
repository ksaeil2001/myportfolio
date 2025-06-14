import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './next-intl.config.js'

export default createMiddleware({
  locales,
  defaultLocale,
})

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
