'use client'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import Script from 'next/script'
import { getEnv } from '@/lib/env'

const { googleAnalyticsId: gaId } = getEnv()

export default function Analytics() {
  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}
      <VercelAnalytics />
    </>
  )
}
