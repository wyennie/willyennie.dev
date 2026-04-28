import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    role: z.string().optional(),
    year: z.union([z.number(), z.string()]),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    cover: z.string().optional(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, posts };
