import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutHeroWidget } from "~/components/real-estate/RealScoutHeroWidget";
import { openingHoursSpecification } from "~/config/business";

export default component$(() => {
  // Inject JSON-LD structured data
  useTask$(() => {
    if (typeof document !== 'undefined') {
      // Primary Organization Schema - September 2025 Google "Perspective" Compliant
      const organizationSchema = document.createElement('script');
      organizationSchema.type = 'application/ld+json';
      organizationSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "@id": "https://heritagestonebridge.com/#organization",
        "name": "Heritage Stonebridge | Homes By Dr. Jan Duffy",
        "alternateName": [
          "Heritage at Stonebridge", 
          "Heritage Stonebridge",
          "Homes By Dr. Jan Duffy",
          "Dr. Jan Duffy Real Estate", 
          "Stonebridge Real Estate"
        ],
        "description": "Your local guide to Heritage at Stonebridge — Lennar's guard-gated 55+ community in Summerlin West (89138). Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties (NV License S.0197614.LLC), helps buyers and sellers with resale and new-build homes, HOA questions, and fair comparisons to Sun City Summerlin and other Summerlin active-adult neighborhoods.",
        "url": "https://heritagestonebridge.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://heritagestonebridge.com/images/heritage-stonebridge-logo.jpg",
          "width": 600,
          "height": 300
        },
        "image": {
          "@type": "ImageObject", 
          "url": "https://heritagestonebridge.com/images/dr-jan-duffy-headshot.jpg",
          "width": 400,
          "height": 400
        },
        "telephone": "+1-702-789-6561",
        "email": "DrDuffySells@HeritageStonebridge.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Crossbridge Dr",
          "addressLocality": "Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89138",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "36.1716",
          "longitude": "-115.3384"
        },
        "openingHoursSpecification": openingHoursSpecification,
        "areaServed": [
          {
            "@type": "PostalCode",
            "name": "89138",
            "addressLocality": "Las Vegas",
            "addressRegion": "NV"
          },
          {
            "@type": "Place",
            "name": "Summerlin West",
            "containedInPlace": {
              "@type": "City",
              "name": "Las Vegas"
            }
          },
          {
            "@type": "City",
            "name": "Las Vegas",
            "containedInPlace": {
              "@type": "State",
              "name": "Nevada"
            }
          },
          {
            "@type": "City",
            "name": "Summerlin", 
            "containedInPlace": {
              "@type": "State",
              "name": "Nevada"
            }
          }
        ],
        "serviceType": [
          "Luxury Home Sales",
          "New Construction Homes", 
          "Investment Properties",
          "Heritage Community Specialist",
          "Stonebridge Expert",
          "Red Rock Canyon Properties",
          "55+ Community Specialist",
          "Active Adult Living"
        ],
        "knowsAbout": [
          "Stonebridge Community",
          "Heritage Homes",
          "Red Rock Canyon Real Estate",
          "Summerlin Properties",
          "Las Vegas Luxury Market",
          "Nevada Real Estate Law",
          "55+ Communities",
          "Active Adult Living",
          "Gated Communities",
          "Investment Analysis"
        ],
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional License",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Nevada Real Estate Division"
          },
          "identifier": "S.0197614.LLC"
        },
        "sameAs": [
          "https://www.facebook.com/DrJanDuffyRealEstate",
          "https://www.linkedin.com/in/drjanduffy",
          "https://www.instagram.com/drjanduffylasvegas"
        ],
        "makesOffer": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real Estate Services",
            "description": "Comprehensive real estate services including buying, selling, and investment consultation"
          },
          "areaServed": {
            "@type": "State",
            "name": "Nevada"
          }
        }
      });

      // Person Schema for Dr. Jan Duffy - Advanced Expertise Signals
      const personSchema = document.createElement('script');
      personSchema.type = 'application/ld+json';
      personSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://heritagestonebridge.com/about#person",
        "name": "Dr. Jan Duffy",
        "honorificPrefix": "Dr.",
        "givenName": "Jan",
        "familyName": "Duffy",
        "jobTitle": "Real Estate Agent",
        "description": "Licensed Nevada real estate professional with doctorate degree and 500+ successful transactions. Expert in Las Vegas luxury market, investment properties, and first-time homebuyer programs.",
        "image": {
          "@type": "ImageObject",
          "url": "https://heritagestonebridge.com/images/dr-jan-duffy-professional.jpg",
          "width": 400,
          "height": 400
        },
        "telephone": "+1-702-789-6561",
        "email": "DrDuffySells@HeritageStonebridge.com",
        "url": "https://heritagestonebridge.com/about",
        "worksFor": {
          "@type": "RealEstateAgent",
          "@id": "https://heritagestonebridge.com/#organization"
        },
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Real Estate Agent",
          "occupationLocation": {
            "@type": "State",
            "name": "Nevada"
          },
          "skills": [
            "Real Estate Sales",
            "Market Analysis", 
            "Investment Consulting",
            "Luxury Home Marketing",
            "Client Relations",
            "55+ Community Specialist",
            "Active Adult Living Expert"
          ]
        },
        "knowsAbout": [
          "Las Vegas Real Estate",
          "Nevada Property Law",
          "Investment Analysis",
          "Market Trends",
          "Luxury Properties",
          "Stonebridge Community",
          "Red Rock Canyon Properties"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Doctorate Degree",
            "educationalLevel": "Doctoral"
          },
          {
            "@type": "EducationalOccupationalCredential", 
            "credentialCategory": "Real Estate License",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Nevada Real Estate Division"
            },
            "identifier": "S.0197614.LLC"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Las Vegas",
          "addressRegion": "NV", 
          "addressCountry": "US"
        },
        "sameAs": [
          "https://www.linkedin.com/in/drjanduffy",
          "https://www.facebook.com/DrJanDuffyRealEstate"
        ]
      });

      // FAQ Schema for Homepage
      const faqSchema = document.createElement('script');
      faqSchema.type = 'application/ld+json';
      faqSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes Heritage at Stonebridge special?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Heritage at Stonebridge is a premier 55+ active adult community in Summerlin, Las Vegas, featuring luxury homes, resort-style amenities, and stunning mountain views of Red Rock Canyon. The gated community offers resort-style amenities including clubhouse, swimming pools, fitness center, pickleball courts, and walking trails."
            }
          },
          {
            "@type": "Question",
            "name": "What types of homes are available in Heritage at Stonebridge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Heritage at Stonebridge offers three distinct home collections: Cromwell (1,232-1,456 sq ft), Stirling (1,456-2,100 sq ft), and Evander (2,100-2,873 sq ft). All homes feature single-story living with luxury finishes and resort-style amenities."
            }
          },
          {
            "@type": "Question",
            "name": "How close is Heritage at Stonebridge to Red Rock Canyon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Heritage at Stonebridge is located just 12 miles from Red Rock Canyon National Conservation Area, making it easy to enjoy hiking, rock climbing, and scenic drives in this natural wonder."
            }
          },
          {
            "@type": "Question",
            "name": "What is the HOA fee for Heritage at Stonebridge homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The HOA fee for Heritage at Stonebridge homes is approximately $410 per month, which includes maintenance of common areas, security, and access to all community amenities."
            }
          }
        ]
      });

      // Breadcrumb Schema
      const breadcrumbSchema = document.createElement('script');
      breadcrumbSchema.type = 'application/ld+json';
      breadcrumbSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://heritagestonebridge.com"
          }
        ]
      });

      const residentialComplexScript = document.createElement('script');
      residentialComplexScript.type = 'application/ld+json';
      residentialComplexScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ResidentialComplex",
        "name": "Heritage at Stonebridge",
        "description": "Luxury 55+ active adult community in Summerlin, Las Vegas featuring resort-style amenities and stunning mountain views.",
        "url": "https://heritagestonebridge.com",
        "image": "https://heritagestonebridge.com/images/heritage-stonebridge.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Crossbridge Dr",
          "addressLocality": "Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89138",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "36.1699",
          "longitude": "-115.1398"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Resort-Style Pool",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification", 
            "name": "Golf Course Access",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "24/7 Security",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Gated Community",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Mountain Views",
            "value": true
          }
        ],
        "numberOfUnits": "500+",
        "developer": {
          "@type": "Organization",
          "name": "Heritage at Stonebridge Development"
        },
        "propertyType": "55+ Active Adult Community",
        "ageRestriction": "55+",
        "hasMap": "https://www.google.com/maps/place/Heritage+at+Stonebridge"
      });

      // Inject all schemas
      document.head.appendChild(organizationSchema);
      document.head.appendChild(personSchema);
      document.head.appendChild(faqSchema);
      document.head.appendChild(breadcrumbSchema);
      document.head.appendChild(residentialComplexScript);
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-hsb-cream py-16 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 py-8 relative z-10">
          <div class="text-center mb-8">
            <p class="text-sm font-semibold uppercase tracking-[0.15em] text-hsb-accent mb-4">
              Summerlin West · 89138
            </p>
            <h1 class="text-4xl md:text-6xl font-display text-hsb-dark mb-4">
              Heritage at Stonebridge
            </h1>
            <p class="text-xl md:text-2xl text-hsb-text max-w-3xl mx-auto mb-8 font-medium">
              421 guard-gated 55+ homes in Summerlin West
            </p>
            <p class="text-lg text-hsb-text max-w-4xl mx-auto mb-8">
              Lennar built the houses. A staffed gate checks visitors. The clubhouse has pools, a fitness center, pickleball, and bocce. Dr. Jan Duffy helps buyers and sellers inside this community. Call (702) 789-6561.
            </p>
            <div class="text-center mb-8">
              <p class="text-base text-gray-500 max-w-3xl mx-auto">
                <strong>Popular Searches:</strong> Heritage at Stonebridge reviews • Homes for sale in Heritage at Stonebridge • 
                New Construction 55+ communities in Summerlin, NV • Stonebridge Summerlin • Stonebridge Las Vegas • 
                Heritage Las Vegas NV • Heritage 55+ community • Lennar Summerlin
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/buy-heritage-at-stonebridge"
                class="bg-hsb-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-hsb-primary-dark transition-colors inline-block text-center text-lg"
              >
                Buy in Heritage
              </a>
              <a
                href="/sell-heritage-at-stonebridge"
                class="border-2 border-hsb-primary text-hsb-primary px-8 py-4 rounded-full font-semibold hover:bg-hsb-primary hover:text-white transition-colors inline-block text-center text-lg"
              >
                Sell in Heritage
              </a>
              <a
                href="/new-listing-heritage-at-stonebridge"
                class="bg-hsb-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-hsb-accent-dark transition-colors inline-block text-center text-lg"
              >
                New listing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Amenities Section */}
      <section class="bg-gray-50 py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Luxury Amenities & Lifestyle</h2>
            <p class="text-lg text-gray-600 mb-8">Experience the finest in 55+ active adult living with resort-style amenities</p>
            <div class="flex flex-wrap justify-center gap-4 mb-8">
              <a href="/55-plus-communities/" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Explore 55+ Communities
              </a>
              <a href="/summerlin-homes/" class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Summerlin Homes
              </a>
              <a href="/real-estate/" class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Real Estate Tools
              </a>
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold mb-2">8,000 Sq Ft Clubhouse</h3>
              <p class="text-gray-600">State-of-the-art facility with fitness center, multi-purpose rooms, and social spaces</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold mb-2">Resort-Style Pool & Spa</h3>
              <p class="text-gray-600">Outdoor pool, heated lap pool, and spa for relaxation and water aerobics</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold mb-2">Pickleball & Bocce Courts</h3>
              <p class="text-gray-600">Multiple courts for friendly games and organized tournaments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Heritage Section */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Heritage at Stonebridge?</h2>
            <p class="text-lg text-gray-600 mb-8">Discover what makes our community the premier choice for 55+ living in Las Vegas</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Three Home Collections</h3>
              <p class="text-gray-600">Cromwell (1,232-1,422 sq ft), Stirling (1,747-2,236 sq ft), and Evander (2,515-2,873 sq ft)</p>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Lennar Everything's Included</h3>
              <p class="text-gray-600">Popular features and upgrades included at no extra cost</p>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Red Rock Canyon Views</h3>
              <p class="text-gray-600">Stunning mountain backdrop with easy access to outdoor recreation</p>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Today's prices</h3>
              <p class="text-gray-600">List prices change with the MLS. Call (702) 789-6561 for the homes on the market now.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="bg-hsb-dark py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-display text-white mb-4">Tour Heritage at Stonebridge</h2>
          <p class="text-lg text-hsb-sand mb-8 max-w-2xl mx-auto">
            421 homes. Staffed gate. Clubhouse at 930 Silverfir Court. Call (702) 789-6561.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/buy-heritage-at-stonebridge"
              class="bg-hsb-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-hsb-accent-dark transition-colors inline-block text-center"
            >
              Buy a home
            </a>
            <a
              href="tel:+17027896561"
              class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-hsb-dark transition-colors inline-block text-center"
            >
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Hero Widget */}
              <RealScoutHeroWidget
                agentEncodedId="QWdlbnQtMjI1MDUw"
                title="Exclusive Heritage at Stonebridge Listings"
                subtitle="Schedule Your Private Tour Today"
                priceMin="600000"
                priceMax="900000"
              />

              {/* RealScout Sticky Widget */}
              <RealScoutStickyWidget
                agentEncodedId="QWdlbnQtMjI1MDUw"
                title="Featured Listings"
                subtitle="Call (702) 789-6561"
                priceMin="600000"
                priceMax="900000"
              />
    </>
  );
});

