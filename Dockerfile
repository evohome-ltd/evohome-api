FROM node:20-alpine AS build

WORKDIR /build

COPY nest-cli.json package*.json tsconfig*.json ./
RUN npm ci

COPY src ./src
RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY sequelize.config.js package*.json ./
RUN npm install --omit=dev

COPY --from=build /build/dist ./dist
COPY migrations ./migrations

EXPOSE 3000

ENTRYPOINT [ "node", "dist/main.js" ]