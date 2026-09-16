#!/usr/bin/env node
/**
 * Upload git-backed JPEGs in public/images to Cloudflare hosted Images
 * and ensure named variants used by the site exist.
 *
 * Delivery: https://imagedelivery.net/{ACCOUNT_HASH}/{IMAGE_ID}/{VARIANT}
 * Docs:
 *   https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 *   https://developers.cloudflare.com/images/optimization/hosted-images/create-variants/
 *
 * Required env:
 *   CLOUDFLARE_API_TOKEN   (Account > Images:Edit)
 *
 * Optional env:
 *   CLOUDFLARE_ACCOUNT_ID  (defaults to the Heritage Images account)
 *
 * Custom IDs match filenames without .jpg. Do not commit the API token.
 * Do not orange-cloud the Vercel apex domain.
 */

import { readdir, readFile } from "node:fs/promises";
import { join, parse } from "node:path";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || "2cc579c1ec9e426ed585e933ebf4753b";
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const DIR = join(process.cwd(), "public/images");
const API = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`;

const VARIANTS = [
  {
    id: "public",
    options: { fit: "scale-down", width: 1920, height: 1080, metadata: "none" },
  },
  {
    id: "hero",
    options: { fit: "cover", width: 1920, height: 1080, metadata: "none" },
  },
  {
    id: "card",
    options: { fit: "cover", width: 800, height: 450, metadata: "none" },
  },
  {
    id: "thumbnail",
    options: { fit: "cover", width: 400, height: 225, metadata: "none" },
  },
];

function authHeaders(json = false) {
  const headers = { Authorization: `Bearer ${TOKEN}` };
  if (json) headers["Content-Type"] = "application/json";
  return headers;
}

async function cfFetch(url, init) {
  const res = await fetch(url, init);
  const json = await res.json().catch(() => ({}));
  return { res, json };
}

function isDuplicate(json) {
  const blob = JSON.stringify(json);
  return /duplicate|already exists|already been taken/i.test(blob);
}

async function ensureFlexibleVariants() {
  const { res, json } = await cfFetch(`${API}/config`, {
    method: "PATCH",
    headers: authHeaders(true),
    body: JSON.stringify({ flexible_variants: true }),
  });
  if (!res.ok || json.success === false) {
    console.warn("flexible variants skipped", json.errors || json);
    return;
  }
  console.log("ok      flexible variants enabled");
}

async function ensureVariant(variant) {
  const payload = {
    id: variant.id,
    options: variant.options,
    neverRequireSignedURLs: true,
  };

  const created = await cfFetch(`${API}/variants`, {
    method: "POST",
    headers: authHeaders(true),
    body: JSON.stringify(payload),
  });

  if (created.res.ok && created.json.success !== false) {
    console.log(`ok      variant ${variant.id}`);
    return;
  }

  if (!isDuplicate(created.json) && created.res.status !== 409) {
    const patched = await cfFetch(`${API}/variants/${variant.id}`, {
      method: "PATCH",
      headers: authHeaders(true),
      body: JSON.stringify({
        options: variant.options,
        neverRequireSignedURLs: true,
      }),
    });
    if (patched.res.ok && patched.json.success !== false) {
      console.log(`ok      variant ${variant.id} (updated)`);
      return;
    }
    console.error(`fail    variant ${variant.id}`, created.json.errors || created.json);
    process.exitCode = 1;
    return;
  }

  const patched = await cfFetch(`${API}/variants/${variant.id}`, {
    method: "PATCH",
    headers: authHeaders(true),
    body: JSON.stringify({
      options: variant.options,
      neverRequireSignedURLs: true,
    }),
  });
  if (!patched.res.ok || patched.json.success === false) {
    console.warn(`exists  variant ${variant.id} (update skipped)`, patched.json.errors || "");
    return;
  }
  console.log(`ok      variant ${variant.id} (updated)`);
}

async function uploadFile(file) {
  const id = parse(file).name;
  const bytes = await readFile(join(DIR, file));
  const blob = new Blob([bytes], { type: "image/jpeg" });
  const body = new FormData();
  body.set("id", id);
  body.set("file", blob, file);
  body.set("requireSignedURLs", "false");
  body.set("metadata", JSON.stringify({ source: "git-public-images", filename: file }));

  const { res, json } = await cfFetch(API, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}` },
    body,
  });

  if (res.ok && json.success !== false) {
    console.log(`ok      ${id}`);
    return;
  }

  if (isDuplicate(json)) {
    console.log(`exists  ${id}`);
    return;
  }

  console.error(`fail    ${id}`, json.errors || json);
  process.exitCode = 1;
}

async function main() {
  if (!TOKEN) {
    console.error("Set CLOUDFLARE_API_TOKEN (Images:Edit) before uploading.");
    process.exit(1);
  }

  const files = (await readdir(DIR)).filter((name) => name.endsWith(".jpg")).sort();
  console.log(`Account ${ACCOUNT_ID}`);
  console.log(`Ensuring ${VARIANTS.length} variants, then uploading ${files.length} JPEGs from ${DIR}`);

  await ensureFlexibleVariants();
  for (const variant of VARIANTS) {
    await ensureVariant(variant);
  }

  for (const file of files) {
    await uploadFile(file);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
