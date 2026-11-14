import rss from "@astrojs/rss";
import { getPublishedPosts } from "../lib/blog";
import type { APIContext } from "astro";
import { pillars } from "../data/peptides";
import { hubs } from "../data/places";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: "The Peptide Desk",
    description: "Verified Telegram peptide dealer. Batch COAs, cold-chain EU dispatch.",
    site: context.site!,
    items: [
      ...posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.id}/`,
      })),
      ...pillars.map((p) => ({
        title: `Buy ${p.name} on Telegram`,
        link: `/peptides/${p.slug}/`,
        description: p.hook,
      })),
      ...hubs.map((h) => ({
        title: `Peptides on Telegram in ${h.name}`,
        link: `/locations/${h.slug}/`,
        description: `Verified dealer shipping to ${h.name} in ${h.daysMin}-${h.daysMax} days.`,
      })),
    ],
  });
}