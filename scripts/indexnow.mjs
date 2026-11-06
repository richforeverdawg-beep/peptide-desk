import { readFileSync, existsSync } from "node:fs";

const KEY = "9f2c7a4b8e1d6350a2c4e6f8b0d2a4c6";
const HOST = "www.telegramsource.co";

const files = [
  "dist/sitemap-0.xml",
  "dist/sitemap-1.xml",
  "dist/sitemap-2.xml",
  "dist/sitemap-index.xml",
].filter((f) => existsSync(f));

if (!files.length) {
  console.error("No sitemap found. Run npm run build first.");
  process.exit(1);
}

const urls = new Set();
for (const f of files) {
  const xml = readFileSync(f, "utf8");
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    if (!m[1].includes("sitemap")) urls.add(m[1]);
  }
}

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: "https://" + HOST + "/" + KEY + ".txt",
  urlList: [...urls],
};

console.log("Submitting " + payload.urlList.length + " URLs");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

console.log("IndexNow status: " + res.status + " " + res.statusText);