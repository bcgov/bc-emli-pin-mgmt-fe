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
        locales: ["en"],
        defaultLocale: "en",
    }
}

module.exports = nextConfig
