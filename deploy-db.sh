#!/bin/bash
docker compose -f ./docker/docker-compose-pg.yaml up -d

# Wait for the database to be ready
echo "Waiting for Postgres to be ready..."
until docker exec postgres pg_isready -U postgres; do
  sleep 2
done

# Run Prisma migration
npx prisma migrate deploy

# Seed the database
npm run prisma:seed