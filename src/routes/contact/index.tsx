import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LocationHeroImage } from "~/components/media/LocationHeroImage";
import { PagePhotoRail } from "~/components/media/PagePhotoRail";
import { HeadingPhoto } from "~/components/media/HeadingPhoto";
import { PhotoThumbCard } from "~/components/media/PhotoThumbCard";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import {
  business,
  openingHoursSpecification,
  specialOpeningHoursSpecification,
} from "~/config/business";

export const head: DocumentHead = {
  title: "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert | Heritage at Stonebridge",
  meta: [
    {
      name: "description",
      content: `Contact ${business.name} for Heritage at Stonebridge real estate. Call ${business.telephoneDisplay} or text ${business.telephoneDisplay}. Located at ${business.addressDisplay}.`,
    },
    {
      property: "og:title",
      content: "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert",
    },
    {
      property: "og:description",
      content: "Contact Dr. Jan Duffy for expert Las Vegas real estate services. Call (702) 789-6561 or email DrDuffySells@HeritageStonebridge.com.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/contact",
    },
    {
      property: "og:image",
      content: "https://heritagestonebridge.com/images/dr-jan-duffy-professional.jpg",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert",
    },
    {
      name: "twitter:description",
      content: "Contact Dr. Jan Duffy for expert Las Vegas real estate services. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Dr. Jan Duffy",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/contact",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive LocalBusiness schema - September 2025 Google "Perspective" Compliant
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Primary LocalBusiness Schema
      const localBusinessSchema = document.createElement('script');
      localBusinessSchema.type = 'application/ld+json';
      localBusinessSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://heritagestonebridge.com/#localbusiness",
        "name": "Heritage Stonebridge | Homes By Dr. Jan Duffy",
        "description": "Your local guide to Heritage at Stonebridge — Lennar's guard-gated 55+ community in Summerlin West (89138). Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties (NV License S.0197614.LLC), helps buyers and sellers with resale and new-build homes, HOA questions, and fair comparisons to Sun City Summerlin and other Summerlin active-adult neighborhoods.",
        "image": {
          "@type": "ImageObject",
          "url": "https://heritagestonebridge.com/images/dr-jan-duffy-professional.jpg",
          "width": 400,
          "height": 400
        },
        "telephone": "+1-702-789-6561",
        "email": "DrDuffySells@HeritageStonebridge.com",
        "url": "https://heritagestonebridge.com",
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
        "specialOpeningHoursSpecification": specialOpeningHoursSpecification,
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
            "@type": "City",
            "name": "Henderson",
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
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Real Estate Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Home Buying Services",
                "description": "Expert guidance through the home buying process"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Home Selling Services",
                "description": "Professional home selling and marketing services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Heritage at Stonebridge Specialist",
                "description": "Specialized expertise in Heritage at Stonebridge community"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "55+ Community Expert",
                "description": "Expert knowledge of active adult communities"
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

      // ContactPage Schema
      const contactPageSchema = document.createElement('script');
      contactPageSchema.type = 'application/ld+json';
      contactPageSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "LocalBusiness",
          "@id": "https://heritagestonebridge.com/#localbusiness"
        },
        "name": "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert",
        "description": "Contact information for Dr. Jan Duffy, Las Vegas real estate expert specializing in Heritage at Stonebridge and 55+ communities.",
        "url": "https://heritagestonebridge.com/contact"
      });

      // FAQ Schema for Contact Page
      const faqSchema = document.createElement('script');
      faqSchema.type = 'application/ld+json';
      faqSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Dr. Jan Duffy's phone number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Jan Duffy's phone number is (702) 789-6561. You can call this number to speak directly with her about your real estate needs."
            }
          },
          {
            "@type": "Question",
            "name": "What is Dr. Jan Duffy's email address?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Jan Duffy's email address is DrDuffySells@HeritageStonebridge.com. You can email her for inquiries about real estate services."
            }
          },
          {
            "@type": "Question",
            "name": "What are Dr. Jan Duffy's business hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Jan Duffy's business hours are Monday–Friday 9:00 AM–6:00 PM, Saturday 10:00 AM–4:30 PM, and Sunday closed. Independence Day observed (July 3, 2026) and Independence Day (July 4, 2026) are closed."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Dr. Jan Duffy's office located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Jan Duffy's office is located at Crossbridge Dr, Las Vegas, NV 89138, in the Heritage at Stonebridge area."
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
            "name": "Contact",
            "item": "https://heritagestonebridge.com/contact"
          }
        ]
      });

      // Inject all schemas
      document.head.appendChild(localBusinessSchema);
      document.head.appendChild(contactPageSchema);
      document.head.appendChild(faqSchema);
      document.head.appendChild(breadcrumbSchema);
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <LocationHeroImage />
        <div class="absolute inset-0 bg-slate-900/40" aria-hidden="true"></div>
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Contact Dr. Jan Duffy
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Your Las Vegas Real Estate Expert
          </p>
          <p class="text-lg text-blue-200 max-w-4xl mx-auto mb-8">
            Ready to start your real estate journey? Contact Dr. Jan Duffy for expert guidance 
            in Heritage at Stonebridge, 55+ communities, and luxury properties throughout Las Vegas.
          </p>
        </div>
      </section>

      <PagePhotoRail />

      {/* Contact Information */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Get In Touch" />
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to connect with Dr. Jan Duffy for your real estate needs
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PhotoThumbCard
              heading="Call the Heritage Stonebridge office"
              description="Speak directly with Dr. Jan Duffy about Heritage at Stonebridge tours and listings."
              href={business.telephoneHref}
              linkLabel={business.telephoneDisplay}
            />
            <PhotoThumbCard
              heading="Email Dr. Jan Duffy"
              description="Send listing questions, tour requests, or HOA details."
              href={`mailto:${business.email}`}
              linkLabel={business.email}
            />
            <PhotoThumbCard
              heading="Office on Crossbridge Dr"
              description="Heritage Stonebridge | Homes By Dr. Jan Duffy — Crossbridge Dr, Las Vegas, NV 89138."
              href={business.mapsUrl}
              linkLabel="Get directions"
            />
            <PhotoThumbCard
              heading="Office Hours"
              description="Monday–Friday 9:00 AM–6:00 PM. Saturday 10:00 AM–4:30 PM. Sunday closed."
              href={business.telephoneHref}
              linkLabel={`Call ${business.telephoneDisplay}`}
            />
          </div>

          <div class="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <a
              href={business.telephoneHref}
              class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 text-center"
            >
              Call {business.telephoneDisplay}
            </a>
            <a
              href={business.smsHref}
              class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 text-center"
            >
              Text {business.telephoneDisplay}
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 text-center"
            >
              Directions
            </a>
            <a
              href={business.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 text-center"
            >
              View Google Reviews
            </a>
          </div>

          <div class="mt-10 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Map of Heritage Stonebridge office at Crossbridge Dr, Las Vegas, NV 89138"
              src={business.mapsEmbedUrl}
              class="w-full h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p class="mt-3 text-center text-sm text-gray-500">
            Wheelchair accessible parking lot and wheelchair accessible entrance.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Service Areas" />
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy serves clients throughout the Las Vegas metropolitan area 
              with specialized expertise in premier communities.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Las Vegas, NV 89138</h3>
              <p class="text-gray-600">Primary service area matching Google Business Profile</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Summerlin West</h3>
              <p class="text-gray-600">Heritage at Stonebridge and surrounding 55+ neighborhoods</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Las Vegas</h3>
              <p class="text-gray-600">Complete metropolitan area coverage</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Summerlin</h3>
              <p class="text-gray-600">Premier master-planned community</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Henderson</h3>
              <p class="text-gray-600">Established neighborhoods and new construction</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Red Rock Canyon</h3>
              <p class="text-gray-600">Properties with mountain views</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Specializations" />
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specializations
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy specializes in multiple areas of Las Vegas real estate
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PhotoThumbCard
              heading="Heritage at Stonebridge"
              description="Community specialist for Lennar's guard-gated 55+ neighborhood in Summerlin West."
              href="/homes-for-sale-stonebridge-summerlin"
              linkLabel="View Stonebridge homes →"
            />
            <PhotoThumbCard
              heading="55+ Communities"
              description="Active adult living across Summerlin, Henderson, and Las Vegas."
              href="/55-plus-communities-las-vegas"
              linkLabel="Compare 55+ communities →"
            />
            <PhotoThumbCard
              heading="Luxury Properties"
              description="Gated estates and high-end homes near Red Rock Canyon."
              href="/luxury-homes"
              linkLabel="View luxury homes →"
            />
            <PhotoThumbCard
              heading="First-Time Buyers"
              description="Tour prep, financing questions, and Heritage at Stonebridge inventory."
              href="/first-time-buyers"
              linkLabel="First-time buyer guide →"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Don't wait to begin your real estate journey. Contact Dr. Jan Duffy today 
            for expert guidance and personalized service.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Call (702) 789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 inline-block text-center"
            >
              Send Email
            </a>
          </div>
          <div class="mt-8 text-center">
            <p class="text-blue-200 text-sm">
              <strong>Nevada Real Estate License:</strong> S.0197614.LLC
              <br />
              <strong>Office:</strong> Crossbridge Dr, Las Vegas, NV 89138
              <br />
              <strong>Hours:</strong> Mon-Fri 9:00 AM–6:00 PM | Sat 10:00 AM–4:30 PM | Sun Closed
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Contact Dr. Jan Duffy"
        subtitle="Call (702) 789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
