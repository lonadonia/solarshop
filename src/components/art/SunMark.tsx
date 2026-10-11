type SunMarkProps = {
  id: string;
  className?: string;
  /** Colour of the curved gap between sun and hills (match the background). */
  gap?: string;
  title?: string;
};

/**
 * Vector redraw of the sun-over-hills "o" from the SolarShop logo.
 * Used inside headlines and as a small brand device.
 */
export function SunMark({ id, className, gap = "var(--color-daylight)", title }: SunMarkProps) {
  const clip = `${id}-clip`;
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        <clipPath id={clip}>
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="100" height="100" fill="var(--color-gold)" />
        <path d="M-4 57 C 22 47 60 44 104 52 L104 104 L-4 104 Z" fill={gap} />
        <path d="M-4 63 C 22 53 60 50 104 58 L104 104 L-4 104 Z" fill="var(--color-leaf)" />
        <path d="M22 104 C 40 84 68 66 104 62 L104 104 Z" fill="var(--color-meadow)" />
      </g>
    </svg>
  );
}
