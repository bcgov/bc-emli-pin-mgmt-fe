/** @type {import('next').NextConfig} */

const nextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,
    output: 'standalone',
    env: {
        BE_APP_URL: process.env.BE_APP_URL,
        NEXT_PUBLIC_BE_APP_URL: process.env.NEXT_PUBLIC_BE_APP_URL,
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: `script-src 'self' 'unsafe-eval' 'unsafe-inline'`,
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: '',
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
