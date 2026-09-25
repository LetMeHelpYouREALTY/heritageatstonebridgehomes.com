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
  title: "55+ Communities in Las Vegas | Active Adult Living Guide - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Complete guide to 55+ communities in Las Vegas with active adult living options, amenities, and lifestyle information. Expert guidance for 55+ buyers. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/55-plus-communities-las-vegas",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, active-adults",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "55+ Communities in Las Vegas | Active Adult Living Guide",
    },
    {
      property: "og:description",
      content: "Complete guide to 55+ communities in Las Vegas with active adult living options, amenities, and lifestyle information.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/55-plus-communities-las-vegas",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "55+ Communities in Las Vegas | Active Adult Living Guide",
    },
    {
      name: "twitter:description",
      content: "Complete guide to 55+ communities in Las Vegas with active adult living options, amenities, and lifestyle information.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for 55+ communities
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Service schema for 55+ communities
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://heritagestonebridge.com/55-plus-communities-las-vegas#service",
        "name": "55+ Communities in Las Vegas",
        "description": "Expert real estate services specializing in 55+ communities in Las Vegas, providing comprehensive guidance for active adult living options and lifestyle choices.",
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
        "serviceType": "55+ Community Real Estate Services",
        "offers": {
          "@type": "Offer",
          "priceRange": "$300,000-$5,000,000",
          "description": "55+ communities in Las Vegas with active adult living options"
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
            "name": "What are the best 55+ communities in Las Vegas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best 55+ communities in Las Vegas include Heritage at Stonebridge, Sun City Summerlin, The Ridges, Siena, and various Del Webb communities, each offering unique amenities and lifestyle benefits."
            }
          },
          {
            "@type": "Question",
            "name": "What amenities do 55+ communities typically offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "55+ communities typically offer clubhouses, fitness centers, pools, golf courses, social activities, maintenance services, and age-restricted living environments."
            }
          },
          {
            "@type": "Question",
            "name": "What is the age requirement for 55+ communities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most 55+ communities require at least one resident to be 55 years or older, with some communities allowing younger spouses or partners."
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
            "name": "Las Vegas Communities",
            "item": "https://heritagestonebridge.com/55-plus-communities-las-vegas"
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
      <section class="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20">
        <LocationHeroImage />
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            55+ Communities in Las Vegas
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the premier active adult communities offering resort-style amenities, social activities, and maintenance-free living
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-100 transition-colors shadow-lg inline-block text-center">
              Explore Communities
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      <PagePhotoRail />

      {/* Community Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Las Vegas 55+ Community Landscape" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Las Vegas 55+ Community Landscape</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Las Vegas offers a diverse selection of 55+ communities, from new construction developments to established communities with mature amenities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <PhotoThumbCard
              heading="New Construction"
              description="Modern communities like Heritage at Stonebridge with contemporary amenities and smart home technology"
            />
            <PhotoThumbCard
              heading="Established Communities"
              description="Mature communities like Sun City Summerlin with proven amenities and established social scenes"
            />
            <PhotoThumbCard
              heading="Luxury Options"
              description="High-end communities including The Ridges and Siena with premium amenities and concierge services"
            />
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Featured 55+ Communities in Las Vegas" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Featured 55+ Communities in Las Vegas</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Las Vegas's premier active adult communities offering diverse lifestyles and amenities.
            </p>
          </div>
          
          <PremierCommunityGrid variant="premier" />
        </div>
      </section>

      {/* Lifestyle Benefits */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Benefits of 55+ Community Living" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Benefits of 55+ Community Living</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of active adult community living in Las Vegas, from social connections to maintenance-free lifestyles.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Social & Lifestyle Benefits</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Active social scene with clubs and activities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Like-minded neighbors and friendships
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Organized events and entertainment
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Volunteer opportunities and community involvement
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Practical Benefits</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Maintenance-free living and services
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Security and gated communities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Access to amenities and facilities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Age-appropriate environment and activities
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
          priceMin={300000}
          priceMax={5000000}
        />
      </div>

      {/* Call to Action */}
      <section class="bg-gradient-to-br from-emerald-600 to-emerald-800 py-16">
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect 55+ Community?</h2>
          <p class="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the ideal 55+ community in Las Vegas that matches your lifestyle, budget, and preferences.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="55+ Communities Las Vegas"
        subtitle="Call (702) 789-6561"
        priceMin="300000"
        priceMax="5000000"
      />
    </>
  );
});
