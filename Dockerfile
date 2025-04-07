# Frontend Build
FROM node:20-alpine as build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Final Stage
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Nginx server automatski startuje kada se kontejner pokrene
CMD ["nginx", "-g", "daemon off;"]

