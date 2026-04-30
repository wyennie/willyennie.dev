import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '~/lib/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts', (p) => !p.data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${SITE.name} · writing`,
    description: 'Essays and notes by Will Yennie.',
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/writing/${post.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
