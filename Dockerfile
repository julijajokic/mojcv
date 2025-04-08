FROM node:20-alpine as build

WORKDIR /app

# Kopiraj sve fajlove u radni direktorijum
COPY . .

# Instaliraj zavisnosti i izgradi frontend
RUN npm install
RUN npm run build

# Final Stage: Nginx sa podrazumevanom konfiguracijom
FROM nginx:alpine

# Kopiraj izgrađene fajlove u Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Nginx server automatski startuje kada se kontejner pokrene
CMD ["nginx", "-g", "daemon off;"]


