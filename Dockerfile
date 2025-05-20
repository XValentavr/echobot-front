FROM node:18-alpine AS frontend-builder

WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine AS frontend

COPY --from=frontend-builder /app/frontend/dist /usr/share/nginx/html

RUN mkdir -p /etc/nginx/conf.d

FROM node:18-alpine AS backend

WORKDIR /app/backend

COPY package.json package-lock.json ./
RUN npm ci --production

COPY server.js ./
COPY .env.production ./.env

EXPOSE 8000

CMD ["node", "server.js"]