import { component$ } from "@builder.io/qwik";
import { imageIdForHeading, SITE_IMAGES } from "~/config/images";
import { CfImage } from "./CfImage";

type HeadingPhotoProps = {
  heading: string;
  class?: string;
};

export const HeadingPhoto = component$<HeadingPhotoProps>(({ heading, class: className }) => {
  const id = imageIdForHeading(heading);
  const img = SITE_IMAGES[id] ?? SITE_IMAGES["heritage-stonebridge-hero"];

  return (
    <figure class={className ?? "mb-6 overflow-hidden rounded-xl"}>
      <CfImage
        id={id}
        alt={img.alt}
        width={1280}
        height={720}
        variant="hero"
        class="w-full h-52 md:h-64 object-cover"
      />
      <figcaption class="sr-only">
        {heading} at Heritage at Stonebridge, Summerlin West, Las Vegas NV 89138
      </figcaption>
    </figure>
  );
});
