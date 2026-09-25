import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";
import { LocationHeroImage } from "~/components/media/LocationHeroImage";
import { PagePhotoRail } from "~/components/media/PagePhotoRail";
import { HeadingPhoto } from "~/components/media/HeadingPhoto";
import { PremierCommunityGrid } from "~/components/media/PremierCommunityGrid";
import { PhotoThumbCard } from "~/components/media/PhotoThumbCard";

export const head: DocumentHead = {
  title: "55+ Communities in Las Vegas for Rent | Active Adult Rental Homes - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Find 55+ communities in Las Vegas for rent with active adult rental homes, amenities, and flexible lease options. Expert guidance for renters. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/55-and-over-communities-las-vegas-for-rent",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, renters",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "55+ Communities in Las Vegas for Rent | Active Adult Rental Homes",
    },
    {
      property: "og:description",
      content: "Find 55+ communities in Las Vegas for rent with active adult rental homes, amenities, and flexible lease options.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/55-and-over-communities-las-vegas-for-rent",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "55+ Communities in Las Vegas for Rent | Active Adult Rental Homes",
    },
    {
      name: "twitter:description",
      content: "Find 55+ communities in Las Vegas for rent with active adult rental homes, amenities, and flexible lease options.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for 55+ communities for rent
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Service schema for 55+ communities for rent
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://heritagestonebridge.com/55-and-over-communities-las-vegas-for-rent#service",
        "name": "55+ Communities in Las Vegas for Rent",
        "description": "Expert real estate services specializing in 55+ communities for rent in Las Vegas, providing rental listings and guidance for active adult renters.",
        "provider": {
          "@type": "RealEstateAgent",
          "name": "Dr. Jan Duffy",
          "telephone": "+1-702-789-6561",
          "email": "DrDuffySells@HeritageStonebridge.com"
        },
        "areaServed": {
          "@type": "City",
          "name": "Las Vegas, Nevada"
        },
        "serviceType": "55+ Community Rental Services",
        "offers": {
          "@type": "Offer",
          "priceRange": "$2,000-$6,000/month",
          "description": "55+ communities in Las Vegas for rent with active adult amenities"
        }
      });

      // FAQ Schema
      const faqSchema = document.createElement('script');
      faqSchema.type = 'application/ld+json';
      faqSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are there 55+ communities in Las Vegas that allow rentals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, many 55+ communities in Las Vegas allow rentals, including Sun City Summerlin, Del Webb communities, and some luxury communities, though rental policies vary by community."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical rent for 55+ community homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rent for 55+ community homes in Las Vegas typically ranges from $2,000 to $6,000 per month, depending on size, location, amenities, and community type."
            }
          },
          {
            "@type": "Question",
            "name": "Do renters get access to community amenities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, renters in 55+ communities typically have access to community amenities, though some communities may have restrictions or additional fees for renters."
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
            "name": "55+ Communities",
            "item": "https://heritagestonebridge.com/55-plus-communities"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Communities for Rent",
            "item": "https://heritagestonebridge.com/55-and-over-communities-las-vegas-for-rent"
          }
        ]
      });

      // Inject all schemas
      document.head.appendChild(serviceSchema);
      document.head.appendChild(faqSchema);
      document.head.appendChild(breadcrumbSchema);
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white py-20">
        <LocationHeroImage />
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            55+ Communities in Las Vegas for Rent
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover active adult rental homes with access to community amenities, social activities, and maintenance-free living
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Find Rental Homes
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      <PagePhotoRail />

      {/* Rental Market Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="55+ Community Rental Market" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">55+ Community Rental Market</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Las Vegas offers rental opportunities in various 55+ communities, allowing you to experience active adult living before committing to purchase.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <PhotoThumbCard
              heading="Rental Availability"
              description="Limited but available rental homes in established 55+ communities with owner-occupied properties"
            />
            <PhotoThumbCard
              heading="Amenity Access"
              description="Renters typically have access to community amenities, pools, fitness centers, and social activities"
            />
            <PhotoThumbCard
              heading="Flexible Terms"
              description="Various lease terms available, from short-term rentals to annual leases with renewal options"
            />
          </div>
        </div>
      </section>

      {/* Communities with Rental Options */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Communities with Rental Options" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Communities with Rental Options</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore 55+ communities in Las Vegas that offer rental opportunities for active adults.
            </p>
          </div>
          
          <PremierCommunityGrid variant="rentals" />
        </div>
      </section>

      {/* Rental Considerations */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Important Rental Considerations" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Important Rental Considerations</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding rental policies, costs, and requirements helps ensure a successful rental experience in 55+ communities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Rental Policies</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Age restrictions (55+ requirement)
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Lease terms and renewal options
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Amenity access and restrictions
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Pet policies and limitations
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Cost Considerations</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Monthly rent and security deposits
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  HOA fees and community assessments
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Utilities and maintenance costs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Application and background check fees
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RealScout Widgets */}
      <div class="max-w-7xl mx-auto px-4 py-8">
        <RealScoutOfficeListingsWidget
          agentEncodedId="QWdlbnQtMjI1MDUw"
          sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
          listingStatus="For Rent"
          propertyTypes="SFR"
          priceMin={2000}
          priceMax={8000}
        />
      </div>

      {/* Call to Action */}
      <section class="bg-gradient-to-br from-teal-600 to-teal-800 py-16">
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Rental?</h2>
          <p class="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you find the ideal 55+ community rental in Las Vegas with access to amenities and active adult lifestyle.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="55+ Communities for Rent"
        subtitle="Call (702) 789-6561"
        priceMin="2000"
        priceMax="8000"
      />
    </>
  );
});
