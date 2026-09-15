import { component$ } from "@builder.io/qwik";
import { imageIdForHeading, SITE_IMAGES } from "~/config/images";
import { CfImage } from "./CfImage";

type PhotoThumbCardProps = {
  heading: string;
  description: string;
  href: string;
  linkLabel: string;
};

export const PhotoThumbCard = component$<PhotoThumbCardProps>(
  ({ heading, description, href, linkLabel }) => {
    const id = imageIdForHeading(heading);
    const img = SITE_IMAGES[id] ?? SITE_IMAGES["heritage-stonebridge-hero"];

    return (
      <article class="bg-white rounded-lg shadow-lg overflow-hidden">
        <CfImage
          id={id}
          alt={`${heading} — ${img.alt}`}
          width={640}
          height={360}
          variant="card"
          class="w-full h-40 object-cover"
        />
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-3">{heading}</h3>
          <p class="text-gray-600 mb-4">{description}</p>
          <a href={href} class="text-blue-600 hover:text-blue-800 font-semibold">
            {linkLabel}
          </a>
        </div>
      </article>
    );
  }
);
