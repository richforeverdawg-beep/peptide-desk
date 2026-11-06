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
      filter: (page) => !page.includes("/404"),
    }),
  ],
});