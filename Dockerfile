# adapted from https://github.com/vercel/next.js/tree/canary/examples/with-docker
# needs next.config.js to set build to stand-alone with context as follows
# /** @type {import('next').NextConfig} */
# module.exports = {
#  output: 'standalone',
# }

# Recommended to have .dockerignore file with the following content
# Dockerfile
# .dockerignore
# node_modules
# npm-debug.log
# README.md
# .next
# .git
# ----------------------------------------------------------
# Install dependencies only when needed
FROM registry.access.redhat.com/ubi8/nodejs-16 AS deps
USER 0
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm install --production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/public ./public

COPY --from=builder --chown=1001:1001 /app/.next/standalone ./
COPY --from=builder --chown=1001:1001 /app/.next/static ./.next/static


USER 1001

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]