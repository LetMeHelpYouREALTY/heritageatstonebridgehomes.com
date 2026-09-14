import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { cfImage, getPageMedia, gitBackupPath } from "~/config/images";

export const LocationHeroImage = component$(() => {
  const loc = useLocation();
  const media = getPageMedia(loc.url.pathname);
  const src = cfImage(media.hero, "hero");
  const fallback = gitBackupPath(media.hero);

  return (
    <>
      <img
        src={src}
        alt={media.heroAlt}
        width={1280}
        height={720}
        class="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
        onError$={(event) => {
          const el = event.target as HTMLImageElement;
          if (el && !el.src.endsWith(fallback)) {
            el.src = fallback;
          }
        }}
      />
      <div class="absolute inset-0 bg-slate-900/40 pointer-events-none" aria-hidden="true"></div>
    </>
  );
});
