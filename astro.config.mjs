import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Substitute with your actual temporary configuration details:
  site: 'https://cjcboy25.github.io', 
  base: '/automavix', 
  trailingSlash: 'always',
  output: 'static',
  integrations: [tailwind()]
});
