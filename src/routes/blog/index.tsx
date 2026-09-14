import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { LocationHeroImage } from "~/components/media/LocationHeroImage";
import { PagePhotoRail } from "~/components/media/PagePhotoRail";
import { CfImage } from "~/components/media/CfImage";
import { business } from "~/config/business";

export const head: DocumentHead = {
  title: "Las Vegas Real Estate Blog & Market Insights | Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Expert Las Vegas real estate insights, market analysis, and community guides by Dr. Jan Duffy. Stay informed about 55+ communities, luxury homes, and active adult living trends.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/blog",
    },
    {
      name: "content-type",
      content: "blog",
    },
    {
      name: "audience",
      content: "real-estate-buyers, 55-plus-communities, luxury-home-buyers",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Las Vegas Real Estate Blog & Market Insights | Dr. Jan Duffy",
    },
    {
      property: "og:description",
      content: "Expert Las Vegas real estate insights, market analysis, and community guides by Dr. Jan Duffy.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/blog",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Las Vegas Real Estate Blog & Market Insights | Dr. Jan Duffy",
    },
    {
      name: "twitter:description",
      content: "Expert Las Vegas real estate insights, market analysis, and community guides by Dr. Jan Duffy.",
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
            Las Vegas Real Estate Blog
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert insights, market analysis, and community guides to help you make informed real estate decisions
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Schedule Consultation
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      <PagePhotoRail />

      {/* Featured Articles */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest Las Vegas real estate trends, market insights, and community spotlights
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <CfImage
                id="pickleball-bocce"
                alt="Pickleball courts at Heritage at Stonebridge, a 55+ community in Summerlin West"
                width={640}
                height={360}
                variant="card"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <div class="text-sm text-blue-600 font-semibold mb-2">MARKET ANALYSIS</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  <a href="/market-analysis" class="hover:text-blue-600">
                    Las Vegas 55+ Communities Market Trends 2025
                  </a>
                </h3>
                <p class="text-gray-600 mb-4">
                  Discover the latest trends in active adult communities, from Heritage at Stonebridge to Sun City Summerlin, and what buyers are looking for in 2025.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Dr. Jan Duffy</span>
                  <a href="/market-analysis" class="text-blue-600 hover:text-blue-800 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <CfImage
                id="red-rock-canyon"
                alt="Red Rock Canyon sandstone cliffs near Heritage at Stonebridge in Summerlin West"
                width={640}
                height={360}
                variant="card"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <div class="text-sm text-green-600 font-semibold mb-2">COMMUNITY SPOTLIGHT</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  <a href="/red-rock-canyon-communities" class="hover:text-green-600">
                    Red Rock Canyon Luxury Living Guide
                  </a>
                </h3>
                <p class="text-gray-600 mb-4">
                  Explore the premier communities near Red Rock Canyon, featuring mountain views, outdoor recreation, and luxury amenities for active adults.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Dr. Jan Duffy</span>
                  <a href="/red-rock-canyon-communities" class="text-green-600 hover:text-green-800 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <CfImage
                id="summerlin-homes"
                alt="Summerlin West neighborhood streets near Heritage at Stonebridge, Las Vegas NV 89138"
                width={640}
                height={360}
                variant="card"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <div class="text-sm text-purple-600 font-semibold mb-2">INVESTMENT GUIDE</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  <a href="/summerlin-homes" class="hover:text-purple-600">
                    Summerlin Luxury Real Estate Investment Guide
                  </a>
                </h3>
                <p class="text-gray-600 mb-4">
                  Learn why Summerlin continues to be one of Las Vegas's most desirable areas for luxury home investments and 55+ community living.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Dr. Jan Duffy</span>
                  <a href="/summerlin-homes" class="text-purple-600 hover:text-purple-800 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <CfImage
                id="pool-spa"
                alt="Resort-style pool and spa at Heritage at Stonebridge 55+ community in Summerlin"
                width={640}
                height={360}
                variant="card"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <div class="text-sm text-red-600 font-semibold mb-2">LIFESTYLE</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  <a href="/active-adult-communities" class="hover:text-red-600">
                    Active Adult Community Amenities Guide
                  </a>
                </h3>
                <p class="text-gray-600 mb-4">
                  Discover the resort-style amenities that make 55+ communities like Heritage at Stonebridge so appealing to active adults.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Dr. Jan Duffy</span>
                  <a href="/active-adult-communities" class="text-red-600 hover:text-red-800 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <CfImage
                id="homebuyer-entry"
                alt="Front entry of a new single-story Heritage at Stonebridge home ready for a private tour"
                width={640}
                height={360}
                variant="card"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <div class="text-sm text-yellow-600 font-semibold mb-2">BUYER'S GUIDE</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  <a href="/first-time-buyers" class="hover:text-yellow-600">
                    First-Time 55+ Home Buyer Guide
                  </a>
                </h3>
                <p class="text-gray-600 mb-4">
                  Everything you need to know about buying your first home in a 55+ community, from financing to amenities to lifestyle considerations.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Dr. Jan Duffy</span>
                  <a href="/first-time-buyers" class="text-yellow-600 hover:text-yellow-800 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <CfImage
                id="henderson-community"
                alt="Residential streets in Henderson, Nevada active adult communities"
                width={640}
                height={360}
                variant="card"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <div class="text-sm text-teal-600 font-semibold mb-2">MARKET DATA</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  <a href="/henderson-real-estate" class="hover:text-teal-600">
                    Henderson Real Estate Market Analysis
                  </a>
                </h3>
                <p class="text-gray-600 mb-4">
                  In-depth analysis of Henderson's real estate market, including price trends, inventory levels, and active-adult community options.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Dr. Jan Duffy</span>
                  <a href="/henderson-real-estate" class="text-teal-600 hover:text-teal-800 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* AI-Powered Content Generator */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">AI-Powered Real Estate Insights</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Get personalized real estate insights powered by advanced AI technology
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Get Personalized Recommendations</h3>
                <p class="text-gray-600 mb-6">
                  Our AI analyzes your preferences and provides tailored recommendations for Las Vegas communities, properties, and lifestyle options.
                </p>
                <div class="space-y-4">
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span class="text-gray-700">Community matching based on lifestyle preferences</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span class="text-gray-700">Market analysis and investment insights</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span class="text-gray-700">Amenity recommendations for active adults</span>
                  </div>
                  <div class="flex items-center">
                    <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span class="text-gray-700">Price range optimization</span>
                  </div>
                </div>
              </div>
              
              <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <h4 class="text-lg font-bold text-gray-900 mb-4">Try Our AI Assistant</h4>
                <p class="text-gray-700 mb-4">
                  Ask our AI assistant about Las Vegas real estate, 55+ communities, or specific neighborhoods.
                </p>
                <div class="space-y-3">
                  <a href="/55-plus-communities" class="block w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center">
                    Ask About 55+ Communities
                  </a>
                  <a href="/market-analysis" class="block w-full bg-white text-purple-600 py-3 px-4 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors text-center">
                    Get Market Analysis
                  </a>
                  <a href="/luxury-homes" class="block w-full bg-white text-purple-600 py-3 px-4 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors text-center">
                    Find Luxury Homes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section class="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Stay Updated with Las Vegas Real Estate</h2>
          <p class="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Get the latest market insights, community spotlights, and expert advice delivered to your inbox.
          </p>
          <div class="max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${business.email}?subject=Heritage%20at%20Stonebridge%20market%20updates`}
                class="bg-white text-purple-800 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors"
              >
                Email market updates
              </a>
              <a
                href={business.telephoneHref}
                class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-800 transition-colors"
              >
                Call {business.telephoneDisplay}
              </a>
            </div>
            <p class="text-sm text-purple-200 mt-2">
              No spam. Dr. Jan Duffy sends MLS-backed Summerlin West updates on request.
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Las Vegas Listings"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="3000000"
      />
    </>
  );
});
