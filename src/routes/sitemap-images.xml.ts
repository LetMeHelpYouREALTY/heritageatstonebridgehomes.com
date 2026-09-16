import { type RequestHandler } from "@builder.io/qwik-city";
import { SITE_IMAGES, getAllPagePaths, getPageMedia, gitImageAbsolute } from "~/config/images";

const ORIGIN = "https://heritagestonebridge.com";

function imageUrl(id: string): string {
  return gitImageAbsolute(id);
}

export const onGet: RequestHandler = async (requestEvent) => {
  const currentDate = new Date().toISOString();
  const urls: string[] = [];

  for (const rawPath of getAllPagePaths()) {
    const path = rawPath === "/" ? "/" : `${rawPath.replace(/\/+$/, "")}/`;
    const media = getPageMedia(path);
    const images = [media.hero, ...media.sections.map((s) => s.id)];
    const seen = new Set<string>();
    const tags: string[] = [];
    for (const id of images) {
      if (seen.has(id) || !SITE_IMAGES[id]) continue;
      seen.add(id);
      const img = SITE_IMAGES[id];
      tags.push(`        <image:image>
            <image:loc>${imageUrl(id)}</image:loc>
            <image:title>${escapeXml(img.title)}</image:title>
            <image:caption>${escapeXml(img.alt)}</image:caption>
            <image:geo_location>${escapeXml(img.geoLocation)}</image:geo_location>
        </image:image>`);
    }
    urls.push(`    <url>
        <loc>${ORIGIN}${path === "/" ? "/" : path}</loc>
        <lastmod>${currentDate}</lastmod>
${tags.join("\n")}
    </url>`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>`;

  requestEvent.headers.set("Content-Type", "application/xml");
  requestEvent.headers.set("Cache-Control", "public, max-age=1800");
  requestEvent.send(200, sitemap);
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
