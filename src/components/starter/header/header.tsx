import { component$, useSignal } from "@builder.io/qwik";
import { NapBar } from "~/components/nap/NapBar";
import { business } from "~/config/business";
import styles from "./header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/55-plus-communities", label: "55+ Communities" },
  { href: "/homes-for-sale-stonebridge-summerlin", label: "Stonebridge Homes" },
  { href: "/real-estate", label: "All Listings" },
  { href: "/contact", label: "Contact" },
] as const;

export default component$(() => {
  const menuOpen = useSignal(false);

  return (
    <header class={`${styles.header} sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200`}>
      <NapBar />
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title={business.name}>
            <div class="flex items-center space-x-2">
              <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-2">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div class="text-left max-w-[11rem] sm:max-w-xs lg:max-w-sm">
                <div class="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                  {business.name}
                </div>
              </div>
            </div>
          </a>
        </div>

        <nav class="hidden lg:flex items-center space-x-8" aria-label="Primary">
          <ul class="flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} class="text-gray-800 hover:text-blue-600 font-semibold transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div class="flex items-center space-x-3">
            <a
              href={business.telephoneHref}
              class="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <span>{business.telephoneDisplay}</span>
            </a>
            <a
              href={business.tourUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
            >
              Schedule Tour
            </a>
          </div>
        </nav>

        <button
          type="button"
          class="lg:hidden inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-gray-800"
          aria-expanded={menuOpen.value}
          aria-controls="mobile-nav"
          aria-label={menuOpen.value ? "Close menu" : "Open menu"}
          onClick$={() => {
            menuOpen.value = !menuOpen.value;
          }}
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen.value ? (
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen.value ? (
        <div id="mobile-nav" class="lg:hidden border-t border-gray-200 bg-white px-4 pb-4">
          <ul class="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  class="block py-3 text-gray-800 font-semibold border-b border-gray-100"
                  onClick$={() => {
                    menuOpen.value = false;
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div class="flex flex-col gap-2 pt-2">
            <a
              href={business.telephoneHref}
              class="bg-green-600 text-white text-center px-4 py-3 rounded-lg font-semibold"
            >
              Call {business.telephoneDisplay}
            </a>
            <a
              href={business.tourUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="bg-blue-700 text-white text-center px-4 py-3 rounded-lg font-semibold"
            >
              Schedule Tour
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="border border-gray-300 text-gray-800 text-center px-4 py-3 rounded-lg font-semibold"
            >
              Get Directions
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
});
