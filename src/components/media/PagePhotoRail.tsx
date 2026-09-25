import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { getPageMedia } from "~/config/images";
import { PhotoCard } from "./PhotoCard";

export const PagePhotoRail = component$(() => {
  const loc = useLocation();
  const media = getPageMedia(loc.url.pathname);

  return (
    <section class="bg-white py-12" aria-label="Community photos matching this page">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-6">
          {media.sections.map((section) => (
            <PhotoCard
              key={section.id}
              imageId={section.id}
              title={section.title}
              alt={section.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
