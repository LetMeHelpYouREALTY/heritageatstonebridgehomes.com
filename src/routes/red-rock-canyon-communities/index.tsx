import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";
import { LocationHeroImage } from "~/components/media/LocationHeroImage";
import { PagePhotoRail } from "~/components/media/PagePhotoRail";
import { HeadingPhoto } from "~/components/media/HeadingPhoto";
import { PhotoThumbCard } from "~/components/media/PhotoThumbCard";

export const head: DocumentHead = {
  title: "Red Rock Canyon Communities | Dr. Jan Duffy - Mountain View Homes",
  meta: [
    {
      name: "description",
      content: "Discover luxury homes near Red Rock Canyon with Dr. Jan Duffy. Stunning mountain views, outdoor recreation, and premier communities in Las Vegas's most scenic area. Call 702-789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/red-rock-canyon-communities",
    },
    {
      name: "content-type",
      content: "service-area",
    },
    {
      name: "audience",
      content: "luxury-home-buyers, outdoor-enthusiasts",
    },
    {
      name: "location",
      content: "Red Rock Canyon, Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Red Rock Canyon Communities | Dr. Jan Duffy - Mountain View Homes",
    },
    {
      property: "og:description",
      content: "Discover luxury homes near Red Rock Canyon with stunning mountain views and outdoor recreation opportunities.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/red-rock-canyon-communities",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Red Rock Canyon Communities | Dr. Jan Duffy - Mountain View Homes",
    },
    {
      name: "twitter:description",
      content: "Discover luxury homes near Red Rock Canyon with stunning mountain views and outdoor recreation opportunities.",
    },
  ],
};

