FROM node:14-alpine

WORKDIR /usr/src/fe/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "start"]