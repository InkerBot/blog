// @ts-check
import { defineConfig } from 'astro/config';
import { execSync } from 'node:child_process';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/consts.ts';

function git(cmd) {
  try {
    return execSync(`git ${cmd}`, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
  } catch {
    return '';
  }
}

// Build metadata. On Cloudflare Pages CF_PAGES_COMMIT_SHA is injected
// automatically; the build number falls back to the git commit count.
const commit = process.env.CF_PAGES_COMMIT_SHA || git('rev-parse HEAD');
const buildInfo = {
  number: process.env.BUILD_NUMBER || git('rev-list --count HEAD') || 'dev',
  commit,
  short: commit ? commit.slice(0, 8) : 'dev',
};

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Monokai keeps the look of the original blog's code blocks.
      theme: 'monokai',
      wrap: false,
    },
  },
  vite: {
    define: {
      __BUILD__: JSON.stringify(buildInfo),
    },
  },
});
