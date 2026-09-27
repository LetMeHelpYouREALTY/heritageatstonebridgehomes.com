import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AmenityMap } from "~/components/amenities/AmenityMap";
import { ContactStrip } from "~/components/community/ContactStrip";
import { BreadcrumbNavigation } from "~/components/seo/BreadcrumbNavigation";
import { business, localBusinessJsonLd } from "~/config/business";
import {
  APPROXIMATE_DRIVE_TIMES,
  COMMUNITY_CITY,
  COMMUNITY_MAP_CENTER,
  COMMUNITY_REGION,
  CURATED_NEARBY_PLACES,
  communityPlaceJsonLd,
  curatedPlacesForCategory,
  directionsUrlForAddress,
  itemListJsonLd,
  type AmenityCategoryId,
} from "~/config/amenity-map";
import { faqJsonLd } from "~/config/community";

const PAGE_URL = "https://www.heritagestonebridge.com/nearby-amenities";

const faqs = [
  {
    question: "What grocery stores are near Heritage at Stonebridge?",
    answer:
      "Whole Foods Market at Downtown Summerlin and Smith's on West Charleston Boulevard are common stops for Summerlin West buyers; both are a short drive from the 89138 area (approximate drive time varies with traffic).",
  },
  {
    question: "How far is Heritage at Stonebridge from the Las Vegas Strip?",
    answer:
      "From the clubhouse at 930 Silverfir Ct, the mid-Strip is typically about 25–35 minutes by car in normal traffic—approximate and varies by time of day.",
  },
  {
    question: "Are there hospitals near Heritage at Stonebridge?",
    answer:
      "Summerlin Hospital Medical Center on Town Center Drive and Centennial Hills Hospital on North Durango Drive serve the northwest valley; ask Dr. Jan Duffy for the route you would use from your lot.",
  },
  {
    question: "Where can I golf near Heritage at Stonebridge?",
    answer:
      "Bear's Best Las Vegas is in the 89138 zip code; TPC Las Vegas and Angel Park Golf Club are also in the Summerlin area with public tee times.",
  },
  {
    question: "How close is Red Rock Canyon?",
    answer:
      "Red Rock Canyon National Conservation Area is roughly 15–20 minutes from Summerlin West by car to the Scenic Loop area—approximate, depending on your starting gate and traffic.",
  },
  {
    question: "What is Downtown Summerlin?",
    answer:
      "Downtown Summerlin is a master-planned retail and dining district on Festival Plaza Drive with shops, restaurants, and services many Heritage owners use weekly.",
  },
  {
    question: "Who helps buyers tour Heritage at Stonebridge?",
    answer: `Dr. Jan Duffy (${business.telephoneDisplay}) registers visitors at the staffed gate and tours resale and new-build homes in this Lennar 55+ community.`,
  },
] as const;

const writtenSections: {
  id: AmenityCategoryId | "commute";
  title: string;
  body: string;
}[] = [
  {
    id: "healthcare",
    title: "Healthcare near Heritage at Stonebridge",
    body:
      "Summerlin Hospital Medical Center on Town Center Drive and Centennial Hills Hospital on North Durango Drive are the full-service hospitals northwest valley residents reference most often. Use the map to compare drive routes from the clubhouse at 930 Silverfir Ct.",
  },
  {
    id: "golf",
    title: "Golf around Summerlin West",
    body:
      "Bear's Best Las Vegas sits in the same 89138 zip code as Heritage at Stonebridge. TPC Las Vegas and Angel Park Golf Club add public and resort-style options minutes from Summerlin West.",
  },
  {
    id: "parks",
    title: "Parks and outdoor recreation",
    body:
      "Red Rock Canyon National Conservation Area is the headline outdoor destination west of Summerlin. Discovery Park and the Summerlin Library campus add trails, programming, and meeting space closer to Town Center Drive.",
  },
  {
    id: "recreation",
    title: "On-site and community recreation",
    body:
      "Inside Heritage at Stonebridge, the HOA clubhouse at 930 Silverfir Ct includes pools, fitness, pickleball, and bocce per the community site. Owners also use Downtown Summerlin and Summerlin Library for events and classes.",
  },
  {
    id: "grocery",
    title: "Grocery and everyday errands",
    body:
      "Whole Foods Market at Downtown Summerlin and Smith's Food and Drug on West Charleston Boulevard cover weekly shopping for many 55+ households in Summerlin West.",
  },
  {
    id: "restaurants",
    title: "Dining options",
    body:
      "Restaurant rows at Downtown Summerlin and along Charleston Boulevard give Heritage owners sit-down and quick-service choices without driving to the Strip.",
  },
  {
    id: "shopping",
    title: "Shopping and services",
    body:
      "Downtown Summerlin bundles apparel, home goods, and services in one master-planned center. Use the map for pharmacies and specialty retail near 89138.",
  },
  {
    id: "commute",
    title: "Approximate drive times from Heritage at Stonebridge",
    body:
      "Times below are approximate and change with traffic. They start from the clubhouse area in Summerlin West.",
  },
];

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: business.website,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Nearby Amenities",
      item: PAGE_URL,
    },
  ],
});

