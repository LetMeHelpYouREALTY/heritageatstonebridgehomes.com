export type CommunityCard = {
  heading: string;
  description: string;
  items?: string[];
  price?: string;
  href: string;
  linkLabel: string;
};

export const PREMIER_CARDS: CommunityCard[] = [
  {
    heading: "Heritage at Stonebridge",
    description: "Lennar's newest 55+ community in Summerlin with Everything's Included® features.",
    items: ["Three home collections", "Resort-style amenities", "Red Rock Canyon views", "Gated community"],
    price: "Starting from $464,990",
    href: "/homes-for-sale-stonebridge-summerlin",
    linkLabel: "View Stonebridge Homes →",
  },
  {
    heading: "Sun City Summerlin",
    description: "Established 55+ golf community with recreation centers and mature landscaping.",
    items: ["Multiple golf courses", "Recreation centers", "Active social clubs", "Mature landscaping"],
    price: "$500,000 - $1,500,000",
    href: "/sun-city-del-webb-real-estate",
    linkLabel: "View Sun City Homes →",
  },
  {
    heading: "The Ridges",
    description: "Custom hilltop estates with exclusive golf access in Summerlin West.",
    items: ["Custom luxury homes", "Exclusive golf course", "Mountain views", "Private amenities"],
    price: "$1,000,000 - $5,000,000+",
    href: "/luxury-homes",
    linkLabel: "View Ridges Homes →",
  },
  {
    heading: "Siena",
    description: "Italian-inspired gated homes and resort amenities in Summerlin.",
    items: ["Tuscan-inspired architecture", "Resort-style amenities", "Spa and wellness center", "Private social clubs"],
    price: "$600,000 - $2,000,000+",
    href: "/luxury-homes",
    linkLabel: "View Siena Homes →",
  },
  {
    heading: "Del Webb Communities",
    description: "Del Webb plans with clubhouses, fitness, and maintenance-free exteriors.",
    items: ["Quality construction", "Active lifestyle focus", "Social activities", "Various price points"],
    price: "$400,000 - $1,500,000",
    href: "/sun-city-del-webb-real-estate",
    linkLabel: "View Del Webb Homes →",
  },
  {
    heading: "Red Rock Country Club",
    description: "Golf-course homes with Red Rock Canyon as the backdrop.",
    items: ["Private golf course", "Country club membership", "Luxury amenities", "Mountain views"],
    price: "$800,000 - $3,000,000+",
    href: "/golf-course-homes",
    linkLabel: "View Country Club Homes →",
  },
];

export const VALLEY_CARDS: CommunityCard[] = [
  PREMIER_CARDS[0],
  PREMIER_CARDS[1],
  {
    heading: "Sun City Anthem",
    description: "Henderson 55+ community with golf courses, recreation centers, and clubhouses.",
    items: ["Multiple golf courses", "Recreation centers", "Active social clubs", "Mature landscaping"],
    price: "$500,000 - $1,500,000",
    href: "/sun-city-del-webb-real-estate",
    linkLabel: "View Sun City Anthem →",
  },
  PREMIER_CARDS[2],
  PREMIER_CARDS[3],
  PREMIER_CARDS[5],
];

export const SUMMERLIN_CARDS: CommunityCard[] = [
  PREMIER_CARDS[0],
  PREMIER_CARDS[1],
  PREMIER_CARDS[2],
  PREMIER_CARDS[3],
  PREMIER_CARDS[5],
  {
    heading: "The Arbors",
    description: "Parks, trails, and recreation centers in a master-planned Summerlin village.",
    items: ["Parks and trails", "Recreation centers", "Community events", "Convenient location"],
    price: "$400,000 - $1,200,000",
    href: "/summerlin-homes",
    linkLabel: "View Arbors Homes →",
  },
];

