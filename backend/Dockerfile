FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
# At the end of Dockerfile
CMD ["sh", "-c", "npx sequelize-cli db:migrate --config src/database/migration.config.js --migrations-path src/database/migrations && npm run start"]

