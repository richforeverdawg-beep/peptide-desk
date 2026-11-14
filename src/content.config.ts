import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    author: z.string().trim().min(1),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(true),
  }).refine((post) => !post.updatedDate || post.updatedDate >= post.pubDate, {
    message: "updatedDate must not be earlier than pubDate",
  }),
});

export const collections = { blog };
