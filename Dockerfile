FROM node:8

RUN apt-get update && apt-get install -f -y postgresql-client

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3001