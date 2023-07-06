FROM node:19.8.1-alpine3.17 as base

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

CMD ["yarn", "run", "start"]
