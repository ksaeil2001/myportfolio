export function getEmailJsEnv() {
 codex/emailjs-환경-변수-및-ci-개선
  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } = process.env
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) {
    console.warn('Missing EmailJS environment variables. Using default values.')
    return {
      serviceId: EMAILJS_SERVICE_ID || 'default_service_id',
      templateId: EMAILJS_TEMPLATE_ID || 'default_template_id',
      userId: EMAILJS_USER_ID || 'default_user_id',
    }
  }

  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } =
    process.env

 main
  return {
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
    userId: EMAILJS_USER_ID,
  }
}

export function validateEmailJsEnv() {
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
    const message = `Missing EmailJS environment variables: ${missing.join(', ')}`
    if (process.env.NODE_ENV === 'production') {
      throw new Error(message)
    }
    console.warn(message)
  }
}

export function getGoogleAnalyticsId() {
  return process.env.NEXT_PUBLIC_GA_ID
}

export function getGithubToken() {
  return process.env.GITHUB_TOKEN
}

export function getBlogRssUrl() {
  const { BLOG_RSS_URL } = process.env
  if (BLOG_RSS_URL) {
    try {
      new URL(BLOG_RSS_URL)
    } catch {
      throw new Error('BLOG_RSS_URL must be a valid URL')
    }
  }
  return BLOG_RSS_URL
}

export function getContactEmail() {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL
}
