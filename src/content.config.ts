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
  }),
});

export const collections = { articles };
