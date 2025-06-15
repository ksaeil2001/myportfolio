import { getEmailJsEnv } from '../src/lib/env'

function checkEmailJsSecrets() {
  const { serviceId, templateId, userId } = getEmailJsEnv()
  const variables = [
    { name: 'EMAILJS_SERVICE_ID', value: serviceId },
    { name: 'EMAILJS_TEMPLATE_ID', value: templateId },
    { name: 'EMAILJS_USER_ID', value: userId },
  ]
  const requiredNames = variables.map((v) => v.name)
  const unknownNames = Object.keys(process.env).filter(
    (key) => key.startsWith('EMAILJS_') && !requiredNames.includes(key),
  )
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

  let hasError = false

  if (unknownNames.length) {
    console.error('\n❌ Unrecognized EmailJS environment variables found:')
    unknownNames.forEach((name) => console.error(`- ${name}`))
    console.error(
      `Please check for typos. Valid names are: ${requiredNames.join(', ')}`,
    )
    hasError = true
  }

  if (invalid.length) {
    console.error('\n❌ Missing EmailJS secrets detected.')
    console.error(
      'Please add the above variables via GitHub > Settings > Secrets and variables > Actions.',
    )
    console.error(
      'For detailed instructions, see the "GitHub Actions EmailJS Secret 등록" section in README.md.',
    )
    hasError = true
  }

  if (hasError) {
    process.exit(1)
  }

  console.log('All required EmailJS secrets are set.')
}

checkEmailJsSecrets()

