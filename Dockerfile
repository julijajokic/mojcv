# 1. Node.js za React frontend
FROM node:20 AS node_builder

WORKDIR /usr/src/app

# Kopiramo package fajlove i instaliramo zavisnosti
COPY /package.json /package-lock.json ./
RUN npm install --legacy-peer-deps --omit=dev

# Kopiramo ceo frontend kod i gradimo aplikaciju
COPY src ./src
RUN npm run build

# --------------------------------------------------------------

# 2. PHP za Laravel backend
FROM php:8.2-cli AS php_builder

# Instaliramo potrebne pakete
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    && rm -rf /var/lib/apt/lists/*

# Instaliramo Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /usr/src/app/api

# 🚀 **Kopiramo ceo Laravel API folder**
COPY api/ ./

# 🚀 **Izvodimo Composer install KAD API FAJLOVI POSTOJE**
RUN composer install --no-dev --optimize-autoloader

# --------------------------------------------------------------

# 3. Finalni kontejner za Laravel i React
FROM php:8.2-cli

# Instalacija Node.js unutar PHP kontejnera
RUN apt-get update && apt-get install -y nodejs npm

WORKDIR /usr/src/app

# Kopiramo backend (Laravel)
COPY --from=php_builder /usr/src/app/api /usr/src/app/api

# Kopiramo frontend build u Laravel `public/`
COPY --from=node_builder /usr/src/app/src/build /usr/src/app/api/public

WORKDIR /usr/src/app/api

# Postavljanje permisija za Laravel direktorijume
RUN chmod -R 775 storage bootstrap/cache

# Postavljanje permisija za Laravel artisan fajl
RUN chmod +x artisan

# 🚀 **Pokrećemo Laravel server**
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=9000"]






