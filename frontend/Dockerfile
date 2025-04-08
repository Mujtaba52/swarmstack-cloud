# build stage
FROM node:18-alpine AS build
WORKDIR /app

# Pass in env mode
ARG ENV_MODE
ENV ENV_MODE=$ENV_MODE

COPY package*.json ./
RUN npm install
COPY . .

# Conditionally copy the correct .env file
RUN if [ "$ENV_MODE" = "prod" ]; then cp .env.production .env; else cp .env.local .env; fi

RUN npm run build

# serve via nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
