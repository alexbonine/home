// Pulled from https://github.com/vercel/next.js/tree/canary/examples/with-sitemap

import fs from 'fs';
import { globby } from 'globby';

function addPage(page) {
  const path = page.replace('pages', '').replace('.js', '').replace('.mdx', '');
  const route = path === '/index' ? '' : path;

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby.globby(['pages/**/*{.js,.mdx}', '!pages/_*.js', '!pages/api']);
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

export default generateSitemap;
