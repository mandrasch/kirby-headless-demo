State: Work in progress

## Frontend: Astro

- `cd astro-frontend`
- `npm install`
- `npm run dev`

- VScode prettier auto formatting only works with npm out of the box, not with pnpm

## Backend: Kirby CMS

- `cd kirby-backend`
- `ddev start && ddev composer install && ddev launch`

- Astro is currently not bundled within DDEV because Vite needs extra treatment (see e.g. port exposing for laravel-mix https://github.com/tyler36/ddev-browsersync#laravel-mix-example)