export const LUXURY_CARDS: CommunityCard[] = [
  PREMIER_CARDS[2],
  PREMIER_CARDS[3],
  PREMIER_CARDS[5],
  {
    heading: "Heritage at Stonebridge",
    description: "New construction with Everything's Included® features and resort amenities.",
    items: ["New construction", "Everything's Included®", "Smart home technology", "Gated community"],
    price: "$464,990 - $1,200,000+",
    href: "/homes-for-sale-stonebridge-summerlin",
    linkLabel: "View Stonebridge Homes →",
  },
  {
    heading: "MacDonald Ranch",
    description: "Henderson golf-course community with custom homes and private amenities.",
    items: ["Custom luxury homes", "Golf course access", "Private amenities", "Mountain views"],
    price: "$700,000 - $2,500,000+",
    href: "/henderson-real-estate",
    linkLabel: "View MacDonald Ranch Homes →",
  },
  {
    heading: "Seven Hills",
    description: "Gated custom estates with mountain views in Henderson.",
    items: ["Gated community", "Custom estates", "Mountain views", "Private amenities"],
    price: "$800,000 - $3,000,000+",
    href: "/gated-communities",
    linkLabel: "View Seven Hills Homes →",
  },
];

export const HENDERSON_CARDS: CommunityCard[] = [
  {
    heading: "Sun City Anthem",
    description: "Premier 55+ community with golf courses, recreation centers, and clubhouses.",
    items: ["Multiple golf courses", "Recreation centers and pools", "Extensive social clubs", "Mature landscaping"],
    price: "$500,000 - $1,500,000",
    href: "/sun-city-del-webb-real-estate",
    linkLabel: "View Sun City Anthem →",
  },
  {
    heading: "MacDonald Ranch",
    description: "Golf-course community with custom homes and private amenities.",
    items: ["Custom luxury homes", "Golf course access", "Private amenities", "Mountain views"],
    price: "$700,000 - $2,500,000+",
    href: "/henderson-real-estate",
    linkLabel: "View MacDonald Ranch →",
  },
  {
    heading: "Seven Hills",
    description: "Gated custom estates with mountain views in Henderson.",
    items: ["Gated community", "Custom estates", "Mountain views", "Private amenities"],
    price: "$800,000 - $3,000,000+",
    href: "/gated-communities",
    linkLabel: "View Seven Hills →",
  },
  {
    heading: "Green Valley",
    description: "Mature trees, parks, and recreation centers along Henderson residential streets.",
    items: ["Mature landscaping", "Parks and trails", "Nearby medical offices", "Recreation centers"],
    price: "$400,000 - $1,200,000",
    href: "/henderson-real-estate",
    linkLabel: "View Green Valley →",
  },
  {
    heading: "Inspirada",
    description: "Master-planned streets with contemporary homes, parks, and recreation.",
    items: ["Modern design", "Contemporary amenities", "Parks and trails", "New construction"],
    price: "$500,000 - $1,500,000",
    href: "/henderson-active-adult-communities",
    linkLabel: "View Inspirada →",
  },
  {
    heading: "Anthem",
    description: "Master-planned golf, parks, and resort amenities in Henderson.",
    items: ["Golf courses", "Parks and trails", "Resort amenities", "Community events"],
    price: "$600,000 - $2,000,000",
    href: "/henderson-active-adult-communities",
    linkLabel: "View Anthem →",
  },
];

export const CONDO_CARDS: CommunityCard[] = [
  {
    heading: "The Martin at CityCenter",
    description: "High-rise condos with Strip views, fitness, spa, and rooftop pool.",
    items: ["Strip views and city lights", "Resort-style amenities", "Concierge services", "Rooftop pool and deck"],
    price: "$500,000 - $2,000,000+",
    href: "/55-plus-condos-las-vegas",
    linkLabel: "View Strip Condos →",
  },
  {
    heading: "Turnberry Place",
    description: "Condos with golf-course views, fitness, pool, and concierge service.",
    items: ["Golf course views", "Fitness center", "Pool and spa", "Concierge services"],
    price: "$400,000 - $1,500,000",
    href: "/55-plus-condos-las-vegas",
    linkLabel: "View Turnberry Place →",
  },
  {
    heading: "The Signature at MGM Grand",
    description: "Condos with Strip access, fitness, pool, and concierge service.",
    items: ["Strip access", "Resort amenities", "Fitness center", "Pool and spa"],
    price: "$600,000 - $2,500,000+",
    href: "/55-plus-condos-las-vegas",
    linkLabel: "View Signature Condos →",
  },
  {
    heading: "The Residences at Mandarin Oriental",
    description: "High-rise condos with Strip views, fitness, pool, and concierge service.",
    items: ["Strip views", "Five-star amenities", "Concierge services", "Fitness center"],
    price: "$800,000 - $5,000,000+",
    href: "/55-plus-condos-las-vegas",
    linkLabel: "View Mandarin Oriental →",
  },
  {
    heading: "The Residences at Wynn",
    description: "Condos with Strip views, resort amenities, and concierge service.",
    items: ["Strip views", "Resort amenities", "Concierge services", "Pool and spa"],
    price: "$600,000 - $2,500,000+",
    href: "/55-plus-condos-las-vegas",
    linkLabel: "View Wynn Residences →",
  },
  {
    heading: "Bellagio Residences",
    description: "Condos with Strip views, fitness, pool, and concierge service.",
    items: ["Strip views", "Resort amenities", "Fitness center", "Pool and spa"],
    price: "$600,000 - $2,500,000+",
    href: "/55-plus-condos-las-vegas",
    linkLabel: "View Bellagio Residences →",
  },
];

