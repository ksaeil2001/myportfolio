import { validateEmailJsEnv } from '../src/lib/env'

try {
  validateEmailJsEnv()
  console.log('EmailJS secrets are set.')
} catch (err) {
  console.error((err as Error).message)
  console.error(
    'Add EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID to GitHub Secrets.',
  )
  process.exit(1)
}
