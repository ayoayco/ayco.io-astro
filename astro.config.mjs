// @ts-check
import { defineConfig } from 'astro/config'
import serviceWorker from '@ayco/astro-sw'
import sitemap from '@astrojs/sitemap'

import * as data from './package.json'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://ayo.ayco.io',
  image: {
    domains: ['cdn.bsky.app', 'media.ayco.io'],
    remotePatterns: [{ protocol: 'https' }],
  },
  integrations: [
    sitemap(),
    serviceWorker({
      path: './src/sw.mjs',
      assetCachePrefix: 'ayco-personal-site',
      assetCacheVersionID: data.version,
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
    icon({
      include: {
        mdi: ['*'],
        tabler: ['*'],
        'simple-icons': ['*'],
      },
    }),
  ],
})