export const BOULDER_CARDS: CommunityCard[] = [
  {
    heading: "Historic Downtown",
    description: "Historic district with shops, restaurants, and original Hoover Dam worker homes.",
    href: "/boulder-city-homes",
    linkLabel: "View Downtown Homes →",
  },
  {
    heading: "Eldorado Valley",
    description: "Newer streets with modern homes and mountain views.",
    href: "/boulder-city-homes",
    linkLabel: "View Eldorado Valley Homes →",
  },
  {
    heading: "Lake Mead Estates",
    description: "Homes near Lake Mead recreation with mountain and water views.",
    href: "/boulder-city-homes",
    linkLabel: "View Lake Mead Estates →",
  },
  {
    heading: "Sunrise Hills",
    description: "Residential streets with mature trees and mountain views.",
    href: "/boulder-city-homes",
    linkLabel: "View Sunrise Hills Homes →",
  },
  {
    heading: "Boulder Creek Golf Course",
    description: "Golf-course homes with resort amenities in Boulder City.",
    href: "/golf-course-homes",
    linkLabel: "View Golf Course Homes →",
  },
  {
    heading: "Desert Hills",
    description: "Custom homes with desert landscaping and mountain views.",
    href: "/boulder-city-homes",
    linkLabel: "View Desert Hills Homes →",
  },
];

export const NEW_BUILD_CARDS: CommunityCard[] = [
  {
    heading: "Heritage at Stonebridge",
    description: "Lennar's newest 55+ community in Summerlin with Everything's Included® features.",
    items: [
      "Three home collections (Cromwell, Stirling, Evander)",
      "8,000 sq ft clubhouse with fitness center",
      "Resort-style pool and heated lap pool",
      "Pickleball and bocce courts",
    ],
    price: "Starting from $464,990",
    href: "/homes-for-sale-stonebridge-summerlin",
    linkLabel: "View Stonebridge Homes →",
  },
  {
    heading: "New Del Webb Communities",
    description: "Del Webb plans with contemporary clubhouses, fitness, and social spaces.",
    items: ["Modern clubhouse designs", "Updated fitness centers", "Contemporary social spaces", "Latest technology"],
    price: "Various price points",
    href: "/sun-city-del-webb-real-estate",
    linkLabel: "View Del Webb Homes →",
  },
  {
    heading: "Upcoming Developments",
    description: "New 55+ inventory planned for Henderson and Northwest Las Vegas.",
    items: ["Pre-construction opportunities", "Customizable floor plans", "Early buyer incentives", "Preferred lot selection"],
    price: "Coming soon",
    href: "/new-55-plus-communities-las-vegas",
    linkLabel: "Get Early Access →",
  },
];

export const AFFORDABLE_CARDS: CommunityCard[] = [
  {
    heading: "Heritage at Stonebridge",
    description: "Starting at $464,990 — new construction with Lennar Everything's Included® features.",
    items: ["8,000 sq ft clubhouse", "Resort-style pool and spa", "Pickleball and bocce courts", "Gated community"],
    href: "/homes-for-sale-stonebridge-summerlin",
    linkLabel: "View Stonebridge Homes →",
  },
  {
    heading: "Del Webb Communities",
    description: "Various price points — established clubhouses, golf, and fitness centers.",
    items: ["Golf course communities", "Fitness centers", "Social clubs", "Maintenance-free exteriors"],
    href: "/sun-city-del-webb-real-estate",
    linkLabel: "View Del Webb Homes →",
  },
  {
    heading: "Sun City Resale",
    description: "Resale inventory in Sun City Summerlin with mature amenities.",
    items: ["Mature landscaping", "Established amenities", "Active social clubs", "Proven resale market"],
    href: "/sun-city-del-webb-real-estate",
    linkLabel: "View Sun City Resale →",
  },
];

