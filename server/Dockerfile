FROM php:8.2-apache

# Install PDO + MySQL driver once at build time (fast startup every time)
RUN docker-php-ext-install pdo pdo_mysql \
    && a2enmod headers rewrite

# Copy custom vhost
COPY apache/000-default.conf /etc/apache2/sites-available/000-default.conf
