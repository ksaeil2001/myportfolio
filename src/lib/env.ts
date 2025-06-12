function validate() {
  const {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    NEXT_PUBLIC_GA_ID,
    BLOG_RSS_URL,
    GITHUB_TOKEN,
  } = process.env

  if (!NEXT_PUBLIC_EMAILJS_SERVICE_ID || !NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
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
    emailJsServiceId: NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    emailJsTemplateId: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    emailJsPublicKey: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    googleAnalyticsId: NEXT_PUBLIC_GA_ID,
    blogRssUrl: BLOG_RSS_URL,
    githubToken: GITHUB_TOKEN,
  }
}

export function getEnv() {
  return validate()
}
