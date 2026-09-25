/**
 * Google Business Profile NAP — single source of truth.
 * Keep visible text and LocalBusiness JSON-LD in exact lockstep with GBP.
 *
 * Friday hours in the GBP paste showed 9:00 AM–6:00 AM. That overnight window
 * is treated as the 6:00 PM close that matches Monday–Thursday.
 */
export const GBP_BUSINESS_NAME = "Heritage Stonebridge | Homes By Dr. Jan Duffy";

export const GBP_DESCRIPTION =
  "Your local guide to Heritage at Stonebridge — Lennar's guard-gated 55+ community in Summerlin West (89138). Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties (NV License S.0197614.LLC), helps buyers and sellers with resale and new-build homes, HOA questions, and fair comparisons to Sun City Summerlin and other Summerlin active-adult neighborhoods. Downsizing, relocating to Las Vegas, or selling inside Heritage? Get MLS-backed pricing, private tours, and straightforward advice.";

export const business = {
  name: GBP_BUSINESS_NAME,
  alternateName: [
    "Heritage at Stonebridge",
    "Heritage Stonebridge",
    "Homes By Dr. Jan Duffy",
    "Dr. Jan Duffy Real Estate",
  ],
  category: "Real estate agent",
  description: GBP_DESCRIPTION,
  telephone: "+1-702-789-6561",
  telephoneDisplay: "(702) 789-6561",
  telephoneHref: "tel:+17027896561",
  smsHref: "sms:+17027896561",
  email: "DrDuffySells@HeritageStonebridge.com",
  website: "https://heritagestonebridge.com",
  canonicalUrl: "https://heritagestonebridge.com",
  tourUrl: "https://drjanduffy.realscout.com/onboarding",
  license: "S.0197614.LLC",
  broker: "Berkshire Hathaway HomeServices Nevada Properties",
  streetAddress: "Crossbridge Dr",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89138",
  addressCountry: "US",
  addressDisplay: "Crossbridge Dr, Las Vegas, NV 89138",
  geo: {
    latitude: "36.1716",
    longitude: "-115.3384",
  },
  hoursDisplay: "Mon-Fri: 9:00 AM–6:00 PM | Sat: 10:00 AM–4:30 PM | Sun: Closed",
  hoursLines: [
    "Monday: 9:00 AM–6:00 PM",
    "Tuesday: 9:00 AM–6:00 PM",
    "Wednesday: 9:00 AM–6:00 PM",
    "Thursday: 9:00 AM–6:00 PM",
    "Friday: 9:00 AM–6:00 PM",
    "Saturday: 10:00 AM–4:30 PM",
    "Sunday: Closed",
  ],
  mapsUrl: "https://maps.google.com/?q=Crossbridge+Dr,+Las+Vegas,+NV+89138",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Crossbridge+Dr,+Las+Vegas,+NV+89138&output=embed",
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Heritage+Stonebridge+Homes+By+Dr.+Jan+Duffy+Las+Vegas+NV+89138",
} as const;

export const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "10:00",
    closes: "16:30",
  },
] as const;

export const specialOpeningHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    validFrom: "2026-07-03",
    validThrough: "2026-07-03",
    opens: "00:00",
    closes: "00:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    validFrom: "2026-07-04",
    validThrough: "2026-07-04",
    opens: "00:00",
    closes: "00:00",
  },
] as const;

export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: business.streetAddress,
  addressLocality: business.addressLocality,
  addressRegion: business.addressRegion,
  postalCode: business.postalCode,
  addressCountry: business.addressCountry,
} as const;

export const areaServed = [
  {
    "@type": "PostalCode",
    name: "89138",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
  {
    "@type": "Place",
    name: "Summerlin West",
    containedInPlace: {
      "@type": "City",
      name: "Las Vegas",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
  {
    "@type": "City",
    name: "Las Vegas",
    containedInPlace: {
      "@type": "State",
      name: "Nevada",
    },
  },
] as const;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "@id": "https://heritagestonebridge.com/#localbusiness",
  name: business.name,
  alternateName: [...business.alternateName],
  description: business.description,
  url: business.canonicalUrl,
  telephone: business.telephone,
  email: business.email,
  image: [
    "https://heritagestonebridge.com/images/heritage-stonebridge-hero.jpg",
    "https://heritagestonebridge.com/images/clubhouse.jpg",
    "https://heritagestonebridge.com/images/pool-spa.jpg",
    "https://heritagestonebridge.com/images/contact-office.jpg",
  ],
  logo: "https://heritagestonebridge.com/images/heritage-stonebridge-logo.jpg",
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.latitude,
    longitude: business.geo.longitude,
  },
  hasMap: business.mapsUrl,
  openingHoursSpecification,
  specialOpeningHoursSpecification,
  areaServed,
  priceRange: "$$",
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Wheelchair accessible parking lot",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Wheelchair accessible entrance",
      value: true,
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: business.telephone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: business.telephone,
      contactType: "sales",
      url: business.smsHref,
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional License",
    recognizedBy: {
      "@type": "Organization",
      name: "Nevada Real Estate Division",
    },
    identifier: business.license,
  },
  parentOrganization: {
    "@type": "Organization",
    name: business.broker,
  },
  sameAs: [
    "https://www.facebook.com/DrJanDuffyRealEstate",
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.instagram.com/drjanduffylasvegas",
    business.mapsUrl,
    business.reviewsUrl,
  ],
} as const;

export const LOCAL_BUSINESS_JSON_LD = JSON.stringify(localBusinessJsonLd);
