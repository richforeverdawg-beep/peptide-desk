import { getCollection } from "astro:content";

export async function getPublishedPosts() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  for (const post of posts) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.id)) {
      throw new Error(`Blog filename must use lowercase words separated by hyphens: ${post.id}`);
    }
  }
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime() || a.id.localeCompare(b.id));
}

export function formatPostDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  });
}
