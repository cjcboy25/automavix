import { z, defineCollection } from 'astro:content';

const articleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    // Workflow States: 'draft' | 'review' | 'published'
    status: z.enum(['draft', 'review', 'published']).default('draft'), 
  }),
});

export const collections = {
  'articles': articleCollection,
};
