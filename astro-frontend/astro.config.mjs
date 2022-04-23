import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.site || 'https://localhost',
    base: import.meta.env.base || ''
});
