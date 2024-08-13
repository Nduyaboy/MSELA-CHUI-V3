FROM node:20.10.0-alpine3.18

RUN apk update && \
  apk add --no-cache \
  git \
  ffmpeg \
  imagemagick \
  libwebp-tools && \
  rm -rf /var/cache/apk/*

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
