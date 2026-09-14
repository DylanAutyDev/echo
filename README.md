# Echo

Echo is a small, developer-style posting application built as a spin on the Laravel Bootcamp.

I created it to refamiliarize myself with Laravel's core concepts. Although I have extensive PHP experience, this project was a focused way to work through Laravel's conventions and the pieces that make up a typical application.

## What it does

Authenticated users can create, edit, and delete short posts ("echoes"). The home page displays the latest posts along with their authors.

## Built with

- Laravel 13 and PHP 8.3
- Inertia.js and React
- Tailwind CSS

## Getting started

Install the PHP and JavaScript dependencies, create your environment file, generate an application key, migrate the database, and start the development environment:

```bash
composer install
copy .env.example .env
php artisan key:generate
php artisan migrate
npm install
composer run dev
```

Configure the database connection in `.env` before running migrations if you are not using the default local setup.
