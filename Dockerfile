# Use a imagem do PHP desejada
FROM php:7.4-apache

# Instale a extensão MySQLi
RUN docker-php-ext-install mysqli
