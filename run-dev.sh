#!/bin/bash

# Criar rede
docker network create minha-rede || echo "Rede já existe"

# Subir MongoDB
docker run -d \
  --name mongo_db \
  --network minha-rede \
  -p 27017:27017 \
  -v mongo_data:/data/db \
  mongo:latest

# Subir app com volume pro código e hot reload com nodemon
docker build -t minha-app-node .

docker run -d \
  --name app_node \
  --network minha-rede \
  -p 3000:3000 \
  -v $(pwd):/src \
  -e MONGO_URL=mongodb://mongo_db:27017/saveAddress \
  minha-app-node
