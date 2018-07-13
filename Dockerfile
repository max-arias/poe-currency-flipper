FROM node:8

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000