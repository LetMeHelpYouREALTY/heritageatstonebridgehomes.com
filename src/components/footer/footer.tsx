import { component$ } from "@builder.io/qwik";
import { business } from "~/config/business";

export const Footer = component$(() => {
  return (
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <p class="text-xl font-bold mb-4">{business.name}</p>
            <p class="text-gray-300 mb-4">
              Your local guide to Heritage at Stonebridge — Lennar's guard-gated 55+ community in
              Summerlin West (89138).
            </p>
            <div class="space-y-2">
              <p class="flex items-center">
                <span class="mr-2">📞</span>
                <a href={business.telephoneHref} class="hover:text-blue-400">
                  {business.telephoneDisplay}
                </a>
              </p>
              <p class="flex items-center">
                <span class="mr-2">💬</span>
                <a href={business.smsHref} class="hover:text-blue-400">
                  Text {business.telephoneDisplay}
                </a>
              </p>
              <p class="flex items-center">
                <span class="mr-2">✉️</span>
                <a href={`mailto:${business.email}`} class="hover:text-blue-400">
                  {business.email}
                </a>
              </p>
              <p class="flex items-center">
                <span class="mr-2">📍</span>
                <a
                  href={business.mapsUrl}
                  class="hover:text-blue-400 underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {business.addressDisplay}
                </a>
              </p>
              <p class="flex items-center">
                <span class="mr-2">⭐</span>
                <a
                  href={business.reviewsUrl}
                  class="hover:text-blue-400 underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Google Reviews
                </a>
              </p>
              <p class="flex items-start">
                <span class="mr-2">🕒</span>
                <span>{business.hoursDisplay}</span>
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <p class="text-xl font-bold mb-4">Service Areas</p>
            <ul class="space-y-2 text-gray-300">
              <li>
                <a
                  href="/las-vegas-real-estate"
                  class="hover:text-blue-400"
                  data-content-type="service-area"
                  data-topic="las-vegas-real-estate"
                  rel="related"
                >
                  Las Vegas Real Estate
                </a>
              </li>
              <li>
                <a
                  href="/summerlin-homes"
                  class="hover:text-blue-400"
                  data-content-type="service-area"
                  data-topic="summerlin-homes"
                  rel="related"
                >
                  Summerlin Homes
                </a>
              </li>
              <li>
                <a
                  href="/red-rock-canyon-communities"
                  class="hover:text-blue-400"
                  data-content-type="service-area"
                  data-topic="red-rock-canyon"
                  rel="related"
                >
                  Red Rock Canyon Communities
                </a>
              </li>
              <li>
                <a
                  href="/henderson-real-estate"
                  class="hover:text-blue-400"
                  data-content-type="service-area"
                  data-topic="henderson-real-estate"
                  rel="related"
                >
                  Henderson Real Estate
                </a>
              </li>
              <li>
                <a
                  href="/northwest-las-vegas"
                  class="hover:text-blue-400"
                  data-content-type="service-area"
                  data-topic="northwest-las-vegas"
                  rel="related"
                >
                  Northwest Las Vegas
                </a>
              </li>
              <li>
                <a
                  href="/boulder-city-homes"
                  class="hover:text-blue-400"
                  data-content-type="service-area"
                  data-topic="boulder-city-homes"
                  rel="related"
                >
                  Boulder City Homes
                </a>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <p class="text-xl font-bold mb-4">Property Types</p>
            <ul class="space-y-2 text-gray-300">
              <li>
                <a
                  href="/55-plus-communities"
                  class="hover:text-blue-400"
                  data-content-type="property-type"
                  data-topic="55-plus-communities"
                  rel="related"
                >
                  55+ Communities
                </a>
              </li>
              <li>
                <a
                  href="/active-adult-communities"
                  class="hover:text-blue-400"
                  data-content-type="property-type"
                  data-topic="active-adult-communities"
                  rel="related"
                >
                  Active Adult Communities
                </a>
              </li>
              <li>
                <a
                  href="/luxury-homes"
                  class="hover:text-blue-400"
                  data-content-type="property-type"
                  data-topic="luxury-homes"
                  rel="related"
                >
                  Luxury Homes
                </a>
              </li>
              <li>
                <a
                  href="/gated-communities"
                  class="hover:text-blue-400"
                  data-content-type="property-type"
                  data-topic="gated-communities"
                  rel="related"
                >
                  Gated Communities
                </a>
              </li>
              <li>
                <a
                  href="/golf-course-homes"
                  class="hover:text-blue-400"
                  data-content-type="property-type"
                  data-topic="golf-course-homes"
                  rel="related"
                >
                  Golf Course Homes
                </a>
              </li>
              <li>
                <a
                  href="/mountain-view-homes"
                  class="hover:text-blue-400"
                  data-content-type="property-type"
                  data-topic="mountain-view-homes"
                  rel="related"
                >
                  Mountain View Homes
                </a>
              </li>
            </ul>
          </div>

          {/* 55+ Community Services */}
          <div>
            <p class="text-xl font-bold mb-4">55+ Community Services</p>
            <ul class="space-y-2 text-gray-300">
              <li>
                <a
                  href="/affordable-55-plus-communities-las-vegas"
                  class="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="affordable-55-plus"
                  rel="related"
                >
                  Affordable 55+ Communities
                </a>
              </li>
              <li>
                <a
                  href="/new-55-plus-communities-las-vegas"
                  class="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="new-55-plus"
                  rel="related"
                >
                  New 55+ Communities
                </a>
              </li>
              <li>
                <a
                  href="/best-55-plus-communities-las-vegas"
                  class="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="best-55-plus"
                  rel="related"
                >
                  Best 55+ Communities
                </a>
              </li>
              <li>
                <a
                  href="/luxury-retirement-communities-las-vegas"
                  class="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="luxury-retirement"
                  rel="related"
                >
                  Luxury Retirement Communities
                </a>
              </li>
              <li>
                <a
                  href="/55-plus-communities-las-vegas-for-sale"
                  class="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="55-plus-for-sale"
                  rel="related"
                >
                  55+ Communities for Sale
                </a>
              </li>
              <li>
                <a
                  href="/55-and-over-communities-las-vegas-for-rent"
                  class="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="55-plus-for-rent"
                  rel="related"
                >
                  55+ Communities for Rent
                </a>
              </li>
              <li>
                <a
                  href="/55-plus-communities-las-vegas"
                  class="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="55-plus-general"
                  rel="related"
                >
                  55+ Communities Las Vegas
                </a>
              </li>
              <li>
                <a
                  href="/55-and-over-communities-summerlin-las-vegas"
                  class="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="55-plus-summerlin"
                  rel="related"
                >
                  55+ Communities Summerlin
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p class="text-xl font-bold mb-4">Resources</p>
            <ul class="space-y-2 text-gray-300 mb-6">
              <li>
                <a href="/about" class="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" class="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" class="hover:text-blue-400">
                  Real Estate Blog
                </a>
              </li>
              <li>
                <a href="/market-analysis" class="hover:text-blue-400">
                  Market Analysis
                </a>
              </li>
              <li>
                <a href="/neighborhood-insights" class="hover:text-blue-400">
                  Neighborhood Insights
                </a>
              </li>
              <li>
                <a href="/luxury-living-guide" class="hover:text-blue-400">
                  Luxury Living Guide
                </a>
              </li>
              <li>
                <a href="/community-comparison" class="hover:text-blue-400">
                  Community Comparison
                </a>
              </li>
              <li>
                <a href="/market-reports" class="hover:text-blue-400">
                  Las Vegas Market Reports
                </a>
              </li>
              <li>
                <a href="/community-guides" class="hover:text-blue-400">
                  Community Guides
                </a>
              </li>
              <li>
                <a href="/home-selling-guide" class="hover:text-blue-400">
                  Home Selling Guide
                </a>
              </li>
              <li>
                <a href="/first-time-buyers" class="hover:text-blue-400">
                  First Time Buyers
                </a>
              </li>
              <li>
                <a href="/testimonials" class="hover:text-blue-400">
                  Client Testimonials
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div class="space-y-2">
              <h4 class="font-semibold">Follow Dr. Jan Duffy</h4>
              <div class="flex space-x-4">
                <a
                  href="https://www.facebook.com/DrJanDuffyRealEstate"
                  class="text-gray-300 hover:text-blue-400"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="https://www.linkedin.com/in/drjanduffy"
                  class="text-gray-300 hover:text-blue-400"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="https://www.instagram.com/drjanduffylasvegas"
                  class="text-gray-300 hover:text-blue-400"
                  aria-label="Instagram"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div class="border-t border-gray-700 mt-8 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 text-sm mb-4 md:mb-0">
              <p>
                &copy; 2026 {business.name}, Nevada Real Estate License #{business.license}
              </p>
              <p>
                {business.broker} · Serving Las Vegas, NV 89138 and Summerlin West
              </p>
            </div>
            <div class="flex space-x-6 text-sm">
              <a href="/privacy-policy" class="text-gray-400 hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="/terms-of-service" class="text-gray-400 hover:text-blue-400">
                Terms of Service
              </a>
              <a href="/sitemap" class="text-gray-400 hover:text-blue-400">
                Sitemap
              </a>
            </div>
          </div>

          <div class="mt-6 text-xs text-gray-500 leading-relaxed space-y-3">
            <p>
              Housing for older persons (55+) under the federal Housing for Older Persons Act.
              Occupancy is limited to households with at least one person 55 years of age or older,
              as permitted by law. Equal Housing Opportunity.
            </p>
            <p>
              Dr. Jan Duffy is a Las Vegas real estate expert specializing in 55+ communities,
              active adult living, luxury homes, and gated communities in Summerlin, Red Rock
              Canyon, Henderson, and Northwest Las Vegas. Serving clients in Del Webb communities,
              Sun City, Siena, The Ridges, and all premier Nevada retirement communities.
              Features MLS-backed market analysis, neighborhood insights, luxury living guides,
              and community comparisons.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});
