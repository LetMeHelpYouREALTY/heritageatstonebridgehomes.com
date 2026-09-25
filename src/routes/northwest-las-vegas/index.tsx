import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";
import { LocationHeroImage } from "~/components/media/LocationHeroImage";
import { PagePhotoRail } from "~/components/media/PagePhotoRail";
import { HeadingPhoto } from "~/components/media/HeadingPhoto";
import { PhotoThumbCard } from "~/components/media/PhotoThumbCard";

export const head: DocumentHead = {
  title: "Northwest Las Vegas Real Estate | Dr. Jan Duffy - Growing Communities",
  meta: [
    {
      name: "description",
      content: "Discover Northwest Las Vegas real estate with Dr. Jan Duffy. Growing area with new construction, modern amenities, and convenient access to the Strip. Call 702-789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/northwest-las-vegas",
    },
    {
      name: "content-type",
      content: "service-area",
    },
    {
      name: "audience",
      content: "homebuyers, luxury-home-buyers, 55-plus-communities",
    },
    {
      name: "location",
      content: "Northwest Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Northwest Las Vegas Real Estate | Dr. Jan Duffy - Growing Communities",
    },
    {
      property: "og:description",
      content: "Discover Northwest Las Vegas real estate in growing area with new construction and modern amenities.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/northwest-las-vegas",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Northwest Las Vegas Real Estate | Dr. Jan Duffy - Growing Communities",
    },
    {
      name: "twitter:description",
      content: "Discover Northwest Las Vegas real estate in growing area with new construction and modern amenities.",
    },
  ],
};

export default component$(() => {

  return (
    <>
      {/* Hero Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <LocationHeroImage />
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Northwest Las Vegas Real Estate
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the growing Northwest Las Vegas area with new construction, modern amenities, and convenient access to the Strip
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Schedule Northwest Tour
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      <PagePhotoRail />

      {/* Northwest Las Vegas Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Why Choose Northwest Las Vegas?" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Northwest Las Vegas?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Northwest Las Vegas is one of the fastest-growing areas in the valley, offering new construction homes, modern amenities, and excellent value for money with convenient access to the Strip.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PhotoThumbCard
              heading="New Construction"
              description="Modern homes with the latest features, designs, and energy-efficient systems"
            />
            
            <PhotoThumbCard
              heading="Convenient Access"
              description="Easy access to the Las Vegas Strip, downtown, and major highways"
            />
            
            <PhotoThumbCard
              heading="Great Value"
              description="More home for your money compared to established areas"
            />
            
            <PhotoThumbCard
              heading="Growth Potential"
              description="Rapidly developing area with increasing property values"
            />
          </div>
        </div>
      </section>

      {/* Northwest Las Vegas Lifestyle */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="The Northwest Las Vegas Lifestyle" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">The Northwest Las Vegas Lifestyle</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Northwest Las Vegas offers the perfect combination of new construction, modern amenities, and convenient access to everything Las Vegas has to offer.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Why Choose Northwest Las Vegas?</h3>
              <ul class="space-y-4 text-gray-700">
                <li class="flex items-start">
                  <span class="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>New Construction:</strong> Modern homes with latest features, energy-efficient systems, and contemporary designs
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Great Value:</strong> More home for your money compared to established areas like Summerlin
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Growth Potential:</strong> Rapidly developing area with increasing property values and new amenities
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Convenient Access:</strong> Easy access to Las Vegas Strip, downtown, and major highways
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Parks and recreation:</strong> New parks, trails, and recreation centers
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Northwest Las Vegas Quick Facts</h3>
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="font-semibold">Population:</span>
                  <span>200,000+ residents</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Growth Rate:</span>
                  <span>Fastest growing area</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">New Communities:</span>
                  <span>10+ master-planned</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Distance to Strip:</span>
                  <span>15-25 minutes</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Medical offices:</span>
                  <span>Valley Health and MountainView nearby</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Parks:</span>
                  <span>50+ parks & trails</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Northwest Las Vegas Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Northwest Las Vegas Communities" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Northwest Las Vegas Communities</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Northwest Las Vegas's diverse neighborhoods, from master-planned communities to new construction developments.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PhotoThumbCard
              heading="Skye Canyon"
              description="Master-planned parks, trails, and new construction in northwest Las Vegas."
              href="/northwest-las-vegas"
              linkLabel="View Skye Canyon Homes →"
            />
            <PhotoThumbCard
              heading="Centennial Hills"
              description="Established streets, parks, and shopping along the 215 Beltway."
              href="/northwest-las-vegas"
              linkLabel="View Centennial Hills Homes →"
            />
            <PhotoThumbCard
              heading="Aliante"
              description="Golf-course neighborhood with parks and recreation amenities."
              href="/northwest-las-vegas"
              linkLabel="View Aliante Homes →"
            />
            <PhotoThumbCard
              heading="Tule Springs"
              description="New-construction homes and community amenities in the far northwest."
              href="/northwest-las-vegas"
              linkLabel="View Tule Springs Homes →"
            />
            <PhotoThumbCard
              heading="Desert Shores"
              description="Lakes, paths, and recreation around a waterfront neighborhood."
              href="/northwest-las-vegas"
              linkLabel="View Desert Shores Homes →"
            />
            <PhotoThumbCard
              heading="North Las Vegas"
              description="New construction and a range of price points in North Las Vegas."
              href="/northwest-las-vegas"
              linkLabel="View North Las Vegas Homes →"
            />
          </div>
        </div>
      </section>

      {/* New Construction Focus */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="New Construction in Northwest Las Vegas" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">New Construction in Northwest Las Vegas</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Northwest Las Vegas is home to numerous new construction developments offering modern homes with the latest features and designs.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">New Construction Benefits</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Latest building codes and safety features
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Energy-efficient systems and appliances
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Modern floor plans and open designs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Warranty coverage on major systems
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Customization options available
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Popular Builders</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Lennar - Modern homes with smart features
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Pulte Homes - Quality construction and design
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  KB Home - Affordable new construction
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Richmond American - Customizable floor plans
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Toll Brothers - Luxury new construction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Northwest Las Vegas Listings */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <HeadingPhoto heading="Current Northwest Las Vegas Listings" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Northwest Las Vegas Listings</h2>
            <p class="text-lg text-gray-600">Explore available homes in Northwest Las Vegas's growing communities</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF"
            priceMin={250000}
            priceMax={1500000}
          />
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy for Northwest Las Vegas */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Why Choose Dr. Jan Duffy for Northwest Las Vegas Real Estate?" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Northwest Las Vegas Real Estate?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              With comprehensive knowledge of Northwest Las Vegas's growing communities and new construction developments, Dr. Jan Duffy provides expert guidance for your home purchase.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <PhotoThumbCard
              heading="Northwest Specialist"
              description="Deep expertise in Northwest Las Vegas communities and new construction developments."
            />
            
            <PhotoThumbCard
              heading="New Construction Expert"
              description="Specialized knowledge of new construction processes and builder relationships."
            />
            
            <PhotoThumbCard
              heading="Personalized Service"
              description="Dedicated support throughout your Northwest Las Vegas home buying journey."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-gradient-to-br from-purple-600 to-purple-800 py-16 text-white">
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Northwest Las Vegas Dream Home?</h2>
          <p class="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home in Northwest Las Vegas's growing communities.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Schedule Northwest Tour
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Northwest Las Vegas Listings"
        subtitle="Call 702-789-6561"
        priceMin="250000"
        priceMax="1500000"
      />
    </>
  );
});
