import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://ayo.ayco.io',
  integrations: [sitemap(
    {
      customPages: ['https://ayo.ayco.io/threads']
    }
  )]
});
