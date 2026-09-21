/**
 * Image catalog for Heritage at Stonebridge.
 *
 * Primary delivery: Cloudflare hosted Images
 *   https://imagedelivery.net/{ACCOUNT_HASH}/{IMAGE_ID}/{VARIANT}
 * Docs: https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 *
 * Custom image IDs match git filenames without `.jpg`.
 * Named variants: public, hero, card, thumbnail (created by scripts/upload-cloudflare-images.mjs).
 *
 * Backup: git-tracked files in /public/images/*.jpg (served by Vercel).
 * Do not orange-cloud the Vercel apex — imagedelivery.net is a separate hostname.
 */

/** Public Images account hash. Safe to ship in client URLs. Override with PUBLIC_CLOUDFLARE_IMAGES_HASH. */
export const CLOUDFLARE_IMAGES_ACCOUNT_HASH = "byE6BTe9lNqo21V57n4aPQ";

/** Cloudflare account ID for the Images API (upload script). Not a delivery secret. */
export const CLOUDFLARE_IMAGES_ACCOUNT_ID = "2cc579c1ec9e426ed585e933ebf4753b";

export type ImageVariant = "public" | "hero" | "card" | "thumbnail";

export type SiteImage = {
  id: string;
  file: string;
  alt: string;
  title: string;
  geoLocation: string;
};

export type PageMedia = {
  hero: string;
  heroAlt: string;
  sections: Array<{ id: string; title: string; alt: string }>;
};

const SITE_ORIGIN = "https://heritagestonebridge.com";

