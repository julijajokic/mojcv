# 1. Node.js za React frontend
FROM node:20 AS node_builder

WORKDIR /usr/src/app

# Kopiramo package fajlove i instaliramo zavisnosti
COPY package*.json ./
# RUN npm install --legacy-peer-deps --production
RUN npm install --legacy-peer-deps --production --no-audit --prefer-offline


# Kopiramo ceo frontend kod i gradimo aplikaciju
COPY src/ ./src
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

# Kopiramo composer fajlove i instaliramo zavisnosti
COPY api/composer.json api/composer.lock ./
RUN composer install --no-dev --optimize-autoloader

# --------------------------------------------------------------

# 3. Finalni kontejner za Laravel i React
FROM php:8.2-cli

WORKDIR /usr/src/app

# Kopiramo frontend build
COPY --from=node_builder /usr/src/app/src/build /usr/src/app/src/build

# Kopiramo backend (Laravel)
COPY --from=php_builder /usr/src/app/api /usr/src/app/api

WORKDIR /usr/src/app/api

# Postavljanje permisija za Laravel direktorijume
RUN chmod -R 775 /usr/src/app/api/storage /usr/src/app/api/bootstrap/cache

# Postavljanje permisija za Laravel artisan fajl
RUN chmod +x /usr/src/app/api/artisan

# Pokrećemo Laravel server i React frontend
CMD ["sh", "-c", "php artisan serve --host=0.0.0.0 --port=9000 & npm start"]




