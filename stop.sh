#!/bin/bash

echo "🛑 Parando e removendo containers..."
docker rm -f app_node mongo_db 2>/dev/null

echo "🧼 Removendo imagem da aplicação..."
docker rmi minha-app-node 2>/dev/null

echo "🔌 Removendo rede Docker..."
docker network rm minha-rede 2>/dev/null

echo "🗑️ Removendo volume do MongoDB..."
docker volume rm mongo_data 2>/dev/null

echo "✅ Tudo limpo!"
