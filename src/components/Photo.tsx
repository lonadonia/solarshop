/* eslint-disable @next/next/no-img-element -- static export: images come pre-sized from the photo CDN */
import type { PhotoData } from "@/content/photos";

const WIDTHS = [480, 768, 1080, 1440, 1920, 2560];

function withWidth(src: string, w: number) {
  if (!src.startsWith("https://images.unsplash.com/")) return src;
  return `${src}?auto=format&fit=crop&q=78&w=${w}`;
}

type PhotoProps = {
  photo: PhotoData;
  sizes: string;
  className?: string;
  priority?: boolean;
  maxWidth?: number;
};

/** Responsive photo with a srcset, so phones download a small file and desktops a sharp one. */
export function Photo({ photo, sizes, className, priority = false, maxWidth = 2560 }: PhotoProps) {
  const widths = WIDTHS.filter((w) => w <= maxWidth);
  const remote = photo.src.startsWith("https://images.unsplash.com/");
  return (
    <img
      src={withWidth(photo.src, Math.min(1440, maxWidth))}
      srcSet={photo.srcSet ?? (remote ? widths.map((w) => `${withWidth(photo.src, w)} ${w}w`).join(", ") : undefined)}
      sizes={photo.srcSet || remote ? sizes : undefined}
      alt={photo.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
      style={photo.focus ? { objectPosition: photo.focus } : undefined}
    />
  );
}
