FROM node:7.7.2-alpine

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .
RUN yarn install --silent

COPY . .