export default component$(() => {

  return (
    <>
      {/* Hero Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white py-20">
        <LocationHeroImage />
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Red Rock Canyon Communities
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover luxury living with stunning mountain views near Red Rock Canyon National Conservation Area
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-red-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-100 transition-colors shadow-lg inline-block text-center">
              Schedule Mountain Tour
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      <PagePhotoRail />

      {/* Red Rock Canyon Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Living Near Red Rock Canyon" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Living Near Red Rock Canyon</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the natural beauty of Red Rock Canyon while enjoying luxury amenities and stunning mountain views. These premier communities offer the perfect blend of outdoor recreation and sophisticated living.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PhotoThumbCard
              heading="Mountain Views"
              description="Red Rock Canyon and Spring Mountains from west-valley ridgelines."
            />
            <PhotoThumbCard
              heading="Outdoor Recreation"
              description="Hiking paths and scenic drives minutes from Red Rock Canyon."
            />
            <PhotoThumbCard
              heading="Golf Courses"
              description="Championship golf with desert mountains as the backdrop."
            />
            <PhotoThumbCard
              heading="Gated Communities"
              description="Guard-gated streets and private amenities in Summerlin West."
            />
          </div>
        </div>
      </section>

      {/* Red Rock Canyon Lifestyle */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="The Red Rock Canyon Lifestyle" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">The Red Rock Canyon Lifestyle</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Living near Red Rock Canyon offers the ultimate combination of natural beauty, outdoor adventure, and luxury amenities in Las Vegas's most scenic area.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Why Choose Red Rock Canyon Area?</h3>
              <ul class="space-y-4 text-gray-700">
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Natural Beauty:</strong> Stunning red rock formations and mountain views create a unique desert landscape
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Outdoor Recreation:</strong> Hiking, rock climbing, mountain biking, and scenic drives right outside your door
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Luxury Communities:</strong> Premier neighborhoods with custom homes and resort-style amenities
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Privacy & Exclusivity:</strong> Gated communities with large lots and stunning views
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Convenient Access:</strong> Minutes to Summerlin amenities while maintaining natural serenity
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Red Rock Canyon Quick Facts</h3>
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="font-semibold">Size:</span>
                  <span>195,819 acres</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Established:</span>
                  <span>1990</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Trails:</span>
                  <span>30+ hiking trails</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Elevation:</span>
                  <span>3,000-8,000 ft</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Distance from Vegas:</span>
                  <span>12-20 miles</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Annual Visitors:</span>
                  <span>3+ million</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Rock Canyon Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Premier Red Rock Canyon Communities" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Premier Red Rock Canyon Communities</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover luxury communities that offer the perfect combination of natural beauty, outdoor recreation, and sophisticated amenities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PhotoThumbCard
              heading="Heritage at Stonebridge"
              description="Guard-gated 55+ community with Red Rock Canyon views and resort amenities."
              href="/homes-for-sale-stonebridge-summerlin"
              linkLabel="View Stonebridge Homes →"
            />
            <PhotoThumbCard
              heading="The Ridges"
              description="Custom hilltop estates with exclusive golf access in Summerlin West."
              href="/luxury-homes"
              linkLabel="View Ridges Homes →"
            />
            <PhotoThumbCard
              heading="Red Rock Country Club"
              description="Golf-course homes with Red Rock Canyon as the backdrop."
              href="/golf-course-homes"
              linkLabel="View Country Club Homes →"
            />
            <PhotoThumbCard
              heading="Mountain's Edge"
              description="Master-planned streets, parks, and mountain views in the southwest valley."
              href="/red-rock-canyon-communities"
              linkLabel="View Mountain's Edge Homes →"
            />
            <PhotoThumbCard
              heading="Inspirada"
              description="Contemporary Henderson homes with parks and walking paths."
              href="/henderson-active-adult-communities"
              linkLabel="View Inspirada Homes →"
            />
            <PhotoThumbCard
              heading="Rhodes Ranch"
              description="Golf-course neighborhood with resort-style clubhouse amenities."
              href="/golf-course-homes"
              linkLabel="View Rhodes Ranch Homes →"
            />
          </div>
        </div>
      </section>

      {/* Outdoor Recreation */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Outdoor Recreation Opportunities" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Outdoor Recreation Opportunities</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Living near Red Rock Canyon means having access to world-class outdoor recreation right in your backyard.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Red Rock Canyon National Conservation Area</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Over 30 miles of hiking trails
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  World-class rock climbing routes
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Scenic 13-mile scenic drive
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Wildlife viewing opportunities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Photography and nature study
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Community Amenities</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
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
                  Walking and biking trails
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Community parks and open spaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Red Rock Canyon Listings */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <HeadingPhoto heading="Current Red Rock Canyon Listings" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Red Rock Canyon Listings</h2>
            <p class="text-lg text-gray-600">Explore available homes with stunning mountain views</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF"
            priceMin={500000}
            priceMax={5000000}
          />
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy for Red Rock Canyon */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <HeadingPhoto heading="Why Choose Dr. Jan Duffy for Red Rock Canyon Real Estate?" />
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Red Rock Canyon Real Estate?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              With deep knowledge of Red Rock Canyon communities and their unique mountain lifestyle, Dr. Jan Duffy provides expert guidance for your luxury home purchase.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <PhotoThumbCard
              heading="Mountain View Specialist"
              description="Expert knowledge of communities with the best Red Rock Canyon views and access."
            />
            
            <PhotoThumbCard
              heading="Outdoor Lifestyle Expert"
              description="Understanding of outdoor recreation needs and mountain community amenities."
            />
            
            <PhotoThumbCard
              heading="Luxury Home Specialist"
              description="Experience with high-end properties and exclusive community requirements."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-gradient-to-br from-red-600 to-red-800 py-16 text-white">
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Mountain View Home?</h2>
          <p class="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home with stunning Red Rock Canyon views.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-red-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-100 transition-colors shadow-lg inline-block text-center">
              Schedule Mountain Tour
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Red Rock Canyon Listings"
        subtitle="Call 702-789-6561"
        priceMin="500000"
        priceMax="5000000"
      />
    </>
  );
});
