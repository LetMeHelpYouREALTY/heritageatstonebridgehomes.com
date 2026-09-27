import { component$ } from "@builder.io/qwik";
import {
  AMENITY_CATEGORY_LABELS,
  CURATED_NEARBY_PLACES,
  directionsUrlForAddress,
  type AmenityCategoryId,
} from "~/config/amenity-map";

type CuratedAmenityListProps = {
  category?: AmenityCategoryId;
  showAll?: boolean;
};

export const CuratedAmenityList = component$<CuratedAmenityListProps>(
  ({ category, showAll = false }) => {
    const places = showAll
      ? CURATED_NEARBY_PLACES
      : category
        ? CURATED_NEARBY_PLACES.filter((p) => p.category === category)
        : CURATED_NEARBY_PLACES;

    return (
      <ul class="mt-4 space-y-3" aria-label="Curated nearby places">
        {places.map((place) => (
          <li
            key={place.id}
            class="rounded-lg border border-hsb-border bg-white p-4 shadow-sm"
          >
            <p class="font-semibold text-hsb-dark">{place.name}</p>
            <p class="text-sm text-hsb-muted">
              {AMENITY_CATEGORY_LABELS[place.category]} · {place.address}
            </p>
            {place.note ? <p class="mt-1 text-sm text-hsb-text">{place.note}</p> : null}
            <a
              href={directionsUrlForAddress(place.address)}
              class="mt-2 inline-block text-sm font-medium text-hsb-primary underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions on Google Maps
            </a>
          </li>
        ))}
      </ul>
    );
  },
);
