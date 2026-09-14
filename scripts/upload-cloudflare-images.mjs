#!/usr/bin/env node
/**
 * Upload git-backed images in public/images to Cloudflare Images.
 *
 * Primary CDN: https://imagedelivery.net/{ACCOUNT_HASH}/{IMAGE_ID}/{VARIANT}
 * Backup: public/images/*.jpg in git (Vercel static).
 *
 * Required env:
 *   CLOUDFLARE_ACCOUNT_ID
 *   CLOUDFLARE_API_TOKEN   (Images:Edit)
 *
 * After upload, set PUBLIC_CLOUDFLARE_IMAGES_HASH to the account hash from
 * the Cloudflare Images dashboard so the site serves imagedelivery.net URLs.
 *
 * Do not orange-cloud the Vercel apex domain.
 */

import { readdir, readFile } from "node:fs/promises";
import { join, parse } from "node:path";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const DIR = join(process.cwd(), "public/images");

async function main() {
  if (!ACCOUNT_ID || !TOKEN) {
    console.error("Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN before uploading.");
    process.exit(1);
  }

  const files = (await readdir(DIR)).filter((name) => name.endsWith(".jpg"));
  console.log(`Uploading ${files.length} JPEGs from ${DIR}`);

  for (const file of files) {
    const id = parse(file).name;
    const bytes = await readFile(join(DIR, file));
    const blob = new Blob([bytes], { type: "image/jpeg" });
    const body = new FormData();
    body.set("id", id);
    body.set("file", blob, file);

    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${TOKEN}` },
        body,
      }
    );
    const json = await res.json();
    if (!res.ok || !json.success) {
      const already = JSON.stringify(json).includes("Duplicate");
      if (already) {
        console.log(`exists  ${id}`);
        continue;
      }
      console.error(`fail    ${id}`, json.errors || json);
      process.exitCode = 1;
      continue;
    }
    console.log(`ok      ${id}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
