FROM node:16-alpine as BASE
WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app/packages/backend
RUN mkdir -p /usr/src/app/packages/portfolio
RUN mkdir -p /usr/src/app/packages/common

COPY ./packages/backend/package.json /usr/src/app/packages/backend/package.json
COPY ./packages/portfolio/package.json /usr/src/app/packages/portfolio/package.json
COPY ./packages/common/package.json /usr/src/app/packages/common/package.json
COPY ./package.json /usr/src/app/package.json

RUN yarn
COPY . .
VOLUME [ "/usr/src/app/node_modules" ]