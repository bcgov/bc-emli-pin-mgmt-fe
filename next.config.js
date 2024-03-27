/** @type {import('next').NextConfig} */

const beUrlConfig = {
    "dev": "https://bc-emli-pin-mgmt-be-c82b4c-dev.apps.silver.devops.gov.bc.ca",
    "test": "https://bc-emli-pin-mgmt-be-c82b4c-test.apps.silver.devops.gov.bc.ca",
    "prod": "https://bc-emli-pin-mgmt-prod-be.apps.silver.devops.gov.bc.ca",
    "local": `http://localhost:3000`
}

const beAppUrl = process.env.NEXT_PUBLIC_BE_APP_URL ? process.env.NEXT_PUBLIC_BE_APP_URL : beUrlConfig[process.env.ENV]

const cspHeader = `
    default-src 'self' ${beAppUrl} https://spt.apps.gov.bc.ca/com.snowplowanalytics.snowplow/tp2 https://www2.gov.bc.ca/StaticWebResources/static/sp/sp-2-14-0.js;
    script-src 'self' https://www2.gov.bc.ca/StaticWebResources/static/sp/sp-2-14-0.js;
    style-src 
        'self' 
        'sha256-4/2nIlfwIVTJ1+JcNQ6LkeVWzNS148LKAJeL5yofdN4=' 
        'sha256-ZqhM5xQOj0Og/l+8qEbc5F5YYumTdWvc5mtn7dECFuE=' 
        'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 
        'sha256-Zu5U2F40wDcxVfIBtY+SP2IbJOwC1ta/5Uq3JsvaYNY=' 
        'sha256-4JAwdbk8CZRR8vVoI5p3V/LDSS0gA+7B+Meazv4Uopk='
        'sha256-55Y3zizsMcMtCs2FOvxHGpUFRtqWvAVPUkjp7ojbZQo='
        'sha256-hFPhwedRaYTMw/p6xcARexngg/Vp4+oOJ8ahn45lEq4='
        'sha256-CA/5VUwpAv5y/SNV9KoEl18LysUOtAUFjpgGIAn4mHs='
        'sha256-lkn9xvAhMydsA5e5tTXJIcSz8V+J1UMKO2+jhLePyQ4='
        'sha256-LgvlEOCCNq748yGO9rkqDBRtHYJsziPZMNPetkpBd5Y='
        'sha256-AqEOw23/sIN84+/nd7H9k80W1jwnL3Q5sOguG2++epk='
        'sha256-JdaUryEi33WzF0Lk5kNejO/4QeJz0oHj86OCzgFQI/M='
        'sha256-R8vs52LaQQisYz9TZgVbHwe2/upOuL1dmCXceSCPa20=';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
    frame-src https://c82b4c-tools-metabase.apps.silver.devops.gov.bc.ca/;
`

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
                        value: cspHeader.replace(/\n/g, ''),
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
