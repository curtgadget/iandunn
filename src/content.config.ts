// Content collections — the Writing archive.
// Each post is a markdown file in src/content/writing/; the filename
// becomes the slug. Categories match the four on the Writing page.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Building', 'Leading', 'Learning', 'Life']),
  }),
});

export const collections = { writing };
