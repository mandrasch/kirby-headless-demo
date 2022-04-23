import { defineConfig } from 'astro/config';

// https://astro.build/config
// TODO: doesn't work to set it via gh action?!
/* export default defineConfig({
    site: import.meta.env.site || 'https://localhost',
    base: import.meta.env.base || ''
});*/

// for gh pages deployment
export default defineConfig({
    site: 'https://mandrasch.github.io',
    base: '/kirby-headless-demo'
});