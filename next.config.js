/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    env: {
        NEXT_PUBLIC_BE_APP_URL: process.env.NEXT_PUBLIC_BE_APP_URL,
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    }
}

module.exports = nextConfig
