import { component$ } from "@builder.io/qwik";
import { cfImage, gitBackupPath, type ImageVariant } from "~/config/images";

type CfImageProps = {
  id: string;
  alt: string;
  width?: number;
  height?: number;
  class?: string;
  variant?: ImageVariant;
  priority?: boolean;
};

export const CfImage = component$<CfImageProps>(
  ({ id, alt, width = 1280, height = 720, class: className = "", variant = "public", priority = false }) => {
    const src = cfImage(id, variant);
    const fallback = gitBackupPath(id);

    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        class={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError$={(event) => {
          const el = event.target as HTMLImageElement;
          if (el && !el.src.endsWith(fallback)) {
            el.src = fallback;
          }
        }}
      />
    );
  }
);
