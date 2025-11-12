FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install 
RUN npm cache clean --force


COPY . .

EXPOSE 8000

CMD ["npm", "start"]
