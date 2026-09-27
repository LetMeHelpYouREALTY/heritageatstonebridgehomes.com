/** Minimal typings for lazy-loaded Google Maps JS (Places API New). */
export {};

declare global {
  interface Window {
    google?: {
      maps: {
        importLibrary: (name: string) => Promise<unknown>;
        Map: new (
          el: HTMLElement,
          opts: Record<string, unknown>,
        ) => {
          setCenter: (c: { lat: number; lng: number }) => void;
          fitBounds: (b: unknown) => void;
        };
        InfoWindow: new (opts?: Record<string, unknown>) => {
          setContent: (html: string) => void;
          open: (opts: { map: unknown; anchor?: unknown }) => void;
          close: () => void;
        };
        LatLngBounds: new () => {
          extend: (p: { lat: number; lng: number }) => void;
        };
        Marker: new (opts?: Record<string, unknown>) => {
          setMap: (map: unknown | null) => void;
          addListener: (event: string, fn: () => void) => void;
        };
        event?: {
          clearInstanceListeners: (instance: unknown) => void;
        };
      };
    };
  }
}
