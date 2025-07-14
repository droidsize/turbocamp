import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import { z } from 'zod';

const posts = defineCollection({
  name: 'posts',
  directory: '../../apps/web/content/blog',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
  }),
  transform: async ({ title, ...page }, context) => {
    const body = await context.cache(page.content, async () =>
      compileMDX(context, page)
    );
    const readingTime = Math.ceil(page.content.split(/\s+/).length / 200);
    return {
      ...page,
      _title: title,
      _slug: page._meta.path,
      body,
      readingTime,
    };
  },
});

const legals = defineCollection({
  name: 'legals',
  directory: '../../apps/web/content/legal',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
  transform: async ({ title, ...page }, context) => {
    const body = await context.cache(page.content, async () =>
      compileMDX(context, page)
    );
    const readingTime = Math.ceil(page.content.split(/\s+/).length / 200);
    return {
      ...page,
      _title: title,
      _slug: page._meta.path,
      body,
      readingTime,
    };
  },
});

export default defineConfig({
  collections: [posts, legals],
});
