# Base on offical Node.js Alpine image
FROM node:slim as node

# Set working directory
WORKDIR /usr/app

# Copy all files
COPY ./ ./

# Install dependencies
RUN npm install --production

RUN npm rebuild node-sass

# Build app
RUN npm run build

RUN groupadd -g 999 appuser && useradd -r -u 999 -g appuser appuser

USER appuser

CMD ["npm", "start"]

EXPOSE 3000