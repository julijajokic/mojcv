# Koristimo zvaničnu Node.js sliku kao osnovu
FROM node:14 AS node_builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g npm@latest
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# --------------------------------------------------------------

# Koristimo zvaničnu PHP sliku kao osnovu
FROM php:8.0-cli AS php_builder

RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /usr/src/app
COPY composer*.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader

# --------------------------------------------------------------

# Finalni sloj
FROM php:8.0-cli

# Instaliramo Composer u finalnom sloju
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Kopiramo Node.js i PHP buildove
COPY --from=node_builder /usr/src/app /usr/src/app
COPY --from=php_builder /usr/src/app/composer.json /usr/src/app/
COPY --from=php_builder /usr/src/app/composer.lock /usr/src/app/
WORKDIR /usr/src/app

# Pokrećemo Composer instalaciju ponovo za siguran setup
RUN composer install --no-dev --optimize-autoloader

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=3000"]
