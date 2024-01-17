/** @type {import('next').NextConfig} */

const nextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,
    output: 'standalone',
    env: {
        ENV: process.env.ENV,
        NEXT_PUBLIC_BE_APP_URL: process.env.NEXT_PUBLIC_BE_APP_URL,
    },
    publicRuntimeConfig: {
      appEnv: process.env.ENV,
      beAppUrl: process.env.NEXT_PUBLIC_BE_APP_URL,
      supportUrl: process.env.NEXT_PUBLIC_SUBMIT_SUPPORT_TICKET_URL
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    // TODO update header with BE url.
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: `defaultSrc ${process.env.NEXT_PUBLIC_BE_APP_URL}`,
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
