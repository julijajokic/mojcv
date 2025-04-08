FROM php:8.2-fpm

# Instaliraj sistemske pakete i PHP ekstenzije
RUN apt-get update && apt-get install -y \
    libpng-dev libonig-dev libxml2-dev zip unzip curl git default-mysql-client \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Instaliraj Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Setuj radni direktorijum
WORKDIR /var/www

# Kopiraj fajlove Laravel aplikacije
COPY . .

# Instaliraj Laravel zavisnosti
RUN composer install --no-dev --optimize-autoloader

# Generiši aplikacioni ključ
RUN php artisan key:generate
RUN php artisan config:clear
RUN php artisan cache:clear
RUN php artisan route:clear
RUN php artisan view:clear

# Setuj dozvole
RUN chown -R www-data:www-data storage bootstrap/cache
RUN chmod -R 775 storage bootstrap/cache

# Pokreni PHP-FPM
CMD ["php-fpm", "-D"]








