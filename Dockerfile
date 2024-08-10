FROM node:lts-buster

RUN apk update && \
  apk add --no-cache \
  git \
  ffmpeg \
  imagemagick \
  libwebp-tools && \
  rm -rf /var/cache/apk/*

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
