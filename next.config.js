/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    env: {
        BE_APP_URL:
            'https://bc-emli-pin-mgmt-be-c82b4c-dev.apps.silver.devops.gov.bc.ca/',
        NEXT_PUBLIC_BE_APP_URL:
            'https://bc-emli-pin-mgmt-be-c82b4c-dev.apps.silver.devops.gov.bc.ca/',
    },
}

module.exports = nextConfig
