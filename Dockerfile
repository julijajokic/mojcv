# Stage 1: Build the frontend
FROM node:20-alpine as build

WORKDIR /app

# Kopiraj sve fajlove u radni direktorijum
COPY . .

# Instaliraj zavisnosti i izgradi frontend
RUN npm install
RUN npm run build

# Stage 2: Setup Nginx
FROM nginx:alpine

# Kopiraj izgrađene fajlove iz build faze u Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Kopiraj custom Nginx konfiguraciju (default.conf) u Nginx
COPY nginx/default.conf /etc/nginx/conf.d/

# Nginx server automatski startuje kada se kontejner pokrene
CMD ["nginx", "-g", "daemon off;"]




