FROM node:lts-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
CMD npm start

FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/currency-converter /usr/share/nginx/html