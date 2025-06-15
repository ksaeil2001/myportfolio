import { getEmailJsEnv } from '../src/lib/env'

function checkEmailJsSecrets() {
  const { serviceId, templateId, userId } = getEmailJsEnv()
  const variables = [
    { name: 'EMAILJS_SERVICE_ID', value: serviceId },
    { name: 'EMAILJS_TEMPLATE_ID', value: templateId },
    { name: 'EMAILJS_USER_ID', value: userId },
  ]
  const invalid = variables.filter(
    ({ value }) => !value || value === 'placeholder' || value.startsWith('default_'),
  )

  console.log('Checking EmailJS environment variables...')
  variables.forEach(({ name, value }) => {
    const status = !value || value === 'placeholder' || value.startsWith('default_')
      ? 'Not Set'
      : 'OK'
    console.log(`- ${name}: ${status}`)
  })

  if (invalid.length) {
    console.error('\n❌ Missing EmailJS secrets detected.')
    console.error(
      'Please add the above variables via GitHub > Settings > Secrets and variables > Actions.',
    )
    console.error(
      'For detailed instructions, see the "GitHub Actions EmailJS Secret 등록" section in README.md.',
    )
    process.exit(1)
  }

  console.log('All required EmailJS secrets are set.')
}

checkEmailJsSecrets()

