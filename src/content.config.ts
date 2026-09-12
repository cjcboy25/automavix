import { z, defineCollection } from 'astro:content';
// Import the mandatory loader module required by Astro v7
import { glob } from 'astro/loaders';

const articleCollection = defineCollection({
  // Use the glob loader to automatically index markdown files in your project directory
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // Using coerce safely handles string-to-date conversions from frontmatter
    author: z.string(),
    image: z.string().optional(),
    // Content approval workflow tracking states
    status: z.enum(['draft', 'review', 'published']).default('draft'), 
  }),
});

export const collections = {
  'articles': articleCollection,
};
