FROM node:14.18.1

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN npm install yarn
RUN yarn install

EXPOSE 3000
