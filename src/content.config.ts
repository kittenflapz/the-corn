import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    deck: z.string().optional(),
    dateline: z.string(),       // e.g. 'PORT PERRY, ON'
    pubDate: z.date(),
    byline: z.string().default('Staff Reporter'),
    category: z
      .enum(['local news', 'community alert', 'food & dining', 'civic affairs'])
      .default('local news'),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    heroImage: z
      .object({
        src: z.string(),       // path under /public, e.g. '/img/foo.png'
        alt: z.string(),       // required for a11y
        caption: z.string().optional(),
        credit: z.string().default('The Corn'),
      })
      .optional(),
  }),
});

export const collections = { articles };
