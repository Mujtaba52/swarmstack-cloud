echo "Starting to build the docker images..."

echo "building project-auth:dev..."
docker build -f auth/Dockerfile -t project-auth:dev auth/
echo "project-auth:dev DONE"

echo "building project-backend:dev..."
docker build -f backend/Dockerfile -t project-backend:dev backend/
echo "project-backend:dev DONE"

echo "building project-ui:dev..."
docker build -f frontend/Dockerfile -t project-ui:dev frontend/
echo "project-ui:dev DONE"