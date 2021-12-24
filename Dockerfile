FROM node:16-alpine as base
WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app/packages/common
COPY ./packages/common/package.json /usr/src/app/packages/common/package.json
COPY ./package.json /usr/src/app/package.json

FROM base as portfolio
RUN mkdir -p /usr/src/app/packages/portfolio
COPY ./packages/portfolio/package.json /usr/src/app/packages/portfolio/package.json
RUN yarn
COPY . .

FROM base as backend
RUN mkdir -p /usr/src/app/packages/backend
COPY ./packages/backend/package.json /usr/src/app/packages/backend/package.json
RUN yarn
COPY . .