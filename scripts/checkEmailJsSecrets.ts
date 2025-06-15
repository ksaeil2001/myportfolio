import { getEmailJsEnv } from '../src/lib/env'

function checkEmailJsSecrets() {
  const { serviceId, templateId, userId } = getEmailJsEnv()
  const missing: string[] = []

  if (!serviceId || serviceId === 'default_service_id' || serviceId === 'placeholder') {
    missing.push('EMAILJS_SERVICE_ID')
  }
  if (!templateId || templateId === 'default_template_id' || templateId === 'placeholder') {
    missing.push('EMAILJS_TEMPLATE_ID')
  }
  if (!userId || userId === 'default_user_id' || userId === 'placeholder') {
    missing.push('EMAILJS_USER_ID')
  }

  if (missing.length) {
    console.error('EmailJS configuration is incomplete:')
    missing.forEach((name) => {
      console.error(`- ${name}: Not Set`)
    })
    console.error(
      'Add the above secrets in GitHub repository Settings > Secrets and variables > Actions.',
    )
    process.exit(1)
  }

  console.log('All required EmailJS secrets are set.')
}

checkEmailJsSecrets()

