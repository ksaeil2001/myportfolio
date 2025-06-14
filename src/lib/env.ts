export function getEmailJsEnv() {
  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } =
    process.env

  return {
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
    userId: EMAILJS_USER_ID,
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
