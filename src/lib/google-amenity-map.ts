import {
  AMENITY_CATEGORY_ORDER,
  COMMUNITY_MAP_CENTER,
  PLACES_PRIMARY_TYPES,
  type AmenityCategoryId,
} from "~/config/amenity-map";

const MAP_SCRIPT_ATTR = "data-heritage-amenity-gmaps";

export function getGoogleMapsApiKey(): string | undefined {
  const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  if (!key || key === "undefined" || key.trim() === "") {
    return undefined;
  }
  return key.trim();
}

export function getGoogleMapsMapId(): string | undefined {
  const id = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;
  if (!id || id === "undefined" || id.trim() === "") {
    return undefined;
  }
  return id.trim();
}

function loadMapsScript(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("No window"));
      return;
    }
    if (window.google?.maps?.importLibrary) {
      resolve();
      return;
    }
    const existing = document.querySelector(`script[${MAP_SCRIPT_ATTR}]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Maps script error")));
      return;
    }
    const script = document.createElement("script");
    script.setAttribute(MAP_SCRIPT_ATTR, "true");
    script.async = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&loading=async`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });
}

type MapInstance = {
  setCenter: (c: { lat: number; lng: number }) => void;
  fitBounds: (b: unknown) => void;
};

type MarkerLike = {
  setMap: (map: MapInstance | null) => void;
  addListener: (event: string, fn: () => void) => void;
};

export type AmenityMapController = {
  destroy: () => void;
  setCategory: (category: AmenityCategoryId) => Promise<void>;
};

function buildInfoHtml(place: {
  name: string;
  address?: string;
  rating?: number;
  mapsUrl?: string;
}): string {
  const rating =
    place.rating !== undefined
      ? `<p class="text-sm text-gray-600">Rating: ${place.rating.toFixed(1)}</p>`
      : "";
  const address = place.address
    ? `<p class="text-sm text-gray-700">${place.address}</p>`
    : "";
  const directions = place.mapsUrl
    ? `<a href="${place.mapsUrl}" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-blue-700 underline">Directions</a>`
    : "";
  return `<div class="p-1 max-w-xs"><strong>${place.name}</strong>${rating}${address}${directions}</div>`;
}

export async function initAmenityMap(
  container: HTMLElement,
  category: AmenityCategoryId,
): Promise<AmenityMapController> {
  const apiKey = getGoogleMapsApiKey();
  if (!apiKey) {
    throw new Error("No API key");
  }

  await loadMapsScript(apiKey);
  const gmaps = window.google?.maps;
  if (!gmaps?.importLibrary) {
    throw new Error("Maps unavailable");
  }

  const mapsLib = (await gmaps.importLibrary("maps")) as {
    Map: new (el: HTMLElement, opts: Record<string, unknown>) => MapInstance;
    InfoWindow: new () => {
      setContent: (html: string) => void;
      open: (opts: { map: MapInstance; anchor?: MarkerLike }) => void;
      close: () => void;
    };
    LatLngBounds: new () => { extend: (p: { lat: number; lng: number }) => void };
  };

  const mapId = getGoogleMapsMapId();
  const map = new mapsLib.Map(container, {
    center: { lat: COMMUNITY_MAP_CENTER.lat, lng: COMMUNITY_MAP_CENTER.lng },
    zoom: 13,
    mapId,
    disableDefaultUI: false,
    clickableIcons: true,
  });

  const infoWindow = new mapsLib.InfoWindow();
  const markers: MarkerLike[] = [];

  const clearMarkers = () => {
    for (const m of markers) {
      m.setMap(null);
    }
    markers.length = 0;
    infoWindow.close();
  };

  const addCommunityMarker = async () => {
    const markerLib = (await gmaps.importLibrary("marker")) as {
      AdvancedMarkerElement?: new (opts: Record<string, unknown>) => MarkerLike;
    };
    const position = { lat: COMMUNITY_MAP_CENTER.lat, lng: COMMUNITY_MAP_CENTER.lng };
    let marker: MarkerLike;
    if (mapId && markerLib.AdvancedMarkerElement) {
      marker = new markerLib.AdvancedMarkerElement({
        map,
        position,
        title: COMMUNITY_MAP_CENTER.name,
      });
    } else if (gmaps.Marker) {
      marker = new gmaps.Marker({
        map,
        position,
        title: COMMUNITY_MAP_CENTER.name,
      });
    } else {
      return;
    }
    marker.addListener("click", () => {
      infoWindow.setContent(
        buildInfoHtml({
          name: COMMUNITY_MAP_CENTER.name,
          address: COMMUNITY_MAP_CENTER.address,
          mapsUrl: `https://www.google.com/maps?q=${COMMUNITY_MAP_CENTER.lat},${COMMUNITY_MAP_CENTER.lng}`,
        }),
      );
      infoWindow.open({ map, anchor: marker });
    });
    markers.push(marker);
  };

  const searchCategory = async (cat: AmenityCategoryId) => {
    clearMarkers();
    await addCommunityMarker();

    const placesLib = (await gmaps.importLibrary("places")) as {
      Place?: {
        searchNearby: (req: Record<string, unknown>) => Promise<{ places?: unknown[] }>;
      };
    };

    const types = PLACES_PRIMARY_TYPES[cat];
    const bounds = new mapsLib.LatLngBounds();
    bounds.extend({ lat: COMMUNITY_MAP_CENTER.lat, lng: COMMUNITY_MAP_CENTER.lng });

    if (placesLib.Place?.searchNearby) {
      try {
        const { places } = await placesLib.Place.searchNearby({
          fields: [
            "displayName",
            "location",
            "formattedAddress",
            "googleMapsURI",
            "rating",
          ],
          locationRestriction: {
            center: { lat: COMMUNITY_MAP_CENTER.lat, lng: COMMUNITY_MAP_CENTER.lng },
            radius: 8000,
          },
          includedPrimaryTypes: types,
          maxResultCount: 12,
        });

        for (const raw of places ?? []) {
          const place = raw as {
            location?: { lat: () => number; lng: () => number };
            displayName?: string;
            formattedAddress?: string;
            googleMapsURI?: string;
            rating?: number;
          };
          const lat = place.location?.lat?.();
          const lng = place.location?.lng?.();
          if (lat === undefined || lng === undefined) continue;

          let marker: MarkerLike;
          if (gmaps.Marker) {
            marker = new gmaps.Marker({
              map,
              position: { lat, lng },
              title: place.displayName ?? "Place",
            });
          } else {
            continue;
          }

          marker.addListener("click", () => {
            infoWindow.setContent(
              buildInfoHtml({
                name: place.displayName ?? "Place",
                address: place.formattedAddress,
                rating: place.rating,
                mapsUrl: place.googleMapsURI,
              }),
            );
            infoWindow.open({ map, anchor: marker });
          });
          markers.push(marker);
          bounds.extend({ lat, lng });
        }
      } catch {
        // Places search can fail without billing or API enablement; community marker remains.
      }
    }

    if (markers.length > 1) {
      map.fitBounds(bounds);
    } else {
      map.setCenter({ lat: COMMUNITY_MAP_CENTER.lat, lng: COMMUNITY_MAP_CENTER.lng });
    }
  };

  await searchCategory(category);

  return {
    destroy: () => {
      clearMarkers();
      container.replaceChildren();
    },
    setCategory: searchCategory,
  };
}

export const defaultAmenityCategory: AmenityCategoryId = AMENITY_CATEGORY_ORDER[0];
