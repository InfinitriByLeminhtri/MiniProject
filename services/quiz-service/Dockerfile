FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev
RUN npm cache clean --force

COPY . .

EXPOSE 5001

CMD ["npm", "start"]