const agentAreaServedJsonLd = JSON.stringify({
  ...localBusinessJsonLd,
  "@id": "https://heritagestonebridge.com/#localbusiness",
  areaServed: [
    {
      "@type": "Place",
      name: COMMUNITY_MAP_CENTER.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: COMMUNITY_CITY,
        addressRegion: "NV",
        postalCode: "89138",
      },
    },
    ...(localBusinessJsonLd.areaServed as readonly object[]),
  ],
});

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqJsonLd(faqs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={itemListJsonLd(CURATED_NEARBY_PLACES)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={communityPlaceJsonLd()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbJsonLd} />
      <script type="application/ld+json" dangerouslySetInnerHTML={agentAreaServedJsonLd} />

      <div class="bg-hsb-cream py-12">
        <div class="mx-auto max-w-6xl px-4">
          <BreadcrumbNavigation
            items={[
              { name: "Home", url: "/", position: 1 },
              { name: "Nearby Amenities", position: 2 },
            ]}
          />
          <h1 class="font-display text-4xl text-hsb-dark">
            Nearby Amenities in {COMMUNITY_MAP_CENTER.name}, {COMMUNITY_CITY}
          </h1>
          <p class="mt-4 max-w-3xl text-lg text-hsb-text">
            {COMMUNITY_REGION} sits in zip code 89138 with Red Rock Canyon to the west and Downtown
            Summerlin to the east. This guide lists verified destinations buyers ask about before
            they tour the guard-gated 55+ community.
          </p>
        </div>
      </div>

      <section class="bg-white py-12">
        <div class="mx-auto max-w-6xl px-4">
          <h2 class="font-display text-2xl text-hsb-dark">Interactive amenity map</h2>
          <p class="mt-2 text-hsb-text">
            Center point: {COMMUNITY_MAP_CENTER.address} (clubhouse). Map coordinates sourced from{" "}
            {COMMUNITY_MAP_CENTER.source} on {COMMUNITY_MAP_CENTER.verified}.
          </p>
          <div class="mt-6">
            <AmenityMap showCuratedList={true} />
          </div>
        </div>
      </section>

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto max-w-6xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Hyperlocal guide by category</h2>
          <div class="mt-10 space-y-12">
            {writtenSections.map((section) => (
              <article key={section.id} class="rounded-2xl border border-hsb-border bg-white p-6 shadow-sm">
                <h3 class="font-display text-2xl text-hsb-primary">{section.title}</h3>
                <p class="mt-3 text-hsb-text">{section.body}</p>
                {section.id === "commute" ? (
                  <ul class="mt-4 list-disc space-y-2 pl-5 text-hsb-text">
                    {APPROXIMATE_DRIVE_TIMES.map((row) => (
                      <li key={row.destination}>
                        <strong>{row.destination}:</strong> {row.time}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul class="mt-4 space-y-2">
                    {curatedPlacesForCategory(section.id as AmenityCategoryId).map((place) => (
                      <li key={place.id} class="text-sm text-hsb-text">
                        <span class="font-semibold text-hsb-dark">{place.name}</span> — {place.address}.{" "}
                        <a
                          href={directionsUrlForAddress(place.address)}
                          class="text-hsb-primary underline-offset-2 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Directions
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="mx-auto max-w-3xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Nearby amenities FAQ</h2>
          <dl class="mt-8 space-y-6">
            {faqs.map((item) => (
              <div key={item.question}>
                <dt class="font-semibold text-hsb-dark">{item.question}</dt>
                <dd class="mt-2 text-hsb-text">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactStrip />
    </>
  );
});

export const head: DocumentHead = {
  title: `Nearby Amenities in Heritage at Stonebridge, Las Vegas | Dr. Jan Duffy`,
  meta: [
    {
      name: "description",
      content:
        "Map and guide to healthcare, golf, parks, grocery, and shopping near Heritage at Stonebridge in Summerlin West (89138). Hyperlocal amenity answers from Dr. Jan Duffy — call (702) 789-6561.",
    },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: `Nearby Amenities in Heritage at Stonebridge, Las Vegas`,
    },
    {
      property: "og:description",
      content:
        "Interactive map and verified nearby places for Heritage at Stonebridge — Summerlin West 55+ living.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: PAGE_URL },
    { property: "og:site_name", content: "Heritage at Stonebridge" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: `Nearby Amenities in Heritage at Stonebridge, Las Vegas`,
    },
    {
      name: "twitter:description",
      content:
        "Healthcare, golf, parks, and grocery near Heritage at Stonebridge in Summerlin West.",
    },
    { name: "author", content: "Dr. Jan Duffy" },
  ],
  links: [{ rel: "canonical", href: PAGE_URL }],
};
