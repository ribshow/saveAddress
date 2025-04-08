FROM node:latest
WORKDIR /src
COPY package*.json ./
RUN npm install -g nodemon && npm install
COPY . .
EXPOSE 3000
CMD ["nodemon", "./src/index.js"]