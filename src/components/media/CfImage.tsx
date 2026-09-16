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
  sizes?: string;
};

export const CfImage = component$<CfImageProps>(
  ({
    id,
    alt,
    width = 1280,
    height = 720,
    class: className = "",
    variant = "public",
    priority = false,
    sizes,
  }) => {
    const src = cfImage(id, variant);
    const fallback = gitBackupPath(id);
    const srcSet = `${cfImage(id, "thumbnail")} 400w, ${cfImage(id, "card")} 800w, ${cfImage(id, "hero")} 1280w`;

    return (
      <img
        src={src}
        srcset={srcSet}
        sizes={sizes ?? (priority ? "100vw" : "(max-width: 768px) 100vw, 50vw")}
        alt={alt}
        width={width}
        height={height}
        class={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError$={(event) => {
          const el = event.target as HTMLImageElement;
          if (!el || el.dataset.cfFallback === "1") return;
          el.dataset.cfFallback = "1";
          el.removeAttribute("srcset");
          el.src = fallback;
        }}
      />
    );
  }
);
