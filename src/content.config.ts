import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			// Tags for categorization (use without #, e.g. Motherhood, Investing)
			tags: z.array(z.string()).optional().default([]),
			// When true, treat this post as a draft (hidden from lists, routes, RSS)
			draft: z.boolean().optional().default(false),
		}),
});

export const collections = { blog };
