import { community } from "~/config/community";

/**
 * Map center: Heritage at Stonebridge HOA clubhouse (930 Silverfir Ct, Las Vegas, NV 89138).
 * Coordinates from OpenStreetMap Nominatim geocode, verified 2026-09-27.
 */
export const COMMUNITY_MAP_CENTER = {
  lat: 36.1582366,
  lng: -115.3783524,
  name: "Heritage at Stonebridge",
  address: community.clubhouseDisplay,
  source: "OpenStreetMap Nominatim geocode of community.clubhouseStreet",
  verified: "2026-09-27",
} as const;

export const COMMUNITY_CITY = "Las Vegas";
export const COMMUNITY_REGION = "Summerlin West";

export type AmenityCategoryId =
  | "healthcare"
  | "golf"
  | "parks"
  | "recreation"
  | "grocery"
  | "restaurants"
  | "cafes"
  | "pharmacies"
  | "shopping"
  | "fitness"
  | "parking";

export type CuratedPlace = {
  id: string;
  name: string;
  address: string;
  category: AmenityCategoryId;
  schemaType: string;
  note?: string;
};

/** Filter chip order for this 55+ active-adult community (schools omitted). */
export const AMENITY_CATEGORY_ORDER: AmenityCategoryId[] = [
  "healthcare",
  "golf",
  "parks",
  "recreation",
  "grocery",
  "restaurants",
  "cafes",
  "pharmacies",
  "shopping",
  "fitness",
  "parking",
];

export const AMENITY_CATEGORY_LABELS: Record<AmenityCategoryId, string> = {
  healthcare: "Healthcare",
  golf: "Golf",
  parks: "Parks",
  recreation: "Recreation",
  grocery: "Grocery",
  restaurants: "Restaurants",
  cafes: "Cafes",
  pharmacies: "Pharmacies",
  shopping: "Shopping",
  fitness: "Fitness",
  parking: "Parking",
};

/** Google Places (New) primary types per category — used when Maps API key is set. */
export const PLACES_PRIMARY_TYPES: Record<AmenityCategoryId, string[]> = {
  healthcare: ["hospital", "doctor"],
  golf: ["golf_course"],
  parks: ["park"],
  recreation: ["community_center", "sports_complex"],
  grocery: ["grocery_store", "supermarket"],
  restaurants: ["restaurant"],
  cafes: ["cafe", "coffee_shop"],
  pharmacies: ["pharmacy"],
  shopping: ["shopping_mall"],
  fitness: ["gym"],
  parking: ["parking"],
};

/**
 * Curated, verifiable destinations near Heritage at Stonebridge (Summerlin West, 89138).
 * Used for SSR copy, fallback map list, and ItemList schema.
 */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    id: "clubhouse",
    name: "Heritage at Stonebridge Clubhouse",
    address: community.clubhouseDisplay,
    category: "recreation",
    schemaType: "SportsActivityLocation",
    note: "On-site pools, fitness, pickleball, and bocce.",
  },
  {
    id: "bears-best",
    name: "Bear's Best Las Vegas",
    address: "1 Bears Best Dr, Las Vegas, NV 89138",
    category: "golf",
    schemaType: "GolfCourse",
  },
  {
    id: "tpc-las-vegas",
    name: "TPC Las Vegas",
    address: "9855 Canyon Run Dr, Las Vegas, NV 89144",
    category: "golf",
    schemaType: "GolfCourse",
  },
  {
    id: "angel-park",
    name: "Angel Park Golf Club",
    address: "1001 S Rampart Blvd, Las Vegas, NV 89145",
    category: "golf",
    schemaType: "GolfCourse",
  },
  {
    id: "summerlin-hospital",
    name: "Summerlin Hospital Medical Center",
    address: "657 Town Center Dr, Las Vegas, NV 89144",
    category: "healthcare",
    schemaType: "Hospital",
  },
  {
    id: "centennial-hills-hospital",
    name: "Centennial Hills Hospital Medical Center",
    address: "6900 N Durango Dr, Las Vegas, NV 89149",
    category: "healthcare",
    schemaType: "Hospital",
  },
  {
    id: "downtown-summerlin",
    name: "Downtown Summerlin",
    address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
    category: "shopping",
    schemaType: "ShoppingCenter",
    note: "Retail, dining, and Whole Foods Market.",
  },
  {
    id: "whole-foods-dt-summerlin",
    name: "Whole Foods Market (Downtown Summerlin)",
    address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
    category: "grocery",
    schemaType: "GroceryStore",
  },
  {
    id: "smiths-charleston",
    name: "Smith's Food and Drug",
    address: "8755 W Charleston Blvd, Las Vegas, NV 89117",
    category: "grocery",
    schemaType: "GroceryStore",
  },
  {
    id: "red-rock-visitor",
    name: "Red Rock Canyon National Conservation Area",
    address: "1000 Scenic Loop Dr, Las Vegas, NV 89161",
    category: "parks",
    schemaType: "Park",
  },
  {
    id: "discovery-park",
    name: "Discovery Park",
    address: "8155 Town Center Dr, Las Vegas, NV 89144",
    category: "parks",
    schemaType: "Park",
  },
  {
    id: "summerlin-library",
    name: "Summerlin Library",
    address: "1771 Inner Circle Dr, Las Vegas, NV 89134",
    category: "recreation",
    schemaType: "Library",
  },
  {
    id: "lifetime-summerlin",
    name: "Life Time (Summerlin)",
    address: "10721 W Charleston Blvd, Las Vegas, NV 89135",
    category: "fitness",
    schemaType: "ExerciseGym",
  },
];

export const APPROXIMATE_DRIVE_TIMES = [
  {
    destination: "Downtown Summerlin",
    time: "About 10–15 minutes by car (approximate, traffic varies).",
  },
  {
    destination: "Red Rock Canyon National Conservation Area",
    time: "About 15–20 minutes to the Scenic Drive area (approximate).",
  },
  {
    destination: "Las Vegas Strip (mid-Strip)",
    time: "About 25–35 minutes by car (approximate, traffic varies).",
  },
  {
    destination: "Harry Reid International Airport",
    time: "About 25–35 minutes by car (approximate, traffic varies).",
  },
] as const;

export function curatedPlacesForCategory(category: AmenityCategoryId): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((p) => p.category === category);
}

export function mapsEmbedFallbackUrl(): string {
  const { lat, lng } = COMMUNITY_MAP_CENTER;
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
}

export function directionsUrlForAddress(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

export function itemListJsonLd(places: CuratedPlace[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Nearby amenities near ${COMMUNITY_MAP_CENTER.name}`,
    itemListElement: places.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": place.schemaType,
        name: place.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.address,
          addressLocality: COMMUNITY_CITY,
          addressRegion: "NV",
          addressCountry: "US",
        },
      },
    })),
  });
}

export function communityPlaceJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": "https://www.heritagestonebridge.com/nearby-amenities#community",
    name: COMMUNITY_MAP_CENTER.name,
    description:
      "Guard-gated 55+ Lennar community in Summerlin West, Las Vegas (89138) with clubhouse recreation and Red Rock Canyon views.",
    address: {
      "@type": "PostalAddress",
      streetAddress: community.clubhouseStreet,
      addressLocality: COMMUNITY_CITY,
      addressRegion: "NV",
      postalCode: "89138",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMMUNITY_MAP_CENTER.lat,
      longitude: COMMUNITY_MAP_CENTER.lng,
    },
  });
}
