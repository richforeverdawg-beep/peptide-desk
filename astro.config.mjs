import { readFileSync } from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.telegramsource.co",
  trailingSlash: "always",
  compressHTML: true,
  build: { format: "directory", inlineStylesheets: "auto" },
  integrations: [
    sitemap({
      entryLimit: 2000,
      changefreq: "weekly",
      filter: (page) => {
        if (page.includes("/404")) return false;
        // Sitemap filtering runs after static pages have been rendered.
        if (new URL(page).pathname === "/blog/") {
          const html = readFileSync(new URL("./dist/blog/index.html", import.meta.url), "utf8");
          return !html.includes('content="noindex,follow"');
        }
        return true;
      },
    }),
  ],
});