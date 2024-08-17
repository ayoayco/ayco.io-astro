import { defineConfig } from 'astro/config';
import serviceWorker from '@ayco/astro-sw';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://ayo.ayco.io',
  integrations: [
    sitemap(),
    serviceWorker({
      path: './src/sw.ts',
      assetCachePrefix: 'ayco-personal-site',
      excludeRoutes: [
        '/threads'
      ],
      esbuild: {
        minify: true
      }
    })
  ]
});
