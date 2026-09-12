import { defineConfig } from 'astro/config';
import tailwindv4 from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://github.io',
  base: '/automavix', 
  trailingSlash: 'always',
  output: 'static',
  vite: {
    plugins: [tailwindv4()]
  }
});