export const head: DocumentHead = {
  title: "Heritage at Stonebridge - Luxury 55+ Communities in Summerlin, Las Vegas | Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content:
        "Discover luxury 55+ active adult communities near Red Rock Canyon in Summerlin, Las Vegas. Heritage at Stonebridge offers gated living, resort amenities & stunning mountain views. Dr. Jan Duffy, your 55+ specialist - Call (702) 789-6561",
    },
    // Enhanced Meta Tags for AI & Search Engine Understanding
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "bingbot",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    // Canonical URL
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/",
    },
    // AI-Friendly Content Tags
    {
      name: "content-type",
      content: "real-estate-community",
    },
    {
      name: "audience",
      content: "adults-55-plus",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      name: "community-type",
      content: "active-adult-gated-community",
    },
    // Open Graph for social sharing
    {
      property: "og:title",
      content: "Las Vegas 55+ Communities Red Rock Canyon | Heritage at Stonebridge",
    },
    {
      property: "og:description",
      content:
        "Discover luxury 55+ active adult communities near Red Rock Canyon. Heritage at Stonebridge offers gated living, resort amenities & mountain views in Summerlin.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com",
    },
    {
      property: "og:site_name",
      content: "Heritage at Stonebridge",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    // Local SEO
    {
      name: "geo.region",
      content: "US-NV",
    },
    {
      name: "geo.placename",
      content: "Las Vegas, Nevada",
    },
    {
      name: "geo.position",
      content: "36.1699;-115.1398",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@heritage_stonebridge",
    },
    {
      name: "twitter:title",
      content: "Las Vegas 55+ Communities Red Rock Canyon | Heritage at Stonebridge",
    },
    {
      name: "twitter:description",
      content:
        "Discover luxury 55+ active adult communities near Red Rock Canyon. Heritage at Stonebridge offers gated living, resort amenities & mountain views in Summerlin.",
    },
    {
      name: "author",
      content: "Dr. Jan Duffy",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com",
    },
  ],
};
