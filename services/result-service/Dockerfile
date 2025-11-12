FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev
RUN npm cache clean --force

COPY . .

EXPOSE 5002

CMD ["npm", "start"]
