import { defineConfig } from 'astro/config'
import serviceWorker from '@ayco/astro-sw'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://ayo.ayco.io',
  image: {
    domains: ['cdn.bsky.app'],
  },
  integrations: [
    sitemap(),
    serviceWorker({
      path: './src/sw.mjs',
      assetCachePrefix: 'ayco-personal-site',
      assetCacheVersionID: '4',
      logAssets: true,
      esbuild: {
        minify: true,
      },
      registrationHooks: {
        afterRegistration: () => {
          console.log('>>> registered sw')
        },
      },
    }),
  ],
})
