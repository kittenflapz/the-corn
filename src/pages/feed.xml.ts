// RSS feed for The Corn. Includes full article content (HTML-rendered from
// markdown) so feed readers show the whole piece, not just an excerpt.
//
// Filters out draft:true. Ordered pubDate-descending.
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import type { APIContext } from 'astro';

const parser = new MarkdownIt({ html: true, linkify: true, typographer: true });

export async function GET(context: APIContext) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);

  const items = articles
    .slice()
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((article) => ({
      title: article.data.title,
      description: article.data.deck ?? '',
      pubDate: article.data.pubDate,
      link: `/articles/${article.id}/`,
      // Full body as HTML — @astrojs/rss emits this as <content:encoded>.
      content: parser.render(article.body ?? ''),
      categories: [article.data.category],
    }));

  return rss({
    title: 'The Corn',
    description:
      "North Durham's most vigilant satirical newspaper. Local news, community alerts, and other fictions.",
    site: context.site!.toString(),
    items,
    customData: `<language>en-ca</language>`,
    stylesheet: false,
  });
}
