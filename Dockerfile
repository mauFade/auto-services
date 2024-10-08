FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run test

RUN npm run build

EXPOSE 33333

CMD ["npm", "start"]