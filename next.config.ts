import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "images.unsplash.com",
      "cdn.example.com",
    ],
  },
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },
  env: {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/saeil",
        permanent: false,
      },
      {
        source: "/blog",
        destination: "https://blog.saeil.dev",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
