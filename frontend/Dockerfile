FROM node:18-alpine

WORKDIR /app

ARG ENV_MODE
ENV ENV_MODE=$ENV_MODE

COPY package*.json ./
RUN npm install

COPY . .

RUN if [ "$ENV_MODE" = "prod" ]; then cp .env.production .env; else cp .env.local .env; fi

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
