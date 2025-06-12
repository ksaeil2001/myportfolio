function validate() {
  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID,
    NEXT_PUBLIC_GA_ID,
    BLOG_RSS_URL,
    GITHUB_TOKEN,
  } = process.env

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) {
    throw new Error('Missing EmailJS environment variables')
  }

  if (BLOG_RSS_URL) {
    try {
      new URL(BLOG_RSS_URL)
    } catch {
      throw new Error('BLOG_RSS_URL must be a valid URL')
    }
  }
  return {
    emailJsServiceId: EMAILJS_SERVICE_ID,
    emailJsTemplateId: EMAILJS_TEMPLATE_ID,
    emailJsUserId: EMAILJS_USER_ID,
    googleAnalyticsId: NEXT_PUBLIC_GA_ID,
    blogRssUrl: BLOG_RSS_URL,
    githubToken: GITHUB_TOKEN,
  }
}

export function getEnv() {
  return validate()
}
