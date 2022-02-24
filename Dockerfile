FROM node:alpine

WORKDIR /usr/app

COPY package.json tsconfig.json yarn.lock .gitignore ./
COPY /src /public ./

RUN yarn
CMD [ "yarn", "start" ]

EXPOSE 3000