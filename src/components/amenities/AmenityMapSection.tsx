import { component$ } from "@builder.io/qwik";
import { COMMUNITY_MAP_CENTER, COMMUNITY_REGION } from "~/config/amenity-map";
import { AmenityMap } from "./AmenityMap";

type AmenityMapSectionProps = {
  title?: string;
  lede?: string;
  showCuratedList?: boolean;
  linkToFullPage?: boolean;
};

export const AmenityMapSection = component$<AmenityMapSectionProps>(
  ({
    title = `Life Near ${COMMUNITY_MAP_CENTER.name}`,
    lede = `Explore healthcare, golf, parks, grocery, and shopping around ${COMMUNITY_REGION} from the clubhouse at ${COMMUNITY_MAP_CENTER.address}.`,
    showCuratedList = false,
    linkToFullPage = true,
  }) => {
    return (
      <section class="bg-hsb-cream py-16" aria-labelledby="amenity-map-section-title">
        <div class="mx-auto max-w-6xl px-4">
          <h2 id="amenity-map-section-title" class="font-display text-3xl text-hsb-dark">
            {title}
          </h2>
          <p class="mt-3 max-w-3xl text-lg text-hsb-text">{lede}</p>
          {linkToFullPage ? (
            <p class="mt-2">
              <a
                href="/nearby-amenities"
                class="font-medium text-hsb-primary underline-offset-2 hover:underline"
              >
                View the full Nearby Amenities guide
              </a>
            </p>
          ) : null}
          <div class="mt-8">
            <AmenityMap showCuratedList={showCuratedList} />
          </div>
        </div>
      </section>
    );
  },
);
