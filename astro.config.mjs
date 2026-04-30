import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://willyennie.dev',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  build: {
    format: 'directory',
  },
});
