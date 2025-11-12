FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install 
RUN npm cache clean --force

COPY . .

EXPOSE 5001

CMD ["npm", "start"]
