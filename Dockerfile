FROM node:18-alpine

WORKDIR /app


COPY package*.json ./

# RUN npm i
RUN yarn install

COPY . .

EXPOSE 33333

# CMD ["npm", "run", "dev"]
CMD ["yarn", "dev"]