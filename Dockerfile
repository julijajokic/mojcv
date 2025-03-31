# Koristimo zvaničnu Node.js sliku kao osnovu
FROM node:14 AS node_builder

# Postavljamo radni direktorijum unutar kontejnera
WORKDIR /usr/src/app

# Kopiramo package.json i package-lock.json
COPY package*.json ./

# Instaliramo Node.js zavisnosti
RUN npm install

# Kopiramo ostatak aplikacije
COPY . .

# Aplikacija koristi port 3000
EXPOSE 3000

# Komanda za pokretanje aplikacije
CMD ["npm", "start"]

# --------------------------------------------------------------

# Koristimo zvaničnu PHP sliku kao osnovu
FROM php:8.0-cli AS php_builder

# Instaliramo potrebne pakete za rad sa Composer-om
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Instaliramo Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Postavljamo radni direktorijum za PHP
WORKDIR /usr/src/app

# Kopiramo composer.json i composer.lock
COPY composer*.json ./

# Instaliramo PHP zavisnosti
RUN composer install

# --------------------------------------------------------------

# Spajamo Node.js i PHP buildove
FROM php:8.0-cli

# Kopiramo Node.js build iz prethodnog sloja
COPY --from=node_builder /usr/src/app /usr/src/app

# Postavljamo radni direktorijum
WORKDIR /usr/src/app

# Instaliramo PHP zavisnosti
RUN composer install

# Definišemo komandu za pokretanje aplikacije
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=3000"]
