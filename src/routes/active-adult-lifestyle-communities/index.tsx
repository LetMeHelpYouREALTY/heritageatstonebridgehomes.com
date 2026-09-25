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
  title: "Active Adult Lifestyle Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  meta: [
    {
      name: "description",
      content: "Discover active adult lifestyle communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities with resort amenities, social activities, and maintenance-free living. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/active-adult-lifestyle-communities",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, lifestyle-buyers",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Active Adult Lifestyle Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      property: "og:description",
      content: "Discover active adult lifestyle communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities with resort amenities, social activities, and maintenance-free living.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/active-adult-lifestyle-communities",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Active Adult Lifestyle Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      name: "twitter:description",
      content: "Discover active adult lifestyle communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities with resort amenities, social activities, and maintenance-free living.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for active adult lifestyle communities
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Service schema for active adult lifestyle communities
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://heritagestonebridge.com/active-adult-lifestyle-communities#service",
        "name": "Active Adult Lifestyle Communities",
        "description": "Expert real estate services specializing in active adult lifestyle communities in Las Vegas, providing comprehensive guidance for 55+ communities with resort amenities, social activities, and maintenance-free living.",
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
        "serviceType": "Active Adult Lifestyle Community Real Estate Services",
        "offers": {
          "@type": "Offer",
          "priceRange": "$400,000-$3,000,000",
          "description": "Active adult lifestyle communities with resort amenities"
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
            "name": "What defines an active adult lifestyle community?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Active adult lifestyle communities are age-restricted communities (typically 55+) that offer resort-style amenities, social activities, maintenance-free living, and a focus on active, healthy lifestyles for residents."
            }
          },
          {
            "@type": "Question",
            "name": "What amenities do active adult lifestyle communities offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Active adult lifestyle communities typically offer fitness centers, pools, golf courses, clubhouses, social activities, maintenance services, security, and resort-style amenities designed for active adult living."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose an active adult lifestyle community?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Active adult lifestyle communities offer maintenance-free living, social opportunities, resort amenities, security, and a focus on healthy, active lifestyles perfect for adults 55+ seeking an engaging community environment."
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
            "name": "Active Adult Lifestyle",
            "item": "https://heritagestonebridge.com/active-adult-lifestyle-communities"
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
            Active Adult Lifestyle Communities
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover vibrant 55+ communities designed for active adults with resort amenities, social activities, and maintenance-free living
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Explore Lifestyle Communities
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      <PagePhotoRail />

      {/* Active Adult Lifestyle Advantage */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Why Choose Active Adult Lifestyle Communities?" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Active Adult Lifestyle Communities?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of active adults discover the benefits of lifestyle-focused communities designed for healthy, engaging living.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <PhotoThumbCard
              heading="Resort-Style Amenities"
              description="Fitness centers, pools, golf courses, clubhouses, and spa facilities"
            />
            <PhotoThumbCard
              heading="Social Activities"
              description="Clubs, events, classes, and activities designed for active adult engagement"
            />
            <PhotoThumbCard
              heading="Maintenance-Free Living"
              description="No yard work, exterior maintenance, or repairs - focus on enjoying life"
            />
          </div>
        </div>
      </section>

      {/* Featured Lifestyle Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Premier Active Adult Lifestyle Communities" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Premier Active Adult Lifestyle Communities</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Las Vegas's finest active adult lifestyle communities, each offering unique amenities and lifestyle options for discerning 55+ buyers.
            </p>
          </div>
          
          <PremierCommunityGrid variant="valley" />
        </div>
      </section>

      {/* Lifestyle Benefits */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="The Active Adult Lifestyle Advantage" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">The Active Adult Lifestyle Advantage</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of luxury amenities, social engagement, and maintenance-free living in Las Vegas's premier active adult lifestyle communities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Health & Wellness</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  State-of-the-art fitness centers and wellness programs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Pools, spas, and relaxation areas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Walking trails and outdoor recreation
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Health and wellness classes
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Social Engagement</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Clubs and interest groups
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Community events and activities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Educational classes and workshops
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Travel and excursion groups
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
          priceMax={3000000}
        />
      </div>

      {/* Call to Action */}
      <section class="bg-gradient-to-br from-teal-600 to-teal-800 py-16">
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Active Adult Lifestyle Community?</h2>
          <p class="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you discover the ideal active adult lifestyle community that matches your interests, budget, and preferences.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Active Adult Lifestyle Communities"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="400000"
        priceMax="3000000"
      />
    </>
  );
});
