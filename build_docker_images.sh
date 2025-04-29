#!/bin/bash

echo "Starting to build the docker images..."

echo "building swarmstack-cloud-auth:latest..."
docker build -f auth/Dockerfile -t swarmstack-cloud-auth:latest auth/
echo "swarmstack-cloud-auth:latest DONE"

echo "building swarmstack-cloud-backend:latest..."
docker build -f backend/Dockerfile -t swarmstack-cloud-backend:latest backend/
echo "swarmstack-cloud-backend:latest DONE"

echo "building swarmstack-cloud-frontend:latest..."
docker build -f frontend/Dockerfile -t swarmstack-cloud-frontend:latest frontend/
echo "swarmstack-cloud-frontend:latest DONE"

echo "building swarmstack-cloud-ai-microservice:latest..."
docker build -f ai-microservice/Dockerfile -t swarmstack-cloud-ai-microservice:latest ai-microservice/
echo "swarmstack-cloud-ai-microservice:latest DONE"

echo "All docker images built successfully!"
