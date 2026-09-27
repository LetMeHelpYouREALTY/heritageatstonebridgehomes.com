import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import {
  AMENITY_CATEGORY_LABELS,
  AMENITY_CATEGORY_ORDER,
  mapsEmbedFallbackUrl,
  type AmenityCategoryId,
} from "~/config/amenity-map";
import {
  defaultAmenityCategory,
  getGoogleMapsApiKey,
  initAmenityMap,
  type AmenityMapController,
} from "~/lib/google-amenity-map";
import { CuratedAmenityList } from "./CuratedAmenityList";

type AmenityMapProps = {
  /** When true, show the full curated list under the fallback map. */
  showCuratedList?: boolean;
  mapHeightClass?: string;
};

export const AmenityMap = component$<AmenityMapProps>(
  ({ showCuratedList = true, mapHeightClass = "h-[min(70vh,520px)] min-h-[420px]" }) => {
    const activeCategory = useSignal<AmenityCategoryId>(defaultAmenityCategory);
    const useInteractive = useSignal(false);
    const mapFailed = useSignal(false);
    const mapController = useSignal<AmenityMapController | null>(null);
    const mapContainerId = "heritage-amenity-map-canvas";

    useVisibleTask$(({ cleanup }) => {
      let observer: IntersectionObserver | null = null;
      let cancelled = false;

      const root = document.getElementById(`${mapContainerId}-root`);
      const canvas = document.getElementById(mapContainerId);
      if (!root || !canvas) return;

      const apiKey = getGoogleMapsApiKey();
      if (!apiKey) {
        useInteractive.value = false;
        return;
      }

      const boot = async () => {
        if (cancelled || mapController.value) return;
        try {
          const controller = await initAmenityMap(canvas, activeCategory.value);
          mapController.value = controller;
          useInteractive.value = true;
          mapFailed.value = false;
        } catch {
          useInteractive.value = false;
          mapFailed.value = true;
        }
      };

      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            boot();
            observer?.disconnect();
          }
        },
        { rootMargin: "120px" },
      );
      observer.observe(root);

      cleanup(() => {
        cancelled = true;
        observer?.disconnect();
        mapController.value?.destroy();
        mapController.value = null;
      });
    });

    const showFallback = !useInteractive.value || mapFailed.value;

    return (
      <div id={`${mapContainerId}-root`} class="w-full">
        <div
          class="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter nearby amenities by category"
        >
          {AMENITY_CATEGORY_ORDER.map((id) => {
            const pressed = activeCategory.value === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={pressed}
                aria-pressed={pressed}
                aria-label={`Show ${AMENITY_CATEGORY_LABELS[id]} near Heritage at Stonebridge`}
                class={[
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  pressed
                    ? "bg-hsb-primary text-white"
                    : "border border-hsb-border bg-white text-hsb-dark hover:bg-hsb-sand",
                ].join(" ")}
                onClick$={async () => {
                  activeCategory.value = id;
                  const controller = mapController.value;
                  if (controller) {
                    try {
                      await controller.setCategory(id);
                    } catch {
                      mapFailed.value = true;
                      useInteractive.value = false;
                    }
                  }
                }}
              >
                {AMENITY_CATEGORY_LABELS[id]}
              </button>
            );
          })}
        </div>

        <div
          class={[
            "relative mt-4 w-full overflow-hidden rounded-2xl border border-hsb-border bg-hsb-sand",
            mapHeightClass,
          ].join(" ")}
          aria-label="Map of nearby amenities around Heritage at Stonebridge"
        >
          <div
            id={mapContainerId}
            class={[
              "absolute inset-0",
              showFallback ? "pointer-events-none opacity-0" : "opacity-100",
            ].join(" ")}
            aria-hidden={showFallback}
          />
          {showFallback ? (
            <iframe
              title="Map centered on Heritage at Stonebridge clubhouse in Summerlin West, Las Vegas"
              src={mapsEmbedFallbackUrl()}
              class="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : null}
        </div>

        {showFallback && showCuratedList ? (
          <div class="mt-6">
            <p class="text-sm text-hsb-muted">
              {getGoogleMapsApiKey()
                ? "Interactive markers load when the map is in view. Featured places for this category:"
                : "Set VITE_GOOGLE_MAPS_API_KEY in Vercel for live Places markers. Featured places:"}
            </p>
            <CuratedAmenityList category={activeCategory.value} />
          </div>
        ) : null}
      </div>
    );
  },
);
