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
  title: "Summerlin 55+ Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  meta: [
    {
      name: "description",
      content: "Discover premier 55+ communities in Summerlin Las Vegas. Expert guidance from Dr. Jan Duffy on Heritage at Stonebridge, Sun City, and luxury active adult living. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/summerlin-55-plus-communities",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, summerlin-buyers",
    },
    {
      name: "location",
      content: "Summerlin, Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Summerlin 55+ Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      property: "og:description",
      content: "Discover premier 55+ communities in Summerlin Las Vegas. Expert guidance from Dr. Jan Duffy on Heritage at Stonebridge, Sun City, and luxury active adult living.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/summerlin-55-plus-communities",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Summerlin 55+ Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      name: "twitter:description",
      content: "Discover premier 55+ communities in Summerlin Las Vegas. Expert guidance from Dr. Jan Duffy on Heritage at Stonebridge, Sun City, and luxury active adult living.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for Summerlin 55+ communities
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Service schema for Summerlin 55+ communities
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://heritagestonebridge.com/summerlin-55-plus-communities#service",
        "name": "Summerlin 55+ Communities",
        "description": "Expert real estate services specializing in 55+ communities in Summerlin Las Vegas, providing comprehensive guidance for active adult living in premier master-planned communities.",
        "provider": {
          "@type": "RealEstateAgent",
          "name": "Dr. Jan Duffy",
          "telephone": "+1-702-789-6561",
          "email": "DrDuffySells@HeritageStonebridge.com"
        },
        "areaServed": {
          "@type": "City",
          "name": "Summerlin, Las Vegas, Nevada"
        },
        "serviceType": "Summerlin 55+ Community Real Estate Services",
        "offers": {
          "@type": "Offer",
          "priceRange": "$400,000-$5,000,000",
          "description": "Summerlin 55+ communities with luxury amenities and golf courses"
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
            "name": "What are the best 55+ communities in Summerlin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best 55+ communities in Summerlin include Heritage at Stonebridge (new construction), Sun City Summerlin (established), The Ridges (luxury), Siena (resort-style), and Red Rock Country Club (golf course community)."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose Summerlin for 55+ living?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Summerlin offers master-planned community amenities, championship golf courses, Red Rock Canyon access, world-class healthcare, Downtown Summerlin shopping, and a safe, well-maintained environment perfect for active adults."
            }
          },
          {
            "@type": "Question",
            "name": "What amenities do Summerlin 55+ communities offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Summerlin 55+ communities typically offer golf courses, clubhouses, fitness centers, pools, social activities, maintenance services, and access to Red Rock Canyon recreation and Downtown Summerlin amenities."
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
            "name": "Summerlin Communities",
            "item": "https://heritagestonebridge.com/summerlin-55-plus-communities"
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
      <section class="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <LocationHeroImage />
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Summerlin 55+ Communities
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover Las Vegas's premier active adult communities in Summerlin with championship golf courses, Red Rock Canyon views, and luxury amenities
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-100 transition-colors shadow-lg inline-block text-center">
              Explore Summerlin Communities
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      <PagePhotoRail />

      {/* Summerlin Advantage */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Why Summerlin is Perfect for 55+ Living" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Summerlin is Perfect for 55+ Living</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of active adults discover why Summerlin offers the ultimate active adult lifestyle.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <PhotoThumbCard
              heading="Master-Planned Excellence"
              description="Thoughtfully designed communities with parks, trails, and world-class amenities"
            />
            <PhotoThumbCard
              heading="Championship Golf"
              description="Multiple golf courses including TPC Las Vegas and Red Rock Country Club"
            />
            <PhotoThumbCard
              heading="Red Rock Canyon Access"
              description="Minutes from hiking, rock climbing, and scenic drives in Red Rock Canyon"
            />
          </div>
        </div>
      </section>

      {/* Featured Summerlin Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Premier 55+ Communities in Summerlin" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Premier 55+ Communities in Summerlin</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Summerlin's finest active adult communities, each offering unique amenities and lifestyle options for discerning 55+ buyers.
            </p>
          </div>
          
          <PremierCommunityGrid variant="summerlin" />
        </div>
      </section>

      {/* Summerlin Lifestyle Benefits */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="The Summerlin 55+ Lifestyle Advantage" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">The Summerlin 55+ Lifestyle Advantage</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Living in Summerlin's 55+ communities means enjoying the perfect blend of luxury amenities, natural beauty, and active adult living.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Recreation & Amenities</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Championship golf courses and country clubs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Red Rock Canyon hiking and outdoor recreation
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Downtown Summerlin shopping and dining
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  World-class healthcare and medical facilities
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Community Benefits</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Master-planned community with thoughtful design
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Parks, trails, and recreation centers
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Active social scene and community events
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Convenient access to Las Vegas Strip
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
          listingStatus="For Sale"
          propertyTypes="SFR"
          priceMin={400000}
          priceMax={5000000}
        />
      </div>

      {/* Call to Action */}
      <section class="bg-gradient-to-br from-green-600 to-green-800 py-16">
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Summerlin 55+ Community?</h2>
          <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you discover the ideal Summerlin community that matches your lifestyle, budget, and preferences.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Summerlin 55+ Communities"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="400000"
        priceMax="5000000"
      />
    </>
  );
});
