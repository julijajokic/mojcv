FROM php:8.2-fpm

# Instaliraj sistemske pakete i PHP ekstenzije
RUN apt-get update && apt-get install -y \
    libpng-dev libonig-dev libxml2-dev zip unzip curl git default-mysql-client \
    nginx \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Instaliraj Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Setuj radni direktorijum
WORKDIR /var/www

# Kopiraj fajlove Laravel aplikacije
COPY . .

# Instaliraj Laravel zavisnosti
RUN composer install --no-dev --optimize-autoloader

# Generiši aplikacioni ključ
RUN php artisan config:clear
RUN php artisan cache:clear
RUN php artisan route:clear
RUN php artisan view:clear

# Setuj dozvole
RUN chmod -R 775 storage bootstrap/cache

# Kopiraj nginx konfiguraciju (pretpostavljamo da je fajl u tvom lokalnom projektu)
COPY ./nginx/default.conf /etc/nginx/sites-available/default

# Pokreni nginx i php-fpm
CMD service php8.2-fpm start && nginx -g 'daemon off;'




