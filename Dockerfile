# Prvo, uzimamo PHP baznu sliku
FROM php:8.3-fpm

# Instaliramo Nginx i potrebne biblioteke
RUN apt-get update && apt-get install -y nginx

# Kopiramo Laravel i React aplikacije u kontejner
COPY ./api /var/www/api
COPY ./build /var/www/build
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Postavljamo radni direktorijum za PHP
WORKDIR /var/www/api

# Instaliramo Composer i PHP zavisnosti
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-dev --optimize-autoloader --working-dir=api

# Instaliramo Nginx
RUN mkdir -p /var/www && chown -R www-data:www-data /var/www

# Otvorimo port 8080
EXPOSE 8080

# Pokrećemo PHP-FPM i Nginx zajedno
CMD php-fpm -D && nginx -g 'daemon off;'