export const RENTAL_CARDS: CommunityCard[] = [
  {
    heading: "Sun City Summerlin",
    description: "Owner rentals in an established 55+ golf community with recreation centers.",
    items: ["Multiple golf courses", "Recreation centers", "Active social clubs", "Owner rentals available"],
    price: "$2,500 - $4,500/month",
    href: "/sun-city-del-webb-real-estate",
    linkLabel: "View Rental Options →",
  },
  {
    heading: "Del Webb Communities",
    description: "Owner rentals across Del Webb plans with clubhouses and fitness.",
    items: ["Quality construction", "Active lifestyle focus", "Social activities", "Owner rental policies"],
    price: "$2,000 - $5,000/month",
    href: "/sun-city-del-webb-real-estate",
    linkLabel: "View Del Webb Rentals →",
  },
  {
    heading: "Siena",
    description: "Owner rentals in a gated Italian-inspired Summerlin community.",
    items: ["Tuscan-inspired architecture", "Resort-style amenities", "Spa and wellness center", "Private social clubs"],
    price: "$3,500 - $6,000/month",
    href: "/luxury-homes",
    linkLabel: "View Siena Rentals →",
  },
  {
    heading: "Red Rock Country Club",
    description: "Limited owner rentals on the golf course near Red Rock Canyon.",
    items: ["Private golf course", "Country club membership", "Luxury amenities", "Mountain views"],
    price: "$4,000 - $8,000/month",
    href: "/golf-course-homes",
    linkLabel: "View Country Club Rentals →",
  },
  {
    heading: "MacDonald Ranch",
    description: "Owner rentals in a Henderson golf-course community.",
    items: ["Custom luxury homes", "Golf course access", "Private amenities", "Mountain views"],
    price: "$3,000 - $7,000/month",
    href: "/henderson-real-estate",
    linkLabel: "View MacDonald Ranch Rentals →",
  },
  {
    heading: "Seven Hills",
    description: "Limited owner rentals in a gated Henderson community.",
    items: ["Gated community", "Custom estates", "Mountain views", "Private amenities"],
    price: "$3,500 - $8,000/month",
    href: "/gated-communities",
    linkLabel: "View Seven Hills Rentals →",
  },
];

export const COLLECTION_CARDS: CommunityCard[] = [
  {
    heading: "Cromwell Collection",
    description: "Starting at $464,990 — single-story plans for lock-and-leave living.",
    items: [
      "1,232–1,456 sq ft single-story homes",
      "Open concept living areas",
      "Primary suite with walk-in closet",
      "Covered patio and 2-car garage",
    ],
    price: "Starting from $464,990",
    href: "/homes-for-sale-stonebridge-summerlin",
    linkLabel: "View Cromwell Homes →",
  },
  {
    heading: "Stirling Collection",
    description: "Larger single-story layouts with expanded living and outdoor space.",
    items: [
      "1,747–2,236 sq ft single-story homes",
      "Expanded living spaces",
      "Larger primary suite",
      "Extended covered outdoor living",
    ],
    price: "Starting from $675,990",
    href: "/homes-for-sale-stonebridge-summerlin",
    linkLabel: "View Stirling Homes →",
  },
  {
    heading: "Evander Collection",
    description: "Largest Heritage at Stonebridge plans with gourmet kitchens and great rooms.",
    items: [
      "2,515–2,873 sq ft single-story homes",
      "Spacious great rooms",
      "Gourmet kitchen",
      "Large covered patio",
    ],
    price: "Premium pricing",
    href: "/homes-for-sale-stonebridge-summerlin",
    linkLabel: "View Evander Homes →",
  },
];

export const COMMUNITY_GRIDS = {
  premier: PREMIER_CARDS,
  valley: VALLEY_CARDS,
  summerlin: SUMMERLIN_CARDS,
  luxury: LUXURY_CARDS,
  henderson: HENDERSON_CARDS,
  condos: CONDO_CARDS,
  boulder: BOULDER_CARDS,
  newBuilds: NEW_BUILD_CARDS,
  affordable: AFFORDABLE_CARDS,
  rentals: RENTAL_CARDS,
  collections: COLLECTION_CARDS,
} as const;

export type CommunityGridVariant = keyof typeof COMMUNITY_GRIDS;
