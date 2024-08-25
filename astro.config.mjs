import { defineConfig } from 'astro/config';
import serviceWorker from '@ayco/astro-sw';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://ayo.ayco.io',
  integrations: [
    sitemap(),
    serviceWorker({
      path: './src/sw.mjs',
      assetCachePrefix: 'ayco-personal-site',
      logAssets: true,
      excludeRoutes: [
        '/threads'
      ],
      esbuild: {
        minify: true
      }
    })
  ]
});
