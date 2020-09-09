FROM node:14-alpine

RUN mkdir -p /usr/src/be/app

WORKDIR /usr/src/be/app

COPY package.json .
COPY package-lock.json .
COPY index.js .

RUN npm install

CMD ["npm", "run", "dev"]