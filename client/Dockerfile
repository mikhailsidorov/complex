FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.cfg /etc/nginx/conf.d/default.cfg
COPY --from=builder /app/build /usr/share/nginx/html
