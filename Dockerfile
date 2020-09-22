FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./


COPY . .

EXPOSE 8010

CMD ["npm","start"]
