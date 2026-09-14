import { component$ } from "@builder.io/qwik";
import { CfImage } from "./CfImage";

type PhotoCardProps = {
  imageId: string;
  title: string;
  alt: string;
  description?: string;
};

export const PhotoCard = component$<PhotoCardProps>(({ imageId, title, alt, description }) => {
  return (
    <article class="bg-white rounded-lg shadow-lg overflow-hidden text-left">
      <CfImage
        id={imageId}
        alt={alt}
        width={640}
        height={360}
        variant="card"
        class="w-full h-48 object-cover"
      />
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {description ? <p class="text-gray-600">{description}</p> : null}
      </div>
    </article>
  );
});
