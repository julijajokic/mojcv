# Koristimo noviju Node.js sliku
FROM node:20 AS node_builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# --------------------------------------------------------------

# Koristimo noviju PHP sliku
FROM php:8.2-cli AS php_builder

RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Instaliramo Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /usr/src/app
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader

# --------------------------------------------------------------

# Finalni sloj za Laravel aplikaciju
FROM php:8.2-cli

# Instaliramo Composer u finalnom sloju
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Kopiramo Node.js i PHP buildove
COPY --from=node_builder /usr/src/app /usr/src/app
COPY --from=php_builder /usr/src/app/composer.json /usr/src/app/
COPY --from=php_builder /usr/src/app/composer.lock /usr/src/app/

WORKDIR /usr/src/app

# Pokrećemo Composer instalaciju ponovo za siguran setup
RUN composer install --no-dev --optimize-autoloader

# Postavljamo pravo pokretanja Laravel servera
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=${PORT}"]

