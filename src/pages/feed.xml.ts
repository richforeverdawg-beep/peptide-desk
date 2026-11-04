import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { pillars } from "../data/peptides";
import { hubs } from "../data/places";

export async function GET(context: APIContext) {
  return rss({
    title: "The Peptide Desk",
    description: "Verified Telegram peptide dealer. Batch COAs, cold-chain EU dispatch.",
    site: context.site!,
    items: [
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