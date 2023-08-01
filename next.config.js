/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    env:{
      TEST_VAR: process.env.TEST_VAR
    }
}

module.exports = nextConfig
