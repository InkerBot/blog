import rss from '@astrojs/rss';
import { getSortedPosts } from '../utils/posts.ts';
import { SITE } from '../consts.ts';

export async function GET(context) {
  const posts = await getSortedPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      categories: post.data.tags,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>${SITE.lang}</language>`,
  });
}