export const SITE_IMAGES: Record<string, SiteImage> = {
  "heritage-stonebridge-hero": {
    id: "heritage-stonebridge-hero",
    file: "heritage-stonebridge-hero.jpg",
    alt: "Guard-gated entrance to Heritage at Stonebridge in Summerlin West, Las Vegas NV 89138 with Red Rock Canyon beyond",
    title: "Heritage at Stonebridge gated entrance",
    geoLocation: "Las Vegas, NV 89138",
  },
  clubhouse: {
    id: "clubhouse",
    file: "clubhouse.jpg",
    alt: "8,000 square foot clubhouse at Heritage at Stonebridge in Summerlin, Las Vegas",
    title: "Heritage at Stonebridge clubhouse",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "pool-spa": {
    id: "pool-spa",
    file: "pool-spa.jpg",
    alt: "Resort-style pool and spa at Heritage at Stonebridge 55+ community in Summerlin",
    title: "Resort-style pool and spa",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "pickleball-bocce": {
    id: "pickleball-bocce",
    file: "pickleball-bocce.jpg",
    alt: "Pickleball and bocce courts at Heritage at Stonebridge in Summerlin West",
    title: "Pickleball and bocce courts",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "home-collections": {
    id: "home-collections",
    file: "home-collections.jpg",
    alt: "Lennar single-story home collections at Heritage at Stonebridge, Summerlin West 89138",
    title: "Heritage at Stonebridge home collections",
    geoLocation: "Las Vegas, NV 89138",
  },
  "luxury-kitchen": {
    id: "luxury-kitchen",
    file: "luxury-kitchen.jpg",
    alt: "Lennar Everything's Included kitchen with quartz island in a Heritage at Stonebridge home",
    title: "Luxury kitchen interiors",
    geoLocation: "Las Vegas, NV 89138",
  },
  "red-rock-canyon": {
    id: "red-rock-canyon",
    file: "red-rock-canyon.jpg",
    alt: "Red Rock Canyon sandstone cliffs viewed from Summerlin West near Heritage at Stonebridge",
    title: "Red Rock Canyon views",
    geoLocation: "Red Rock Canyon, Las Vegas, NV",
  },
  "gated-entrance": {
    id: "gated-entrance",
    file: "gated-entrance.jpg",
    alt: "Guard-gated community entrance with desert landscaping in Summerlin, Las Vegas",
    title: "Gated community entrance",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "golf-course": {
    id: "golf-course",
    file: "golf-course.jpg",
    alt: "Golf course homes in Summerlin, Las Vegas with mountain backdrop",
    title: "Summerlin golf course homes",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "summerlin-homes": {
    id: "summerlin-homes",
    file: "summerlin-homes.jpg",
    alt: "Master-planned Summerlin neighborhood streets with desert mountains in Las Vegas",
    title: "Summerlin homes",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "luxury-home-exterior": {
    id: "luxury-home-exterior",
    file: "luxury-home-exterior.jpg",
    alt: "Twilight exterior of a luxury single-story home in Summerlin West, Las Vegas",
    title: "Luxury home exterior",
    geoLocation: "Las Vegas, NV 89138",
  },
  "great-room": {
    id: "great-room",
    file: "great-room.jpg",
    alt: "Open great room interior in a new Heritage at Stonebridge home with mountain light",
    title: "Great room interiors",
    geoLocation: "Las Vegas, NV 89138",
  },
  "henderson-community": {
    id: "henderson-community",
    file: "henderson-community.jpg",
    alt: "Residential streets and parks in Henderson, Nevada active adult communities",
    title: "Henderson communities",
    geoLocation: "Henderson, NV",
  },
  "contact-office": {
    id: "contact-office",
    file: "contact-office.jpg",
    alt: "Real estate consultation office for Heritage Stonebridge Homes By Dr. Jan Duffy in Las Vegas",
    title: "Dr. Jan Duffy consultation office",
    geoLocation: "Las Vegas, NV 89138",
  },
  "fitness-center": {
    id: "fitness-center",
    file: "fitness-center.jpg",
    alt: "Fitness center inside the Heritage at Stonebridge clubhouse in Summerlin",
    title: "Community fitness center",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "walking-trails": {
    id: "walking-trails",
    file: "walking-trails.jpg",
    alt: "Paved walking trail through Heritage at Stonebridge with Red Rock Canyon in the distance",
    title: "Community walking trails",
    geoLocation: "Las Vegas, NV 89138",
  },
  "cromwell-home": {
    id: "cromwell-home",
    file: "cromwell-home.jpg",
    alt: "Cromwell collection single-story home at Heritage at Stonebridge, 1,232 to 1,456 square feet",
    title: "Cromwell collection",
    geoLocation: "Las Vegas, NV 89138",
  },
  "stirling-home": {
    id: "stirling-home",
    file: "stirling-home.jpg",
    alt: "Stirling collection single-story home at Heritage at Stonebridge, 1,747 to 2,236 square feet",
    title: "Stirling collection",
    geoLocation: "Las Vegas, NV 89138",
  },
  "evander-home": {
    id: "evander-home",
    file: "evander-home.jpg",
    alt: "Evander collection luxury single-story home at Heritage at Stonebridge, 2,515 to 2,873 square feet",
    title: "Evander collection",
    geoLocation: "Las Vegas, NV 89138",
  },
  "heritage-stonebridge-logo": {
    id: "heritage-stonebridge-logo",
    file: "heritage-stonebridge-logo.jpg",
    alt: "Heritage at Stonebridge community monument in Summerlin West, Las Vegas NV 89138",
    title: "Heritage at Stonebridge",
    geoLocation: "Las Vegas, NV 89138",
  },
  "boulder-city-homes": {
    id: "boulder-city-homes",
    file: "boulder-city-homes.jpg",
    alt: "Residential homes in Boulder City, Nevada near Lake Mead",
    title: "Boulder City homes",
    geoLocation: "Boulder City, NV",
  },
  "northwest-las-vegas": {
    id: "northwest-las-vegas",
    file: "northwest-las-vegas.jpg",
    alt: "Northwest Las Vegas residential neighborhood with Spring Mountains beyond",
    title: "Northwest Las Vegas homes",
    geoLocation: "Las Vegas, NV",
  },
  "55-plus-condos": {
    id: "55-plus-condos",
    file: "55-plus-condos.jpg",
    alt: "55+ condominium building with courtyard pool in Las Vegas",
    title: "Las Vegas 55+ condos",
    geoLocation: "Las Vegas, NV",
  },
  "home-selling": {
    id: "home-selling",
    file: "home-selling.jpg",
    alt: "Staged living room prepared for sale in a Las Vegas home",
    title: "Home selling and staging",
    geoLocation: "Las Vegas, NV",
  },
  "las-vegas-market": {
    id: "las-vegas-market",
    file: "las-vegas-market.jpg",
    alt: "Las Vegas west valley rooftops and Red Rock Canyon at sunrise",
    title: "Las Vegas real estate market",
    geoLocation: "Las Vegas, NV",
  },
  "homebuyer-entry": {
    id: "homebuyer-entry",
    file: "homebuyer-entry.jpg",
    alt: "Front entry of a new single-story Las Vegas home ready for a private tour",
    title: "Homebuyer private tour entry",
    geoLocation: "Las Vegas, NV 89138",
  },
  "downtown-summerlin": {
    id: "downtown-summerlin",
    file: "downtown-summerlin.jpg",
    alt: "Downtown Summerlin shopping promenade with Red Rock Canyon in the distance",
    title: "Downtown Summerlin",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "covered-patio": {
    id: "covered-patio",
    file: "covered-patio.jpg",
    alt: "Covered patio of a single-story Heritage at Stonebridge home in Summerlin West at twilight",
    title: "Covered patio outdoor living",
    geoLocation: "Las Vegas, NV 89138",
  },
  "outdoor-kitchen": {
    id: "outdoor-kitchen",
    file: "outdoor-kitchen.jpg",
    alt: "Outdoor kitchen and grill on a Summerlin West single-story home with desert landscaping",
    title: "Outdoor kitchen",
    geoLocation: "Las Vegas, NV 89138",
  },
  "pickleball-courts": {
    id: "pickleball-courts",
    file: "pickleball-courts.jpg",
    alt: "Pickleball courts at a 55+ community in Summerlin, Las Vegas",
    title: "Pickleball courts",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "bocce-courts": {
    id: "bocce-courts",
    file: "bocce-courts.jpg",
    alt: "Bocce courts at Heritage at Stonebridge in Summerlin West, Las Vegas",
    title: "Bocce courts",
    geoLocation: "Las Vegas, NV 89138",
  },
  "henderson-parks": {
    id: "henderson-parks",
    file: "henderson-parks.jpg",
    alt: "Public park and walking paths in Henderson, Nevada",
    title: "Henderson parks and trails",
    geoLocation: "Henderson, NV",
  },
  "shopping-dining": {
    id: "shopping-dining",
    file: "shopping-dining.jpg",
    alt: "Outdoor dining terrace and retail plaza in the Las Vegas west valley",
    title: "Shopping and dining",
    geoLocation: "Las Vegas, NV",
  },
  "medical-campus": {
    id: "medical-campus",
    file: "medical-campus.jpg",
    alt: "Medical campus exterior in Henderson, Nevada with desert landscaping",
    title: "Henderson medical campus",
    geoLocation: "Henderson, NV",
  },
  "sun-city-summerlin": {
    id: "sun-city-summerlin",
    file: "sun-city-summerlin.jpg",
    alt: "Sun City Summerlin golf fairway, clubhouse, and single-story homes with Red Rock Canyon beyond",
    title: "Sun City Summerlin",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "sun-city-anthem": {
    id: "sun-city-anthem",
    file: "sun-city-anthem.jpg",
    alt: "Sun City Anthem hillside 55+ community and golf course in Henderson, Nevada",
    title: "Sun City Anthem",
    geoLocation: "Henderson, NV",
  },
  "the-ridges": {
    id: "the-ridges",
    file: "the-ridges.jpg",
    alt: "Custom luxury estates in The Ridges, Summerlin West, with Red Rock Canyon views at twilight",
    title: "The Ridges",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "siena-summerlin": {
    id: "siena-summerlin",
    file: "siena-summerlin.jpg",
    alt: "Italian-inspired gated homes and clubhouse at Siena in Summerlin, Las Vegas",
    title: "Siena Summerlin",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "red-rock-country-club": {
    id: "red-rock-country-club",
    file: "red-rock-country-club.jpg",
    alt: "Red Rock Country Club golf course and clubhouse with Red Rock Canyon cliffs beyond",
    title: "Red Rock Country Club",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "del-webb-inspirada": {
    id: "del-webb-inspirada",
    file: "del-webb-inspirada.jpg",
    alt: "Contemporary Del Webb-style new construction homes and walking paths in Henderson, Nevada",
    title: "Del Webb Inspirada",
    geoLocation: "Henderson, NV",
  },
  "macdonald-ranch": {
    id: "macdonald-ranch",
    file: "macdonald-ranch.jpg",
    alt: "MacDonald Ranch luxury golf-course homes in Henderson, Nevada",
    title: "MacDonald Ranch",
    geoLocation: "Henderson, NV",
  },
  "seven-hills": {
    id: "seven-hills",
    file: "seven-hills.jpg",
    alt: "Guard-gated entrance and custom hillside estates in Seven Hills, Henderson, Nevada",
    title: "Seven Hills",
    geoLocation: "Henderson, NV",
  },
  "las-vegas-strip-skyline": {
    id: "las-vegas-strip-skyline",
    file: "las-vegas-strip-skyline.jpg",
    alt: "Las Vegas Strip skyline at dusk seen from west-valley residential rooftops",
    title: "Las Vegas Strip skyline",
    geoLocation: "Las Vegas, NV",
  },
  "desert-sunshine-patio": {
    id: "desert-sunshine-patio",
    file: "desert-sunshine-patio.jpg",
    alt: "Covered patio of a Summerlin West single-story home in golden-hour desert light",
    title: "Desert sunshine patio",
    geoLocation: "Las Vegas, NV 89138",
  },
  "new-construction-home": {
    id: "new-construction-home",
    file: "new-construction-home.jpg",
    alt: "Brand-new Lennar single-story model home with desert landscaping in Summerlin West",
    title: "New construction home",
    geoLocation: "Las Vegas, NV 89138",
  },
  "primary-suite": {
    id: "primary-suite",
    file: "primary-suite.jpg",
    alt: "Staged primary suite and spa bath in a new Heritage at Stonebridge home",
    title: "Primary suite interior",
    geoLocation: "Las Vegas, NV 89138",
  },
  "the-arbors": {
    id: "the-arbors",
    file: "the-arbors.jpg",
    alt: "Parks and walking trails in The Arbors village, Summerlin, Las Vegas",
    title: "The Arbors",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "community-activities": {
    id: "community-activities",
    file: "community-activities.jpg",
    alt: "Active adult lifestyle and community activities at a Summerlin 55+ clubhouse",
    title: "Community activities",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
  "55-plus-community-lifestyle": {
    id: "55-plus-community-lifestyle",
    file: "55-plus-community-lifestyle.jpg",
    alt: "55+ community lifestyle with resort amenities in Las Vegas",
    title: "55+ community lifestyle",
    geoLocation: "Las Vegas, NV",
  },
  "stonebridge-amenities": {
    id: "stonebridge-amenities",
    file: "stonebridge-amenities.jpg",
    alt: "Resort amenities at Heritage at Stonebridge in Summerlin West",
    title: "Stonebridge amenities",
    geoLocation: "Las Vegas, NV 89138",
  },
  "home-interior": {
    id: "home-interior",
    file: "home-interior.jpg",
    alt: "Staged interior living space in a new Las Vegas single-story home",
    title: "Home interiors",
    geoLocation: "Las Vegas, NV",
  },
  "summerlin-master-plan": {
    id: "summerlin-master-plan",
    file: "summerlin-master-plan.jpg",
    alt: "Master-planned Summerlin streets, parks, and desert mountains in Las Vegas",
    title: "Summerlin master plan",
    geoLocation: "Summerlin, Las Vegas, NV",
  },
};

const DEFAULT_MEDIA: PageMedia = {
  hero: "heritage-stonebridge-hero",
  heroAlt: SITE_IMAGES["heritage-stonebridge-hero"].alt,
  sections: [
    { id: "clubhouse", title: "8,000 Sq Ft Clubhouse", alt: SITE_IMAGES.clubhouse.alt },
    { id: "pool-spa", title: "Resort-Style Pool & Spa", alt: SITE_IMAGES["pool-spa"].alt },
    { id: "pickleball-bocce", title: "Pickleball & Bocce", alt: SITE_IMAGES["pickleball-bocce"].alt },
  ],
};

const PAGE_MEDIA: Record<string, PageMedia> = {
  "/": {
    hero: "heritage-stonebridge-hero",
    heroAlt: SITE_IMAGES["heritage-stonebridge-hero"].alt,
    sections: [
      { id: "clubhouse", title: "8,000 Sq Ft Clubhouse", alt: SITE_IMAGES.clubhouse.alt },
      { id: "pool-spa", title: "Resort-Style Pool & Spa", alt: SITE_IMAGES["pool-spa"].alt },
      { id: "pickleball-bocce", title: "Pickleball & Bocce Courts", alt: SITE_IMAGES["pickleball-bocce"].alt },
    ],
  },
  "/contact": {
    hero: "contact-office",
    heroAlt: SITE_IMAGES["contact-office"].alt,
    sections: [
      { id: "heritage-stonebridge-hero", title: "Heritage at Stonebridge", alt: SITE_IMAGES["heritage-stonebridge-hero"].alt },
      { id: "summerlin-homes", title: "Summerlin West 89138", alt: SITE_IMAGES["summerlin-homes"].alt },
      { id: "homebuyer-entry", title: "Private Tours", alt: SITE_IMAGES["homebuyer-entry"].alt },
    ],
  },
  "/about": {
    hero: "contact-office",
    heroAlt: SITE_IMAGES["contact-office"].alt,
    sections: [
      { id: "heritage-stonebridge-hero", title: "Heritage at Stonebridge specialist", alt: SITE_IMAGES["heritage-stonebridge-hero"].alt },
      { id: "home-collections", title: "Lennar home collections", alt: SITE_IMAGES["home-collections"].alt },
      { id: "red-rock-canyon", title: "Summerlin West and Red Rock", alt: SITE_IMAGES["red-rock-canyon"].alt },
    ],
  },
  "/homes-for-sale-stonebridge-summerlin": {
    hero: "home-collections",
    heroAlt: SITE_IMAGES["home-collections"].alt,
    sections: [
      { id: "cromwell-home", title: "Cromwell Collection", alt: SITE_IMAGES["cromwell-home"].alt },
      { id: "stirling-home", title: "Stirling Collection", alt: SITE_IMAGES["stirling-home"].alt },
      { id: "evander-home", title: "Evander Collection", alt: SITE_IMAGES["evander-home"].alt },
    ],
  },
  "/heritage-at-stonebridge-homes-for-sale": {
    hero: "home-collections",
    heroAlt: SITE_IMAGES["home-collections"].alt,
    sections: [
      { id: "cromwell-home", title: "Cromwell Collection", alt: SITE_IMAGES["cromwell-home"].alt },
      { id: "stirling-home", title: "Stirling Collection", alt: SITE_IMAGES["stirling-home"].alt },
      { id: "evander-home", title: "Evander Collection", alt: SITE_IMAGES["evander-home"].alt },
    ],
  },
  "/55-plus-communities": keywordMedia("pickleball-bocce", "clubhouse", "pool-spa", "walking-trails"),
  "/55-plus-communities-las-vegas": keywordMedia("pickleball-bocce", "clubhouse", "pool-spa", "home-collections"),
  "/55-plus-communities-las-vegas-for-sale": keywordMedia("home-collections", "cromwell-home", "stirling-home", "evander-home"),
  "/55-plus-communities-red-rock-canyon": keywordMedia("red-rock-canyon", "gated-entrance", "pool-spa", "walking-trails"),
  "/55-and-over-communities-summerlin-las-vegas": keywordMedia("summerlin-homes", "clubhouse", "golf-course", "red-rock-canyon"),
  "/55-and-over-communities-las-vegas-for-rent": keywordMedia("homebuyer-entry", "pool-spa", "clubhouse", "summerlin-homes"),
  "/summerlin-55-plus-communities": keywordMedia("summerlin-homes", "golf-course", "clubhouse", "red-rock-canyon"),
  "/summerlin-homes": keywordMedia("summerlin-homes", "golf-course", "luxury-home-exterior", "red-rock-canyon"),
  "/las-vegas-real-estate": keywordMedia("las-vegas-market", "summerlin-homes", "henderson-community", "red-rock-canyon"),
  "/henderson-real-estate": keywordMedia("henderson-community", "henderson-parks", "shopping-dining", "medical-campus"),
  "/henderson-active-adult-communities": keywordMedia("henderson-community", "clubhouse", "golf-course", "pool-spa"),
  "/red-rock-canyon-communities": keywordMedia("red-rock-canyon", "gated-entrance", "luxury-home-exterior", "walking-trails"),
  "/gated-communities": keywordMedia("gated-entrance", "heritage-stonebridge-hero", "pool-spa", "clubhouse"),
  "/golf-course-homes": keywordMedia("golf-course", "luxury-home-exterior", "summerlin-homes", "clubhouse"),
  "/luxury-homes": keywordMedia("luxury-home-exterior", "luxury-kitchen", "great-room", "evander-home"),
  "/luxury-living-guide": keywordMedia("luxury-home-exterior", "pool-spa", "luxury-kitchen", "golf-course"),
  "/luxury-retirement-communities-las-vegas": keywordMedia("pool-spa", "clubhouse", "luxury-home-exterior", "golf-course"),
  "/mountain-view-homes": keywordMedia("red-rock-canyon", "luxury-home-exterior", "walking-trails", "summerlin-homes"),
  "/boulder-city-homes": keywordMedia("boulder-city-homes", "walking-trails", "henderson-community", "las-vegas-market"),
  "/northwest-las-vegas": keywordMedia("northwest-las-vegas", "summerlin-homes", "gated-entrance", "las-vegas-market"),
  "/55-plus-condos-las-vegas": keywordMedia("55-plus-condos", "pool-spa", "fitness-center", "great-room"),
  "/first-time-buyers": keywordMedia("homebuyer-entry", "cromwell-home", "luxury-kitchen", "contact-office"),
  "/home-selling-guide": keywordMedia("home-selling", "luxury-kitchen", "great-room", "home-collections"),
  "/market-analysis": keywordMedia("las-vegas-market", "home-collections", "summerlin-homes", "contact-office"),
  "/market-reports": keywordMedia("las-vegas-market", "summerlin-homes", "henderson-community", "home-collections"),
  "/blog": keywordMedia("las-vegas-market", "red-rock-canyon", "home-collections", "clubhouse"),
  "/testimonials": keywordMedia("clubhouse", "pool-spa", "homebuyer-entry", "contact-office"),
  "/neighborhood-insights": keywordMedia("summerlin-homes", "red-rock-canyon", "walking-trails", "golf-course"),
  "/community-guides": keywordMedia("clubhouse", "pickleball-bocce", "pool-spa", "walking-trails"),
  "/community-comparison": keywordMedia("home-collections", "golf-course", "henderson-community", "gated-entrance"),
  "/active-adult-communities": keywordMedia("pickleball-bocce", "fitness-center", "pool-spa", "walking-trails"),
  "/active-adult-lifestyle-communities": keywordMedia("pickleball-bocce", "fitness-center", "clubhouse", "pool-spa"),
  "/retirement-communities-las-vegas": keywordMedia("clubhouse", "pool-spa", "walking-trails", "golf-course"),
  "/sun-city-del-webb-real-estate": keywordMedia("golf-course", "clubhouse", "henderson-community", "summerlin-homes"),
  "/affordable-55-plus-communities-las-vegas": keywordMedia("cromwell-home", "home-collections", "clubhouse", "pool-spa"),
  "/best-55-plus-communities-las-vegas": keywordMedia("heritage-stonebridge-hero", "golf-course", "pool-spa", "clubhouse"),
  "/new-55-plus-communities-las-vegas": keywordMedia("home-collections", "luxury-kitchen", "cromwell-home", "gated-entrance"),
  "/real-estate": keywordMedia("home-collections", "luxury-kitchen", "las-vegas-market", "contact-office"),
  "/privacy-policy": keywordMedia("heritage-stonebridge-logo", "contact-office", "heritage-stonebridge-hero", "summerlin-homes"),
  "/terms-of-service": keywordMedia("heritage-stonebridge-logo", "contact-office", "heritage-stonebridge-hero", "summerlin-homes"),
  "/sitemap": keywordMedia("heritage-stonebridge-logo", "summerlin-homes", "home-collections", "contact-office"),
  "/sitemap-test": keywordMedia("heritage-stonebridge-logo", "summerlin-homes", "home-collections", "contact-office"),
};

function keywordMedia(hero: string, a: string, b: string, c: string): PageMedia {
  return {
    hero,
    heroAlt: SITE_IMAGES[hero]?.alt ?? SITE_IMAGES["heritage-stonebridge-hero"].alt,
    sections: [
      { id: a, title: SITE_IMAGES[a].title, alt: SITE_IMAGES[a].alt },
      { id: b, title: SITE_IMAGES[b].title, alt: SITE_IMAGES[b].alt },
      { id: c, title: SITE_IMAGES[c].title, alt: SITE_IMAGES[c].alt },
    ],
  };
}

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed.length === 0 ? "/" : trimmed;
}

export function getPageMedia(pathname: string): PageMedia {
  const path = normalizePath(pathname);
  return PAGE_MEDIA[path] ?? DEFAULT_MEDIA;
}

export function cloudflareAccountHash(): string {
  const fromEnv = (import.meta.env.PUBLIC_CLOUDFLARE_IMAGES_HASH as string | undefined)?.trim();
  return fromEnv || CLOUDFLARE_IMAGES_ACCOUNT_HASH;
}

export function cfImage(id: string, variant: ImageVariant = "public"): string {
  const hash = cloudflareAccountHash();
  return `https://imagedelivery.net/${hash}/${id}/${variant}`;
}

export function cfImageAbsolute(id: string, variant: ImageVariant = "public"): string {
  return `https://imagedelivery.net/${cloudflareAccountHash()}/${id}/${variant}`;
}

export function gitBackupPath(id: string): string {
  const image = SITE_IMAGES[id];
  return `/images/${image?.file ?? `${id}.jpg`}`;
}

export function gitImageAbsolute(id: string): string {
  return `${SITE_ORIGIN}${gitBackupPath(id)}`;
}

export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/images/heritage-stonebridge-hero.jpg`;
export const DEFAULT_LOGO_IMAGE = `${SITE_ORIGIN}/images/heritage-stonebridge-logo.jpg`;
export const DEFAULT_AGENT_IMAGE = `${SITE_ORIGIN}/images/contact-office.jpg`;

const HEADING_RULES: Array<{ test: RegExp; id: string }> = [
  { test: /sun city summerlin/i, id: "sun-city-summerlin" },
  { test: /sun city anthem|\banthem\b/i, id: "sun-city-anthem" },
  { test: /macdonald/i, id: "macdonald-ranch" },
  { test: /seven hills/i, id: "seven-hills" },
  { test: /inspirada/i, id: "del-webb-inspirada" },
  { test: /del webb/i, id: "del-webb-inspirada" },
  { test: /the ridges|\bridges\b/i, id: "the-ridges" },
  { test: /\bsiena\b/i, id: "siena-summerlin" },
  { test: /red rock country/i, id: "red-rock-country-club" },
  { test: /the arbors|\barbors\b/i, id: "the-arbors" },
  { test: /pickleball/i, id: "pickleball-courts" },
  { test: /bocce/i, id: "bocce-courts" },
  { test: /court|sport/i, id: "pickleball-bocce" },
  { test: /pool|\bspa\b/i, id: "pool-spa" },
  { test: /fitness|workout/i, id: "fitness-center" },
  { test: /clubhouse|social club|mature amenit/i, id: "clubhouse" },
  { test: /golf|fairway|tpc|championship golf|rhodes ranch/i, id: "golf-course" },
  { test: /outdoor kitchen|grill/i, id: "outdoor-kitchen" },
  { test: /patio|outdoor living|covered/i, id: "covered-patio" },
  { test: /primary suite|bedroom|\bbath/i, id: "primary-suite" },
  { test: /new construction|building process/i, id: "new-construction-home" },
  { test: /kitchen|included|interior|staging/i, id: "luxury-kitchen" },
  { test: /cromwell/i, id: "cromwell-home" },
  { test: /stirling/i, id: "stirling-home" },
  { test: /evander/i, id: "evander-home" },
  { test: /prime location/i, id: "downtown-summerlin" },
  { test: /red rock canyon|red rock\b/i, id: "red-rock-canyon" },
  { test: /outdoor recreation|hiking/i, id: "walking-trails" },
  { test: /downtown summerlin|shopping|dining|retail/i, id: "downtown-summerlin" },
  { test: /strip|entertainment|culture/i, id: "las-vegas-strip-skyline" },
  { test: /sunshine|year-round|climate|no state income/i, id: "desert-sunshine-patio" },
  { test: /park|trail|walk|green valley/i, id: "henderson-parks" },
  { test: /hospital|healthcare|medical/i, id: "medical-campus" },
  { test: /skye canyon|centennial|aliante|tule|desert shores|north las vegas/i, id: "northwest-las-vegas" },
  { test: /northwest/i, id: "northwest-las-vegas" },
  { test: /summerlin/i, id: "summerlin-homes" },
  { test: /henderson/i, id: "henderson-community" },
  { test: /boulder/i, id: "boulder-city-homes" },
  { test: /condo/i, id: "55-plus-condos" },
  { test: /lifestyle|activit/i, id: "55-plus-community-lifestyle" },
  { test: /amenit/i, id: "stonebridge-amenities" },
  { test: /overview|prediction|sell|pricing|market|value|trend|inventory|resale|track record/i, id: "las-vegas-market" },
  { test: /buyer|tour|first-time|pre-approval|visit /i, id: "homebuyer-entry" },
  { test: /office|contact|agent/i, id: "contact-office" },
  { test: /master.?plan|village/i, id: "summerlin-master-plan" },
  { test: /collection|home|property|listing/i, id: "home-collections" },
];

export function imageIdForHeading(heading: string): string {
  for (const rule of HEADING_RULES) {
    if (rule.test.test(heading)) {
      return rule.id;
    }
  }
  return "heritage-stonebridge-hero";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function headingFigureHtml(heading: string): string {
  const id = imageIdForHeading(heading);
  const img = SITE_IMAGES[id] ?? SITE_IMAGES["heritage-stonebridge-hero"];
  const src = cfImage(id, "hero");
  const fallback = gitBackupPath(id);
  const alt = escapeHtml(img.alt);
  const caption = escapeHtml(heading.replace(/<[^>]+>/g, "").trim());
  return `<figure class="mb-4 overflow-hidden rounded-lg"><img src="${src}" alt="${alt}" width="1280" height="720" class="w-full h-48 object-cover" loading="lazy" decoding="async" onerror="if(this.dataset.cfFallback)return;this.dataset.cfFallback='1';this.removeAttribute('srcset');this.src='${fallback}';" /><figcaption class="sr-only">${caption} at Heritage at Stonebridge, Summerlin West, Las Vegas</figcaption></figure>`;
}

export function decorateHeadingsWithImages(html: string): string {
  return html.replace(/<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi, (_match, tag, attrs, inner) => {
    const text = String(inner)
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .trim();
    if (!text) {
      return `<${tag}${attrs}>${inner}</${tag}>`;
    }
    return `${headingFigureHtml(text)}<${tag}${attrs}>${inner}</${tag}>`;
  });
}

export function getAllPagePaths(): string[] {
  return Object.keys(PAGE_MEDIA);
}

export function pageOgImage(pathname: string): string {
  const media = getPageMedia(pathname);
  // Crawlers do not run img onerror. Keep Open Graph on git-backed origin URLs.
  return gitImageAbsolute(media.hero);
}

export const GBP_FAQS = [
  {
    question: "Where is Heritage Stonebridge | Homes By Dr. Jan Duffy located?",
    answer:
      "The office serves Heritage at Stonebridge at Crossbridge Dr, Las Vegas, NV 89138 in Summerlin West. Call (702) 789-6561 for directions or a private tour.",
  },
  {
    question: "What are the office hours?",
    answer:
      "Monday through Friday 9:00 AM–6:00 PM, Saturday 10:00 AM–4:30 PM, Sunday closed. Text (702) 789-6561 if you need a tour outside posted hours.",
  },
  {
    question: "Is Heritage at Stonebridge a gated 55+ community?",
    answer:
      "Yes. Heritage at Stonebridge is Lennar's guard-gated 55+ community in Summerlin West (89138), with an 8,000 sq ft clubhouse, resort pool, pickleball, and bocce. Dr. Jan Duffy (NV License S.0197614.LLC) helps buyers compare resale and new-build homes.",
  },
  {
    question: "How do I schedule a tour or get current listings?",
    answer:
      "Call or text (702) 789-6561, email DrDuffySells@HeritageStonebridge.com, or use the RealScout tour form. Listings and HOA details are confirmed from MLS before any showing.",
  },
] as const;
