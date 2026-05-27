// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for absolute URLs in OG/Twitter meta + canonical + RSS/sitemap later.
  site: 'https://thecorn.ca',

  integrations: [sitemap()],
});