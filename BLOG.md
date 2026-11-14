# Publishing Markdown blog posts

The blog is at `/blog/`. Posts live in `src/content/blog/`.
No extra account, CMS, or terminal is required for normal posting through GitHub.

## Publish your first article using GitHub

1. Open `src/content/blog/post-template.md` and copy its text.
2. In `src/content/blog/`, create a new file such as `understanding-lab-reports.md`.
   Use lowercase words separated by hyphens, with no spaces or subfolders.
3. Paste the template. Replace the title, description, author, date, and body.
4. Keep `draft: true` while writing. Change it to `draft: false` only when reviewed
   and ready to publish. Use your real publication date in `YYYY-MM-DD` format.
5. Commit the file to `main` to trigger a production build, or open a pull request
   first to review the change. A successful build/deployment is required to go live.
6. Your filename becomes the URL: `understanding-lab-reports.md` becomes
   `/blog/understanding-lab-reports/`. It appears in the blog listing, sitemap,
   and RSS feed automatically after deployment.

The initial template remains a draft. Drafts (including a missing `draft` field)
are excluded from the live page routes, listing, sitemap, and feed, in both
production and preview builds. Draft text is still visible in a public GitHub
repository: never put private information in Markdown. To review a rendered
article before production, set `draft: false` in a PR and use its preview.
Preview URLs may be accessible to others, depending on deployment protection.

The empty blog listing is noindex and excluded from the sitemap until there is a
published post. Publishing a first post automatically includes the listing.
Dates describe publication; they do not schedule a future deployment. Do not set
`draft: false` until you want a post to appear, even if its date is in the future.

## Update an article

Edit the same Markdown file and commit the change. Keep `pubDate` unchanged.
Optionally add `updatedDate: "YYYY-MM-DD"` using the real review/update date.
It must not be earlier than the publication date. Avoid renaming published files:
that changes their URLs, and old links need a redirect planned separately.

## Markdown basics

The layout creates the article title as H1. Start body sections with `## Heading`.
Use `**bold**`, `*italic*`, `- list item`, and `[link text](https://example.com/)`.
Internal links should be root-relative and use a final slash, such as `/blog/`.
For an image, upload it to `public/blog/` and use `![Descriptive alt text](/blog/name.jpg)`.
Only link to images/files that exist and that you have permission to publish.

Use real author names, original useful content, and authoritative citations.
Publishing more posts does not guarantee indexing or rankings. No automatic
IndexNow submission is added by this feature.

## Optional local check

Run `npm ci` once, then `npm run build` to validate and build. Run `npm run dev`
to view locally. Invalid required metadata causes a build error; fix it before
merging. This project has no separate lint or test command.
