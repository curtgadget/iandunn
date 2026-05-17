import { defineConfig } from 'astro/config';

// Static build — every page is prerendered to plain HTML.
// Deploys to Cloudflare Pages by serving the dist/ output directly;
// no adapter is needed until a route goes server-side (e.g. a Worker
// fetching real GitHub contribution data — see src/lib/contrib.js).
export default defineConfig({
  site: 'https://iandunn.net',
});
