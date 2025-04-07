FROM php:8.2-fpm

# Instaliraj sistemske pakete i PHP ekstenzije
RUN apt-get update && apt-get install -y \
    libpng-dev libonig-dev libxml2-dev zip unzip curl git default-mysql-client \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd


# Instaliraj Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Setuj radni direktorijum
WORKDIR /var/www

# Kopiraj fajlove Laravel aplikacije
COPY . .

# Instaliraj Laravel zavisnosti
RUN composer install --no-dev --optimize-autoloader

# Generiši aplikacioni ključ (neće raditi ako .env ne postoji, ili DB nije konfigurisana)
# Ako koristiš Docker Compose za pokretanje, bolje je da se ovo radi u ENTRYPOINT skripti
RUN php artisan config:clear
RUN php artisan cache:clear
RUN php artisan route:clear
RUN php artisan view:clear

# Setuj dozvole
RUN chmod -R 775 storage bootstrap/cache

# Pokreni Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]



