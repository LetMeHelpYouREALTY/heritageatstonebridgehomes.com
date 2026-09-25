import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";
import { LocationHeroImage } from "~/components/media/LocationHeroImage";
import { PagePhotoRail } from "~/components/media/PagePhotoRail";
import { HeadingPhoto } from "~/components/media/HeadingPhoto";
import { PhotoThumbCard } from "~/components/media/PhotoThumbCard";

export const head: DocumentHead = {
  title: "Las Vegas Real Estate | Dr. Jan Duffy - 55+ Communities Specialist",
  meta: [
    {
      name: "description",
      content: "Expert Las Vegas real estate services by Dr. Jan Duffy. Specializing in 55+ communities, luxury homes, and active adult living in Summerlin, Henderson, and Northwest Las Vegas. Call 702-789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/las-vegas-real-estate",
    },
    {
      name: "content-type",
      content: "service-area",
    },
    {
      name: "audience",
      content: "adults-55-plus, luxury-home-buyers",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Las Vegas Real Estate | Dr. Jan Duffy - 55+ Communities Specialist",
    },
    {
      property: "og:description",
      content: "Expert Las Vegas real estate services specializing in 55+ communities and luxury homes. Serving Summerlin, Henderson, and Northwest Las Vegas.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/las-vegas-real-estate",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Las Vegas Real Estate | Dr. Jan Duffy - 55+ Communities Specialist",
    },
    {
      name: "twitter:description",
      content: "Expert Las Vegas real estate services specializing in 55+ communities and luxury homes. Serving Summerlin, Henderson, and Northwest Las Vegas.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive LocalBusiness schema for Las Vegas - September 2025 Google "Perspective" Compliant
  useTask$(() => {
    if (typeof document !== "undefined") {
      // LocalBusiness Schema for Las Vegas Real Estate
      const localBusinessSchema = document.createElement('script');
      localBusinessSchema.type = 'application/ld+json';
      localBusinessSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://heritagestonebridge.com/las-vegas-real-estate#localbusiness",
        "name": "Heritage at Stonebridge - Las Vegas Real Estate",
        "description": "Premier Heritage at Stonebridge real estate services in Las Vegas. Expert knowledge of Las Vegas market trends, pricing, and neighborhood insights with comprehensive coverage of all Las Vegas areas.",
        "image": {
          "@type": "ImageObject",
          "url": "https://heritagestonebridge.com/images/las-vegas-market.jpg",
          "width": 1200,
          "height": 630
        },
        "telephone": "+1-702-789-6561",
        "email": "DrDuffySells@HeritageStonebridge.com",
        "url": "https://heritagestonebridge.com/las-vegas-real-estate",
        "address": {
          "@type": "PostalAddress",
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
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification", 
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "16:30"
          }
        ],
        "priceRange": "$$",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "36.1716",
            "longitude": "-115.3384"
          },
          "geoRadius": "50000"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Las Vegas",
            "containedInPlace": {
              "@type": "State",
              "name": "Nevada"
            }
          },
          {
            "@type": "Place",
            "name": "Las Vegas Strip",
            "containedInPlace": {
              "@type": "City",
              "name": "Las Vegas"
            }
          },
          {
            "@type": "Place",
            "name": "Downtown Las Vegas",
            "containedInPlace": {
              "@type": "City",
              "name": "Las Vegas"
            }
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Las Vegas Real Estate Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Las Vegas Home Buying",
                "description": "Expert guidance for buying homes throughout Las Vegas"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Las Vegas Home Selling",
                "description": "Professional home selling services in Las Vegas market"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Las Vegas Investment Properties",
                "description": "Investment property analysis and acquisition services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Las Vegas Luxury Homes",
                "description": "Specialized services for luxury properties in Las Vegas"
              }
            }
          ]
        },
        "sameAs": [
          "https://www.facebook.com/DrJanDuffyRealEstate",
          "https://www.linkedin.com/in/drjanduffy",
          "https://www.instagram.com/drjanduffylasvegas"
        ],
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional License",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Nevada Real Estate Division"
          },
          "identifier": "S.0197614.LLC"
        }
      });

      // FAQ Schema for Las Vegas Real Estate
      const faqSchema = document.createElement('script');
      faqSchema.type = 'application/ld+json';
      faqSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What areas of Las Vegas do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Jan Duffy serves all areas of Las Vegas including the Strip, Downtown, Summerlin, Henderson, Northwest Las Vegas, and Red Rock Canyon areas with comprehensive real estate services."
            }
          },
          {
            "@type": "Question",
            "name": "What types of properties are available in Las Vegas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Las Vegas offers diverse property types including single-family homes, condos, townhomes, luxury estates, investment properties, and 55+ communities like Heritage at Stonebridge."
            }
          },
          {
            "@type": "Question",
            "name": "How is the Las Vegas real estate market performing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Las Vegas real estate market continues to show strong growth with increasing property values, low inventory, and high demand across all price ranges and neighborhoods."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Las Vegas a good place to invest in real estate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Las Vegas offers strong investment opportunities due to its growing population, tourism industry, no state income tax, diverse economy, and continued development and infrastructure improvements."
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
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Las Vegas Real Estate",
            "item": "https://heritagestonebridge.com/las-vegas-real-estate"
          }
        ]
      });

      // Inject all schemas
      document.head.appendChild(localBusinessSchema);
      document.head.appendChild(faqSchema);
      document.head.appendChild(breadcrumbSchema);
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <LocationHeroImage />
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Las Vegas Real Estate
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert real estate services specializing in 55+ communities, luxury homes, and active adult living throughout Las Vegas Valley
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Schedule Consultation
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      <PagePhotoRail />

      {/* Service Areas Overview */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Las Vegas Service Areas" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Las Vegas Service Areas</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy provides comprehensive real estate services across the Las Vegas Valley, with specialized expertise in 55+ communities and luxury properties.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PhotoThumbCard
              heading="Summerlin"
              description="Master-planned streets, golf, and resort amenities in Las Vegas's west valley."
              href="/summerlin-homes"
              linkLabel="Explore Summerlin Homes →"
            />
            <PhotoThumbCard
              heading="Henderson"
              description="Parks, recreation centers, and a wide range of housing types in Henderson."
              href="/henderson-real-estate"
              linkLabel="Explore Henderson Homes →"
            />
            <PhotoThumbCard
              heading="Northwest Las Vegas"
              description="New construction and 215 Beltway access in the northwest valley."
              href="/northwest-las-vegas"
              linkLabel="Explore Northwest Homes →"
            />
            <PhotoThumbCard
              heading="Red Rock Canyon"
              description="Luxury communities near Red Rock Canyon National Conservation Area."
              href="/red-rock-canyon-communities"
              linkLabel="Explore Red Rock Homes →"
            />
            <PhotoThumbCard
              heading="Boulder City"
              description="Historic streets near Lake Mead with outdoor recreation and a slower pace."
              href="/boulder-city-homes"
              linkLabel="Explore Boulder City Homes →"
            />
            <PhotoThumbCard
              heading="Las Vegas Strip Area"
              description="High-rise condos and west-valley views toward the Strip skyline."
              href="/55-plus-condos-las-vegas"
              linkLabel="Explore Strip Condos →"
            />
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Las Vegas Real Estate Market Overview" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Las Vegas Real Estate Market Overview</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              The Las Vegas real estate market continues to show strong growth with increasing property values, low inventory, and high demand across all price ranges and neighborhoods.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <PhotoThumbCard
              heading="Market Growth"
              description="Las Vegas property values have shown consistent growth, driven by population increases and economic diversification."
            />
            <PhotoThumbCard
              heading="Investment Opportunities"
              description="Strong rental market, no state income tax, and growing tourism industry create excellent investment potential."
            />
            <PhotoThumbCard
              heading="Diverse Options"
              description="From luxury estates to 55+ communities, Las Vegas offers properties for every lifestyle and budget."
            />
          </div>
        </div>
      </section>

      {/* 55+ Communities Focus */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="55+ Communities in Las Vegas" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">55+ Communities in Las Vegas</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Las Vegas offers some of the finest active adult communities in the Southwest, featuring resort-style amenities, golf courses, and vibrant social scenes.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Popular 55+ Communities</h3>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Heritage at Stonebridge - Summerlin
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Sun City Summerlin
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Siena - Summerlin
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  The Ridges - Summerlin
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Del Webb communities
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Community Amenities</h3>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Championship golf courses
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Resort-style pools and spas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Fitness centers and tennis courts
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Clubhouses and social activities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  24/7 security and gated access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Las Vegas Listings */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <HeadingPhoto heading="Current Las Vegas Listings" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Las Vegas Listings</h2>
            <p class="text-lg text-gray-600">Explore available properties across the Las Vegas Valley</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF,CND"
            priceMin={300000}
            priceMax={2000000}
          />
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Why Choose Dr. Jan Duffy for Las Vegas Real Estate?" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Las Vegas Real Estate?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              With deep local knowledge and specialized expertise in 55+ communities, Dr. Jan Duffy provides unmatched service throughout the Las Vegas Valley.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <PhotoThumbCard
              heading="55+ Community Specialist"
              description="Deep expertise in active adult communities, understanding unique needs and lifestyle preferences."
            />
            
            <PhotoThumbCard
              heading="Local Market Expert"
              description="Comprehensive knowledge of Las Vegas neighborhoods, market trends, and property values."
            />
            
            <PhotoThumbCard
              heading="Personalized Service"
              description="Dedicated support throughout the entire buying or selling process with attention to detail."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Las Vegas Dream Home?</h2>
          <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you navigate the Las Vegas real estate market and find the perfect home in your ideal community.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Schedule Consultation
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Las Vegas Listings"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
