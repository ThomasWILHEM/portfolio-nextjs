FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g prisma

COPY . .

RUN prisma generate

RUN npm run build

CMD [ "node", "dist/main.js" ]