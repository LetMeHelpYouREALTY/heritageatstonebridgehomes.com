import { component$ } from "@builder.io/qwik";
import { business } from "~/config/business";
import { GBP_FAQS } from "~/config/images";

const FAQ_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GBP_FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const GbpLocalPanel = component$(() => {
  return (
    <section class="bg-slate-50 border-t border-slate-200 py-16" aria-labelledby="gbp-local-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={FAQ_JSON_LD} />
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-10">
          <h2 id="gbp-local-heading" class="text-3xl font-bold text-gray-900 mb-3">
            Visit {business.name}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Same name, address, and phone as Google Business Profile and Google Maps — Crossbridge
            Dr, Las Vegas, NV 89138.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 items-start">
          <div class="rounded-lg overflow-hidden shadow-lg bg-white">
            <iframe
              title={`Map of ${business.name} at ${business.addressDisplay}`}
              src={business.mapsEmbedUrl}
              class="w-full h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <address class="not-italic p-6 text-gray-800 space-y-2">
              <p class="font-bold text-gray-900">{business.name}</p>
              <p>
                <a
                  href={business.mapsUrl}
                  class="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {business.addressDisplay}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href={business.telephoneHref} class="text-blue-700 font-semibold hover:underline">
                  {business.telephoneDisplay}
                </a>
              </p>
              <p>Hours: {business.hoursDisplay}</p>
              <p class="text-sm text-gray-600">
                Nevada Real Estate License #{business.license} · {business.broker}
              </p>
            </address>
          </div>

          <div>
            <div class="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
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
                class="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 text-center"
              >
                Directions
              </a>
              <a
                href={business.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 text-center"
              >
                View Google Reviews
              </a>
            </div>

            <ul class="space-y-3 text-gray-700 mb-8">
              {business.hoursLines.map((line) => (
                <li key={line} class="flex justify-between border-b border-slate-200 py-2">
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div class="space-y-4">
              {GBP_FAQS.map((item) => (
                <details key={item.question} class="bg-white rounded-lg border border-slate-200 p-4">
                  <summary class="font-semibold text-gray-900 cursor-pointer">{item.question}</summary>
                  <p class="mt-2 text-gray-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
